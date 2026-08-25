import {
  F,
  J,
  N
} from "./chunk-VF3OV6F3.js";
import {
  o
} from "./chunk-FKDE64FM.js";
import {
  n
} from "./chunk-NOPG2N5A.js";

// node_modules/@arcgis/core/geometry/projection/projectPointToVector.js
function i(e, o2, i2, c2) {
  if (J(e.spatialReference, i2)) {
    f[0] = e.x, f[1] = e.y;
    const r = e.z;
    return f[2] = r ?? c2 ?? 0, o(f, e.spatialReference, 0, o2, i2, 0);
  }
  const s = F(e, i2);
  return !!s && (o2[0] = s == null ? void 0 : s.x, o2[1] = s == null ? void 0 : s.y, o2[2] = (s == null ? void 0 : s.z) ?? c2 ?? 0, true);
}
async function c(e, r, t, n2, c2) {
  return await N(e.spatialReference, t, null, c2), i(e, r, t, n2);
}
var f = n();

export {
  i,
  c
};
//# sourceMappingURL=chunk-KYLNZZVU.js.map
