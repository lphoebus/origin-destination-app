import {
  s as s4
} from "./chunk-EHDJE46D.js";
import {
  s as s5
} from "./chunk-DBFSMEOT.js";
import {
  e2 as e3,
  o
} from "./chunk-WSTAYIQ5.js";
import {
  o as o2
} from "./chunk-H3P5SR5M.js";
import {
  c as c4
} from "./chunk-DCREBZBV.js";
import {
  _ as _2,
  c as c5,
  d,
  k,
  k2,
  ne,
  s as s3,
  v
} from "./chunk-365SWO2F.js";
import {
  v as v2
} from "./chunk-5LS4RZOY.js";
import {
  A
} from "./chunk-TSCC7RAS.js";
import {
  x
} from "./chunk-CYADW44R.js";
import {
  e as e2
} from "./chunk-6B5YFT3O.js";
import {
  B,
  c as c3,
  e
} from "./chunk-KIJ7RXGK.js";
import {
  L,
  n2 as n
} from "./chunk-5U6XSC43.js";
import {
  t
} from "./chunk-GKBYUU3U.js";
import {
  s
} from "./chunk-QN24DCIC.js";
import {
  c as c2
} from "./chunk-TVEPRWYA.js";
import {
  s as s2
} from "./chunk-5YBW6KQ6.js";
import {
  a,
  h,
  l
} from "./chunk-DLX5DTNB.js";
import {
  m2 as m
} from "./chunk-TSVVEDRS.js";
import {
  a2
} from "./chunk-HPSHCA6S.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";
import {
  _
} from "./chunk-EO4UMOUD.js";
import {
  T,
  u2 as u
} from "./chunk-QRKINRAQ.js";
import {
  c,
  r
} from "./chunk-KUWSTWZR.js";

// node_modules/@arcgis/core/widgets/Feature/support/FeatureElementInfo.js
var p = "esri-feature-element-info";
var n2 = { base: p, title: `${p}__title`, description: `${p}__description` };
var l2 = class extends B {
  constructor(e5, t3) {
    super(e5, t3), this.description = null, this.headingLevel = 2, this.title = null;
  }
  render() {
    return n("div", { class: n2.base }, this._renderTitle(), this._renderDescription());
  }
  _renderTitle() {
    const { title: e5 } = this;
    return e5 ? n(s4, { class: n2.title, innerHTML: e5, level: this.headingLevel }) : null;
  }
  _renderDescription() {
    const { description: e5 } = this;
    return e5 ? n("div", { class: n2.description, innerHTML: e5, key: "description" }) : null;
  }
};
__decorate([m()], l2.prototype, "description", void 0), __decorate([m()], l2.prototype, "headingLevel", void 0), __decorate([m()], l2.prototype, "title", void 0), l2 = __decorate([a2("esri.widgets.Feature.support.FeatureElementInfo")], l2);

// node_modules/@arcgis/core/widgets/Feature/FeatureAttachments.js
var d2 = { base: "esri-feature-attachments" };
var h2 = class extends B {
  constructor(t3, e5) {
    super(t3, e5), this._featureElementInfo = null, this.attachmentsWidget = new k(), this.headingLevel = 2, this.viewModel = new s3();
  }
  initialize() {
    this._featureElementInfo = new l2(), this.addHandles([l(() => {
      var _a, _b;
      return [(_a = this.viewModel) == null ? void 0 : _a.description, (_b = this.viewModel) == null ? void 0 : _b.title, this.headingLevel];
    }, () => this._setupFeatureElementInfo(), h), l(() => this.viewModel, (t3) => this.attachmentsWidget.viewModel = t3, h)]);
  }
  destroy() {
    var _a;
    this.attachmentsWidget.viewModel = null, this.attachmentsWidget.destroy(), (_a = this._featureElementInfo) == null ? void 0 : _a.destroy();
  }
  get description() {
    return this.viewModel.description;
  }
  set description(t3) {
    this.viewModel.description = t3;
  }
  get displayType() {
    return this.attachmentsWidget.displayType;
  }
  set displayType(t3) {
    this.attachmentsWidget.displayType = t3;
  }
  get graphic() {
    return this.viewModel.graphic;
  }
  set graphic(t3) {
    this.viewModel.graphic = t3;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(t3) {
    this.viewModel.title = t3;
  }
  render() {
    var _a;
    const { attachmentsWidget: t3 } = this;
    return n("div", { class: d2.base }, (_a = this._featureElementInfo) == null ? void 0 : _a.render(), t3 == null ? void 0 : t3.render());
  }
  _setupFeatureElementInfo() {
    var _a;
    const { description: t3, title: e5, headingLevel: i } = this;
    (_a = this._featureElementInfo) == null ? void 0 : _a.set({ description: t3, title: e5, headingLevel: i });
  }
};
__decorate([m({ readOnly: true })], h2.prototype, "attachmentsWidget", void 0), __decorate([m()], h2.prototype, "description", null), __decorate([m()], h2.prototype, "displayType", null), __decorate([m()], h2.prototype, "graphic", null), __decorate([m()], h2.prototype, "headingLevel", void 0), __decorate([m()], h2.prototype, "title", null), __decorate([m({ type: s3 })], h2.prototype, "viewModel", void 0), h2 = __decorate([a2("esri.widgets.Feature.FeatureAttachments")], h2);

// node_modules/@arcgis/core/widgets/Feature/FeatureContent.js
var n3 = "esri-feature-content";
var c6 = { base: n3, loaderContainer: `${n3}__loader-container`, loader: `${n3}__loader` };
var l3 = class extends B {
  constructor(e5, r3) {
    super(e5, r3), this.viewModel = null, this._addTargetToAnchors = (e6) => {
      Array.from(e6.querySelectorAll("a")).forEach((e7) => {
        A(e7.href) && !e7.hasAttribute("target") && e7.setAttribute("target", "_blank");
      });
    };
  }
  get creator() {
    var _a;
    return (_a = this.viewModel) == null ? void 0 : _a.creator;
  }
  set creator(e5) {
    this.viewModel && (this.viewModel.creator = e5);
  }
  get graphic() {
    var _a;
    return (_a = this.viewModel) == null ? void 0 : _a.graphic;
  }
  set graphic(e5) {
    this.viewModel && (this.viewModel.graphic = e5);
  }
  render() {
    var _a;
    const e5 = (_a = this.viewModel) == null ? void 0 : _a.state;
    return n("div", { class: c6.base }, "loading" === e5 ? this._renderLoading() : this._renderCreated());
  }
  _renderLoading() {
    return n("div", { class: c6.loaderContainer, key: "loader" }, n("div", { class: c6.loader }));
  }
  _renderCreated() {
    var _a;
    const e5 = (_a = this.viewModel) == null ? void 0 : _a.created;
    return e5 ? e5 instanceof HTMLElement ? n("div", { afterCreate: this._attachToNode, bind: e5, key: e5 }) : e3(e5) ? n("div", { key: e5 }, !e5.destroyed && e5.render()) : n("div", { afterCreate: this._addTargetToAnchors, innerHTML: e5, key: e5 }) : null;
  }
  _attachToNode(e5) {
    const r3 = this;
    e5.appendChild(r3);
  }
};
__decorate([m()], l3.prototype, "creator", null), __decorate([m()], l3.prototype, "graphic", null), __decorate([m({ type: c5 })], l3.prototype, "viewModel", void 0), l3 = __decorate([a2("esri.widgets.Feature.FeatureContent")], l3);

// node_modules/@arcgis/core/widgets/support/uriUtils.js
var p2 = [{ pattern: /^\s*(https?:\/\/([^\s]+))\s*$/i, target: "_blank", label: "{messages.view}" }, { pattern: /^\s*(tel:([^\s]+))\s*$/i, label: "{hierPart}" }, { pattern: /^\s*(mailto:([^\s]+))\s*$/i, label: "{hierPart}" }, { pattern: /^\s*(arcgis-appstudio-player:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "App Studio Player" }, { pattern: /^\s*(arcgis-collector:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Collector" }, { pattern: /^\s*(arcgis-explorer:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Explorer" }, { pattern: /^\s*(arcgis-navigator:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Navigator" }, { pattern: /^\s*(arcgis-survey123:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Survey123" }, { pattern: /^\s*(arcgis-trek2there:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Trek2There" }, { pattern: /^\s*(arcgis-workforce:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Workforce" }, { pattern: /^\s*(iform:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "iForm" }, { pattern: /^\s*(flow:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "FlowFinity" }, { pattern: /^\s*(lfmobile:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Laserfische" }, { pattern: /^\s*(mspbi:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Microsoft Power Bi" }];
function r2(r3, t3) {
  if ("string" != typeof t3 || !t3) return t3;
  const n5 = p2.find((e5) => e5.pattern.test(t3));
  if (!n5) return t3;
  const i = t3.match(n5.pattern), l4 = i == null ? void 0 : i[2], o3 = r(r(n5.label, { messages: r3, hierPart: l4 }), { appName: n5.appName }), m4 = n5.target ? ` target="${n5.target}"` : "", g3 = "_blank" === n5.target ? ' rel="noreferrer"' : "";
  return t.sanitizeUrl(_(t3)).replace(n5.pattern, `<a${m4} href="$1"${g3}>${o3}</a>`);
}

// node_modules/@arcgis/core/widgets/Feature/FeatureFields.js
var u2 = "esri-feature-fields";
var m2 = { base: u2, fieldHeader: `${u2}__field-header`, fieldData: `${u2}__field-data`, fieldDataDate: `${u2}__field-data--date` };
var c7 = class extends B {
  constructor(e5, t3) {
    super(e5, t3), this._featureElementInfo = null, this.viewModel = new d(), this.messages = null, this.messagesURIUtils = null;
  }
  initialize() {
    this._featureElementInfo = new l2(), this.addHandles(l(() => {
      var _a, _b;
      return [(_a = this.viewModel) == null ? void 0 : _a.description, (_b = this.viewModel) == null ? void 0 : _b.title];
    }, () => this._setupFeatureElementInfo(), h));
  }
  destroy() {
    var _a;
    (_a = this._featureElementInfo) == null ? void 0 : _a.destroy();
  }
  get attributes() {
    return this.viewModel.attributes;
  }
  set attributes(e5) {
    this.viewModel.attributes = e5;
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e5) {
    this.viewModel.description = e5;
  }
  get expressionInfos() {
    return this.viewModel.expressionInfos;
  }
  set expressionInfos(e5) {
    this.viewModel.expressionInfos = e5;
  }
  get fieldInfos() {
    return this.viewModel.fieldInfos;
  }
  set fieldInfos(e5) {
    this.viewModel.fieldInfos = e5;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e5) {
    this.viewModel.title = e5;
  }
  render() {
    var _a;
    return n("div", { class: m2.base }, (_a = this._featureElementInfo) == null ? void 0 : _a.render(), this._renderFields());
  }
  _renderFieldInfo(e5, t3) {
    var _a;
    const { attributes: s6 } = this.viewModel, i = e5.fieldName || "", r3 = e5.label || i, o3 = s6 ? null == s6[i] ? "" : s6[i] : "", l4 = !("date-time" !== ((_a = e5 == null ? void 0 : e5.fieldFormat) == null ? void 0 : _a.type)), n5 = "number" == typeof o3 && !l4 ? this._forceLTR(o3) : r2(this.messagesURIUtils, o3), d3 = { [m2.fieldDataDate]: l4 };
    return n("tr", { key: `fields-element-info-row-${i}-${t3}` }, n("th", { class: m2.fieldHeader, innerHTML: r3, key: `fields-element-info-row-header-${i}-${t3}` }), n("td", { class: this.classes(m2.fieldData, d3), innerHTML: n5, key: `fields-element-info-row-data-${i}-${t3}` }));
  }
  _renderFields() {
    const { formattedFieldInfos: e5 } = this.viewModel;
    return (e5 == null ? void 0 : e5.length) ? n("table", { class: e2.table, summary: this.messages.fieldsSummary }, n("tbody", null, e5.map((e6, t3) => this._renderFieldInfo(e6, t3)))) : null;
  }
  _setupFeatureElementInfo() {
    var _a;
    const { description: e5, title: t3 } = this;
    (_a = this._featureElementInfo) == null ? void 0 : _a.set({ description: e5, title: t3 });
  }
  _forceLTR(e5) {
    return `&lrm;${e5}`;
  }
};
__decorate([m()], c7.prototype, "attributes", null), __decorate([m()], c7.prototype, "description", null), __decorate([m()], c7.prototype, "expressionInfos", null), __decorate([m()], c7.prototype, "fieldInfos", null), __decorate([m()], c7.prototype, "title", null), __decorate([m({ type: d, nonNullable: true })], c7.prototype, "viewModel", void 0), __decorate([m(), e("esri/widgets/Feature/t9n/Feature")], c7.prototype, "messages", void 0), __decorate([m(), e("esri/widgets/support/t9n/uriUtils")], c7.prototype, "messagesURIUtils", void 0), c7 = __decorate([a2("esri.widgets.Feature.FeatureFields")], c7);

// node_modules/@arcgis/core/widgets/Feature/FeatureMedia.js
var M = "esri-feature-media";
var _3 = { base: M, mediaContainer: `${M}__container`, mediaItemContainer: `${M}__item-container`, mediaItem: `${M}__item`, mediaItemText: `${M}__item-text`, mediaItemTitle: `${M}__item-title`, mediaItemCaption: `${M}__item-caption`, mediaNavigation: `${M}__item-navigation`, mediaPagination: `${M}__pagination`, mediaPaginationText: `${M}__pagination-text`, mediaChart: `${M}__chart`, mediaPaginationButton: `${M}__pagination-button`, mediaPaginationIcon: `${M}__pagination-icon`, mediaChartRendered: `${M}__chart--rendered` };
var v3 = 15;
var w = "category";
var A2 = "value";
var I = "rgba(50, 50, 50, 1)";
var C = 250;
var y = 500;
var x2 = 200;
var T2 = class extends B {
  constructor(e5, t3) {
    super(e5, t3), this._refreshTimer = null, this._refreshIntervalInfo = null, this._featureElementInfo = null, this._chartRootMap = /* @__PURE__ */ new WeakMap(), this.viewModel = new v(), this.messages = null, this._disposeChart = (e6) => {
      var _a;
      (_a = this._chartRootMap.get(e6)) == null ? void 0 : _a.dispose(), this._chartRootMap.delete(e6);
    }, this._createChart = async (e6) => {
      const { destroyed: t4, viewModel: i } = this;
      if (t4 || !i || !e6) return;
      const { createRoot: a3 } = await import("./chartUtilsAm5-KCJ73PFR.js"), r3 = await a3(e6);
      this._chartRootMap.set(e6, r3), await this._renderChart({ mediaInfo: i.activeMediaInfo, root: r3 });
    };
  }
  initialize() {
    this._featureElementInfo = new l2(), this.addHandles([l(() => {
      var _a, _b;
      return [(_a = this.viewModel) == null ? void 0 : _a.activeMediaInfo, (_b = this.viewModel) == null ? void 0 : _b.activeMediaInfoIndex];
    }, () => this._setupMediaRefreshTimer(), h), l(() => {
      var _a, _b;
      return [(_a = this.viewModel) == null ? void 0 : _a.description, (_b = this.viewModel) == null ? void 0 : _b.title];
    }, () => this._setupFeatureElementInfo(), h)]);
  }
  loadDependencies() {
    return c3({ icon: () => import("./calcite-icon-ARXM3BZL.js") });
  }
  destroy() {
    var _a;
    this._clearMediaRefreshTimer(), (_a = this._featureElementInfo) == null ? void 0 : _a.destroy();
  }
  get attributes() {
    return this.viewModel.attributes;
  }
  set attributes(e5) {
    this.viewModel.attributes = e5;
  }
  get activeMediaInfoIndex() {
    return this.viewModel.activeMediaInfoIndex;
  }
  set activeMediaInfoIndex(e5) {
    this.viewModel.activeMediaInfoIndex = e5;
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e5) {
    this.viewModel.description = e5;
  }
  get fieldInfoMap() {
    return this.viewModel.fieldInfoMap;
  }
  set fieldInfoMap(e5) {
    this.viewModel.fieldInfoMap = e5;
  }
  get layer() {
    return this.viewModel.layer;
  }
  set layer(e5) {
    this.viewModel.layer = e5;
  }
  get mediaInfos() {
    return this.viewModel.mediaInfos;
  }
  set mediaInfos(e5) {
    this.viewModel.mediaInfos = e5;
  }
  get popupTemplate() {
    return this.viewModel.popupTemplate;
  }
  set popupTemplate(e5) {
    this.viewModel.popupTemplate = e5;
  }
  get relatedInfos() {
    return this.viewModel.relatedInfos;
  }
  set relatedInfos(e5) {
    this.viewModel.relatedInfos = e5;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e5) {
    this.viewModel.title = e5;
  }
  render() {
    var _a;
    return n("div", { bind: this, class: _3.base, onkeyup: this._handleMediaKeyup }, (_a = this._featureElementInfo) == null ? void 0 : _a.render(), this._renderMedia());
  }
  _renderMedia() {
    const { formattedMediaInfoCount: e5, activeMediaInfoIndex: t3 } = this.viewModel, i = this._renderMediaText();
    return e5 ? n("div", { class: _3.mediaContainer, key: "media-element-container" }, this._renderMediaInfo(), n("div", { class: _3.mediaNavigation }, i, e5 > 1 ? n("div", { class: _3.mediaPagination }, this._renderMediaPageButton("previous"), n("span", { class: _3.mediaPaginationText }, s(this.messages.pageText, { index: t3 + 1, total: e5 })), this._renderMediaPageButton("next")) : null)) : null;
  }
  _renderMediaText() {
    const { activeMediaInfo: e5 } = this.viewModel;
    if (!e5) return null;
    const t3 = e5 && e5.title ? n("div", { class: _3.mediaItemTitle, innerHTML: e5.title, key: "media-title" }) : null, i = e5 && e5.caption ? n("div", { class: _3.mediaItemCaption, innerHTML: e5.caption, key: "media-caption" }) : null;
    return t3 || i ? n("div", { class: _3.mediaItemText, key: "media-text" }, t3, i) : null;
  }
  _renderImageMediaInfo(e5) {
    if (!e5.value) return null;
    const { _refreshIntervalInfo: t3 } = this, { activeMediaInfoIndex: i, formattedMediaInfoCount: a3 } = this.viewModel, { value: r3, refreshInterval: o3, altText: s6, title: n5, type: l4 } = e5, { sourceURL: d3, linkURL: c8 } = r3, h3 = A(c8 ?? void 0) ? "_blank" : "_self", p3 = "_blank" === h3 ? "noreferrer" : "", f2 = o3 ? t3 : null, g3 = f2 ? f2.timestamp : 0, M3 = f2 ? f2.sourceURL : d3, _4 = n("img", { alt: s6 || n5, key: `media-${l4}-${i}-${a3}-${g3}`, src: M3 ?? void 0 });
    return (c8 ? n("a", { href: c8, rel: p3, target: h3, title: n5 }, _4) : null) ?? _4;
  }
  _renderChartMediaInfo(e5) {
    const { activeMediaInfoIndex: t3, formattedMediaInfoCount: i } = this.viewModel;
    return n("div", { afterCreate: this._createChart, afterRemoved: this._disposeChart, bind: this, class: _3.mediaChart, key: `media-${e5.type}-${t3}-${i}` });
  }
  _renderMediaInfoType() {
    const { activeMediaInfo: e5 } = this.viewModel;
    return e5 ? "image" === e5.type ? this._renderImageMediaInfo(e5) : e5.type.includes("chart") ? this._renderChartMediaInfo(e5) : null : null;
  }
  _renderMediaInfo() {
    const { activeMediaInfo: e5 } = this.viewModel;
    return e5 ? n("div", { class: _3.mediaItemContainer, key: "media-container" }, n("div", { class: _3.mediaItem, key: "media-item-container" }, this._renderMediaInfoType())) : null;
  }
  _renderMediaPageButton(e5) {
    if (this.viewModel.formattedMediaInfoCount < 2) return null;
    const t3 = "previous" === e5, i = t3 ? this.messages.previous : this.messages.next, a3 = t3 ? "chevron-left" : "chevron-right", r3 = t3 ? "media-previous" : "media-next", o3 = t3 ? this._previous : this._next;
    return n("button", { "aria-label": i, bind: this, class: _3.mediaPaginationButton, key: r3, onclick: o3, tabIndex: 0, title: i, type: "button" }, n("calcite-icon", { class: _3.mediaPaginationIcon, icon: a3, scale: "s" }));
  }
  _setupFeatureElementInfo() {
    var _a;
    const { description: e5, title: t3 } = this;
    (_a = this._featureElementInfo) == null ? void 0 : _a.set({ description: e5, title: t3 });
  }
  _next() {
    this.viewModel.next();
  }
  _previous() {
    this.viewModel.previous();
  }
  _getRenderer() {
    if (!this.viewModel) return;
    const { graphic: e5, layer: t3 } = this.viewModel;
    return (e5 == null ? void 0 : e5.isAggregate) && (t3 == null ? void 0 : t3.featureReduction) && "renderer" in t3.featureReduction ? t3.featureReduction.renderer : t3 == null ? void 0 : t3.renderer;
  }
  async _getSeriesColors(e5) {
    const { colorAm5: t3 } = await import("./chartCommon-5SKCU5CJ.js"), i = /* @__PURE__ */ new Map();
    return e5.forEach((e6) => {
      e6.color && i.set(e6, t3(e6.color.toCss(true)));
    }), i;
  }
  async _getRendererColors() {
    const { colorAm5: e5 } = await import("./chartCommon-5SKCU5CJ.js"), t3 = /* @__PURE__ */ new Map(), i = this._getRenderer(), a3 = "default";
    if (!i) return t3;
    const r3 = await x(i);
    r3.delete(a3);
    return Array.from(r3.values()).every((e6) => 1 === (e6 == null ? void 0 : e6.length)) ? (Array.from(r3.keys()).forEach((i2) => {
      var _a, _b;
      const a4 = (_b = (_a = r3.get(i2)) == null ? void 0 : _a[0]) == null ? void 0 : _b.toCss(true);
      a4 && t3.set(i2, e5(a4));
    }), t3) : t3;
  }
  _handleMediaKeyup(e5) {
    const { key: t3 } = e5;
    "ArrowLeft" === t3 && (e5.stopPropagation(), this.viewModel.previous()), "ArrowRight" === t3 && (e5.stopPropagation(), this.viewModel.next());
  }
  _canAnimateChart() {
    return !!this.viewModel && (!!this.viewModel.abilities.chartAnimation && !o2());
  }
  _getChartAnimationMS() {
    return this._canAnimateChart() ? C : 0;
  }
  _getChartSeriesAnimationMS() {
    return this._canAnimateChart() ? y : 0;
  }
  async _renderChart(e5) {
    const { root: t3, mediaInfo: i } = e5, { value: a3, type: r3 } = i, { ResponsiveThemeAm5: o3, DarkThemeAm5: s6, AnimatedThemeAm5: n5, ColorSetAm5: l4, ThemeAm5: d3, esriChartColorSet: m4 } = await import("./chartCommon-5SKCU5CJ.js"), c8 = d3.new(t3);
    c8.rule("ColorSet").set("colors", m4), c8.rule("ColorSet").set("reuse", true);
    const h3 = [o3.new(t3), c8];
    c4(this.container) && h3.push(s6.new(t3)), this._canAnimateChart() && h3.push(n5.new(t3)), t3.setThemes(h3);
    const p3 = await this._getRendererColors(), u4 = await this._getSeriesColors(a3.series), g3 = l4.new(t3, {}), M3 = u4.get(a3.series[0]), _4 = M3 ? { lineSettings: { stroke: M3 } } : void 0, v5 = a3.series.map((e6, t4) => {
      const i2 = u4.get(e6) || p3.get(e6.fieldName) || g3.getIndex(t4);
      return { [w]: e6.tooltip, [A2]: e6.value, columnSettings: { fill: i2, stroke: i2 }, ..._4 };
    }).filter((e6) => "pie-chart" !== r3 || null != e6.value && e6.value > 0);
    await ("pie-chart" === r3 ? this._createPieChart(e5, v5) : this._createXYChart(e5, v5));
  }
  _getDirection() {
    return L(this.container) ? "rtl" : "ltr";
  }
  async _customizeChartTooltip(e5, t3 = "horizontal") {
    var _a;
    const { colorAm5: i } = await import("./chartCommon-5SKCU5CJ.js");
    e5.setAll({ pointerOrientation: t3 }), (_a = e5.get("background")) == null ? void 0 : _a.setAll({ stroke: i(I) }), e5.label.setAll({ direction: this._getDirection(), oversizedBehavior: "wrap", maxWidth: x2 });
  }
  async _createPieChart(e5, t3) {
    const { TooltipAm5: i } = await import("./chartCommon-5SKCU5CJ.js"), { PieChartAm5: a3, PieSeriesAm5: r3 } = await import("./pieChart-LRABF2UM.js"), { mediaInfo: o3, root: s6 } = e5, { title: n5 } = o3, l4 = 5, d3 = (o3 == null ? void 0 : o3.altText) || (o3 == null ? void 0 : o3.title) || "", m4 = s6.container.children.push(a3.new(s6, { ariaLabel: d3, focusable: true, paddingBottom: l4, paddingTop: l4, paddingLeft: l4, paddingRight: l4 })), c8 = "{category}: {valuePercentTotal.formatNumber('0.00')}%\n ({value})", h3 = i.new(s6, { labelText: c8 }), p3 = m4.series.push(r3.new(s6, { name: n5, valueField: A2, categoryField: w, tooltip: h3 }));
    p3.ticks.template.set("forceHidden", true), p3.labels.template.set("forceHidden", true), p3.slices.template.states.create("active", { shiftRadius: l4 }), await this._customizeChartTooltip(h3), p3.slices.template.setAll({ ariaLabel: c8, focusable: true, templateField: "columnSettings" }), p3.data.setAll(t3), await p3.appear(this._getChartSeriesAnimationMS()), await m4.appear(this._getChartAnimationMS()), m4.root.dom.classList.toggle(_3.mediaChartRendered, true);
  }
  _getMinSeriesValue(e5) {
    let t3 = 0;
    return e5.forEach((e6) => t3 = Math.min(e6.value, t3)), t3;
  }
  async _createColumnChart(e5, t3, i) {
    const { TooltipAm5: a3, ScrollbarAm5: r3 } = await import("./chartCommon-5SKCU5CJ.js"), { CategoryAxisAm5: o3, AxisRendererXAm5: s6, ValueAxisAm5: n5, AxisRendererYAm5: l4, ColumnSeriesAm5: d3 } = await import("./xyChart-HABNNZ67.js"), { mediaInfo: m4, root: c8 } = t3, { value: p3, title: u4 } = m4;
    e5.setAll({ wheelX: "panX", wheelY: "zoomX" });
    const f2 = e5.xAxes.push(o3.new(c8, { renderer: s6.new(c8, { inversed: L(this.container) }), categoryField: w }));
    f2.get("renderer").labels.template.setAll({ forceHidden: true });
    const g3 = e5.yAxes.push(n5.new(c8, { renderer: l4.new(c8, { inside: false }), min: this._getMinSeriesValue(p3.series) }));
    g3.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const M3 = "{categoryX}", _4 = a3.new(c8, { labelText: M3 }), I3 = e5.series.push(d3.new(c8, { name: u4, xAxis: f2, yAxis: g3, valueYField: A2, categoryXField: w, tooltip: _4 }));
    await this._customizeChartTooltip(_4), I3.columns.template.setAll({ ariaLabel: M3, focusable: true, templateField: "columnSettings" }), p3.series.length > v3 && e5.set("scrollbarX", r3.new(c8, { orientation: "horizontal" })), f2.data.setAll(i), I3.data.setAll(i), await I3.appear(this._getChartSeriesAnimationMS()), await e5.appear(this._getChartAnimationMS());
  }
  async _createBarChart(e5, t3, i) {
    const { TooltipAm5: a3, ScrollbarAm5: r3 } = await import("./chartCommon-5SKCU5CJ.js"), { CategoryAxisAm5: o3, AxisRendererXAm5: s6, ValueAxisAm5: n5, AxisRendererYAm5: l4, ColumnSeriesAm5: d3 } = await import("./xyChart-HABNNZ67.js"), { mediaInfo: m4, root: c8 } = t3, { value: p3, title: u4 } = m4;
    e5.setAll({ wheelX: "panY", wheelY: "zoomY" });
    const f2 = e5.yAxes.push(o3.new(c8, { renderer: l4.new(c8, { inversed: true }), categoryField: w }));
    f2.get("renderer").labels.template.setAll({ forceHidden: true });
    const g3 = e5.xAxes.push(n5.new(c8, { renderer: s6.new(c8, { inside: false, inversed: L(this.container) }), min: this._getMinSeriesValue(p3.series) }));
    g3.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const M3 = "{categoryY}", _4 = a3.new(c8, { labelText: M3 }), I3 = e5.series.push(d3.new(c8, { name: u4, xAxis: g3, yAxis: f2, valueXField: A2, categoryYField: w, tooltip: _4 }));
    await this._customizeChartTooltip(_4, "vertical"), I3.columns.template.setAll({ ariaLabel: M3, focusable: true, templateField: "columnSettings" }), p3.series.length > v3 && e5.set("scrollbarY", r3.new(c8, { orientation: "vertical" })), f2.data.setAll(i), I3.data.setAll(i), await I3.appear(this._getChartSeriesAnimationMS()), await e5.appear(this._getChartAnimationMS());
  }
  async _createLineChart(e5, t3, i) {
    var _a, _b, _c;
    const { TooltipAm5: a3, ScrollbarAm5: r3 } = await import("./chartCommon-5SKCU5CJ.js"), { CategoryAxisAm5: o3, AxisRendererXAm5: s6, ValueAxisAm5: n5, AxisRendererYAm5: l4, LineSeriesAm5: d3 } = await import("./xyChart-HABNNZ67.js"), { root: m4, mediaInfo: c8 } = t3, { value: p3, title: u4 } = c8;
    e5.setAll({ wheelX: "panX", wheelY: "zoomX" });
    const f2 = e5.xAxes.push(o3.new(m4, { renderer: s6.new(m4, { inversed: L(this.container) }), categoryField: w }));
    f2.get("renderer").labels.template.setAll({ forceHidden: true });
    const g3 = e5.yAxes.push(n5.new(m4, { renderer: l4.new(m4, { inside: false }), min: this._getMinSeriesValue(p3.series) }));
    g3.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const M3 = "{categoryX}", _4 = (_b = (_a = i[0]) == null ? void 0 : _a.lineSettings) == null ? void 0 : _b.stroke, I3 = a3.new(m4, { getFillFromSprite: !_4, labelText: M3 });
    _4 && ((_c = I3.get("background")) == null ? void 0 : _c.setAll({ fill: _4 }));
    const C3 = e5.series.push(d3.new(m4, { name: u4, xAxis: f2, yAxis: g3, valueYField: A2, categoryXField: w, tooltip: I3 }));
    C3.strokes.template.setAll({ templateField: "lineSettings" }), await this._customizeChartTooltip(I3, "vertical"), p3.series.length > v3 && e5.set("scrollbarX", r3.new(m4, { orientation: "horizontal" })), f2.data.setAll(i), C3.data.setAll(i), await C3.appear(this._getChartSeriesAnimationMS()), await e5.appear(this._getChartAnimationMS());
  }
  async _createXYChart(e5, t3) {
    const { XYChartAm5: i, XYCursorAm5: a3 } = await import("./xyChart-HABNNZ67.js"), { root: r3, mediaInfo: o3 } = e5, { type: s6 } = o3, n5 = (o3 == null ? void 0 : o3.altText) || (o3 == null ? void 0 : o3.title) || "", l4 = r3.container.children.push(i.new(r3, { ariaLabel: n5, focusable: true, panX: true, panY: true }));
    l4.set("cursor", a3.new(r3, {})), "column-chart" === s6 && await this._createColumnChart(l4, e5, t3), "bar-chart" === s6 && await this._createBarChart(l4, e5, t3), "line-chart" === s6 && await this._createLineChart(l4, e5, t3), l4.root.dom.classList.toggle(_3.mediaChartRendered, true);
  }
  _clearMediaRefreshTimer() {
    const { _refreshTimer: e5 } = this;
    e5 && (clearTimeout(e5), this._refreshTimer = null);
  }
  _updateMediaInfoTimestamp(e5) {
    const t3 = Date.now();
    this._refreshIntervalInfo = { timestamp: t3, sourceURL: e5 && this._getImageSource(e5, t3) };
  }
  _setupMediaRefreshTimer() {
    this._clearMediaRefreshTimer();
    const { activeMediaInfo: e5 } = this.viewModel;
    "image" === (e5 == null ? void 0 : e5.type) && (e5 == null ? void 0 : e5.refreshInterval) > 0 && this._setRefreshTimeout(e5);
  }
  _setRefreshTimeout(e5) {
    const { refreshInterval: t3, value: i } = e5, a3 = 6e4 * t3;
    this._updateMediaInfoTimestamp(i.sourceURL);
    const r3 = setInterval(() => {
      this._updateMediaInfoTimestamp(i.sourceURL);
    }, a3);
    this._refreshTimer = r3;
  }
  _getImageSource(e5, t3) {
    const i = e5.includes("?") ? "&" : "?", [a3, r3 = ""] = e5.split("#");
    return `${a3}${i}timestamp=${t3}${r3 ? "#" : ""}${r3}`;
  }
};
__decorate([m()], T2.prototype, "_refreshIntervalInfo", void 0), __decorate([m()], T2.prototype, "attributes", null), __decorate([m()], T2.prototype, "activeMediaInfoIndex", null), __decorate([m()], T2.prototype, "description", null), __decorate([m()], T2.prototype, "fieldInfoMap", null), __decorate([m()], T2.prototype, "layer", null), __decorate([m()], T2.prototype, "mediaInfos", null), __decorate([m()], T2.prototype, "popupTemplate", null), __decorate([m()], T2.prototype, "relatedInfos", null), __decorate([m()], T2.prototype, "title", null), __decorate([m({ type: v })], T2.prototype, "viewModel", void 0), __decorate([m(), e("esri/widgets/Feature/t9n/Feature")], T2.prototype, "messages", void 0), T2 = __decorate([a2("esri.widgets.Feature.FeatureMedia")], T2);

// node_modules/@arcgis/core/widgets/Feature/FeatureExpression.js
var m3 = "esri-feature";
var u3 = { base: `${m3}-expression`, loadingSpinnerContainer: `${m3}__loading-container` };
var g = class extends B {
  constructor(e5, t3) {
    super(e5, t3), this._contentWidget = null, this.viewModel = new k2();
  }
  initialize() {
    this.addHandles(l(() => {
      var _a;
      return (_a = this.viewModel) == null ? void 0 : _a.contentElementViewModel;
    }, () => this._setupExpressionWidget(), h));
  }
  loadDependencies() {
    return c3({ loader: () => import("./calcite-loader-OMJ254ZA.js") });
  }
  destroy() {
    this._destroyContentWidget();
  }
  render() {
    var _a;
    const { state: e5 } = this.viewModel;
    return n("div", { class: u3.base }, "loading" === e5 ? this._renderLoading() : "disabled" === e5 ? null : (_a = this._contentWidget) == null ? void 0 : _a.render());
  }
  _renderLoading() {
    return n("div", { class: u3.loadingSpinnerContainer, key: "loading-container" }, n("calcite-loader", { inline: true, label: "" }));
  }
  _destroyContentWidget() {
    const { _contentWidget: e5 } = this;
    e5 && (e5.viewModel = null, e5.destroy()), this._contentWidget = null;
  }
  _setupExpressionWidget() {
    const { contentElementViewModel: e5, contentElement: t3 } = this.viewModel, o3 = t3 == null ? void 0 : t3.type;
    this._destroyContentWidget();
    const i = e5 ? "fields" === o3 ? new c7({ viewModel: e5 }) : "media" === o3 ? new T2({ viewModel: e5 }) : "text" === o3 ? new l3({ viewModel: e5 }) : null : null;
    this._contentWidget = i, this.scheduleRender();
  }
};
__decorate([m({ type: k2 })], g.prototype, "viewModel", void 0), g = __decorate([a2("esri.widgets.Feature.FeatureExpression")], g);

// node_modules/@arcgis/core/widgets/Feature/FeatureRelationship.js
var b;
var y2 = "esri-feature";
var I2 = `${y2}-relationship`;
var F = { base: I2, listContainer: `${I2}__list`, listItem: `${I2}__list-item`, listItemHidden: `${I2}__list-item--hidden`, listContainerQuerying: `${I2}__list--querying`, featureObserver: `${y2}__feature-observer`, stickySpinnerContainer: `${y2}__sticky-loading-container`, loadingSpinnerContainer: `${y2}__loading-container` };
var C2 = { title: true, description: true };
var M2 = b = class extends B {
  constructor(e5, t3) {
    super(e5, t3), this._featureElementInfo = null, this._relatedFeatureIntersectionObserverNode = null, this._relatedFeatureIntersectionObserver = new IntersectionObserver(([e6]) => {
      (e6 == null ? void 0 : e6.isIntersecting) && this._increaseFeaturePage();
    }, { root: window.document }), this.flowItems = null, this.flowType = "feature-relationship", this.headingLevel = 2, this.viewModel = new _2(), this.messages = null, this.messagesCommon = null, this.visibleElements = { ...C2 }, this._increaseFeaturePage = () => {
      const { state: e6, showAllEnabled: t4, relatedFeatures: s6, featuresPerPage: i, featurePage: r3 } = this.viewModel;
      "ready" === e6 && t4 && s6.length >= i * r3 && this.viewModel.featurePage++;
    };
  }
  initialize() {
    this._featureElementInfo = new l2(), this.addHandles([l(() => [this.viewModel.description, this.viewModel.title, this.headingLevel], () => this._setupFeatureElementInfo(), h), l(() => [this.viewModel.state, this.viewModel.showAllEnabled, this._relatedFeatureIntersectionObserverNode], () => this._handleRelatedFeatureObserverChange()), a(() => this.viewModel.relatedFeatureViewModels, "change", () => this._setupRelatedFeatureViewModels())]);
  }
  loadDependencies() {
    return c3({ chip: () => import("./calcite-chip-XE7V63VD.js"), icon: () => import("./calcite-icon-ARXM3BZL.js"), list: () => import("./calcite-list-XSXMMUJC.js"), "list-item": () => import("./calcite-list-item-SULKHT3H.js"), loader: () => import("./calcite-loader-OMJ254ZA.js"), notice: () => import("./calcite-notice-TXMBBKP6.js") });
  }
  destroy() {
    this._unobserveRelatedFeatureObserver(), this._featureElementInfo = u(this._featureElementInfo);
  }
  get displayShowAllButton() {
    const { showAllEnabled: e5, featureCount: t3, displayCount: s6, state: i, allCategoriesCount: r3 } = this.viewModel;
    return !e5 && "ready" === i && (!!r3 && (r3 > s6 || 0 === s6) || !!t3 && (t3 > s6 || 0 === s6));
  }
  get displayListItems() {
    const { relatedFeatureViewModels: e5, allCategoriesCount: t3 } = this.viewModel;
    return this.displayShowAllButton || !!e5.length || !!t3;
  }
  get allItemsDescription() {
    const { messages: e5 } = this, { featureCount: t3, allCategories: s6, allCategoriesCount: i } = this.viewModel;
    return s(e5 == null ? void 0 : e5.numberRecords, { number: c2(s6 ? i : t3) });
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e5) {
    this.viewModel.description = e5;
  }
  get title() {
    const { activeCategory: e5, title: t3 } = this.viewModel;
    return (e5 == null ? void 0 : e5.name) ?? t3;
  }
  set title(e5) {
    this.viewModel.title = e5;
  }
  castVisibleElements(e5) {
    return { ...C2, ...e5 };
  }
  render() {
    var _a;
    const { state: e5 } = this.viewModel;
    return n("div", { class: this.classes(F.base, e2.widget) }, (_a = this._featureElementInfo) == null ? void 0 : _a.render(), "loading" === e5 ? this._renderLoading() : "disabled" === e5 ? this._renderRelationshipNotFound() : this._renderRelatedFeatures());
  }
  _selectCategory(e5) {
    const { flowItems: t3, featureVisibleElements: s6, viewModel: i } = this;
    t3 && (i.activeCategory = e5, i.showAllEnabled = true, t3.push(new b({ flowItems: t3, featureVisibleElements: s6, visibleElements: { title: false, description: false }, viewModel: i })));
  }
  async _selectRecord(e5) {
    const { flowItems: t3, featureVisibleElements: s6 } = this;
    if (!t3) return;
    e5.abilities = { relationshipContent: true };
    const { default: i } = await import("./Feature-WPWPKF3V.js");
    t3.push(new i({ flowItems: t3, flowType: this.flowType, viewModel: e5, visibleElements: s6 }));
  }
  _showAllRecords() {
    const { flowItems: e5 } = this;
    if (!e5) return;
    const { viewModel: t3, featureVisibleElements: s6 } = this;
    t3.showAllEnabled = true;
    const i = new b({ flowItems: e5, featureVisibleElements: s6, visibleElements: { title: false, description: false }, viewModel: t3 });
    e5.push(i);
  }
  _renderStickyLoading() {
    return "querying" === this.viewModel.state ? n("div", { class: F.stickySpinnerContainer, key: "sticky-loader" }, this._renderLoadingIcon()) : null;
  }
  _renderLoadingIcon() {
    return n("calcite-loader", { inline: true, label: "" });
  }
  _renderLoading() {
    return n("div", { class: F.loadingSpinnerContainer, key: "loading-container" }, this._renderLoadingIcon());
  }
  _renderShowAllIconNode() {
    return n("calcite-icon", { icon: "list", scale: "s", slot: "content-end" });
  }
  _renderChevronIconNode() {
    const e5 = L(this.container) ? "chevron-left" : "chevron-right";
    return n("calcite-icon", { icon: e5, scale: "s", slot: "content-end" });
  }
  _renderCategory(e5) {
    const { count: t3, name: s6, value: i } = e5, r3 = c2(t3);
    return n("calcite-list-item", { class: F.listItem, disabled: !t3, key: i, label: s6, onCalciteListItemSelect: () => this._selectCategory(e5) }, n("calcite-chip", { label: r3, scale: "s", slot: "content-end" }, r3), this._renderChevronIconNode());
  }
  _renderRelatedFeature(e5) {
    var _a;
    const { itemDescriptionFieldName: t3 } = this.viewModel, s6 = e5.title;
    e5.description = t3 && ((_a = e5.formattedAttributes) == null ? void 0 : _a.global[t3]);
    const i = "loading" === e5.state;
    return n("calcite-list-item", { class: this.classes(F.listItem, { [F.listItemHidden]: i }), description: c(e5.description ?? ""), key: e5.uid, label: c(s6), onCalciteListItemSelect: () => this._selectRecord(e5) }, this._renderChevronIconNode());
  }
  _renderShowAllListItem() {
    var _a;
    return this.displayShowAllButton ? n("calcite-list-item", { description: this.allItemsDescription, key: "show-all-item", label: (_a = this.messages) == null ? void 0 : _a.showAll, onCalciteListItemSelect: () => this._showAllRecords() }, this._renderShowAllIconNode()) : null;
  }
  _renderNoRelatedFeaturesMessage() {
    var _a;
    return n("calcite-notice", { icon: "information", key: "no-related-features-message", kind: "brand", open: true, scale: "s", width: "full" }, n("div", { slot: "message" }, (_a = this.messages) == null ? void 0 : _a.noRelatedFeatures));
  }
  _renderFeatureObserver() {
    return n("div", { afterCreate: this._relatedFeatureIntersectionObserverCreated, bind: this, class: F.featureObserver, key: "feature-observer" });
  }
  _renderList() {
    var _a;
    const { relatedFeatureViewModels: e5, categories: t3 } = this.viewModel;
    return n("calcite-list", { displayMode: "flat", label: (_a = this.messages) == null ? void 0 : _a.relatedFeaturesList }, (t3 == null ? void 0 : t3.map((e6) => this._renderCategory(e6))) ?? e5.toArray().map((e6) => this._renderRelatedFeature(e6)), this._renderShowAllListItem());
  }
  _renderRelatedFeatures() {
    const { displayListItems: e5 } = this, { state: t3 } = this.viewModel;
    return n("div", { class: this.classes(F.listContainer, { [F.listContainerQuerying]: "querying" === t3 }), key: "list-container" }, e5 ? this._renderList() : "ready" === t3 ? this._renderNoRelatedFeaturesMessage() : null, this._renderStickyLoading(), this._renderFeatureObserver());
  }
  _renderRelationshipNotFound() {
    var _a;
    return n("calcite-notice", { icon: "exclamation-mark-triangle", key: "relationship-not-found", kind: "danger", open: true, scale: "s", width: "full" }, n("div", { slot: "message" }, (_a = this.messages) == null ? void 0 : _a.relationshipNotFound));
  }
  _setupRelatedFeatureViewModels() {
    const { relatedFeatureViewModels: e5 } = this.viewModel, t3 = "related-feature-viewmodels";
    this.removeHandles(t3), e5 == null ? void 0 : e5.forEach((e6) => {
      this.addHandles(l(() => [e6.title, e6.state], () => this.scheduleRender(), h), t3);
    }), this.scheduleRender();
  }
  _setupFeatureElementInfo() {
    var _a;
    const { headingLevel: e5, visibleElements: t3 } = this, s6 = t3.description && this.description, i = t3.title && this.title;
    (_a = this._featureElementInfo) == null ? void 0 : _a.set({ description: s6, title: i, headingLevel: e5 });
  }
  async _handleRelatedFeatureObserverChange() {
    this._unobserveRelatedFeatureObserver();
    const { state: e5, showAllEnabled: t3 } = this.viewModel;
    await T(0), this._relatedFeatureIntersectionObserverNode && "ready" === e5 && t3 && this._relatedFeatureIntersectionObserver.observe(this._relatedFeatureIntersectionObserverNode);
  }
  _relatedFeatureIntersectionObserverCreated(e5) {
    this._relatedFeatureIntersectionObserverNode = e5;
  }
  _unobserveRelatedFeatureObserver() {
    this._relatedFeatureIntersectionObserverNode && this._relatedFeatureIntersectionObserver.unobserve(this._relatedFeatureIntersectionObserverNode);
  }
};
__decorate([m()], M2.prototype, "_relatedFeatureIntersectionObserverNode", void 0), __decorate([m({ readOnly: true })], M2.prototype, "displayShowAllButton", null), __decorate([m({ readOnly: true })], M2.prototype, "displayListItems", null), __decorate([m({ readOnly: true })], M2.prototype, "allItemsDescription", null), __decorate([m()], M2.prototype, "description", null), __decorate([m()], M2.prototype, "featureVisibleElements", void 0), __decorate([m()], M2.prototype, "flowItems", void 0), __decorate([m()], M2.prototype, "flowType", void 0), __decorate([m()], M2.prototype, "headingLevel", void 0), __decorate([m()], M2.prototype, "title", null), __decorate([m({ type: _2 })], M2.prototype, "viewModel", void 0), __decorate([m(), e("esri/widgets/Feature/t9n/Feature")], M2.prototype, "messages", void 0), __decorate([m(), e("esri/t9n/common")], M2.prototype, "messagesCommon", void 0), __decorate([m()], M2.prototype, "visibleElements", void 0), __decorate([s2("visibleElements")], M2.prototype, "castVisibleElements", null), M2 = b = __decorate([a2("esri.widgets.Feature.FeatureRelationship")], M2);

// node_modules/@arcgis/core/widgets/Feature/FeatureUtilityNetworkAssociations.js
var y3 = "esri-feature-utility-network-associations";
var g2 = `${y3}__loading-container`;
var f = { base: y3, listContainer: `${y3}__list`, loadingContainer: g2, loadingContainerSticky: `${g2}--sticky` };
var v4 = class extends B {
  constructor(e5, t3) {
    super(e5, t3), this._featureElementInfo = null, this.onSelectAssociationType = () => {
    }, this.flowType = "feature-utility-network-associations", this.flowItems = null, this.parentFeatureViewModel = null, this.headingLevel = 5, this.viewModel = new v2(), this.messages = null, this.messagesCommon = null, this.visibleElements = new s5();
  }
  initialize() {
    this._featureElementInfo = new l2(), this.addHandles([l(() => [this.viewModel.description, this.viewModel.title, this.headingLevel], () => this._setupFeatureElementInfo(), h)]);
  }
  loadDependencies() {
    return c3({ icon: () => import("./calcite-icon-ARXM3BZL.js"), list: () => import("./calcite-list-XSXMMUJC.js"), "list-item": () => import("./calcite-list-item-SULKHT3H.js"), loader: () => import("./calcite-loader-OMJ254ZA.js"), notice: () => import("./calcite-notice-TXMBBKP6.js") });
  }
  destroy() {
    this._featureElementInfo = u(this._featureElementInfo);
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e5) {
    this.viewModel.description = e5;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e5) {
    this.viewModel.title = e5;
  }
  render() {
    var _a;
    const { state: e5 } = this.viewModel;
    return n("div", { class: this.classes(f.base, e2.widget) }, (_a = this._featureElementInfo) == null ? void 0 : _a.render(), "loading" === e5 ? this._renderLoading() : "disabled" === e5 ? this._renderAssociationNotFound() : this._renderContent());
  }
  _renderStickyLoading() {
    return "querying" === this.viewModel.state ? n("div", { class: f.loadingContainerSticky, key: "sticky-loader" }, this._renderLoadingIcon()) : null;
  }
  _renderLoadingIcon() {
    return n("calcite-loader", { inline: true, label: this.messagesCommon.loading });
  }
  _renderLoading() {
    return n("div", { class: f.loadingContainer, key: "loading-container" }, this._renderLoadingIcon());
  }
  _renderAssociationNotFound() {
    var _a;
    return n("calcite-notice", { icon: "information", key: "association-not-found", kind: "info", open: true, scale: "s", width: "full" }, n("div", { slot: "message" }, (_a = this.messages) == null ? void 0 : _a.noAssociations));
  }
  _renderAssociationType(e5) {
    const { viewModel: t3 } = this, i = this._getAssociationTypeTitle(e5);
    return n("calcite-list-item", { description: c(e5.description), key: `association-type-${e5.type}`, label: c(i), value: e5.type, onCalciteListItemSelect: () => this.onSelectAssociationType({ viewModel: t3, listType: e5, title: i }) }, n("calcite-icon", { flipRtl: true, icon: "chevron-right", scale: "s", slot: "content-end" }));
  }
  _renderAssociations(e5) {
    const { viewModel: t3 } = this;
    return "featureForm" === t3.source || t3.getFeatureCountForAssociationType(e5.type) > 0 ? this._renderAssociationType(e5) : void 0;
  }
  _renderContent() {
    const { messages: e5, viewModel: t3 } = this, { state: i, associationTypes: o3 } = t3;
    return n("div", { class: f.listContainer, key: "list-container" }, "ready" === i ? n("div", null, n("calcite-list", { displayMode: "flat", label: e5 == null ? void 0 : e5.associationsList }, o3.map((e6) => this._renderAssociations(e6)))) : null, this._renderStickyLoading());
  }
  _getAssociationTypeTitle(e5) {
    const { messages: t3 } = this;
    if (e5.title) return e5.title;
    switch (e5.type) {
      case "attachment":
        return t3.associationsAttachments;
      case "connectivity":
        return t3.associationsConnectivity;
      case "structure":
        return t3.associationsStructure;
      case "content":
        return t3.associationsContents;
      case "container":
        return t3.associationsContainer;
    }
  }
  _setupFeatureElementInfo() {
    var _a;
    const { headingLevel: e5, visibleElements: t3 } = this, i = t3.description && this.description, o3 = t3.title && this.title;
    (_a = this._featureElementInfo) == null ? void 0 : _a.set({ description: i, title: o3, headingLevel: e5 });
  }
};
__decorate([m({ constructOnly: true })], v4.prototype, "onSelectAssociationType", void 0), __decorate([m()], v4.prototype, "flowType", void 0), __decorate([m()], v4.prototype, "flowItems", void 0), __decorate([m()], v4.prototype, "parentFeatureViewModel", void 0), __decorate([m()], v4.prototype, "featureVisibleElements", void 0), __decorate([m()], v4.prototype, "description", null), __decorate([m()], v4.prototype, "headingLevel", void 0), __decorate([m()], v4.prototype, "title", null), __decorate([m({ type: v2 })], v4.prototype, "viewModel", void 0), __decorate([m(), e("esri/widgets/Feature/t9n/Feature")], v4.prototype, "messages", void 0), __decorate([m(), e("esri/t9n/common")], v4.prototype, "messagesCommon", void 0), __decorate([m({ type: s5, nonNullable: true })], v4.prototype, "visibleElements", void 0), v4 = __decorate([a2("esri.widgets.Feature.FeatureUtilityNetworkAssociations")], v4);

// node_modules/@arcgis/core/widgets/Feature/resources.js
var e4 = "esri-feature";
var t2 = { base: e4, container: `${e4}__size-container`, title: `${e4}__title`, main: `${e4}__main-container`, btn: `${e4}__button`, icon: `${e4}__icon`, content: `${e4}__content`, contentNode: `${e4}__content-node`, contentNodeText: `${e4}__content-node--text`, contentElement: `${e4}__content-element`, text: `${e4}__text`, lastEditedInfo: `${e4}__last-edited-info`, fields: `${e4}__fields`, fieldHeader: `${e4}__field-header`, fieldData: `${e4}__field-data`, fieldDataDate: `${e4}__field-data--date`, loadingSpinnerContainer: `${e4}__loading-container` };

// node_modules/@arcgis/core/widgets/Feature/support/FeatureContentMixin.js
var n4 = (n5) => {
  const i = n5;
  let d3 = class extends i {
    constructor() {
      super(...arguments), this.renderNodeContent = (o3) => e3(o3) && !o3.destroyed ? n("div", { class: t2.contentNode, key: o3 }, o3.render()) : o3 instanceof HTMLElement ? n("div", { afterCreate: this._attachToNode, bind: o3, class: t2.contentNode, key: o3 }) : o(o3) ? n("div", { afterCreate: this._attachToNode, bind: o3.domNode, class: t2.contentNode, key: o3 }) : null;
    }
    _attachToNode(o3) {
      const t3 = this;
      o3.appendChild(t3);
    }
  };
  return d3 = __decorate([a2("esri.widgets.Feature.support.FeatureContentMixin")], d3), d3;
};

// node_modules/@arcgis/core/widgets/Feature.js
var b2 = { title: true, content: true, lastEditedInfo: true };
var F2 = class extends n4(B) {
  constructor(e5, t3) {
    super(e5, t3), this._contentWidgets = [], this.flowType = "feature", this.flowItems = null, this.headingLevel = 2, this.messages = null, this.messagesCommon = null, this.visibleElements = { ...b2 }, this.viewModel = new ne();
  }
  initialize() {
    this.addHandles(l(() => {
      var _a;
      return (_a = this.viewModel) == null ? void 0 : _a.contentViewModels;
    }, () => this._setupContentWidgets(), h));
  }
  loadDependencies() {
    return c3({ notice: () => import("./calcite-notice-TXMBBKP6.js"), loader: () => import("./calcite-loader-OMJ254ZA.js") });
  }
  destroy() {
    this._destroyContentWidgets();
  }
  get graphic() {
    return this.viewModel.graphic;
  }
  set graphic(e5) {
    this.viewModel.graphic = e5;
  }
  get defaultPopupTemplateEnabled() {
    return this.viewModel.defaultPopupTemplateEnabled;
  }
  set defaultPopupTemplateEnabled(e5) {
    this.viewModel.defaultPopupTemplateEnabled = e5;
  }
  get isTable() {
    return this.viewModel.isFeatureFromTable;
  }
  get icon() {
    return "polygon";
  }
  set icon(e5) {
    this._overrideIfSome("icon", e5);
  }
  get label() {
    var _a;
    return ((_a = this.messages) == null ? void 0 : _a.widgetLabel) ?? "";
  }
  set label(e5) {
    this._overrideIfSome("label", e5);
  }
  get location() {
    return this.viewModel.location;
  }
  set location(e5) {
    this.viewModel.location = e5;
  }
  get spatialReference() {
    return this.viewModel.spatialReference;
  }
  set spatialReference(e5) {
    this.viewModel.spatialReference = e5;
  }
  get timeZone() {
    return this.viewModel.timeZone;
  }
  set timeZone(e5) {
    this.viewModel.timeZone = e5;
  }
  get title() {
    return this.viewModel.title;
  }
  castVisibleElements(e5) {
    return { ...b2, ...e5 };
  }
  get map() {
    return this.viewModel.map;
  }
  set map(e5) {
    this.viewModel.map = e5;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e5) {
    this.viewModel.view = e5;
  }
  setActiveMedia(e5, t3) {
    return this.viewModel.setActiveMedia(e5, t3);
  }
  nextMedia(e5) {
    return this.viewModel.nextMedia(e5);
  }
  previousMedia(e5) {
    return this.viewModel.previousMedia(e5);
  }
  render() {
    const { state: e5 } = this.viewModel, t3 = n("div", { class: t2.container, key: "container" }, this._renderTitle(), "error" === e5 ? this._renderError() : "loading" === e5 ? this._renderLoading() : this._renderContentContainer());
    return n("div", { class: this.classes(t2.base, e2.widget) }, t3);
  }
  _renderError() {
    const { messagesCommon: e5, messages: t3, visibleElements: s6 } = this;
    return n("calcite-notice", { icon: "exclamation-mark-circle", kind: "danger", open: true, scale: "s" }, s6.title ? n("div", { key: "error-title", slot: "title" }, e5.errorMessage) : null, n("div", { key: "error-message", slot: "message" }, t3.loadingError));
  }
  _renderLoading() {
    return n("div", { class: t2.loadingSpinnerContainer, key: "loading-container" }, n("calcite-loader", { inline: true, label: "" }));
  }
  _renderContentContainer() {
    const { visibleElements: e5 } = this;
    return e5.content ? n("div", { class: t2.main }, [this._renderContent(), this._renderLastEditInfo()]) : null;
  }
  _renderTitle() {
    const { visibleElements: e5, title: t3 } = this;
    return e5.title ? n(s4, { class: t2.title, innerHTML: t3, level: this.headingLevel }) : null;
  }
  _renderContent() {
    const e5 = this.viewModel.content, t3 = "content";
    if (!e5) return null;
    if (Array.isArray(e5)) return e5.length ? n("div", { class: t2.contentNode, key: `${t3}-content-elements` }, e5.map(this._renderContentElement, this)) : null;
    if ("string" == typeof e5) {
      const e6 = this._contentWidgets[0];
      return !e6 || e6.destroyed ? null : n("div", { class: this.classes(t2.contentNode, t2.contentNodeText), key: `${t3}-content` }, e6.render());
    }
    return this.renderNodeContent(e5);
  }
  _renderContentElement(e5, t3) {
    var _a;
    const { visibleElements: s6 } = this;
    if ("boolean" != typeof s6.content && !((_a = s6.content) == null ? void 0 : _a[e5.type])) return null;
    switch (e5.type) {
      case "attachments":
        return this._renderAttachments(t3);
      case "custom":
        return this._renderCustom(e5, t3);
      case "fields":
        return this._renderFields(t3);
      case "media":
        return this._renderMedia(t3);
      case "text":
        return this._renderText(e5, t3);
      case "expression":
        return this._renderExpression(t3);
      case "relationship":
        return this._renderRelationship(t3);
      case "utility-network-associations":
        return this._renderAssociation(t3);
      default:
        return null;
    }
  }
  _renderAttachments(e5) {
    const t3 = this._contentWidgets[e5];
    if (!t3 || t3.destroyed) return null;
    const { state: s6, attachmentInfos: i } = t3.viewModel;
    return "loading" === s6 || i.length > 0 ? n("div", { class: this.classes(t2.contentElement), key: this._buildKey("attachments-element", e5) }, t3.render()) : null;
  }
  _renderRelationship(e5) {
    const t3 = this._contentWidgets[e5];
    return t3 && !t3.destroyed && this.flowItems ? n("div", { class: t2.contentElement, key: this._buildKey("relationship-element", e5) }, t3.render()) : null;
  }
  _renderAssociation(e5) {
    const t3 = this._contentWidgets[e5];
    return t3 && !t3.destroyed && this.flowItems ? n("div", { class: t2.contentElement, key: this._buildKey("utility-network-association-element", e5) }, t3.render()) : null;
  }
  _renderExpression(e5) {
    const t3 = this._contentWidgets[e5];
    return t3 && !t3.destroyed && t3.viewModel.contentElement ? n("div", { class: t2.contentElement, key: this._buildKey("expression-element", e5) }, t3.render()) : null;
  }
  _renderCustom(e5, t3) {
    const { creator: s6 } = e5, i = this._contentWidgets[t3];
    return !i || i.destroyed ? null : s6 ? n("div", { class: t2.contentElement, key: this._buildKey("custom-element", t3) }, i.render()) : null;
  }
  _renderFields(e5) {
    const t3 = this._contentWidgets[e5];
    return !t3 || t3.destroyed ? null : n("div", { class: t2.contentElement, key: this._buildKey("fields-element", e5) }, t3.render());
  }
  _renderMedia(e5) {
    const t3 = this._contentWidgets[e5];
    return !t3 || t3.destroyed ? null : n("div", { class: t2.contentElement, key: this._buildKey("media-element", e5) }, t3.render());
  }
  _renderLastEditInfo() {
    const { visibleElements: e5, messages: t3 } = this, { lastEditInfo: s6 } = this.viewModel;
    if (!s6 || !e5.lastEditedInfo) return null;
    const { date: i, user: n5 } = s6, o3 = "edit" === s6.type ? n5 ? t3.lastEditedByUser : t3.lastEdited : n5 ? t3.lastCreatedByUser : t3.lastCreated, r3 = s(o3, { date: i, user: n5 });
    return n("div", { class: this.classes(t2.lastEditedInfo, t2.contentElement), key: "edit-info-element" }, r3);
  }
  _renderText(e5, t3) {
    const s6 = e5.text, i = this._contentWidgets[t3];
    return !i || i.destroyed ? null : s6 ? n("div", { class: this.classes(t2.contentElement, t2.text), key: this._buildKey("text-element", t3) }, i.render()) : null;
  }
  _buildKey(e5, ...t3) {
    var _a, _b;
    return `${e5}__${((_b = (_a = this.viewModel) == null ? void 0 : _a.graphic) == null ? void 0 : _b.uid) || "0"}-${t3.join("-")}`;
  }
  _destroyContentWidget(e5) {
    e5 && (e5.viewModel = null, !e5.destroyed && e5.destroy());
  }
  _destroyContentWidgets() {
    this._contentWidgets.forEach((e5) => this._destroyContentWidget(e5)), this._contentWidgets = [];
  }
  _setupContentWidgets() {
    this._destroyContentWidgets();
    const { headingLevel: e5, visibleElements: t3, flowItems: s6, viewModel: i } = this, n5 = i == null ? void 0 : i.content, { contentViewModels: o3 } = i;
    if (Array.isArray(n5)) n5.forEach((n6, r3) => {
      if ("attachments" === n6.type && (this._contentWidgets[r3] = new h2({ displayType: n6.displayType, headingLevel: t3.title && e5 < 6 ? e5 + 1 : e5, viewModel: o3[r3] })), "fields" === n6.type && (this._contentWidgets[r3] = new c7({ viewModel: o3[r3] })), "media" === n6.type && (this._contentWidgets[r3] = new T2({ viewModel: o3[r3] })), "text" === n6.type && (this._contentWidgets[r3] = new l3({ viewModel: o3[r3] })), "custom" === n6.type && (this._contentWidgets[r3] = new l3({ viewModel: o3[r3] })), "expression" === n6.type && (this._contentWidgets[r3] = new g({ viewModel: o3[r3] })), "relationship" === n6.type) {
        const e6 = new M2({ flowItems: s6, featureVisibleElements: t3, viewModel: o3[r3] });
        this._contentWidgets[r3] = e6;
      }
      if ("utility-network-associations" === n6.type) {
        const e6 = async (e7) => {
          const { viewModel: n8, listType: o4, title: r4 } = e7;
          if (!s6) return;
          n8.activeAssociationType = o4;
          const { default: l4 } = await import("./FeatureUtilityNetworkAssociationList-4WWIEAUA.js"), d3 = new l4({ viewModel: n8, parentFeatureViewModel: i, listType: o4, title: r4, featureVisibleElements: t3, description: i.title, flowItems: s6 });
          s6.push(d3);
        }, n7 = new v4({ flowItems: s6, onSelectAssociationType: e6, parentFeatureViewModel: i, featureVisibleElements: t3, viewModel: o3[r3] });
        this._contentWidgets[r3] = n7;
      }
    }, this);
    else {
      const e6 = o3[0];
      e6 && !e6.destroyed && (this._contentWidgets[0] = new l3({ viewModel: e6 }));
    }
    this.scheduleRender();
  }
};
__decorate([m()], F2.prototype, "flowType", void 0), __decorate([m()], F2.prototype, "graphic", null), __decorate([m()], F2.prototype, "defaultPopupTemplateEnabled", null), __decorate([m()], F2.prototype, "flowItems", void 0), __decorate([m()], F2.prototype, "headingLevel", void 0), __decorate([m({ readOnly: true })], F2.prototype, "isTable", null), __decorate([m()], F2.prototype, "icon", null), __decorate([m()], F2.prototype, "label", null), __decorate([m()], F2.prototype, "location", null), __decorate([m(), e("esri/widgets/Feature/t9n/Feature")], F2.prototype, "messages", void 0), __decorate([m(), e("esri/t9n/common")], F2.prototype, "messagesCommon", void 0), __decorate([m()], F2.prototype, "spatialReference", null), __decorate([m()], F2.prototype, "timeZone", null), __decorate([m({ readOnly: true })], F2.prototype, "title", null), __decorate([m()], F2.prototype, "visibleElements", void 0), __decorate([s2("visibleElements")], F2.prototype, "castVisibleElements", null), __decorate([m()], F2.prototype, "map", null), __decorate([m()], F2.prototype, "view", null), __decorate([m({ type: ne })], F2.prototype, "viewModel", void 0), F2 = __decorate([a2("esri.widgets.Feature")], F2);

export {
  t2 as t,
  n4 as n,
  F2 as F
};
//# sourceMappingURL=chunk-OOY7ALTA.js.map
