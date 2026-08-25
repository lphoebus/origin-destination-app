import {
  e
} from "./chunk-J6U6ARLA.js";
import {
  N2 as N
} from "./chunk-J3VZVJYU.js";
import "./chunk-U2QKMJ4B.js";
import {
  F,
  n,
  r
} from "./chunk-UWOUWJRN.js";
import "./chunk-PB4SYOXK.js";
import "./chunk-GJFVHE2X.js";
import "./chunk-EO4UMOUD.js";
import "./chunk-PRKAQBHS.js";
import "./chunk-QRKINRAQ.js";
import "./chunk-KUWSTWZR.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorGeodeticDistance.js
var r2;
function i() {
  return !!r2 && r();
}
async function s() {
  if (!i()) {
    const [n3, i2] = await Promise.all([import("./OperatorGeodeticDistance-7O3XZAX3.js"), import("./SpatialReference-SX6Y666V.js").then(({ injectPe: e2 }) => e2), n()]);
    r2 = new n3.OperatorGeodeticDistance(), i2(F);
  }
}
function c(e2, t, n3, i2) {
  return r2.execute(e2, t, n3, i2, null);
}
function o() {
  return r2.supportsCurves();
}

// node_modules/@arcgis/core/geometry/operators/geodeticDistanceOperator.js
var a;
var n2;
var p;
var c2;
function u() {
  return !!a && i();
}
async function m() {
  if (!u()) {
    const [e2] = await Promise.all([import("./apiConverter-LPI7RUQK.js"), s()]);
    a = e2.fromGeometry, n2 = e2.fromSpatialReference, p = e2.getSpatialReference, c2 = o();
  }
}
function f(t, r3, o2 = {}) {
  const { curveType: c3 = "geodesic", unit: u2 } = o2, m2 = p(t);
  let f2 = c(a(t), a(r3), n2(m2), e[c3]);
  return f2 && u2 && (f2 = N(f2, "meters", u2)), f2;
}
export {
  f as execute,
  u as isLoaded,
  m as load,
  c2 as supportsCurves
};
//# sourceMappingURL=geodeticDistanceOperator-PZ2H6PY3.js.map
