import {
  c as c4
} from "./chunk-ISGJ323W.js";
import {
  d as d2
} from "./chunk-2VLVOCYN.js";
import {
  i as i5
} from "./chunk-KJ7XD5IV.js";
import {
  t as t2
} from "./chunk-4L5WGIHG.js";
import {
  s as s3
} from "./chunk-PSBAH6IH.js";
import {
  a as a3,
  r as r4,
  s as s2
} from "./chunk-XJ34JWUR.js";
import {
  et
} from "./chunk-422REYLF.js";
import {
  r as r3
} from "./chunk-SPJJXOD6.js";
import {
  c as c2,
  c2 as c3,
  g,
  h,
  i as i4,
  l as l4,
  t
} from "./chunk-KR46Y4WW.js";
import {
  l as l3
} from "./chunk-BLVO2TSG.js";
import {
  b as b2
} from "./chunk-M3SP5TM6.js";
import {
  k
} from "./chunk-OXBIWFFC.js";
import {
  m as m2,
  o as o3
} from "./chunk-6MWN3HK7.js";
import {
  _
} from "./chunk-IG7ETWYB.js";
import {
  l as l2,
  o as o2,
  r
} from "./chunk-LD5EOJIR.js";
import {
  i as i3
} from "./chunk-MYD3EEGE.js";
import {
  u as u2
} from "./chunk-PDXC6YP2.js";
import {
  f as f2
} from "./chunk-MWWK5WRN.js";
import {
  r as r2
} from "./chunk-5HYMAKZL.js";
import {
  z
} from "./chunk-66BNN6ZJ.js";
import {
  l
} from "./chunk-DLX5DTNB.js";
import {
  f
} from "./chunk-7J6TZQJ4.js";
import {
  a as a2,
  n
} from "./chunk-4EJ2CVAA.js";
import {
  b,
  m2 as m
} from "./chunk-TSVVEDRS.js";
import {
  a2 as a
} from "./chunk-HPSHCA6S.js";
import {
  i as i2,
  o
} from "./chunk-PB4SYOXK.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";
import {
  H2 as H,
  I,
  p2 as p
} from "./chunk-EO4UMOUD.js";
import {
  e
} from "./chunk-PRKAQBHS.js";
import {
  d,
  u3 as u
} from "./chunk-QRKINRAQ.js";
import {
  i3 as i,
  s2 as s
} from "./chunk-KUWSTWZR.js";
import {
  c
} from "./chunk-NH2CL7HZ.js";

// node_modules/@arcgis/core/networks/support/TopologyValidationJobInfo.js
var n2 = i2()({ Pending: "job-waiting", InProgress: "job-executing", Completed: "job-succeeded" });
var l5 = class extends i5 {
  constructor(t3) {
    super(t3), this.statusUrl = null, this.status = null, this.submissionTime = null, this.lastUpdatedTime = null, this._timer = void 0;
  }
  destroy() {
    clearInterval(this._timer);
  }
  async checkJobStatus(t3) {
    const s5 = { ...t3, query: { f: "json" } }, { data: r5 } = await H(this.statusUrl, s5);
    return this.read(r5), this.editsResolver && this.editsResolver.resolve({ edits: null, addedFeatures: [], updatedFeatures: [], deletedFeatures: [], addedAttachments: [], updatedAttachments: [], deletedAttachments: [], exceededTransferLimit: true, historicMoment: null }), this;
  }
  async waitForJobCompletion(t3 = {}) {
    const { interval: e2 = 1e3, statusCallback: s5 } = t3;
    return new Promise((t4, o4) => {
      this._clearTimer();
      const i7 = setInterval(() => {
        this._timer || o4(u()), this.checkJobStatus().then((e3) => {
          const { status: r5 } = e3;
          switch (this.status = r5, r5) {
            case "job-succeeded":
              this._clearTimer(), t4(this);
              break;
            case "job-waiting":
            case "job-executing":
              s5 && s5(this);
          }
        }, (t5) => {
          this._clearTimer(), o4(t5);
        });
      }, e2);
      this._timer = i7;
    });
  }
  _clearTimer() {
    clearInterval(this._timer), this._timer = void 0;
  }
};
__decorate([m()], l5.prototype, "editsResolver", void 0), __decorate([m({ type: String, json: { write: true } })], l5.prototype, "statusUrl", void 0), __decorate([r2(n2)], l5.prototype, "status", void 0), __decorate([m({ type: Date, json: { type: Number, write: { writer: (t3, e2) => {
  e2.submissionTime = t3 ? t3.getTime() : null;
} } } })], l5.prototype, "submissionTime", void 0), __decorate([m({ type: Date, json: { type: Number, write: { writer: (t3, e2) => {
  e2.lastUpdatedTime = t3 ? t3.getTime() : null;
} } } })], l5.prototype, "lastUpdatedTime", void 0), l5 = __decorate([a("esri.networks.support.TopologyValidationJobInfo")], l5);
var m3 = l5;

// node_modules/@arcgis/core/networks/support/utils.js
function u3(e2, t3, r5 = "from") {
  const { fromRuleElement: n5, viaRuleElement: o4, toRuleElement: a5 } = y(e2), s5 = [];
  switch (e2.ruleType) {
    case 2:
    case 3:
      "from" === r5 && m4(t3, n5, false) ? s5.push(a5) : "to" === r5 && m4(t3, a5, false) && s5.push(n5);
      break;
    case 4:
    case 1:
      m4(t3, n5, true) ? s5.push(a5) : m4(t3, a5, true) && s5.push(n5);
      break;
    case 5:
      o4 && (m4(t3, o4, true) ? (s5.push(n5), s5.push(a5)) : (m4(t3, n5, true) || m4(t3, a5, true)) && s5.push(o4));
      break;
    default:
      return [];
  }
  return s5;
}
function i6(e2, t3, r5) {
  const { fromRuleElement: n5, viaRuleElement: o4, toRuleElement: a5 } = y(e2);
  switch (e2.ruleType) {
    case 2:
    case 3:
      return p2(t3, r5, n5, a5, false, false);
    case 4:
    case 1:
      return p2(t3, r5, n5, a5, true, true);
    case 5:
      return p2(t3, r5, n5, o4, true, true) || p2(t3, r5, a5, o4, true, true);
    default:
      return false;
  }
}
function p2(e2, t3, r5, n5, o4, a5) {
  if (!r5 || !n5) return false;
  const s5 = m4(e2, r5, a5), l7 = m4(t3, n5, a5);
  if (o4) {
    const o5 = m4(e2, n5, a5), u4 = m4(t3, r5, a5);
    return s5 && l7 || o5 && u4;
  }
  return s5 && l7;
}
function c5(e2, t3) {
  var _a;
  const r5 = (_a = e2.terminal) == null ? void 0 : _a.terminalId, n5 = t3.terminalId;
  return null == r5 && null == n5 || (1 === r5 ? null == n5 || 1 === n5 : r5 === n5);
}
function m4(e2, t3, r5) {
  var _a, _b, _c, _d;
  const { assetGroupCode: n5, assetTypeCode: o4 } = e2;
  return ("layerId" in e2 ? e2.layerId === ((_a = t3.networkSource) == null ? void 0 : _a.layerId) : e2.networkSourceId === ((_b = t3.networkSource) == null ? void 0 : _b.sourceId)) && (null == n5 || n5 === ((_c = t3.assetGroup) == null ? void 0 : _c.assetGroupCode)) && (null == o4 || o4 === ((_d = t3.assetType) == null ? void 0 : _d.assetTypeCode)) && (!r5 || !("terminalId" in e2) || c5(t3, e2));
}
function y(e2) {
  return { fromRuleElement: { networkSource: e2.fromNetworkSource, assetGroup: e2.fromAssetGroup, assetType: e2.fromAssetType, terminal: e2.fromTerminal }, viaRuleElement: e2.viaNetworkSource ? { networkSource: e2.viaNetworkSource, assetGroup: e2.viaAssetGroup, assetType: e2.viaAssetType, terminal: e2.viaTerminal } : void 0, toRuleElement: { networkSource: e2.toNetworkSource, assetGroup: e2.toAssetGroup, assetType: e2.toAssetType, terminal: e2.toTerminal } };
}
function f3(e2) {
  var _a;
  let t3 = null, r5 = null, o4 = null;
  if (i3(e2)) t3 = d3(e2), [r5, o4] = w(e2);
  else if (m2(e2)) {
    t3 = ((_a = e2.parent) == null ? void 0 : _a.layerId) ?? null;
    const [n5] = I2(e2);
    n5 === e2.subtypeField && (r5 = e2.subtypeCode);
  } else t3 = e2.layerId ?? null;
  return { layerId: t3, assetGroupCode: r5, assetTypeCode: o4 };
}
function d3(e2) {
  var _a;
  const { sourceLayer: t3 } = e2;
  let r5;
  return o3(t3) ? r5 = t3.layerId : m2(t3) && (r5 = (_a = t3.parent) == null ? void 0 : _a.layerId), r5 ?? null;
}
function w(e2) {
  const [t3, r5] = I2(e2.sourceLayer);
  return [t3 ? e2.attributes[t3] : null, r5 ? e2.attributes[r5] : null];
}
function I2(e2) {
  if (!e2 || !("fieldsIndex" in e2)) return [null, null];
  return [e2.fieldsIndex.normalizeFieldName("assetGroup") ?? null, e2.fieldsIndex.normalizeFieldName("assetType") ?? null];
}
async function S(e2, t3) {
  if ("Utility Network Layer" === e2) {
    const { default: e3 } = await import("./UtilityNetwork-4OEQYLQA.js");
    return new e3({ layerUrl: t3 });
  }
  return null;
}
async function T(r5) {
  var _a;
  let n5 = "portalItem" in r5 ? r5 : { portalItem: r5 };
  !n5.portalItem || n5.portalItem instanceof k || (n5 = { ...n5, portalItem: new k(n5.portalItem) });
  const o4 = n5.portalItem;
  if (await o4.load(), "Feature Service" !== o4.type) throw new s("portal:unknown-item-type", "Unknown item type '${type}'", { type: o4.type });
  const s5 = o4.url, l7 = await H(s5, { responseType: "json", query: { f: "json" } }), u4 = "Network Layer";
  if ((_a = l7.data.type) == null ? void 0 : _a.includes(u4)) return S(l7.data.type, s5);
  if (l7.data.layers) {
    const e2 = l7.data.layers.find((e3) => e3.type.includes(u4));
    if (e2) {
      const t3 = `${s5}/${e2.id}`;
      return S(e2.type, t3);
    }
  }
  return null;
}

// node_modules/@arcgis/core/networks/Network.js
var U = class extends l3(u2) {
  static fromPortalItem(e2) {
    return T(e2);
  }
  constructor(e2) {
    super(e2), this.id = null, this.title = null, this.layerUrl = null, this.dataElement = null, this.fullExtent = null, this.spatialReference = null, this.type = null, this.sourceJSON = null, this._historicMoment = null, this._gdbVersion = null, this._sourceIdByLayerId = /* @__PURE__ */ new Map(), this._layerIdBySourceId = /* @__PURE__ */ new Map(), this._applyEditsHandler = (e3) => {
      const { serviceUrl: t3, gdbVersion: r5, result: o4 } = e3, s5 = t3 === this.featureServiceUrl, i7 = g(t3, r5, this.gdbVersion);
      s5 && i7 && o4.then((e4) => {
        c2(t3, r5) && (this.historicMoment = e4.historicMoment);
      });
    }, this._updateMomentHandler = (e3) => {
      const { serviceUrl: t3, gdbVersion: r5, moment: o4 } = e3, s5 = t3 === this.featureServiceUrl, i7 = g(t3, r5, this.gdbVersion);
      s5 && i7 && (this.historicMoment = o4);
    }, this.when().then(() => {
      this.addHandles([l4(this._applyEditsHandler), h(this._updateMomentHandler)]);
    }, () => {
    });
  }
  initialize() {
    this.when().catch((e2) => {
      d(e2) || i.getLogger(this).error("#load()", `Failed to load layer (title: '${this.title ?? "no title"}', id: '${this.id ?? "no id"}')`, { error: e2 });
    });
  }
  get loaded() {
    return super.loaded;
  }
  get datasetName() {
    var _a;
    return ((_a = this.dataElement) == null ? void 0 : _a.name) ?? null;
  }
  get owner() {
    var _a;
    return ((_a = this.dataElement) == null ? void 0 : _a.userIdentity) ?? null;
  }
  get schemaGeneration() {
    var _a;
    return ((_a = this.dataElement) == null ? void 0 : _a.schemaGeneration) ?? null;
  }
  get parsedUrl() {
    return I(this.layerUrl);
  }
  get featureServiceUrl() {
    return p(this.parsedUrl.path).url.path;
  }
  get networkServiceUrl() {
    return this.featureServiceUrl.replace(/\/FeatureServer/i, "/UtilityNetworkServer");
  }
  get layerId() {
    return p(this.parsedUrl.path).sublayer;
  }
  get networkSystemLayers() {
    return null;
  }
  get gdbVersion() {
    return this._gdbVersion;
  }
  set gdbVersion(e2) {
    this._gdbVersion = e2;
  }
  get historicMoment() {
    return this._historicMoment;
  }
  set historicMoment(e2) {
    this._historicMoment = e2;
  }
  async load(e2) {
    return this.addResolvingPromise(this._load(e2)), this;
  }
  async _load(e2) {
    await Promise.all([this._fetchDataElement(this.featureServiceUrl, this.layerId.toString(), e2), this._fetchLayerMetaData(this.layerUrl, e2)]);
  }
  getLayerIdBySourceId(e2) {
    if (!this.dataElement) return null;
    const t3 = this._layerIdBySourceId.get(e2);
    if (null != t3) return t3;
    const r5 = this.dataElement.domainNetworks, o4 = this._traverseNetworkSources(r5, this._layerIdBySourceId, "sourceId", "layerId", e2);
    return o4 >= 0 ? o4 : null;
  }
  getSourceIdByLayerId(e2) {
    if (!this.dataElement) return null;
    const t3 = this._sourceIdByLayerId.get(e2);
    if (null != t3) return t3;
    const r5 = this.dataElement.domainNetworks, o4 = this._traverseNetworkSources(r5, this._sourceIdByLayerId, "layerId", "sourceId", e2);
    return o4 >= 0 ? o4 : null;
  }
  getObjectIdsFromElements(e2) {
    const t3 = [], r5 = /* @__PURE__ */ new Map();
    for (const s5 of e2) {
      const e3 = this.getLayerIdBySourceId(s5.networkSourceId);
      if (null == e3) continue;
      let t4 = r5.get(e3);
      void 0 === t4 && (t4 = []), t4.push(s5.objectId), r5.set(e3, t4);
    }
    const o4 = this.featureServiceUrl;
    return r5.forEach((e3, r6) => t3.push({ layerUrl: `${o4}/${r6}`, objectIds: e3 })), t3;
  }
  async queryNamedTraceConfigurations(e2, t3) {
    var _a;
    const [{ queryNamedTraceConfigurations: r5 }, { default: o4 }] = await Promise.all([import("./queryNamedTraceConfigurations-OCLLW635.js"), import("./QueryNamedTraceConfigurationsParameters-QKKHF5UL.js")]), s5 = this.networkServiceUrl, i7 = o4.from(e2);
    return (_a = await r5(s5, i7, { ...t3 })) == null ? void 0 : _a.namedTraceConfigurations;
  }
  async validateTopology(e2, t3) {
    var _a, _b, _c;
    if (!e2.validateArea) throw new s("network:undefined-validateArea", "the network must have validateArea defined in the validate network topology parameters.");
    const [{ validateNetworkTopology: r5 }, { default: s5 }] = await Promise.all([import("./validateNetworkTopology-DSO3GYEE.js"), import("./ValidateNetworkTopologyParameters-5T6BOROB.js")]), i7 = s5.from(e2);
    c2(this.featureServiceUrl, this.gdbVersion || null) ? (i7.sessionID = t, await i4(this.featureServiceUrl, this.gdbVersion, true)) : i7.sessionID = null, i7.gdbVersion = this.gdbVersion;
    const a5 = this.networkServiceUrl, n5 = this.featureServiceUrl, l7 = c3(n5, null, this.gdbVersion, true), d4 = await r5(a5, i7, { ...t3 });
    if (d4 == null ? void 0 : d4.serviceEdits) {
      const e3 = [];
      for (const t4 of d4.serviceEdits) {
        const { editedFeatures: r6 } = t4, o4 = (r6 == null ? void 0 : r6.spatialReference) ? new f(r6.spatialReference) : null;
        e3.push({ layerId: t4.layerId, editedFeatures: { adds: ((_a = r6 == null ? void 0 : r6.adds) == null ? void 0 : _a.map((e4) => k2(e4, o4))) || [], updates: ((_b = r6 == null ? void 0 : r6.updates) == null ? void 0 : _b.map((e4) => ({ original: k2(e4[0], o4), current: k2(e4[1], o4) }))) || [], deletes: ((_c = r6 == null ? void 0 : r6.deletes) == null ? void 0 : _c.map((e4) => k2(e4, o4))) || [], spatialReference: o4 } });
      }
      l7.resolve({ edits: null, addedFeatures: [], updatedFeatures: [], deletedFeatures: [], addedAttachments: [], updatedAttachments: [], deletedAttachments: [], editedFeatures: e3, exceededTransferLimit: false, historicMoment: d4.moment });
    }
    return d4;
  }
  async submitTopologyValidationJob(e2, t3) {
    let s5 = null;
    if (!e2.validateArea) throw new s("network:undefined-validateArea", "the network must have validateArea defined in the validate network topology parameters.");
    if (!this.gdbVersion) {
      const e3 = this.layerUrl.replace(/\/FeatureServer/i, "/VersionManagementServer").replace(/\/\d*$/, "");
      s5 = (await H(e3, { responseType: "json", query: { f: "json" } })).data.defaultVersionName;
    }
    const [{ submitValidateNetworkTopologyJob: i7 }, { default: a5 }] = await Promise.all([import("./validateNetworkTopology-DSO3GYEE.js"), import("./ValidateNetworkTopologyParameters-5T6BOROB.js")]), n5 = a5.from(e2);
    c2(this.featureServiceUrl, this.gdbVersion || null) ? (n5.sessionID = t, await i4(this.featureServiceUrl, this.gdbVersion, true)) : n5.sessionID = null, n5.gdbVersion = this.gdbVersion || s5;
    const l7 = this.networkServiceUrl, d4 = this.featureServiceUrl ? c3(this.featureServiceUrl, null, this.gdbVersion, true) : void 0, u4 = await i7(l7, n5, { ...t3 });
    return new m3({ statusUrl: u4, editsResolver: d4 });
  }
  getSourceTypeById(e2) {
    if (!this.dataElement) return null;
    for (const t3 of this.dataElement.domainNetworks) for (const r5 of [t3.edgeSources ?? [], t3.junctionSources ?? []]) for (const o4 of r5) if (o4.sourceId === e2) return r5 === t3.edgeSources ? "edge" : "junction";
    return null;
  }
  _traverseNetworkSources(e2, t3, r5, o4, s5) {
    for (const i7 of e2) for (const e3 of [i7.edgeSources ?? [], i7.junctionSources ?? []]) for (const i8 of e3) if (i8[r5] === s5) return t3.set(s5, i8[o4]), i8[o4];
    return -1;
  }
  async _fetchLayerMetaData(e2, t3) {
    const o4 = await H(e2, { responseType: "json", query: { f: "json" }, ...t3 });
    this.sourceJSON = o4.data, this.read(o4.data, { origin: "service" });
  }
  async _fetchDataElement(e2, t3, o4) {
    if (this.dataElement) return;
    const s5 = await H(`${e2}/queryDataElements`, { responseType: "json", query: { layers: JSON.stringify([t3]), f: "json" }, ...o4 }).then((e3) => {
      var _a;
      return (_a = e3.data.layerDataElements) == null ? void 0 : _a[0];
    });
    s5 && this.read(s5, { origin: "service" });
  }
};
function k2(e2, r5) {
  return new _({ attributes: e2.attributes, geometry: f2({ ...e2.geometry, spatialReference: r5 }) });
}
__decorate([m({ type: String, nonNullable: true, json: { origins: { "web-map": { read: true, write: { isRequired: true } }, service: { read: true } }, read: false } })], U.prototype, "id", void 0), __decorate([m({ type: String, nonNullable: true, json: { origins: { "web-map": { read: true, write: { isRequired: true } }, service: { read: { source: "name" } } }, read: false } })], U.prototype, "title", void 0), __decorate([m({ type: String, nonNullable: true, json: { origins: { "web-map": { read: { source: "url" }, write: { target: "url", isRequired: true } } }, read: false } })], U.prototype, "layerUrl", void 0), __decorate([m({ type: Object, json: { origins: { service: { read: true } }, read: false } })], U.prototype, "dataElement", void 0), __decorate([m({ type: z, json: { origins: { service: { read: { source: "extent" } } }, read: false } })], U.prototype, "fullExtent", void 0), __decorate([m({ type: f, json: { origins: { service: { read: { source: "extent.spatialReference" } } }, read: false } })], U.prototype, "spatialReference", void 0), __decorate([m({ type: ["utility", "trace"], readOnly: true, json: { read: false, write: false } })], U.prototype, "type", void 0), __decorate([m({ readOnly: true })], U.prototype, "datasetName", null), __decorate([m({ readOnly: true })], U.prototype, "owner", null), __decorate([m({ readOnly: true })], U.prototype, "schemaGeneration", null), __decorate([m({ readOnly: true })], U.prototype, "parsedUrl", null), __decorate([m({ readOnly: true })], U.prototype, "featureServiceUrl", null), __decorate([m({ readOnly: true })], U.prototype, "networkServiceUrl", null), __decorate([m({ readOnly: true })], U.prototype, "layerId", null), __decorate([m()], U.prototype, "sourceJSON", void 0), __decorate([m({ readOnly: true })], U.prototype, "networkSystemLayers", null), __decorate([m({ type: String })], U.prototype, "gdbVersion", null), __decorate([m({ type: Date })], U.prototype, "historicMoment", null), __decorate([m()], U.prototype, "_historicMoment", void 0), __decorate([m()], U.prototype, "_gdbVersion", void 0), U = __decorate([a("esri.networks.Network")], U);
var N = U;

// node_modules/@arcgis/core/networks/RulesTable.js
var f4 = class extends a2(u2) {
  constructor(e2) {
    super(e2), this.rulesCategorized = { attachment: [], containment: [], connectivity: [] }, this.request = H;
  }
  initialize() {
  }
  async load(e2) {
    const t3 = this.rulesLayer.load(e2).then(() => this._initializeRulesTable());
    return this.addResolvingPromise(t3), this;
  }
  getFeaturesCanAssociateWithClause(e2, t3, s5) {
    const r5 = /* @__PURE__ */ new Map(), [i7, a5] = I2(e2.sourceLayer);
    if (!i7 || !a5) return "";
    const c6 = f3(e2), d4 = f3(t3);
    s5.forEach((e3) => {
      const { type: t4, direction: s6 } = e3;
      this._getRulesForAssociationType(t4).forEach((e4) => {
        u3(e4, c6, s6).filter((e5) => {
          var _a;
          return ((_a = e5.networkSource) == null ? void 0 : _a.layerId) === d4.layerId;
        }).forEach((e5) => {
          var _a, _b;
          const t5 = (_a = e5.assetGroup) == null ? void 0 : _a.assetGroupCode, s7 = (_b = e5.assetType) == null ? void 0 : _b.assetTypeCode;
          if (null != t5 && null != s7) {
            const e6 = r5.get(t5) ?? /* @__PURE__ */ new Set();
            e6.add(s7), r5.set(t5, e6);
          }
        });
      });
    });
    let y2 = [];
    return this._mergeAssetCodes(r5).forEach((e3, t4) => {
      const s6 = `${i7} IN (${t4})`, r6 = o2(a5, [...e3]);
      s6 && r6 && y2.push(l2(s6, r6));
    }), y2.length > 1 && (y2 = y2.map((e3) => `(${e3})`)), y2.join(" OR ");
  }
  getFeaturesCanAssociateWith(e2, t3, s5) {
    return null == d3(e2) ? [] : t3.filter((t4) => this.canAssociateFeatures(e2, t4, s5));
  }
  canAssociateFeatures(e2, t3, s5) {
    if (!this._canSupportAssociations([e2, t3])) return false;
    const r5 = f3(e2), o4 = f3(t3);
    return s5.some((e3) => {
      const { type: t4, direction: s6 } = e3;
      return this._getRulesForAssociationType(t4).some((e4) => "to" === s6 ? i6(e4, o4, r5) : i6(e4, r5, o4));
    });
  }
  getLayersCanAssociateWith(e2, t3, s5) {
    return null == d3(e2) ? [] : t3.filter((t4) => this.canAssociateFeatureToLayer(e2, t4, s5));
  }
  canAssociateFeatureToLayer(e2, t3, s5) {
    if (!this._canSupportAssociations([e2, t3])) return false;
    const r5 = f3(e2), o4 = f3(t3);
    return s5.some((e3) => {
      const { type: t4, direction: s6 } = e3;
      return this._getRulesForAssociationType(t4).some((e4) => "to" === s6 ? i6(e4, o4, r5) : i6(e4, r5, o4));
    });
  }
  getFeatureSQL(e2, t3) {
    var _a, _b;
    const s5 = e2.layerId.toString(), r5 = (_a = e2.fieldsIndex) == null ? void 0 : _a.normalizeFieldName("assetGroup"), o4 = (_b = e2.fieldsIndex) == null ? void 0 : _b.normalizeFieldName("assetType"), n5 = r5 ? t3.attributes[r5] : null, i7 = o4 ? t3.attributes[o4] : null, a5 = this.rulesHash[s5];
    if (a5) {
      const e3 = a5.assetGroupHash[n5];
      if (e3) {
        return e3.assetTypeHash[i7] || null;
      }
    }
    return null;
  }
  _initializeRulesTable() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    const e2 = {}, t3 = [{ networkSourceId: "fromNetworkSource", assetGroupId: "fromAssetGroup", assetTypeId: "fromAssetType" }, { networkSourceId: "toNetworkSource", assetGroupId: "toAssetGroup", assetTypeId: "toAssetType" }, { networkSourceId: "viaNetworkSource", assetGroupId: "viaAssetGroup", assetTypeId: "viaAssetType" }];
    this.rulesCategorized = { attachment: [], containment: [], connectivity: [] };
    for (const s5 of this.rules) {
      if (3 === s5.ruleType) {
        this.rulesCategorized.attachment.push(s5);
        continue;
      }
      if (2 === s5.ruleType) {
        this.rulesCategorized.containment.push(s5);
        continue;
      }
      if (1 === s5.ruleType) {
        this.rulesCategorized.connectivity.push(s5);
        continue;
      }
      this.rulesCategorized.connectivity.push(s5);
      let r5 = [[0, 1], [1, 0]];
      5 === s5.ruleType && (r5 = [[0, 2], [2, 0], [1, 2], [2, 1]]);
      for (const o4 of r5) {
        const r6 = o4.shift(), a5 = o4.shift();
        let c6 = false;
        switch (s5.ruleType) {
          case 5:
            c6 = 0 === r6 || 1 === r6;
            break;
          case 4:
            c6 = 1 === r6;
        }
        const u4 = t3[r6], p4 = ((_a = s5[u4.networkSourceId]) == null ? void 0 : _a.layerId.toString()) ?? "", l7 = (_c = (_b = s5[u4.assetGroupId]) == null ? void 0 : _b.assetGroupCode) == null ? void 0 : _c.toString(), d4 = s5[u4.assetTypeId], y2 = (_d = d4 == null ? void 0 : d4.assetTypeCode) == null ? void 0 : _d.toString(), h2 = t3[a5], f5 = ((_e = s5[h2.networkSourceId]) == null ? void 0 : _e.layerId.toString()) ?? "", m6 = (_g = (_f = s5[h2.assetGroupId]) == null ? void 0 : _f.assetGroupCode) == null ? void 0 : _g.toString(), g3 = s5[h2.assetTypeId], T2 = (_h = g3 == null ? void 0 : g3.assetTypeCode) == null ? void 0 : _h.toString(), S3 = e2[p4] ?? { assetGroupHash: {} };
        if (!(l7 && y2 && m6 && T2)) continue;
        const v = S3.assetGroupHash[l7] ?? { assetTypeHash: {} }, A = v.assetTypeHash[y2] ?? {};
        if (A[f5] = A[f5] ?? {}, c6) {
          A[p4] = A[p4] ?? {};
          const e3 = l2(`assetgroup = ${l7}`, `assettype = ${y2}`);
          "esriNECPEndVertex" === (g3 == null ? void 0 : g3.connectivityPolicy) ? A[p4].endVertex = ((_i = A[p4]) == null ? void 0 : _i.endVertex) ? `${A[p4].endVertex}` : `(${e3})` : A[p4].anyVertex = A[p4].anyVertex ? `${A[p4].anyVertex}` : `(${e3})`;
        }
        const C = l2(`assetgroup = ${m6}`, `assettype = ${T2}`);
        "esriNECPEndVertex" === (g3 == null ? void 0 : g3.connectivityPolicy) ? A[f5].endVertex = ((_j = A[f5]) == null ? void 0 : _j.endVertex) ? r(A[f5].endVertex, C) : `(${C})` : A[f5].anyVertex = ((_k = A[f5]) == null ? void 0 : _k.anyVertex) ? r(A[f5].anyVertex, C) : `(${C})`, v.assetTypeHash[y2] = A, S3.assetGroupHash[l7] = v, e2[p4] = S3;
      }
    }
    this._set("rulesHash", e2);
  }
  _getRulesForAssociationType(e2) {
    const { rulesCategorized: t3 } = this;
    switch (e2) {
      case "attachment":
        return t3.attachment;
      case "containment":
        return t3.containment;
      case "connectivity":
      case "junction-junction-connectivity":
        return t3.connectivity.filter((e3) => 1 === e3.ruleType);
      case "junction-edge-from-connectivity":
      case "junction-edge-midspan-connectivity":
      case "junction-edge-to-connectivity":
        return t3.connectivity.filter((e3) => 4 === e3.ruleType || 5 === e3.ruleType);
      default:
        return [];
    }
  }
  _areSetsEqual(e2, t3) {
    if (e2.size !== t3.size) return false;
    for (const s5 of e2) if (!t3.has(s5)) return false;
    return true;
  }
  _mergeAssetCodes(e2) {
    const t3 = /* @__PURE__ */ new Map(), s5 = /* @__PURE__ */ new Set();
    for (const [r5, o4] of e2) {
      const n5 = /* @__PURE__ */ new Set([r5]);
      for (const [t4, a5] of e2) r5 !== t4 && !s5.has(t4) && this._areSetsEqual(o4, a5) && (n5.add(t4), s5.add(t4));
      const i7 = Array.from(n5).sort().join(",");
      t3.set(i7, o4);
    }
    return t3;
  }
  _canSupportAssociations(e2) {
    return e2.every((e3) => {
      const t3 = i3(e3) ? e3.sourceLayer : e3, [s5, r5] = I2(t3);
      return null != s5 && null != r5;
    });
  }
};
__decorate([m({ constructOnly: true })], f4.prototype, "rulesLayer", void 0), __decorate([m({ constructOnly: true })], f4.prototype, "rules", void 0), __decorate([m({ readOnly: true })], f4.prototype, "rulesHash", void 0), __decorate([m()], f4.prototype, "rulesCategorized", void 0), __decorate([m({ constructOnly: true })], f4.prototype, "request", void 0), f4 = __decorate([a("esri.networks.RulesTable")], f4);

// node_modules/@arcgis/core/networks/support/NetworkSystemLayers.js
var l6 = class extends b {
  constructor(s5) {
    super(s5), this.rulesTableId = null, this.rulesTableUrl = null, this.subnetworksTable = null, this.subnetworksTableId = null, this.subnetworksTableUrl = null, this.dirtyAreasLayerId = null, this.dirtyAreasLayerUrl = null, this.associationsTable = null, this.associationsTableId = null, this.associationsTableUrl = null;
  }
  destroy() {
    var _a;
    (_a = this.associationsTable) == null ? void 0 : _a.destroy();
  }
  async loadAssociationsTable(s5) {
    if (!this.associationsTable) {
      const { associationsTableUrl: s6 } = this;
      if (!s6) throw new s("utility-network-system-layers:missing-associations-table-url", "Unable to load the associations table, as the `associationsTableUrl` is not set.");
      this.associationsTable = new et({ url: s6 });
    }
    return await this.associationsTable.load(s5), this.associationsTable;
  }
  async loadSubnetworksTable(s5) {
    if (!this.subnetworksTable) {
      const { subnetworksTableUrl: s6 } = this;
      if (!s6) throw new s("utility-network-system-layers:missing-subnetworks-table-url", "Unable to load the subnetworks table, as the `subnetworksTableUrl` is not set.");
      this.subnetworksTable = new et({ url: s6 });
    }
    return await this.subnetworksTable.load(s5), this.subnetworksTable;
  }
};
__decorate([m({ constructOnly: true })], l6.prototype, "rulesTableId", void 0), __decorate([m({ constructOnly: true })], l6.prototype, "rulesTableUrl", void 0), __decorate([m()], l6.prototype, "subnetworksTable", void 0), __decorate([m({ constructOnly: true })], l6.prototype, "subnetworksTableId", void 0), __decorate([m({ constructOnly: true })], l6.prototype, "subnetworksTableUrl", void 0), __decorate([m({ constructOnly: true })], l6.prototype, "dirtyAreasLayerId", void 0), __decorate([m({ constructOnly: true })], l6.prototype, "dirtyAreasLayerUrl", void 0), __decorate([m()], l6.prototype, "associationsTable", void 0), __decorate([m({ constructOnly: true })], l6.prototype, "associationsTableId", void 0), __decorate([m({ constructOnly: true })], l6.prototype, "associationsTableUrl", void 0), l6 = __decorate([a("esri.networks.support.NetworkSystemLayers")], l6);

// node_modules/@arcgis/core/networks/support/Terminal.js
var s4 = class extends n {
  constructor(r5) {
    super(r5), this.id = null, this.name = null;
  }
};
__decorate([m({ type: Number, json: { read: { source: "terminalId" }, write: { target: "terminalId" } } })], s4.prototype, "id", void 0), __decorate([m({ type: String, json: { read: { source: "terminalName" }, write: { target: "terminalName" } } })], s4.prototype, "name", void 0), __decorate([m({ type: Boolean, json: { write: true } })], s4.prototype, "isUpstreamTerminal", void 0), s4 = __decorate([a("esri.networks.support.Terminal")], s4);
var p3 = s4;

// node_modules/@arcgis/core/networks/support/TerminalConfiguration.js
var a4 = new o({ esriUNTMBidirectional: "bidirectional", esriUNTMDirectional: "directional" });
var n3 = class extends n {
  constructor(r5) {
    super(r5), this.defaultConfiguration = null, this.id = null, this.name = null, this.terminals = [], this.traversabilityModel = null;
  }
};
__decorate([m({ type: String, json: { write: true } })], n3.prototype, "defaultConfiguration", void 0), __decorate([m({ type: Number, json: { read: { source: "terminalConfigurationId" }, write: { target: "terminalConfigurationId" } } })], n3.prototype, "id", void 0), __decorate([m({ type: String, json: { read: { source: "terminalConfigurationName" }, write: { target: "terminalConfigurationName" } } })], n3.prototype, "name", void 0), __decorate([m({ type: [p3], json: { write: true } })], n3.prototype, "terminals", void 0), __decorate([m({ type: a4.apiValues, json: { type: a4.jsonValues, read: a4.read, write: a4.write } })], n3.prototype, "traversabilityModel", void 0), n3 = __decorate([a("esri.networks.support.TerminalConfiguration")], n3);

// node_modules/@arcgis/core/networks/support/TraceJobInfo.js
var m5 = i2()({ Pending: "job-waiting", InProgress: "job-executing", Completed: "job-succeeded" });
var n4 = class extends c4 {
  constructor(t3) {
    super(t3), this.statusUrl = null, this.status = null, this.submissionTime = null, this.lastUpdatedTime = null, this._timer = void 0;
  }
  destroy() {
    clearInterval(this._timer);
  }
  async checkJobStatus(t3) {
    const s5 = { ...t3, query: { f: "json" } }, { data: r5 } = await H(this.statusUrl, s5), o4 = r5.traceResults ? { ...r5.traceResults, ...r5 } : r5;
    return this.read(o4), this;
  }
  async waitForJobCompletion(t3 = {}) {
    const { interval: e2 = 1e3, statusCallback: s5 } = t3;
    return new Promise((t4, o4) => {
      this._clearTimer();
      const i7 = setInterval(() => {
        this._timer || o4(u()), this.checkJobStatus().then((e3) => {
          const { status: r5 } = e3;
          switch (this.status = r5, r5) {
            case "job-succeeded":
              this._clearTimer(), t4(this);
              break;
            case "job-waiting":
            case "job-executing":
              s5 && s5(this);
          }
        }, (t5) => {
          this._clearTimer(), o4(t5);
        });
      }, e2);
      this._timer = i7;
    });
  }
  _clearTimer() {
    clearInterval(this._timer), this._timer = void 0;
  }
};
__decorate([m({ type: String, json: { write: true } })], n4.prototype, "statusUrl", void 0), __decorate([r2(m5)], n4.prototype, "status", void 0), __decorate([m({ type: Date, json: { type: Number, write: { writer: (t3, e2) => {
  e2.submissionTime = t3 ? t3.getTime() : null;
} } } })], n4.prototype, "submissionTime", void 0), __decorate([m({ type: Date, json: { type: Number, write: { writer: (t3, e2) => {
  e2.lastUpdatedTime = t3 ? t3.getTime() : null;
} } } })], n4.prototype, "lastUpdatedTime", void 0), n4 = __decorate([a("esri.networks.support.TraceJobInfo")], n4);

// node_modules/@arcgis/core/networks/UtilityNetwork.js
var S2 = class extends N {
  constructor(e2) {
    super(e2), this.sharedNamedTraceConfigurations = [], this.type = "utility", this._circuitManagerMap = /* @__PURE__ */ new Map(), this._terminalById = /* @__PURE__ */ new Map(), this._unitIdentifierManager = null;
  }
  initialize() {
    this.addHandles(l(() => [this.gdbVersion, this.historicMoment], () => {
      this.networkSystemLayers.associationsTable && (this.networkSystemLayers.associationsTable.gdbVersion !== this.gdbVersion && (this.networkSystemLayers.associationsTable.gdbVersion = this.gdbVersion), this.networkSystemLayers.associationsTable.historicMoment !== this.historicMoment && (this.networkSystemLayers.associationsTable.historicMoment = this.historicMoment));
    }));
  }
  get _rulesLayer() {
    const { gdbVersion: e2, historicMoment: t3 } = this, r5 = this.networkSystemLayers.rulesTableUrl;
    return new et({ url: r5, gdbVersion: e2, historicMoment: t3 });
  }
  get _utilityLayerList() {
    var _a, _b;
    const e2 = /* @__PURE__ */ new Set();
    return (_b = (_a = this.dataElement) == null ? void 0 : _a.domainNetworks) == null ? void 0 : _b.map((t3) => {
      var _a2, _b2;
      (_a2 = t3 == null ? void 0 : t3.edgeSources) == null ? void 0 : _a2.map(({ layerId: t4, sourceId: r5 }) => {
        this._layerIdBySourceId.set(r5, t4), this._sourceIdByLayerId.set(t4, r5), e2.add(t4);
      }), (_b2 = t3 == null ? void 0 : t3.junctionSources) == null ? void 0 : _b2.map(({ layerId: t4, sourceId: r5 }) => {
        this._layerIdBySourceId.set(r5, t4), this._sourceIdByLayerId.set(t4, r5), e2.add(t4);
      });
    }), e2;
  }
  get serviceTerritoryFeatureLayerId() {
    var _a;
    return ((_a = this.dataElement) == null ? void 0 : _a.serviceTerritoryFeatureLayerId) ?? null;
  }
  get networkSystemLayers() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return new l6({ rulesTableId: (_a = this.sourceJSON) == null ? void 0 : _a.systemLayers.rulesTableId, rulesTableUrl: this.sourceJSON ? `${this.featureServiceUrl}/${(_b = this.sourceJSON) == null ? void 0 : _b.systemLayers.rulesTableId}` : null, subnetworksTableId: (_c = this.sourceJSON) == null ? void 0 : _c.systemLayers.subnetworksTableId, subnetworksTableUrl: this.sourceJSON ? `${this.featureServiceUrl}/${(_d = this.sourceJSON) == null ? void 0 : _d.systemLayers.subnetworksTableId}` : null, dirtyAreasLayerId: (_e = this.sourceJSON) == null ? void 0 : _e.systemLayers.dirtyAreasLayerId, dirtyAreasLayerUrl: this.sourceJSON ? `${this.featureServiceUrl}/${(_f = this.sourceJSON) == null ? void 0 : _f.systemLayers.dirtyAreasLayerId}` : null, associationsTableId: (_g = this.sourceJSON) == null ? void 0 : _g.systemLayers.associationsTableId, associationsTableUrl: this.sourceJSON ? `${this.featureServiceUrl}/${(_h = this.sourceJSON) == null ? void 0 : _h.systemLayers.associationsTableId}` : null });
  }
  get terminalConfigurations() {
    var _a;
    return ((_a = this.dataElement) == null ? void 0 : _a.terminalConfigurations.map((e2) => n3.fromJSON(e2))) || [];
  }
  get domainNetworkNames() {
    var _a;
    return ((_a = this.dataElement) == null ? void 0 : _a.domainNetworks.map((e2) => e2.domainNetworkName)) || [];
  }
  get hasTelecomNetwork() {
    var _a;
    return ((_a = this.dataElement) == null ? void 0 : _a.domainNetworks.some((e2) => e2.isTelecomNetwork)) ?? false;
  }
  get associationsTable() {
    return this.networkSystemLayers.associationsTable;
  }
  async load(e2) {
    return this.addResolvingPromise(this._load(e2)), this;
  }
  async _load(e2) {
    await super._load(e2), await Promise.all([this._loadNamedTraceConfigurationsFromNetwork(e2), this.networkSystemLayers.loadAssociationsTable(e2)]);
  }
  getTerminalConfiguration(e2) {
    var _a, _b, _c, _d;
    let t3 = null, r5 = null;
    const s5 = e2.sourceLayer;
    let o4 = null;
    if ("feature" === (s5 == null ? void 0 : s5.type)) {
      if (o4 = s5.layerId, null === o4) return null;
    } else {
      if ("subtype-sublayer" !== (s5 == null ? void 0 : s5.type)) return null;
      if (o4 = ((_a = s5 == null ? void 0 : s5.parent) == null ? void 0 : _a.layerId) ?? null, null === o4) return null;
    }
    const i7 = e2.attributes;
    if (null == i7) return null;
    for (const l7 of Object.keys(i7)) "ASSETGROUP" === l7.toUpperCase() && (t3 = e2.getAttribute(l7)), "ASSETTYPE" === l7.toUpperCase() && (r5 = e2.getAttribute(l7));
    if (!this.dataElement) return null;
    let a5 = null;
    const n5 = this.dataElement.domainNetworks;
    for (const l7 of n5) {
      const e3 = (_b = l7.junctionSources) == null ? void 0 : _b.find((e4) => e4.layerId === o4);
      if (e3) {
        const s6 = (_c = e3.assetGroups) == null ? void 0 : _c.find((e4) => e4.assetGroupCode === t3);
        if (s6) {
          const e4 = (_d = s6.assetTypes) == null ? void 0 : _d.find((e5) => e5.assetTypeCode === r5);
          if (e4 == null ? void 0 : e4.isTerminalConfigurationSupported) {
            a5 = e4.terminalConfigurationId;
            break;
          }
        }
      }
    }
    if (null != a5) {
      const e3 = this.dataElement.terminalConfigurations, t4 = e3 == null ? void 0 : e3.find((e4) => e4.terminalConfigurationId === a5);
      return t4 ? n3.fromJSON(t4) : null;
    }
    return null;
  }
  getTierNames(e2) {
    var _a, _b;
    const t3 = (_a = this.dataElement) == null ? void 0 : _a.domainNetworks.find((t4) => t4.domainNetworkName === e2);
    return ((_b = t3 == null ? void 0 : t3.tiers) == null ? void 0 : _b.map((e3) => e3.name)) || [];
  }
  async getRulesTable() {
    var _a;
    const e2 = this._rulesLayer;
    e2.loaded || await e2.load();
    const t3 = (_a = this.dataElement) == null ? void 0 : _a.domainNetworks;
    if (!t3) return null;
    const r5 = t3.flatMap((e3) => [...e3.edgeSources || [], ...e3.junctionSources || []]), s5 = (await this._queryRulesTable(e2)).map((t4) => this._hydrateRuleInfo(e2, r5, t4));
    return new f4({ rulesLayer: e2, rules: s5 });
  }
  async getCircuitManager(e2) {
    var _a;
    if (!this.hasTelecomNetwork) return null;
    const t3 = (_a = this.dataElement) == null ? void 0 : _a.domainNetworks.find((t4) => t4.domainNetworkName === e2 && t4.isTelecomNetwork);
    if (!t3) return null;
    const { default: r5 } = await import("./CircuitManager-JPPM54QD.js");
    return e(this._circuitManagerMap, e2, () => new r5({ utilityNetwork: this, telecomDomainNetwork: t3 }));
  }
  async getUnitIdentifierManager() {
    if (!this.hasTelecomNetwork) return null;
    if (this._unitIdentifierManager) return this._unitIdentifierManager;
    const { default: e2 } = await import("./UnitIdentifierManager-B5BVLREN.js");
    return this._unitIdentifierManager = new e2({ utilityNetwork: this }), this._unitIdentifierManager;
  }
  getTerminalById(e2) {
    if (!this.dataElement || null == e2) return null;
    const t3 = this._terminalById.get(e2);
    return null != t3 ? t3 : (this.terminalConfigurations.forEach((e3) => {
      e3.terminals.forEach((e4) => {
        this._terminalById.set(e4.id, e4);
      });
    }), this._terminalById.get(e2));
  }
  isUtilityLayer(e2) {
    var _a, _b;
    return "layerId" in e2 ? null != e2.layerId && this._utilityLayerList.has(e2.layerId) && (((_a = e2.url) == null ? void 0 : _a.startsWith(this.featureServiceUrl)) ?? false) : !("subtype-sublayer" !== e2.type || !e2.parent) && (this._utilityLayerList.has(e2.parent.layerId) && (((_b = e2.parent.url) == null ? void 0 : _b.startsWith(this.featureServiceUrl)) ?? false));
  }
  async queryAssociations(e2, t3) {
    const [{ queryAssociations: r5 }, { default: s5 }] = await Promise.all([import("./queryAssociations-AQDBDOEV.js"), import("./QueryAssociationsParameters-RMHRAFXX.js")]), o4 = s5.from(e2);
    o4.gdbVersion = this.gdbVersion, o4.moment = this.historicMoment;
    return (await r5(this.networkServiceUrl, o4, t3)).associations;
  }
  async synthesizeAssociationGeometries(e2) {
    const [{ synthesizeAssociationGeometries: t3 }, { default: r5 }] = await Promise.all([import("./synthesizeAssociationGeometries-PUAAAAT4.js"), import("./SynthesizeAssociationGeometriesParameters-A3OJ3IQH.js")]), s5 = r5.from(e2);
    return s5.gdbVersion = this.gdbVersion, s5.moment = this.historicMoment, t3(this.networkServiceUrl, s5);
  }
  async trace(e2) {
    const [{ trace: t3 }, { default: r5 }] = await Promise.all([import("./trace-MIDHH4W3.js"), import("./TraceParameters-XUD6EXVI.js")]), s5 = r5.from(e2);
    return s5.gdbVersion = this.gdbVersion, s5.moment = this.historicMoment, t3(this.networkServiceUrl, s5);
  }
  async submitTraceJob(e2) {
    const [{ submitTraceJob: t3 }, { default: r5 }] = await Promise.all([import("./trace-MIDHH4W3.js"), import("./TraceParameters-XUD6EXVI.js")]), s5 = r5.from(e2);
    s5.gdbVersion = this.gdbVersion, s5.moment = this.historicMoment;
    const o4 = await t3(this.networkServiceUrl, s5);
    return new n4({ statusUrl: o4 });
  }
  async canAddAssociation(e2) {
    const t3 = await this.getRulesTable();
    if (!t3) return false;
    const { fromNetworkElement: r5, toNetworkElement: s5 } = e2;
    if (!r5 || !s5) return false;
    await t3.load();
    let o4 = null;
    switch (e2.associationType) {
      case "containment":
        o4 = t3.rulesCategorized.containment;
        break;
      case "attachment":
        o4 = t3.rulesCategorized.attachment;
        break;
      default:
        o4 = t3.rulesCategorized.connectivity;
    }
    return o4.some((e3) => i6(e3, r5, s5));
  }
  generateAddAssociations(e2) {
    const { associationsTable: r5 } = this.networkSystemLayers, { fromNetworkSourceId: s5, fromGlobalId: o4, fromTerminalId: i7, fromFirstUnit: a5, fromNumUnits: n5, toNetworkSourceId: l7, toGlobalId: u4, toTerminalId: d4, toFirstUnit: m6, toNumUnits: c6, associationType: h2, isContentVisible: p4, percentAlong: f5, globalId: I3 } = t2(r5);
    return { addFeatures: e2.map((e3) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      const r6 = new _({ attributes: { [s5]: (_a = e3.fromNetworkElement) == null ? void 0 : _a.networkSourceId, [o4]: (_b = e3.fromNetworkElement) == null ? void 0 : _b.globalId, [i7]: (_c = e3.fromNetworkElement) == null ? void 0 : _c.terminalId, [l7]: (_d = e3.toNetworkElement) == null ? void 0 : _d.networkSourceId, [u4]: (_e = e3.toNetworkElement) == null ? void 0 : _e.globalId, [d4]: (_f = e3.toNetworkElement) == null ? void 0 : _f.terminalId, [h2]: s2[e3.associationType], [p4]: null == e3.isContentVisible ? void 0 : e3.isContentVisible ? 1 : 0, [f5]: e3.percentAlong, [I3]: e3.globalId } });
      return e3.fromNetworkElement instanceof s3 && (r6.attributes[a5] = (_g = e3.fromNetworkElement) == null ? void 0 : _g.firstUnit, r6.attributes[n5] = (_h = e3.fromNetworkElement) == null ? void 0 : _h.numUnits), e3.toNetworkElement instanceof s3 && (r6.attributes[m6] = (_i = e3.toNetworkElement) == null ? void 0 : _i.firstUnit, r6.attributes[c6] = (_j = e3.toNetworkElement) == null ? void 0 : _j.numUnits), r6;
    }), id: this.networkSystemLayers.associationsTableId, identifierFields: { globalIdField: (r5 == null ? void 0 : r5.globalIdField) ?? "globalid", objectIdField: (r5 == null ? void 0 : r5.objectIdField) ?? "objectid" } };
  }
  generateDeleteAssociations(e2) {
    var _a;
    const { associationsTable: t3, associationsTableId: r5 } = this.networkSystemLayers, s5 = { id: r5, identifierFields: { globalIdField: (t3 == null ? void 0 : t3.globalIdField) ?? "globalid", objectIdField: (t3 == null ? void 0 : t3.objectIdField) ?? "objectid" } };
    if (-8 === ((_a = this.dataElement) == null ? void 0 : _a.schemaGeneration)) {
      const t4 = this._generateDeleteTelecomAssociationPayload(e2);
      return { ...s5, deleteAssociations: t4 };
    }
    const o4 = e2.map((e3) => ({ globalId: e3.globalId }));
    return { ...s5, deleteFeatures: o4 };
  }
  generateCombineNetworkElements(e2) {
    return { id: this._ensureSingleSourceIdAsValidLayerId(e2), combineGroupedObjects: [{ globalIds: e2.map((e3) => e3.globalId) }] };
  }
  generateDivideNetworkElements(e2, t3) {
    return { id: this._ensureSingleSourceIdAsValidLayerId([e2]), divideGroupedObjects: [{ globalId: e2.globalId, numUnits: t3 }] };
  }
  async loadAssociationsTable() {
    return this.networkSystemLayers.loadAssociationsTable();
  }
  async loadSubnetworksTable() {
    return this.networkSystemLayers.loadSubnetworksTable();
  }
  async _loadNamedTraceConfigurationsFromNetwork(e2) {
    var _a;
    if (0 === ((_a = this.sharedNamedTraceConfigurations) == null ? void 0 : _a.length)) return;
    const t3 = this.sharedNamedTraceConfigurations.map((e3) => e3.globalId), r5 = await this.queryNamedTraceConfigurations({ globalIds: t3 }, e2);
    for (const s5 of this.sharedNamedTraceConfigurations) {
      const e3 = r5 == null ? void 0 : r5.find((e4) => e4.globalId === s5.globalId);
      if (e3) {
        const t4 = e3.write({}, { origin: "service" });
        s5.read(t4, { origin: "service" });
      }
    }
  }
  _hydrateRuleInfo(e2, t3, r5) {
    const s5 = e2.fieldsIndex, o4 = s5.get("RULETYPE"), i7 = s5.get("CREATIONDATE"), a5 = s5.get("FROMNETWORKSOURCEID"), n5 = s5.get("FROMASSETGROUP"), l7 = s5.get("FROMASSETTYPE"), u4 = s5.get("FROMTERMINALID"), d4 = s5.get("TONETWORKSOURCEID"), m6 = s5.get("TOASSETGROUP"), c6 = s5.get("TOASSETTYPE"), y2 = s5.get("TOTERMINALID"), h2 = s5.get("VIANETWORKSOURCEID"), p4 = s5.get("VIAASSETGROUP"), f5 = s5.get("VIAASSETTYPE"), w2 = s5.get("VIATERMINALID"), I3 = r5.attributes[o4.name], b3 = new Date(r5.attributes[i7.name]), g3 = [{ networkSourceId: r5.attributes[a5.name], assetGroupId: r5.attributes[n5.name], assetTypeId: r5.attributes[l7.name], terminalId: r5.attributes[u4.name] }, { networkSourceId: r5.attributes[d4.name], assetGroupId: r5.attributes[m6.name], assetTypeId: r5.attributes[c6.name], terminalId: r5.attributes[y2.name] }, { networkSourceId: r5.attributes[h2.name], assetGroupId: r5.attributes[p4.name], assetTypeId: r5.attributes[f5.name], terminalId: r5.attributes[w2.name] }], k3 = { ruleType: I3, creationDate: b3 };
    for (const T2 of [0, 1, 2]) {
      if (5 !== I3 && 2 === T2) continue;
      const e3 = g3[T2], r6 = t3.find((t4) => t4.sourceId === e3.networkSourceId), s6 = r6 == null ? void 0 : r6.assetGroups.find((t4) => t4.assetGroupCode === e3.assetGroupId), o5 = s6 == null ? void 0 : s6.assetTypes.find((t4) => t4.assetTypeCode === e3.assetTypeId), i8 = this._getTerminal(o5, e3);
      let a6 = "";
      switch (T2) {
        case 0:
          a6 = "from";
          break;
        case 1:
          a6 = "to";
          break;
        case 2:
          a6 = "via";
      }
      k3[`${a6}NetworkSource`] = r6, k3[`${a6}AssetGroup`] = s6, k3[`${a6}AssetType`] = o5, k3[`${a6}Terminal`] = i8 == null ? void 0 : i8.toJSON();
    }
    return k3;
  }
  _getTerminal(e2, t3) {
    var _a, _b;
    const r5 = e2 == null ? void 0 : e2.terminalConfigurationId, s5 = (_a = this.terminalConfigurations) == null ? void 0 : _a.find((e3) => e3.id === r5);
    return ((_b = s5 == null ? void 0 : s5.terminals) == null ? void 0 : _b.find((e3) => e3.id === t3.terminalId)) ?? null;
  }
  async _queryRulesTable(e2) {
    const { gdbVersion: t3, historicMoment: r5 } = this, s5 = new b2({ where: "1=1", outFields: ["*"], gdbVersion: t3, historicMoment: r5 });
    return (await r3(e2, s5)).features;
  }
  _generateDeleteTelecomAssociationPayload(e2) {
    return e2.map((e3) => ({ globalId: e3.globalId ?? r4, associationType: a3.toJSON(e3.associationType), fromSourceId: e3.fromNetworkElement.networkSourceId, fromGlobalId: e3.fromNetworkElement.globalId, fromTerminalId: e3.fromNetworkElement.terminalId, toSourceId: e3.toNetworkElement.networkSourceId, toGlobalId: e3.toNetworkElement.globalId, toTerminalId: e3.toNetworkElement.terminalId }));
  }
  _ensureSingleSourceIdAsValidLayerId(e2) {
    const t3 = c(e2.map((e3) => e3.networkSourceId));
    if (t3.length > 1) throw new s("utility-network:invalid-source-id", "'networkSourceId' is not valid. Ensure that all network elements have the same 'networkSourceId' and that it corresponds to a valid layer in the utility network.");
    const o4 = t3[0], i7 = this.getLayerIdBySourceId(o4);
    if (null == i7) throw new s("utility-network:invalid-source-id", "'networkSourceId' is not valid. Ensure that all network elements have the same 'networkSourceId' and that it corresponds to a valid layer in the utility network.");
    return i7;
  }
};
__decorate([m({ readOnly: true })], S2.prototype, "_rulesLayer", null), __decorate([m({ type: [d2], json: { origins: { "web-map": { read: { source: "traceConfigurations" }, write: { target: "traceConfigurations" } }, service: { read: { source: "traceConfigurations" } } }, read: false } })], S2.prototype, "sharedNamedTraceConfigurations", void 0), __decorate([m({ type: ["utility"], readOnly: true, json: { read: false, write: false } })], S2.prototype, "type", void 0), __decorate([m({ readOnly: true })], S2.prototype, "serviceTerritoryFeatureLayerId", null), __decorate([m({ readOnly: true })], S2.prototype, "networkSystemLayers", null), __decorate([m({ readOnly: true })], S2.prototype, "terminalConfigurations", null), __decorate([m({ readOnly: true })], S2.prototype, "domainNetworkNames", null), __decorate([m({ readOnly: true })], S2.prototype, "hasTelecomNetwork", null), __decorate([m({ readOnly: true, json: { read: false } })], S2.prototype, "associationsTable", null), S2 = __decorate([a("esri.networks.UtilityNetwork")], S2);
var N2 = S2;

export {
  N2 as N
};
//# sourceMappingURL=chunk-E2BKIYAH.js.map
