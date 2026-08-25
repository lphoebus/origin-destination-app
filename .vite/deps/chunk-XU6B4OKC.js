import {
  r
} from "./chunk-YY7ZQU67.js";
import {
  p
} from "./chunk-ZNEADBNN.js";
import {
  s
} from "./chunk-RCDARI2U.js";
import {
  n as n2
} from "./chunk-H7NF3WNO.js";
import {
  _ as _2
} from "./chunk-IG7ETWYB.js";
import {
  n2 as n3
} from "./chunk-EMUDAHJ3.js";
import {
  u
} from "./chunk-6JSVAOL7.js";
import {
  m as m2
} from "./chunk-7OACEG3J.js";
import {
  e as e3
} from "./chunk-PVAT2NHO.js";
import {
  n
} from "./chunk-NOPG2N5A.js";
import {
  y3 as y2
} from "./chunk-JM7F7WRC.js";
import {
  e as e2,
  y
} from "./chunk-6YICR2EO.js";
import {
  _
} from "./chunk-NOVKMJNS.js";
import {
  f
} from "./chunk-7J6TZQJ4.js";
import {
  m
} from "./chunk-HPSHCA6S.js";
import {
  e
} from "./chunk-QRKINRAQ.js";

// node_modules/@arcgis/core/views/2d/interactive/SnappingVisualizer2D.js
var f2 = class extends r {
  constructor(e4) {
    super(), this._graphicsLayer = e4, this._symbolPairingsByType = /* @__PURE__ */ new Map();
  }
  visualizeIntersectionPoint(e4, t) {
    return this._visualizeSnappingIndicator(new _({ x: e4.intersectionPoint[0], y: e4.intersectionPoint[1], spatialReference: t.spatialReference }), this._getOrCreateSymbol("intersectionPoint", t.view.effectiveTheme.accentColor));
  }
  visualizePoint(e4, t) {
    return this._visualizeSnappingIndicator(new _({ x: e4.point[0], y: e4.point[1], spatialReference: t.spatialReference }), this._getOrCreateSymbol("point", t.view.effectiveTheme.accentColor));
  }
  visualizeLine(e4, t) {
    return this._visualizeSnappingIndicator(new y2({ paths: [[[...e4.lineStart], [...e4.lineEnd]]], spatialReference: m(f, t.spatialReference) }), this._getOrCreateSymbol("line", t.view.effectiveTheme.accentColor));
  }
  visualizeParallelSign(e4, t) {
    return this._visualizeSnappingIndicator(new y2({ paths: [[[...e4.lineStart], [...e4.lineEnd]]], spatialReference: m(f, t.spatialReference) }), this._getOrCreateSymbol("parallelSign", t.view.effectiveTheme.accentColor));
  }
  visualizeRightAngleQuad(e4, t) {
    const r2 = n2(), s2 = n2(), p2 = n();
    e2(r2, s(e4.centerVertex), s(e4.previousVertex)), e2(s2, s(e4.nextVertex), s(e4.previousVertex)), y(p2, r2, s2);
    const y3 = `rightAngleQuad${p2[2] < 0 ? 45 : 225}`;
    return this._visualizeSnappingIndicator(new y2({ paths: [[[...e4.previousVertex], [...e4.centerVertex], [...e4.nextVertex]]], spatialReference: m(f, t.spatialReference) }), this._getOrCreateSymbol(y3, t.view.effectiveTheme.accentColor));
  }
  _visualizeSnappingIndicator(r2, i) {
    const o = new _2({ geometry: r2, symbol: i });
    return this._graphicsLayer.add(o), e(() => {
      this._graphicsLayer.remove(o);
    });
  }
  _getOrCreateSymbol(e4, t) {
    var _a;
    const r2 = this._symbolPairingsByType;
    return ((_a = r2.get(e4)) == null ? void 0 : _a.color) !== t && r2.set(e4, { color: t, symbol: u2(e4, t) }), r2.get(e4).symbol;
  }
};
function u2(e4, t) {
  const i = [...t.toRgb(), 255 * t.a];
  switch (e4) {
    case "point":
      return new u({ outline: { width: 0.5, color: [0, 0, 0, 1] }, size: 10, color: t });
    case "intersectionPoint":
      return new u({ outline: new m2({ width: 1.5, color: t }), size: 15, color: [0, 0, 0, 0] });
    case "line":
      return new n3({ data: { type: "CIMSymbolReference", symbol: { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMSolidStroke", enable: true, capStyle: "Butt", joinStyle: "Round", miterLimit: 10, width: e3(p.lineHintWidthTarget), color: i }] } } });
    case "parallelSign":
      return new n3({ data: { type: "CIMSymbolReference", symbol: { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, anchorPoint: { x: 0, y: -1, z: 0 }, anchorPointUnits: "Relative", size: 5, markerPlacement: { type: "CIMMarkerPlacementOnLine", placePerPart: true, angleToLine: true, relativeTo: "LineMiddle" }, frame: { xmin: -5, ymin: -1.5, xmax: 5, ymax: 1.5 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { rings: [[[7, 0], [-7, 0], [-7, 1.5], [7, 1.5]]] }, symbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: true, color: i }] } }], scaleSymbolsProportionally: true, respectFrame: true }, { type: "CIMVectorMarker", enable: true, anchorPoint: { x: 0, y: 1, z: 0 }, anchorPointUnits: "Relative", size: 5, markerPlacement: { type: "CIMMarkerPlacementOnLine", placePerPart: true, angleToLine: true, relativeTo: "LineMiddle" }, frame: { xmin: -5, ymin: -1.5, xmax: 5, ymax: 1.5 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { rings: [[[7, 0], [-7, 0], [-7, -1.5], [7, -1.5]]] }, symbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: true, color: i }] } }], scaleSymbolsProportionally: true, respectFrame: true }] } } });
    case "rightAngleQuad45":
    case "rightAngleQuad225": {
      const o = "rightAngleQuad45" === e4 ? 45 : 225;
      return new n3({ data: { type: "CIMSymbolReference", symbol: { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, anchorPoint: { x: 0.5, y: 0.5, z: 0 }, anchorPointUnits: "Relative", size: e3(p.rightAngleHintSize), rotation: o, markerPlacement: { type: "CIMMarkerPlacementOnVertices", placePerPart: true, angleToLine: true, placeOnEndPoints: false }, frame: { xmin: -5, ymin: -5, xmax: 5, ymax: 5 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { paths: [[[5, -5], [-5, -5], [-5, 5], [5, 5], [5, -5]]] }, symbol: { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMSolidStroke", enable: true, capStyle: "Butt", joinStyle: "Round", miterLimit: 10, width: e3(p.rightAngleHintOutlineSize), color: i }, { type: "CIMSolidFill", enable: true, color: [...t.toRgb(), 255 * t.a * 0.4] }] } }], scaleSymbolsProportionally: true, respectFrame: true }] } } });
    }
  }
}

export {
  f2 as f
};
//# sourceMappingURL=chunk-XU6B4OKC.js.map
