import {
  m
} from "./chunk-PDYTYXXK.js";
import {
  P
} from "./chunk-B7MDSPWU.js";
import {
  y3 as y
} from "./chunk-JM7F7WRC.js";
import {
  z
} from "./chunk-66BNN6ZJ.js";
import {
  _,
  c
} from "./chunk-NOVKMJNS.js";
import {
  i
} from "./chunk-PB4SYOXK.js";

// node_modules/@arcgis/core/geometry/support/typeUtils.js
var y2 = i()({ esriGeometryPoint: "point", esriGeometryMultipoint: "multipoint", esriGeometryPolyline: "polyline", esriGeometryPolygon: "polygon" });
var m2 = i()({ esriGeometryPoint: "point", esriGeometryMultipoint: "multipoint", esriGeometryPolyline: "polyline", esriGeometryPolygon: "polygon", esriGeometryEnvelope: "extent", mesh: "mesh" });
var l = { base: c, key: "type", typeMap: { extent: z, multipoint: m, point: _, polyline: y, polygon: P } };
function s(o) {
  return "point" === o.type;
}
function u(o) {
  return "multipoint" === o.type;
}
function f(o) {
  return "polygon" === o.type;
}
function G(o) {
  return "polyline" === o.type;
}

export {
  y2 as y,
  m2 as m,
  l,
  s,
  u,
  f,
  G
};
//# sourceMappingURL=chunk-GTUYDBKL.js.map
