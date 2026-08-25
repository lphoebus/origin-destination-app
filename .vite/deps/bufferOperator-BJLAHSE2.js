import {
  f,
  l
} from "./chunk-HL65C6LV.js";
import "./chunk-QFVNOJSP.js";
import "./chunk-2FU45OJM.js";
import "./chunk-2HZRCXTJ.js";
import "./chunk-WQNPUDXY.js";
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

// node_modules/@arcgis/core/geometry/operators/json/bufferOperator.js
function a(t, o, m = {}) {
  const { unit: a2 } = m, c2 = Ee(t);
  a2 && c2 && (o = F(o, a2, c2));
  const u = Re(t), p = u.getSpatialReference();
  return Ue(f(u.getGeometry(), p, o), p);
}
function c(e, i, a2 = {}) {
  let { maxDeviation: c2 = NaN, maxVerticesInFullCircle: u = 96, union: p = false, unit: f2 } = a2;
  const l2 = Ee(e);
  f2 && l2 && (i = i.map((t) => F(t, f2, l2)), c2 && (c2 = F(c2, f2, l2)));
  const [j, x] = Be(e);
  return l(j, x, i, c2, u, p).map((t) => Ue(t, x)).filter(N);
}
export {
  a as execute,
  c as executeMany
};
//# sourceMappingURL=bufferOperator-BJLAHSE2.js.map
