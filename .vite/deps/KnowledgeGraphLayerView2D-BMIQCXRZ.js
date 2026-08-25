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
import "./chunk-QRKINRAQ.js";
import "./chunk-KUWSTWZR.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/views/2d/layers/KnowledgeGraphLayerView2D.js
var n2 = class extends b(d) {
  constructor(e2) {
    super(e2), this.layerViews = new O();
  }
  set layerViews(e2) {
    this._set("layerViews", n(e2, this._get("layerViews")));
  }
  get updatingProgress() {
    return 0 === this.layerViews.length ? 1 : this.layerViews.reduce((e2, r) => e2 + r.updatingProgress, 0) / this.layerViews.length;
  }
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
__decorate([m({ cast: e })], n2.prototype, "layerViews", null), __decorate([m({ readOnly: true })], n2.prototype, "updatingProgress", null), n2 = __decorate([a("esri.views.2d.layers.KnowledgeGraphLayerView2D")], n2);
var c = n2;
export {
  c as default
};
//# sourceMappingURL=KnowledgeGraphLayerView2D-BMIQCXRZ.js.map
