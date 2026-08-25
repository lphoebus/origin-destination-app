import {
  a,
  c,
  s,
  u
} from "./chunk-EN6XQHDS.js";
import "./chunk-JJZLVRAQ.js";
import "./chunk-UWOUWJRN.js";
import "./chunk-GJFVHE2X.js";
import "./chunk-EO4UMOUD.js";
import "./chunk-PRKAQBHS.js";
import "./chunk-QRKINRAQ.js";
import "./chunk-KUWSTWZR.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/geometry/operators/json/projectOperator.js
var n;
var a2;
var s2;
var i;
var c2;
function m() {
  return !!n && u();
}
async function f() {
  if (!m()) {
    const [o, t] = await Promise.all([import("./jsonConverter-IOQOVMSO.js"), import("./projectionTransformation-H2W5SNPQ.js"), c()]);
    n = o.fromGeometries, a2 = o.fromGeometry, s2 = o.fromSpatialReference, i = o.toGeometry, c2 = t.createProjectionTransformation;
  }
}
function p(e, o, r) {
  const n2 = a2(e), m2 = s2(o), f2 = c2(n2.getSpatialReference(), m2, r);
  return i(s(n2.getGeometry(), f2), m2);
}
function u2(e, o, t) {
  const [a3, m2] = n(e), f2 = s2(o), p2 = c2(m2, f2, t);
  return a(a3, p2).map((e2) => i(e2, f2));
}
export {
  p as execute,
  u2 as executeMany,
  m as isLoaded,
  f as load
};
//# sourceMappingURL=projectOperator-5FVYH5H5.js.map
