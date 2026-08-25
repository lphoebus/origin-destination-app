import {
  E,
  R as R2
} from "./chunk-7EDHFLTF.js";
import {
  R,
  j as j2,
  w
} from "./chunk-WXGZCYG3.js";
import "./chunk-SPZYEASA.js";
import {
  o
} from "./chunk-AHUKRBGH.js";
import {
  l as l2
} from "./chunk-SJRSC6GG.js";
import {
  s as s2
} from "./chunk-I4PR2JAU.js";
import {
  j
} from "./chunk-X5OKHTDR.js";
import "./chunk-V6PIRVOO.js";
import {
  b2 as b,
  m as m2,
  y
} from "./chunk-C5LXEBBN.js";
import {
  l
} from "./chunk-BLVO2TSG.js";
import {
  t
} from "./chunk-VMCI7OYW.js";
import "./chunk-4UVOIPRT.js";
import "./chunk-R4BXZRFW.js";
import "./chunk-O34PYKME.js";
import "./chunk-UD33XSRY.js";
import "./chunk-GY5SANQF.js";
import "./chunk-VF3OV6F3.js";
import "./chunk-TPDXVISU.js";
import "./chunk-VLLUHJV4.js";
import "./chunk-FKDE64FM.js";
import "./chunk-57YJ4LUD.js";
import "./chunk-OXBIWFFC.js";
import "./chunk-6MWN3HK7.js";
import "./chunk-FJNWBRNT.js";
import "./chunk-25MBQJUA.js";
import {
  b as b2
} from "./chunk-JIJYOENG.js";
import "./chunk-AHPD36K6.js";
import "./chunk-7KWU42EX.js";
import "./chunk-LD5EOJIR.js";
import "./chunk-MYD3EEGE.js";
import "./chunk-3PCQMPQH.js";
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
import "./chunk-7OBUFU3X.js";
import {
  z
} from "./chunk-66BNN6ZJ.js";
import "./chunk-NOVKMJNS.js";
import "./chunk-27A66LHG.js";
import "./chunk-HIM26FXK.js";
import "./chunk-IHMZ3RSY.js";
import "./chunk-GMQ2EQ27.js";
import "./chunk-6YDIQE3P.js";
import "./chunk-XN5EOTP2.js";
import "./chunk-5YBW6KQ6.js";
import "./chunk-VNR3A2IW.js";
import "./chunk-DLX5DTNB.js";
import "./chunk-6LIC47AK.js";
import {
  f as f2
} from "./chunk-7J6TZQJ4.js";
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
import {
  H2 as H
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
  i3 as i,
  s2 as s
} from "./chunk-KUWSTWZR.js";
import {
  has
} from "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/layers/GaussianSplatLayer.js
var E2 = class extends l2(b(j(t(l(s2(o(b2))))))) {
  constructor(e) {
    super(e), this.operationalLayerType = "GaussianSplatLayer", this.type = "gaussian-splat", this.opacity = 1, this.minScale = 0, this.maxScale = 0, this.url = null, this.rootTilesetJSON = null, this.fullExtent = new z(-180, -90, 180, 90, this.spatialReference), this.spatialReference = new f2({ wkid: 4326, vcsWkid: 115700 }), this.esriCrsSpatialReference = null, this.esriCrsFullExtent = null;
  }
  get supportedSpatialReferences() {
    return this.initialized && this.esriCrsSpatialReference ? [this.spatialReference, this.esriCrsSpatialReference] : [this.spatialReference];
  }
  get fullExtents() {
    return this.initialized && this.esriCrsFullExtent ? [this.fullExtent, this.esriCrsFullExtent] : [this.fullExtent];
  }
  set elevationInfo(e) {
    null != e && "absolute-height" !== e.mode || this._set("elevationInfo", e), this._validateElevationInfo(e);
  }
  async load(e) {
    return this.addResolvingPromise(this._doLoad(e)), this;
  }
  async _doLoad(e) {
    const r = null != e ? e.signal : null;
    if (!has("enable-feature:gaussianSplatLayer")) throw new s("GaussianSplatLayer-init:not-supported", "This layer is currently not supported.");
    try {
      await this.loadFromPortal({ supportedTypes: ["3DTiles Service"], validateItem: (e2) => {
        var _a;
        if ((_a = e2.typeKeywords) == null ? void 0 : _a.includes("GaussianSplat")) return true;
        throw new s("portal:invalid-layer-item-type", "Invalid layer item, expected '${expectedType}' ", { expectedType: "3DTiles Service" });
      } }, e);
    } catch (s3) {
      f(s3);
    }
    if (this.url) {
      const e2 = H(this.url, { query: { ...this.customParameters, token: this.apiKey }, responseType: "json", signal: r }).then((e3) => {
        this.rootTilesetJSON = e3.data;
        const t2 = R2(this.rootTilesetJSON);
        this.fullExtent = E(this.rootTilesetJSON, false), this.spatialReference = this.fullExtent.spatialReference, t2 && (this.esriCrsFullExtent = E(this.rootTilesetJSON, true), this.esriCrsSpatialReference = this.esriCrsFullExtent.spatialReference);
      }, (e3) => {
        f(e3);
      });
      await e2;
    }
  }
  _validateElevationInfo(e) {
    const t2 = "Gaussian Splat layers";
    j2(i.getLogger(this), w(t2, "absolute-height", e)), j2(i.getLogger(this), R(t2, e));
  }
};
__decorate([m({ type: ["GaussianSplatLayer"] })], E2.prototype, "operationalLayerType", void 0), __decorate([m({ readOnly: true })], E2.prototype, "type", void 0), __decorate([m({ readOnly: true, json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } } })], E2.prototype, "opacity", void 0), __decorate([m({ type: Number, json: { name: "layerDefinition.minScale", write: true, origins: { service: { read: false, write: false } } } })], E2.prototype, "minScale", void 0), __decorate([m({ type: Number, json: { name: "layerDefinition.maxScale", write: true, origins: { service: { read: false, write: false } } } })], E2.prototype, "maxScale", void 0), __decorate([m(y)], E2.prototype, "url", void 0), __decorate([m({ type: z })], E2.prototype, "fullExtent", void 0), __decorate([m({ type: f2 })], E2.prototype, "spatialReference", void 0), __decorate([m({ readOnly: true })], E2.prototype, "supportedSpatialReferences", null), __decorate([m({ type: [z] })], E2.prototype, "fullExtents", null), __decorate([m({ type: ["show", "hide"] })], E2.prototype, "listMode", void 0), __decorate([m(m2)], E2.prototype, "elevationInfo", null), E2 = __decorate([a("esri.layers.GaussianSplatLayer")], E2);
var L = E2;
export {
  L as default
};
//# sourceMappingURL=GaussianSplatLayer-JSUEJRQ2.js.map
