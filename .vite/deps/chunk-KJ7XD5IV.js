import {
  n
} from "./chunk-4EJ2CVAA.js";
import {
  m2 as m
} from "./chunk-TSVVEDRS.js";
import {
  a2 as a
} from "./chunk-HPSHCA6S.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";

// node_modules/@arcgis/core/rest/networks/support/ValidateNetworkTopologyResult.js
var s = class extends n {
  constructor(e) {
    super(e), this.moment = null, this.fullUpdate = false, this.validateErrorsCreated = false, this.exceededTransferLimit = null, this.serviceEdits = null, this.discoveredSubnetworks = null;
  }
};
__decorate([m({ type: Date, json: { type: Number, write: { writer: (e, o) => {
  o.moment = e ? e.getTime() : null;
} } } })], s.prototype, "moment", void 0), __decorate([m({ type: Boolean, json: { write: true } })], s.prototype, "fullUpdate", void 0), __decorate([m({ type: Boolean, json: { write: true } })], s.prototype, "validateErrorsCreated", void 0), __decorate([m({ type: Boolean, json: { write: true } })], s.prototype, "exceededTransferLimit", void 0), __decorate([m({ type: [Object], json: { write: true } })], s.prototype, "serviceEdits", void 0), __decorate([m({ type: [Object], json: { write: true } })], s.prototype, "discoveredSubnetworks", void 0), s = __decorate([a("esri.rest.networks.support.ValidateNetworkTopologyResult")], s);
var i = s;

export {
  i
};
//# sourceMappingURL=chunk-KJ7XD5IV.js.map
