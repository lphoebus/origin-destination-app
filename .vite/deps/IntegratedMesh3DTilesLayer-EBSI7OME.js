import {
  n
} from "./chunk-JC7EFDG7.js";
import {
  E
} from "./chunk-7EDHFLTF.js";
import {
  R,
  j as j2,
  w
} from "./chunk-WXGZCYG3.js";
import {
  j as j3
} from "./chunk-NSLYQCR2.js";
import "./chunk-NDBG54OC.js";
import "./chunk-JJHBCOSL.js";
import "./chunk-SPZYEASA.js";
import {
  o as o2
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
import {
  M
} from "./chunk-3PCQMPQH.js";
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
  a2
} from "./chunk-HPSHCA6S.js";
import "./chunk-PB4SYOXK.js";
import "./chunk-GJFVHE2X.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";
import {
  H2 as H,
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

// node_modules/@arcgis/core/layers/IntegratedMesh3DTilesLayer.js
var D = class extends l2(b(j(t2(l(s2(o2(b2))))))) {
  readModifications(e, t3, o3) {
    this._modificationsSource = { url: p(e, o3), context: o3 };
  }
  initialize() {
    this.addHandles(a(() => this.modifications, "after-changes", () => this.modifications = this.modifications, U));
  }
  constructor(e) {
    super(e), this.operationalLayerType = "IntegratedMesh3DTilesLayer", this.modifications = null, this._modificationsSource = null, this.spatialReference = new f2({ wkid: 4326, vcsWkid: 115700 }), this.fullExtent = new z(-180, -90, 180, 90, this.spatialReference), this.url = null, this.type = "integrated-mesh-3dtiles", this.path = null, this.minScale = 0, this.maxScale = 0, this._rootTilesetJSON = null, this._rootTileset = null, this._key = null, this._session = null, this._rootRequestPromise = null;
  }
  set elevationInfo(e) {
    null != e && "absolute-height" !== e.mode || this._set("elevationInfo", e), this._validateElevationInfo(e);
  }
  async load(e) {
    return this.addResolvingPromise(this._doLoad(e)), this;
  }
  get rootTilesetJSON() {
    return this._rootTilesetJSON;
  }
  get rootTileset() {
    return this._rootTileset;
  }
  get key() {
    return this._key;
  }
  get session() {
    return this._session;
  }
  _findSessionParameter(e) {
    const t3 = [e];
    for (; (t3 == null ? void 0 : t3.length) > 0; ) {
      const e2 = t3.pop();
      if (!e2) return;
      for (const [r, i2] of Object.entries(e2)) {
        if ("uri" === r) try {
          const e3 = new URL("https://tmp" + i2).searchParams.get("session");
          if (e3) return e3;
        } catch (o3) {
        }
        "object" == typeof i2 && null !== i2 && t3.push(i2);
      }
    }
    return null;
  }
  async requestRootAndSession(e) {
    const i2 = (e2, t3) => new s("3dtiles-init:" + e2, t3);
    return this._rootRequestPromise || (this._rootRequestPromise = new Promise((o3, n2) => {
      this.url || n2(i2("url-missing", "Layer url missing")), this._key = this.customParameters ? this.customParameters.key : null;
      new Promise((e2, o4) => {
        var _a, _b, _c;
        if (this.replacesTerrain && !this._key) {
          const r = ((_a = this.portalItem) == null ? void 0 : _a.portal) || ((_c = (_b = this.parent) == null ? void 0 : _b.portalItem) == null ? void 0 : _c.portal) || M.getDefault();
          r.signIn().then(() => {
            r.g3dTilesEnabled ? H(r.restUrl + "/portals/self/modules/g3dtiles", { responseType: "json", query: { f: "json" } }).then((t3) => {
              this._key = t3.data.keyString, e2();
            }, () => o4(i2("g3dtiles-key-error", "Error fetching Google 3D Tiles key from portal"))) : o4(i2("g3dTilesEnabled-false", "Google 3D Tiles are not enabled on Portal " + r.url));
          }, () => o4(i2("sign-in-failed", "Error signing in to Portal")));
        } else e2();
      }).then(() => {
        H(this.url, { query: this._key ? { key: this._key, token: this.apiKey } : { token: this.apiKey }, responseType: "array-buffer", signal: e }).then((e2) => {
          try {
            this._rootTilesetJSON = JSON.parse(new TextDecoder().decode(e2.data));
          } catch (t3) {
            return void n2(i2("root-parse-failed", "Error parsing root tile, details: " + t3));
          }
          this._rootTilesetJSON ? (this._session = this._findSessionParameter(this._rootTilesetJSON), this._rootTileset = e2.data, this.fullExtent = E(this._rootTilesetJSON), o3(), this._rootRequestPromise = null) : n2(i2("root-is-null", "Root tile is null."));
        }, (e2) => {
          f(e2), n2(i2("root-load-failed", "Error loading root tile")), this._rootRequestPromise = null, i.getLogger("IntegratedMesh3DTilesLayer").error("Layer loading failed", e2);
        });
      }, (e2) => n2(e2));
    })), this._rootRequestPromise;
  }
  async _doLoad(e) {
    const t3 = null != e ? e.signal : null;
    if (this._isUsedAsGroundLayer) throw new s("3dtiles-init:not-supported-in-groundlayers", "Layer is not supported in basemap.");
    try {
      await this.loadFromPortal({ supportedTypes: ["3DTiles Service"], validateItem: (e2) => {
        var _a;
        if ((_a = e2.typeKeywords) == null ? void 0 : _a.includes("IntegratedMesh")) return true;
        throw new s("portal:invalid-layer-item-type", "Invalid layer item, expected '${expectedType}' ", { expectedType: "3DTiles Service containing IntegratedMesh" });
      } }, e);
    } catch (r) {
      f(r);
    }
    if (null != this._modificationsSource) {
      const t4 = await n.fromUrl(this._modificationsSource.url, this.spatialReference, e);
      this.setAtOrigin("modifications", t4, this._modificationsSource.context.origin), this._modificationsSource = null;
    }
    await this.requestRootAndSession(t3);
  }
  beforeSave() {
    if (null != this._modificationsSource) return this.load().then(() => {
    }, () => {
    });
  }
  get hasAttributionData() {
    return false;
  }
  async fetchAttributionData() {
    return {};
  }
  _validateElevationInfo(e) {
    const t3 = "Integrated mesh 3d tiles layers";
    j2(i.getLogger(this), w(t3, "absolute-height", e)), j2(i.getLogger(this), R(t3, e));
  }
  get replacesTerrain() {
    return false;
  }
  get _isUsedAsGroundLayer() {
    return t(this.parent);
  }
  get hasGoogleUrl() {
    var _a;
    return !!((_a = this.url) == null ? void 0 : _a.match(/.+\.googleapis.com/));
  }
};
__decorate([m({ type: ["IntegratedMesh3DTilesLayer"] })], D.prototype, "operationalLayerType", void 0), __decorate([m({ type: n, clonable: (e) => e.clone() }), j3({ origins: ["web-scene", "portal-item"], type: "resource", prefix: "modifications" })], D.prototype, "modifications", void 0), __decorate([o(["web-scene", "portal-item"], "modifications")], D.prototype, "readModifications", null), __decorate([m({ type: f2 })], D.prototype, "spatialReference", void 0), __decorate([m({ type: z })], D.prototype, "fullExtent", void 0), __decorate([m(m2)], D.prototype, "elevationInfo", null), __decorate([m({ type: ["show", "hide"] })], D.prototype, "listMode", void 0), __decorate([m(y)], D.prototype, "url", void 0), __decorate([m({ readOnly: true })], D.prototype, "type", void 0), __decorate([m({ type: String, json: { origins: { "web-scene": { read: true, write: true }, "portal-item": { read: true, write: true } }, read: false } })], D.prototype, "path", void 0), __decorate([m({ type: Number, json: { name: "layerDefinition.minScale", write: true, origins: { service: { read: false, write: false } } } })], D.prototype, "minScale", void 0), __decorate([m({ type: Number, json: { name: "layerDefinition.maxScale", write: true, origins: { service: { read: false, write: false } } } })], D.prototype, "maxScale", void 0), __decorate([m()], D.prototype, "replacesTerrain", null), __decorate([m()], D.prototype, "_isUsedAsGroundLayer", null), __decorate([m()], D.prototype, "hasGoogleUrl", null), D = __decorate([a2("esri.layers.IntegratedMesh3DTilesLayer")], D);
var O = D;
export {
  O as default
};
//# sourceMappingURL=IntegratedMesh3DTilesLayer-EBSI7OME.js.map
