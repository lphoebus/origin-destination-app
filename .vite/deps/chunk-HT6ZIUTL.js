import {
  y
} from "./chunk-VRXXO3VP.js";
import {
  g
} from "./chunk-42UJ54JV.js";
import {
  f
} from "./chunk-WNOCFBHR.js";
import {
  b
} from "./chunk-M3SP5TM6.js";

// node_modules/@arcgis/core/rest/query/executeQueryJSON.js
async function s(r, t, e, s2) {
  const n = await a(r, t, e, s2);
  return g.fromJSON(n);
}
async function a(o, s2, a2, n) {
  const i = f(o), p = { ...a2 }, u = b.from(s2), { data: m } = await y(i, u, u.sourceSpatialReference, p, n);
  return m;
}

export {
  s,
  a
};
//# sourceMappingURL=chunk-HT6ZIUTL.js.map
