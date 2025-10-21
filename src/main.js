import "./style.css";
import "@arcgis/core/assets/esri/themes/light/main.css";
import "@esri/calcite-components/dist/calcite/calcite.css";
import { defineCustomElements } from "@esri/calcite-components/dist/loader";
defineCustomElements(window);
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-layer-list";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-basemap-gallery";
import "@arcgis/map-components/components/arcgis-bookmarks";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-feature";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import MapView from "@arcgis/core/views/MapView";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";
import * as webMercatorUtils from "@arcgis/core/geometry/support/webMercatorUtils";

const mainMap = document.getElementById("mainMap");
const featureInfoDiv = document.getElementById("feature-info");
const migrationSummaryDiv = document.getElementById("migration-summary");

// --- Centralized App State ---
const appState = {
  allRelatedFeatures: [],
  minValue: 2500,
  highlightHandle: null,
  activeWidget: null,
  actionBarExpanded: false,
  alaskaView: null,
  hawaiiView: null,
  linesLayer: null,
  pointsLayer: null,
  flowDirection: "outflow", // or inflow
  selectedStateName: null,
  selectedLineAttributes: null,
  selectedStatePair: null,
  lastPolygonGraphic: null,
  geoLevel: "state" // or "county"
};

mainMap.addEventListener("arcgisViewReadyChange", async (evt) => {
  mainMap.view.constraints = { minZoom: 1, maxZoom: 12 };
  mainMap.view.padding = { left: 49 };

  // --- UI State ---
  const handleActionBarClick = ({ target }) => {
    if (target.tagName !== "CALCITE-ACTION") return;
    if (target.id === "info-action") return;

    document.querySelectorAll('calcite-shell-panel[slot="panel-start"] calcite-panel').forEach(panelEl => {
      panelEl.closed = panelEl.dataset.panelId !== target.dataset.actionId;
    });
    document.querySelectorAll("calcite-action").forEach(actionEl => {
      actionEl.active = false;
    });

    const nextWidget = target.dataset.actionId;
    if (nextWidget !== appState.activeWidget) {
      document.querySelector(`[data-action-id=${nextWidget}]`).active = true;
      const panel = document.querySelector(`[data-panel-id=${nextWidget}]`);
      if (panel) {
        panel.closed = false;
        panel.setFocus();
      }
      appState.activeWidget = nextWidget;
    } else {
      appState.activeWidget = null;
    }
  };

  document.querySelectorAll('calcite-shell-panel[slot="panel-start"] calcite-panel').forEach(panelEl => {
    panelEl.addEventListener("calcitePanelClose", () => {
      const actionEl = document.querySelector(`[data-action-id=${appState.activeWidget}]`);
      if (actionEl) {
        actionEl.active = false;
        actionEl.setFocus();
      }
      appState.activeWidget = null;
    });
  });

  document.querySelector("calcite-action-bar").addEventListener("click", handleActionBarClick);

  document.addEventListener("calciteActionBarToggle", event => {
    appState.actionBarExpanded = !appState.actionBarExpanded;
    mainMap.view.padding = { left: appState.actionBarExpanded ? 135 : 49 };
  });

  document.querySelector("calcite-shell").hidden = false;
  document.querySelector("calcite-loader").hidden = true;

  // Add graphics layers for migration lines and points
  appState.linesLayer = new GraphicsLayer({ listMode: "hide" });
  appState.pointsLayer = new GraphicsLayer({ listMode: "hide" });
  mainMap.map.add(appState.linesLayer);
  mainMap.map.add(appState.pointsLayer);

  // --- Slider and Buttons ---
  const slider = document.getElementById("migration-slider");
  if (slider) {
    slider.addEventListener("calciteSliderInput", (event) => {
      appState.minValue = event.target.valueAsNumber || event.target.value;
      if (appState.allRelatedFeatures.length > 0) {
        drawLines(appState.allRelatedFeatures, appState.minValue, appState.selectedStateName);
      }
    });

    slider.labelFormatter = function (value, type) {
      if (type === "value") {
        if (value === slider.min) return "<100 people>";
        if (value === slider.max) return ">10,000 people";
      }
      return undefined;
    };
  }

  const clearLinesBtn = document.getElementById("clear-lines-btn");
  if (clearLinesBtn) {
    clearLinesBtn.addEventListener("click", () => {
      appState.linesLayer.removeAll();
      appState.pointsLayer.removeAll();
    });
  }

  const resetSliderBtn = document.getElementById("reset-btn");
  if (resetSliderBtn && slider) {
    resetSliderBtn.addEventListener("click", () => {
      const defaultStateValue = 2500;
      const defaultCountyValue = 100;
      const newValue = appState.geoLevel === "state" ? defaultStateValue : defaultCountyValue;
      slider.value = newValue;
      appState.minValue = newValue;
      slider.dispatchEvent(new CustomEvent("calciteSliderInput"));
    });
  }

  // --- Draw migration lines and points ---
  function drawLines(features, minValue, selectedStateName, selectedCountyAbbr) {
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

  // --- Polygon click logic ---
  async function handlePolygonClick(polygonGraphic) {
    appState.lastPolygonGraphic = polygonGraphic;

    if (appState.geoLevel === "county" && polygonGraphic.geometry) {
      mainMap.view.goTo({
        target: polygonGraphic.geometry,
        zoom: 6
      });
    }

    const objectId = polygonGraphic.attributes.OBJECTID;
    const layer = polygonGraphic.layer;

    const result = await layer.queryFeatures({
      objectIds: [objectId],
      outFields: ["*"]
    });
    if (result.features.length > 0) {
      const attrs = result.features[0].attributes;
      let selectedName, queryLayerUrl, whereField, nField, originField, destField, agiField;

      if (appState.geoLevel === "state") {
        const stateFips = attrs.STATE_FIPS.padStart(2, "0");
        selectedName = attrs.STATE_NAME;
        agiField = "AGI";
        if (appState.flowDirection === "outflow") {
          queryLayerUrl = "https://services.arcgis.com/jIL9msH9OI208GCb/arcgis/rest/services/state_outflow_2021_2022_centroids/FeatureServer";
          whereField = "y1_state_fips";
          nField = "n2";
          originField = "y1_state_name";
          destField = "y2_state_name";
        } else {
          queryLayerUrl = "https://services.arcgis.com/jIL9msH9OI208GCb/arcgis/rest/services/state_inflow_2021_2022_centroids/FeatureServer";
          whereField = "y2_state_fips";
          nField = "n2";
          originField = "y1_state_name";
          destField = "y2_state_name";
        }
        var whereValue = stateFips;
      } else {
        const countyFips = attrs.FIPS.padStart(5, "0");
        selectedName = attrs.NAME;
        agiField = "agi";
        if (appState.flowDirection === "outflow") {
          queryLayerUrl = "https://services.arcgis.com/jIL9msH9OI208GCb/arcgis/rest/services/county_outflow_2021_2022_centroids/FeatureServer";
          whereField = "y1_county_fips";
          nField = "n2";
          originField = "y1_countyname";
          destField = "y2_countyname";
        } else {
          queryLayerUrl = "https://services.arcgis.com/jIL9msH9OI208GCb/arcgis/rest/services/county_inflow_2021_2022_centroids/FeatureServer";
          whereField = "y2_county_fips";
          nField = "n2";
          originField = "y1_countyname";
          destField = "y2_countyname";
        }
        var whereValue = countyFips;
      }

      const flowLayer = new FeatureLayer({ url: queryLayerUrl });

      const flowQuery = flowLayer.createQuery();
      flowQuery.where = `${whereField} = '${whereValue}'`;
      flowQuery.outFields = ["*"];
      flowQuery.returnGeometry = false;

      const flowResult = await flowLayer.queryFeatures(flowQuery);

      if (appState.geoLevel === "county") {
        const originFipsList = flowResult.features.map(f => f.attributes["y1_county_fips"].padStart(5, "0"));
        const uniqueOriginFips = [...new Set(originFipsList)];
        const whereClause = `FIPS IN ('${uniqueOriginFips.join("','")}')`;

        const countyFeatures = await countyPolygonLayer.queryFeatures({
          where: whereClause,
          outFields: ["FIPS", "STATE_ABBR", "NAME"],
          returnGeometry: false
        });

        const fipsToCountyInfo = {};
        countyFeatures.features.forEach(f => {
          fipsToCountyInfo[f.attributes.FIPS.padStart(5, "0")] = {
            abbr: f.attributes.STATE_ABBR,
            name: f.attributes.NAME
          };
        });

        flowResult.features.forEach(f => {
          const originFips = f.attributes["y1_county_fips"].padStart(5, "0");
          const originInfo = fipsToCountyInfo[originFips] || {};
          f.attributes.originName = originInfo.name || f.attributes["y1_countyname"] || originFips;
          f.attributes.originStateAbbr = f.attributes["y1_state"] || "";
          f.attributes.destinationName = f.attributes["y2_countyname"];
          f.attributes.destinationStateAbbr = f.attributes["y2_state"] || "";
          f.attributes.nValue = f.attributes[nField];
          f.attributes.AGI = f.attributes[agiField];
        });
      } else {
        flowResult.features.forEach(f => {
          f.attributes.originName = f.attributes[originField];
          f.attributes.destinationName = f.attributes[destField];
          f.attributes.nValue = f.attributes[nField];
          f.attributes.AGI = f.attributes[agiField];
        });
      }

      appState.allRelatedFeatures = flowResult.features;

      
      appState.selectedStateName = selectedName;
      appState.selectedCountyName = selectedName;
      appState.selectedCountyAbbr = attrs.STATE_ABBR;
      drawLines(appState.allRelatedFeatures, appState.minValue, selectedName, attrs.STATE_ABBR);
      updateMigrationSummaryPanel();
    }
  }

  // --- Click handler for all views ---
  function setupFeatureInfoClick(view) {
    view.when(() => {
      view.on("click", async (event) => {
        const response = await view.hitTest(event);
        const featuresComponent = featureInfoDiv;

        // Prioritize point (stay) selection
        const pointGraphic = response.results.find(
          (result) =>
            result.graphic?.geometry?.type === "point" &&
            result.graphic?.layer === appState.pointsLayer
        )?.graphic;

        if (pointGraphic) {
          if (appState.highlightHandle) {
            appState.highlightHandle.remove();
            appState.highlightHandle = null;
          }
          highlightFeature(pointGraphic, view);
          featuresComponent.graphic = pointGraphic;
          appState.selectedLineAttributes = pointGraphic.attributes;
          appState.selectedStatePair = null;
          return;
        }

        // Prioritize polyline (migration line) selection
        const lineGraphic = response.results.find(
          (result) =>
            result.graphic?.geometry?.type === "polyline" &&
            result.graphic?.layer === appState.linesLayer
        )?.graphic;

        if (lineGraphic) {
          if (appState.highlightHandle) {
            appState.highlightHandle.remove();
            appState.highlightHandle = null;
          }
          highlightFeature(lineGraphic, view);
          featuresComponent.graphic = lineGraphic;
          appState.selectedLineAttributes = lineGraphic.attributes;
          appState.selectedStatePair = {
            stateA: lineGraphic.attributes.originName,
            stateB: lineGraphic.attributes.destinationName
          };
          return;
        }

        // Otherwise, check for polygon selection
        const polygonGraphic = response.results.find(
          (result) =>
            result.graphic?.layer?.type === "feature" &&
            result.graphic?.geometry?.type === "polygon" &&
            (
              (appState.geoLevel === "state" && result.graphic.layer === statePolygonLayer) ||
              (appState.geoLevel === "county" && result.graphic.layer === countyPolygonLayer)
            )
        )?.graphic;

        if (polygonGraphic) {
          if (appState.highlightHandle) {
            appState.highlightHandle.remove();
            appState.highlightHandle = null;
          }
          highlightFeature(polygonGraphic, view);
          featuresComponent.graphic = polygonGraphic;
          handlePolygonClick(polygonGraphic);
        }
      });
    });
  }

  // --- Line hover popup for all views ---
  function setupLineHoverPopup(view) {
    view.when(() => {
      view.on("pointer-move", async (event) => {
        const response = await view.hitTest(event);
        const popupDiv = document.getElementById("line-hover-popup");
        if (popupDiv) popupDiv.style.display = "none";

        // Prioritize polyline (migration line) hover
        const lineGraphic = response.results.find(
          (result) =>
            result.graphic?.geometry?.type === "polyline" &&
            result.graphic?.layer === appState.linesLayer
        )?.graphic;

        if (lineGraphic) {
          const attrs = lineGraphic.attributes;
          let popupTitle, popupContent;
          if (appState.geoLevel === "county") {
            let originCounty, originAbbr, destCounty, destAbbr;
            if (appState.flowDirection === "outflow") {
              originCounty = appState.selectedCountyName || "Unknown County";
              originAbbr = appState.selectedCountyAbbr || "Unknown State";
              destCounty = attrs["y2_countyname"] || "Unknown County";
              destAbbr = attrs["y2_state"] || "Unknown State";
            } else {
              originCounty = attrs["y1_countyname"] || "Unknown County";
              originAbbr = attrs["y1_state"] || "Unknown State";
              destCounty = appState.selectedCountyName || "Unknown County";
              destAbbr = appState.selectedCountyAbbr || "Unknown State";
            }
            popupTitle = `${originCounty}, ${originAbbr} to ${destCounty}, ${destAbbr}`;
            popupContent = `<b>${attrs.nValue.toLocaleString()}</b> people moved from <b>${originCounty}, ${originAbbr}</b> to <b>${destCounty}, ${destAbbr}</b>.<br><br>Adjusted Gross Income: <b>$${attrs.AGI ? attrs.AGI.toLocaleString() : ""}</b>.`;
          } else {
            if (appState.flowDirection === "outflow") {
              popupTitle = `${attrs.selectedStateName} to ${attrs.destinationName}`;
              popupContent = `<b>${attrs.nValue.toLocaleString()}</b> people moved from <b>${attrs.selectedStateName}</b> to <b>${attrs.destinationName}</b>.<br><br>Adjusted Gross Income: <b>$${attrs.AGI ? attrs.AGI.toLocaleString() : ""}</b>.`;
            } else {
              popupTitle = `${attrs.originName} to ${attrs.selectedStateName}`;
              popupContent = `<b>${attrs.nValue.toLocaleString()}</b> people moved from <b>${attrs.originName}</b> to <b>${attrs.selectedStateName}</b>.<br><br>Adjusted Gross Income: <b>$${attrs.AGI ? attrs.AGI.toLocaleString() : ""}</b>.`;
            }
          }
          popupDiv.innerHTML = `<div style="font-weight:bold;margin-bottom:8px;">${popupTitle}</div>${popupContent}`;
          popupDiv.style.display = "block";
        } else {
          popupDiv.style.display = "none";
        }
      });
    });
  }

  // --- Create Alaska and Hawaii views ---
  appState.alaskaView = new MapView({
    container: "alaskaViewDiv",
    map: mainMap.map,
    center: [-152.4044, 64.2008],
    zoom: 2,
    ui: { components: [] },
    popupEnabled: false
  });

  appState.hawaiiView = new MapView({
    container: "hawaiiViewDiv",
    map: mainMap.map,
    center: [-157.5828, 20.8968],
    zoom: 4,
    ui: { components: [] },
    popupEnabled: false
  });

  mainMap.view.popupEnabled = false;

  // --- Setup handlers for all views ---
  setupFeatureInfoClick(mainMap.view);
  setupFeatureInfoClick(appState.alaskaView);
  setupFeatureInfoClick(appState.hawaiiView);

  setupLineHoverPopup(mainMap.view);
  setupLineHoverPopup(appState.alaskaView);
  setupLineHoverPopup(appState.hawaiiView);

  // Initial view setup
  mainMap.view.when(() => {
    mainMap.view.goTo({ center: [-99.9018, 37.0902], zoom: 4 });
  });
  appState.alaskaView.when(() => {
    appState.alaskaView.goTo({ center: [-152.4044, 64.2008], zoom: 2 });
  });
  appState.hawaiiView.when(() => {
    appState.hawaiiView.goTo({ center: [-157.5828, 20.8968], zoom: 4 });
  });

  // --- Flow direction segmented control ---
  const flowSegmented = document.getElementById("flow-segmented");
  if (flowSegmented) {
    flowSegmented.addEventListener("calciteSegmentedControlChange", (event) => {
      appState.flowDirection = event.target.value;
      if (appState.lastPolygonGraphic) {
        handlePolygonClick(appState.lastPolygonGraphic);
      }
    });
  }

  // Listen for changes
  const geoLevelSegmented = document.getElementById("geo-level-segmented");
  if (geoLevelSegmented) {
    geoLevelSegmented.addEventListener("calciteSegmentedControlChange", (event) => {
      if (appState.linesLayer) appState.linesLayer.removeAll();
      if (appState.pointsLayer) appState.pointsLayer.removeAll();

      const featuresComponent = featureInfoDiv;
      if (featuresComponent) {
        featuresComponent.graphic = null;
      }

      appState.allRelatedFeatures = [];
      appState.selectedStateName = null;

      appState.geoLevel = event.target.value;
      statePolygonLayer.visible = appState.geoLevel === "state";
      countyPolygonLayer.visible = appState.geoLevel === "county";
      appState.lastPolygonGraphic = null;

      // Remove previous highlight
      if (appState.highlightHandle) {
        appState.highlightHandle.remove();
        appState.highlightHandle = null;
      }

      const infoBlock = document.getElementById("info-block");
      if (infoBlock) {
        infoBlock.heading = appState.geoLevel === "state" ? "State Information" : "County Information";
        infoBlock.description = appState.geoLevel === "state" ? "Select a State to render pop-up" : "Select a County to render pop-up";
      }

      const slider = document.getElementById("migration-slider");
      if (slider) {
        const defaultStateValue = 2500;
        const defaultCountyValue = 100;
        const newValue = appState.geoLevel === "state" ? defaultStateValue : defaultCountyValue;
        slider.value = newValue;
        appState.minValue = newValue;
        slider.dispatchEvent(new CustomEvent("calciteSliderInput"));
      }
    });
  }

  // Find layers by title (as shown in your screenshot)
  const statePolygonLayer = mainMap.map.layers.find(layer => layer.title === "USA States Generalized Boundaries");
  const countyPolygonLayer = mainMap.map.layers.find(layer => layer.title === "USA Counties Generalized Boundaries");
});

// --- Highlight feature utility ---
function highlightFeature(feature, view) {
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

function updateMigrationSummaryPanel() {
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
