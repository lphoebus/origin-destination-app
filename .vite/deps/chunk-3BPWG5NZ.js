import {
  s as s2
} from "./chunk-PSBAH6IH.js";
import {
  a as a2,
  r as r2
} from "./chunk-XJ34JWUR.js";
import {
  s
} from "./chunk-GQZMDDEP.js";
import {
  y3 as y
} from "./chunk-JM7F7WRC.js";
import {
  o
} from "./chunk-27A66LHG.js";
import {
  r
} from "./chunk-ZNU5NTGY.js";
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

// node_modules/@arcgis/core/rest/networks/support/Association.js
var a3 = class extends n {
  constructor(t) {
    super(t), this.globalId = null, this.associationType = null, this.fromNetworkElement = null, this.toNetworkElement = null, this.geometry = null, this.errorMessage = null, this.percentAlong = null, this.errorCode = null, this.isContentVisible = null, this.status = null;
  }
  readFromNetworkElement(t, o2) {
    return o2.fromFirstUnit || o2.fromNumUnits ? new s2({ globalId: o2.fromGlobalId, networkSourceId: o2.fromNetworkSourceId, terminalId: o2.fromTerminalId, firstUnit: o2.fromFirstUnit, numUnits: o2.fromNumUnits }) : new s({ globalId: o2.fromGlobalId, networkSourceId: o2.fromNetworkSourceId, terminalId: o2.fromTerminalId });
  }
  writeFromNetworkElement(t, o2) {
    if (t && (o2.fromGlobalId = t.globalId, o2.fromNetworkSourceId = t.networkSourceId, o2.fromTerminalId = t.terminalId, "telecomNetworkElement" === t.type)) {
      const e = t;
      o2.fromFirstUnit = e.firstUnit, o2.fromNumUnits = e.numUnits;
    }
  }
  readToNetworkElement(t, o2) {
    return o2.toFirstUnit || o2.toNumUnits ? new s2({ globalId: o2.toGlobalId, networkSourceId: o2.toNetworkSourceId, terminalId: o2.toTerminalId, firstUnit: o2.toFirstUnit, numUnits: o2.toNumUnits }) : new s({ globalId: o2.toGlobalId, networkSourceId: o2.toNetworkSourceId, terminalId: o2.toTerminalId });
  }
  writeToNetworkElement(t, o2) {
    if (t && (o2.toGlobalId = t.globalId, o2.toNetworkSourceId = t.networkSourceId, o2.toTerminalId = t.terminalId, "telecomNetworkElement" === t.type)) {
      const e = t;
      o2.toFirstUnit = e.firstUnit, o2.toNumUnits = e.numUnits;
    }
  }
  equals(t) {
    if (this.globalId === r2 && t.globalId === r2) {
      let o2 = function(t2, o3) {
        return t2.networkSourceId === o3.networkSourceId && t2.globalId === o3.globalId && t2.terminalId === o3.terminalId && t2.firstUnit === o3.firstUnit && t2.numUnits === o3.numUnits;
      };
      const e = this.fromNetworkElement, r3 = this.toNetworkElement, n2 = t.fromNetworkElement, i = t.toNetworkElement, l = o2(e, n2), s3 = o2(r3, i);
      return l && s3 && this.associationType === t.associationType;
    }
    return null != this.globalId && null != t.globalId && this.globalId === t.globalId;
  }
};
__decorate([m({ type: String, json: { write: true } })], a3.prototype, "globalId", void 0), __decorate([m({ type: a2.apiValues, json: { type: a2.jsonValues, read: a2.read, write: a2.write } })], a3.prototype, "associationType", void 0), __decorate([m({ type: s, json: { write: { target: { fromGlobalId: { type: String }, fromNetworkSourceId: { type: Number }, fromTerminalId: { type: Number }, fromFirstUnit: { type: Number }, fromNumUnits: { type: Number } } }, read: { source: ["fromGlobalId", "fromNetworkSourceId", "fromTerminalId", "fromFirstUnit", "fromNumUnits"] } } })], a3.prototype, "fromNetworkElement", void 0), __decorate([o("fromNetworkElement")], a3.prototype, "readFromNetworkElement", null), __decorate([r("fromNetworkElement")], a3.prototype, "writeFromNetworkElement", null), __decorate([m({ type: s, json: { write: { target: { toGlobalId: { type: String }, toNetworkSourceId: { type: Number }, toTerminalId: { type: Number }, toFirstUnit: { type: Number }, toNumUnits: { type: Number } } }, read: { source: ["toGlobalId", "toNetworkSourceId", "toTerminalId", "toFirstUnit", "toNumUnits"] } } })], a3.prototype, "toNetworkElement", void 0), __decorate([o("toNetworkElement")], a3.prototype, "readToNetworkElement", null), __decorate([r("toNetworkElement")], a3.prototype, "writeToNetworkElement", null), __decorate([m({ type: y, json: { write: true } })], a3.prototype, "geometry", void 0), __decorate([m({ type: String, json: { write: true } })], a3.prototype, "errorMessage", void 0), __decorate([m({ type: Number, json: { write: true } })], a3.prototype, "percentAlong", void 0), __decorate([m({ type: Number, json: { write: true } })], a3.prototype, "errorCode", void 0), __decorate([m({ type: Boolean, json: { write: true } })], a3.prototype, "isContentVisible", void 0), __decorate([m({ type: Number, json: { write: true } })], a3.prototype, "status", void 0), a3 = __decorate([a("esri.rest.networks.support.Association")], a3);

export {
  a3 as a
};
//# sourceMappingURL=chunk-3BPWG5NZ.js.map
