import {
  C,
  Z,
  j,
  x
} from "./chunk-7CEGKISM.js";
import {
  o,
  s,
  t,
  u
} from "./chunk-3JIZIR4V.js";
import {
  N
} from "./chunk-NH2CL7HZ.js";

// node_modules/@arcgis/core/chunks/intersectionOperator.js
function u2(e) {
  const r = C(e);
  return t(x(e), Z(r));
}
function i(e, r) {
  const t2 = C(e);
  return j(o(x(e), x(r), Z(t2)), t2);
}
function m(r, t2) {
  const o2 = r.map(x), u3 = C(r);
  return u(o2, x(t2), Z(u3), 7).map((e) => j(e, u3)).filter(N);
}
var f = s();
var l = Object.freeze(Object.defineProperty({ __proto__: null, accelerateGeometry: u2, execute: i, executeMany: m, supportsCurves: f }, Symbol.toStringTag, { value: "Module" }));

export {
  u2 as u,
  i,
  m,
  f,
  l
};
//# sourceMappingURL=chunk-P6OBA3W3.js.map
