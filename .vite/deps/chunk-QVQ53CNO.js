import {
  M
} from "./chunk-6MWN3HK7.js";
import {
  y
} from "./chunk-HPSHCA6S.js";
import {
  a,
  s2 as s,
  t
} from "./chunk-KUWSTWZR.js";

// node_modules/@arcgis/core/webdoc/support/writeUtils.js
var o = /* @__PURE__ */ new Set(["bing-maps", "imagery", "imagery-tile", "map-image", "open-street-map", "tile", "unknown", "unsupported", "vector-tile", "web-tile", "wcs", "wms", "wmts"]);
var l = /* @__PURE__ */ new Set(["integrated-mesh-3dtiles"]);
var a2 = /* @__PURE__ */ new Set(["catalog", "csv", "feature", "geo-rss", "geojson", "group", "imagery", "imagery-tile", "kml", "knowledge-graph", "map-image", "map-notes", "media", "ogc-feature", "oriented-imagery", "route", "stream", "subtype-group", "tile", "unknown", "unsupported", "vector-tile", "video", "web-tile", "wcs", "wfs", "wms", "wmts"]);
var s2 = /* @__PURE__ */ new Set([...a2, "link-chart"]);
function u(e) {
  switch (e.layerContainerType) {
    case "basemap-base-layers":
      return o;
    case "basemap-ground-layers":
      return l;
    case "operational-layers":
      return "link-chart" === e.origin ? s2 : a2;
    default:
      return null;
  }
}
function m(e, t2) {
  if (t2.restrictedWebMapWriting) {
    const n = u(t2);
    return null == n || n.has(e.type) && !M(e);
  }
  return true;
}
function p(e, t2) {
  var _a;
  if (t2) if (M(e)) {
    const r = t("featureCollection.layers", t2), i = (_a = r == null ? void 0 : r[0]) == null ? void 0 : _a.layerDefinition;
    i && f(e, i);
  } else "group" !== e.type && f(e, t2);
}
function f(e, t2) {
  "maxScale" in e && (t2.maxScale = y(e.maxScale) ?? void 0), "minScale" in e && (t2.minScale = y(e.minScale) ?? void 0);
}
function g(e, t2) {
  if (p(e, t2), t2 && (t2.id = e.id, "blendMode" in e && (t2.blendMode = e.blendMode, "normal" === t2.blendMode && delete t2.blendMode), t2.opacity = y(e.opacity) ?? void 0, t2.title = e.title || "Layer", t2.visibility = e.visible, "legendEnabled" in e && "wmts" !== e.type)) if (M(e)) {
    const n = t2.featureCollection;
    n && (n.showLegend = e.legendEnabled);
  } else t2.showLegend = e.legendEnabled;
}
function y2(n, r, o2) {
  if (!n.persistenceEnabled) return null;
  if (!("write" in n) || !n.write) return (o2 == null ? void 0 : o2.messages) && o2.messages.push(new s("layer:unsupported", `Layers (${n.title}, ${n.id}) of type '${n.declaredClass}' cannot be persisted`, { layer: n })), null;
  if (M(n) && !n.isTable) r = n.resourceInfo;
  else if (m(n, o2)) {
    const e = {};
    return n.write(e, o2) ? e : null;
  }
  return null != r && g(n, r = a(r)), r;
}

export {
  y2 as y
};
//# sourceMappingURL=chunk-QVQ53CNO.js.map
