import {
  n
} from "./chunk-JC7EFDG7.js";
import {
  a as a3,
  m as m3,
  p as p2,
  y
} from "./chunk-2LZL3NMJ.js";
import {
  _
} from "./chunk-7E6ZILBP.js";
import "./chunk-53UJTPCO.js";
import {
  R,
  j as j2,
  w
} from "./chunk-WXGZCYG3.js";
import "./chunk-UHCTIAVL.js";
import "./chunk-3INMDTVW.js";
import "./chunk-3NVF3ZGJ.js";
import "./chunk-TGTN62EC.js";
import {
  j as j3
} from "./chunk-NSLYQCR2.js";
import "./chunk-NDBG54OC.js";
import "./chunk-JJHBCOSL.js";
import "./chunk-UAEG2GO3.js";
import {
  o as o2
} from "./chunk-AHUKRBGH.js";
import {
  l as l3
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
  m as m2
} from "./chunk-C5LXEBBN.js";
import {
  l as l2
} from "./chunk-BLVO2TSG.js";
import {
  t as t2
} from "./chunk-VMCI7OYW.js";
import "./chunk-4UVOIPRT.js";
import "./chunk-R4BXZRFW.js";
import "./chunk-O34PYKME.js";
import "./chunk-UD33XSRY.js";
import "./chunk-BX43VHN2.js";
import "./chunk-GY5SANQF.js";
import "./chunk-VF3OV6F3.js";
import "./chunk-TPDXVISU.js";
import "./chunk-VLLUHJV4.js";
import "./chunk-FKDE64FM.js";
import "./chunk-57YJ4LUD.js";
import "./chunk-OXBIWFFC.js";
import "./chunk-XG5BA6RK.js";
import {
  t
} from "./chunk-6MWN3HK7.js";
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
import {
  l
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
import "./chunk-HXC5WSBJ.js";
import "./chunk-I2W3LINK.js";
import "./chunk-5HYMAKZL.js";
import "./chunk-7OBUFU3X.js";
import "./chunk-66BNN6ZJ.js";
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
import {
  U,
  a
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
  a2
} from "./chunk-HPSHCA6S.js";
import "./chunk-PB4SYOXK.js";
import "./chunk-GJFVHE2X.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";
import {
  p
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
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/layers/IntegratedMeshLayer.js
var A = class extends _(l3(b(j(t2(l2(s2(o2(l(b2))))))))) {
  constructor(...e) {
    super(...e), this.geometryType = "mesh", this.operationalLayerType = "IntegratedMeshLayer", this.type = "integrated-mesh", this.nodePages = null, this.materialDefinitions = null, this.textureSetDefinitions = null, this.geometryDefinitions = null, this.serviceUpdateTimeStamp = null, this.profile = "mesh-pyramids", this.modifications = null, this.path = null, this.definitionExpression = null, this._canReplaceTerrain = false;
  }
  initialize() {
    this.addHandles(a(() => this.modifications, "after-changes", () => this.modifications = this.modifications, U));
  }
  normalizeCtorArgs(e, t3) {
    return "string" == typeof e ? { url: e, ...t3 } : e;
  }
  readModifications(e, t3, r) {
    this._modificationsSource = { url: p(e, r), context: r };
  }
  set elevationInfo(e) {
    null != e && "absolute-height" !== e.mode || this._set("elevationInfo", e), this._validateElevationInfo(e);
  }
  async load(e) {
    return this.addResolvingPromise(this._doLoad(e)), this;
  }
  async _doLoad(e) {
    const t3 = e == null ? void 0 : e.signal;
    try {
      await this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e);
    } catch (r) {
      f(r);
    }
    if (await this._fetchService(t3), null != this._modificationsSource) {
      const t4 = await n.fromUrl(this._modificationsSource.url, this.spatialReference, e);
      this.setAtOrigin("modifications", t4, this._modificationsSource.context.origin), this._modificationsSource = null;
    }
    await this._fetchIndexAndUpdateExtent(this.nodePages, t3);
  }
  beforeSave() {
    if (null != this._modificationsSource) return this.load().then(() => {
    }, () => {
    });
  }
  async saveAs(e, t3) {
    return this._debouncedSaveOperations(1, { ...t3, getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "integrated-mesh" }, e);
  }
  async save() {
    const e = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "integrated-mesh" };
    return this._debouncedSaveOperations(0, e);
  }
  validateLayer(e) {
    if (e.layerType && "IntegratedMesh" !== e.layerType) throw new s("integrated-mesh-layer:layer-type-not-supported", "IntegratedMeshLayer does not support this layer type", { layerType: e.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor)) throw new s("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "1.x" });
    if (this.version.major > 1) throw new s("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "1.x" });
  }
  _getTypeKeywords() {
    return ["IntegratedMeshLayer"];
  }
  _validateElevationInfo(e) {
    const t3 = "Integrated mesh layers";
    j2(i.getLogger(this), w(t3, "absolute-height", e)), j2(i.getLogger(this), R(t3, e));
  }
  get replacesTerrain() {
    return this._canReplaceTerrain && this._isUsedAsGroundLayer;
  }
  get _isUsedAsGroundLayer() {
    return t(this.parent);
  }
};
__decorate([m({ type: String, readOnly: true })], A.prototype, "geometryType", void 0), __decorate([m({ type: ["show", "hide"] })], A.prototype, "listMode", void 0), __decorate([m({ type: ["IntegratedMeshLayer"] })], A.prototype, "operationalLayerType", void 0), __decorate([m({ json: { read: false }, readOnly: true })], A.prototype, "type", void 0), __decorate([m({ type: p2, readOnly: true, clonable: false })], A.prototype, "nodePages", void 0), __decorate([m({ type: [a3], readOnly: true, clonable: false })], A.prototype, "materialDefinitions", void 0), __decorate([m({ type: [y], readOnly: true, clonable: false })], A.prototype, "textureSetDefinitions", void 0), __decorate([m({ type: [m3], readOnly: true, clonable: false })], A.prototype, "geometryDefinitions", void 0), __decorate([m({ readOnly: true })], A.prototype, "serviceUpdateTimeStamp", void 0), __decorate([m({ type: n, clonable: (e) => (e == null ? void 0 : e.clone()) ?? e }), j3({ origins: ["web-scene", "portal-item"], type: "resource", prefix: "modifications" })], A.prototype, "modifications", void 0), __decorate([o(["web-scene", "portal-item"], "modifications")], A.prototype, "readModifications", null), __decorate([m(m2)], A.prototype, "elevationInfo", null), __decorate([m({ type: String, json: { origins: { "web-scene": { read: true, write: true }, "portal-item": { read: true, write: true } }, read: false } })], A.prototype, "path", void 0), __decorate([m()], A.prototype, "replacesTerrain", null), __decorate([m()], A.prototype, "_isUsedAsGroundLayer", null), __decorate([m()], A.prototype, "_canReplaceTerrain", void 0), A = __decorate([a2("esri.layers.IntegratedMeshLayer")], A);
var P = A;
export {
  P as default
};
//# sourceMappingURL=IntegratedMeshLayer-UOQKIW5R.js.map
