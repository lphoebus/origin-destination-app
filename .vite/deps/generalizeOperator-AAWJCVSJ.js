import {
  o,
  t
} from "./chunk-5KGMU3LX.js";
import "./chunk-2HZRCXTJ.js";
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
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/geometry/operators/json/generalizeOperator.js
function u(r, a, u2 = {}) {
  const { removeDegenerateParts: i2 = false, unit: c } = u2, m = Ee(r);
  c && m && (a = F(a, c, m));
  const p = Re(r), l = t(p.getGeometry(), a, i2);
  return null == l ? null : Ue(l, p.getSpatialReference());
}
function i(t2, o2, u2 = {}) {
  const { removeDegenerateParts: i2 = false, unit: c } = u2, m = Ee(t2);
  c && m && (o2 = F(o2, c, m));
  const [p, l] = Be(t2);
  return o(p, o2, i2).map((e) => Ue(e, l));
}
export {
  u as execute,
  i as executeMany
};
//# sourceMappingURL=generalizeOperator-AAWJCVSJ.js.map
