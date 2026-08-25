import {
  I as I2
} from "./chunk-H726MI76.js";
import {
  C,
  N,
  e as e5,
  f,
  h as h2,
  i,
  m as m2,
  q,
  s as s3,
  t,
  u,
  v
} from "./chunk-EC33F45E.js";
import "./chunk-IF3WHXC4.js";
import {
  e as e3
} from "./chunk-WSTAYIQ5.js";
import {
  e as e4
} from "./chunk-UBCTOQOO.js";
import "./chunk-CQC5Y2ZY.js";
import "./chunk-DCREBZBV.js";
import {
  I
} from "./chunk-TC7AOQMQ.js";
import {
  e as e2
} from "./chunk-6B5YFT3O.js";
import {
  B,
  c,
  e
} from "./chunk-KIJ7RXGK.js";
import {
  s
} from "./chunk-XZSHAR3X.js";
import {
  j,
  n2 as n
} from "./chunk-5U6XSC43.js";
import "./chunk-XG5BA6RK.js";
import "./chunk-GKBYUU3U.js";
import "./chunk-25MBQJUA.js";
import "./chunk-JIJYOENG.js";
import "./chunk-3MKPTM6T.js";
import "./chunk-PDXC6YP2.js";
import "./chunk-SWYYL7T7.js";
import "./chunk-NJ2KBGD4.js";
import {
  l as l3,
  reEmitEvent
} from "./chunk-C7LETAUT.js";
import {
  makeGenericController,
  usePropertyChange
} from "./chunk-SZNNI5VM.js";
import "./chunk-GPG7YJ2X.js";
import "./chunk-XFVNPLUN.js";
import {
  LitElement,
  createEvent,
  css
} from "./chunk-L7EQWDU5.js";
import "./chunk-QN24DCIC.js";
import "./chunk-TVEPRWYA.js";
import "./chunk-3PVGVNCV.js";
import "./chunk-7VLZMF2B.js";
import "./chunk-4BEZTMLR.js";
import {
  s as s2
} from "./chunk-I2W3LINK.js";
import "./chunk-5HYMAKZL.js";
import {
  O
} from "./chunk-7OBUFU3X.js";
import "./chunk-66BNN6ZJ.js";
import "./chunk-NOVKMJNS.js";
import "./chunk-27A66LHG.js";
import {
  l as l2
} from "./chunk-HIM26FXK.js";
import "./chunk-IHMZ3RSY.js";
import "./chunk-GMQ2EQ27.js";
import "./chunk-6YDIQE3P.js";
import "./chunk-XN5EOTP2.js";
import "./chunk-5YBW6KQ6.js";
import "./chunk-VNR3A2IW.js";
import {
  a,
  h,
  l
} from "./chunk-DLX5DTNB.js";
import "./chunk-6LIC47AK.js";
import "./chunk-7J6TZQJ4.js";
import "./chunk-ZNU5NTGY.js";
import "./chunk-J3VZVJYU.js";
import "./chunk-U2QKMJ4B.js";
import "./chunk-UWOUWJRN.js";
import "./chunk-4EJ2CVAA.js";
import {
  b,
  m2 as m
} from "./chunk-TSVVEDRS.js";
import {
  a2
} from "./chunk-HPSHCA6S.js";
import "./chunk-PB4SYOXK.js";
import "./chunk-GJFVHE2X.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";
import "./chunk-EO4UMOUD.js";
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

// node_modules/@arcgis/core/widgets/LayerList/css.js
var t2 = "esri-layer-list";
var i2 = `${t2}__item`;
var e6 = { base: t2, actionMenu: `${t2}__action-menu`, actionGroup: `${t2}__action-group`, filterNoResults: `${t2}__filter-no-results`, item: i2, itemActive: `${i2}--active`, itemContentBottom: `${i2}-content-bottom`, itemMessage: `${i2}-message`, itemActionIcon: `${i2}-action-icon`, itemActionImage: `${i2}-action-image`, itemTemporaryIcon: `${i2}-temporary-icon`, itemTableIcon: `${i2}-table-icon`, itemCatalogIcon: `${i2}-catalog-icon`, statusIndicator: `${t2}__status-indicator`, publishing: `${t2}__publishing`, updating: `${t2}__updating`, connectionStatus: `${t2}__connection-status`, connectionStatusConnected: `${t2}__connection-status--connected`, visibleToggle: `${t2}__visible-toggle`, visibleIcon: `${t2}__visible-icon` };

// node_modules/@arcgis/core/widgets/LayerList/LayerListViewModel.js
var m3 = { view: "view", viewLayers: "view-layers", mapLayers: "map-layers", layerViews: "layer-views", layerListMode: "layer-list-mode" };
var c2 = "hide";
var p = O.ofType(I2);
var y = class extends l2 {
  constructor(e7) {
    super(e7), this.checkPublishStatusEnabled = false, this.listItemCreatedFunction = null, this.listModeDisabled = false, this.operationalItems = new p(), this.view = null;
  }
  initialize() {
    this.addHandles([l(() => {
      var _a;
      return true === ((_a = this.view) == null ? void 0 : _a.ready);
    }, () => this._viewHandles(), h), l(() => [this.listItemCreatedFunction, this.checkPublishStatusEnabled, this.listModeDisabled], () => this._recompileList()), l(() => e4(this.view) ? this.view.inGeographicLayout : null, () => this._compileList())], m3.view);
  }
  destroy() {
    this._removeAllItems(), this.view = null;
  }
  get state() {
    const { view: e7 } = this;
    return (e7 == null ? void 0 : e7.ready) ? "ready" : e7 ? "loading" : "disabled";
  }
  get totalItems() {
    return this.operationalItems.flatten((e7) => e7.children).length;
  }
  triggerAction(e7, t3) {
    e7 && !e7.disabled && this.emit("trigger-action", { action: e7, item: t3 });
  }
  moveListItem(e7, t3, s5, i3) {
    var _a, _b;
    const r2 = e7 == null ? void 0 : e7.layer;
    if (!r2 || "subtype-sublayer" === r2.type || "sublayer" === r2.type) return;
    const a4 = (_b = (_a = this.view) == null ? void 0 : _a.map) == null ? void 0 : _b.layers, o = t3 ? m2(t3) : a4, l5 = s5 ? m2(s5) : a4;
    if (!o || !l5) return;
    const { operationalItems: n2 } = this, h3 = (t3 == null ? void 0 : t3.children) || n2, m4 = (s5 == null ? void 0 : s5.children) || n2, c4 = l5.length - i3;
    e7.parent = s5 || null, h3.remove(e7), o.remove(r2), m4.includes(e7) || m4.add(e7, c4), l5.includes(r2) || l5.add(r2, c4), this._compileList();
  }
  _createLayerViewHandles(e7) {
    this.removeHandles(m3.layerViews), this._compileList(), e7 && this.addHandles(e7.on("change", () => this._compileList()), m3.layerViews);
  }
  _createMapLayerHandles(e7) {
    this.removeHandles(m3.mapLayers), this._compileList(), e7 && this.addHandles(e7.on("change", () => this._compileList()), m3.mapLayers);
  }
  _createListItem(e7) {
    const { view: t3, listItemCreatedFunction: s5, checkPublishStatusEnabled: i3, listModeDisabled: r2 } = this;
    return new I2({ checkPublishStatusEnabled: i3, listModeDisabled: r2, layer: e7, listItemCreatedFunction: s5, view: t3 });
  }
  _removeAllItems() {
    this.operationalItems.destroyAll();
  }
  _getViewableLayers(e7) {
    return e7 ? this.listModeDisabled ? e7 : e7.filter((e8) => u(e8) !== c2) : void 0;
  }
  _watchLayersListMode(e7) {
    this.removeHandles(m3.layerListMode), e7 && !this.listModeDisabled && this.addHandles(l(() => e7.filter((e8) => "listMode" in e8).map((e8) => e8.listMode).toArray(), () => this._compileList()), m3.layerListMode);
  }
  _compileList() {
    var _a, _b;
    const e7 = (_b = (_a = this.view) == null ? void 0 : _a.map) == null ? void 0 : _b.layers, t3 = e4(this.view) && !this.view.inGeographicLayout ? e7 == null ? void 0 : e7.filter(({ type: e8 }) => "link-chart" === e8) : e7;
    this._watchLayersListMode(t3);
    const s5 = this._getViewableLayers(t3);
    (s5 == null ? void 0 : s5.length) ? (this._createNewItems(s5), this._removeItems(s5), this._sortItems(s5)) : this._removeAllItems();
  }
  _createNewItems(e7) {
    const { operationalItems: t3 } = this;
    e7.forEach((e8) => {
      t3.some((t4) => t4.layer === e8) || t3.add(this._createListItem(e8));
    });
  }
  _removeItems(e7) {
    const { operationalItems: t3 } = this, s5 = [];
    t3.forEach((t4) => {
      t4 && e7 && e7.includes(t4.layer) || s5.push(t4);
    }), t3.destroyMany(s5);
  }
  _sortItems(e7) {
    const { operationalItems: t3 } = this;
    t3.sort((t4, s5) => {
      const i3 = e7.indexOf(t4.layer), r2 = e7.indexOf(s5.layer);
      return i3 > r2 ? -1 : i3 < r2 ? 1 : 0;
    });
  }
  _recompileList() {
    this._removeAllItems(), this._compileList();
  }
  _viewHandles() {
    const { view: e7 } = this;
    this.removeHandles([m3.mapLayers, m3.layerViews, m3.viewLayers]), (e7 == null ? void 0 : e7.ready) ? this.addHandles([l(() => {
      var _a, _b;
      return (_b = (_a = this.view) == null ? void 0 : _a.map) == null ? void 0 : _b.allLayers;
    }, (e8) => this._createMapLayerHandles(e8), h), l(() => {
      var _a;
      return (_a = this.view) == null ? void 0 : _a.allLayerViews;
    }, (e8) => this._createLayerViewHandles(e8), h)], m3.viewLayers) : this._removeAllItems();
  }
};
__decorate([m()], y.prototype, "checkPublishStatusEnabled", void 0), __decorate([m()], y.prototype, "listItemCreatedFunction", void 0), __decorate([m({ nonNullable: true })], y.prototype, "listModeDisabled", void 0), __decorate([m({ type: p })], y.prototype, "operationalItems", void 0), __decorate([m({ readOnly: true })], y.prototype, "state", null), __decorate([m()], y.prototype, "totalItems", null), __decorate([m()], y.prototype, "view", void 0), y = __decorate([a2("esri.widgets.LayerList.LayerListViewModel")], y);
var v2 = y;

// node_modules/@arcgis/core/widgets/LayerList/LayerListVisibleElements.js
var s4 = class extends b {
  constructor() {
    super(...arguments), this.catalogLayerList = true, this.closeButton = false, this.collapseButton = false, this.errors = false, this.filter = false, this.flow = true, this.heading = false, this.statusIndicators = true, this.temporaryLayerIndicators = false;
  }
};
__decorate([m({ type: Boolean, nonNullable: true })], s4.prototype, "catalogLayerList", void 0), __decorate([m({ type: Boolean, nonNullable: true })], s4.prototype, "closeButton", void 0), __decorate([m({ type: Boolean, nonNullable: true })], s4.prototype, "collapseButton", void 0), __decorate([m({ type: Boolean, nonNullable: true })], s4.prototype, "errors", void 0), __decorate([m({ type: Boolean, nonNullable: true })], s4.prototype, "filter", void 0), __decorate([m({ type: Boolean, nonNullable: true })], s4.prototype, "flow", void 0), __decorate([m({ type: Boolean, nonNullable: true })], s4.prototype, "heading", void 0), __decorate([m({ type: Boolean, nonNullable: true })], s4.prototype, "statusIndicators", void 0), __decorate([m({ type: Boolean, nonNullable: true })], s4.prototype, "temporaryLayerIndicators", void 0), s4 = __decorate([a2("esri.widgets.LayerList.LayerListVisibleElements")], s4);
var l4 = s4;

// node_modules/@arcgis/core/widgets/LayerList.js
var P = O.ofType(I2);
var A = "nested";
var j2 = class extends s2(B) {
  constructor(e7, i3) {
    super(e7, i3), this._rootListEl = null, this._activeItem = null, this._tooltipReferenceMap = new s(), this._focusRootFlowItem = false, this._focusPanelFlowItem = false, this._focusLayerFlowItem = null, this._layerListMap = new s(), this._lastDragDetail = null, this._selectedDragItemLayerUid = null, this._rootGroupUid = `operational-${this.uid}`, this._openedLayersController = null, this.catalogLayerList = null, this.catalogOptions = null, this.collapsed = false, this.dragEnabled = false, this.filterPlaceholder = "", this.filterPredicate = null, this.filterText = "", this.headingLevel = 2, this.knowledgeGraphOptions = null, this.layerTablesEnabled = new O(["knowledge-graph"]), this.listItemCanGiveFunction = null, this.listItemCanReceiveFunction = null, this.mapImageOptions = null, this.messages = null, this.messagesCommon = null, this.minDragEnabledItems = e5, this.minFilterItems = i, this.openedLayers = new O(), this.openedLayerLists = new O(), this.selectedItems = new P(), this.selectionMode = "none", this.tableList = null, this.tileOptions = null, this.viewModel = new v2(), this.visibilityAppearance = "default", this.visibleElements = new l4(), this._canMove = ({ dragEl: e8, fromEl: t3, toEl: i4 }, o) => {
      var _a, _b, _c2;
      const s5 = "pull" === o ? this.listItemCanGiveFunction : this.listItemCanReceiveFunction, l5 = N(e8);
      if (!(l5 == null ? void 0 : l5.sortable)) return false;
      const r2 = N(t3), a4 = q(t3), n2 = N(i4), d = q(i4), p2 = !!a4 && !!d && a4 === d, c4 = { selected: l5, from: r2, to: n2 }, m4 = t3.group, h3 = i4.group, y2 = ((_a = r2 == null ? void 0 : r2.layer) == null ? void 0 : _a.type) ?? "", u2 = ((_b = n2 == null ? void 0 : n2.layer) == null ? void 0 : _b.type) ?? "", g2 = /* @__PURE__ */ new Set(["map-image", "catalog", "knowledge-graph"]), f2 = "sublayer";
      return m4 && h3 && "function" == typeof s5 ? s5.call(null, c4) : p2 && !g2.has(y2) && !g2.has(u2) && ((_c2 = l5 == null ? void 0 : l5.layer) == null ? void 0 : _c2.type) !== f2;
    }, this._onCatalogOpen = (e8) => {
      var _a, _b;
      this.openedLayers.push((_a = e8.layer) == null ? void 0 : _a.parent), this._focusLayerFlowItem = (_b = e8.layer) == null ? void 0 : _b.uid;
    }, this._onTablesOpen = (e8) => {
      var _a;
      this.openedLayers.push(e8.layer), this._focusLayerFlowItem = (_a = e8.layer) == null ? void 0 : _a.uid;
    }, this._onPanelOpen = () => {
      this._focusPanelFlowItem = true;
    }, this._onTooltipReferenceChange = (e8, t3) => {
      t3 ? this._tooltipReferenceMap.set(e8, t3) : this._tooltipReferenceMap.delete(e8);
    }, this._onSelectedDragItemLayerUidChange = (e8) => {
      this._selectedDragItemLayerUid = e8;
    }, this._onTriggerAction = (e8, t3) => {
      this.triggerAction(e8, t3);
    }, this._clearActiveItem = () => {
      this._activeItem = null;
    }, this._setActiveItem = (e8) => {
      if ("default" !== this.visibilityAppearance) return;
      const t3 = Array.from(e8.composedPath()).find((e9) => {
        var _a;
        return (_a = e9.classList) == null ? void 0 : _a.contains(e6.item);
      });
      this._activeItem = N(t3);
    }, this._onCalciteListOrderChange = (e8) => {
      const { _lastDragDetail: t3 } = this, { toEl: i4, fromEl: o, dragEl: s5, newIndex: l5 } = e8;
      if (o && i4 && !((t3 == null ? void 0 : t3.newIndex) === l5 && (t3 == null ? void 0 : t3.dragEl) === s5 && (t3 == null ? void 0 : t3.toEl) === i4 && (t3 == null ? void 0 : t3.fromEl) === o)) {
        if (this._lastDragDetail = e8, this._selectedDragItemLayerUid = s5.value, o === i4) {
          const e9 = Array.from(o.children).filter((e10) => e10 == null ? void 0 : e10.matches("calcite-list-item")).map((e10) => e10.value);
          return void this._sortLayers(o, e9);
        }
        this._moveLayerFromChildList({ toEl: i4, fromEl: o, dragEl: s5, newIndex: l5 });
      }
    };
  }
  initialize() {
    this.addHandles([a(() => this.openedLayers, "change", () => this._handleOpenedLayersChange(), h), a(() => this.viewModel.operationalItems, "change", () => s3(this.selectedItems), h), l(() => [this.filterPredicate, this._rootListEl], () => f(this._rootListEl, this.filterPredicate))]);
  }
  loadDependencies() {
    return c({ button: () => import("./calcite-button-SMNEFRIK.js"), flow: () => import("./calcite-flow-TCKOZ5FC.js"), "flow-item": () => import("./calcite-flow-item-62SCTYYO.js"), list: () => import("./calcite-list-XSXMMUJC.js"), notice: () => import("./calcite-notice-TXMBBKP6.js"), tooltip: () => import("./calcite-tooltip-WVN7YDSH.js") });
  }
  destroy() {
    this._destroyOpenedLayerLists(), this._tooltipReferenceMap.clear();
  }
  get _totalItems() {
    return this.viewModel.operationalItems.flatten((e7) => e7.children.filter((e8) => {
      var _a;
      return "catalog-dynamic-group" !== ((_a = e8.layer) == null ? void 0 : _a.type);
    })).length;
  }
  get _visibleItems() {
    var _a;
    return (_a = this.operationalItems) == null ? void 0 : _a.filter((e7) => !e7.hidden && (this.visibleElements.errors || !e7.error));
  }
  get _openedPanelItems() {
    return this._visibleItems.flatten((e7) => e7.children).filter(({ hidden: e7, panel: t3 }) => !e7 && (t3 == null ? void 0 : t3.open) && !t3.disabled && t3.flowEnabled);
  }
  get _dragEnabled() {
    return this._totalItems >= this.minDragEnabledItems && this.dragEnabled;
  }
  get _filterEnabled() {
    return this._totalItems >= this.minFilterItems && this.visibleElements.filter;
  }
  get _renderedOpenLayerFlowItems() {
    const { openedLayers: e7 } = this;
    return e7.toArray().map((t3, i3) => this._renderLayerFlowItem(t3, i3 === e7.length - 1));
  }
  get icon() {
    return "layers";
  }
  set icon(e7) {
    this._overrideIfSome("icon", e7);
  }
  get label() {
    var _a;
    return ((_a = this.messages) == null ? void 0 : _a.widgetLabel) ?? "";
  }
  set label(e7) {
    this._overrideIfSome("label", e7);
  }
  get listItemCreatedFunction() {
    return this.viewModel.listItemCreatedFunction;
  }
  set listItemCreatedFunction(e7) {
    this.viewModel.listItemCreatedFunction = e7;
  }
  get operationalItems() {
    return this.viewModel.operationalItems;
  }
  set operationalItems(e7) {
    this.viewModel.operationalItems = e7;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e7) {
    this.viewModel.view = e7;
  }
  triggerAction(e7, t3) {
    return this.viewModel.triggerAction(e7, t3);
  }
  render() {
    var _a;
    const e7 = (_a = this.viewModel) == null ? void 0 : _a.state, t3 = { [e2.hidden]: "loading" === e7, [e2.disabled]: "disabled" === e7 };
    return n("div", { class: this.classes(e6.base, e2.widget, e2.panel, t3) }, this._renderItemTooltips(), this._renderItems());
  }
  async _createFlowList(e7, t3) {
    const { _layerListMap: i3 } = this, o = i3.get(e7);
    if (o) return o;
    const s5 = "catalog" === e7.type ? await this._createCatalogLayerList(e7) : await this._createTableList(e7);
    return t3.aborted || i3.set(e7, s5), s5;
  }
  async _handleOpenedLayersChange() {
    var _a;
    const { _layerListMap: e7, openedLayers: t3, openedLayerLists: i3 } = this;
    (_a = this._openedLayersController) == null ? void 0 : _a.abort();
    const o = new AbortController(), { signal: s5 } = o;
    this._openedLayersController = o, e7.forEach((i4, o2) => {
      t3.includes(o2) || (i4.destroy(), e7.delete(o2));
    });
    const l5 = await Promise.all(t3.map((e8) => this._createFlowList(e8, s5)));
    if (s5.aborted) return;
    i3.removeAll(), i3.addMany(l5);
    const r2 = i3.at(-1);
    r2 ? "catalogLayer" in r2 ? (this._set("catalogLayerList", r2), this._set("tableList", null)) : (this._set("catalogLayerList", null), this._set("tableList", r2)) : (this._set("catalogLayerList", null), this._set("tableList", null));
  }
  _destroyOpenedLayerLists() {
    this.openedLayerLists.destroyAll(), this.openedLayers.removeAll(), this._layerListMap.clear();
  }
  _renderItemTooltip(e7) {
    var _a, _b;
    const { _tooltipReferenceMap: t3, messages: i3 } = this;
    return e7 ? n("calcite-tooltip", { key: `tooltip-${(_a = e7.layer) == null ? void 0 : _a.uid}`, overlayPositioning: "fixed", referenceElement: t3.get((_b = e7.layer) == null ? void 0 : _b.uid) }, i3.layerIncompatibleTooltip) : null;
  }
  _renderItemTooltipNodes(e7) {
    var _a;
    return e7.incompatible ? this._renderItemTooltip(e7) : (_a = e7.children) == null ? void 0 : _a.filter((e8) => !e8.hidden).toArray().map((e8) => this._renderItemTooltipNodes(e8));
  }
  _renderItemTooltips() {
    var _a;
    return (_a = this._visibleItems) == null ? void 0 : _a.toArray().map((e7) => this._renderItemTooltipNodes(e7));
  }
  _renderNoItemsMessage() {
    return n("div", { slot: "message" }, this.messages.noItemsToDisplay);
  }
  _renderNoItems() {
    return n("div", { class: e6.itemMessage, key: "esri-layer-list__no-items" }, n("calcite-notice", { icon: "information", kind: "info", open: true, width: "full" }, this._renderNoItemsMessage()));
  }
  async _createCatalogLayerList(e7) {
    const { default: t3 } = await import("./CatalogLayerList-3AVVMVMW.js"), { headingLevel: i3, catalogOptions: o, view: s5, filterPlaceholder: l5, listItemCreatedFunction: r2, minFilterItems: a4, selectionMode: n2, visibilityAppearance: d, _onCatalogOpen: p2, _onTablesOpen: c4, layerTablesEnabled: m4 } = this;
    return new t3({ headingLevel: i3, view: s5, filterPlaceholder: l5, listItemCreatedFunction: r2, minFilterItems: a4, selectionMode: n2, visibilityAppearance: d, ...o, catalogLayer: e7, layerTablesEnabled: m4, onCatalogOpen: p2, onTablesOpen: c4 });
  }
  _getTableListParams(e7) {
    switch (e7.type) {
      case "knowledge-graph":
        return { ...this.knowledgeGraphOptions, tables: e7.tables };
      case "map-image":
        return { ...this.mapImageOptions, tables: e7.subtables };
      case "tile":
        return { ...this.tileOptions, tables: e7.subtables };
      default:
        return null;
    }
  }
  async _createTableList(e7) {
    const { default: t3 } = await import("./TableList-OP4OTFBO.js"), { headingLevel: i3, selectionMode: o, dragEnabled: s5 } = this;
    return new t3({ headingLevel: i3, selectionMode: o, dragEnabled: s5, ...this._getTableListParams(e7) });
  }
  _renderLayerFlowItem(e7, t3) {
    var _a;
    const { messages: i3, openedLayers: o } = this, s5 = e7.title || this.messages.untitledLayer;
    return n("calcite-flow-item", { afterCreate: this._focusLayerFlowItemNode, afterUpdate: this._focusLayerFlowItemNode, bind: this, "data-layer-uid": e7.uid, description: s5, heading: i3["catalog" === e7.type ? "catalogLayers" : "tables"], headingLevel: this.headingLevel, key: `flow-layer-list-${e7.uid}`, selected: t3, onCalciteFlowItemBack: (e8) => {
      e8.preventDefault(), o.pop();
      const t4 = o.at(-1);
      t4 ? this._focusLayerFlowItem = t4.uid : this._focusRootFlowItem = true;
    } }, (_a = this._layerListMap.get(e7)) == null ? void 0 : _a.render());
  }
  _renderPanelFlowItems() {
    const { _openedPanelItems: e7, openedLayers: t3 } = this;
    return e7.toArray().map(({ title: i3, panel: o }, s5) => {
      const l5 = () => this._handlePanelFlowItemBack(o);
      return n("calcite-flow-item", { afterCreate: this._focusPanelFlowItemNode, afterUpdate: this._focusPanelFlowItemNode, bind: this, description: i3, heading: o.title, headingLevel: this.headingLevel, key: `flow-panel-${o.uid}`, selected: !t3.length && s5 === e7.length - 1, onCalciteFlowItemBack: (e8) => {
        e8.preventDefault(), l5();
      } }, o.render(), n("calcite-button", { appearance: "transparent", onclick: l5, slot: "footer-actions", width: "full" }, this.messagesCommon.back));
    });
  }
  _handlePanelFlowItemBack(e7) {
    e7.open = false, this._focusRootFlowItem = true;
  }
  _focusRootFlowItemNode(e7) {
    this._focusRootFlowItem && (this._focusRootFlowItem = false, j(e7));
  }
  _focusLayerFlowItemNode(e7) {
    this._focusLayerFlowItem === e7.dataset.layerUid && (this._focusLayerFlowItem = null, j(e7));
  }
  _focusPanelFlowItemNode(e7) {
    this._focusPanelFlowItem && (this._focusPanelFlowItem = false, j(e7));
  }
  _renderItems() {
    const { visible: e7, collapsed: t3, _visibleItems: i3, _openedPanelItems: o, _filterEnabled: s5, _rootGroupUid: l5, visibleElements: { closeButton: r2, collapseButton: a4, heading: n2, flow: d }, _dragEnabled: c4, selectionMode: m4, filterText: h3, openedLayers: y2, filterPlaceholder: u2, messages: g2 } = this, _ = [n("calcite-flow-item", { afterCreate: this._focusRootFlowItemNode, afterUpdate: this._focusRootFlowItemNode, bind: this, closable: r2, closed: !e7, collapsed: t3, collapsible: a4, heading: n2 ? g2.widgetLabel : void 0, headingLevel: this.headingLevel, key: "root-flow-item", selected: !y2.length && !o.length, onCalciteFlowItemClose: () => this.visible = false }, (i3 == null ? void 0 : i3.length) ? null : this._renderNoItems(), n("calcite-list", { afterCreate: (e8) => {
      this._rootListEl = e8, e8.addEventListener("focusin", this._setActiveItem), e8.addEventListener("focusout", this._clearActiveItem);
    }, afterRemoved: (e8) => {
      this._rootListEl = null, e8.removeEventListener("focusin", this._setActiveItem), e8.removeEventListener("focusout", this._clearActiveItem);
    }, canPull: (e8) => this._canMove(e8, "pull"), canPut: (e8) => this._canMove(e8, "put"), "data-layer-type": l5, displayMode: A, dragEnabled: c4, filterEnabled: s5, filterPlaceholder: u2, filterProps: t, filterText: s5 ? h3 : "", group: l5, key: "root-list", label: g2.widgetLabel, onmouseleave: this._clearActiveItem, onmouseover: this._setActiveItem, selectionAppearance: "border", selectionMode: m4, onCalciteListChange: (e8) => this._handleCalciteListChange(e8), onCalciteListDragEnd: (e8) => this._handleCalciteListDragEnd(e8.detail), onCalciteListFilter: (e8) => {
      var _a;
      return this.filterText = ((_a = e8.currentTarget) == null ? void 0 : _a.filterText) ?? "";
    }, onCalciteListOrderChange: (e8) => this._onCalciteListOrderChange(e8.detail) }, i3.toArray().map((e8) => this._renderItem(e8)), s5 ? n("div", { class: e6.filterNoResults, slot: "filter-no-results" }, n("calcite-notice", { kind: "info", open: true, width: "full" }, this._renderNoItemsMessage())) : null)), this._renderPanelFlowItems(), this._renderedOpenLayerFlowItems];
    return e7 ? d ? n("calcite-flow", { key: "root-flow" }, _) : _ : null;
  }
  _renderItem(e7, t3, i3) {
    var _a;
    return n(C, { activeItem: this._activeItem, canMove: this._canMove, css: e6, displayMode: A, dragEnabled: this.dragEnabled, item: e7, key: `layerListItem-${(_a = e7.layer) == null ? void 0 : _a.uid}`, layerTablesEnabled: this.layerTablesEnabled, listModeDisabled: this.viewModel.listModeDisabled, messages: this.messages, messagesCommon: this.messagesCommon, parent: t3, parentTitles: i3, rootGroupUid: this._rootGroupUid, selectedDragItemLayerUid: this._selectedDragItemLayerUid, selectedItems: this.selectedItems, selectionMode: this.selectionMode, visibilityAppearance: this.visibilityAppearance, visibleElements: this.visibleElements, onAction: this._onTriggerAction, onCatalogOpen: this._onCatalogOpen, onPanelOpen: this._onPanelOpen, onSelectedDragItemLayerUidChange: this._onSelectedDragItemLayerUidChange, onTablesOpen: this._onTablesOpen, onTooltipReferenceChange: this._onTooltipReferenceChange });
  }
  _moveLayerFromChildList({ toEl: e7, fromEl: t3, dragEl: i3, newIndex: o }) {
    const s5 = N(i3), l5 = N(e7), r2 = N(t3);
    this.viewModel.moveListItem(s5, r2, l5, o);
  }
  _handleCalciteListDragEnd(e7) {
    const { fromEl: t3, dragEl: i3, oldIndex: o } = e7;
    t3.insertBefore(i3, t3.children[o]);
  }
  _sortLayers(e7, t3) {
    var _a, _b;
    if (e7) if (e7 === this._rootListEl) v((_b = (_a = this.view) == null ? void 0 : _a.map) == null ? void 0 : _b.layers, t3);
    else {
      const i3 = N(e7);
      if (!i3) return;
      h2(i3, t3);
    }
  }
  _handleCalciteListChange(e7) {
    const { selectionMode: t3, selectedItems: i3 } = this;
    if ("none" === t3) return;
    const o = e7.target.selectedItems.map((e8) => N(e8)).filter(Boolean);
    i3.removeAll(), i3.addMany(o);
  }
};
__decorate([m()], j2.prototype, "_rootListEl", void 0), __decorate([m()], j2.prototype, "_activeItem", void 0), __decorate([m()], j2.prototype, "_tooltipReferenceMap", void 0), __decorate([m()], j2.prototype, "_focusRootFlowItem", void 0), __decorate([m()], j2.prototype, "_focusPanelFlowItem", void 0), __decorate([m()], j2.prototype, "_focusLayerFlowItem", void 0), __decorate([m()], j2.prototype, "_layerListMap", void 0), __decorate([m()], j2.prototype, "_totalItems", null), __decorate([m()], j2.prototype, "_visibleItems", null), __decorate([m()], j2.prototype, "_openedPanelItems", null), __decorate([m()], j2.prototype, "_dragEnabled", null), __decorate([m()], j2.prototype, "_filterEnabled", null), __decorate([m()], j2.prototype, "_renderedOpenLayerFlowItems", null), __decorate([m({ readOnly: true })], j2.prototype, "catalogLayerList", void 0), __decorate([m()], j2.prototype, "catalogOptions", void 0), __decorate([m()], j2.prototype, "collapsed", void 0), __decorate([m()], j2.prototype, "dragEnabled", void 0), __decorate([m()], j2.prototype, "filterPlaceholder", void 0), __decorate([m()], j2.prototype, "filterPredicate", void 0), __decorate([m()], j2.prototype, "filterText", void 0), __decorate([m()], j2.prototype, "headingLevel", void 0), __decorate([m()], j2.prototype, "icon", null), __decorate([m()], j2.prototype, "knowledgeGraphOptions", void 0), __decorate([m()], j2.prototype, "label", null), __decorate([m()], j2.prototype, "layerTablesEnabled", void 0), __decorate([m()], j2.prototype, "listItemCanGiveFunction", void 0), __decorate([m()], j2.prototype, "listItemCanReceiveFunction", void 0), __decorate([m()], j2.prototype, "listItemCreatedFunction", null), __decorate([m()], j2.prototype, "mapImageOptions", void 0), __decorate([m(), e("esri/widgets/LayerList/t9n/LayerList")], j2.prototype, "messages", void 0), __decorate([m(), e("esri/t9n/common")], j2.prototype, "messagesCommon", void 0), __decorate([m()], j2.prototype, "minDragEnabledItems", void 0), __decorate([m()], j2.prototype, "minFilterItems", void 0), __decorate([m({ readOnly: true })], j2.prototype, "openedLayers", void 0), __decorate([m({ readOnly: true })], j2.prototype, "openedLayerLists", void 0), __decorate([m()], j2.prototype, "operationalItems", null), __decorate([m()], j2.prototype, "selectedItems", void 0), __decorate([m()], j2.prototype, "selectionMode", void 0), __decorate([m({ readOnly: true })], j2.prototype, "tableList", void 0), __decorate([m()], j2.prototype, "tileOptions", void 0), __decorate([m()], j2.prototype, "view", null), __decorate([e3("trigger-action"), m({ type: v2 })], j2.prototype, "viewModel", void 0), __decorate([m()], j2.prototype, "visibilityAppearance", void 0), __decorate([m({ type: l4, nonNullable: true })], j2.prototype, "visibleElements", void 0), j2 = __decorate([a2("esri.widgets.LayerList")], j2);
var D = j2;

// node_modules/@arcgis/map-components/dist/chunks/layer-list.js
var r = css`@keyframes esri-basemap-slide{0%{opacity:0;margin-top:0;margin-left:0}75%{opacity:0;margin-top:0;margin-left:0}to{opacity:1;margin-top:5px;margin-left:5px}}@keyframes esri-docking-animation{0%{opacity:0}25%{opacity:0}to{opacity:1}}@keyframes popup-intro-animation-down{0%{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translate(0)}}@keyframes popup-intro-animation-up{0%{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translate(0)}}@supports (-ms-ime-align: auto){.esri-slider__anchor:focus{outline:1px dotted #000}}@keyframes esri-spinner--start-animation{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}@keyframes esri-spinner--finish-animation{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0)}}@keyframes esri-spinner--rotate-animation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@media (prefers-reduced-motion){.esri-utility-network-trace__reset-prompt{animation:none!important}}@media (prefers-reduced-motion){.esri-popup--aligned-top-center,.esri-popup--aligned-top-left,.esri-popup--aligned-top-right,.esri-popup--aligned-bottom-center,.esri-popup--aligned-bottom-left,.esri-popup--aligned-bottom-right,.esri-popup--is-docked{animation:none!important}}@media (prefers-reduced-motion: reduce){.esri-fov-overlay{animation:none!important}}@keyframes esri-fade-in-down{0%{opacity:0;transform:translateY(-5px)}25%{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translate(0)}}@keyframes esri-fade-in-up{0%{opacity:0;transform:translateY(5px)}25%{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translate(0)}}@keyframes esri-fade-in{0%{opacity:0}25%{opacity:0}to{opacity:1}}@keyframes esri-fade-in-scale{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@keyframes looping-progresss-bar-ani{0%{width:0;left:0}20%{width:20%;left:0}80%{width:20%;left:80%}to{width:0;left:100%}}@keyframes esri-rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes panel-advance{0%{opacity:0;transform:translate(50px) scale(.99)}to{opacity:1;transform:translate(0) scale(1)}}@keyframes panel-retreat{0%{opacity:0;transform:translate(-50px) scale(.99)}to{opacity:1;transform:translate(0) scale(1)}}@keyframes panel-advance--rtl{0%{opacity:0;transform:translate(-50px) scale(.99)}to{opacity:1;transform:translate(0) scale(1)}}@keyframes panel-retreat--rtl{0%{opacity:0;transform:translate(50px) scale(.99)}to{opacity:1;transform:translate(0) scale(1)}}.esri-widget__heading{color:var(--calcite-color-text-2);margin:0 0 .5rem;font-weight:var(--calcite-font-weight-semibold)}h1.esri-widget__heading{font-size:var(--calcite-font-size-xl)}h2.esri-widget__heading{font-size:var(--calcite-font-size-md)}h3.esri-widget__heading,h4.esri-widget__heading,h5.esri-widget__heading,h6.esri-widget__heading{font-size:var(--calcite-font-size)}.esri-widget{--esri-widget-padding-x: 15px;--esri-widget-padding-y: var(--calcite-spacing-md);--esri-widget-padding: var(--esri-widget-padding-y) var(--esri-widget-padding-x);box-sizing:border-box;color:var(--calcite-color-text-2);background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size);line-height:var(--calcite-font-line-height-relative-tight)}.esri-widget *,.esri-widget :before,.esri-widget :after{box-sizing:inherit}.esri-widget.esri-widget--disabled>*{opacity:.4;pointer-events:none}.esri-widget.esri-widget--compact{--esri-widget-padding-y: 0;--esri-widget-padding-x: 0}.esri-widget__anchor{color:var(--calcite-color-text-2)}.esri-widget__anchor:hover{color:var(--calcite-color-text-3)}.esri-widget__anchor:hover,.esri-widget__anchor:focus{text-decoration:underline}.esri-widget__anchor--disabled{opacity:.4;pointer-events:none}.esri-widget__header{background-color:var(--calcite-color-foreground-1);flex:1 0 100%;justify-content:space-between;align-items:center;width:100%;min-height:48px;padding:12px 0 12px 15px;display:flex}.esri-widget__header .esri-widget__heading{width:calc(100% - 48px);text-align:initial;color:var(--calcite-color-text-1);align-items:center;margin:0;padding:0;display:flex}.esri-widget__header-button{appearance:none;cursor:pointer;color:var(--calcite-color-text-2);background-color:var(--calcite-color-foreground-1);border:none;flex:0 0 48px;justify-content:center;align-self:stretch;align-items:center;width:48px;padding:0;display:flex}.esri-widget__footer{background-color:var(--calcite-color-foreground-1);justify-content:center;align-items:center;width:100%;min-height:48px;display:flex}.esri-widget__footer-pagination{color:var(--calcite-color-text-2);justify-content:space-between;align-items:center;display:flex}.esri-widget__footer-pagination-previous-button,.esri-widget__footer-pagination-next-button{cursor:pointer;background-color:var(--calcite-color-foreground-1);border:0;margin:0 7px;padding:12px 15px;transition:background-color .125s ease-in-out}.esri-widget__footer-pagination-previous-button:hover,.esri-widget__footer-pagination-previous-button:focus,.esri-widget__footer-pagination-next-button:hover,.esri-widget__footer-pagination-next-button:focus{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-1)}.esri-menu{visibility:hidden;z-index:1;background-clip:padding;background-color:var(--calcite-color-foreground-1);background-clip:padding-box;width:100%;max-height:0;margin:2px 0 0;padding:0;font-size:var(--calcite-font-size);line-height:var(--calcite-spacing-xl);position:absolute;top:100%;left:0;overflow:hidden;box-shadow:0 1px 2px #0000004d}.esri-menu .esri-menu__header{color:var(--calcite-color-text-inverse);background-color:var(--calcite-color-inverse);padding:6px 12px}.esri-menu__list{margin:0;padding:0;list-style:none}.esri-menu__list-item{cursor:pointer;border-top:1px solid #adadad4d;border-left:3px solid #0000;padding:.8em 1em}.esri-menu__list-item [class^=esri-icon-],.esri-menu__list-item [class*=" esri-icon-"]{padding-right:2.8px}.esri-menu__list-item:first-child{border-top:none}.esri-menu__list-item--focus,.esri-menu__list-item:hover,.esri-menu__list-item:focus{background-color:var(--calcite-color-foreground-1)}.esri-menu__list-item:active{background-color:var(--calcite-color-foreground-current)}.esri-menu__list-item--active,.esri-menu__list-item--active:hover,.esri-menu__list-item--active:focus{background-color:var(--calcite-color-foreground-1);border-left-color:var(--calcite-color-brand)}.esri-widget__table{border-collapse:collapse;color:var(--calcite-color-text-1);border:none;width:100%;line-height:var(--calcite-font-line-height-relative-tight)}.esri-widget__table tr:nth-child(odd){background-color:var(--calcite-color-transparent)}.esri-widget__table tr:nth-child(2n){background-color:var(--calcite-color-transparent-press)}.esri-widget__table tr a{color:var(--calcite-color-text-2)}.esri-widget__table tr a:hover,.esri-widget__table tr a:focus{color:var(--calcite-color-text-1)}.esri-widget__table tr td,.esri-widget__table tr th{vertical-align:top;word-break:break-word;padding:.5em .7em;font-size:var(--calcite-font-size-sm);font-weight:var(--calcite-font-weight-regular)}.esri-widget__table tr th{text-align:left;border-right:3px solid #0000000d;width:50%}.esri-widget__table tr td{width:50%}.esri-input{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-1);border:1px solid #959595;font-size:var(--calcite-font-size)}.esri-input::-ms-clear{display:none}.esri-input::placeholder{opacity:1;color:var(--calcite-color-text-2)}.esri-input:placeholder-shown{text-overflow:ellipsis}.esri-input[type=text],.esri-input[type=password],.esri-input[type=number]{height:32px;padding:0 .5em}calcite-combobox.esri-input{border:none}.esri-widget__content--empty{text-align:center;color:var(--calcite-color-border-input);flex-flow:column wrap;align-items:center;padding:18px 22px;display:flex}.esri-widget__content--empty h1.esri-widget__heading,.esri-widget__content--empty h2.esri-widget__heading,.esri-widget__content--empty h3.esri-widget__heading,.esri-widget__content--empty h4.esri-widget__heading,.esri-widget__content--empty h5.esri-widget__heading{font-weight:var(--calcite-font-weight-regular)}.esri-widget__content-illustration--empty{width:128px;padding:1rem 0}.esri-widget__content-icon--empty{width:32px;padding:.5rem 0}.esri-select{appearance:none;cursor:pointer;color:var(--calcite-color-text-2);background:var(--calcite-color-foreground-1) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-8 -8 32 32' width='32' height='32'%3E%3Cpath d='M8 11.207l-4-4V5.793l4 4 4-4v1.414z' fill='%23adadad' fillrule='nonzero'/%3E%3C/svg%3E") 100% no-repeat;border:1px solid #959595;border-radius:0;width:100%;height:32px;margin:0;padding:0 .5em;font-family:inherit;font-size:.85em;display:block}.esri-select[disabled]{cursor:auto}.esri-select::-ms-expand{display:none}.esri-disabled a,.esri-disabled [role=menu],.esri-disabled [role=checkbox],.esri-disabled [class^=esri-icon-],.esri-disabled [class*=" esri-icon-"]{color:var(--calcite-color-text-3)}.keynav-mode .esri-widget:focus,.keynav-mode .esri-widget :focus{z-index:1;outline-offset:2px;outline:2px solid #adadad}.esri-widget__loader-animation{border:.15em solid #adadad4d;border-top-color:var(--calcite-color-border-input);border-radius:100%;width:1em;height:1em;font-size:var(--calcite-font-size-md);animation:1.25s linear infinite esri-rotate;display:block;transform:translateZ(0)}:dir(rtl) .esri-widget__table th{text-align:right;border-left:3px solid #0000000d;border-right:none}:dir(rtl) .esri-select{background-position:0}:dir(rtl) .esri-menu__list-item{border-left:none;border-right:3px solid #0000}:dir(rtl) .esri-menu__list-item [class^=esri-icon-],:dir(rtl) .esri-menu__list-item [class*=" esri-icon-"]{padding-left:2px;padding-right:0}:dir(rtl) .esri-menu__list-item--active{border-right-color:var(--calcite-color-brand)}.esri-icon-font-fallback-text{clip:rect(0 0 0 0);width:1px;height:1px;position:absolute;overflow:hidden}.esri-rotating{animation:1.25s linear infinite esri-rotate;transform:translateZ(0)}.esri-clearfix:before,.esri-clearfix:after{content:" ";display:table}.esri-clearfix:after{clear:both}.esri-interactive{cursor:pointer}.esri-hidden{display:none!important}.esri-invisible{visibility:hidden!important}.esri-offscreen{position:absolute;top:-999em;left:-999em}.esri-match-height{flex-direction:column;flex:auto;display:flex;overflow:hidden}.esri-legend{overflow:hidden;overflow-y:auto}.esri-legend__message{padding:.5em 1em}.esri-legend__service{border-bottom:1px solid rgba(110,110,110,.3);padding:var(--esri-widget-padding);word-wrap:break-word}.esri-legend__service:last-child{border-bottom:none}.esri-legend__layer{margin-left:7px;overflow:auto}.esri-legend__group-layer-child{margin-left:7px;padding-right:0;padding-left:0}.esri-legend__layer-table{display:flex;flex-flow:column;margin-bottom:12px;width:100%}.esri-legend__layer-child-table{display:table;margin-bottom:12px;width:100%;border-collapse:collapse}.esri-legend__layer-body{margin-left:7px}.esri-legend__layer-row{display:flex}.esri-legend__layer-cell{padding:4px 0;min-width:100px;vertical-align:middle;word-break:break-word}.esri-legend__layer-cell--symbols{min-width:10px;text-align:center}.esri-legend--card__color-ramp-container{justify-content:center}.esri-legend__layer-table--size-ramp{display:table}.esri-legend__layer-table--size-ramp .esri-legend__layer-row{display:table-row}.esri-legend__layer-table--size-ramp .esri-legend__layer-cell{display:table-cell}.esri-legend__size-ramp~.esri-legend__layer-cell--info{width:80%;max-width:80%}.esri-legend__layer-cell--info{padding-right:7px;padding-left:7px;max-width:250px;word-break:normal;word-wrap:normal;font-size:var(--calcite-font-size-sm)}.esri-legend__imagery-layer-image--stretched{display:block;margin-bottom:-2px}.esri-legend__imagery-layer-cell--stretched{padding:0;vertical-align:top;line-height:1}.esri-legend__imagery-layer-info--stretched{padding:0 2px;vertical-align:top}.esri-legend__symbol{display:flex;justify-content:center}.esri-legend__layer-caption{display:table-caption;padding:6px 0;word-break:break-word}.esri-legend__ramp-labels{display:flex;flex-flow:column nowrap;justify-content:space-between}.esri-legend__ramps{margin-left:3px}.esri-legend__color-ramp{width:24px}.esri-legend__opacity-ramp{background-image:url(../base/images/transparent-bg.png)}.esri-legend__ramp-tick{position:absolute;right:1px;left:auto;border-top:1px solid rgba(110,110,110,.3);width:4px;line-height:0}.esri-legend__ramp-label{position:relative;padding:0 7px;line-height:1em;white-space:nowrap;font-size:var(--calcite-font-size-sm)}.esri-legend__ramp-label:before{display:block;position:absolute;top:.25em;right:100%;border-width:3px 4px 3px 0;border-style:solid;border-color:transparent rgba(50,50,50,.8) transparent transparent;width:0;height:0;content:""}.esri-legend__ramp-label:first-child{margin-top:-4px}.esri-legend__ramp-label:last-child{bottom:-3px}.esri-legend-layer-caption{display:table-caption;padding:6px 0}:dir(rtl) .esri-legend__ramp-label:before{right:auto;left:100%;border-width:3px 0 3px 4px;border-color:transparent transparent transparent rgba(50,50,50,.8)}:dir(rtl) .esri-legend__layer,:dir(rtl) .esri-legend__group-layer-child,:dir(rtl) .esri-legend__layer-body{margin-right:7px;margin-left:0;overflow:auto}:dir(rtl) .esri-legend__ramps{margin-right:3px;margin-left:auto}.esri-legend--card{display:flex;position:relative;transition:max-width .25s ease-in-out;background:#fff;overflow-x:auto}.esri-legend--card__section{white-space:pre-wrap;word-break:break-word;word-wrap:break-word;border-left:1px solid rgba(110,110,110,.3);padding:12px 15px;min-width:300px;overflow:auto;font-size:var(--calcite-font-size-sm)}.esri-legend--card__section:first-child{border-left:none}.esri-legend--card__message{padding:.5em 1em}.esri-legend--card__service-caption-container{border-bottom:1px solid rgba(110,110,110,.3);padding:12px 15px;height:45px;font-weight:var(--calcite-font-weight-semibold)}.esri-legend--card__service-caption-text{margin:0;padding-bottom:20px;overflow:auto}.esri-legend--card__layer-caption{margin-bottom:12px;padding:6px 0;font-weight:var(--calcite-font-weight-normal)}.esri-legend--card__service-content{display:flex;height:calc(100% - 45px)}.esri-legend--card__label-container{display:flex;flex-wrap:wrap}.esri-legend--card__relationship-label-container{display:flex;flex-direction:column}.esri-legend--card__relationship-label-container .esri-legend--card__layer-row{padding-bottom:.5em}.esri-legend--card__relationship-label-container .esri-legend--card__layer-row:last-child{padding-bottom:0}.esri-legend--card__relationship-section{border:none}.esri-legend--card__label-element{margin:.1em;padding:.5em 1em;min-width:4em;min-height:2.7em;text-align:center}.esri-legend--card__image-label{padding-right:7px;padding-left:7px}.esri-legend--card__layer-row,.esri-legend--card__size-ramp-container{display:flex;align-items:center}.esri-legend--card__size-ramp-preview{display:flex}.esri-legend--card__ramp-label{margin:0 .5em;white-space:nowrap}.esri-legend--card__pie-chart-ramp-preview{display:flex;justify-content:center}.esri-legend--card__interval-separator{text-align:center;font-size:.5em}.esri-legend--card__imagery-layer-image--stretched{display:block;margin-bottom:-2px}.esri-legend--card__symbol-container{position:relative}.esri-legend--card__interval-separators-container{position:absolute;top:50px;left:50%;transform:translate(-50%,-50%)}.esri-legend--card__carousel-title{margin:0}.esri-legend--card__service{border-left:1px solid rgba(110,110,110,.3);min-width:fit-content}.esri-legend--card__symbol{display:block;margin:auto}.esri-legend--stacked{display:flex;flex-direction:column;min-width:300px}.esri-legend--stacked .esri-legend--card__carousel{width:300px;max-height:420px}.esri-legend--stacked .esri-legend--card__carousel-item{max-height:388px}.esri-legend--stacked calcite-carousel-item[selected]{flex:1}.esri-legend--stacked .esri-legend--card__section{box-sizing:border-box;border:none;width:100%;min-width:unset;height:auto;overflow:auto}.esri-legend--stacked .esri-legend--card__size-ramp-row{flex-direction:column}.esri-legend--stacked .esri-legend--card__symbol-row{display:table-row;margin:5px 0;width:100%}.esri-legend--stacked .esri-legend--card__label-cell{display:table-cell;vertical-align:middle}.esri-legend--stacked .esri-legend--card__symbol-cell{display:table-cell;vertical-align:middle;text-align:center}.esri-legend--stacked .esri-legend--card__carousel-indicator-container{display:flex;justify-content:center;box-shadow:0 -1px #6e6e6e4d;width:300px;height:32px;overflow:auto}.esri-legend--stacked .esri-legend--card__carousel-indicator{display:flex;align-items:center;justify-content:center;cursor:pointer;width:16px;height:auto}.esri-legend--stacked .esri-legend--card__carousel-indicator:before{display:block;transition:background-color 125ms ease-in-out;border-radius:50%;box-shadow:0 0 0 1px #6e6e6e;background-color:transparent;width:10px;height:10px;content:""}.esri-legend--stacked .esri-legend--card__carousel-indicator:hover:before,.esri-legend--stacked .esri-legend--card__carousel-indicator--activated:before,.esri-legend--stacked .esri-legend--card__carousel-indicator--activated:hover:before{background-color:var(--calcite-color-text-3)}.esri-ui-corner{max-width:100%}.esri-ui-corner .esri-legend--card{max-height:420px}:dir(rtl) .esri-view-width-greater-than-small .esri-legend--card__section{border-right:1px solid rgba(110,110,110,.3);border-left:0}:dir(rtl) .esri-view-width-greater-than-small .esri-legend--card__section:first-child{border-right:none}.esri-relationship-ramp--diamond__container{display:flex;font-size:var(--calcite-font-size-sm)}.esri-relationship-ramp--diamond__left-column{align-self:center;padding-right:5px;max-width:85px;text-align:right}.esri-relationship-ramp--diamond__right-column{align-self:center;padding-left:5px;max-width:85px;text-align:left}.esri-relationship-ramp--diamond__middle-column{display:flex;flex-direction:column;text-align:center}.esri-relationship-ramp--diamond__middle-column--label{align-self:center;max-width:85px}.esri-relationship-ramp--diamond__middle-column--ramp{width:85px;height:85px}.esri-relationship-ramp--square__table{display:table;font-size:var(--calcite-font-size-sm)}.esri-relationship-ramp--square__table-row{display:table-row}.esri-relationship-ramp--square__table-cell{display:table-cell}.esri-relationship-ramp--square__table-label{max-width:95px}.esri-relationship-ramp--square__table-label--left-bottom{vertical-align:bottom;text-align:left}.esri-relationship-ramp--square__table-label--right-bottom{vertical-align:bottom;text-align:right}.esri-relationship-ramp--square__table-label--left-top{vertical-align:top;text-align:left}.esri-relationship-ramp--square__table-label--right-top{vertical-align:top;text-align:right}.esri-univariate-above-and-below-ramp__symbol{display:flex;align-items:center;justify-content:center}.esri-univariate-above-and-below-ramp__label{position:relative;margin-left:7px;line-height:1em;white-space:nowrap;font-size:var(--calcite-font-size-sm)}.esri-univariate-above-and-below-ramp__label:before{display:block;position:absolute;top:.45em;left:-19px;border-width:1px 0 0;border-style:solid;width:14px;height:0;content:""}.esri-univariate-above-and-below-ramp__label:first-child{top:-6px}.esri-univariate-above-and-below-ramp__label:last-child{bottom:-6px}.esri-univariate-above-and-below-ramp__color--card{position:relative}.esri-univariate-above-and-below-ramp__color--card:before{display:block;position:absolute;top:1px;border-right:1px solid #000;border-left:1px solid #000;width:100%;height:15px;content:""}:dir(rtl) .esri-univariate-above-and-below-ramp__label{margin-right:7px;margin-left:auto}:dir(rtl) .esri-univariate-above-and-below-ramp__label:before{right:-19px;left:auto}.esri-spike-ramp__container{display:flex;flex-direction:row;gap:var(--calcite-spacing-sm-plus);margin-left:var(--calcite-spacing-sm)}.esri-spike-ramp__preview-container{display:flex;position:relative;gap:var(--calcite-spacing-sm-plus);border-bottom:var(--calcite-border-width-sm) solid var(--calcite-color-border-2);padding:0 var(--calcite-spacing-xl)}.esri-spike-ramp__preview{display:flex;gap:var(--calcite-spacing-sm-plus);align-items:end}.esri-spike-ramp__symbol-preview{display:flex}.esri-spike-ramp__lines{display:flex;position:absolute;bottom:0}.esri-spike-ramp__labels-container{display:flex;position:relative;top:-5px;flex:1;min-width:120px}.esri-spike-ramp__label{position:relative;padding:0 7px;line-height:1em;word-break:break-all;font-size:var(--calcite-font-size-sm)}.esri-spike-ramp__label:before{display:block;position:absolute;top:.25em;right:100%;border-width:3px 4px 3px 0;border-style:solid;border-color:transparent rgba(50,50,50,.8) transparent transparent;width:0;height:0;content:""}.esri-item-list{width:100%}.esri-item-list__filter-container--sticky{z-index:1;position:sticky;top:0}.esri-item-list__group{margin-top:var(--calcite-spacing-md)}.esri-item-list__scroller{overflow-y:auto}.esri-ui .esri-item-list__scroller{z-index:0;position:relative}.esri-ui .esri-item-list__scroller--enabled{max-height:420px}.esri-item-list__group__header{color:var(--calcite-color-text-2);font-weight:var(--calcite-font-weight-medium)}.esri-item-list__list-item{cursor:pointer;min-height:var(--calcite-spacing-xxxl)}.esri-item-list__list-item[class^=esri-icon-],.esri-item-list__list-item[class*=" esri-icon-"]{padding-inline-end:2.8px}.esri-item-list__list-item--disabled{cursor:default}.esri-item-list__list-item-icon{justify-content:center;align-items:center;min-width:var(--calcite-spacing-xxxl);height:var(--calcite-spacing-xxxl);display:flex}.esri-item-list__list-item-icon span{line-height:0}.esri-thumbnail-preview{background-position:50%;width:22px;height:22px}.esri-item-list__no-matches-message{justify-content:center;align-items:center;height:96px;display:flex}.esri-layer-list{display:flex;width:100%}.esri-layer-list__filter-no-results{padding:var(--calcite-spacing-md) 15px}.esri-layer-list__item{--calcite-list-item-icon-center: 8.5px}.esri-layer-list__item-table-icon,.esri-layer-list__item-catalog-icon{margin-inline-end:0}.esri-layer-list__item-action-image{text-align:center;background-position:50%;background-repeat:no-repeat;background-size:contain;flex:0 0 var(--calcite-spacing-xl);width:var(--calcite-spacing-xl);height:var(--calcite-spacing-xl);font-size:var(--calcite-font-size)}.esri-layer-list__action-menu .esri-layer-list__action-group{display:none}.esri-layer-list__action-menu[open] .esri-layer-list__action-group{display:flex}.esri-layer-list__visible-icon{visibility:hidden}.esri-layer-list__item--active:hover>.esri-layer-list__visible-toggle>.esri-layer-list__visible-icon,.esri-layer-list__item--active:focus>.esri-layer-list__visible-toggle>.esri-layer-list__visible-icon,.esri-layer-list__item--active:focus-within>.esri-layer-list__visible-toggle>.esri-layer-list__visible-icon{visibility:visible}.esri-layer-list__status-indicator{visibility:hidden;color:var(--calcite-color-text-1);margin-inline:0}.esri-layer-list__publishing{visibility:visible;color:var(--calcite-color-text-2);transform-origin:var(--calcite-list-item-icon-center) var(--calcite-list-item-icon-center);animation:2s infinite esri-layer-list__publishing-anim}.esri-layer-list__updating{visibility:visible;animation:2s infinite esri-layer-list__updating-anim}.esri-layer-list__connection-status{visibility:visible;color:var(--calcite-color-status-warning);width:var(--calcite-spacing-xl);height:var(--calcite-spacing-xl);margin-inline:7px}.esri-layer-list__connection-status--connected{color:var(--calcite-color-status-success)}.esri-layer-list__item-content-bottom{margin:var(--calcite-spacing-md) 15px}.esri-layer-list__item-content-bottom .esri-legend__service{padding:0 0 var(--calcite-spacing-md)}.esri-layer-list__item-message{margin:var(--calcite-spacing-md) 15px}@keyframes esri-layer-list__updating-anim{0%,40%{color:var(--calcite-color-foreground-1)}50%,80%{color:var(--calcite-color-brand)}to{color:var(--calcite-color-foreground-1)}}@keyframes esri-layer-list__publishing-anim{0%,20%{transform:rotate(45deg)}80%,to{transform:rotate(135deg)}}`;

// node_modules/@arcgis/map-components/dist/chunks/createCloseEvent.js
var a3 = makeGenericController((e7, r2) => (r2.onLoaded(() => {
  const t3 = e7.el;
  e7.listenOn(t3.childElem, "calciteFlowItemClose", () => {
    e7.arcgisClose.emit(), e7.autoDestroyDisabled || e7.destroy();
  });
}), createEvent()));

// node_modules/@arcgis/map-components/dist/components/arcgis-layer-list/customElement.js
var g = I(D);
var _c = class _c extends LitElement {
  constructor() {
    super(...arguments), this.widget = g(this), this.viewModel = this.widget.viewModel, this.arcgisClose = a3(this), this.view = this.widget.view, this.autoDestroyDisabled = false, this.catalogOptions = this.widget.catalogOptions, this.closed = false, this.collapsed = this.widget.collapsed, this.dragEnabled = this.widget.dragEnabled, this.filterPlaceholder = this.widget.filterPlaceholder, this.filterPredicate = this.widget.filterPredicate, this.filterText = this.widget.filterText, this.headingLevel = this.widget.headingLevel, this.hideCatalogLayerList = this.widget.visibleElements.catalogLayerList, this.hideFlow = this.widget.visibleElements.flow, this.hideStatusIndicators = this.widget.visibleElements.statusIndicators, this.icon = this.widget.icon, this.knowledgeGraphOptions = this.widget.knowledgeGraphOptions, this.label = this.widget.label, this.listItemCreatedFunction = this.widget.listItemCreatedFunction, this.minDragEnabledItems = this.widget.minDragEnabledItems, this.minFilterItems = this.widget.minFilterItems, this.openedLayers = this.widget.openedLayers, this.selectedItems = this.widget.selectedItems, this.selectionMode = this.widget.selectionMode, this.showCloseButton = this.widget.visibleElements.closeButton, this.showCollapseButton = this.widget.visibleElements.collapseButton, this.showErrors = this.widget.visibleElements.errors, this.showFilter = this.widget.visibleElements.filter, this.showHeading = this.widget.visibleElements.heading, this.showTemporaryLayerIndicators = this.widget.visibleElements.temporaryLayerIndicators, this.state = this.viewModel.state, this.visibilityAppearance = this.widget.visibilityAppearance, this.arcgisPropertyChange = usePropertyChange()("state"), this.arcgisReady = createEvent(), this.arcgisTriggerAction = reEmitEvent(() => this.widget, "trigger-action");
  }
  get catalogLayerList() {
    return this.widget.catalogLayerList;
  }
  get operationalItems() {
    return this.widget.operationalItems;
  }
  get tableList() {
    return this.widget.tableList;
  }
  async destroy() {
    await this.manager.destroy();
  }
  async triggerAction(t3, e7) {
    var _a;
    (_a = this.widget) == null ? void 0 : _a.triggerAction(t3, e7);
  }
};
_c.properties = { view: 0, autoDestroyDisabled: 5, catalogLayerList: 32, catalogOptions: 0, closed: 5, collapsed: 7, dragEnabled: 5, filterPlaceholder: 1, filterPredicate: 0, filterText: 1, headingLevel: 9, hideCatalogLayerList: 5, hideFlow: 5, hideStatusIndicators: 5, icon: 1, knowledgeGraphOptions: 0, label: 1, listItemCreatedFunction: 0, minDragEnabledItems: 9, minFilterItems: 9, openedLayers: 0, operationalItems: 32, position: 1, referenceElement: 1, selectedItems: 0, selectionMode: 1, showCloseButton: 5, showCollapseButton: 5, showErrors: 5, showFilter: 5, showHeading: 5, showTemporaryLayerIndicators: 5, state: 3, tableList: 32, visibilityAppearance: 1 };
_c.styles = r;
var c3 = _c;
l3("arcgis-layer-list", c3);
export {
  c3 as ArcgisLayerList
};
/*! Bundled license information:

@arcgis/map-components/dist/chunks/layer-list.js:
@arcgis/map-components/dist/chunks/createCloseEvent.js:
@arcgis/map-components/dist/components/arcgis-layer-list/customElement.js:
  (*! All material copyright Esri, All Rights Reserved, unless otherwise specified.
  See https://js.arcgis.com/4.34/esri/copyright.txt for details.
  v4.34.1 *)
*/
//# sourceMappingURL=@arcgis_map-components_components_arcgis-layer-list.js.map
