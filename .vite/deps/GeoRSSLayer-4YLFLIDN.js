import {
  j
} from "./chunk-X5OKHTDR.js";
import "./chunk-V6PIRVOO.js";
import {
  f as f2
} from "./chunk-74CZNJWZ.js";
import {
  b2 as b,
  d,
  u,
  y
} from "./chunk-C5LXEBBN.js";
import {
  l
} from "./chunk-BLVO2TSG.js";
import {
  p
} from "./chunk-TEBTNGNL.js";
import {
  t
} from "./chunk-VMCI7OYW.js";
import "./chunk-4UVOIPRT.js";
import "./chunk-R4BXZRFW.js";
import "./chunk-O34PYKME.js";
import "./chunk-5P3RPBFA.js";
import "./chunk-E5SIY76Q.js";
import "./chunk-UD33XSRY.js";
import "./chunk-VF3OV6F3.js";
import "./chunk-TPDXVISU.js";
import "./chunk-VLLUHJV4.js";
import "./chunk-FKDE64FM.js";
import "./chunk-57YJ4LUD.js";
import "./chunk-OXBIWFFC.js";
import "./chunk-6MWN3HK7.js";
import "./chunk-FJNWBRNT.js";
import "./chunk-25MBQJUA.js";
import "./chunk-CVV6MIDL.js";
import "./chunk-UGAC6FVR.js";
import {
  b as b2
} from "./chunk-JIJYOENG.js";
import {
  a as a2
} from "./chunk-UYVMVEPA.js";
import {
  m as m3,
  u as u2
} from "./chunk-6JSVAOL7.js";
import {
  c,
  m as m2
} from "./chunk-7OACEG3J.js";
import "./chunk-ELQLS5UR.js";
import "./chunk-AHPD36K6.js";
import "./chunk-7KWU42EX.js";
import "./chunk-LD5EOJIR.js";
import "./chunk-MYD3EEGE.js";
import "./chunk-3PCQMPQH.js";
import "./chunk-PVAT2NHO.js";
import "./chunk-MPABLVG5.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-PDXC6YP2.js";
import "./chunk-SWYYL7T7.js";
import "./chunk-7VLZMF2B.js";
import "./chunk-4BEZTMLR.js";
import "./chunk-VLH4C4OL.js";
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
import "./chunk-5HYMAKZL.js";
import "./chunk-7OBUFU3X.js";
import {
  z
} from "./chunk-66BNN6ZJ.js";
import "./chunk-NOVKMJNS.js";
import {
  o
} from "./chunk-27A66LHG.js";
import "./chunk-HIM26FXK.js";
import "./chunk-IHMZ3RSY.js";
import "./chunk-GMQ2EQ27.js";
import "./chunk-6YDIQE3P.js";
import "./chunk-XN5EOTP2.js";
import "./chunk-5YBW6KQ6.js";
import "./chunk-VNR3A2IW.js";
import "./chunk-DLX5DTNB.js";
import "./chunk-6LIC47AK.js";
import "./chunk-7J6TZQJ4.js";
import "./chunk-ZNU5NTGY.js";
import {
  I
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
import {
  H2 as H,
  qt
} from "./chunk-EO4UMOUD.js";
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
  f2 as f
} from "./chunk-QRKINRAQ.js";
import {
  s
} from "./chunk-KUWSTWZR.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/layers/GeoRSSLayer.js
var G = ["atom", "xml"];
var P = { base: c, key: "type", typeMap: { "simple-line": m2 }, errorContext: "symbol" };
var R = { base: c, key: "type", typeMap: { "picture-marker": a2, "simple-marker": u2 }, errorContext: "symbol" };
var k = { base: c, key: "type", typeMap: { "simple-fill": m3 }, errorContext: "symbol" };
var _ = class extends p(f2(b(j(t(l(b2)))))) {
  constructor(...e) {
    super(...e), this.description = null, this.fullExtent = null, this.legendEnabled = true, this.lineSymbol = null, this.pointSymbol = null, this.polygonSymbol = null, this.operationalLayerType = "GeoRSS", this.url = null, this.type = "geo-rss";
  }
  normalizeCtorArgs(e, o2) {
    return "string" == typeof e ? { url: e, ...o2 } : e;
  }
  readFeatureCollections(e, o2) {
    return o2.featureCollection.layers.forEach((e2) => {
      var _a;
      const o3 = e2.layerDefinition.drawingInfo.renderer.symbol;
      o3 && "esriSFS" === o3.type && ((_a = o3.outline) == null ? void 0 : _a.style.includes("esriSFS")) && (o3.outline.style = "esriSLSSolid");
    }), o2.featureCollection.layers;
  }
  get hasPoints() {
    return this._hasGeometry("esriGeometryPoint");
  }
  get hasPolylines() {
    return this._hasGeometry("esriGeometryPolyline");
  }
  get hasPolygons() {
    return this._hasGeometry("esriGeometryPolygon");
  }
  get title() {
    const e = this._get("title");
    return e && "defaults" !== this.originOf("title") ? e : this.url ? qt(this.url, G) || "GeoRSS" : e;
  }
  set title(e) {
    this._set("title", e);
  }
  load(e) {
    const o2 = null != e ? e.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Map Service", "Feature Service", "Feature Collection", "Scene Service"] }, e).catch(f).then(() => this._fetchService(o2)).then((e2) => {
      this.read(e2, { origin: "service" });
    })), Promise.resolve(this);
  }
  async hasDataChanged() {
    const e = await this._fetchService();
    return this.read(e, { origin: "service", ignoreDefaults: true }), true;
  }
  async _fetchService(e) {
    const t2 = this.spatialReference, { data: s2 } = await H(s.geoRSSServiceUrl, { query: { url: this.url, refresh: !!this.loaded || void 0, outSR: I(t2) ? void 0 : t2.wkid ?? JSON.stringify(t2) }, signal: e });
    return s2;
  }
  _hasGeometry(e) {
    var _a;
    return ((_a = this.featureCollections) == null ? void 0 : _a.some((o2) => {
      var _a2, _b;
      return ((_a2 = o2.featureSet) == null ? void 0 : _a2.geometryType) === e && ((_b = o2.featureSet.features) == null ? void 0 : _b.length) > 0;
    })) ?? false;
  }
};
__decorate([m()], _.prototype, "description", void 0), __decorate([m()], _.prototype, "featureCollections", void 0), __decorate([o("service", "featureCollections", ["featureCollection.layers"])], _.prototype, "readFeatureCollections", null), __decorate([m({ type: z, json: { name: "lookAtExtent" } })], _.prototype, "fullExtent", void 0), __decorate([m(u)], _.prototype, "id", void 0), __decorate([m(d)], _.prototype, "legendEnabled", void 0), __decorate([m({ types: P, json: { write: true } })], _.prototype, "lineSymbol", void 0), __decorate([m({ type: ["show", "hide"] })], _.prototype, "listMode", void 0), __decorate([m({ types: R, json: { write: true } })], _.prototype, "pointSymbol", void 0), __decorate([m({ types: k, json: { write: true } })], _.prototype, "polygonSymbol", void 0), __decorate([m({ type: ["GeoRSS"] })], _.prototype, "operationalLayerType", void 0), __decorate([m(y)], _.prototype, "url", void 0), __decorate([m({ json: { origins: { service: { read: { source: "name", reader: (e) => e || void 0 } } } } })], _.prototype, "title", null), __decorate([m({ readOnly: true, json: { read: false }, value: "geo-rss" })], _.prototype, "type", void 0), _ = __decorate([a("esri.layers.GeoRSSLayer")], _);
var w = _;
export {
  w as default
};
//# sourceMappingURL=GeoRSSLayer-4YLFLIDN.js.map
