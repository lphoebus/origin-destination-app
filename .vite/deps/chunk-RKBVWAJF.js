import {
  r
} from "./chunk-CVV6MIDL.js";
import {
  O
} from "./chunk-7OBUFU3X.js";
import {
  K,
  _,
  x
} from "./chunk-EO4UMOUD.js";

// node_modules/@arcgis/core/support/basemapUtils.js
function c(e, r2) {
  var _a;
  const t = e.allLayerViews.find((e2) => e2.uid === r2);
  return (t == null ? void 0 : t.layer.parent) === ((_a = e.map) == null ? void 0 : _a.basemap);
}
function p(e, r2) {
  var _a, _b;
  if (e === r2) return true;
  if (null != ((_a = e == null ? void 0 : e.portalItem) == null ? void 0 : _a.id) && e.portalItem.id === ((_b = r2 == null ? void 0 : r2.portalItem) == null ? void 0 : _b.id)) return true;
  return "equal" === w(v(e), v(r2), { mustMatchReferences: true });
}
function m(e) {
  return !!(e == null ? void 0 : e.baseLayers.concat(e.referenceLayers).some(b));
}
function b(e) {
  if (S(e.url)) return true;
  if ("vector-tile" === e.type) for (const r2 in e.sourceNameToSource) {
    const t = e.sourceNameToSource[r2];
    if (S(t == null ? void 0 : t.sourceUrl)) return true;
  }
  return false;
}
function d(e, r2) {
  var _a;
  if (null == r2 || null == e) return { spatialReference: null, updating: false };
  if ("not-loaded" === r2.loadStatus) return r2.load(), { spatialReference: null, updating: true };
  if (r2.spatialReference) return { spatialReference: r2.spatialReference, updating: false };
  if (0 === r2.baseLayers.length) return { spatialReference: null, updating: false };
  const t = r2.baseLayers.at(0);
  switch (t.loadStatus) {
    case "not-loaded":
      t.load();
    case "loading":
      return { spatialReference: null, updating: true };
    case "failed":
      return { spatialReference: null, updating: false };
  }
  const a2 = (("supportedSpatialReferences" in t ? t.supportedSpatialReferences : null) || ["tileInfo" in t ? (_a = t.tileInfo) == null ? void 0 : _a.spatialReference : t.spatialReference]).filter(Boolean), n = e.spatialReference;
  return n ? { spatialReference: a2.find((e2) => n.equals(e2)) ?? a2[0] ?? null, updating: false } : { spatialReference: a2[0], updating: false };
}
var L = /^(basemaps|ibasemaps).*-api\.arcgis\.com$/i;
function S(e) {
  if (!e) return false;
  const r2 = new x(_(e));
  return !!r2.authority && L.test(r2.authority);
}
function v(e) {
  return e ? !e.loaded && e.resourceInfo ? R(e.resourceInfo.data) : { baseLayers: g(e.baseLayers), referenceLayers: g(e.referenceLayers), groundLayers: g(e.groundLayers) } : null;
}
function g(r2) {
  return (O.isCollection(r2) ? r2.toArray() : r2).map(I);
}
function I(e) {
  var _a, _b;
  return { type: e.type, effect: "effect" in e ? e.effect : void 0, url: M("urlTemplate" in e && e.urlTemplate || e.url || "styleUrl" in e && e.styleUrl || ""), minScale: "minScale" in e && null != e.minScale ? e.minScale : 0, maxScale: "maxScale" in e && null != e.maxScale ? e.maxScale : 0, opacity: null != e.opacity ? e.opacity : 1, visible: null == e.visible || !!e.visible, sublayers: "map-image" !== e.type && "wms" !== e.type || null == e.sublayers ? void 0 : (_a = e.sublayers) == null ? void 0 : _a.map((e2) => ({ id: e2.id, visible: e2.visible })), activeLayerId: "wmts" === e.type ? (_b = e.activeLayer) == null ? void 0 : _b.id : void 0 };
}
function h(e) {
  return e.isReference || "ArcGISSceneServiceLayer" === e.layerType;
}
function R(e) {
  return e ? { baseLayers: T((e.baseMapLayers ?? []).filter((e2) => !h(e2))), referenceLayers: T((e.baseMapLayers ?? []).filter((e2) => h(e2))), groundLayers: T(e.groundLayers ?? []) } : null;
}
function T(e) {
  return e.map((e2) => q(e2));
}
function q(e) {
  let r2;
  switch (e.layerType) {
    case "VectorTileLayer":
      r2 = "vector-tile";
      break;
    case "ArcGISTiledMapServiceLayer":
      r2 = "tile";
      break;
    case "ArcGISSceneServiceLayer":
      r2 = "scene";
      break;
    case "IntegratedMesh3DTilesLayer":
      r2 = "IntegratedMesh3DTilesLayer";
      break;
    default:
      r2 = "unknown";
  }
  return { type: r2, effect: e.effect, url: M(e.templateUrl || e.urlTemplate || e.styleUrl || e.url), minScale: e.minScale ?? 0, maxScale: e.maxScale ?? 0, opacity: e.opacity ?? 1, visible: null == e.visibility || !!e.visibility, sublayers: void 0, activeLayerId: void 0 };
}
function w(e, r2, t) {
  if (null != e != (null != r2)) return "not-equal";
  if (!e || !r2) return "equal";
  if (!x2(e.baseLayers, r2.baseLayers)) return "not-equal";
  return x2(e.referenceLayers, r2.referenceLayers) ? "equal" : t.mustMatchReferences ? "not-equal" : "base-layers-equal";
}
function x2(e, r2) {
  if (e.length !== r2.length) return false;
  for (let t = 0; t < e.length; t++) if (!U(e[t], r2[t])) return false;
  return true;
}
function U(e, r2) {
  if (e.type !== r2.type || e.url !== r2.url || e.minScale !== r2.minScale || e.maxScale !== r2.maxScale || e.visible !== r2.visible || e.opacity !== r2.opacity) return false;
  if (!r(e.effect, r2.effect)) return false;
  if (null != e.activeLayerId || null != r2.activeLayerId) return e.activeLayerId === r2.activeLayerId;
  if (null != e.sublayers || null != r2.sublayers) {
    if (null == e.sublayers || null == r2.sublayers || e.sublayers.length !== r2.sublayers.length) return false;
    for (let t = 0; t < e.sublayers.length; t++) {
      const a2 = e.sublayers.at(t), n = r2.sublayers.at(t);
      if ((a2 == null ? void 0 : a2.id) !== (n == null ? void 0 : n.id) || (a2 == null ? void 0 : a2.visible) !== (n == null ? void 0 : n.visible)) return false;
    }
  }
  return true;
}
function M(e) {
  return e ? K(e).replace(/^\s*https?:/i, "").toLowerCase() : "";
}

export {
  c,
  p,
  m,
  b,
  d
};
//# sourceMappingURL=chunk-RKBVWAJF.js.map
