import { appState } from "./state";

// Handles the action bar click logic
export function handleActionBarClick({ target }) {
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
}

// Handles panel close events
export function setupPanelCloseHandlers() {
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
}

// Handles action bar toggle
export function setupActionBarToggle(mainMap) {
  document.addEventListener("calciteActionBarToggle", event => {
    appState.actionBarExpanded = !appState.actionBarExpanded;
    mainMap.view.padding = { left: appState.actionBarExpanded ? 135 : 49 };
  });
}

// Show/hide shell and loader
export function showShellAndHideLoader() {
  document.querySelector("calcite-shell").hidden = false;
  document.querySelector("calcite-loader").hidden = true;
}

// Slider setup
export function setupSlider(drawLines) {
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
}

// Clear lines button
export function setupClearLinesBtn() {
  const clearLinesBtn = document.getElementById("clear-lines-btn");
  if (clearLinesBtn) {
    clearLinesBtn.addEventListener("click", () => {
      appState.linesLayer.removeAll();
      appState.pointsLayer.removeAll();
    });
  }
}

// Reset slider button
export function setupResetSliderBtn() {
  const resetSliderBtn = document.getElementById("reset-btn");
  const slider = document.getElementById("migration-slider");
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
}

// About dialog setup
export function setupAboutDialog() {
  const infoAction = document.getElementById("info-action");
  const aboutDialog = document.getElementById("about-dialog");
  if (infoAction && aboutDialog) {
    infoAction.addEventListener("click", () => {
      aboutDialog.open = true;
    });
  }
}
