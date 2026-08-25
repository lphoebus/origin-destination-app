import {
  a as a2
} from "./chunk-3BPWG5NZ.js";
import "./chunk-PSBAH6IH.js";
import "./chunk-XJ34JWUR.js";
import "./chunk-GQZMDDEP.js";
import {
  f,
  s,
  u
} from "./chunk-WNOCFBHR.js";
import "./chunk-JM7F7WRC.js";
import "./chunk-26FGXCQ6.js";
import "./chunk-LERWNH2Q.js";
import "./chunk-6YICR2EO.js";
import "./chunk-PSH6CRUA.js";
import "./chunk-UJKR5KHP.js";
import "./chunk-HXC5WSBJ.js";
import "./chunk-66BNN6ZJ.js";
import "./chunk-NOVKMJNS.js";
import "./chunk-27A66LHG.js";
import "./chunk-5YBW6KQ6.js";
import "./chunk-6LIC47AK.js";
import "./chunk-7J6TZQJ4.js";
import "./chunk-ZNU5NTGY.js";
import "./chunk-J3VZVJYU.js";
import "./chunk-U2QKMJ4B.js";
import "./chunk-UWOUWJRN.js";
import {
  n
} from "./chunk-4EJ2CVAA.js";
import {
  m2 as m
} from "./chunk-TSVVEDRS.js";
import {
  a2 as a
} from "./chunk-HPSHCA6S.js";
import "./chunk-PB4SYOXK.js";
import "./chunk-GJFVHE2X.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";
import {
  H2 as H
} from "./chunk-EO4UMOUD.js";
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

// node_modules/@arcgis/core/rest/networks/support/AssociationGeometriesResult.js
var p = class extends n {
  constructor(o) {
    super(o), this.maxGeometryCountExceeded = false, this.associations = [];
  }
};
__decorate([m({ type: Boolean, json: { write: true } })], p.prototype, "maxGeometryCountExceeded", void 0), __decorate([m({ type: [a2], json: { write: true } })], p.prototype, "associations", void 0), p = __decorate([a("esri.rest.networks.support.AssociationGeometriesResult")], p);

// node_modules/@arcgis/core/rest/networks/synthesizeAssociationGeometries.js
async function n2(r, n3, a3) {
  const c = f(r), f2 = { ...n3.toJSON(), f: "json" }, m2 = u({ ...c.query, ...f2 });
  a3 ? a3.method = "post" : a3 = { method: "post" };
  const p2 = s(m2, a3), u2 = `${c.path}/synthesizeAssociationGeometries`;
  return H(u2, p2).then((t) => i(t, n3.outSpatialReference));
}
function i(t, e) {
  const { data: o } = t;
  if (e) for (const s2 of o.associations) s2.geometry.spatialReference || (s2.geometry.spatialReference = e.clone());
  return p.fromJSON(o);
}
export {
  n2 as synthesizeAssociationGeometries
};
//# sourceMappingURL=synthesizeAssociationGeometries-PUAAAAT4.js.map
