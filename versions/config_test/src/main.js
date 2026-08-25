// *** IMPORTS ***
import "./style.css";
import { defineCustomElements } from "@esri/calcite-components/dist/loader";
defineCustomElements(window);

import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-layer-list";

import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import { queryAllFeatures } from "@esri/arcgis-rest-feature-service";

// *** DOM REFERENCES ***
const mainMap = document.getElementById("mainMap");
const layerSelect = document.getElementById("layer-select");
const fieldOne = document.getElementById("field-one");
const fieldTwo = document.getElementById("field-two");
const fieldThree = document.getElementById("field-three");
const fieldFour = document.getElementById("field-four");
const valueField = document.getElementById("value-field");
const minValueInput = document.getElementById("min-value-input");
const maxValueInput = document.getElementById("max-value-input");
const maxLinesInput = document.getElementById("max-lines-input");
const excludeSelfFlowsSwitch = document.getElementById("exclude-self-flows");
const filterSlider = document.getElementById("filter-slider");
const coordMode = document.getElementById("coord-mode");
const popupTitleTemplate = document.getElementById("popup-title-template");
const popupContentTemplate = document.getElementById("popup-content-template");
const popupFieldCheckboxes = document.getElementById("popup-field-checkboxes");
const leftPanel = document.getElementById("left-panel");
const toggleLayersAction = document.getElementById("toggle-layers-action");
const leftLayersPanel = document.getElementById("left-layers-panel");

// *** APP STATE ***
let layers = [];
let graphicsLayer = null;
let currentLayerFields = [];
let savedPopupConfig = null;
let globalMinVal = 0;
let globalMaxVal = 0;
let sliderThresholdValues = [];

const fieldLabels = {
  xy: ["Origin X Field:", "Origin Y Field:", "Destination X Field:", "Destination Y Field:"],
  name: ["Origin Name Field:", "Destination Name Field:", "Longitude (X) Field:", "Latitude (Y) Field:"]
};

function getSelectedMode() {
  const checked = coordMode?.querySelector("calcite-radio-button[checked]");
  return checked?.value || coordMode?.selectedItem?.value || "xy";
}

function updateFieldLabels(mode) {
  if (mode === "xy" || mode === "name") {
    const labels = fieldLabels[mode];
    ["field-one-label", "field-two-label", "field-three-label", "field-four-label"].forEach((id, i) => {
      const el = document.getElementById(id);
      if (!el || !el.childNodes?.[0]) return;
      el.childNodes[0].textContent = labels[i];
    });
  }
}

function populatePopupBuilder(fields) {
  if (popupTitleTemplate) popupTitleTemplate.value = "";
  if (popupContentTemplate) popupContentTemplate.value = "";
  popupFieldCheckboxes.innerHTML = "";
  savedPopupConfig = null;

  const chip = document.getElementById("popup-saved-chip");
  if (chip) chip.style.display = "none";

  fields.forEach(field => {
    const label = field.alias || field.name;
    const wrapper = document.createElement("div");
    wrapper.style.cssText = "display:flex;align-items:center;gap:8px;margin-bottom:8px;";

    const checkbox = document.createElement("calcite-checkbox");
    checkbox.value = field.name;
    checkbox.dataset.label = label;
    checkbox.dataset.fieldType = field.type;

    const labelInput = document.createElement("calcite-input-text");
    labelInput.placeholder = label;
    labelInput.value = label;
    labelInput.scale = "s";
    labelInput.style.flex = "1";
    labelInput.disabled = true;
    labelInput.dataset.fieldName = field.name;

    checkbox.addEventListener("calciteCheckboxChange", () => {
      labelInput.disabled = !checkbox.checked;
    });

    wrapper.appendChild(checkbox);
    wrapper.appendChild(labelInput);
    popupFieldCheckboxes.appendChild(wrapper);
  });
}

function getDefaultFieldInfos() {
  return currentLayerFields.map(f => ({
    fieldName: f.name,
    label: f.alias || f.name,
    format: ["integer", "double", "small-integer", "single", "long"].includes(f.type)
      ? { digitSeparator: true, places: 0 }
      : null
  }));
}

function getDefaultPopupTemplate() {
  return {
    title: "Flow",
    content: [{ type: "fields", fieldInfos: getDefaultFieldInfos() }]
  };
}

function buildNativePopupTemplate() {
  if (savedPopupConfig?.contentTemplate) {
    return {
      title: savedPopupConfig.titleTemplate || "Flow",
      content: savedPopupConfig.contentTemplate
    };
  }

  if (savedPopupConfig?.checkedFields?.length > 0) {
    return {
      title: savedPopupConfig.titleTemplate || "Flow",
      content: [{
        type: "fields",
        fieldInfos: savedPopupConfig.checkedFields.map(f => ({
          fieldName: f.fieldName,
          label: f.label,
          format: ["integer", "double", "small-integer", "single", "long"].includes(f.fieldType)
            ? { digitSeparator: true, places: 0 }
            : null
        }))
      }]
    };
  }

  if (savedPopupConfig?.titleTemplate) {
    return {
      title: savedPopupConfig.titleTemplate,
      content: [{ type: "fields", fieldInfos: getDefaultFieldInfos() }]
    };
  }

  return getDefaultPopupTemplate();
}

function savePopupConfig() {
  const titleTemplate = popupTitleTemplate?.value?.trim();
  const contentTemplate = popupContentTemplate?.value?.trim();

  const checkedFields = [...popupFieldCheckboxes.querySelectorAll("calcite-checkbox")]
    .filter(cb => cb.checked === true)
    .map(cb => {
      const labelInput = popupFieldCheckboxes.querySelector(`calcite-input-text[data-field-name="${cb.value}"]`);
      return {
        fieldName: cb.value,
        fieldType: cb.dataset.fieldType,
        label: labelInput?.value?.trim() || cb.dataset.label
      };
    });

  savedPopupConfig = { titleTemplate, contentTemplate, checkedFields };
  console.log("Saved popup config:", JSON.stringify(savedPopupConfig, null, 2));

  const template = buildNativePopupTemplate();
  graphicsLayer?.graphics.forEach(graphic => {
    graphic.popupTemplate = template;
  });

  const chip = document.getElementById("popup-saved-chip");
  if (chip) chip.style.display = "block";
}

function applySliderThreshold() {
  if (!graphicsLayer) return;
  const sliderIndex = Math.round(Number(filterSlider?.value));
  if (!Number.isFinite(sliderIndex) || sliderThresholdValues.length === 0) return;

  const clampedIndex = Math.max(0, Math.min(sliderThresholdValues.length - 1, sliderIndex));
  const threshold = sliderThresholdValues[clampedIndex];
  if (!Number.isFinite(threshold)) return;

  graphicsLayer.graphics.forEach(graphic => {
    graphic.visible = graphic.attributes._value >= threshold;
  });
}

function syncSliderToValueFieldRange(features, valField) {
  const values = features
    .map(f => Number(f.attributes[valField]))
    .filter(v => Number.isFinite(v));

  if (values.length === 0) {
    sliderThresholdValues = [];
    filterSlider.min = 0;
    filterSlider.max = 0;
    filterSlider.step = 1;
    filterSlider.value = 0;
    return;
  }

  globalMinVal = Math.min(...values);
  globalMaxVal = Math.max(...values);

  sliderThresholdValues = [...new Set(values)].sort((a, b) => a - b);
  const maxIndex = Math.max(0, sliderThresholdValues.length - 1);

  filterSlider.min = 0;
  filterSlider.max = maxIndex;
  filterSlider.step = 1;

  const currentIndex = Math.round(Number(filterSlider.value));
  if (!Number.isFinite(currentIndex) || currentIndex < 0 || currentIndex > maxIndex) {
    filterSlider.value = 0;
  }
}

function getArrowPlacement(start, end, position = 0.82) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const length = Math.hypot(dx, dy);
  if (!Number.isFinite(length) || length === 0) return null;

  const x = start.x + dx * position;
  const y = start.y + dy * position;
  const thetaDeg = (Math.atan2(dy, dx) * 180) / Math.PI;
  const angle = 90 - thetaDeg;

  return { x, y, angle };
}

function addFlowLineWithArrow({ start, end, spatialReference, attrs, numericVal, lineWidth, popupTemplate }) {
  const lineColor = [25, 72, 130, 180];

  graphicsLayer.add(new Graphic({
    geometry: {
      type: "polyline",
      paths: [[[start.x, start.y], [end.x, end.y]]],
      spatialReference
    },
    symbol: {
      type: "simple-line",
      color: lineColor,
      width: lineWidth,
      style: "solid"
    },
    attributes: { ...attrs, _value: numericVal },
    popupTemplate
  }));

  const arrow = getArrowPlacement(start, end);
  if (!arrow) return;

  graphicsLayer.add(new Graphic({
    geometry: {
      type: "point",
      x: arrow.x,
      y: arrow.y,
      spatialReference
    },
    symbol: {
      type: "simple-marker",
      style: "triangle",
      color: [25, 72, 130, 220],
      size: Math.max(6, lineWidth * 1.8),
      angle: arrow.angle,
      outline: {
        color: [255, 255, 255, 180],
        width: 0.5
      }
    },
    attributes: { ...attrs, _value: numericVal },
    popupTemplate
  }));
}

async function populateFieldDropdowns(layer) {
  await layer.load();

  if (!layer.fields) {
    console.error("Selected layer has no fields.", layer);
    return;
  }

  currentLayerFields = layer.fields;
  [fieldOne, fieldTwo, fieldThree, fieldFour, valueField].forEach(d => d.innerHTML = "");

  layer.fields.forEach(field => {
    const createOption = () => {
      const option = document.createElement("calcite-option");
      option.value = field.name;
      option.label = field.alias || field.name;
      return option;
    };

    [fieldOne, fieldTwo, fieldThree, fieldFour].forEach(d => d.appendChild(createOption()));

    if (["integer", "double", "small-integer", "single", "long"].includes(field.type)) {
      valueField.appendChild(createOption());
    }
  });

  populatePopupBuilder(layer.fields);
  updateFieldLabels(getSelectedMode());
  console.log(`Populated fields from layer: ${layer.title}`);
}

async function drawLines() {
  const selectedLayer = layers.find(l => (l.title || l.id) === layerSelect.value);
  if (!selectedLayer) {
    console.error("No layer selected.");
    return;
  }

  const valField = valueField.value;
  const hardMinDrawValue = 1;
  const minValueThreshold = Math.max(hardMinDrawValue, parseFloat(minValueInput?.value) || 0);
  const parsedMaxValue = parseFloat(maxValueInput?.value);
  const hasMaxValueThreshold = Number.isFinite(parsedMaxValue);
  const maxValueThreshold = hasMaxValueThreshold ? parsedMaxValue : null;
  const maxLines = Math.max(1, parseInt(maxLinesInput?.value, 10) || 2000);
  const excludeSelfFlows = excludeSelfFlowsSwitch?.checked !== false;
  const mode = getSelectedMode();

  const query = selectedLayer.createQuery();
  query.outFields = currentLayerFields.map(f => f.name);
  query.returnGeometry = false;

  const whereParts = [`${valField} >= ${minValueThreshold}`];
  if (hasMaxValueThreshold) whereParts.push(`${valField} <= ${maxValueThreshold}`);
  query.where = whereParts.join(" AND ");
  query.orderByFields = [`${valField} DESC`];
  query.num = maxLines;

  const result = await selectedLayer.queryFeatures(query);
  if (!result.features || result.features.length === 0) {
    console.warn("No features returned.");
    graphicsLayer?.removeAll();
    return;
  }

  syncSliderToValueFieldRange(result.features, valField);
  graphicsLayer.removeAll();

  const popupTemplate = buildNativePopupTemplate();

  if (mode === "xy") {
    const seenPairs = new Set();

    result.features.forEach(feature => {
      const attrs = feature.attributes;
      const ox = parseFloat(attrs[fieldOne.value]);
      const oy = parseFloat(attrs[fieldTwo.value]);
      const dx = parseFloat(attrs[fieldThree.value]);
      const dy = parseFloat(attrs[fieldFour.value]);
      const numericVal = Number(attrs[valField]);

      if (!Number.isFinite(ox) || !Number.isFinite(oy) || !Number.isFinite(dx) || !Number.isFinite(dy) || !Number.isFinite(numericVal) || numericVal < hardMinDrawValue) return;

      if (excludeSelfFlows) {
        const epsilon = 1e-9;
        if (Math.abs(ox - dx) < epsilon && Math.abs(oy - dy) < epsilon) return;
      }

      const pairKey = `${ox},${oy}|${dx},${dy}`;
      if (seenPairs.has(pairKey)) return;
      seenPairs.add(pairKey);

      const minLog = Math.log1p(Math.max(0, globalMinVal));
      const maxLog = Math.log1p(Math.max(0, globalMaxVal));
      const valLog = Math.log1p(Math.max(0, numericVal));
      const normalized = maxLog === minLog ? 1 : (valLog - minLog) / (maxLog - minLog);
      const lineWidth = 0.5 + normalized * 7.5;

      addFlowLineWithArrow({
        start: { x: ox, y: oy },
        end: { x: dx, y: dy },
        spatialReference: { wkid: 3857 },
        attrs,
        numericVal,
        lineWidth,
        popupTemplate
      });
    });
  } else if (mode === "name") {
    const originNameField = fieldOne.value;
    const destNameField = fieldTwo.value;
    const lonField = fieldThree.value;
    const latField = fieldFour.value;

    if (!selectedLayer.url) {
      console.error("Selected layer has no URL. Layer object:", selectedLayer);
      return;
    }

    let layerUrl = selectedLayer.url;
    if (!/\/\d+$/.test(layerUrl)) {
      if (selectedLayer.layerId !== undefined) {
        layerUrl = layerUrl.replace(/\/+$/, "") + "/" + selectedLayer.layerId;
      } else if (selectedLayer.id && /^\d+$/.test(selectedLayer.id)) {
        layerUrl = layerUrl.replace(/\/+$/, "") + "/" + selectedLayer.id;
      } else {
        layerUrl = layerUrl.replace(/\/+$/, "") + "/0";
      }
    }

    const lookupResult = await queryAllFeatures({
      url: layerUrl,
      where: `${lonField} IS NOT NULL AND ${latField} IS NOT NULL`,
      outFields: [originNameField, lonField, latField],
      returnGeometry: false
    });

    if (!lookupResult || !lookupResult.features) {
      console.error("queryAllFeatures did not return features:", lookupResult);
      return;
    }

    const originLookup = {};
    lookupResult.features.forEach(f => {
      const name = f.attributes[originNameField];
      const lon = parseFloat(f.attributes[lonField]);
      const lat = parseFloat(f.attributes[latField]);
      if (name && Number.isFinite(lon) && Number.isFinite(lat)) {
        originLookup[name] = { x: lon, y: lat };
      }
    });

    console.log("Origin lookup built:", Object.keys(originLookup).length, "entries");

    const seenPairs = new Set();

    result.features.forEach(f => {
      const attrs = f.attributes;
      const originName = attrs[originNameField];
      const destName = attrs[destNameField];
      const numericVal = Number(attrs[valField]);

      if (!Number.isFinite(numericVal) || numericVal < hardMinDrawValue) return;
      if (excludeSelfFlows && String(originName) === String(destName)) return;

      const origin = originLookup[originName];
      const dest = originLookup[destName];
      if (!origin || !dest) return;

      const pairKey = `${originName}|${destName}`;
      if (seenPairs.has(pairKey)) return;
      seenPairs.add(pairKey);

      const minLog = Math.log1p(Math.max(0, globalMinVal));
      const maxLog = Math.log1p(Math.max(0, globalMaxVal));
      const valLog = Math.log1p(Math.max(0, numericVal));
      const normalized = maxLog === minLog ? 1 : (valLog - minLog) / (maxLog - minLog);
      const lineWidth = 0.5 + normalized * 7.5;

      addFlowLineWithArrow({
        start: { x: origin.x, y: origin.y },
        end: { x: dest.x, y: dest.y },
        spatialReference: { wkid: 4326 },
        attrs,
        numericVal,
        lineWidth,
        popupTemplate
      });
    });
  }

  console.log(`Drew ${graphicsLayer.graphics.length} lines (mode=${mode}, min=${minValueThreshold}, max=${hasMaxValueThreshold ? maxValueThreshold : "none"}, cap=${maxLines}, excludeSelf=${excludeSelfFlows}).`);
}

// *** APP ENTRY POINT ***
mainMap.addEventListener("arcgisViewReadyChange", async () => {
  const view = mainMap.view;
  if (!view) return;

  view.popupEnabled = true;

  graphicsLayer = new GraphicsLayer({ listMode: "hide" });
  view.map.add(graphicsLayer);

  layers = view.map.allLayers.toArray().filter(l => l.type === "feature");
  console.log("Found layers:", layers);

  layerSelect.innerHTML = "";
  const placeholder = document.createElement("calcite-option");
  placeholder.label = "-- Select a Layer --";
  placeholder.value = "";
  layerSelect.appendChild(placeholder);

  layers.forEach(layer => {
    const option = document.createElement("calcite-option");
    option.value = layer.title || layer.id;
    option.label = layer.title || layer.id;
    layerSelect.appendChild(option);
  });

  layerSelect.addEventListener("calciteSelectChange", () => {
    savedPopupConfig = null;
    const chip = document.getElementById("popup-saved-chip");
    if (chip) chip.style.display = "none";
    const selectedLayer = layers.find(l => (l.title || l.id) === layerSelect.value);
    if (selectedLayer) populateFieldDropdowns(selectedLayer);
  });

  coordMode.addEventListener("calciteRadioButtonGroupChange", () => {
    updateFieldLabels(getSelectedMode());
  });

  filterSlider.addEventListener("calciteSliderInput", () => {
    applySliderThreshold();
  });

  filterSlider.addEventListener("calciteSliderChange", () => {
    applySliderThreshold();
  });

  document.getElementById("draw-btn").addEventListener("click", drawLines);

  document.getElementById("clear-btn").addEventListener("click", () => {
    graphicsLayer.removeAll();
    sliderThresholdValues = [];
    filterSlider.value = 0;
  });

  document.getElementById("save-popup-btn").addEventListener("click", savePopupConfig);

  if (leftPanel && toggleLayersAction && leftLayersPanel) {
    let isLeftPanelOpen = false;

    const syncLeftPanelState = () => {
      if (isLeftPanelOpen) {
        leftPanel.removeAttribute("collapsed");
        leftLayersPanel.hidden = false;
        toggleLayersAction.active = true;
      } else {
        leftPanel.setAttribute("collapsed", "");
        leftLayersPanel.hidden = true;
        toggleLayersAction.active = false;
      }
    };

    syncLeftPanelState();

    toggleLayersAction.addEventListener("click", () => {
      isLeftPanelOpen = !isLeftPanelOpen;
      syncLeftPanelState();
    });
  }
});