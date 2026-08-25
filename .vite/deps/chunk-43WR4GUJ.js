import {
  p
} from "./chunk-34QY3NUE.js";
import {
  i as i3
} from "./chunk-GW5PUVUW.js";
import {
  s
} from "./chunk-PSBAH6IH.js";
import {
  i as i2,
  o as o2,
  t
} from "./chunk-XJ34JWUR.js";
import {
  y3 as y
} from "./chunk-JM7F7WRC.js";
import {
  o
} from "./chunk-27A66LHG.js";
import {
  h,
  l
} from "./chunk-DLX5DTNB.js";
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
import {
  i3 as i
} from "./chunk-KUWSTWZR.js";
import {
  N
} from "./chunk-NH2CL7HZ.js";

// node_modules/@arcgis/core/networks/support/CircuitPathConnectivityElement.js
var c = class extends n {
  constructor(e) {
    super(e), this.edgeElement = null, this.junctionElement = null;
  }
  readEdgeElement(e, t2) {
    return new s({ networkSourceId: t2.edgeNetworkSourceId, globalId: t2.edgeGlobalId, objectId: t2.edgeObjectId, positionFrom: t2.edgePositionFrom, positionTo: t2.edgePositionTo, firstUnit: t2.edgeFirstUnit, numUnits: t2.edgeNumUnits });
  }
  writeEdgeElement(e, t2) {
    t2.edgeNetworkSourceId = e.networkSourceId, t2.edgeGlobalId = e.globalId, t2.edgeObjectId = e.objectId, t2.edgePositionFrom = e.positionFrom, t2.edgePositionTo = e.positionTo, t2.edgeFirstUnit = e.firstUnit, t2.edgeNumUnits = e.numUnits;
  }
  readJunctionElement(e, t2) {
    return new s({ networkSourceId: t2.junctionNetworkSourceId, globalId: t2.junctionGlobalId, objectId: t2.junctionObjectId, terminalId: t2.junctionTerminalId, firstUnit: t2.junctionFirstUnit, numUnits: t2.junctionNumUnits });
  }
  writeJunctionElement(e, t2) {
    t2.junctionNetworkSourceId = e.networkSourceId, t2.junctionGlobalId = e.globalId, t2.junctionObjectId = e.objectId, t2.junctionTerminalId = e.terminalId, t2.junctionFirstUnit = e.firstUnit, t2.junctionNumUnits = e.numUnits;
  }
};
__decorate([m({ type: s, json: { read: { source: ["edgeNetworkSourceId", "edgeGlobalId", "edgeObjectId", "edgePositionFrom", "edgePositionTo", "edgeFirstUnit", "edgeNumUnits"] }, write: true } })], c.prototype, "edgeElement", void 0), __decorate([o("edgeElement")], c.prototype, "readEdgeElement", null), __decorate([r("edgeElement")], c.prototype, "writeEdgeElement", null), __decorate([m({ type: s, json: { read: { source: ["junctionNetworkSourceId", "junctionGlobalId", "junctionObjectId", "junctionTerminalId", "junctionFirstUnit", "junctionNumUnits"] }, write: true } })], c.prototype, "junctionElement", void 0), __decorate([o("junctionElement")], c.prototype, "readJunctionElement", null), __decorate([r("junctionElement")], c.prototype, "writeJunctionElement", null), c = __decorate([a("esri.networks.support.CircuitPathConnectivityElement")], c);
var s2 = c;

// node_modules/@arcgis/core/networks/support/CircuitPath.js
var n2 = class extends n {
  constructor(t2) {
    super(t2), this.pathId = null, this.order = null, this.startingPoint = null, this.stoppingPoint = null, this.pathConnectivity = [], this.geometry = null;
  }
};
__decorate([m({ type: Number, json: { write: true } })], n2.prototype, "pathId", void 0), __decorate([m({ type: Number, json: { write: true } })], n2.prototype, "order", void 0), __decorate([m({ type: p, json: { write: true } })], n2.prototype, "startingPoint", void 0), __decorate([m({ type: p, json: { write: true } })], n2.prototype, "stoppingPoint", void 0), __decorate([m({ type: [s2], json: { write: true } })], n2.prototype, "pathConnectivity", void 0), __decorate([m({ type: y, json: { write: true } })], n2.prototype, "geometry", void 0), n2 = __decorate([a("esri.networks.support.CircuitPath")], n2);
var c2 = n2;

// node_modules/@arcgis/core/networks/support/Subcircuit.js
var s3 = class extends n {
  constructor(t2) {
    super(t2), this.name = null, this.globalId = null, this.providerId = null, this.consumerId = null, this.isReserved = false, this.attributes = null;
  }
  getAttribute(t2) {
    var _a;
    return (_a = this.attributes) == null ? void 0 : _a[t2];
  }
  setAttribute(t2, r2) {
    this.attributes ? this.attributes[t2] = r2 : this.attributes = { [t2]: r2 };
  }
};
__decorate([m({ type: String, json: { write: true } })], s3.prototype, "name", void 0), __decorate([m({ type: String, json: { write: true } })], s3.prototype, "globalId", void 0), __decorate([m({ type: String })], s3.prototype, "providerId", void 0), __decorate([m({ type: String })], s3.prototype, "consumerId", void 0), __decorate([m({ type: Boolean, json: { write: true } })], s3.prototype, "isReserved", void 0), __decorate([m({ json: { write: { allowNull: true, writer: (t2, r2) => r2.attributes = t2 ?? {} } } })], s3.prototype, "attributes", void 0), s3 = __decorate([a("esri.networks.support.Subcircuit")], s3);
var i4 = s3;

// node_modules/@arcgis/core/networks/support/CircuitSection.js
var u = class extends n {
  constructor(t2) {
    super(t2), this.sectionId = null, this.role = "start-and-end", this.sectionType = "physical", this.startLocation = null, this.stopLocation = null, this.subcircuit = null, this.path = null;
  }
  normalizeCtorArgs(t2) {
    if (void 0 === t2) return t2;
    const { sectionId: o3, startLocation: r2, stopLocation: s4, subcircuit: e } = t2;
    return (r2 || s4) && e ? (delete t2.startLocation, delete t2.stopLocation, i.getLogger(this).warn("Cannot instantiate CircuitSection with both start/stop locations and subcircuit.", `CircuitSection with ID '${o3}' was defaulted to having a subcircuit only.`)) : (r2 && !s4 || !r2 && s4) && !e && i.getLogger(this).warn(`CircuitSection with ID '${o3}' must have both start and stop locations.`, "Create/alter operations involving this section will fail unless both are populated."), t2;
  }
  setStartStopLocations(t2, o3) {
    this.startLocation = t2, this.stopLocation = o3, this.subcircuit = null;
  }
  setSubcircuit(t2) {
    this.subcircuit = t2, this.startLocation = null, this.stopLocation = null;
  }
};
__decorate([m({ type: Number, json: { write: true } })], u.prototype, "sectionId", void 0), __decorate([m({ type: o2.apiValues, json: { type: o2.jsonValues, read: o2.read }, readOnly: true })], u.prototype, "role", void 0), __decorate([m({ type: i2.apiValues, json: { type: i2.jsonValues, read: i2.read, write: i2.write } })], u.prototype, "sectionType", void 0), __decorate([m({ type: i3, json: { write: true } })], u.prototype, "startLocation", void 0), __decorate([m({ type: i3, json: { write: true } })], u.prototype, "stopLocation", void 0), __decorate([m({ type: i4, json: { write: true } })], u.prototype, "subcircuit", void 0), __decorate([m({ type: c2, readOnly: true })], u.prototype, "path", void 0), u = __decorate([a("esri.networks.support.CircuitSection")], u);

// node_modules/@arcgis/core/networks/support/Circuit.js
var m2 = class extends n {
  constructor(t2) {
    super(t2), this._sectionIdLookup = /* @__PURE__ */ new Map(), this.attributes = null, this.circuitManager = null, this.circuitType = "physical", this.globalId = null, this.isDeleted = false, this.lastExportedTime = null, this.lastVerifiedTime = null, this.name = null, this.sections = null, this.startLocation = null, this.status = "dirty", this.stopLocation = null, this.subcircuits = [];
  }
  initialize() {
    this.addHandles([l(() => this.sections, (t2) => {
      this._sectionIdLookup.clear(), null != t2 && Array.from(t2.keys()).forEach((t3) => this._sectionIdLookup.set(t3.sectionId, t3));
    }, h)]);
  }
  normalizeCtorArgs(t2) {
    if (void 0 === t2) return t2;
    const { name: o3, startLocation: e, stopLocation: s4, sections: r2 } = t2;
    return (e || s4) && r2 ? (delete t2.startLocation, delete t2.stopLocation, i.getLogger(this).warn("Cannot instantiate Circuit with both start/stop locations and sections.", `Circuit '${o3}' was defaulted to having sections only.`)) : (e && !s4 || !e && s4) && !r2 && i.getLogger(this).warn(`Non-sectioned circuit '${o3}' must have both start and stop locations.`, "Create/alter operations involving this circuit will fail unless both are populated."), t2;
  }
  get isSectioned() {
    return null == this.startLocation && null == this.stopLocation && null != this.sections;
  }
  readSections(t2, e) {
    const { sectionOrder: i5, sections: s4 } = e, r2 = /* @__PURE__ */ new Map();
    if (null == s4) return null;
    if (this._sectionIdLookup.clear(), s4.forEach((t3) => this._sectionIdLookup.set(t3.sectionId, u.fromJSON(t3))), null == i5) return Array.from(this._sectionIdLookup.values()).forEach((t3) => r2.set(t3, [])), r2;
    for (const [n3, a2] of Object.entries(i5)) {
      const t3 = Number(n3), e2 = this._sectionIdLookup.get(t3);
      if (null == e2) continue;
      const i6 = a2.map((t4) => this._sectionIdLookup.get(t4)).filter(N);
      r2.set(e2, i6);
    }
    return r2;
  }
  writeSections(t2, o3) {
    const e = {}, i5 = [];
    t2 == null ? void 0 : t2.forEach((t3, o4) => {
      const s4 = o4.sectionId.toString(), r2 = t3.map((t4) => t4.sectionId);
      e[s4] = r2, i5.push(o4.toJSON());
    }), o3.sectionOrder = e, o3.sections = i5;
  }
  getSectionById(t2) {
    return this._sectionIdLookup.get(t2) ?? null;
  }
  setStartStopLocations(t2, o3) {
    this.startLocation = t2, this.stopLocation = o3, this.sections = null;
  }
  setSections(t2) {
    this.sections = t2, this.startLocation = null, this.stopLocation = null;
  }
  getAttribute(t2) {
    var _a;
    return (_a = this.attributes) == null ? void 0 : _a[t2];
  }
  setAttribute(t2, o3) {
    this.attributes ? this.attributes[t2] = o3 : this.attributes = { [t2]: o3 };
  }
};
__decorate([m({ json: { write: { allowNull: true, writer: (t2, o3) => o3.attributes = t2 ?? {} } } })], m2.prototype, "attributes", void 0), __decorate([m()], m2.prototype, "circuitManager", void 0), __decorate([m({ type: i2.apiValues, json: { type: i2.jsonValues, read: i2.read, write: i2.write } })], m2.prototype, "circuitType", void 0), __decorate([m({ type: String, json: { write: true } })], m2.prototype, "globalId", void 0), __decorate([m({ type: Boolean, readOnly: true })], m2.prototype, "isDeleted", void 0), __decorate([m({ type: Boolean, json: { write: true }, readOnly: true })], m2.prototype, "isSectioned", null), __decorate([m({ type: Date, json: { read: { reader: (t2) => "number" == typeof t2 ? new Date(t2) : null } }, readOnly: true })], m2.prototype, "lastExportedTime", void 0), __decorate([m({ type: Date, json: { read: { reader: (t2) => "number" == typeof t2 ? new Date(t2) : null } }, readOnly: true })], m2.prototype, "lastVerifiedTime", void 0), __decorate([m({ type: String, json: { write: true } })], m2.prototype, "name", void 0), __decorate([m({ json: { read: { source: ["sectionOrder", "sections"] }, write: true } })], m2.prototype, "sections", void 0), __decorate([o("sections")], m2.prototype, "readSections", null), __decorate([r("sections")], m2.prototype, "writeSections", null), __decorate([m({ type: i3, json: { write: true } })], m2.prototype, "startLocation", void 0), __decorate([m({ type: t.apiValues, json: { type: t.jsonValues, read: t.read } })], m2.prototype, "status", void 0), __decorate([m({ type: i3, json: { write: true } })], m2.prototype, "stopLocation", void 0), __decorate([m({ type: [i4], json: { write: true } })], m2.prototype, "subcircuits", void 0), m2 = __decorate([a("esri.networks.support.Circuit")], m2);

export {
  c2 as c,
  m2 as m
};
//# sourceMappingURL=chunk-43WR4GUJ.js.map
