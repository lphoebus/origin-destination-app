import {
  D,
  _,
  w
} from "./chunk-LZ55PE6G.js";
import {
  Be,
  Re,
  Ue,
  Ve
} from "./chunk-FQCWOTPI.js";
import "./chunk-WDVA66U2.js";
import "./chunk-46RQS76J.js";
import "./chunk-JJZLVRAQ.js";
import "./chunk-3QMQSBQ4.js";
import "./chunk-KNBNEFVY.js";
import "./chunk-JTZJWVKG.js";
import "./chunk-7J6TZQJ4.js";
import "./chunk-ZNU5NTGY.js";
import "./chunk-J3VZVJYU.js";
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

// node_modules/@arcgis/core/geometry/operators/json/convexHullOperator.js
function a(t) {
  const r = Re(t);
  return Ue(w(r.getGeometry()), r.getSpatialReference());
}
function c(e, r = {}) {
  const { merge: o = false } = r, [u, a2] = Be(e);
  return _(u, o).map((e2) => Ue(e2, a2));
}
function p(e) {
  return D(Ve(e));
}
export {
  a as execute,
  c as executeMany,
  p as isConvex
};
//# sourceMappingURL=convexHullOperator-T5V3L3OB.js.map
