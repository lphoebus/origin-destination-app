import {
  i as i2,
  o
} from "./chunk-4VETT6PJ.js";
import "./chunk-MSTSNODC.js";
import "./chunk-DVF2XBXF.js";
import "./chunk-66LHZIM3.js";
import "./chunk-Z2VNECWP.js";
import {
  h as h2
} from "./chunk-RFZO7KB5.js";
import "./chunk-IVB5Y25P.js";
import "./chunk-HIGSJTLY.js";
import "./chunk-RCDARI2U.js";
import "./chunk-PODBP65Q.js";
import {
  P,
  t
} from "./chunk-WXGZCYG3.js";
import "./chunk-GKYYWAKB.js";
import "./chunk-NN6BMFFP.js";
import "./chunk-C7WLYOQL.js";
import "./chunk-TK2EVVYP.js";
import "./chunk-ZTT7LSRG.js";
import {
  i,
  n,
  r
} from "./chunk-RREJTDRO.js";
import "./chunk-UISC6JT5.js";
import "./chunk-NA7IIYEG.js";
import "./chunk-G4GYF45W.js";
import "./chunk-ZILZAUQI.js";
import "./chunk-SPZYEASA.js";
import "./chunk-H7NF3WNO.js";
import "./chunk-3VQPIBWQ.js";
import "./chunk-NJGE4AQH.js";
import "./chunk-H3DIC2LV.js";
import "./chunk-IABCCFYF.js";
import "./chunk-O34PYKME.js";
import "./chunk-UD33XSRY.js";
import "./chunk-M3SP5TM6.js";
import "./chunk-NK2YW3YT.js";
import "./chunk-TCDKBCY3.js";
import "./chunk-NULLBAN4.js";
import "./chunk-YBGSS2I2.js";
import "./chunk-SBHNAU24.js";
import "./chunk-ZM5SAAQW.js";
import "./chunk-CG7LVCFL.js";
import "./chunk-57YJ4LUD.js";
import "./chunk-3UHA63PD.js";
import "./chunk-UGAC6FVR.js";
import "./chunk-WWZXCVZD.js";
import {
  l as l2
} from "./chunk-LD5EOJIR.js";
import "./chunk-PVAT2NHO.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-GPG7YJ2X.js";
import "./chunk-7VLZMF2B.js";
import "./chunk-4BEZTMLR.js";
import "./chunk-GTUYDBKL.js";
import "./chunk-VLH4C4OL.js";
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
import "./chunk-5HYMAKZL.js";
import "./chunk-66BNN6ZJ.js";
import "./chunk-NOVKMJNS.js";
import "./chunk-27A66LHG.js";
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
import {
  p,
  s
} from "./chunk-QRKINRAQ.js";
import "./chunk-KUWSTWZR.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/FeatureCollectionSnappingSource.js
var f = class extends b {
  get availability() {
    return 1;
  }
  get _snappingElevationAligner() {
    const { view: e } = this, { layer: t2 } = this.layerSource, i3 = null != e && "3d" === e.type;
    if (!i3 || "subtype-group" === t2.type) return i();
    const r2 = async (i4, r3) => (await p(e.whenLayerView(t2), r3)).elevationAlignPointsInFeatures(i4, r3);
    return i(i3, { elevationInfo: t2.elevationInfo, alignPointsInFeatures: r2 });
  }
  get _snappingElevationFilter() {
    const { view: e } = this, t2 = null != e && "3d" === e.type && "subtype-group" !== this.layerSource.layer.type;
    return r(t2);
  }
  get _symbologySnappingFetcher() {
    const { view: e } = this, { layer: t2 } = this.layerSource;
    return null != e && "3d" === e.type && "subtype-group" !== t2.type ? n(this._symbologySnappingSupported, async (i3, n2) => {
      const o2 = await e.whenLayerView(t2);
      return s(n2), o2.queryForSymbologySnapping({ candidates: i3, spatialReference: e.spatialReference }, n2);
    }) : n();
  }
  get _layerView() {
    const { view: e } = this;
    if (null == e) return null;
    const { layer: t2 } = this.layerSource;
    return e.allLayerViews.find((e2) => e2.layer === t2);
  }
  get _layerView3D() {
    const { view: e } = this;
    return null == e || "2d" === e.type ? null : this._layerView;
  }
  get _symbologySnappingSupported() {
    return null != this._layerView3D && this._layerView3D.symbologySnappingSupported;
  }
  initialize() {
    const { view: e } = this, { layer: t2 } = this.layerSource;
    null != e && "3d" === e.type && "subtype-group" !== t2.type && this.addHandles([e.elevationProvider.on("elevation-change", ({ context: e2 }) => {
      const { elevationInfo: i3 } = t2;
      P(e2, i3) && this._snappingElevationAligner.notifyElevationSourceChange();
    }), l(() => t2.elevationInfo, () => this._snappingElevationAligner.notifyElevationSourceChange(), h), l(() => {
      var _a;
      return null != this._layerView3D ? (_a = this._layerView3D.layer) == null ? void 0 : _a.renderer : null;
    }, () => this._symbologySnappingFetcher.notifySymbologyChange(), h), a(() => {
      var _a;
      return (_a = this._layerView3D) == null ? void 0 : _a.layer;
    }, ["edits", "apply-edits"], () => this._symbologySnappingFetcher.notifySymbologyChange())]);
  }
  constructor(e) {
    super(e), this.view = null, this.updating = false, this._memoizedMakeGetGroundElevation = t(i2);
  }
  refresh() {
  }
  async fetchCandidates(e, t2) {
    var _a, _b;
    const { layer: i3 } = this.layerSource, { source: n2 } = i3;
    if (!(n2 == null ? void 0 : n2.querySnapping)) return [];
    const o2 = i3.createQuery();
    this._layerView && "effectiveDisplayFilter" in this._layerView && (o2.where = l2(o2.where, (_a = this._layerView.effectiveDisplayFilter) == null ? void 0 : _a.where));
    const a3 = "returnZ" in i3 ? i3.returnZ : void 0, s2 = h2({ parameters: e, mode: ((_b = this.view) == null ? void 0 : _b.type) ?? "2d", returnZ: a3, filter: o2 }), p2 = await n2.querySnapping(s2, { signal: t2 });
    s(t2);
    const y = e.coordinateHelper.spatialReference, c = await this._snappingElevationAligner.alignCandidates(p2.candidates, y, t2);
    s(t2);
    const g = await this._symbologySnappingFetcher.fetch(c, t2);
    s(t2);
    const m2 = 0 === g.length ? c : [...c, ...g], d = this._snappingElevationFilter.filter(s2, m2), v = this._memoizedMakeGetGroundElevation(this.view, y);
    return d.map((e2) => o(e2, v));
  }
};
__decorate([m({ constructOnly: true })], f.prototype, "layerSource", void 0), __decorate([m({ constructOnly: true })], f.prototype, "view", void 0), __decorate([m()], f.prototype, "_snappingElevationAligner", null), __decorate([m()], f.prototype, "_snappingElevationFilter", null), __decorate([m()], f.prototype, "_symbologySnappingFetcher", null), __decorate([m()], f.prototype, "_layerView", null), __decorate([m()], f.prototype, "_layerView3D", null), __decorate([m()], f.prototype, "_symbologySnappingSupported", null), f = __decorate([a2("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")], f);
export {
  f as FeatureCollectionSnappingSource
};
//# sourceMappingURL=FeatureCollectionSnappingSource-SV6QUJYL.js.map
