import {
  m as m2
} from "./chunk-43WR4GUJ.js";
import "./chunk-34QY3NUE.js";
import "./chunk-GW5PUVUW.js";
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
import "./chunk-DLX5DTNB.js";
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

// node_modules/@arcgis/core/rest/networks/circuits/support/QueryCircuitsResult.js
var i = class extends n {
  constructor(r) {
    super(r), this.circuits = null, this.circuitNames = null;
  }
};
__decorate([m({ type: [m2], json: { write: true } })], i.prototype, "circuits", void 0), __decorate([m({ type: [String], json: { write: true } })], i.prototype, "circuitNames", void 0), i = __decorate([a("esri.rest.networks.circuits.support.QueryCircuitsResult")], i);

// node_modules/@arcgis/core/rest/networks/circuits/queryCircuits.js
async function o(o2, e, c) {
  const p = f(o2), n2 = e.toJSON();
  e.circuits && (n2.circuits = JSON.stringify(e.circuits)), e.resultTypes && (n2.resultTypes = JSON.stringify(e.resultTypes));
  const y = { ...n2, f: "json" }, f2 = u({ ...p.query, ...y }), m3 = s(f2, { ...c, method: "post" }), a2 = `${p.path}/circuits/query`, { data: l } = await H(a2, m3);
  return i.fromJSON(l);
}
export {
  o as queryCircuits
};
//# sourceMappingURL=queryCircuits-W6SBCSMF.js.map
