import { appState } from "./state";

import Graphic from "@arcgis/core/Graphic";

export function drawLines(features, minValue, selectedStateName, selectedCountyAbbr) {
    appState.linesLayer.removeAll();
    appState.pointsLayer.removeAll();

    const nValues = features.filter(f => f.attributes.nValue >= minValue).map(f => f.attributes.nValue);
    //const minN = Math.min(...nValues);
    //const maxN = Math.max(...nValues);

    if (appState.geoLevel === "county") {
      const selectedStateAbbr = appState.selectedCountyAbbr;
      let totalMoved = 0;
      let stayedInState = 0;
      let fromOutOfState = 0;
    
      if (appState.flowDirection === "outflow") {
        features.forEach((feature) => {
          const n = feature.attributes.nValue;
          if (n > 0) {
            totalMoved += n;
            if (feature.attributes["y2_state"] === selectedStateAbbr) {
              stayedInState += n;
            } else {
              fromOutOfState += n;
            }
          }
        });
        appState.countyMoveStats = {
          totalMoved,
          stayedInState,
          leftState: fromOutOfState
        };
      } else {
        // Inflow: people moving INTO the selected county
        features.forEach((feature) => {
          const n = feature.attributes.nValue;
          if (n > 0) {
            totalMoved += n;
            if (feature.attributes["y1_state"] === selectedStateAbbr) {
              stayedInState += n;
            } else {
              fromOutOfState += n;
            }
          }
        });
        appState.countyMoveStats = {
          totalMoved,
          fromInState: stayedInState,
          fromOutOfState: fromOutOfState
        };
      }
    }

    const lineGraphics = [];
    const pointGraphics = [];

    features.forEach((feature) => {
      const n = feature.attributes.nValue;
      if (n < minValue || n <= 0) return;

      let originX = feature.attributes.Origin_X;
      let originY = feature.attributes.Origin_Y;
      let destinationX = feature.attributes.Destination_X;
      let destinationY = feature.attributes.Destination_Y;

      if (appState.flowDirection === "inflow") {
        [originX, originY, destinationX, destinationY] = [destinationX, destinationY, originX, originY];
      }

      if (originX === destinationX && originY === destinationY) {
        pointGraphics.push(new Graphic({
          geometry: {
            type: "point",
            x: originX,
            y: originY,
            spatialReference: { wkid: 3857 }
          },
          symbol: {
            type: "simple-marker",
            style: "circle",
            color: [128, 128, 128, 0.7],
            size: 14,
            outline: { color: [0, 0, 0, 0.7], width: 2 }
          },
          attributes: { ...feature.attributes, selectedStateName, flowDirection: appState.flowDirection },
          popupTemplate: {
            title: `${selectedStateName}`,
            content: `<b>${n.toLocaleString()}</b> people did not move out of <b>${selectedStateName}</b>.`
          }
        }));
        return;
      }

      const line = {
        type: "polyline",
        paths: [
          [originX, originY],
          [destinationX, destinationY]
        ],
        spatialReference: { wkid: 3857 }
      };

      const width = Math.min(8, Math.max(0.5, Math.log10(n) - 2));
      let color = appState.flowDirection === "outflow"
        ? [25, 72, 130, 255]
        : [25, 130, 67, 255];

      let arrowGeometry, frame;
      if (appState.flowDirection === "inflow") {
        arrowGeometry = [
          [0, 0],
          [8, -5.47],
          [8, 5.6],
          [0, 0]
        ];
        frame = { xmin: 24, ymin: -6, xmax: -6, ymax: 6 };
      } else {
        arrowGeometry = [
          [0, 0],
          [-8, -5.47],
          [-8, 5.6],
          [0, 0]
        ];
        frame = { xmin: -12, ymin: -6, xmax: 0, ymax: 6 };
      }

      const symbolLayers = [
        {
          type: "CIMSolidStroke",
          enable: true,
          width: width,
          color: color
        }
      ];

      // Add arrow for both inflow and outflow
      symbolLayers.push({
        type: "CIMVectorMarker",
        enable: true,
        size: 10,
        markerPlacement: {
          type: "CIMMarkerPlacementAlongLineSameSize",
          endings: "WithMarkers",
          placementTemplate: [100],
          angleToLine: true,
          controlPointPlacement: "withControlPoint"
        },
        frame: frame,
        markerGraphics: [
          {
            type: "CIMMarkerGraphic",
            geometry: { rings: [arrowGeometry] },
            symbol: {
              type: "CIMPolygonSymbol",
              symbolLayers: [
                {
                  type: "CIMSolidFill",
                  enable: true,
                  color: color
                }
              ]
            }
          }
        ]
      });

      const arrowSymbol = {
        type: "cim",
        data: {
          type: "CIMSymbolReference",
          symbol: {
            type: "CIMLineSymbol",
            symbolLayers: symbolLayers
          }
        }
      };

      let popupTitle, popupContent;
      if (appState.geoLevel === "county") {
        let originCounty, originAbbr, destCounty, destAbbr;
        if (appState.flowDirection === "outflow") {
          originCounty = appState.selectedCountyName || "Unknown County";
          originAbbr = appState.selectedCountyAbbr || "Unknown State";
          destCounty = feature.attributes["y2_countyname"] || "Unknown County";
          destAbbr = feature.attributes["y2_state"] || "Unknown State";
        } else {
          originCounty = feature.attributes["y1_countyname"] || "Unknown County";
          originAbbr = feature.attributes["y1_state"] || "Unknown State";
          destCounty = appState.selectedCountyName || "Unknown County";
          destAbbr = appState.selectedCountyAbbr || "Unknown State";
        }
        popupTitle = `${originCounty}, ${originAbbr} to ${destCounty}, ${destAbbr}`;
        popupContent = `<b>${n.toLocaleString()}</b> people moved from <b>${originCounty}, ${originAbbr}</b> to <b>${destCounty}, ${destAbbr}</b>.<br><br>Adjusted Gross Income: <b>$${feature.attributes.AGI ? feature.attributes.AGI.toLocaleString() : ""}</b>`;
      } else {
        if (appState.flowDirection === "outflow") {
          popupTitle = `${selectedStateName} to ${feature.attributes.destinationName}`;
          popupContent = `<b>${n.toLocaleString()}</b> people moved from <b>${selectedStateName}</b> to <b>${feature.attributes.destinationName}</b>.<br><br>Adjusted Gross Income: <b>$${feature.attributes.AGI ? feature.attributes.AGI.toLocaleString() : ""}</b>.`;
        } else {
          popupTitle = `${feature.attributes.originName} to ${selectedStateName}`;
          popupContent = `<b>${n.toLocaleString()}</b> people moved from <b>${feature.attributes.originName}</b> to <b>${selectedStateName}</b>.<br><br>Adjusted Gross Income: <b>$${feature.attributes.AGI ? feature.attributes.AGI.toLocaleString() : ""}</b>.`;
        }
        if (appState.geoLevel === "county" && appState.countyMoveStats) {
          if (appState.flowDirection === "outflow") {
            popupContent += `<hr>
              <b>Of all people who moved from ${appState.selectedCountyName}, ${appState.selectedCountyAbbr}:</b><br>
              <ul>
                <li><b>${appState.countyMoveStats.stayedInState.toLocaleString()}</b> moved to another county <u>within ${appState.selectedCountyAbbr}</u></li>
                <li><b>${appState.countyMoveStats.leftState.toLocaleString()}</b> moved <u>out of state</u></li>
                <li><b>${appState.countyMoveStats.totalMoved.toLocaleString()}</b> total moved out</li>
              </ul>`;
          } else {
            popupContent += `<hr>
              <b>Of all people who moved into ${appState.selectedCountyName}, ${appState.selectedCountyAbbr}:</b><br>
              <ul>
                <li><b>${appState.countyMoveStats.fromInState.toLocaleString()}</b> came from another county <u>within ${appState.selectedCountyAbbr}</u></li>
                <li><b>${appState.countyMoveStats.fromOutOfState.toLocaleString()}</b> came <u>from out of state</u></li>
                <li><b>${appState.countyMoveStats.totalMoved.toLocaleString()}</b> total moved in</li>
              </ul>`;
          }
        }
      }

      lineGraphics.push(new Graphic({
        geometry: line,
        symbol: arrowSymbol,
        attributes: { ...feature.attributes, selectedStateName, flowDirection: appState.flowDirection },
        popupTemplate: {
          title: popupTitle,
          content: popupContent
        }
      }));
    });

    // Batch add graphics
    if (lineGraphics.length) appState.linesLayer.addMany(lineGraphics);
    if (pointGraphics.length) appState.pointsLayer.addMany(pointGraphics);
  }


export function highlightFeature(feature, view) {
  if (appState.highlightHandle) {
    appState.highlightHandle.remove();
    appState.highlightHandle = null;
  }

  if (appState.linesLayer) {
    appState.linesLayer.graphics = appState.linesLayer.graphics.filter(
      g => !g.attributes?.isCustomHighlight
    );
  }

  if (feature.geometry.type === "polygon") {
    view.highlightOptions = {
      color: [255, 255, 0, 1],
      fillOpacity: 0.2,
      haloOpacity: 0.8
    };
  } else if (feature.geometry.type === "polyline") {
    view.highlightOptions = {
      color: [0, 255, 255, 1],
      haloOpacity: 0.8
    };
  } else if (feature.geometry.type === "point") {
    view.highlightOptions = {
      color: [255, 0, 255, 1],
      haloOpacity: 0.8
    };
  }

  if (feature.layer && (feature.layer.type === "feature" || feature.layer.type === "graphics")) {
    view.whenLayerView(feature.layer).then(layerView => {
      appState.highlightHandle = layerView.highlight(feature);
    });
  }
}

export function updateMigrationSummaryPanel(migrationSummaryDiv) {
  const summaryDiv = migrationSummaryDiv
  if (!summaryDiv) return;

  if (appState.geoLevel === "county" && appState.countyMoveStats) {
    let summaryHtml = "";
    if (appState.flowDirection === "outflow") {
      summaryHtml = `
        <hr>
        <b>Of all people who moved from ${appState.selectedCountyName}, ${appState.selectedCountyAbbr}:</b><br>
        <ul>
          <li><b>${appState.countyMoveStats.stayedInState.toLocaleString()}</b> moved to another county <u>within ${appState.selectedCountyAbbr}</u></li>
          <li><b>${appState.countyMoveStats.leftState.toLocaleString()}</b> moved <u>out of state</u></li>
          <li><b>${appState.countyMoveStats.totalMoved.toLocaleString()}</b> total moved out</li>
        </ul>`;
    } else {
      summaryHtml = `
        <hr>
        <b>Of all people who moved into ${appState.selectedCountyName}, ${appState.selectedCountyAbbr}:</b><br>
        <ul>
          <li><b>${appState.countyMoveStats.fromInState.toLocaleString()}</b> came from another county <u>within ${appState.selectedCountyAbbr}</u></li>
          <li><b>${appState.countyMoveStats.fromOutOfState.toLocaleString()}</b> came <u>from out of state</u></li>
          <li><b>${appState.countyMoveStats.totalMoved.toLocaleString()}</b> total moved in</li>
        </ul>`;
    }
    summaryDiv.innerHTML = summaryHtml;
  } else {
    summaryDiv.innerHTML = "";
  }
}