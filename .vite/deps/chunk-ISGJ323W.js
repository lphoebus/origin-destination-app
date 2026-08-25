import {
  c,
  m as m3
} from "./chunk-43WR4GUJ.js";
import {
  s as s2
} from "./chunk-PSBAH6IH.js";
import {
  s
} from "./chunk-GQZMDDEP.js";
import {
  m as m2
} from "./chunk-PDYTYXXK.js";
import {
  P
} from "./chunk-B7MDSPWU.js";
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

// node_modules/@arcgis/core/rest/networks/circuits/support/CircuitTraceResult.js
var u = class extends n {
  constructor(r2) {
    super(r2), this.circuit = null, this.geometry = null, this.path = null;
  }
  readCircuit(r2, t) {
    return m3.fromJSON(t);
  }
};
__decorate([m({ type: m3, json: { write: true, read: { source: ["name", "globalId", "isSectioned", "sectionOrder", "startLocation", "stopLocation", "sections", "subcircuits", "lastVerifiedTime", "lastExportedTime", "circuitType", "status"] } } })], u.prototype, "circuit", void 0), __decorate([o("circuit")], u.prototype, "readCircuit", null), __decorate([m({ type: y, json: { write: true } })], u.prototype, "geometry", void 0), __decorate([m({ type: c, json: { write: true } })], u.prototype, "path", void 0), u = __decorate([a("esri.rest.networks.circuits.support.CircuitTraceResult")], u);
var a2 = u;

// node_modules/@arcgis/core/rest/networks/support/AggregatedGeometry.js
var n2 = class extends n {
  constructor(o2) {
    super(o2), this.line = null, this.multipoint = null, this.polygon = null;
  }
};
__decorate([m({ type: y, json: { write: true }, readOnly: true })], n2.prototype, "line", void 0), __decorate([m({ type: m2, json: { read: { source: "point" }, write: { target: "point" } }, readOnly: true })], n2.prototype, "multipoint", void 0), __decorate([m({ type: P, json: { write: true }, readOnly: true })], n2.prototype, "polygon", void 0), n2 = __decorate([a("esri.rest.networks.support.AggregatedGeometry")], n2);
var l = n2;

// node_modules/@arcgis/core/rest/networks/support/FunctionResult.js
var s3 = class extends n {
  constructor(t) {
    super(t), this.functionType = null, this.networkAttributeName = null, this.result = null;
  }
};
__decorate([m({ type: ["add", "subtract", "average", "count", "min", "max"], json: { write: true }, readOnly: true })], s3.prototype, "functionType", void 0), __decorate([m({ type: String, json: { write: true }, readOnly: true })], s3.prototype, "networkAttributeName", void 0), __decorate([m({ type: Number, json: { write: true }, readOnly: true })], s3.prototype, "result", void 0), s3 = __decorate([a("esri.rest.networks.support.FunctionResult")], s3);
var p = s3;

// node_modules/@arcgis/core/rest/networks/support/TraceResult.js
var c2 = class extends n {
  constructor(e) {
    super(e), this.aggregatedGeometry = null, this.circuits = null, this.elements = null, this.globalFunctionResults = null, this.kFeaturesForKNNFound = false, this.paths = null, this.startingPointsIgnored = false, this.warnings = null;
  }
  readNetworkElements(e, t) {
    return null != t.elements && Array.isArray(t.elements) ? t.elements.map((e2) => "firstUnit" in e2 && "numUnits" in e2 ? new s2({ ...e2 }) : new s({ ...e2 })) : [];
  }
  writeNetworkElements(e, t) {
    t.elements = e.map((e2) => e2.toJSON());
  }
};
__decorate([m({ type: l, json: { write: true }, readOnly: true })], c2.prototype, "aggregatedGeometry", void 0), __decorate([m({ type: [a2], json: { write: true }, readOnly: true })], c2.prototype, "circuits", void 0), __decorate([m({ type: [s], json: { write: true }, readOnly: true })], c2.prototype, "elements", void 0), __decorate([o("elements")], c2.prototype, "readNetworkElements", null), __decorate([r("elements")], c2.prototype, "writeNetworkElements", null), __decorate([m({ type: [p], json: { write: true }, readOnly: true })], c2.prototype, "globalFunctionResults", void 0), __decorate([m({ type: Boolean, json: { write: true }, readOnly: true })], c2.prototype, "kFeaturesForKNNFound", void 0), __decorate([m({ type: [c], json: { write: true }, readOnly: true })], c2.prototype, "paths", void 0), __decorate([m({ type: Boolean, json: { write: true }, readOnly: true })], c2.prototype, "startingPointsIgnored", void 0), __decorate([m({ type: [String], json: { write: true }, readOnly: true })], c2.prototype, "warnings", void 0), c2 = __decorate([a("esri.rest.networks.support.TraceResult")], c2);

export {
  c2 as c
};
//# sourceMappingURL=chunk-ISGJ323W.js.map
