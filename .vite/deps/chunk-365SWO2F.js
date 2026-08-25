import {
  l as l5
} from "./chunk-ZLORP65N.js";
import {
  G
} from "./chunk-TSJIYWFD.js";
import {
  v
} from "./chunk-5LS4RZOY.js";
import {
  n as n4
} from "./chunk-76YF6YHW.js";
import {
  n as n3
} from "./chunk-Z4LRP6U2.js";
import {
  s as s5
} from "./chunk-HT6ZIUTL.js";
import {
  d as d3
} from "./chunk-2ESUHLSH.js";
import {
  B as B2,
  Ce,
  M,
  O as O2,
  P,
  Q,
  R,
  U,
  Y,
  Ze,
  be,
  ce,
  de,
  ee,
  fe,
  he,
  k,
  me,
  oe,
  q,
  se,
  ue,
  ve,
  x,
  ye,
  z
} from "./chunk-TSCC7RAS.js";
import {
  i as i3
} from "./chunk-EBI44NAH.js";
import {
  N as N2
} from "./chunk-TGZYB2X6.js";
import {
  et
} from "./chunk-422REYLF.js";
import {
  p as p3
} from "./chunk-IZWQY4WU.js";
import {
  u
} from "./chunk-TCROKNPY.js";
import {
  e as e4
} from "./chunk-6B5YFT3O.js";
import {
  B,
  c as c2,
  e as e3
} from "./chunk-KIJ7RXGK.js";
import {
  L as L2,
  h as h2,
  n2 as n,
  y as y2
} from "./chunk-5U6XSC43.js";
import {
  b as b2
} from "./chunk-M3SP5TM6.js";
import {
  p as p2
} from "./chunk-TCDKBCY3.js";
import {
  I
} from "./chunk-6MWN3HK7.js";
import {
  d as d2
} from "./chunk-FJNWBRNT.js";
import {
  _ as _2
} from "./chunk-IG7ETWYB.js";
import {
  I as I2,
  a as a3,
  f as f3,
  i2 as i4,
  i3 as i5,
  i4 as i6,
  l as l4,
  p as p4
} from "./chunk-D6CL4FKW.js";
import {
  ge
} from "./chunk-7KWU42EX.js";
import {
  l as l3
} from "./chunk-LD5EOJIR.js";
import {
  c as c3
} from "./chunk-MYD3EEGE.js";
import {
  l as l2
} from "./chunk-VLH4C4OL.js";
import {
  s as s4
} from "./chunk-I2W3LINK.js";
import {
  O
} from "./chunk-7OBUFU3X.js";
import {
  _
} from "./chunk-NOVKMJNS.js";
import {
  e as e2
} from "./chunk-GMQ2EQ27.js";
import {
  s as s3
} from "./chunk-5YBW6KQ6.js";
import {
  a,
  f,
  h,
  l
} from "./chunk-DLX5DTNB.js";
import {
  f as f2
} from "./chunk-7J6TZQJ4.js";
import {
  b,
  m2 as m
} from "./chunk-TSVVEDRS.js";
import {
  a2
} from "./chunk-HPSHCA6S.js";
import {
  n as n2
} from "./chunk-GJFVHE2X.js";
import {
  __addDisposableResource,
  __decorate,
  __disposeResources
} from "./chunk-A44PNKPT.js";
import {
  H2 as H
} from "./chunk-EO4UMOUD.js";
import {
  L,
  d,
  e2 as e,
  j,
  p,
  s as s2,
  y
} from "./chunk-QRKINRAQ.js";
import {
  i2 as i,
  i3 as i2,
  s2 as s
} from "./chunk-KUWSTWZR.js";
import {
  N,
  c
} from "./chunk-NH2CL7HZ.js";

// node_modules/@arcgis/core/arcade/featureset/support/FeatureSetQueryInterceptor.js
var e5 = class {
  constructor(e9, a5) {
    this.preLayerQueryCallback = e9, this.preRequestCallback = a5, this.preLayerQueryCallback || (this.preLayerQueryCallback = (e10) => {
    }), this.preRequestCallback || (this.preLayerQueryCallback = (e10) => {
    });
  }
};

// node_modules/@arcgis/core/widgets/Attachments/AttachmentsViewModel.js
var u2 = { editing: false, operations: { add: true, update: true, delete: true } };
var f4 = O.ofType(d3);
var y3 = class extends b {
  constructor(t) {
    super(t), this._getAttachmentsPromise = null, this._attachmentLayer = null, this.attachmentKeywords = null, this.attachmentTypes = null, this.capabilities = { ...u2 }, this.activeAttachmentInfo = null, this.activeFileInfo = null, this.attachmentInfos = new f4(), this.fileInfos = new O(), this.graphic = null, this.mode = "view", this.orderByFields = null, this.filesEnabled = false, this.addHandles(l(() => this.graphic, () => this._graphicChanged(), h));
  }
  destroy() {
    this._attachmentLayer = null, this.graphic = null;
  }
  castCapabilities(t) {
    return { ...u2, ...t };
  }
  get state() {
    return this._getAttachmentsPromise ? "loading" : this.graphic ? "ready" : "disabled";
  }
  get supportsResizeAttachments() {
    const { graphic: t } = this;
    if (!t) return false;
    const e9 = t.sourceLayer ?? t.layer;
    return (e9 == null ? void 0 : e9.loaded) && "capabilities" in e9 && e9.capabilities && "attachment" in e9.capabilities && e9.capabilities.attachment && "supportsResize" in e9.capabilities.attachment && e9.capabilities.attachment.supportsResize || false;
  }
  get supportsTypeWildcard() {
    const { graphic: t } = this;
    if (!t) return false;
    const e9 = t.sourceLayer ?? t.layer;
    return (e9 == null ? void 0 : e9.loaded) && "capabilities" in e9 && e9.capabilities && "attachment" in e9.capabilities && e9.capabilities.attachment && "supportsResize" in e9.capabilities.attachment && e9.capabilities.attachment.supportsTypeWildcard || false;
  }
  async getAttachments() {
    const { _attachmentLayer: t, attachmentInfos: e9, orderByFields: a5, attachmentTypes: i8, attachmentKeywords: r3, supportsTypeWildcard: s10 } = this;
    if (!t || "function" != typeof t.queryAttachments) throw new s("invalid-layer", "getAttachments(): A valid layer is required.");
    const o = this._getObjectId();
    if ("number" != typeof o) throw new s("invalid-object-id", "getAttachments(): Numeric object id is required");
    const c7 = a5 == null ? void 0 : a5.map((t2) => `${t2.field} ${"descending" === t2.order ? "DESC" : "ASC"}`), h6 = new p3({ objectIds: [o], returnMetadata: true, orderByFields: c7, attachmentTypes: s10 ? i8 == null ? void 0 : i8.filter(Boolean).map((t2) => `${t2}/*`) : void 0, keywords: r3 }), d8 = [], l7 = t.queryAttachments(h6).then((t2) => t2[o] || d8).catch(() => d8);
    this._getAttachmentsPromise = l7, this.notifyChange("state");
    const m6 = await l7;
    return e9.destroyAll(), m6.length && e9.addMany(m6), this._getAttachmentsPromise = null, this.notifyChange("state"), m6;
  }
  async addAttachment(t, e9 = this.graphic) {
    var _a2;
    const { _attachmentLayer: a5, attachmentInfos: i8, capabilities: r3 } = this;
    if (!e9) throw new s("invalid-graphic", "addAttachment(): A valid graphic is required.", { graphic: e9 });
    if (!t) throw new s("invalid-attachment", "addAttachment(): An attachment is required.", { attachment: t });
    if (!((_a2 = r3.operations) == null ? void 0 : _a2.add)) throw new s("invalid-capabilities", "addAttachment(): add capabilities are required.");
    if (!a5 || "function" != typeof a5.addAttachment) throw new s("invalid-layer", "addAttachment(): A valid layer is required.");
    const s10 = a5.addAttachment(e9, t).then((t2) => this._queryAttachment(t2.objectId, e9)), o = await s10;
    return i8.add(o), o;
  }
  async deleteAttachment(t) {
    var _a2;
    const { _attachmentLayer: e9, attachmentInfos: a5, graphic: i8, capabilities: r3 } = this;
    if (!t) throw new s("invalid-attachment-info", "deleteAttachment(): An attachmentInfo is required.", { attachmentInfo: t });
    if (!((_a2 = r3.operations) == null ? void 0 : _a2.delete)) throw new s("invalid-capabilities", "deleteAttachment(): delete capabilities are required.");
    if (!e9 || "function" != typeof e9.deleteAttachments) throw new s("invalid-layer", "deleteAttachment(): A valid layer is required.");
    if (!i8) throw new s("invalid-graphic", "deleteAttachment(): A graphic is required.");
    const s10 = e9.deleteAttachments(i8, [t.id]).then(() => t), o = await s10;
    return a5.remove(o), o.destroy(), o;
  }
  async updateAttachment(t, e9 = this.activeAttachmentInfo) {
    var _a2;
    const { _attachmentLayer: a5, attachmentInfos: i8, graphic: r3, capabilities: s10 } = this;
    if (!t) throw new s("invalid-attachment", "updateAttachment(): An attachment is required.", { attachment: t });
    if (!e9) throw new s("invalid-attachment-info", "updateAttachment(): An attachmentInfo is required.", { attachmentInfo: e9 });
    if (!((_a2 = s10.operations) == null ? void 0 : _a2.update)) throw new s("invalid-capabilities", "updateAttachment(): Update capabilities are required.");
    const o = i8.indexOf(e9);
    if (!a5 || "function" != typeof a5.updateAttachment) throw new s("invalid-layer", "updateAttachment(): A valid layer is required.");
    if (!r3) throw new s("invalid-graphic", "updateAttachment(): A graphic is required.");
    const c7 = a5.updateAttachment(r3, e9.id, t).then((t2) => this._queryAttachment(t2.objectId)), h6 = await c7;
    return i8.splice(o, 1, h6), h6;
  }
  async commitFiles() {
    return await Promise.all(this.fileInfos.items.map((t) => this.addAttachment(t.form))), this.fileInfos.removeAll(), this.getAttachments();
  }
  addFile(t, e9) {
    if (!t || !e9) return null;
    const a5 = { file: t, form: e9 };
    return this.fileInfos.add(a5), a5;
  }
  updateFile(t, e9, a5 = this.activeFileInfo) {
    if (!t || !e9 || !a5) return null;
    const i8 = this.fileInfos.indexOf(a5);
    return i8 > -1 && this.fileInfos.splice(i8, 1, { file: t, form: e9 }), this.fileInfos.items[i8];
  }
  deleteFile(t) {
    const e9 = this.fileInfos.find((e10) => e10.file === t);
    return e9 ? (this.fileInfos.remove(e9), e9) : null;
  }
  async _queryAttachment(t, e9) {
    const { _attachmentLayer: a5 } = this;
    if (!t || !(a5 == null ? void 0 : a5.queryAttachments)) throw new s("invalid-attachment-id", "Could not query attachment.");
    const i8 = this._getObjectId(e9);
    if ("number" != typeof i8) throw new s("invalid-object-id", "getAttachments(): Numeric object id is required");
    const r3 = new p3({ objectIds: [i8], attachmentsWhere: `AttachmentId=${t}`, returnMetadata: true });
    return a5.queryAttachments(r3).then((t2) => t2[i8][0]);
  }
  _getObjectId(t = this.graphic) {
    return (t == null ? void 0 : t.getObjectId()) ?? null;
  }
  _graphicChanged() {
    this.graphic && (this._setAttachmentLayer(), this.getAttachments().catch(() => this.attachmentInfos.destroyAll()));
  }
  _setAttachmentLayer() {
    const { graphic: t } = this, e9 = x(t);
    this._attachmentLayer = e9 ? "scene" === e9.type && null != e9.associatedLayer ? e9.associatedLayer : e9 : null;
  }
};
__decorate([m({ type: [String] })], y3.prototype, "attachmentKeywords", void 0), __decorate([m({ type: [["application", "audio", "image", "model", "text", "video"]] })], y3.prototype, "attachmentTypes", void 0), __decorate([m()], y3.prototype, "capabilities", void 0), __decorate([s3("capabilities")], y3.prototype, "castCapabilities", null), __decorate([m()], y3.prototype, "activeAttachmentInfo", void 0), __decorate([m()], y3.prototype, "activeFileInfo", void 0), __decorate([m({ readOnly: true, type: f4 })], y3.prototype, "attachmentInfos", void 0), __decorate([m()], y3.prototype, "fileInfos", void 0), __decorate([m({ type: _2 })], y3.prototype, "graphic", void 0), __decorate([m()], y3.prototype, "mode", void 0), __decorate([m({ type: [a3] })], y3.prototype, "orderByFields", void 0), __decorate([m({ readOnly: true })], y3.prototype, "state", null), __decorate([m()], y3.prototype, "filesEnabled", void 0), __decorate([m({ readOnly: true })], y3.prototype, "supportsResizeAttachments", null), __decorate([m({ readOnly: true })], y3.prototype, "supportsTypeWildcard", null), y3 = __decorate([a2("esri.widgets.Attachments.AttachmentsViewModel")], y3);

// node_modules/@arcgis/core/widgets/Feature/FeatureAttachments/FeatureAttachmentsViewModel.js
var s6 = class extends y3 {
  constructor(t) {
    super(t), this.description = null, this.title = null;
  }
};
__decorate([m()], s6.prototype, "description", void 0), __decorate([m()], s6.prototype, "title", void 0), s6 = __decorate([a2("esri.widgets.Feature.FeatureAttachments.FeatureAttachmentsViewModel")], s6);

// node_modules/@arcgis/core/widgets/Feature/FeatureContent/FeatureContentViewModel.js
var c4 = class extends b {
  constructor(t) {
    super(t), this._loadingPromise = null, this.created = null, this.creator = null, this.destroyer = null, this.graphic = null, this.addHandles(l(() => this.creator, (t2) => {
      this._destroyContent(), this._createContent(t2);
    }, h));
  }
  destroy() {
    this._destroyContent();
  }
  get state() {
    return this._loadingPromise ? "loading" : "ready";
  }
  _destroyContent() {
    const { created: t, graphic: e9, destroyer: r3 } = this;
    t && e9 && (q({ type: "content", value: r3, event: { graphic: e9 } }), this._set("created", null));
  }
  async _createContent(t) {
    const e9 = this.graphic;
    if (!e9 || !t) return;
    const r3 = q({ type: "content", value: t, event: { graphic: e9 } });
    this._loadingPromise = r3, this.notifyChange("state");
    const o = await r3;
    r3 === this._loadingPromise && (this._loadingPromise = null, this.notifyChange("state"), this._set("created", o));
  }
};
__decorate([m({ readOnly: true })], c4.prototype, "created", void 0), __decorate([m()], c4.prototype, "creator", void 0), __decorate([m()], c4.prototype, "destroyer", void 0), __decorate([m({ type: _2 })], c4.prototype, "graphic", void 0), __decorate([m({ readOnly: true })], c4.prototype, "state", null), c4 = __decorate([a2("esri.widgets.Feature.FeatureContent.FeatureContentViewModel")], c4);

// node_modules/@arcgis/core/widgets/Feature/FeatureFields/FeatureFieldsViewModel.js
var d4 = class extends b {
  constructor(o) {
    super(o), this.attributes = null, this.expressionInfos = null, this.description = null, this.fieldInfos = null, this.isContentFieldInfos = false, this.graphic = null, this.layer = null, this.title = null;
  }
  get formattedFieldInfos() {
    const { expressionInfos: o, fieldInfos: e9, layer: t, isContentFieldInfos: r3, graphic: i8 } = this, p9 = [];
    return e9 == null ? void 0 : e9.forEach((e10) => {
      if (!(!e10.hasOwnProperty("visible") || e10.visible)) return;
      const d8 = e10.clone();
      d8.label = k({ fieldInfo: d8, expressionInfos: o, layer: t, graphic: i8, isContentFieldInfos: r3 });
      I(t) && M({ fieldInfo: e10, graphic: i8 }) && (d8.fieldFormat = R({ fieldInfo: d8, isContentFieldInfos: r3, layer: t })), p9.push(d8);
    }), p9;
  }
};
__decorate([m()], d4.prototype, "attributes", void 0), __decorate([m({ type: [i4] })], d4.prototype, "expressionInfos", void 0), __decorate([m()], d4.prototype, "description", void 0), __decorate([m({ type: [f3] })], d4.prototype, "fieldInfos", void 0), __decorate([m({ readOnly: true })], d4.prototype, "formattedFieldInfos", null), __decorate([m()], d4.prototype, "isContentFieldInfos", void 0), __decorate([m()], d4.prototype, "graphic", void 0), __decorate([m()], d4.prototype, "layer", void 0), __decorate([m()], d4.prototype, "title", void 0), d4 = __decorate([a2("esri.widgets.Feature.FeatureFields.FeatureFieldsViewModel")], d4);

// node_modules/@arcgis/core/widgets/Feature/support/relatedFeatureUtils.js
var d5 = "esri.widgets.Feature.support.relatedFeatureUtils";
var p5 = () => i2.getLogger(d5);
var m2 = /* @__PURE__ */ new Map();
function h3(e9) {
  if (!he(e9)) return null;
  const [t, r3] = e9.split("/").slice(1);
  return { layerId: t, fieldName: r3 };
}
function y4(e9, t) {
  if (!t.relationships) return null;
  let r3 = null;
  const { relationships: i8 } = t;
  return i8.some((t2) => t2.id === parseInt(e9, 10) && (r3 = t2, true)), r3;
}
function I3({ originRelationship: e9, relationships: t, layerId: r3 }) {
  return t.find(({ relatedTableId: t2, id: i8 }) => `${t2}` === r3 && i8 === (e9 == null ? void 0 : e9.id)) ?? null;
}
function F(e9, t) {
  const r3 = t.toLowerCase();
  for (const i8 in e9) if (i8.toLowerCase() === r3) return e9[i8];
  return null;
}
function b3(e9, t) {
  const r3 = y4(e9, t);
  if (!r3) return;
  return { url: `${t.url}/${r3.relatedTableId}`, sourceSpatialReference: t.spatialReference, relation: r3, relatedFields: [], outStatistics: [] };
}
function g(e9, t) {
  if (!t) return;
  if (!e9) return;
  const { features: r3, statsFeatures: i8 } = e9, o = r3 == null ? void 0 : r3.value;
  t.relatedFeatures = o ? o.features : [];
  const s10 = i8 == null ? void 0 : i8.value;
  t.relatedStatsFeatures = s10 ? s10.features : [];
}
function S(e9, t, r3, i8) {
  var _a2;
  const o = new u();
  return o.outFields = ["*"], o.relationshipId = "number" == typeof t.id ? t.id : parseInt(t.id, 10), o.objectIds = [e9.attributes[r3.objectIdField]], o.gdbVersion = r3.gdbVersion ?? null, o.historicMoment = r3.historicMoment ?? null, ((_a2 = r3.queryRelatedFeatures) == null ? void 0 : _a2.call(r3, o, i8)) ?? Promise.resolve({});
}
function w(e9, t, r3) {
  let i8 = 0;
  const o = [];
  for (; i8 < t.length; ) o.push(`${e9} IN (${t.slice(i8, r3 + i8)})`), i8 += r3;
  return o.join(" OR ");
}
function j2(e9) {
  return e9 ? c(e9) : void 0;
}
function R2(e9) {
  return e9 ? c(e9, (e10, t) => JSON.stringify(e10.toJSON()) === JSON.stringify(t.toJSON())) : void 0;
}
async function $(e9, t, r3, i8) {
  const o = r3.layerId.toString(), { layerInfo: u4, relation: c7, relatedFields: f8, outStatistics: d8, url: p9, sourceSpatialReference: m6 } = t, h6 = j2(f8), y6 = R2(d8);
  if (!u4 || !c7) return null;
  const b6 = I3({ originRelationship: c7, relationships: u4.relationships, layerId: o });
  if ((b6 == null ? void 0 : b6.relationshipTableId) && b6.keyFieldInRelationshipTable) {
    const t2 = (await S(e9, b6, r3, i8))[e9.attributes[r3.objectIdField]];
    if (!t2) return null;
    const o2 = t2.features.map((e10) => e10.attributes[u4.objectIdField]);
    if ((y6 == null ? void 0 : y6.length) && u4.supportsStatistics) {
      const e10 = new b2();
      e10.where = w(u4.objectIdField, o2, 1e3), e10.outFields = h6, e10.outStatistics = y6, e10.sourceSpatialReference = m6;
      const r4 = { features: Promise.resolve(t2), statsFeatures: s5(p9, e10) };
      return j(r4);
    }
  }
  const g3 = b6 == null ? void 0 : b6.keyField;
  if (g3) {
    const t2 = ge(L3(u4.fields, g3)), o2 = F(e9.attributes, c7.keyField), f9 = t2 ? `${g3}=${o2}` : `${g3}='${o2}'`, d9 = r3.historicMoment, I6 = r3.gdbVersion, b7 = s5(p9, new b2({ where: f9, outFields: h6, sourceSpatialReference: m6, historicMoment: d9, gdbVersion: I6 }), i8), S2 = !!(y6 == null ? void 0 : y6.length) && u4.supportsStatistics ? s5(p9, new b2({ where: f9, outFields: h6, outStatistics: y6, sourceSpatialReference: m6 }), i8) : null, w4 = { features: b7 };
    return S2 && (w4.statsFeatures = S2), j(w4);
  }
  return null;
}
function N3(t, r3) {
  return H(t, { query: { f: "json" }, signal: r3 == null ? void 0 : r3.signal });
}
function v2({ relatedInfos: e9, layer: t }, i8) {
  const n8 = {};
  return e9.forEach((e10, i9) => {
    const { relation: o } = e10;
    if (!o) {
      const e11 = new s("editor:relation-required", "A relation is required on a layer to retrieve related records.");
      throw p5().error(e11), e11;
    }
    const { relatedTableId: s10 } = o;
    if ("number" != typeof s10) {
      const e11 = new s("editor:related-table", "A related table ID is required on a layer to retrieve related records.");
      throw p5().error(e11), e11;
    }
    const l7 = `${t.url}/${s10}`, a5 = m2.get(l7), u4 = a5 ?? N3(l7);
    a5 || m2.set(l7, u4), n8[i9] = u4;
  }), p(j(n8), i8);
}
function T({ graphic: e9, relatedInfos: t, layer: r3 }, i8) {
  const o = {};
  return t.forEach((t2, s10) => {
    t2.layerInfo && (o[s10] = $(e9, t2, r3, i8));
  }), j(o);
}
function q2({ relatedInfo: e9, fieldName: t, fieldInfo: r3 }) {
  var _a2, _b;
  if ((_a2 = e9.relatedFields) == null ? void 0 : _a2.push(t), r3.statisticType) {
    const i8 = new p2({ statisticType: r3.statisticType, onStatisticField: t, outStatisticFieldName: t });
    (_b = e9.outStatistics) == null ? void 0 : _b.push(i8);
  }
}
function L3(e9, t) {
  if (null != e9) {
    t = t.toLowerCase();
    for (const r3 of e9) if (r3 && r3.name.toLowerCase() === t) return r3;
  }
  return null;
}

// node_modules/@arcgis/core/widgets/Feature/FeatureMedia/FeatureMediaViewModel.js
var I4 = { chartAnimation: true };
var v3 = class extends b {
  constructor(t) {
    super(t), this.abilities = { ...I4 }, this.activeMediaInfoIndex = 0, this.attributes = null, this.description = null, this.fieldInfoMap = null, this.formattedAttributes = null, this.expressionAttributes = null, this.layer = null, this.mediaInfos = null, this.popupTemplate = null, this.relatedInfos = null, this.title = null;
  }
  castAbilities(t) {
    return { ...I4, ...t };
  }
  get activeMediaInfo() {
    return this.formattedMediaInfos[this.activeMediaInfoIndex] || null;
  }
  get formattedMediaInfos() {
    return this._formatMediaInfos() || [];
  }
  get formattedMediaInfoCount() {
    return this.formattedMediaInfos.length;
  }
  setActiveMedia(t) {
    this._setContentElementMedia(t);
  }
  next() {
    this._pageContentElementMedia(1);
  }
  previous() {
    this._pageContentElementMedia(-1);
  }
  _setContentElementMedia(t) {
    const { formattedMediaInfoCount: e9 } = this, i8 = (t + e9) % e9;
    this.activeMediaInfoIndex = i8;
  }
  _pageContentElementMedia(t) {
    const { activeMediaInfoIndex: e9 } = this, i8 = e9 + t;
    this._setContentElementMedia(i8);
  }
  _formatMediaInfos() {
    const { mediaInfos: t, layer: e9 } = this, o = this.attributes ?? {}, r3 = this.formattedAttributes ?? {}, a5 = this.expressionAttributes ?? {}, s10 = this.fieldInfoMap ?? /* @__PURE__ */ new Map();
    return (t == null ? void 0 : t.map((t2) => {
      const i8 = t2 == null ? void 0 : t2.clone();
      if (!i8) return null;
      if (i8.title = Q({ attributes: o, fieldInfoMap: s10, globalAttributes: r3, expressionAttributes: a5, layer: e9, text: i8.title }), i8.caption = Q({ attributes: o, fieldInfoMap: s10, globalAttributes: r3, expressionAttributes: a5, layer: e9, text: i8.caption }), i8.altText = Q({ attributes: o, fieldInfoMap: s10, globalAttributes: r3, expressionAttributes: a5, layer: e9, text: i8.altText }), "image" === i8.type) {
        if (!i8.value) return;
        return this._setImageValue({ value: i8.value, formattedAttributes: r3, layer: e9 }), i8.value.sourceURL ? i8 : void 0;
      }
      if ("pie-chart" === i8.type || "line-chart" === i8.type || "column-chart" === i8.type || "bar-chart" === i8.type) {
        if (!i8.value) return;
        return this._setChartValue({ value: i8.value, chartType: i8.type, attributes: o, formattedAttributes: r3, layer: e9, expressionAttributes: a5 }), i8;
      }
      return null;
    }).filter(N)) ?? [];
  }
  _setImageValue(t) {
    const e9 = this.fieldInfoMap ?? /* @__PURE__ */ new Map(), { value: i8, formattedAttributes: o, layer: r3 } = t, { linkURL: a5, sourceURL: s10 } = i8;
    if (s10) {
      const t2 = B2(s10, r3);
      i8.sourceURL = P({ formattedAttributes: o, template: t2, fieldInfoMap: e9 });
    }
    if (a5) {
      const t2 = B2(a5, r3);
      i8.linkURL = P({ formattedAttributes: o, template: t2, fieldInfoMap: e9 });
    }
  }
  _setChartValue(t) {
    const { value: e9, attributes: i8, formattedAttributes: o, chartType: r3, layer: a5, expressionAttributes: s10 } = t, { popupTemplate: l7, relatedInfos: n8 } = this, { fields: p9, normalizeField: d8 } = e9, m6 = a5;
    e9.fields = O2(p9, m6), d8 && (e9.normalizeField = z(d8, m6));
    if (!p9.some((t2) => !!(null != o[t2] || he(t2) && (n8 == null ? void 0 : n8.size)))) return;
    const h6 = (l7 == null ? void 0 : l7.fieldInfos) ?? [];
    p9.forEach((t2, a6) => {
      var _a2;
      const l8 = (_a2 = e9.colors) == null ? void 0 : _a2[a6];
      if (he(t2)) return void (e9.series = [...e9.series, ...this._getRelatedChartInfos({ fieldInfos: h6, fieldName: t2, formattedAttributes: o, chartType: r3, value: e9, color: l8 })]);
      const n9 = this._getChartOption({ value: e9, attributes: i8, chartType: r3, formattedAttributes: o, expressionAttributes: s10, fieldName: t2, fieldInfos: h6, color: l8 });
      e9.series.push(n9);
    });
  }
  _getRelatedChartInfos(t) {
    var _a2;
    const { fieldInfos: e9, fieldName: i8, formattedAttributes: o, chartType: r3, value: a5, color: s10 } = t, l7 = [], n8 = h3(i8), p9 = n8 && ((_a2 = this.relatedInfos) == null ? void 0 : _a2.get(n8.layerId.toString()));
    if (!p9) return l7;
    const { relatedFeatures: d8, relation: u4 } = p9;
    if (!u4 || !d8) return l7;
    const { cardinality: f8 } = u4;
    d8.forEach((t2) => {
      const { attributes: p10 } = t2;
      p10 && Object.keys(p10).forEach((t3) => {
        t3 === n8.fieldName && l7.push(this._getChartOption({ value: a5, attributes: p10, formattedAttributes: o, fieldName: i8, chartType: r3, relatedFieldName: t3, hasMultipleRelatedFeatures: (d8 == null ? void 0 : d8.length) > 1, fieldInfos: e9, color: s10 }));
      });
    });
    return "one-to-many" === f8 || "many-to-many" === f8 ? l7 : [l7[0]];
  }
  _getTooltip({ label: t, value: e9, chartType: i8 }) {
    return "pie-chart" === i8 ? `${t}` : `${t}: ${e9}`;
  }
  _getChartOption(t) {
    var _a2;
    const { value: e9, attributes: i8, formattedAttributes: o, expressionAttributes: r3, fieldName: a5, relatedFieldName: n8, fieldInfos: p9, chartType: d8, hasMultipleRelatedFeatures: u4, color: I6 } = t, { layer: v5, graphic: M4 } = this, A3 = this.fieldInfoMap ?? /* @__PURE__ */ new Map(), { normalizeField: g3, tooltipField: x4 } = e9, _4 = g3 ? he(g3) ? i8[h3(g3).fieldName] : i8[g3] : null, C = U(a5) && r3 && void 0 !== r3[a5] ? r3[a5] : n8 && void 0 !== i8[n8] ? i8[n8] : void 0 !== i8[a5] ? i8[a5] : o[a5], T4 = void 0 === C ? null : C && _4 ? C / _4 : C, N5 = new p4({ fieldName: a5, color: I6, value: null != T4 ? "number" == typeof T4 ? T4 : Number(T4) : void 0 });
    if (he(a5)) {
      const t2 = A3.get(a5.toLowerCase()), e10 = x4 && A3.get(x4.toLowerCase()), r4 = (t2 == null ? void 0 : t2.fieldName) ?? a5, s10 = u4 && x4 ? h3(x4).fieldName : (e10 == null ? void 0 : e10.fieldName) ?? x4, l7 = u4 && s10 ? i8[s10] : o[s10] ?? (t2 && k({ fieldInfo: t2, graphic: M4, layer: v5 })) ?? (t2 == null ? void 0 : t2.fieldName) ?? n8, p10 = u4 && n8 ? i8[n8] : o[r4];
      return N5.tooltip = this._getTooltip({ label: l7, value: p10, chartType: d8 }), N5;
    }
    const F7 = oe(p9, a5), j5 = z(a5, v5), w4 = x4 && void 0 !== o[x4] ? o[x4] : k({ fieldInfo: F7 || new f3({ fieldName: j5 }), expressionInfos: (_a2 = this.popupTemplate) == null ? void 0 : _a2.expressionInfos, graphic: M4, layer: v5 }), E2 = o[j5];
    return N5.tooltip = this._getTooltip({ label: w4, value: E2, chartType: d8 }), N5;
  }
};
__decorate([m()], v3.prototype, "abilities", void 0), __decorate([s3("abilities")], v3.prototype, "castAbilities", null), __decorate([m()], v3.prototype, "activeMediaInfoIndex", void 0), __decorate([m({ readOnly: true })], v3.prototype, "activeMediaInfo", null), __decorate([m()], v3.prototype, "attributes", void 0), __decorate([m()], v3.prototype, "description", void 0), __decorate([m()], v3.prototype, "fieldInfoMap", void 0), __decorate([m()], v3.prototype, "formattedAttributes", void 0), __decorate([m()], v3.prototype, "expressionAttributes", void 0), __decorate([m({ readOnly: true })], v3.prototype, "formattedMediaInfos", null), __decorate([m()], v3.prototype, "graphic", void 0), __decorate([m()], v3.prototype, "layer", void 0), __decorate([m({ readOnly: true })], v3.prototype, "formattedMediaInfoCount", null), __decorate([m()], v3.prototype, "mediaInfos", void 0), __decorate([m()], v3.prototype, "popupTemplate", void 0), __decorate([m()], v3.prototype, "relatedInfos", void 0), __decorate([m()], v3.prototype, "title", void 0), v3 = __decorate([a2("esri.widgets.Feature.FeatureMedia.FeatureMediaViewModel")], v3);

// node_modules/@arcgis/core/widgets/Feature/support/arcadeFeatureUtils.js
var d6 = "esri.widgets.Feature.support.arcadeFeatureUtils";
var f5 = () => i2.getLogger(d6);
function y5(e9) {
  return ce(de(e9));
}
function m3(e9) {
  return "createQuery" in e9 && "queryFeatures" in e9;
}
async function g2({ graphic: e9, view: r3, options: t }) {
  const { isAggregate: a5 } = e9, i8 = e9.layer ?? e9.sourceLayer;
  if (!a5 || !i8 || "2d" !== (r3 == null ? void 0 : r3.type)) return [];
  const n8 = await r3.whenLayerView(i8);
  if (!m3(n8)) return [];
  const o = n8.createQuery(), s10 = e9.getObjectId();
  o.aggregateIds = null != s10 ? [s10] : [];
  const { features: c7 } = await n8.queryFeatures(o, t);
  return c7;
}
function w2({ layer: e9, aggregatedFeatures: r3, interceptor: t }) {
  const { fields: a5, objectIdField: i8, geometryType: n8, spatialReference: o } = e9, c7 = "displayField" in e9 ? e9.displayField : void 0;
  return new et({ fields: a5, objectIdField: i8, geometryType: n8, spatialReference: o, displayField: c7, interceptor: t, ..."feature" === e9.type ? { templates: e9.templates, typeIdField: e9.typeIdField, types: e9.types } : null, source: r3 });
}
function h4(e9) {
  return e9.isAggregate ? "popup-feature-reduction" : "esri.views.3d.layers.VoxelGraphic" === e9.declaredClass ? "popup-voxel" : n3(e9.origin) || n4(e9.origin) ? "popup-imagery" : "popup";
}
function v4(e9) {
  var _a2, _b;
  return { scale: e9 == null ? void 0 : e9.scale, timeProperties: { currentStart: (_a2 = e9 == null ? void 0 : e9.timeExtent) == null ? void 0 : _a2.start, currentEnd: (_b = e9 == null ? void 0 : e9.timeExtent) == null ? void 0 : _b.end, startIncluded: true, endIncluded: true } };
}
function x2(e9) {
  return { $voxel: e9 };
}
function b4(e9) {
  var _a2;
  let r3 = null;
  if (((_a2 = e9.origin.layer.fields) == null ? void 0 : _a2.length) > 0) {
    r3 = e9.cloneShallow();
    const t = e9.origin.layer.fieldsIndex;
    r3.attributes = Object.fromEntries(Object.entries(r3.attributes ?? {}).filter(([e10]) => t.has(e10)));
  }
  return { $pixel: e9, $imageCollectionItem: r3 };
}
async function F2(e9, r3, t, a5, i8, n8, o) {
  let s10 = null;
  if (n8.has("$aggregatedfeatures")) {
    const e10 = await g2({ graphic: r3, view: t, options: a5 }), n9 = r3.sourceLayer || r3.layer;
    s10 = w2({ layer: n9, aggregatedFeatures: e10, interceptor: i8 });
  }
  return { vars: { $feature: r3, $aggregatedFeatures: s10, $view: v4(t) }, track: o ? await $2(e9, r3, t) : null, [Symbol.dispose]: () => s10 == null ? void 0 : s10[Symbol.dispose]() };
}
function I5(e9) {
  if (c3(e9)) return e9.getTime();
  if ("number" == typeof e9) return e9;
  if ("string" == typeof e9) return new Date(e9).getTime();
  throw new Error(`Unexpected time value: ${e9}`);
}
async function $2(e9, r3, t) {
  var _a2;
  const a5 = r3.sourceLayer || r3.layer;
  if (null == a5 || !("timeInfo" in a5)) return null;
  const n8 = (_a2 = a5.timeInfo) == null ? void 0 : _a2.trackIdField;
  if (null == n8) return null;
  const o = r3.getAttribute(n8);
  if (null == o) return null;
  let s10, l7;
  if ("string" == typeof o) s10 = `"${n8.replaceAll('"', '""')}" = '${o.replaceAll("'", "''")}'`;
  else {
    if ("number" != typeof o) return f5().warn("Expected track id to be a string or number"), null;
    s10 = `"${n8.replaceAll('"', '""')}" = ${o}`;
  }
  if ("stream" === a5.type && null != t) {
    const e10 = await t.whenLayerView(a5), r4 = e10.createQuery();
    r4.returnGeometry = true, r4.where = l3(r4.where, s10), l7 = (await e10.queryFeatures(r4)).features;
  } else {
    if (!("queryFeatures" in a5)) return null;
    {
      const e10 = a5.createQuery();
      e10.returnGeometry = true, e10.where = l3(e10.where, s10), l7 = (await a5.queryFeatures(e10)).features;
    }
  }
  const u4 = a5.fieldsIndex.normalizeFieldName(a5.timeInfo.startField) ?? i3, p9 = a5.timeInfo.endField ? a5.fieldsIndex.normalizeFieldName(a5.timeInfo.endField) : null, d8 = l7.map((r4) => {
    const a6 = r4.getObjectId();
    if (null == a6) throw new Error("Cannot identify observation");
    const i8 = e9.ArcadeFeature.createFromGraphic(r4, t == null ? void 0 : t.timeZone), n9 = I5(r4.getAttribute(u4));
    return { id: a6, feature: i8, startTime: n9, endTime: null != p9 ? I5(r4.getAttribute(p9)) : n9, stats: { totalDistance: void 0, distance: void 0, speed: void 0, acceleration: void 0 } };
  }).sort((e10, r4) => e10.startTime - r4.startTime), y6 = "esri.TrackGraphic" === r3.declaredClass ? d8.length - 1 : d8.findIndex((e10) => r3.getObjectId() === e10.id);
  if (y6 < 0) throw new Error("Couldn't locate feature in observations");
  return { observations: d8, currentObservationIndex: y6 };
}
async function j3(e9, r3, a5, i8, n8, o) {
  var _a2;
  const s10 = (r3.sourceLayer || r3.layer) ?? void 0;
  return { vars: { $feature: r3, $layer: null != s10 && N2(s10) ? s10 : "scene" === (s10 == null ? void 0 : s10.type) && null != s10.associatedLayer ? s10.associatedLayer : void 0, $map: a5, $datastore: s10 && "url" in s10 ? s10.url : void 0, $userInput: i8, $graph: "knowledge-graph-sublayer" === (s10 == null ? void 0 : s10.type) ? (_a2 = s10.parentCompositeLayer) == null ? void 0 : _a2.knowledgeGraph : void 0, $view: v4(n8) }, track: o ? await $2(e9, r3, n8) : null };
}
async function T2(e9, { arcade: r3, graphic: t, map: a5, location: i8, view: n8, options: o, interceptor: s10, arcadeExecutor: c7, usesTrack: l7 }) {
  switch (e9) {
    case "popup":
      return { ...await j3(r3, t, a5, i8, n8, l7), [Symbol.dispose]() {
      } };
    case "popup-feature-reduction": {
      const e10 = new Set(c7.variablesUsed);
      return await F2(r3, t, n8, o, s10, e10, l7);
    }
    case "popup-voxel":
      return { vars: x2(t), track: null, [Symbol.dispose]() {
      } };
    case "popup-imagery":
      return { vars: b4(t), track: null, [Symbol.dispose]() {
      } };
    default:
      throw new Error(`Unexpected profile name ${e9}`);
  }
}
async function k2() {
  const [e9, r3, { Feature: t }] = await Promise.all([import("./arcade-LY3QE2QB.js"), import("./arcade-NZSTD336.js"), import("./Feature-XKYMXHIR.js")]);
  return { executor: e9, syntaxUtils: r3, ArcadeFeature: t };
}
async function E(t, a5, i8) {
  const { executor: { createArcadeProfile: n8, createArcadeExecutor: o }, syntaxUtils: s10 } = i8, c7 = h4(a5), l7 = n8(c7);
  let u4;
  try {
    u4 = await o(t, l7);
  } catch (y6) {
    return f5().error("arcade-executor-error", { error: y6, expression: t }), null;
  }
  const p9 = /* @__PURE__ */ new Set();
  u4.variablesUsed.includes("$view") && (s10.scriptUsesViewProperties(u4.syntaxTree, ["scale"]) && p9.add("view-scale"), s10.scriptUsesViewProperties(u4.syntaxTree, ["timeProperties"]) && p9.add("view-time-extent"));
  const d8 = s10.scriptUsesTrack(u4.syntaxTree);
  return { dependencies: p9, async evaluate({ graphic: a6, interceptor: n9, location: o2, map: s11, options: l8, spatialReference: p10, view: m6 }) {
    var _a2;
    const g3 = { stack: [], error: void 0, hasError: false };
    try {
      const r3 = __addDisposableResource(g3, await T2(c7, { arcade: i8, graphic: a6, map: s11, location: o2, view: m6, options: l8, interceptor: n9, arcadeExecutor: u4, usesTrack: d8 }), false), w4 = { abortSignal: (l8 == null ? void 0 : l8.signal) ?? void 0, interceptor: n9 ?? void 0, rawOutput: true, spatialReference: p10 ?? void 0, timeZone: m6 == null ? void 0 : m6.timeZone, track: r3.track, console(...e9) {
        f5().info(...e9);
      } };
      try {
        return await u4.executeAsync(r3.vars, w4);
      } catch (y6) {
        if ((_a2 = l8 == null ? void 0 : l8.signal) == null ? void 0 : _a2.aborted) return;
        return void f5().error("arcade-execution-error", { error: y6, graphic: a6, expression: t });
      }
    } catch (w4) {
      g3.error = w4, g3.hasError = true;
    } finally {
      __disposeResources(g3);
    }
  } };
}
async function A({ expression: e9, graphic: r3 }) {
  return e9 ? E(e9, r3, await k2()) : null;
}
async function L4(e9, r3) {
  if (!(e9 == null ? void 0 : e9.length)) return { dependencies: /* @__PURE__ */ new Set(), expressions: /* @__PURE__ */ new Map() };
  const t = await k2(), a5 = /* @__PURE__ */ new Set(), i8 = /* @__PURE__ */ new Map();
  for (const n8 of e9) {
    const e10 = await E(n8.expression, r3, t);
    i8.set(`expression/${n8.name}`, e10), e10 == null ? void 0 : e10.dependencies.forEach((e11) => a5.add(e11));
  }
  return { dependencies: a5, expressions: i8 };
}

// node_modules/@arcgis/core/widgets/Feature/FeatureExpression/FeatureExpressionViewModel.js
var j4 = 1;
var k3 = class extends b {
  constructor(t) {
    super(t), this._compileTask = null, this._evaluateTask = null, this.expressionInfo = null, this.graphic = null, this.contentElementViewModel = null, this.interceptor = null, this.location = null, this.view = null, this._createVM = () => {
      var _a2, _b;
      const t2 = (_a2 = this.contentElement) == null ? void 0 : _a2.type;
      (_b = this.contentElementViewModel) == null ? void 0 : _b.destroy();
      const e9 = "fields" === t2 ? new d4() : "media" === t2 ? new v3() : "text" === t2 ? new c4() : null;
      this._set("contentElementViewModel", e9);
    }, this._compileThrottled = l5(this._startCompile, () => this.notifyChange("state"), j4, this), this._evaluateThrottled = l5(this._startEvaluate, () => this.notifyChange("state"), j4, this), this.addHandles([l(() => [this.expressionInfo, this.graphic], () => this._compileThrottled(), h), l(() => [this.contentElement], () => this._createVM(), h), f(() => {
      var _a2, _b, _c, _d, _e, _f;
      if (!((_a2 = this._compileTask) == null ? void 0 : _a2.finished)) return null;
      const t2 = this._compileTask.value, e9 = t2 == null ? void 0 : t2.dependencies;
      return [t2, this.spatialReference, this.map, this.view, (e9 == null ? void 0 : e9.has("view-scale")) ? (_b = this.view) == null ? void 0 : _b.scale : null, (e9 == null ? void 0 : e9.has("view-time-extent")) ? (_d = (_c = this.view) == null ? void 0 : _c.timeExtent) == null ? void 0 : _d.start : null, (e9 == null ? void 0 : e9.has("view-time-extent")) ? (_f = (_e = this.view) == null ? void 0 : _e.timeExtent) == null ? void 0 : _f.end : null];
    }, ([t2]) => this._evaluateThrottled(t2))]);
  }
  initialize() {
    this.addHandles([this._compileThrottled, this._evaluateThrottled]);
  }
  destroy() {
    var _a2;
    this._compileTask = e(this._compileTask), this._evaluateTask = e(this._evaluateTask), (_a2 = this.contentElementViewModel) == null ? void 0 : _a2.destroy(), this._set("contentElementViewModel", null);
  }
  get contentElement() {
    var _a2;
    return (_a2 = this._evaluateTask) == null ? void 0 : _a2.value;
  }
  get spatialReference() {
    var _a2;
    return ((_a2 = this.view) == null ? void 0 : _a2.spatialReference) ?? null;
  }
  set spatialReference(t) {
    this._override("spatialReference", t);
  }
  get state() {
    var _a2, _b;
    const { contentElement: t, contentElementViewModel: e9 } = this;
    return this._compileThrottled.hasPendingUpdates() || this._evaluateThrottled.hasPendingUpdates() || !((_a2 = this._compileTask) == null ? void 0 : _a2.finished) || !((_b = this._evaluateTask) == null ? void 0 : _b.finished) ? "loading" : t || e9 ? "ready" : "disabled";
  }
  get map() {
    var _a2;
    return ((_a2 = this.view) == null ? void 0 : _a2.map) ?? null;
  }
  set map(t) {
    this._override("map", t);
  }
  _startCompile() {
    this._evaluateTask = e(this._evaluateTask), this._compileTask = e(this._compileTask), this._compileTask = d2(async (t) => {
      const { expressionInfo: e9, graphic: o } = this, i8 = e9 == null ? void 0 : e9.expression;
      if (!i8 || !o) return null;
      const s10 = await A({ expression: i8, graphic: o });
      return s2(t), s10;
    });
  }
  _startEvaluate(t) {
    this._evaluateTask = e(this._evaluateTask), this._evaluateTask = d2(async (e9) => {
      const { graphic: o } = this;
      if (!t || !o) return null;
      const { interceptor: i8, spatialReference: s10, map: r3, location: a5, view: l7 } = this, p9 = await t.evaluate({ graphic: o, interceptor: i8, location: a5, map: r3, options: { signal: e9 }, spatialReference: s10, view: l7 });
      s2(e9);
      const c7 = p9;
      if (!c7 || "esri.arcade.Dictionary" !== c7.declaredClass) return null;
      const m6 = await c7.castAsJsonAsync(e9);
      s2(e9);
      const h6 = m6 == null ? void 0 : m6.type, v5 = "media" === h6 ? I2.fromJSON(m6) : "text" === h6 ? i6.fromJSON(m6) : "fields" === h6 ? l4.fromJSON(m6) : null;
      return "media" === v5.type && !v5.mediaInfos || "fields" === v5.type && !v5.fieldInfos || "text" === v5.type && !v5.text ? null : v5;
    });
  }
};
__decorate([m()], k3.prototype, "_compileTask", void 0), __decorate([m()], k3.prototype, "_evaluateTask", void 0), __decorate([m({ type: i5 })], k3.prototype, "expressionInfo", void 0), __decorate([m({ type: _2 })], k3.prototype, "graphic", void 0), __decorate([m({ readOnly: true })], k3.prototype, "contentElement", null), __decorate([m({ readOnly: true })], k3.prototype, "contentElementViewModel", void 0), __decorate([m()], k3.prototype, "interceptor", void 0), __decorate([m({ type: _ })], k3.prototype, "location", void 0), __decorate([m()], k3.prototype, "spatialReference", null), __decorate([m({ readOnly: true })], k3.prototype, "state", null), __decorate([m()], k3.prototype, "map", null), __decorate([m()], k3.prototype, "view", void 0), k3 = __decorate([a2("esri.widgets.Feature.FeatureExpression.FeatureExpressionViewModel")], k3);

// node_modules/@arcgis/core/widgets/FeatureForm/featureFormUtils.js
var R4 = (e9) => {
  var _a2;
  const t = [];
  if (e9.formTemplate) {
    const { description: r3, title: n8 } = e9.formTemplate;
    (_a2 = e9.fields) == null ? void 0 : _a2.forEach((e10) => {
      const i8 = n8 && i(n8, e10.name), l7 = r3 && i(r3, e10.name);
      (i8 || l7) && t.push(e10.name);
    });
  }
  return t;
};

// node_modules/@arcgis/core/widgets/Feature/FeatureRelationship/FeatureRelationshipViewModel.js
var F5 = 100;
var _3 = class extends l2(s4(b)) {
  constructor(e9) {
    super(e9), this._loaded = false, this._queryAbortController = null, this._queryPageAbortController = null, this._queryFeatureCountAbortController = null, this.featuresPerPage = 10, this.activeCategory = null, this.allCategories = null, this.description = null, this.graphic = null, this.layer = null, this.map = null, this.orderByFields = null, this.featureCount = 0, this.relationshipId = null, this.showAllEnabled = false, this.title = null, this._cancelQuery = () => {
      const { _queryAbortController: e10 } = this;
      e10 && e10.abort(), this._queryAbortController = null;
    }, this._cancelQueryFeatureCount = () => {
      const { _queryFeatureCountAbortController: e10 } = this;
      e10 && e10.abort(), this._queryFeatureCountAbortController = null;
    }, this._cancelQueryPage = () => {
      const { _queryPageAbortController: e10 } = this;
      e10 && e10.abort(), this._queryPageAbortController = null;
    }, this._queryController = async () => {
      this._cancelQuery();
      const e10 = new AbortController();
      this._queryAbortController = e10, await y(this._query()), this._queryAbortController === e10 && (this._queryAbortController = null);
    }, this._queryFeatureCountController = async () => {
      this._loaded = false, this._cancelQueryFeatureCount();
      const e10 = new AbortController();
      this._queryFeatureCountAbortController = e10, await y(this._queryFeatureCount()), this._queryFeatureCountAbortController === e10 && (this._queryFeatureCountAbortController = null), this._loaded = true;
    }, this._queryPageController = async () => {
      const e10 = new AbortController();
      this._queryPageAbortController = e10, await y(this._queryPage()), this._queryPageAbortController === e10 && (this._queryPageAbortController = null);
    }, this._queryDebounced = L(this._queryController, F5), this._queryFeatureCountDebounced = L(this._queryFeatureCountController, F5), this._queryPageDebounced = L(this._queryPageController, F5), this._query = async () => {
      var _a2;
      const { _queryAbortController: e10, relatedFeatures: t } = this;
      this.featureCount && ("subtype-group" !== ((_a2 = this.relatedLayer) == null ? void 0 : _a2.type) || this.activeCategory) && (this._destroyRelatedFeatureViewModels(), this.featurePage = 1, t.destroyAll(), this.destroyed || t.addMany(this._sliceFeatures(await this._queryRelatedFeatures({ signal: e10 == null ? void 0 : e10.signal }))));
    }, this.addHandles([l(() => {
      var _a2;
      return [this.displayCount, this.graphic, this.layer, (_a2 = this.layer) == null ? void 0 : _a2.loaded, this.map, this.orderByFields, this.relationshipId, this.featuresPerPage, this.showAllEnabled, this.canQuery, this.featureCount, this.activeCategory];
    }, () => this._queryDebounced(), h), l(() => [this.featurePage, this.showAllEnabled], () => this._queryPageDebounced()), l(() => [this.layer, this.relationshipId, this.objectId, this.canQuery, this.activeCategory], () => this._queryFeatureCountDebounced())]);
  }
  destroy() {
    this._destroyRelatedFeatureViewModels(), this.relatedFeatures.destroyAll(), this._cancelQuery(), this._cancelQueryFeatureCount(), this._cancelQueryPage();
  }
  set featurePage(e9) {
    const { featuresPerPage: t, featureCount: r3 } = this, o = 1, l7 = Math.ceil(r3 / t) || 1;
    this._set("featurePage", Math.min(Math.max(e9, o), l7));
  }
  get featurePage() {
    return this._get("featurePage");
  }
  get orderByFieldsFixedCasing() {
    const { orderByFields: e9, relatedLayer: t } = this;
    return e9 && (t == null ? void 0 : t.loaded) ? e9.map((e10) => {
      const r3 = e10.clone();
      return r3.field = z(e10.field, t), r3;
    }) : e9 ?? [];
  }
  get supportsCacheHint() {
    var _a2, _b, _c;
    return !!((_c = (_b = (_a2 = this.layer) == null ? void 0 : _a2.capabilities) == null ? void 0 : _b.queryRelated) == null ? void 0 : _c.supportsCacheHint);
  }
  get canLoad() {
    return !!this.map && null != this.relationshipId && "number" == typeof this.objectId;
  }
  get canQuery() {
    var _a2, _b;
    const e9 = (_b = (_a2 = this.layer) == null ? void 0 : _a2.capabilities) == null ? void 0 : _b.queryRelated;
    return !!(this.relatedLayer && this.relationship && null != this.relationshipId && null != this.objectId && (e9 == null ? void 0 : e9.supportsCount) && (e9 == null ? void 0 : e9.supportsPagination));
  }
  get allCategoriesCount() {
    var _a2;
    return ((_a2 = this.allCategories) == null ? void 0 : _a2.length) ?? 0;
  }
  get categories() {
    const { allCategories: e9 } = this;
    return this.showAllEnabled ? e9 : (e9 == null ? void 0 : e9.slice(0, this.displayCount)) ?? null;
  }
  set displayCount(e9) {
    const t = 0, r3 = 10, o = 3;
    this._set("displayCount", Math.min(Math.max(e9 ?? o, t), r3));
  }
  get displayCount() {
    return this._get("displayCount");
  }
  get itemDescriptionFieldName() {
    var _a2;
    return ((_a2 = this.orderByFieldsFixedCasing[0]) == null ? void 0 : _a2.field) || null;
  }
  get objectId() {
    var _a2, _b;
    return (this.objectIdField && ((_b = (_a2 = this.graphic) == null ? void 0 : _a2.attributes) == null ? void 0 : _b[this.objectIdField])) ?? null;
  }
  get objectIdField() {
    var _a2;
    return ((_a2 = this.layer) == null ? void 0 : _a2.objectIdField) || null;
  }
  get relatedFeatures() {
    return this._get("relatedFeatures") || new O();
  }
  get relatedLayer() {
    const { layer: e9, map: t, relationship: r3 } = this;
    if (!(e9 == null ? void 0 : e9.loaded) || !t || !r3) return null;
    const o = "subtype-sublayer" === e9.type && e9.parent && Y(e9.parent) ? e9.parent : e9;
    return ve(t, o, r3) ?? null;
  }
  get relatedLayerKeyField() {
    var _a2, _b;
    const { relatedLayer: e9, relationshipId: t } = this;
    return (e9 == null ? void 0 : e9.loaded) && null != t ? (_b = (_a2 = e9.relationships) == null ? void 0 : _a2.find((e10) => e10.id === t)) == null ? void 0 : _b.keyField : null;
  }
  get relatedLayerKeyFields() {
    var _a2;
    const { relatedLayer: e9 } = this;
    return (e9 == null ? void 0 : e9.loaded) ? ((_a2 = e9.relationships) == null ? void 0 : _a2.map((e10) => e10.keyField).filter(N)) ?? [] : [];
  }
  get relationship() {
    var _a2;
    const { relationshipId: e9, layer: t } = this;
    return null != e9 && (t == null ? void 0 : t.loaded) ? ((_a2 = t.relationships) == null ? void 0 : _a2.find(({ id: t2 }) => t2 === e9)) ?? null : null;
  }
  get relationshipKey() {
    var _a2, _b;
    const { relationshipKeyField: e9 } = this;
    return (e9 && ((_b = (_a2 = this.graphic) == null ? void 0 : _a2.attributes) == null ? void 0 : _b[e9])) ?? null;
  }
  get relationshipKeyField() {
    var _a2;
    return ((_a2 = this.relationship) == null ? void 0 : _a2.keyField) || null;
  }
  get relatedFeatureViewModels() {
    return this._get("relatedFeatureViewModels") || new O();
  }
  get state() {
    const { _queryAbortController: e9, _queryFeatureCountAbortController: t, _queryPageAbortController: r3, canQuery: o, _loaded: l7, canLoad: a5 } = this;
    return t || a5 && !l7 ? "loading" : e9 || r3 ? "querying" : o ? "ready" : "disabled";
  }
  getRelatedFeatureByObjectId(e9) {
    return this.relatedFeatures.find((t) => t.getObjectId() === e9);
  }
  refresh() {
    this._queryFeatureCountDebounced();
  }
  _destroyRelatedFeatureViewModels() {
    var _a2;
    (_a2 = this.relatedFeatureViewModels) == null ? void 0 : _a2.destroyAll();
  }
  async _queryFeatureCount() {
    const { layer: e9, relatedLayer: t } = this;
    await (e9 == null ? void 0 : e9.load()), await (t == null ? void 0 : t.load());
    const { _queryFeatureCountAbortController: r3, activeCategory: l7, canQuery: a5, objectId: i8, relatedLayerKeyField: s10, relationshipId: n8, relationshipKey: u4, supportsCacheHint: d8 } = this;
    if (!a5 || !e9 || !t || null == i8) return this._set("featureCount", 0), void this._set("allCategories", null);
    if ("subtype-group" === (t == null ? void 0 : t.type) && !l7) {
      if (this._set("featureCount", 0), this._destroyRelatedFeatureViewModels(), this.featurePage = 1, this.relatedFeatures.destroyAll(), s10 && null != u4) {
        const { default: e10 } = await import("./uniqueValues-J6OLQLEU.js"), { uniqueValueInfos: l8 } = await e10({ layer: t, sqlWhere: `${s10} = '${u4}'`, field: t.subtypeField, signal: r3 == null ? void 0 : r3.signal }), a6 = l8.map(({ count: e11, value: r4 }) => {
          var _a2, _b;
          const o = (_b = (_a2 = t.subtypes) == null ? void 0 : _a2.find((e12) => e12.code === r4)) == null ? void 0 : _b.name;
          return null != r4 && o ? { count: e11, value: r4, name: o } : void 0;
        }).filter(N);
        this._set("allCategories", a6);
      }
      return;
    }
    const { historicMoment: y6, gdbVersion: h6 } = e9, c7 = new u({ cacheHint: d8, gdbVersion: h6, historicMoment: y6, relationshipId: n8, returnGeometry: false, objectIds: [i8], where: this._getRelationshipWhereClause(t) }), g3 = await e9.queryRelatedFeaturesCount(c7, { signal: r3 == null ? void 0 : r3.signal });
    this._set("allCategories", null), this._set("featureCount", g3[i8] || 0);
  }
  _getRelationshipWhereClause(e9) {
    const { activeCategory: t } = this, r3 = e9.createQuery(), o = "subtypeField" in e9 ? e9.subtypeField : void 0, l7 = t && o ? `${o} = ${t.value}` : void 0, a5 = r3.where;
    return a5 && l7 ? `(${a5}) AND (${l7})` : a5 ?? l7;
  }
  _sliceFeatures(e9) {
    const { showAllEnabled: t, displayCount: r3 } = this;
    return t ? e9 : r3 ? e9.slice(0, r3) : [];
  }
  async _queryPage() {
    var _a2;
    const { relatedFeatures: e9, featurePage: t, showAllEnabled: r3, _queryPageAbortController: o, featureCount: l7 } = this;
    !r3 || t < 2 || !l7 || "subtype-group" === ((_a2 = this.relatedLayer) == null ? void 0 : _a2.type) && !this.activeCategory || e9.addMany(await this._queryRelatedFeatures({ signal: o == null ? void 0 : o.signal }));
  }
  async _queryRelatedFeatures(e9) {
    var _a2;
    const { displayCount: t, featureCount: r3, featurePage: o, featuresPerPage: l7, layer: a5, orderByFieldsFixedCasing: i8, relatedLayer: s10, relatedLayerKeyFields: n8, relationshipId: u4, showAllEnabled: d8, supportsCacheHint: y6 } = this, { canQuery: h6, objectId: c7 } = this;
    if (!h6 || !a5 || !s10 || null == c7) return [];
    const g3 = d8 ? ((o - 1) * l7 + r3) % r3 : 0, C = d8 ? l7 : t, F7 = s10.objectIdField, _4 = "subtypeField" in s10 ? s10.subtypeField : void 0, m6 = [...i8.map((e10) => e10.field), ...R4(s10), ...n8, F7, _4].filter(f7), q3 = i8.map((e10) => `${e10.field} ${e10.order}`), { historicMoment: A3, gdbVersion: w4 } = a5, P3 = new u({ orderByFields: q3, start: g3, num: C, outFields: m6, cacheHint: y6, historicMoment: A3, gdbVersion: w4, relationshipId: u4, returnGeometry: false, objectIds: [c7], where: this._getRelationshipWhereClause(s10) }), v5 = await a5.queryRelatedFeatures(P3, { signal: e9 == null ? void 0 : e9.signal }), j5 = ((_a2 = v5[c7]) == null ? void 0 : _a2.features) || [];
    return "subtype-group" === s10.type && _4 ? j5.forEach((e10) => {
      var _a3;
      const t2 = e10.attributes[_4], r4 = (_a3 = s10.findSublayerForSubtypeCode) == null ? void 0 : _a3.call(s10, t2);
      e10.sourceLayer = r4, e10.layer = r4;
    }) : j5.forEach((e10) => {
      e10.sourceLayer = s10, e10.layer = s10;
    }), j5;
  }
};
function f7(e9) {
  return null != e9 && "" !== e9;
}
__decorate([m()], _3.prototype, "_loaded", void 0), __decorate([m()], _3.prototype, "_queryAbortController", void 0), __decorate([m()], _3.prototype, "_queryPageAbortController", void 0), __decorate([m()], _3.prototype, "_queryFeatureCountAbortController", void 0), __decorate([m({ value: 1 })], _3.prototype, "featurePage", null), __decorate([m()], _3.prototype, "featuresPerPage", void 0), __decorate([m({ readOnly: true })], _3.prototype, "orderByFieldsFixedCasing", null), __decorate([m({ readOnly: true })], _3.prototype, "supportsCacheHint", null), __decorate([m({ readOnly: true })], _3.prototype, "canLoad", null), __decorate([m({ readOnly: true })], _3.prototype, "canQuery", null), __decorate([m()], _3.prototype, "activeCategory", void 0), __decorate([m({ readOnly: true })], _3.prototype, "allCategories", void 0), __decorate([m({ readOnly: true })], _3.prototype, "allCategoriesCount", null), __decorate([m({ readOnly: true })], _3.prototype, "categories", null), __decorate([m()], _3.prototype, "description", void 0), __decorate([m({ value: 3 })], _3.prototype, "displayCount", null), __decorate([m({ type: _2 })], _3.prototype, "graphic", void 0), __decorate([m({ readOnly: true })], _3.prototype, "itemDescriptionFieldName", null), __decorate([m()], _3.prototype, "layer", void 0), __decorate([m()], _3.prototype, "map", void 0), __decorate([m({ readOnly: true })], _3.prototype, "objectId", null), __decorate([m({ readOnly: true })], _3.prototype, "objectIdField", null), __decorate([m()], _3.prototype, "orderByFields", void 0), __decorate([m({ readOnly: true })], _3.prototype, "relatedFeatures", null), __decorate([m({ readOnly: true })], _3.prototype, "relatedLayer", null), __decorate([m({ readOnly: true })], _3.prototype, "relatedLayerKeyField", null), __decorate([m({ readOnly: true })], _3.prototype, "relatedLayerKeyFields", null), __decorate([m({ readOnly: true })], _3.prototype, "relationship", null), __decorate([m({ readOnly: true })], _3.prototype, "relationshipKey", null), __decorate([m({ readOnly: true })], _3.prototype, "relationshipKeyField", null), __decorate([m({ readOnly: true })], _3.prototype, "featureCount", void 0), __decorate([m({ readOnly: true })], _3.prototype, "relatedFeatureViewModels", null), __decorate([m()], _3.prototype, "relationshipId", void 0), __decorate([m()], _3.prototype, "showAllEnabled", void 0), __decorate([m()], _3.prototype, "state", null), __decorate([m()], _3.prototype, "title", void 0), _3 = __decorate([a2("esri.widgets.Feature.FeatureRelationship.FeatureRelationshipViewModel")], _3);

// node_modules/@arcgis/core/widgets/Feature/FeatureViewModel.js
var te;
var ie = 1;
var se2 = "content-view-models";
var oe2 = "relationship-view-models";
var re = "association-view-models";
var ae = { attachmentsContent: true, chartAnimation: true, customContent: true, expressionContent: true, fieldsContent: true, mediaContent: true, textContent: true, relationshipContent: true, utilityNetworkAssociationsContent: true };
var _a;
var ne = (_a = class extends s4(b) {
  constructor(e9) {
    super(e9), this._error = null, this._graphicChangedTask = null, this._evaluateExpressionAttributesTask = null, this._associationVMAbortController = null, this._expressionAttributes = null, this._graphicExpressionAttributes = null, this.abilities = { ...ae }, this.content = null, this.contentViewModels = [], this.description = null, this.defaultPopupTemplateEnabled = false, this.formattedAttributes = null, this.graphic = null, this.lastEditInfo = null, this.location = null, this.relatedInfos = /* @__PURE__ */ new Map(), this.title = "", this.view = null, this._graphicChangedThrottled = l5(this._graphicChanged, () => this.notifyChange("waitingForContent"), ie, this), this._isAllowedContentType = (e10) => {
      const { abilities: t } = this;
      return "attachments" === e10.type && !!t.attachmentsContent || "custom" === e10.type && !!t.customContent || "fields" === e10.type && !!t.fieldsContent || "media" === e10.type && !!t.mediaContent || "text" === e10.type && !!t.textContent || "expression" === e10.type && !!t.expressionContent || "relationship" === e10.type && !!t.relationshipContent || "utility-network-associations" === e10.type && !!t.utilityNetworkAssociationsContent;
    }, this._evaluateExpressionAttributesThrottled = l5(this._evaluateExpressionAttributes, () => this.notifyChange("waitingForContent"), ie, this), this.addHandles([l(() => [this.graphic, this._effectivePopupTemplate, this.abilities, this.timeZone], () => this._graphicChangedThrottled(), h), f(() => {
      var _a2, _b, _c, _d, _e, _f, _g;
      if (!((_a2 = this._graphicChangedTask) == null ? void 0 : _a2.finished) || null == this._graphicChangedTask.value) return null;
      const e10 = this._graphicChangedTask.value, t = (_b = e10 == null ? void 0 : e10.expressionInfos) == null ? void 0 : _b.dependencies;
      return [e10, (t == null ? void 0 : t.has("view-scale")) ? (_c = this.view) == null ? void 0 : _c.scale : null, (t == null ? void 0 : t.has("view-time-extent")) ? (_e = (_d = this.view) == null ? void 0 : _d.timeExtent) == null ? void 0 : _e.start : null, (t == null ? void 0 : t.has("view-time-extent")) ? (_g = (_f = this.view) == null ? void 0 : _f.timeExtent) == null ? void 0 : _g.end : null];
    }, ([e10]) => this._evaluateExpressionAttributesThrottled(e10))]);
  }
  initialize() {
    this.addHandles([this._graphicChangedThrottled, this._evaluateExpressionAttributesThrottled]);
  }
  destroy() {
    this._clear(), this._graphicChangedTask = e(this._graphicChangedTask), this._evaluateExpressionAttributesTask = e(this._evaluateExpressionAttributesTask), this._error = null, this.graphic = null, this._destroyContentViewModels(), this.relatedInfos.clear();
  }
  get _effectivePopupTemplate() {
    return null != this.graphic ? this.graphic.getEffectivePopupTemplate(this.defaultPopupTemplateEnabled) : null;
  }
  get _fieldInfoMap() {
    return se(fe(this._effectivePopupTemplate), this._sourceLayer);
  }
  get _sourceLayer() {
    return x(this.graphic);
  }
  castAbilities(e9) {
    return { ...ae, ...e9 };
  }
  get isFeatureFromTable() {
    var _a2;
    return ((_a2 = this._sourceLayer) == null ? void 0 : _a2.isTable) || false;
  }
  get state() {
    return this.graphic ? this._error ? "error" : this.waitingForContent ? "loading" : "ready" : "disabled";
  }
  get spatialReference() {
    var _a2;
    return ((_a2 = this.view) == null ? void 0 : _a2.spatialReference) ?? null;
  }
  set spatialReference(e9) {
    this._override("spatialReference", e9);
  }
  get timeZone() {
    var _a2;
    return ((_a2 = this.view) == null ? void 0 : _a2.timeZone) ?? e2;
  }
  set timeZone(e9) {
    this._overrideIfSome("timeZone", e9);
  }
  get map() {
    var _a2;
    return ((_a2 = this.view) == null ? void 0 : _a2.map) || null;
  }
  set map(e9) {
    this._override("map", e9);
  }
  get waitingForContent() {
    const { _graphicChangedThrottled: e9, _evaluateExpressionAttributesThrottled: t, _graphicChangedTask: i8, _evaluateExpressionAttributesTask: s10, _associationVMAbortController: o } = this;
    return e9.hasPendingUpdates() || t.hasPendingUpdates() || null != i8 && !i8.finished || null != s10 && !s10.finished || !!o;
  }
  setActiveMedia(e9, t) {
    const i8 = this.contentViewModels[e9];
    i8 instanceof v3 && i8.setActiveMedia(t);
  }
  nextMedia(e9) {
    const t = this.contentViewModels[e9];
    t instanceof v3 && t.next();
  }
  previousMedia(e9) {
    const t = this.contentViewModels[e9];
    t instanceof v3 && t.previous();
  }
  async updateGeometry() {
    var _a2;
    const { graphic: e9, spatialReference: t, _sourceLayer: i8 } = this;
    await (i8 == null ? void 0 : i8.load());
    const s10 = i8 == null ? void 0 : i8.objectIdField;
    if (!s10 || !e9 || !i8) return;
    const o = (_a2 = e9 == null ? void 0 : e9.attributes) == null ? void 0 : _a2[s10];
    if (null == o) return;
    const r3 = [o];
    if (!e9.geometry) {
      const s11 = await me({ layer: i8, graphic: e9, outFields: [], objectIds: r3, returnGeometry: true, spatialReference: t }), o2 = s11 == null ? void 0 : s11.geometry;
      o2 && (e9.geometry = o2);
    }
  }
  _clear() {
    this._set("title", ""), this._set("content", null), this._set("formattedAttributes", null);
  }
  _graphicChanged() {
    this._evaluateExpressionAttributesTask = e(this._evaluateExpressionAttributesTask), this._graphicChangedTask = e(this._graphicChangedTask), this._graphicChangedTask = d2(async (e9) => {
      this._error = null, this._clear();
      const { graphic: t } = this;
      try {
        if (!t) return null;
        const { _sourceLayer: i8, _effectivePopupTemplate: s10 } = this, o = this.spatialReference;
        await be({ graphic: t, popupTemplate: s10, layer: i8, spatialReference: o }, { signal: e9 });
        const [{ value: r3 }, { value: a5 }] = await j([this._getContent(), this._getTitle()]), [, { value: n8 }] = await j([this._checkForRelatedFeatures({ signal: e9 }), L4(s10 == null ? void 0 : s10.expressionInfos, t)]);
        return { expressionInfos: n8, content: r3, title: a5 };
      } catch (i8) {
        throw d(i8) || (this._error = i8, i2.getLogger(this).error("error", "The popupTemplate could not be displayed for this feature.", { error: i8, graphic: t, popupTemplate: this._effectivePopupTemplate })), i8;
      }
    });
  }
  _compileContentElement(e9, t) {
    return "attachments" === e9.type ? this._compileAttachments(e9, t) : "custom" === e9.type ? this._compileCustom(e9, t) : "fields" === e9.type ? this._compileFields(e9, t) : "media" === e9.type ? this._compileMedia(e9, t) : "text" === e9.type ? this._compileText(e9, t) : "expression" === e9.type ? this._compileExpression(e9, t) : "relationship" === e9.type ? this._compileRelationship(e9, t) : "utility-network-associations" === e9.type ? this._compileUtilityNetworkAssociation(e9, t) : void 0;
  }
  _compileContent(e9) {
    if (this._destroyContentViewModels(), this.graphic) return Array.isArray(e9) ? e9.filter(this._isAllowedContentType).map((e10, t) => this._compileContentElement(e10, t)).filter(N) : "string" == typeof e9 ? this._compileText(new i6({ text: e9 }), 0).text : e9;
  }
  _destroyContentViewModels() {
    this.removeHandles(oe2), this.removeHandles(se2), this.contentViewModels.forEach((e9) => e9 && !e9.destroyed && e9.destroy()), this._set("contentViewModels", []);
  }
  _matchesFeature(e9, t) {
    var _a2;
    const i8 = (_a2 = e9 == null ? void 0 : e9.graphic) == null ? void 0 : _a2.getObjectId(), s10 = t == null ? void 0 : t.getObjectId();
    return null != i8 && null != s10 && i8 === s10;
  }
  _setRelatedFeaturesViewModels({ relatedFeatureViewModels: e9, relatedFeatures: t, map: i8 }) {
    const { view: s10, spatialReference: o, timeZone: r3 } = this;
    t == null ? void 0 : t.filter(Boolean).forEach((t2) => {
      e9.some((e10) => this._matchesFeature(e10, t2)) || e9.add(new te({ abilities: { relationshipContent: false }, map: i8, view: s10, spatialReference: o, timeZone: r3, graphic: t2 }));
    }), e9.forEach((i9) => {
      const s11 = t == null ? void 0 : t.find((e10) => this._matchesFeature(i9, e10));
      s11 || e9.remove(i9);
    });
  }
  _setExpressionContentVM(e9, t) {
    const i8 = this.formattedAttributes, { contentElement: s10, contentElementViewModel: o } = e9, r3 = s10 == null ? void 0 : s10.type;
    o && r3 && ("fields" === r3 && (this._createFieldsFormattedAttributes({ contentElement: s10, contentElementIndex: t, formattedAttributes: i8 }), o.set(this._createFieldsVMParams(s10, t))), "media" === r3 && (this._createMediaFormattedAttributes({ contentElement: s10, contentElementIndex: t, formattedAttributes: i8 }), o.set(this._createMediaVMParams(s10, t))), "text" === r3 && o.set(this._createTextVMParams(s10)));
  }
  _compileRelationship(e9, t) {
    const { displayCount: i8, orderByFields: s10, relationshipId: o, title: r3, description: a5 } = e9, { _sourceLayer: n8, graphic: l7, map: p9 } = this;
    if (!Y(n8)) return;
    const c7 = new _3({ displayCount: i8, graphic: l7, orderByFields: s10, relationshipId: o, layer: n8, map: p9, ...this._compileTitleAndDesc({ title: r3, description: a5 }) });
    return this.contentViewModels[t] = c7, this.addHandles(a(() => c7.relatedFeatures, "change", () => this._setRelatedFeaturesViewModels(c7)), oe2), e9;
  }
  _matchesGlobalFeature(e9, t) {
    return e9.association.equals(t.association);
  }
  _setUpUtilityNetworkAssociationsViewModels(e9, t, i8) {
    const { view: s10, spatialReference: o, timeZone: r3 } = this;
    e9.forEach((i9, s11) => {
      const o2 = t.get(s11);
      o2 ? i9.forEach((t2) => {
        o2.find((e10) => this._matchesGlobalFeature(t2, e10)) || (i9.remove(t2), 0 === i9.length && e9.delete(s11));
      }) : (i9.removeAll(), e9.delete(s11));
    }), t.forEach((t2, n8) => {
      const l7 = e9.get(n8) || new O();
      t2 == null ? void 0 : t2.filter(Boolean).forEach((e10, t3) => {
        if (!l7.some((t4) => this._matchesGlobalFeature(t4, e10))) {
          const { association: a5, feature: n9, terminalName: p9, title: c7 } = e10;
          l7.add({ title: c7, association: a5, featureViewModel: new te({ abilities: { utilityNetworkAssociationsContent: false }, map: i8, view: s10, spatialReference: o, timeZone: r3, graphic: n9 }), terminalName: p9 }, t3);
        }
      }), e9.set(n8, l7);
    });
  }
  _compileUtilityNetworkAssociation(e9, t) {
    const { displayCount: i8, title: s10, description: o, associationTypes: r3 } = e9, { _sourceLayer: a5, graphic: n8, map: l7 } = this;
    if (!ee(a5)) return;
    const p9 = new v({ graphic: n8, displayCount: i8, associationTypes: r3, layer: a5, map: l7, ...this._compileTitleAndDesc({ title: s10, description: o }) });
    return this.contentViewModels[t] = p9, this.addHandles([l(() => p9.associationFeatures.values(), () => this._setUpUtilityNetworkAssociationsViewModels(p9.associationViewModels, p9.associationFeatures, p9.map))], re), e9;
  }
  _compileExpression(e9, t) {
    const { expressionInfo: i8 } = e9, { graphic: s10, map: o, spatialReference: r3, view: a5, location: n8 } = this, l7 = new k3({ expressionInfo: i8, graphic: s10, interceptor: te.interceptor, map: o, spatialReference: r3, view: a5, location: n8 });
    return this.contentViewModels[t] = l7, this.addHandles(l(() => l7.contentElementViewModel, () => this._setExpressionContentVM(l7, t), h), se2), e9;
  }
  _compileAttachments(e9, t) {
    const { graphic: i8 } = this, { description: s10, title: o, orderByFields: r3, attachmentKeywords: a5, attachmentTypes: n8 } = e9;
    return this.contentViewModels[t] = new s6({ attachmentKeywords: a5, attachmentTypes: n8, graphic: i8, orderByFields: r3, ...this._compileTitleAndDesc({ title: o, description: s10 }) }), e9;
  }
  _compileCustom(e9, t) {
    const { graphic: i8 } = this, { creator: s10, destroyer: o } = e9;
    return this.contentViewModels[t] = new c4({ graphic: i8, creator: s10, destroyer: o }), e9;
  }
  _compileTitleAndDesc({ title: e9, description: t }) {
    const { _fieldInfoMap: i8, _sourceLayer: s10, graphic: o, formattedAttributes: r3 } = this, a5 = o == null ? void 0 : o.attributes, n8 = this._expressionAttributes, l7 = r3.global;
    return { title: Q({ attributes: a5, fieldInfoMap: i8, globalAttributes: l7, expressionAttributes: n8, layer: s10, text: e9 }), description: Q({ attributes: a5, fieldInfoMap: i8, globalAttributes: l7, expressionAttributes: n8, layer: s10, text: t }) };
  }
  _createFieldsVMParams(e9, t) {
    const i8 = this._effectivePopupTemplate, s10 = this.formattedAttributes, o = { ...s10 == null ? void 0 : s10.global, ...s10 == null ? void 0 : s10.content[t] }, r3 = !!(e9 == null ? void 0 : e9.fieldInfos), a5 = (e9 == null ? void 0 : e9.fieldInfos) || (i8 == null ? void 0 : i8.fieldInfos), n8 = a5 == null ? void 0 : a5.filter(({ fieldName: e10 }) => !!e10 && (U(e10) || he(e10) || o.hasOwnProperty(e10))), l7 = i8 == null ? void 0 : i8.expressionInfos, { description: p9, title: c7 } = e9;
    return { attributes: o, expressionInfos: l7, fieldInfos: n8, isContentFieldInfos: r3, graphic: this.graphic, layer: this._sourceLayer, ...this._compileTitleAndDesc({ title: c7, description: p9 }) };
  }
  _compileFields(e9, t) {
    const i8 = e9.clone(), s10 = new d4(this._createFieldsVMParams(e9, t));
    return this.contentViewModels[t] = s10, i8.fieldInfos = s10.formattedFieldInfos.slice(), i8;
  }
  _createMediaVMParams(e9, t) {
    const { abilities: i8, graphic: s10, _fieldInfoMap: o, _effectivePopupTemplate: r3, relatedInfos: a5, _sourceLayer: n8, _expressionAttributes: l7 } = this, p9 = this.formattedAttributes, c7 = (s10 == null ? void 0 : s10.attributes) ?? {}, { description: d8, mediaInfos: h6, title: u4 } = e9;
    return { abilities: { chartAnimation: i8.chartAnimation }, activeMediaInfoIndex: e9.activeMediaInfoIndex || 0, attributes: c7, graphic: s10, layer: n8, fieldInfoMap: o, formattedAttributes: { ...p9 == null ? void 0 : p9.global, ...p9 == null ? void 0 : p9.content[t] }, expressionAttributes: l7, mediaInfos: h6, popupTemplate: r3, relatedInfos: a5, ...this._compileTitleAndDesc({ title: u4, description: d8 }) };
  }
  _compileMedia(e9, t) {
    const i8 = e9.clone(), s10 = new v3(this._createMediaVMParams(e9, t));
    return i8.mediaInfos = s10.formattedMediaInfos.slice(), this.contentViewModels[t] = s10, i8;
  }
  _createTextVMParams(e9) {
    var _a2;
    const { graphic: t, _fieldInfoMap: i8, _sourceLayer: s10, _expressionAttributes: o } = this;
    if (e9 && e9.text) {
      const r3 = (t == null ? void 0 : t.attributes) ?? {}, a5 = ((_a2 = this.formattedAttributes) == null ? void 0 : _a2.global) ?? {};
      e9.text = Q({ attributes: r3, fieldInfoMap: i8, globalAttributes: a5, expressionAttributes: o, layer: s10, text: e9.text });
    }
    return { graphic: t, creator: e9.text };
  }
  _compileText(e9, t) {
    const i8 = e9.clone();
    return this.contentViewModels[t] = new c4(this._createTextVMParams(i8)), i8;
  }
  _compileLastEditInfo() {
    const { _effectivePopupTemplate: e9, _sourceLayer: t, graphic: i8, timeZone: s10 } = this;
    if (!e9) return;
    const { lastEditInfoEnabled: o } = e9, r3 = t == null ? void 0 : t.editFieldsInfo;
    return o && r3 ? ue(r3, i8 == null ? void 0 : i8.attributes, s10, t) : void 0;
  }
  _compileTitle(e9) {
    var _a2;
    const { _fieldInfoMap: t, _sourceLayer: i8, graphic: s10, _expressionAttributes: o } = this, r3 = (s10 == null ? void 0 : s10.attributes) ?? {}, a5 = ((_a2 = this.formattedAttributes) == null ? void 0 : _a2.global) ?? {};
    return Q({ attributes: r3, fieldInfoMap: t, globalAttributes: a5, expressionAttributes: o, layer: i8, text: e9 });
  }
  async _getTitle() {
    const { _effectivePopupTemplate: e9, graphic: t } = this;
    return t ? q({ type: "title", value: e9 == null ? void 0 : e9.title, event: { graphic: t } }) : null;
  }
  async _getContent() {
    const { _effectivePopupTemplate: e9, graphic: t } = this;
    return t ? q({ type: "content", value: e9 == null ? void 0 : e9.content, event: { graphic: t } }) : null;
  }
  _evaluateExpressionAttributes({ title: e9, content: t, expressionInfos: i8 }) {
    this._evaluateExpressionAttributesTask = e(this._evaluateExpressionAttributesTask), this._evaluateExpressionAttributesTask = d2(async (s10) => {
      const { graphic: o, map: r3, view: a5, spatialReference: n8, location: p9 } = this;
      try {
        if (!o) return;
        let l7;
        if (null != i8) {
          const e10 = [];
          for (const [t2, l8] of i8.expressions.entries()) null != l8 ? e10.push(l8.evaluate({ graphic: o, interceptor: te.interceptor, location: p9, map: r3, options: { signal: s10 }, spatialReference: n8, view: a5 }).then((e11) => [t2, "string" == typeof e11 ? y5(e11) : e11]).catch(() => [t2, void 0])) : e10.push(Promise.resolve([t2, void 0]));
          l7 = Object.fromEntries(await Promise.all(e10)), s2(s10);
        }
        this._expressionAttributes = l7, this._graphicExpressionAttributes = { ...o.attributes, ...l7 }, this._set("formattedAttributes", this._createFormattedAttributes(t)), this._set("title", this._compileTitle(e9)), this._set("lastEditInfo", this._compileLastEditInfo() || null), this._set("content", this._compileContent(t) || null);
      } catch (c7) {
        d(c7) || (this._error = c7, i2.getLogger(this).error("error", "The popupTemplate could not be displayed for this feature.", { error: c7, graphic: o, popupTemplate: this._effectivePopupTemplate }));
      }
    });
  }
  _createMediaFormattedAttributes({ contentElement: e9, contentElementIndex: t, formattedAttributes: i8 }) {
    const { _effectivePopupTemplate: s10, graphic: o, relatedInfos: r3, _sourceLayer: a5, _fieldInfoMap: n8, _graphicExpressionAttributes: l7, timeZone: p9 } = this;
    i8.content[t] = ye({ attributes: { ...l7, ...e9.attributes }, fieldInfoMap: n8, fieldInfos: s10 == null ? void 0 : s10.fieldInfos, graphic: o, layer: a5, relatedInfos: r3, timeZone: p9 });
  }
  _createFieldsFormattedAttributes({ contentElement: e9, contentElementIndex: t, formattedAttributes: i8 }) {
    if (e9.fieldInfos) {
      const { graphic: s10, relatedInfos: o, _sourceLayer: r3, _fieldInfoMap: a5, _graphicExpressionAttributes: n8, timeZone: l7 } = this;
      i8.content[t] = ye({ attributes: { ...n8, ...e9.attributes }, fieldInfoMap: a5, fieldInfos: e9.fieldInfos, graphic: s10, isContentFieldInfos: true, layer: r3, relatedInfos: o, timeZone: l7 });
    }
  }
  _createFormattedAttributes(e9) {
    const { _effectivePopupTemplate: t, graphic: i8, relatedInfos: s10, _sourceLayer: o, _fieldInfoMap: r3, _graphicExpressionAttributes: a5, timeZone: n8 } = this, l7 = t == null ? void 0 : t.fieldInfos, p9 = { global: ye({ attributes: a5, fieldInfoMap: r3, fieldInfos: l7, graphic: i8, layer: o, relatedInfos: s10, timeZone: n8 }), content: [] };
    return Array.isArray(e9) && e9.forEach((e10, t2) => {
      "fields" === e10.type && this._createFieldsFormattedAttributes({ contentElement: e10, contentElementIndex: t2, formattedAttributes: p9 }), "media" === e10.type && this._createMediaFormattedAttributes({ contentElement: e10, contentElementIndex: t2, formattedAttributes: p9 });
    }), p9;
  }
  _checkForRelatedFeatures(e9) {
    const { graphic: t, _effectivePopupTemplate: i8 } = this;
    return this._queryRelatedInfos(t, fe(i8), e9);
  }
  async _queryRelatedInfos(e9, t, i8) {
    const { relatedInfos: s10, _sourceLayer: o } = this;
    s10.clear();
    const r3 = null != (o == null ? void 0 : o.associatedLayer) ? await (o == null ? void 0 : o.associatedLayer.load(i8)) : o;
    if (!r3 || !e9) return;
    const a5 = t.filter((e10) => !!e10.fieldName && he(e10.fieldName));
    if (!(a5 == null ? void 0 : a5.length)) return;
    t.forEach((e10) => this._configureRelatedInfo(e10, r3));
    const n8 = await v2({ relatedInfos: s10, layer: r3 }, i8);
    Object.keys(n8).forEach((e10) => {
      var _a2;
      const t2 = s10.get(e10.toString()), i9 = (_a2 = n8[e10]) == null ? void 0 : _a2.value;
      t2 && i9 && (t2.layerInfo = i9.data);
    });
    const l7 = await T({ graphic: e9, relatedInfos: s10, layer: r3 }, i8);
    Object.keys(l7).forEach((e10) => {
      var _a2;
      g((_a2 = l7[e10]) == null ? void 0 : _a2.value, s10.get(e10.toString()));
    });
  }
  _configureRelatedInfo(e9, t) {
    const { relatedInfos: i8 } = this, s10 = h3(e9.fieldName || "");
    if (!s10) return;
    const { layerId: o, fieldName: r3 } = s10;
    if (!o) return;
    const a5 = i8.get(o.toString()) || b3(o, t);
    a5 && (q2({ relatedInfo: a5, fieldName: r3, fieldInfo: e9 }), this.relatedInfos.set(o, a5));
  }
}, te = _a, _a.interceptor = new e5(Ce, Ze), _a);
__decorate([m()], ne.prototype, "_error", void 0), __decorate([m()], ne.prototype, "_graphicChangedTask", void 0), __decorate([m()], ne.prototype, "_evaluateExpressionAttributesTask", void 0), __decorate([m()], ne.prototype, "_associationVMAbortController", void 0), __decorate([m({ readOnly: true })], ne.prototype, "_effectivePopupTemplate", null), __decorate([m({ readOnly: true })], ne.prototype, "_fieldInfoMap", null), __decorate([m({ readOnly: true })], ne.prototype, "_sourceLayer", null), __decorate([m()], ne.prototype, "abilities", void 0), __decorate([s3("abilities")], ne.prototype, "castAbilities", null), __decorate([m({ readOnly: true })], ne.prototype, "content", void 0), __decorate([m({ readOnly: true })], ne.prototype, "contentViewModels", void 0), __decorate([m()], ne.prototype, "description", void 0), __decorate([m({ type: Boolean })], ne.prototype, "defaultPopupTemplateEnabled", void 0), __decorate([m({ readOnly: true })], ne.prototype, "isFeatureFromTable", null), __decorate([m({ readOnly: true })], ne.prototype, "state", null), __decorate([m({ readOnly: true })], ne.prototype, "formattedAttributes", void 0), __decorate([m({ type: _2 })], ne.prototype, "graphic", void 0), __decorate([m({ readOnly: true })], ne.prototype, "lastEditInfo", void 0), __decorate([m({ type: _ })], ne.prototype, "location", void 0), __decorate([m({ readOnly: true })], ne.prototype, "relatedInfos", void 0), __decorate([m({ type: f2 })], ne.prototype, "spatialReference", null), __decorate([m()], ne.prototype, "timeZone", null), __decorate([m({ readOnly: true })], ne.prototype, "title", void 0), __decorate([m()], ne.prototype, "map", null), __decorate([m({ readOnly: true })], ne.prototype, "waitingForContent", null), __decorate([m()], ne.prototype, "view", void 0), ne = te = __decorate([a2("esri.widgets.Feature.FeatureViewModel")], ne);

// node_modules/@arcgis/core/widgets/Attachments/support/attachmentUtils.js
function e8(i8) {
  const e9 = i8.toLowerCase();
  return "image/bmp" === e9 || "image/emf" === e9 || "image/exif" === e9 || "image/gif" === e9 || "image/x-icon" === e9 || "image/jpeg" === e9 || "image/png" === e9 || "image/tiff" === e9 || "image/x-wmf" === e9;
}
function p8(e9) {
  const p9 = n2("esri/themes/base/images/files/");
  return e9 ? "text/plain" === e9 ? `${p9}text-32.svg` : "application/pdf" === e9 ? `${p9}pdf-32.svg` : "text/csv" === e9 ? `${p9}csv-32.svg` : "application/gpx+xml" === e9 ? `${p9}gpx-32.svg` : "application/x-dwf" === e9 ? `${p9}cad-32.svg` : "application/postscript" === e9 || "application/json" === e9 || "text/xml" === e9 || "model/vrml" === e9 ? `${p9}code-32.svg` : "application/x-zip-compressed" === e9 || "application/x-7z-compressed" === e9 || "application/x-gzip" === e9 || "application/x-tar" === e9 || "application/x-gtar" === e9 || "application/x-bzip2" === e9 || "application/gzip" === e9 || "application/x-compress" === e9 || "application/x-apple-diskimage" === e9 || "application/x-rar-compressed" === e9 || "application/zip" === e9 ? `${p9}zip-32.svg` : e9.includes("image/") ? `${p9}image-32.svg` : e9.includes("audio/") ? `${p9}sound-32.svg` : e9.includes("video/") ? `${p9}video-32.svg` : e9.includes("msexcel") || e9.includes("ms-excel") || e9.includes("spreadsheetml") ? `${p9}excel-32.svg` : e9.includes("msword") || e9.includes("ms-word") || e9.includes("wordprocessingml") ? `${p9}word-32.svg` : e9.includes("powerpoint") || e9.includes("presentationml") ? `${p9}report-32.svg` : `${p9}generic-32.svg` : `${p9}generic-32.svg`;
}

// node_modules/@arcgis/core/widgets/support/legacyIcon.js
var i7 = { close: "esri-icon-close", collapse: "esri-icon-collapse", down: "esri-icon-down", downArrow: "esri-icon-down-arrow", dragHorizontal: "esri-icon-drag-horizontal", dragVertical: "esri-icon-drag-vertical", duplicate: "esri-icon-duplicate", expand: "esri-icon-expand", fontFallbackText: "esri-icon-font-fallback-text", forward: "esri-icon-forward", handleVertical: "esri-icon-handle-vertical", icon: "esri-icon", left: "esri-icon-left", locateCircled: "esri-icon-locate-circled", noticeTriangle: "esri-icon-notice-triangle", pause: "esri-icon-pause", play: "esri-icon-play", plus: "esri-icon-plus", radioChecked: "esri-icon-radio-checked", radioUnchecked: "esri-icon-radio-unchecked", refresh: "esri-icon-refresh", reverse: "esri-icon-reverse", right: "esri-icon-right", search: "esri-icon-search", swap: "esri-icon-swap", table: "esri-icon-table", trash: "esri-icon-trash", up: "esri-icon-up", upArrow: "esri-icon-up-arrow", upDownArrows: "esri-icon-up-down-arrows", urbanModel: "esri-icon-urban-model", zoomInMagnifyingGlass: "esri-icon-zoom-in-magnifying-glass", zoomToObject: "esri-icon-zoom-to-object" };

// node_modules/@arcgis/core/widgets/Attachments.js
var w3 = { addButton: true, addSubmitButton: true, cancelAddButton: true, cancelUpdateButton: true, deleteButton: true, errorMessage: true, progressBar: true, updateButton: true };
var A2 = "esri-attachments";
var M3 = { base: A2, loaderContainer: `${A2}__loader-container`, loader: `${A2}__loader`, container: `${A2}__container`, containerList: `${A2}__container--list`, containerPreview: `${A2}__container--preview`, actions: `${A2}__actions`, deleteButton: `${A2}__delete-button`, addAttachmentButton: `${A2}__add-attachment-button`, errorMessage: `${A2}__error-message`, items: `${A2}__items`, item: `${A2}__item`, itemButton: `${A2}__item-button`, itemMask: `${A2}__item-mask`, itemMaskIcon: `${A2}__item-mask--icon`, itemImage: `${A2}__image`, itemImageResizable: `${A2}__image--resizable`, itemLabel: `${A2}__label`, itemFilename: `${A2}__filename`, itemChevronIcon: `${A2}__item-chevron-icon`, itemLink: `${A2}__item-link`, itemLinkOverlay: `${A2}__item-link-overlay`, itemLinkOverlayIcon: `${A2}__item-link-overlay-icon`, itemAddIcon: `${A2}__item-add-icon`, formNode: `${A2}__form-node`, fileFieldset: `${A2}__file-fieldset`, fileLabel: `${A2}__file-label`, fileName: `${A2}__file-name`, fileInput: `${A2}__file-input`, metadata: `${A2}__metadata`, metadataFieldset: `${A2}__metadata-fieldset`, progressBar: `${A2}__progress-bar` };
var F6 = window.CSS;
var k4 = class extends B {
  constructor(e9, t) {
    super(e9, t), this.displayType = "auto", this.messages = null, this.messagesUnits = null, this.selectedFile = null, this.submitting = false, this.viewModel = null, this.visibleElements = { ...w3 }, this._supportsImageOrientation = F6 && F6.supports && F6.supports("image-orientation", "from-image"), this._addAttachmentForm = null, this._updateAttachmentForm = null;
  }
  normalizeCtorArgs(e9) {
    return (e9 == null ? void 0 : e9.viewModel) || (e9 = { viewModel: new y3(), ...e9 }), e9;
  }
  initialize() {
    this.addHandles([a(() => {
      var _a2;
      return (_a2 = this.viewModel) == null ? void 0 : _a2.attachmentInfos;
    }, "change", () => this.scheduleRender()), a(() => {
      var _a2;
      return (_a2 = this.viewModel) == null ? void 0 : _a2.fileInfos;
    }, "change", () => this.scheduleRender()), l(() => {
      var _a2;
      return (_a2 = this.viewModel) == null ? void 0 : _a2.mode;
    }, () => this._modeChanged(), h)]);
  }
  loadDependencies() {
    return c2({ icon: () => import("./calcite-icon-ARXM3BZL.js") });
  }
  get capabilities() {
    return this.viewModel.capabilities;
  }
  set capabilities(e9) {
    this.viewModel.capabilities = e9;
  }
  get effectiveDisplayType() {
    const { displayType: e9 } = this;
    return e9 && "auto" !== e9 ? e9 : this.viewModel.supportsResizeAttachments ? "preview" : "list";
  }
  get attachmentKeywords() {
    return this.viewModel.attachmentKeywords;
  }
  set attachmentKeywords(e9) {
    this.viewModel.attachmentKeywords = e9;
  }
  get attachmentTypes() {
    return this.viewModel.attachmentTypes;
  }
  set attachmentTypes(e9) {
    this.viewModel.attachmentTypes = e9;
  }
  get graphic() {
    return this.viewModel.graphic;
  }
  set graphic(e9) {
    this.viewModel.graphic = e9;
  }
  get icon() {
    return "attachment";
  }
  set icon(e9) {
    this._overrideIfSome("icon", e9);
  }
  get label() {
    var _a2;
    return ((_a2 = this.messages) == null ? void 0 : _a2.widgetLabel) ?? "";
  }
  set label(e9) {
    this._overrideIfSome("label", e9);
  }
  castVisibleElements(e9) {
    return { ...w3, ...e9 };
  }
  addAttachment() {
    const { _addAttachmentForm: e9, viewModel: s10 } = this;
    return this._set("submitting", true), this._set("error", null), s10.addAttachment(e9).then((e10) => (this._set("submitting", false), this._set("error", null), s10.mode = "view", e10)).catch((e10) => {
      throw this._set("submitting", false), this._set("error", new s("attachments:add-attachment", this.messages.addErrorMessage, e10)), e10;
    });
  }
  deleteAttachment(e9) {
    const { viewModel: s10 } = this;
    return this._set("submitting", true), this._set("error", null), s10.deleteAttachment(e9).then((e10) => (this._set("submitting", false), this._set("error", null), s10.mode = "view", e10)).catch((e10) => {
      throw this._set("submitting", false), this._set("error", new s("attachments:delete-attachment", this.messages.deleteErrorMessage, e10)), e10;
    });
  }
  updateAttachment() {
    const { viewModel: e9 } = this, { _updateAttachmentForm: s10 } = this;
    return this._set("submitting", true), this._set("error", null), e9.updateAttachment(s10).then((t) => (this._set("submitting", false), this._set("error", null), e9.mode = "view", t)).catch((e10) => {
      throw this._set("submitting", false), this._set("error", new s("attachments:update-attachment", this.messages.updateErrorMessage, e10)), e10;
    });
  }
  addFile() {
    const e9 = this.viewModel.addFile(this.selectedFile, this._addAttachmentForm);
    return this.viewModel.mode = "view", e9;
  }
  updateFile() {
    const { viewModel: e9 } = this, t = e9.updateFile(this.selectedFile, this._updateAttachmentForm, e9.activeFileInfo);
    return e9.mode = "view", t;
  }
  deleteFile(e9) {
    var _a2;
    const t = this.viewModel.deleteFile(e9 || ((_a2 = this.viewModel.activeFileInfo) == null ? void 0 : _a2.file));
    return this.viewModel.mode = "view", t;
  }
  render() {
    const { submitting: e9, viewModel: t } = this, { state: s10 } = t;
    return n("div", { class: this.classes(M3.base, e4.widget) }, e9 ? this._renderProgressBar() : null, "loading" === s10 ? this._renderLoading() : this._renderAttachments(), this._renderErrorMessage());
  }
  _renderErrorMessage() {
    const { error: e9, visibleElements: t } = this;
    return e9 && t.errorMessage ? n("div", { class: M3.errorMessage, key: "error-message" }, e9.message) : null;
  }
  _renderAttachments() {
    const { activeFileInfo: e9, mode: t, activeAttachmentInfo: s10 } = this.viewModel;
    return "add" === t ? this._renderAddForm() : "edit" === t ? this._renderDetailsForm(s10 || e9) : this._renderAttachmentContainer();
  }
  _renderLoading() {
    return n("div", { class: M3.loaderContainer, key: "loader" }, n("div", { class: M3.loader }));
  }
  _renderProgressBar() {
    return this.visibleElements.progressBar ? n("div", { class: M3.progressBar, key: "progress-bar" }) : null;
  }
  _renderAddForm() {
    const { submitting: e9, selectedFile: t } = this, s10 = e9 || !t, i8 = this.visibleElements.cancelAddButton ? n("button", { bind: this, class: this.classes(e4.button, e4.buttonTertiary, e4.buttonSmall, e4.buttonHalf, e9 && e4.buttonDisabled), disabled: e9, onclick: this._cancelForm, type: "button" }, this.messages.cancel) : null, a5 = this.visibleElements.addSubmitButton ? n("button", { class: this.classes(e4.button, e4.buttonSecondary, e4.buttonSmall, e4.buttonHalf, { [e4.buttonDisabled]: s10 }), disabled: s10, type: "submit" }, this.messages.add) : null, n8 = t ? n("span", { class: M3.fileName, key: "file-name" }, t.name) : null, r3 = n("form", { afterCreate: y2, afterRemoved: h2, bind: this, "data-node-ref": "_addAttachmentForm", onsubmit: this._submitAddAttachment }, n("fieldset", { class: M3.fileFieldset }, n8, n("label", { class: this.classes(M3.fileLabel, e4.button, e4.buttonSecondary) }, t ? this.messages.changeFile : this.messages.selectFile, n("input", { bind: this, class: M3.fileInput, name: "attachment", onchange: this._handleFileInputChange, type: "file" }))), a5, i8);
    return n("div", { class: M3.formNode, key: "add-form-container" }, r3);
  }
  _renderDetailsForm(e9) {
    var _a2, _b, _c;
    const { visibleElements: t, viewModel: s10, selectedFile: i8, submitting: a5 } = this, { capabilities: r3 } = s10, l7 = a5 || !i8;
    let o, d8, c7, m6;
    i8 ? (o = i8.type, d8 = i8.name, c7 = i8.size) : e9 && "file" in e9 ? (o = e9.file.type, d8 = e9.file.name, c7 = e9.file.size) : e9 && "contentType" in e9 && (o = e9.contentType, d8 = e9.name, c7 = e9.size, m6 = e9.url);
    const h6 = r3.editing && ((_a2 = r3.operations) == null ? void 0 : _a2.delete) && t.deleteButton ? n("button", { bind: this, class: this.classes(e4.button, e4.buttonSmall, e4.buttonTertiary, M3.deleteButton, { [e4.buttonDisabled]: a5 }), disabled: a5, key: "delete-button", onclick: (t2) => this._submitDeleteAttachment(t2, e9), type: "button" }, this.messages.delete) : void 0, u4 = r3.editing && ((_b = r3.operations) == null ? void 0 : _b.update) && t.updateButton ? n("button", { class: this.classes(e4.button, e4.buttonSmall, e4.buttonThird, { [e4.buttonDisabled]: l7 }), disabled: l7, key: "update-button", type: "submit" }, this.messages.update) : void 0, b6 = this.visibleElements.cancelUpdateButton ? n("button", { bind: this, class: this.classes(e4.button, e4.buttonSmall, e4.buttonTertiary, e4.buttonThird, { [e4.buttonDisabled]: a5 }), disabled: a5, key: "cancel-button", onclick: this._cancelForm, type: "button" }, this.messages.cancel) : void 0, v5 = r3.editing && ((_c = r3.operations) == null ? void 0 : _c.update) ? n("fieldset", { class: M3.fileFieldset, key: "file" }, n("span", { class: M3.fileName, key: "file-name" }, d8), n("label", { class: this.classes(M3.fileLabel, e4.button, e4.buttonSecondary) }, this.messages.changeFile, n("input", { bind: this, class: M3.fileInput, name: "attachment", onchange: this._handleFileInputChange, type: "file" }))) : void 0, f8 = n("fieldset", { class: M3.metadataFieldset, key: "size" }, n("label", null, G(this.messagesUnits, c7 ?? 0))), w4 = n("fieldset", { class: M3.metadataFieldset, key: "content-type" }, n("label", null, o)), A3 = null != m6 ? n("a", { class: M3.itemLink, href: m6, rel: "noreferrer", target: "_blank" }, this._renderImageMask(e9, 400), n("div", { class: M3.itemLinkOverlay }, n("span", { class: M3.itemLinkOverlayIcon }, n("calcite-icon", { icon: "launch" })))) : this._renderImageMask(e9, 400), F7 = n("form", { afterCreate: y2, afterRemoved: h2, bind: this, "data-node-ref": "_updateAttachmentForm", onsubmit: (t2) => this._submitUpdateAttachment(t2, e9) }, n("div", { class: M3.metadata }, f8, w4), v5, n("div", { class: M3.actions }, h6, b6, u4));
    return n("div", { class: M3.formNode, key: "edit-form-container" }, A3, F7);
  }
  _renderImageMask(e9, t) {
    return e9 ? "file" in e9 ? this._renderGenericImageMask(e9.file.name, e9.file.type) : this._renderImageMaskForAttachment(e9, t) : null;
  }
  _renderGenericImageMask(e9, t) {
    const { supportsResizeAttachments: s10 } = this.viewModel, i8 = p8(t), a5 = { [M3.itemImageResizable]: s10 };
    return n("div", { class: this.classes(M3.itemMaskIcon, M3.itemMask), key: i8 }, n("img", { alt: e9, class: this.classes(a5, M3.itemImage), src: i8, title: e9 }));
  }
  _renderImageMaskForAttachment(e9, t) {
    const { supportsResizeAttachments: s10 } = this.viewModel;
    if (!e9) return null;
    const { contentType: i8, name: a5, size: n8, url: r3 } = e9;
    if (!s10 || !e8(i8)) return this._renderGenericImageMask(a5, i8);
    const l7 = this._getCSSTransform(e9), o = l7 ? { transform: l7, "image-orientation": "none" } : {}, d8 = `${r3}${(r3 == null ? void 0 : r3.includes("?")) ? "&" : "?"}w=${t}&s=${n8}`, c7 = { [M3.itemImageResizable]: s10 };
    return n("div", { class: this.classes(M3.itemMask), key: d8 }, n("img", { alt: a5, class: this.classes(c7, M3.itemImage), src: d8, styles: o, title: a5 }));
  }
  _renderFile(e9) {
    const { file: t } = e9;
    return n("li", { class: M3.item, key: t }, n("button", { "aria-label": this.messages.attachmentDetails, bind: this, class: M3.itemButton, key: "details-button", onclick: () => this._startEditFile(e9), title: this.messages.attachmentDetails, type: "button" }, this._renderImageMask(e9), n("label", { class: M3.itemLabel }, n("span", { class: M3.itemFilename }, t.name || this.messages.noTitle), n("span", { "aria-hidden": "true", class: this.classes(M3.itemChevronIcon, L2(this.container) ? i7.left : i7.right) }))));
  }
  _renderAttachmentInfo({ attachmentInfo: e9, displayType: t }) {
    const { viewModel: s10, effectiveDisplayType: i8 } = this, { capabilities: a5, supportsResizeAttachments: n8 } = s10, { contentType: r3, name: l7, url: o } = e9, d8 = this._renderImageMask(e9, "list" === t ? 48 : 400), c7 = a5.editing ? n("span", { "aria-hidden": "true", class: this.classes(M3.itemChevronIcon, L2(this.container) ? i7.left : i7.right) }) : null, m6 = [d8, "preview" === i8 && n8 && e8(r3) ? null : n("label", { class: M3.itemLabel }, n("span", { class: M3.itemFilename }, l7 || this.messages.noTitle), c7)], u4 = a5.editing ? n("button", { "aria-label": this.messages.attachmentDetails, bind: this, class: M3.itemButton, "data-attachment-info-id": e9.id, key: "details-button", onclick: () => this._startEditAttachment(e9), title: this.messages.attachmentDetails, type: "button" }, m6) : n("a", { class: M3.itemButton, href: o ?? void 0, key: "details-link", rel: "noreferrer", target: "_blank" }, m6);
    return n("li", { class: M3.item, key: e9 }, u4);
  }
  _renderAttachmentContainer() {
    var _a2;
    const { effectiveDisplayType: e9, viewModel: t, visibleElements: s10 } = this, { attachmentInfos: i8, capabilities: a5, fileInfos: n8 } = t, r3 = !!(i8 == null ? void 0 : i8.length), l7 = !!(n8 == null ? void 0 : n8.length), o = { [M3.containerList]: "preview" !== e9, [M3.containerPreview]: "preview" === e9 }, d8 = a5.editing && ((_a2 = a5.operations) == null ? void 0 : _a2.add) && s10.addButton ? n("button", { bind: this, class: this.classes(e4.button, e4.buttonTertiary, M3.addAttachmentButton), onclick: () => this._startAddAttachment(), type: "button" }, n("span", { "aria-hidden": "true", class: this.classes(M3.itemAddIcon, i7.plus) }), this.messages.add) : void 0, c7 = r3 ? n("ul", { class: M3.items, key: "attachments-list" }, i8.toArray().map((t2) => this._renderAttachmentInfo({ attachmentInfo: t2, displayType: e9 }))) : void 0, m6 = l7 ? n("ul", { class: M3.items, key: "file-list" }, n8.toArray().map((e10) => this._renderFile(e10))) : void 0, h6 = l7 || r3 ? void 0 : n("div", { class: e4.empty }, this.messages.noAttachments);
    return n("div", { class: this.classes(M3.container, o), key: "attachments-container" }, c7, m6, h6, d8);
  }
  _modeChanged() {
    this._set("error", null), this._set("selectedFile", null);
  }
  _handleFileInputChange(e9) {
    var _a2;
    const t = e9.target, s10 = (_a2 = t.files) == null ? void 0 : _a2.item(0);
    this._set("selectedFile", s10);
  }
  _submitDeleteAttachment(e9, t) {
    e9.preventDefault(), t && ("file" in t ? this.deleteFile(t.file) : t && this.deleteAttachment(t));
  }
  _submitAddAttachment(e9) {
    e9.preventDefault(), this.viewModel.filesEnabled ? this.addFile() : this.addAttachment();
  }
  _submitUpdateAttachment(e9, t) {
    e9.preventDefault(), t && "file" in t ? this.updateFile() : this.updateAttachment();
  }
  _startEditAttachment(e9) {
    const { viewModel: t } = this;
    t.activeFileInfo = null, t.activeAttachmentInfo = e9, t.mode = "edit";
  }
  _startEditFile(e9) {
    const { viewModel: t } = this;
    t.activeAttachmentInfo = null, t.activeFileInfo = e9, t.mode = "edit";
  }
  _startAddAttachment() {
    this.viewModel.mode = "add";
  }
  _cancelForm(e9) {
    e9.preventDefault(), this.viewModel.mode = "view";
  }
  _getCSSTransform(e9) {
    const { orientationInfo: t } = e9;
    return !this._supportsImageOrientation && t ? [t.rotation ? `rotate(${t.rotation}deg)` : "", t.mirrored ? "scaleX(-1)" : ""].join(" ") : "";
  }
};
__decorate([m()], k4.prototype, "capabilities", null), __decorate([m()], k4.prototype, "displayType", void 0), __decorate([m({ readOnly: true })], k4.prototype, "effectiveDisplayType", null), __decorate([m()], k4.prototype, "attachmentKeywords", null), __decorate([m()], k4.prototype, "attachmentTypes", null), __decorate([m()], k4.prototype, "graphic", null), __decorate([m()], k4.prototype, "icon", null), __decorate([m()], k4.prototype, "label", null), __decorate([m(), e3("esri/widgets/Attachments/t9n/Attachments")], k4.prototype, "messages", void 0), __decorate([m(), e3("esri/core/t9n/Units")], k4.prototype, "messagesUnits", void 0), __decorate([m({ readOnly: true })], k4.prototype, "selectedFile", void 0), __decorate([m({ readOnly: true })], k4.prototype, "submitting", void 0), __decorate([m({ readOnly: true })], k4.prototype, "error", void 0), __decorate([m({ type: y3 })], k4.prototype, "viewModel", void 0), __decorate([m()], k4.prototype, "visibleElements", void 0), __decorate([s3("visibleElements")], k4.prototype, "castVisibleElements", null), k4 = __decorate([a2("esri.widgets.Attachments")], k4);

export {
  i7 as i,
  k4 as k,
  s6 as s,
  c4 as c,
  d4 as d,
  v3 as v,
  A,
  k3 as k2,
  _3 as _,
  ne
};
//# sourceMappingURL=chunk-365SWO2F.js.map
