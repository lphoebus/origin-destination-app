import {
  s
} from "./chunk-JJZLVRAQ.js";
import {
  F,
  n,
  r
} from "./chunk-UWOUWJRN.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorGeodesicBuffer.js
var o;
function s2() {
  return !!o && r();
}
async function u() {
  if (!s2()) {
    const [e, t] = await Promise.all([import("./OperatorGeodesicBuffer-P5OFBUSI.js"), import("./SpatialReference-SX6Y666V.js").then(({ injectPe: e2 }) => e2), n()]);
    o = new e.OperatorGeodesicBuffer(), t(F);
  }
}
function c(e, r2, n2, t, s3) {
  return o.execute(e, r2, n2, t, s3, false, null);
}
function i(r2, n2, t, s3, u2, c2) {
  const i2 = o.executeMany(new s(r2), n2, t, s3, u2, false, c2, null);
  return Array.from(i2);
}
function a() {
  return o.supportsCurves();
}

export {
  s2 as s,
  u,
  c,
  i,
  a
};
//# sourceMappingURL=chunk-AOMQCG27.js.map
