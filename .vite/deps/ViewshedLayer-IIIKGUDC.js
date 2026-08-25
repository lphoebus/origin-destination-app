import {
  c as c2,
  d
} from "./chunk-HFOOXG2F.js";
import {
  c
} from "./chunk-LMCZJQ2J.js";
import "./chunk-YQGN74DT.js";
import "./chunk-J5747UIG.js";
import "./chunk-NN6BMFFP.js";
import "./chunk-TK2EVVYP.js";
import "./chunk-ZTT7LSRG.js";
import "./chunk-SPZYEASA.js";
import "./chunk-H7NF3WNO.js";
import {
  b2 as b
} from "./chunk-C5LXEBBN.js";
import {
  l as l2
} from "./chunk-BLVO2TSG.js";
import "./chunk-H3DIC2LV.js";
import "./chunk-IABCCFYF.js";
import "./chunk-4UVOIPRT.js";
import "./chunk-R4BXZRFW.js";
import "./chunk-O34PYKME.js";
import "./chunk-UD33XSRY.js";
import {
  Y
} from "./chunk-VF3OV6F3.js";
import "./chunk-TPDXVISU.js";
import "./chunk-VLLUHJV4.js";
import "./chunk-FKDE64FM.js";
import "./chunk-57YJ4LUD.js";
import "./chunk-UGAC6FVR.js";
import {
  b as b2
} from "./chunk-JIJYOENG.js";
import "./chunk-VR6VPSRB.js";
import "./chunk-R5IGYILM.js";
import "./chunk-WWZXCVZD.js";
import "./chunk-AHPD36K6.js";
import "./chunk-7KWU42EX.js";
import "./chunk-LD5EOJIR.js";
import "./chunk-MYD3EEGE.js";
import {
  e,
  n
} from "./chunk-2UMDUMDF.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-PDXC6YP2.js";
import "./chunk-SWYYL7T7.js";
import {
  a as a4
} from "./chunk-YOKAK57B.js";
import "./chunk-7VLZMF2B.js";
import "./chunk-4BEZTMLR.js";
import {
  f
} from "./chunk-VLH4C4OL.js";
import "./chunk-PDYTYXXK.js";
import "./chunk-B7MDSPWU.js";
import "./chunk-JM7F7WRC.js";
import "./chunk-3AVEDGU7.js";
import "./chunk-26FGXCQ6.js";
import "./chunk-LERWNH2Q.js";
import "./chunk-6YICR2EO.js";
import "./chunk-PSH6CRUA.js";
import "./chunk-UJKR5KHP.js";
import {
  r as r2,
  s as s2
} from "./chunk-HXC5WSBJ.js";
import "./chunk-I2W3LINK.js";
import {
  O
} from "./chunk-7OBUFU3X.js";
import {
  z
} from "./chunk-66BNN6ZJ.js";
import {
  _
} from "./chunk-NOVKMJNS.js";
import "./chunk-27A66LHG.js";
import "./chunk-HIM26FXK.js";
import "./chunk-IHMZ3RSY.js";
import "./chunk-GMQ2EQ27.js";
import "./chunk-6YDIQE3P.js";
import "./chunk-XN5EOTP2.js";
import {
  s
} from "./chunk-5YBW6KQ6.js";
import "./chunk-VNR3A2IW.js";
import {
  l,
  w
} from "./chunk-DLX5DTNB.js";
import "./chunk-6LIC47AK.js";
import "./chunk-7J6TZQJ4.js";
import {
  r
} from "./chunk-ZNU5NTGY.js";
import "./chunk-J3VZVJYU.js";
import "./chunk-U2QKMJ4B.js";
import "./chunk-UWOUWJRN.js";
import {
  a as a3
} from "./chunk-4EJ2CVAA.js";
import {
  m2 as m
} from "./chunk-TSVVEDRS.js";
import {
  a,
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
  o3 as o
} from "./chunk-QRKINRAQ.js";
import "./chunk-KUWSTWZR.js";
import {
  h
} from "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/analysis/Viewshed.js
var u = class extends a3(f) {
  constructor(e2) {
    super(e2), this.observer = null, this.farDistance = 1e3, this.heading = 0, this.tilt = 90, this.horizontalFieldOfView = 45, this.verticalFieldOfView = 45, this.feature = null;
  }
  get valid() {
    return null != this.observer && this.farDistance > 0;
  }
  equals(e2) {
    return o(this.observer, e2.observer) && this.farDistance === e2.farDistance && this.heading === e2.heading && this.tilt === e2.tilt && this.horizontalFieldOfView === e2.horizontalFieldOfView && this.verticalFieldOfView === e2.verticalFieldOfView && c2(this.feature, e2.feature);
  }
};
__decorate([m({ type: _, json: { write: { isRequired: true } } })], u.prototype, "observer", void 0), __decorate([m({ type: Number, nonNullable: true, range: { min: 0 }, json: { write: { isRequired: true } } })], u.prototype, "farDistance", void 0), __decorate([m({ type: Number, nonNullable: true, json: { write: { isRequired: true } } }), s((e2) => a4.normalize(a(e2), void 0, true))], u.prototype, "heading", void 0), __decorate([m({ type: Number, nonNullable: true, range: { min: 0, max: 180 }, json: { write: { isRequired: true } } })], u.prototype, "tilt", void 0), __decorate([m({ type: Number, nonNullable: true, range: { min: 0, max: 360 }, json: { write: { isRequired: true } } })], u.prototype, "horizontalFieldOfView", void 0), __decorate([m({ type: Number, nonNullable: true, range: { min: 0, max: 180 }, json: { write: { isRequired: true } } })], u.prototype, "verticalFieldOfView", void 0), __decorate([m(d)], u.prototype, "feature", void 0), __decorate([m({ readOnly: true, json: { read: false } })], u.prototype, "valid", null), u = __decorate([a2("esri.analysis.Viewshed")], u);

// node_modules/@arcgis/core/analysis/ViewshedAnalysis.js
var v = O.ofType(u);
var y = class extends c {
  constructor(e2) {
    super(e2), this.type = "viewshed", this._extent = null;
  }
  initialize() {
    this.addHandles(l(() => this._computeExtent(), (e2) => {
      null == e2.pending && (this._extent = e2.extent);
    }, w));
  }
  get viewsheds() {
    return this._get("viewsheds") || new v();
  }
  set viewsheds(e2) {
    this._set("viewsheds", n(e2, this.viewsheds, v));
  }
  get spatialReference() {
    for (const e2 of this.viewsheds) if (null != e2.observer) return e2.observer.spatialReference;
    return null;
  }
  get extent() {
    return this._extent;
  }
  get valid() {
    return this.viewsheds.every((e2) => e2.valid);
  }
  async waitComputeExtent() {
    const e2 = this._computeExtent();
    null != e2.pending && await e2.pending;
  }
  _computeExtent() {
    const { spatialReference: e2 } = this;
    if (null == e2) return { pending: null, extent: null };
    const t = this.viewsheds.filter((e3) => null != e3.observer), r3 = t.map((e3) => e3.observer).toArray(), s3 = Y(r3, e2);
    if (null != s3.pending) return { pending: s3.pending, extent: null };
    return { pending: null, extent: s3.geometries.map((e3, r4) => {
      const s4 = t.at(r4);
      return null != e3 && null != s4 ? this._computeViewshedExtent(this.viewsheds.at(r4), e3) : null;
    }).filter((e3) => null != e3).reduce((e3, t2) => x(e3, t2), null) };
  }
  _computeViewshedExtent(e2, t) {
    const { farDistance: r3, heading: s3, tilt: n2, horizontalFieldOfView: i, verticalFieldOfView: o2 } = e2, { spatialReference: u3 } = t, c3 = i / 2, m2 = o2 / 2, h2 = r3 / u3.metersPerUnit, f2 = [a4.normalize(s3 - c3), s3, a4.normalize(s3 + c3)], v2 = z.fromPoint(t), y3 = (e3) => {
      const t2 = f2.map((t3) => a4.normalize(t3 - e3));
      if (t2[0] > t2[2] || 360 === i) return h2;
      const r4 = t2.map((e4) => Math.abs(e4 > 180 ? 360 - e4 : e4)).reduce((e4, t3) => e4 > t3 ? t3 : e4);
      return r4 > 90 ? 0 : h2 * Math.cos(s2(r4));
    };
    v2.xmax += y3(90), v2.xmin -= y3(-90), v2.ymax += y3(0), v2.ymin -= y3(180);
    const x2 = t.z;
    if (null != x2) {
      let e3 = x2, t2 = x2;
      const s4 = n2 - 90, i2 = r2(s4 + m2, -90, 90), o3 = r2(s4 - m2, -90, 90), l3 = (u3 == null ? void 0 : u3.isGeographic) ? r3 : h2;
      e3 += l3 * g(i2), t2 += l3 * g(o3);
      const a5 = w2(m2) * l3, d2 = g(s4) * a5 * (1 - w2(c3));
      n2 < 90 && (e3 -= d2), n2 > 90 && (t2 -= d2), v2.zmax = Math.max(e3, x2), v2.zmin = Math.min(t2, x2);
    }
    return v2;
  }
  equals(e2) {
    return this === e2 || super.equals(e2) && h(this.viewsheds.toArray(), e2.viewsheds.toArray(), (e3, t) => e3.equals(t));
  }
  clear() {
    this.viewsheds.removeAll();
  }
};
function x(e2, t) {
  return null == e2 ? t : null == t ? e2 : e2.union(t);
}
function w2(e2) {
  return Math.cos(s2(e2));
}
function g(e2) {
  return Math.sin(s2(e2));
}
__decorate([m({ type: ["viewshed"] })], y.prototype, "type", void 0), __decorate([m({ cast: e, type: v, nonNullable: true })], y.prototype, "viewsheds", null), __decorate([m({ readOnly: true })], y.prototype, "spatialReference", null), __decorate([m()], y.prototype, "_extent", void 0), __decorate([m()], y.prototype, "extent", null), __decorate([m({ readOnly: true })], y.prototype, "valid", null), y = __decorate([a2("esri.analysis.ViewshedAnalysis")], y);

// node_modules/@arcgis/core/layers/ViewshedLayer.js
var y2 = class extends b(l2(b2)) {
  constructor(e2) {
    super(e2), this.type = "viewshed", this.operationalLayerType = "ViewshedLayer", this.source = new y(), this.opacity = 1;
  }
  initialize() {
    this.addHandles(l(() => this.source, (e2, r3) => {
      null != r3 && r3.parent === this && (r3.parent = null), null != e2 && (e2.parent = this);
    }, w));
  }
  async load() {
    return this.addResolvingPromise(this.source.waitComputeExtent()), this;
  }
  get spatialReference() {
    return this.source.spatialReference;
  }
  get fullExtent() {
    return this.source.extent;
  }
  releaseAnalysis(e2) {
    this.source === e2 && (this.source = new y());
  }
  get analysis() {
    return this.source;
  }
  set analysis(e2) {
    this.source = e2;
  }
  get viewsheds() {
    return this.source.viewsheds;
  }
  set viewsheds(e2) {
    this.source.viewsheds = e2;
  }
  writeViewsheds(e2, r3, s3, t) {
    r3.viewsheds = e2.filter((e3) => e3.valid).toJSON(t);
  }
};
__decorate([m({ json: { read: false }, readOnly: true })], y2.prototype, "type", void 0), __decorate([m({ type: ["ViewshedLayer"] })], y2.prototype, "operationalLayerType", void 0), __decorate([m({ type: y, nonNullable: true })], y2.prototype, "source", void 0), __decorate([m({ readOnly: true })], y2.prototype, "spatialReference", null), __decorate([m({ readOnly: true })], y2.prototype, "fullExtent", null), __decorate([m({ readOnly: true, json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } } })], y2.prototype, "opacity", void 0), __decorate([m({ type: ["show", "hide"] })], y2.prototype, "listMode", void 0), __decorate([m({ type: O.ofType(u), json: { write: { ignoreOrigin: true }, origins: { "web-scene": { write: { ignoreOrigin: true } } } } })], y2.prototype, "viewsheds", null), __decorate([r("web-scene", "viewsheds")], y2.prototype, "writeViewsheds", null), y2 = __decorate([a2("esri.layers.ViewshedLayer")], y2);
var u2 = y2;
export {
  u2 as default
};
//# sourceMappingURL=ViewshedLayer-IIIKGUDC.js.map
