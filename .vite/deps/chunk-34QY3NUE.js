import {
  e
} from "./chunk-XJ34JWUR.js";
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

// node_modules/@arcgis/core/rest/networks/support/TraceLocation.js
var i = class extends n {
  constructor(t) {
    super(t), this.globalId = null, this.isFilterBarrier = false, this.percentAlong = null, this.terminalId = null, this.type = null, this.firstUnit = null, this.numUnits = null, this.networkSourceId = null;
  }
};
__decorate([m({ type: String, json: { write: true } })], i.prototype, "globalId", void 0), __decorate([m({ type: Boolean, json: { write: true } })], i.prototype, "isFilterBarrier", void 0), __decorate([m({ type: Number, json: { write: true } })], i.prototype, "percentAlong", void 0), __decorate([m({ type: Number, json: { write: true } })], i.prototype, "terminalId", void 0), __decorate([m({ type: e.apiValues, json: { type: e.jsonValues, read: { reader: e.read, source: "traceLocationType" }, write: { writer: e.write, target: "traceLocationType" } } })], i.prototype, "type", void 0), __decorate([m({ type: Number, json: { write: true } })], i.prototype, "firstUnit", void 0), __decorate([m({ type: Number, json: { write: true } })], i.prototype, "numUnits", void 0), __decorate([m({ type: Number })], i.prototype, "networkSourceId", void 0), i = __decorate([a("esri.rest.networks.support.TraceLocation")], i);
var p = i;

export {
  p
};
//# sourceMappingURL=chunk-34QY3NUE.js.map
