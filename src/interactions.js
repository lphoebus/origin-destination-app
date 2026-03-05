import { appState } from "./state";
import { highlightFeature } from "./draw";
import { handleOutflow, handleInflow, handleNetMigration } from "./migration";


export function setupFeatureInfoClick(view, featureInfoDiv, statePolygonLayer, countyPolygonLayer) {
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
                appState.lastPolygonGraphic = polygonGraphic;
                if (appState.flowDirection === "net") {
                    handleNetMigration(polygonGraphic, statePolygonLayer, countyPolygonLayer);
                } else if (appState.flowDirection === "outflow") {
                    handleOutflow(polygonGraphic, statePolygonLayer, countyPolygonLayer);
                } else if (appState.flowDirection === "inflow") {
                    handleInflow(polygonGraphic, statePolygonLayer, countyPolygonLayer);
                }
            }
        });
    });
}

export function setupLineHoverPopup(view) {
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
                let popupTitle = "";
                let popupContent = "";

                // --- NET MIGRATION POPUP ---
                if (appState.flowDirection === "net") {
                    popupTitle = attrs.netDirection === "inflow"
                        ? `Net gain to ${attrs.destinationName}`
                        : `Net loss from ${attrs.destinationName}`;
                    popupContent = `<b>${attrs.nValue.toLocaleString()}</b> more people 
                        ${attrs.netDirection === "inflow" ? "moved into" : "left"} <b>${attrs.destinationName}</b> 
                        than ${attrs.netDirection === "inflow" ? "left" : "moved in"}.`;//<br><br>
                        // Adjusted Gross Income: <b>$${attrs.AGI ? attrs.AGI.toLocaleString() : "N/A"}</b>.`;
                }
                // --- COUNTY LEVEL POPUP ---
                else if (appState.geoLevel === "county") {
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
                    popupContent = `<b>${attrs.nValue.toLocaleString()}</b> people moved from <b>${originCounty}, ${originAbbr}</b> to <b>${destCounty}, ${destAbbr}</b>.`;//<br><br>Adjusted Gross Income: <b>$${attrs.AGI ? attrs.AGI.toLocaleString() : "N/A"}</b>.`;
                }
                // --- STATE LEVEL POPUP ---
                else {
                    if (appState.flowDirection === "outflow") {
                        popupTitle = `${attrs.selectedStateName} to ${attrs.destinationName}`;
                        popupContent = `<b>${attrs.nValue.toLocaleString()}</b> people moved from <b>${attrs.selectedStateName}</b> to <b>${attrs.destinationName}</b>.`;//<br><br>Adjusted Gross Income: <b>$${attrs.AGI ? attrs.AGI.toLocaleString() : "N/A"}</b>.`;
                    } else {
                        popupTitle = `${attrs.originName} to ${attrs.selectedStateName}`;
                        popupContent = `<b>${attrs.nValue.toLocaleString()}</b> people moved from <b>${attrs.originName}</b> to <b>${attrs.selectedStateName}</b>.`;//<br><br>Adjusted Gross Income: <b>$${attrs.AGI ? attrs.AGI.toLocaleString() : "N/A"}</b>.`;
                    }
                }

                popupDiv.innerHTML = `<div style="font-weight:bold;margin-bottom:8px;">${popupTitle}</div>${popupContent}`;
                popupDiv.style.display = "block";
            } else if (popupDiv) {
                popupDiv.style.display = "none";
            }
        });
    });
}