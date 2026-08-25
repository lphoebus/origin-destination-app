import {
  n,
  s
} from "./chunk-YYBHQFVV.js";
import {
  c
} from "./chunk-XJ34JWUR.js";
import {
  m as m2
} from "./chunk-BLVO2TSG.js";
import {
  o
} from "./chunk-27A66LHG.js";
import {
  m2 as m
} from "./chunk-TSVVEDRS.js";
import {
  a2 as a
} from "./chunk-HPSHCA6S.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";

// node_modules/@arcgis/core/networks/support/NamedTraceConfiguration.js
var p = class extends m2 {
  constructor(r) {
    super(r), this.globalId = null, this.title = null, this.traceConfiguration = null, this.creationDate = null, this.creator = null, this.description = null, this.minStartingPoints = null, this.resultTypes = [], this.tags = [], this.traceType = null;
  }
  readTraceConfiguration(r, e) {
    return void 0 !== r.tierName ? n.fromJSON(r) : s.fromJSON(r);
  }
};
__decorate([m({ type: String, nonNullable: true, json: { origins: { "web-map": { read: { source: "id" }, write: { target: "id", isRequired: true } }, service: { read: { source: "globalId" }, write: { target: "globalId", isRequired: true } } }, read: false } })], p.prototype, "globalId", void 0), __decorate([m({ type: String, nonNullable: true, json: { origins: { "web-map": { read: { source: "title" }, write: { target: "title", isRequired: true } }, service: { read: { source: "name" }, write: { target: "name", isRequired: true } } }, read: false } })], p.prototype, "title", void 0), __decorate([m({ type: s, json: { origins: { service: { read: true, write: true } }, read: false } })], p.prototype, "traceConfiguration", void 0), __decorate([o("service", "traceConfiguration")], p.prototype, "readTraceConfiguration", null), __decorate([m({ type: Date, json: { origins: { service: { read: true, write: true } }, read: false } })], p.prototype, "creationDate", void 0), __decorate([m({ type: String, json: { origins: { service: { read: true, write: true } }, read: false } })], p.prototype, "creator", void 0), __decorate([m({ type: String, json: { origins: { service: { read: true, write: true } }, read: false } })], p.prototype, "description", void 0), __decorate([m({ type: ["none", "one", "many"], json: { origins: { service: { read: { source: "minNumStartingPoints" }, write: { target: "minNumStartingPoints" } } }, read: false } })], p.prototype, "minStartingPoints", void 0), __decorate([m({ json: { origins: { service: { read: true, write: true } }, read: false } })], p.prototype, "resultTypes", void 0), __decorate([m({ type: [String], json: { origins: { service: { read: true, write: true } }, read: false } })], p.prototype, "tags", void 0), __decorate([m({ type: c.apiValues, json: { type: c.jsonValues, origins: { service: { read: c.read, write: c.write } }, read: false } })], p.prototype, "traceType", void 0), p = __decorate([a("esri.networks.support.NamedTraceConfiguration")], p);
var d = p;

export {
  d
};
//# sourceMappingURL=chunk-2VLVOCYN.js.map
