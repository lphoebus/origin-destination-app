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
//import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-feature";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import MapView from "@arcgis/core/views/MapView";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";
import * as webMercatorUtils from "@arcgis/core/geometry/support/webMercatorUtils";

import { appState } from "./state";
import {
  handleActionBarClick,
  setupPanelCloseHandlers,
  setupActionBarToggle,
  showShellAndHideLoader,
  setupSlider,
  setupClearLinesBtn,
  setupResetSliderBtn,
  setupAboutDialog
} from "./ui";

import { drawLines, highlightFeature, updateMigrationSummaryPanel } from "./draw";
import { handleOutflow, handleInflow, handleNetMigration } from "./migration";
import { setupFeatureInfoClick, setupLineHoverPopup } from "./interactions";

const mainMap = document.getElementById("mainMap");
const featureInfoDiv = document.getElementById("feature-info");
const migrationSummaryDiv = document.getElementById("migration-summary");

mainMap.addEventListener("arcgisViewReadyChange", async (evt) => {
  appState.linesLayer = new GraphicsLayer({ listMode: "hide" });
  appState.pointsLayer = new GraphicsLayer({ listMode: "hide" });
  mainMap.map.add(appState.linesLayer);
  mainMap.map.add(appState.pointsLayer);
  
  const statePolygonLayer = mainMap.map.layers.find(layer => layer.title === "USA States Generalized Boundaries");
  const countyPolygonLayer = mainMap.map.layers.find(layer => layer.title === "USA Counties Generalized Boundaries");
  
  setupPanelCloseHandlers();
  document.querySelector("calcite-action-bar").addEventListener("click", handleActionBarClick);
  setupActionBarToggle(mainMap);
  showShellAndHideLoader();
  setupSlider(drawLines);
  setupClearLinesBtn();
  setupResetSliderBtn();
  setupAboutDialog();
  // --- Create Alaska and Hawaii views ---
  appState.alaskaView = new MapView({
    container: "alaskaViewDiv",
    map: mainMap.map,
    center: [-152.4044, 64.2008],
    zoom: 2,
    spatialReference: {wkid: 5936},
    ui: { components: [] },
    popupEnabled: false
  });

  appState.hawaiiView = new MapView({
    container: "hawaiiViewDiv",
    map: mainMap.map,
    center: [-157.5828, 20.8968],
    zoom: 4,
    spatialReference: {wkid: 102007},
    ui: { components: [] },
    popupEnabled: false
  });

  mainMap.view.popupEnabled = false;

  // --- Setup handlers for all views ---
  setupFeatureInfoClick(mainMap.view, featureInfoDiv, statePolygonLayer, countyPolygonLayer);
  setupFeatureInfoClick(appState.alaskaView, featureInfoDiv, statePolygonLayer, countyPolygonLayer);
  setupFeatureInfoClick(appState.hawaiiView, featureInfoDiv, statePolygonLayer, countyPolygonLayer);

  setupLineHoverPopup(mainMap.view);
  setupLineHoverPopup(appState.alaskaView);
  setupLineHoverPopup(appState.hawaiiView);

  // Initial view setup
  mainMap.view.when(() => {
    mainMap.view.goTo({ center: [-95.9018, 37.0902], zoom: 3 });
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
        if (appState.flowDirection === "net") {
          handleNetMigration(appState.lastPolygonGraphic, statePolygonLayer, countyPolygonLayer);
        } else if (appState.flowDirection === "outflow") {
          handleOutflow(appState.lastPolygonGraphic, statePolygonLayer, countyPolygonLayer);
        } else if (appState.flowDirection === "inflow") {
          handleInflow(appState.lastPolygonGraphic, statePolygonLayer, countyPolygonLayer);
        }
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
});
