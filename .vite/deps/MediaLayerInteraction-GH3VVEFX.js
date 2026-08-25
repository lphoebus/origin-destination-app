import {
  f
} from "./chunk-G4GYF45W.js";
import "./chunk-ZILZAUQI.js";
import {
  h as h2
} from "./chunk-R7XUSGO5.js";
import "./chunk-CG7LVCFL.js";
import "./chunk-PVAT2NHO.js";
import "./chunk-GPG7YJ2X.js";
import "./chunk-VNR3A2IW.js";
import {
  h
} from "./chunk-DLX5DTNB.js";
import {
  b,
  m2 as m
} from "./chunk-TSVVEDRS.js";
import {
  a2 as a
} from "./chunk-HPSHCA6S.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";
import "./chunk-PRKAQBHS.js";
import "./chunk-CYEWK46L.js";
import "./chunk-NVNJVVMF.js";
import "./chunk-63GXB7XB.js";
import "./chunk-5XIDIYOG.js";
import "./chunk-QLJQMJ35.js";
import "./chunk-HQPAN4GW.js";
import "./chunk-PXFESYJY.js";
import "./chunk-BZQFVEAQ.js";
import {
  L,
  c,
  e,
  i
} from "./chunk-QRKINRAQ.js";
import "./chunk-KUWSTWZR.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/views/2d/layers/support/MediaLayerInteraction.js
var h3 = { redo: "r", undo: "z" };
var p = Symbol();
var m2 = Symbol();
var _ = Symbol();
var u = class extends b {
  constructor(e2) {
    super(e2), this._tool = null, this._updatingHandles = new h2(), this.enabled = false, this._onPointerMove = L(async (e3) => {
      const t = await this._updatingHandles.addPromise(this._findElementAtScreenPoint(e3));
      this.destroyed || (this.removeHandles(m2), t && t !== this.selectedElement && this.addHandles(this.view.acquireCursor("pointer", "high"), m2));
    });
  }
  initialize() {
    this.addHandles(c(this._updatingHandles)), this._updatingHandles.add(() => this.enabled, (e2) => this._setEnabled(e2), h), this._updatingHandles.add(() => this._preferredInteractionTool, () => this._preferredInteractionToolChanged());
  }
  get _validatedSelectedElement() {
    const e2 = this.selectedElement;
    if (!e2) return null;
    const { layer: { source: t } } = this;
    return t ? "hasElement" in t ? t.hasElement(e2) ? e2 : null : t === e2 ? e2 : null : null;
  }
  get _preferredInteractionTool() {
    var _a;
    return ((_a = this.options) == null ? void 0 : _a.tool) ?? "transform";
  }
  get updating() {
    return this._updatingHandles.updating;
  }
  _setEnabled(e2) {
    if (this.removeHandles(p), !e2) return;
    const { view: t } = this;
    this.addHandles([t.on("immediate-click", (e3) => this._onClick(e3), f.TOOL), t.on("pointer-move", (e3) => this._onPointerMove(e3).catch(() => {
    }), f.TOOL), t.on("key-down", (e3) => {
      var _a, _b;
      e3.key === h3.undo && ((_a = this._tool) == null ? void 0 : _a.canUndo()) && (this._tool.undo(), e3.stopPropagation()), e3.key === h3.redo && ((_b = this._tool) == null ? void 0 : _b.canRedo()) && (this._tool.redo(), e3.stopPropagation());
    }), this._updatingHandles.add(() => this._validatedSelectedElement, (e3) => this._selectedElementChanged(e3), h), e(() => {
      this.removeHandles(m2), this._removeTool();
    })], p);
  }
  async _findElementAtScreenPoint(e2) {
    const t = (await this.view.hitTest(e2, { include: [this.layer] })).results[0];
    return "media" === (t == null ? void 0 : t.type) ? t.element : null;
  }
  async _onClick(e2) {
    await this._updatingHandles.addPromise(e2.defer(async () => {
      const t = await this._findElementAtScreenPoint(e2);
      this.destroyed || (t && e2.stopPropagation(), this.selectedElement = t, this.selectedElement && this.removeHandles(m2));
    }));
  }
  _preferredInteractionToolChanged() {
    const { _tool: e2 } = this;
    e2 && (this._preferredInteractionTool === e2.type || this._updatingHandles.addPromise(this._recreateTool()));
  }
  async _recreateTool() {
    this.removeHandles(_), this._removeTool();
    const e2 = this._validatedSelectedElement;
    if (!e2) return;
    const t = new AbortController();
    this.addHandles(i(t), _);
    const { TransformTool: o, ControlPointsTransformTool: n } = await import("./editingTools-MKKYWMH2.js");
    if (t.signal.aborted) return;
    const { view: r } = this;
    switch (this._preferredInteractionTool) {
      case "transform":
        this._tool = new o({ target: e2, view: r });
        break;
      case "reshape":
        this._tool = new n({ mediaElement: e2, view: r });
    }
    this.addHandles(e(() => {
      this._tool && (r.tools.remove(this._tool), this._tool = null);
    }), this._tool), r.addAndActivateTool(this._tool);
  }
  _removeTool() {
    this._tool && this.removeHandles(this._tool);
  }
  async _selectedElementChanged(e2) {
    (e2 == null ? void 0 : e2.georeference) ? await this._updatingHandles.addPromise(this._recreateTool()) : this._removeTool();
  }
};
__decorate([m()], u.prototype, "_validatedSelectedElement", null), __decorate([m()], u.prototype, "_preferredInteractionTool", null), __decorate([m({ constructOnly: true })], u.prototype, "view", void 0), __decorate([m({ constructOnly: true })], u.prototype, "layer", void 0), __decorate([m()], u.prototype, "selectedElement", void 0), __decorate([m()], u.prototype, "enabled", void 0), __decorate([m()], u.prototype, "options", void 0), __decorate([m()], u.prototype, "updating", null), u = __decorate([a("esri.views.2d.layers.support.MediaLayerInteraction")], u);
export {
  u as MediaLayerInteraction
};
//# sourceMappingURL=MediaLayerInteraction-GH3VVEFX.js.map
