import {
  i
} from "./chunk-GW5PUVUW.js";
import {
  r
} from "./chunk-ZNU5NTGY.js";
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
import {
  __decorate
} from "./chunk-A44PNKPT.js";
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

// node_modules/@arcgis/core/rest/networks/circuits/support/QueryCircuitsParameters.js
var p;
var c = p = class extends n {
  static from(t) {
    return m(p, t);
  }
  constructor(t) {
    super(t), this.gdbVersion = null, this.sessionId = null, this.moment = null, this.domainNetworkName = null, this.circuits = null, this.location = null, this.locationType = null, this.returnConsumerCircuits = false, this.resultTypes = null;
  }
  writeLocation(t, o) {
    null != t && (o.sourceId = t.sourceId, o.globalId = t.globalId, o.terminalId = t.terminalId, o.firstUnit = t.firstUnit, o.numUnits = t.numUnits);
  }
};
__decorate([m2({ type: String, json: { write: true } })], c.prototype, "gdbVersion", void 0), __decorate([m2({ type: String, json: { write: true } })], c.prototype, "sessionId", void 0), __decorate([m2({ type: Date, json: { type: Number, write: { writer: (t, o) => {
  o.moment = t ? t.getTime() : null;
} } } })], c.prototype, "moment", void 0), __decorate([m2({ type: String, json: { write: true } })], c.prototype, "domainNetworkName", void 0), __decorate([m2({ type: [String], json: { write: true } })], c.prototype, "circuits", void 0), __decorate([m2({ type: i, json: { write: true } })], c.prototype, "location", void 0), __decorate([r("location")], c.prototype, "writeLocation", null), __decorate([m2({ type: String, json: { write: true } })], c.prototype, "locationType", void 0), __decorate([m2({ type: Boolean, json: { write: true } })], c.prototype, "returnConsumerCircuits", void 0), __decorate([m2({ type: [String], json: { write: true } })], c.prototype, "resultTypes", void 0), c = p = __decorate([a("esri.rest.networks.circuits.support.QueryCircuitsParameters")], c);
var u = c;
export {
  u as default
};
//# sourceMappingURL=QueryCircuitsParameters-GFM2YVSG.js.map
