import {
  q
} from "./chunk-D6PEJ6S7.js";
import {
  i
} from "./chunk-CNF6SPK6.js";
import {
  o
} from "./chunk-FKDE64FM.js";
import {
  T
} from "./chunk-J3VZVJYU.js";

// node_modules/@arcgis/core/geometry/support/meshUtils/projectMeshVertexPositions.js
function n(n2, i2) {
  const p = q(n2, i.absolute);
  if (!p) return null;
  let s = p.position;
  return T(n2.spatialReference, i2) || (s = new Float64Array(p.position.length), o(p.position, n2.spatialReference, 0, s, i2, 0)) ? s : null;
}

export {
  n
};
//# sourceMappingURL=chunk-NK252TEV.js.map
