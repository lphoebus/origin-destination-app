import {
  b
} from "./chunk-OCT7BKO5.js";
import {
  d
} from "./chunk-IP2KDJFI.js";
import "./chunk-LLTAZXUM.js";
import "./chunk-G5HYQKIV.js";
import "./chunk-UBCTOQOO.js";
import "./chunk-7UQGNZ42.js";
import "./chunk-WUNQ6CSP.js";
import "./chunk-GWZLH7CG.js";
import "./chunk-5DKBYB7N.js";
import "./chunk-3AFXS5Z4.js";
import "./chunk-EZLF5T7L.js";
import "./chunk-R7XUSGO5.js";
import "./chunk-ZNPAPEQU.js";
import "./chunk-E5SIY76Q.js";
import "./chunk-XZSHAR3X.js";
import "./chunk-CVV6MIDL.js";
import "./chunk-UGAC6FVR.js";
import "./chunk-ELQLS5UR.js";
import {
  e,
  n
} from "./chunk-2UMDUMDF.js";
import "./chunk-PVAT2NHO.js";
import "./chunk-MPABLVG5.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-SWYYL7T7.js";
import "./chunk-MWWK5WRN.js";
import "./chunk-PDYTYXXK.js";
import "./chunk-B7MDSPWU.js";
import "./chunk-JM7F7WRC.js";
import "./chunk-3AVEDGU7.js";
import "./chunk-26FGXCQ6.js";
import "./chunk-LERWNH2Q.js";
import "./chunk-6YICR2EO.js";
import "./chunk-PSH6CRUA.js";
import "./chunk-UJKR5KHP.js";
import "./chunk-HXC5WSBJ.js";
import "./chunk-I2W3LINK.js";
import {
  O
} from "./chunk-7OBUFU3X.js";
import "./chunk-66BNN6ZJ.js";
import "./chunk-NOVKMJNS.js";
import "./chunk-27A66LHG.js";
import "./chunk-HIM26FXK.js";
import "./chunk-5YBW6KQ6.js";
import "./chunk-VNR3A2IW.js";
import {
  U,
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
  m2 as m
} from "./chunk-TSVVEDRS.js";
import {
  a2 as a
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

// node_modules/@arcgis/core/views/layers/GroupLayerView.js
var h = class extends d {
  constructor(i) {
    super(i), this.type = "group", this.layerViews = new O();
  }
  destroy() {
    this.layerViews.length = 0;
  }
  _allLayerViewVisibility(i) {
    this.layerViews.forEach((e2) => {
      e2.visible = i;
    });
  }
  initialize() {
    this.addHandles([this.layerViews.on("change", (i) => this._layerViewsChangeHandler(i)), l(() => {
      var _a;
      return (_a = this.layer) == null ? void 0 : _a.visibilityMode;
    }, () => {
      this.layer && this._applyVisibility(() => this._allLayerViewVisibility(this.visible), () => this._applyExclusiveVisibility(null));
    }, U), l(() => this.visible, (i) => {
      this._applyVisibility(() => this._allLayerViewVisibility(i), () => {
      });
    }, U)], "grouplayerview"), this._layerViewsChangeHandler({ target: null, added: this.layerViews.toArray(), removed: [], moved: [] });
  }
  get creatingLayerViews() {
    var _a, _b;
    return ((_b = (_a = this.view) == null ? void 0 : _a.layerViewManager) == null ? void 0 : _b.isCreatingLayerViewsForLayer(this.layer)) ?? false;
  }
  set layerViews(i) {
    this._set("layerViews", n(i, this._get("layerViews")));
  }
  get updatingProgress() {
    return 0 === this.layerViews.length ? 1 : this.layerViews.reduce((i, e2) => i + e2.updatingProgress, 0) / this.layerViews.length;
  }
  isUpdating() {
    return this.creatingLayerViews || this.layerViews.some((i) => i.updating);
  }
  _hasLayerViewVisibleOverrides() {
    return this.layerViews.some((i) => i._isOverridden("visible"));
  }
  _findLayerViewForLayer(i) {
    return i && this.layerViews.find((e2) => e2.layer === i);
  }
  _firstVisibleOnLayerOrder() {
    const i = this.layer.layers.find((i2) => {
      const e2 = this._findLayerViewForLayer(i2);
      return !!(e2 == null ? void 0 : e2.visible);
    });
    return i && this._findLayerViewForLayer(i);
  }
  _applyExclusiveVisibility(i) {
    null == i && null == (i = this._firstVisibleOnLayerOrder()) && this.layerViews.length > 0 && (i = this._findLayerViewForLayer(this.layer.layers.at(0))), this.layerViews.forEach((e2) => {
      e2.visible = e2 === i;
    });
  }
  _layerViewsChangeHandler(i) {
    this.removeHandles("grouplayerview:visible"), this.addHandles(this.layerViews.map((i2) => l(() => i2.visible, (e3) => this._applyVisibility(() => {
      e3 !== this.visible && (i2.visible = this.visible);
    }, () => this._applyExclusiveVisibility(e3 ? i2 : null)), U)).toArray(), "grouplayerview:visible");
    const e2 = i.added[i.added.length - 1];
    this._applyVisibility(() => this._allLayerViewVisibility(this.visible), () => this._applyExclusiveVisibility((e2 == null ? void 0 : e2.visible) ? e2 : null));
  }
  _applyVisibility(i, e2) {
    var _a, _b;
    this._hasLayerViewVisibleOverrides() && ("inherited" === ((_a = this.layer) == null ? void 0 : _a.visibilityMode) ? i() : "exclusive" === ((_b = this.layer) == null ? void 0 : _b.visibilityMode) && e2());
  }
};
__decorate([m({ readOnly: true })], h.prototype, "creatingLayerViews", null), __decorate([m({ cast: e })], h.prototype, "layerViews", null), __decorate([m({ readOnly: true })], h.prototype, "updatingProgress", null), __decorate([m()], h.prototype, "view", void 0), h = __decorate([a("esri.views.layers.GroupLayerView")], h);

// node_modules/@arcgis/core/views/2d/layers/GroupLayerView2D.js
var o = class extends b(h) {
  attach() {
    this._updateStageChildren(), this.addAttachHandles(this.layerViews.on("after-changes", () => this._updateStageChildren()));
  }
  detach() {
    this.container.removeAllChildren();
  }
  update(e2) {
  }
  viewChange() {
  }
  moveEnd() {
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach((e2, r) => this.container.addChildAt(e2.container, r));
  }
};
o = __decorate([a("esri.views.2d.layers.GroupLayerView2D")], o);
var s = o;
export {
  s as default
};
//# sourceMappingURL=GroupLayerView2D-SRR7DXIN.js.map
