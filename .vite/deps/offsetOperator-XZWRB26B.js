import {
  j,
  w
} from "./chunk-POPAEXFR.js";
import {
  Be,
  Ee,
  Re,
  Ue
} from "./chunk-FQCWOTPI.js";
import "./chunk-WDVA66U2.js";
import "./chunk-46RQS76J.js";
import "./chunk-JJZLVRAQ.js";
import "./chunk-3QMQSBQ4.js";
import "./chunk-KNBNEFVY.js";
import "./chunk-JTZJWVKG.js";
import "./chunk-7J6TZQJ4.js";
import "./chunk-ZNU5NTGY.js";
import {
  F
} from "./chunk-J3VZVJYU.js";
import "./chunk-U2QKMJ4B.js";
import "./chunk-UWOUWJRN.js";
import "./chunk-4EJ2CVAA.js";
import "./chunk-TSVVEDRS.js";
import "./chunk-HPSHCA6S.js";
import "./chunk-PB4SYOXK.js";
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
import {
  N
} from "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/geometry/operators/json/offsetOperator.js
var u = { round: 0, bevel: 1, miter: 2, square: 3 };
function a(t, o, m = {}) {
  const { miterLimit: a2 = 10, flattenError: c2 = 0, joins: f = "round", unit: p } = m, j2 = Ee(t);
  p && j2 && (o = F(o, p, j2));
  const l = Re(t), x = l.getSpatialReference();
  return Ue(w(l.getGeometry(), x, o, u[f], a2, c2), x);
}
function c(e, i, a2 = {}) {
  const { miterLimit: c2 = 10, flattenError: f = 0, joins: p = "round", unit: j2 } = a2, l = Ee(e);
  j2 && l && (i = F(i, j2, l));
  const [x, d] = Be(e);
  return j(x, d, i, u[p], c2, f).map((t) => Ue(t, d)).filter(N);
}
export {
  a as execute,
  c as executeMany
};
//# sourceMappingURL=offsetOperator-XZWRB26B.js.map
