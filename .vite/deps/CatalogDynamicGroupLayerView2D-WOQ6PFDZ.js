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
  l
} from "./chunk-LD5EOJIR.js";
import "./chunk-2UMDUMDF.js";
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
import "./chunk-DLX5DTNB.js";
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
import {
  L,
  e,
  t,
  y
} from "./chunk-QRKINRAQ.js";
import {
  i3 as i
} from "./chunk-KUWSTWZR.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/views/layers/CatalogDynamicGroupLayerView.js
var l2 = Symbol();
var y2 = (y3) => {
  const u = y3;
  let c2 = class extends u {
    constructor(...e2) {
      super(...e2), this.layerViews = new O(), this._debouncedUpdate = L(async () => {
        const { layer: e3, parent: r } = this, t2 = r == null ? void 0 : r.footprintLayerView;
        let i3 = [];
        const s = this._createQuery();
        if (s && t2) {
          const { features: r2 } = await t2.queryFeatures(s);
          this.suspended || (i3 = r2.map((r3) => e3.acquireLayer(r3)));
        }
        this.removeHandles(l2), this.addHandles(i3, l2);
      });
    }
    get creatingLayerViews() {
      var _a;
      return ((_a = this.view) == null ? void 0 : _a.layerViewManager.isCreatingLayerViewsForLayer(this.layer)) ?? false;
    }
    isUpdating() {
      return this.creatingLayerViews || this.layer.updating || this.layerViews.some((e2) => e2.updating);
    }
    enableLayerUpdates() {
      return t([this._updatingHandles.addWhen(() => {
        var _a, _b;
        return false === ((_b = (_a = this.parent) == null ? void 0 : _a.footprintLayerView) == null ? void 0 : _b.dataUpdating);
      }, () => this.updateLayers()), this._updatingHandles.add(() => {
        var _a, _b, _c, _d, _e;
        return [this.layer.maximumVisibleSublayers, (_a = this.layer.parent) == null ? void 0 : _a.orderBy, (_c = (_b = this.parent) == null ? void 0 : _b.footprintLayerView) == null ? void 0 : _c.filter, (_e = (_d = this.parent) == null ? void 0 : _d.footprintLayerView) == null ? void 0 : _e.timeExtent, this.suspended];
      }, () => this.updateLayers()), e(() => this.removeHandles(l2))]);
    }
    updateLayers() {
      this.suspended ? this.removeHandles(l2) : this._updatingHandles.addPromise(y(this._debouncedUpdate()).catch((e2) => {
        i.getLogger(this).error(e2);
      }));
    }
    _createQuery() {
      var _a, _b;
      const e2 = (_a = this.parent) == null ? void 0 : _a.footprintLayerView, r = (_b = this.layer) == null ? void 0 : _b.parent;
      if (!e2 || !r || r.destroyed) return null;
      const { layer: { maximumVisibleSublayers: t2 }, view: { scale: i3 } } = this;
      if (!t2) return null;
      const { itemTypeField: s, itemSourceField: a2, itemNameField: o, minScaleField: d2, maxScaleField: p, objectIdField: l3, orderBy: y4 } = r, u2 = l(`${d2} IS NULL OR ${i3} <= ${d2} OR ${d2} = 0`, `${p} IS NULL OR ${i3} >= ${p}`), c3 = y4 == null ? void 0 : y4.find((e3) => e3.field && !e3.valueExpression), m2 = e2.createQuery();
      if (m2.returnGeometry = false, m2.num = t2, m2.outFields = [l3, a2, o], m2.where = l(m2.where, u2), null != this.unsupportedItemTypes) {
        const e3 = `${s} NOT IN (${this.unsupportedItemTypes.map((e4) => `'${e4}'`)})`;
        m2.where = l(m2.where, e3);
      }
      return (c3 == null ? void 0 : c3.field) && (m2.orderByFields = [`${c3.field} ${"descending" === c3.order ? "DESC" : "ASC"}`], m2.outFields.push(c3.field)), m2;
    }
  };
  return __decorate([m({ readOnly: true })], c2.prototype, "creatingLayerViews", null), __decorate([m()], c2.prototype, "layer", void 0), __decorate([m()], c2.prototype, "layerViews", void 0), __decorate([m({ readOnly: true })], c2.prototype, "unsupportedItemTypes", void 0), __decorate([m()], c2.prototype, "parent", void 0), __decorate([m({ readOnly: true })], c2.prototype, "isUpdating", null), c2 = __decorate([a("esri.views.layers.CatalogDynamicGroupLayerView")], c2), c2;
};

// node_modules/@arcgis/core/views/2d/layers/CatalogDynamicGroupLayerView2D.js
var i2 = class extends y2(b(d)) {
  constructor() {
    super(...arguments), this.unsupportedItemTypes = ["Scene Service"], this.layerViews = new O();
  }
  attach() {
    this.addAttachHandles([this.layerViews.on("after-changes", () => this._updateStageChildren()), this.enableLayerUpdates()]);
  }
  detach() {
    this.container.removeAllChildren();
  }
  update(e2) {
    this.updateLayers();
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach((e2, r) => this.container.addChildAt(e2.container, r));
  }
};
i2 = __decorate([a("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")], i2);
var c = i2;
export {
  c as default
};
//# sourceMappingURL=CatalogDynamicGroupLayerView2D-WOQ6PFDZ.js.map
