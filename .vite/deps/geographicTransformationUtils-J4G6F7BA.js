import {
  c,
  i
} from "./chunk-VLLUHJV4.js";
import {
  F,
  n,
  r
} from "./chunk-UWOUWJRN.js";
import "./chunk-TSVVEDRS.js";
import "./chunk-HPSHCA6S.js";
import "./chunk-GJFVHE2X.js";
import "./chunk-A44PNKPT.js";
import "./chunk-EO4UMOUD.js";
import "./chunk-PRKAQBHS.js";
import "./chunk-CYEWK46L.js";
import "./chunk-NVNJVVMF.js";
import "./chunk-63GXB7XB.js";
import "./chunk-5XIDIYOG.js";
import "./chunk-QLJQMJ35.js";
import "./chunk-HQPAN4GW.js";
import "./chunk-PXFESYJY.js";
import "./chunk-BZQFVEAQ.js";
import "./chunk-QRKINRAQ.js";
import "./chunk-KUWSTWZR.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/geometry/operators/support/geographicTransformationUtils.js
var i2;
var s;
var c2;
var a;
function p() {
  return !!i2 && r();
}
async function u() {
  if (!p()) {
    const [t, o, r2, p2] = await Promise.all([import("./Envelope2D-N6PQU754.js"), import("./ProjectionTransformation-OQ7TSLUN.js").then(({ queryTransformationList: n2 }) => n2), import("./SpatialReference-SX6Y666V.js").then(({ injectPe: n2 }) => n2), import("./apiConverter-LPI7RUQK.js"), n()]);
    c2 = t.Envelope2D.construct, a = t.Envelope2D.constructEmpty(), i2 = o, r2(F), s = p2.fromSpatialReference;
  }
}
function m(n2, t, e = null) {
  const o = e ? l(e) : a, r2 = i2(0, s(n2), s(t), o, 1, true);
  return r2.length > 0 ? h(r2[0]) : null;
}
function f(n2, t, e = null) {
  const o = e ? l(e) : a;
  return i2(0, s(n2), s(t), o, 0, true).map((n3) => h(n3));
}
function l(n2) {
  return c2(n2.xmin, n2.ymin, n2.xmax, n2.ymax);
}
function h(n2) {
  const t = new c();
  for (let e = 0; e < n2.count(); e++) {
    const o = n2.getStep(e);
    t.steps.push(new i({ wkid: o.getID(), isInverse: o.isInverted() }));
  }
  return t;
}
export {
  m as getTransformation,
  f as getTransformations,
  p as isLoaded,
  u as load
};
//# sourceMappingURL=geographicTransformationUtils-J4G6F7BA.js.map
