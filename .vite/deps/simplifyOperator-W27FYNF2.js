import {
  e,
  o,
  u
} from "./chunk-RHFQWL2M.js";
import {
  Be,
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

// node_modules/@arcgis/core/geometry/operators/json/simplifyOperator.js
function p(t) {
  const r = Re(t), c = r.getSpatialReference();
  return Ue(e(r.getGeometry(), c, false), c);
}
function a(e2) {
  const [r, o2] = Be(e2);
  return u(r, o2, false).map((e3) => Ue(e3, o2));
}
function i(e2) {
  const t = Re(e2);
  return o(t.getGeometry(), t.getSpatialReference(), false);
}
export {
  p as execute,
  a as executeMany,
  i as isSimple
};
//# sourceMappingURL=simplifyOperator-W27FYNF2.js.map
