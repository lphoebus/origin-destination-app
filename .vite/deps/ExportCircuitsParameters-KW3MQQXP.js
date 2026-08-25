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

// node_modules/@arcgis/core/rest/networks/circuits/support/ExportCircuitsParameters.js
var n2;
var c = n2 = class extends n {
  static from(t) {
    return m(n2, t);
  }
  constructor(t) {
    super(t), this.circuits = null, this.exportAcknowledgement = false, this.moment = null, this.outSpatialReference = null, this.domainNetworkName = null, this.gdbVersion = null, this.sessionId = null;
  }
  writeOutSR(t, o, e) {
    if (null != t) {
      const { wkid: r2, latestWkid: i, wkt: s, wkt2: p } = t;
      o[e] = JSON.stringify({ wkid: r2 ?? void 0, latestWkid: i ?? void 0, wkt: s ?? void 0, wkt2: p ?? void 0 });
    }
  }
};
__decorate([m2({ json: { type: [String], write: true } })], c.prototype, "circuits", void 0), __decorate([m2({ json: { type: Boolean, write: true } })], c.prototype, "exportAcknowledgement", void 0), __decorate([m2({ type: Date, json: { type: Number, write: { writer: (t, o) => {
  o.moment = t ? t.getTime() : null;
} } } })], c.prototype, "moment", void 0), __decorate([m2({ type: f, json: { write: { allowNull: true, target: "outSR" } } })], c.prototype, "outSpatialReference", void 0), __decorate([r("outSpatialReference")], c.prototype, "writeOutSR", null), __decorate([m2({ type: String, json: { write: true } })], c.prototype, "domainNetworkName", void 0), __decorate([m2({ type: String, json: { write: true } })], c.prototype, "gdbVersion", void 0), __decorate([m2({ type: String, json: { write: true } })], c.prototype, "sessionId", void 0), c = n2 = __decorate([a("esri.rest.networks.circuits.support.ExportCircuitsParameters")], c);
var l = c;
export {
  l as default
};
//# sourceMappingURL=ExportCircuitsParameters-KW3MQQXP.js.map
