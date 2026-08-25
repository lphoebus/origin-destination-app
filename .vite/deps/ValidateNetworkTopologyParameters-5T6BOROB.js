import {
  d
} from "./chunk-XJ34JWUR.js";
import {
  z
} from "./chunk-66BNN6ZJ.js";
import "./chunk-NOVKMJNS.js";
import "./chunk-27A66LHG.js";
import "./chunk-5YBW6KQ6.js";
import "./chunk-6LIC47AK.js";
import {
  f
} from "./chunk-7J6TZQJ4.js";
import {
  r
} from "./chunk-ZNU5NTGY.js";
import "./chunk-J3VZVJYU.js";
import "./chunk-U2QKMJ4B.js";
import "./chunk-UWOUWJRN.js";
import {
  n
} from "./chunk-4EJ2CVAA.js";
import {
  m2
} from "./chunk-TSVVEDRS.js";
import {
  a2 as a,
  m
} from "./chunk-HPSHCA6S.js";
import "./chunk-PB4SYOXK.js";
import "./chunk-GJFVHE2X.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";
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

// node_modules/@arcgis/core/rest/networks/support/ValidateNetworkTopologyParameters.js
var n2;
var d2 = n2 = class extends n {
  static from(t) {
    return m(n2, t);
  }
  constructor(t) {
    super(t), this.gdbVersion = null, this.sessionID = null, this.validationType = null, this.validateArea = null, this.validationSet = null, this.outSpatialReference = null;
  }
  writeOutSR(t, o, e) {
    if (null != t) {
      const { wkid: r2, latestWkid: i, wkt: s, wkt2: p } = t;
      o[e] = JSON.stringify({ wkid: r2 ?? void 0, latestWkid: i ?? void 0, wkt: s ?? void 0, wkt2: p ?? void 0 });
    }
  }
};
__decorate([m2({ type: String, json: { write: true } })], d2.prototype, "gdbVersion", void 0), __decorate([m2({ type: String, json: { write: true } })], d2.prototype, "sessionID", void 0), __decorate([m2({ type: d.apiValues, json: { type: d.jsonValues, read: d.read, write: d.write } })], d2.prototype, "validationType", void 0), __decorate([m2({ type: z, json: { write: true } })], d2.prototype, "validateArea", void 0), __decorate([m2({ type: [Object], json: { write: true } })], d2.prototype, "validationSet", void 0), __decorate([m2({ type: f, json: { write: { allowNull: true, target: "outSR" } } })], d2.prototype, "outSpatialReference", void 0), __decorate([r("outSpatialReference")], d2.prototype, "writeOutSR", null), d2 = n2 = __decorate([a("esri.rest.networks.support.ValidateNetworkTopologyParameters")], d2);
var c = d2;
export {
  c as default
};
//# sourceMappingURL=ValidateNetworkTopologyParameters-5T6BOROB.js.map
