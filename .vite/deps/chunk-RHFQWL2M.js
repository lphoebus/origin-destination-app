import {
  Eh
} from "./chunk-WDVA66U2.js";
import {
  s
} from "./chunk-JJZLVRAQ.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorSimplify.js
var t = new Eh();
function e(n, r, e2) {
  return t.execute(n, r, e2, null);
}
function u(r, e2, u2) {
  const o2 = t.executeMany(new s(r), e2, u2, null);
  return Array.from(o2);
}
function o(n, r, e2) {
  return t.isSimpleAsFeature(n, r, e2, null, null);
}
function s2() {
  return t.supportsCurves();
}

export {
  e,
  u,
  o,
  s2 as s
};
//# sourceMappingURL=chunk-RHFQWL2M.js.map
