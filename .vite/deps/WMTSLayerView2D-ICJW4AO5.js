import {
  n,
  r as r2
} from "./chunk-4TG2O76T.js";
import "./chunk-BU4CVZEL.js";
import "./chunk-OHZ2SSIW.js";
import {
  i as i2
} from "./chunk-5WHZLSZM.js";
import {
  b
} from "./chunk-OCT7BKO5.js";
import {
  d as d2
} from "./chunk-IP2KDJFI.js";
import "./chunk-WELBS3QX.js";
import "./chunk-WQYOTJRX.js";
import "./chunk-NGOTSWMU.js";
import "./chunk-LLTAZXUM.js";
import "./chunk-C5OUOU2L.js";
import "./chunk-WSW5LOWY.js";
import "./chunk-BWGF4KWM.js";
import "./chunk-G5HYQKIV.js";
import "./chunk-LKJRQUL4.js";
import "./chunk-FRNAPJPV.js";
import "./chunk-WHRWR3UA.js";
import "./chunk-LHXB2FVV.js";
import "./chunk-52224I66.js";
import "./chunk-GXBKLQ4R.js";
import "./chunk-T7GC3GDF.js";
import "./chunk-DJ2VONAQ.js";
import "./chunk-JBITOOAG.js";
import "./chunk-PNFUWJ4W.js";
import "./chunk-UBCTOQOO.js";
import "./chunk-7UQGNZ42.js";
import "./chunk-5XPSWKAI.js";
import "./chunk-WUNQ6CSP.js";
import "./chunk-SDGRW3ZR.js";
import "./chunk-GWZLH7CG.js";
import "./chunk-5DKBYB7N.js";
import "./chunk-3AFXS5Z4.js";
import {
  p,
  r
} from "./chunk-TEGJMJCM.js";
import "./chunk-3CUKKVVQ.js";
import {
  h
} from "./chunk-LVP5OQSB.js";
import {
  e
} from "./chunk-JCJOV2OG.js";
import "./chunk-EZLF5T7L.js";
import "./chunk-SPZYEASA.js";
import "./chunk-H7NF3WNO.js";
import "./chunk-R7XUSGO5.js";
import {
  f
} from "./chunk-BIN2MWZL.js";
import "./chunk-GULQRMJ2.js";
import "./chunk-MRVM6XH5.js";
import "./chunk-6XIPZBT7.js";
import "./chunk-2KJCRN2H.js";
import "./chunk-ZNPAPEQU.js";
import "./chunk-XJTFKAAL.js";
import "./chunk-LPC5EXUG.js";
import "./chunk-XXCU7BD5.js";
import "./chunk-EQZMGADF.js";
import "./chunk-E5SIY76Q.js";
import "./chunk-XZSHAR3X.js";
import "./chunk-CG7LVCFL.js";
import "./chunk-CVV6MIDL.js";
import "./chunk-UGAC6FVR.js";
import "./chunk-ELQLS5UR.js";
import "./chunk-TBHN7NEG.js";
import "./chunk-VR6VPSRB.js";
import "./chunk-R5IGYILM.js";
import "./chunk-WWZXCVZD.js";
import "./chunk-2UMDUMDF.js";
import "./chunk-PVAT2NHO.js";
import "./chunk-MPABLVG5.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-SWYYL7T7.js";
import "./chunk-GPG7YJ2X.js";
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
import "./chunk-7OBUFU3X.js";
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
import {
  T
} from "./chunk-J3VZVJYU.js";
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
  d
} from "./chunk-QRKINRAQ.js";
import {
  i3 as i
} from "./chunk-KUWSTWZR.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/views/2d/layers/WMTSLayerView2D.js
var y = [0, 0];
var _ = class extends i2(r2(b(d2))) {
  constructor() {
    super(...arguments), this._tileStrategy = null, this._fetchQueue = null, this.layer = null;
  }
  get tileMatrixSet() {
    var _a;
    const { activeLayer: e2 } = this.layer, { tileMatrixSet: t } = e2;
    if (t && T((_a = t.tileInfo) == null ? void 0 : _a.spatialReference, this.view.spatialReference)) return t;
    const i3 = this._getTileMatrixSetBySpatialReference(e2);
    return i3 && i3.id !== e2.tileMatrixSetId ? (e2.tileMatrixSetId = i3.id, i3) : null;
  }
  update(e2) {
    this._fetchQueue.pause(), this._fetchQueue.state = e2.state, this._tileStrategy.update(e2), this._fetchQueue.resume();
  }
  attach() {
    var _a;
    const e2 = (_a = this.tileMatrixSet) == null ? void 0 : _a.tileInfo;
    e2 && (this._tileInfoView = new h(e2), this._fetchQueue = new p({ tileInfoView: this._tileInfoView, concurrency: 16, process: (e3, t) => this.fetchTile(e3, t), scheduler: this.scheduler, priority: f.MAPVIEW_FETCH_QUEUE }), this._tileStrategy = new r({ cachePolicy: "keep", resampling: true, acquireTile: (e3) => this.acquireTile(e3), releaseTile: (e3) => this.releaseTile(e3), tileInfoView: this._tileInfoView }), this.addAttachHandles(this._updatingHandles.add(() => {
      var _a2, _b;
      return [(_b = (_a2 = this.layer) == null ? void 0 : _a2.activeLayer) == null ? void 0 : _b.styleId, this.tileMatrixSet];
    }, () => this.doRefresh())), super.attach());
  }
  detach() {
    var _a, _b;
    super.detach(), (_a = this._tileStrategy) == null ? void 0 : _a.destroy(), (_b = this._fetchQueue) == null ? void 0 : _b.destroy(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null;
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  supportsSpatialReference(e2) {
    var _a;
    return ((_a = this.layer.activeLayer.tileMatrixSets) == null ? void 0 : _a.some((t) => {
      var _a2;
      return T((_a2 = t.tileInfo) == null ? void 0 : _a2.spatialReference, e2);
    })) ?? false;
  }
  async doRefresh() {
    if (this.attached) {
      if (this.suspended) return this._tileStrategy.clear(), void this.requestUpdate();
      this._fetchQueue.reset(), this._tileStrategy.refresh((e2) => this._updatingHandles.addPromise(this._enqueueTileFetch(e2)));
    }
  }
  acquireTile(e2) {
    const t = this._bitmapView.createTile(e2), i3 = t.bitmap;
    return [i3.x, i3.y] = this._tileInfoView.getTileCoords(y, t.key), i3.resolution = this._tileInfoView.getTileResolution(t.key), [i3.width, i3.height] = this._tileInfoView.tileInfo.size, this._updatingHandles.addPromise(this._enqueueTileFetch(t)), this._bitmapView.addChild(t), this.requestUpdate(), t;
  }
  releaseTile(e2) {
    this._fetchQueue.abort(e2.key.id), this._bitmapView.removeChild(e2), e2.once("detach", () => e2.destroy()), this.requestUpdate();
  }
  async fetchTile(e2, t = {}) {
    const s = "tilemapCache" in this.layer ? this.layer.tilemapCache : null, { signal: r3, resamplingLevel: a2 = 0 } = t;
    if (!s) return this._fetchImage(e2, r3);
    const l = new e(0, 0, 0, 0);
    let o;
    try {
      await s.fetchAvailabilityUpsample(e2.level, e2.row, e2.col, l, { signal: r3 }), o = await this._fetchImage(l, r3);
    } catch (n2) {
      if (d(n2)) throw n2;
      if (a2 < 3) {
        const i3 = this._tileInfoView.getTileParentId(e2.id);
        if (i3) {
          const s2 = new e(i3), r4 = await this.fetchTile(s2, { ...t, resamplingLevel: a2 + 1 });
          return n(this._tileInfoView, r4, s2, e2);
        }
      }
      throw n2;
    }
    return n(this._tileInfoView, o, l, e2);
  }
  canResume() {
    const e2 = super.canResume();
    return e2 ? null !== this.tileMatrixSet : e2;
  }
  async _enqueueTileFetch(e2) {
    if (!this._fetchQueue.has(e2.key.id)) {
      try {
        const t = await this._fetchQueue.push(e2.key);
        e2.bitmap.source = t, e2.bitmap.width = this._tileInfoView.tileInfo.size[0], e2.bitmap.height = this._tileInfoView.tileInfo.size[1], e2.once("attach", () => this.requestUpdate());
      } catch (s) {
        d(s) || i.getLogger(this).error(s);
      }
      this.requestUpdate();
    }
  }
  async _fetchImage(e2, t) {
    return this.layer.fetchImageBitmapTile(e2.level, e2.row, e2.col, { signal: t });
  }
  _getTileMatrixSetBySpatialReference(e2) {
    var _a;
    return (_a = e2.tileMatrixSets) == null ? void 0 : _a.find((e3) => {
      var _a2;
      return T((_a2 = e3.tileInfo) == null ? void 0 : _a2.spatialReference, this.view.spatialReference);
    });
  }
};
__decorate([m({ readOnly: true })], _.prototype, "tileMatrixSet", null), _ = __decorate([a("esri.views.2d.layers.WMTSLayerView2D")], _);
var w = _;
export {
  w as default
};
//# sourceMappingURL=WMTSLayerView2D-ICJW4AO5.js.map
