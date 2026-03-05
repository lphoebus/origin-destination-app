import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Graphic from "@arcgis/core/Graphic";

import { appState } from "./state";
import { drawLines, updateMigrationSummaryPanel } from "./draw";


export async function handleOutflow(polygonGraphic, statePolygonLayer, countyPolygonLayer) {
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
    let selectedName, queryLayerUrl, whereField, nField, originField, destField, agiField, whereValue;

    if (appState.geoLevel === "state") {
      const stateFips = attrs.STATE_FIPS.padStart(2, "0");
      selectedName = attrs.STATE_NAME;
      agiField = "AGI";
      queryLayerUrl = "https://services.arcgis.com/jIL9msH9OI208GCb/arcgis/rest/services/state_outflow_2021_2022_centroids/FeatureServer";
      whereField = "y1_state_fips";
      nField = "n2";
      originField = "y1_state_name";
      destField = "y2_state_name";
      whereValue = stateFips;
    } else {
      const countyFips = attrs.FIPS.padStart(5, "0");
      selectedName = attrs.NAME;
      agiField = "agi";
      queryLayerUrl = "https://services.arcgis.com/jIL9msH9OI208GCb/arcgis/rest/services/county_outflow_2021_2022_centroids/FeatureServer";
      whereField = "y1_county_fips";
      nField = "n2";
      originField = "y1_countyname";
      destField = "y2_countyname";
      whereValue = countyFips;
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

export async function handleInflow(polygonGraphic, statePolygonLayer, countyPolygonLayer) {
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
    let selectedName, queryLayerUrl, whereField, nField, originField, destField, agiField, whereValue;

    if (appState.geoLevel === "state") {
      const stateFips = attrs.STATE_FIPS.padStart(2, "0");
      selectedName = attrs.STATE_NAME;
      agiField = "AGI";
      queryLayerUrl = "https://services.arcgis.com/jIL9msH9OI208GCb/arcgis/rest/services/state_inflow_2021_2022_centroids/FeatureServer";
      whereField = "y2_state_fips";
      nField = "n2";
      originField = "y1_state_name";
      destField = "y2_state_name";
      whereValue = stateFips;
    } else {
      const countyFips = attrs.FIPS.padStart(5, "0");
      selectedName = attrs.NAME;
      agiField = "agi";
      queryLayerUrl = "https://services.arcgis.com/jIL9msH9OI208GCb/arcgis/rest/services/county_inflow_2021_2022_centroids/FeatureServer";
      whereField = "y2_county_fips";
      nField = "n2";
      originField = "y1_countyname";
      destField = "y2_countyname";
      whereValue = countyFips;
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

export async function handleNetMigration(polygonGraphic, statePolygonLayer, countyPolygonLayer) {
  appState.lastPolygonGraphic = polygonGraphic;

  if (appState.geoLevel === "county" && polygonGraphic.geometry) {
    mainMap.view.goTo({
      target: polygonGraphic.geometry,
      zoom: 6
    });
  }

  const attrs = polygonGraphic.attributes;
  let inflowUrl, outflowUrl, inflowWhereField, outflowWhereField, whereValue, originField, destField, agiField, nField;

  if (appState.geoLevel === "state") {
    const stateFips = attrs.STATE_FIPS.padStart(2, "0");
    inflowUrl = "https://services.arcgis.com/jIL9msH9OI208GCb/arcgis/rest/services/state_inflow_2021_2022_centroids/FeatureServer";
    outflowUrl = "https://services.arcgis.com/jIL9msH9OI208GCb/arcgis/rest/services/state_outflow_2021_2022_centroids/FeatureServer";
    inflowWhereField = "y2_state_fips";
    outflowWhereField = "y1_state_fips";
    whereValue = stateFips;
    originField = "y1_state_name";
    destField = "y2_state_name";
    agiField = "AGI";
    nField = "n2";
  } else {
    const countyFips = attrs.FIPS.padStart(5, "0");
    inflowUrl = "https://services.arcgis.com/jIL9msH9OI208GCb/arcgis/rest/services/county_inflow_2021_2022_centroids/FeatureServer";
    outflowUrl = "https://services.arcgis.com/jIL9msH9OI208GCb/arcgis/rest/services/county_outflow_2021_2022_centroids/FeatureServer";
    inflowWhereField = "y2_county_fips";
    outflowWhereField = "y1_county_fips";
    whereValue = countyFips;
    originField = "y1_countyname";
    destField = "y2_countyname";
    agiField = "agi";
    nField = "n2";
  }

  const inflowLayer = new FeatureLayer({ url: inflowUrl });
  const outflowLayer = new FeatureLayer({ url: outflowUrl });

  // Query both inflow and outflow
  const inflowQuery = inflowLayer.createQuery();
  inflowQuery.where = `${inflowWhereField} = '${whereValue}'`;
  inflowQuery.outFields = ["*"];
  inflowQuery.returnGeometry = false;

  const outflowQuery = outflowLayer.createQuery();
  outflowQuery.where = `${outflowWhereField} = '${whereValue}'`;
  outflowQuery.outFields = ["*"];
  outflowQuery.returnGeometry = false;

  const [inflowResult, outflowResult] = await Promise.all([
    inflowLayer.queryFeatures(inflowQuery),
    outflowLayer.queryFeatures(outflowQuery)
  ]);

  // Build maps for inflow and outflow
  const inflowMap = {};
  inflowResult.features.forEach(f => {
    const key = appState.geoLevel === "state"
      ? f.attributes["y1_state_fips"] + "_" + f.attributes["y2_state_fips"]
      : f.attributes["y1_county_fips"] + "_" + f.attributes["y2_county_fips"];
    inflowMap[key] = f;
  });

  const outflowMap = {};
  outflowResult.features.forEach(f => {
    const key = appState.geoLevel === "state"
      ? f.attributes["y1_state_fips"] + "_" + f.attributes["y2_state_fips"]
      : f.attributes["y1_county_fips"] + "_" + f.attributes["y2_county_fips"];
    outflowMap[key] = f;
  });

  // Calculate net migration for each pair
  const netFeatures = [];
  const allKeys = new Set([...Object.keys(inflowMap), ...Object.keys(outflowMap)]);
  allKeys.forEach(key => {
    const inflow = inflowMap[key]?.attributes?.n2 || 0;
    const outflow = outflowMap[key]?.attributes?.n2 || 0;
    const net = inflow - outflow;
    if (Math.abs(net) < appState.minValue) return;

    // Use inflow feature as base, or outflow if inflow missing
    const baseFeature = inflowMap[key] || outflowMap[key];
    const featAttrs = { ...baseFeature.attributes };
    featAttrs.nValue = Math.abs(net);
    featAttrs.netDirection = net > 0 ? "inflow" : "outflow";
    featAttrs.originName = featAttrs[originField];
    featAttrs.destinationName = featAttrs[destField];
    featAttrs.AGI = featAttrs[agiField];
    netFeatures.push({ attributes: featAttrs, net });
  });

  appState.allRelatedFeatures = netFeatures;
  appState.selectedStateName = attrs.STATE_NAME;
  appState.selectedCountyName = attrs.NAME;
  appState.selectedCountyAbbr = attrs.STATE_ABBR;

  // --- Draw net migration lines with direction and color ---
  appState.linesLayer.removeAll();
  appState.pointsLayer.removeAll();

  netFeatures.forEach(feature => {
    const attrs = feature.attributes;
    const n = attrs.nValue;
    if (n <= 0) return;

    let originX = attrs.Origin_X;
    let originY = attrs.Origin_Y;
    let destinationX = attrs.Destination_X;
    let destinationY = attrs.Destination_Y;

    // Reverse direction for net inflow
    if (attrs.netDirection === "inflow") {
      [originX, originY, destinationX, destinationY] = [destinationX, destinationY, originX, originY];
    }

    const line = {
      type: "polyline",
      paths: [
        [originX, originY],
        [destinationX, destinationY]
      ],
      spatialReference: { wkid: 3857 }
    };

    // Green for net inflow, blue for net outflow
    const color = attrs.netDirection === "inflow"
      ? [25, 130, 67, 255]   // green
      : [25, 72, 130, 255];  // blue

    const width = Math.min(8, Math.max(0.5, Math.log10(n) - 2));
    const arrowSymbol = {
      type: "simple-line",
      color: color,
      width: width,
      style: "solid"
    };

    appState.linesLayer.add(new Graphic({
      geometry: line,
      symbol: arrowSymbol,
      attributes: attrs,
      popupTemplate: {
        title: attrs.netDirection === "inflow"
          ? `Net gain to ${attrs.destinationName}`
          : `Net loss from ${attrs.destinationName}`,
        content: `<b>${n.toLocaleString()}</b> more people 
          ${attrs.netDirection === "inflow" ? "moved into" : "left"} <b>${attrs.destinationName}</b> 
          than ${attrs.netDirection === "inflow" ? "left" : "moved in"}.` //<br><br>
          // Adjusted Gross Income: <b>$${attrs.AGI ? attrs.AGI.toLocaleString() : "N/A"}</b>.`
      }
    }));
  });

  updateMigrationSummaryPanel();
}