import {
  p
} from "./chunk-YWSQTW64.js";
import "./chunk-P2DFXVPO.js";
import "./chunk-IN3M3DGO.js";
import {
  o as o2
} from "./chunk-LSWPCDDB.js";
import "./chunk-2ST7JUXN.js";
import "./chunk-IFRXGUYI.js";
import "./chunk-EQZMGADF.js";
import {
  l as l2
} from "./chunk-SJRSC6GG.js";
import {
  j
} from "./chunk-X5OKHTDR.js";
import "./chunk-V6PIRVOO.js";
import {
  b2 as b,
  y
} from "./chunk-C5LXEBBN.js";
import {
  l
} from "./chunk-BLVO2TSG.js";
import "./chunk-3VQPIBWQ.js";
import "./chunk-NJGE4AQH.js";
import "./chunk-4UVOIPRT.js";
import "./chunk-R4BXZRFW.js";
import "./chunk-O34PYKME.js";
import "./chunk-UD33XSRY.js";
import {
  m as m2
} from "./chunk-GY5SANQF.js";
import "./chunk-WB7QIPJO.js";
import "./chunk-6SW7QJSX.js";
import "./chunk-CG7LVCFL.js";
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
import "./chunk-QN24DCIC.js";
import "./chunk-TVEPRWYA.js";
import "./chunk-3PVGVNCV.js";
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
import {
  A,
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
  f2 as f,
  s as s2,
  t2 as t
} from "./chunk-QRKINRAQ.js";
import {
  s2 as s
} from "./chunk-KUWSTWZR.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/layers/support/ElevationTileData.js
var a2 = class {
  constructor(a3, t3, s4, e) {
    this._hasNoDataValues = null, this._minValue = null, this._maxValue = null, "pixelData" in a3 ? (this.values = a3.pixelData, this.width = a3.width, this.height = a3.height, this.noDataValue = a3.noDataValue) : (this.values = a3, this.width = t3, this.height = s4, this.noDataValue = e);
  }
  get hasNoDataValues() {
    if (null == this._hasNoDataValues) {
      const a3 = this.noDataValue;
      this._hasNoDataValues = this.values.includes(a3);
    }
    return this._hasNoDataValues;
  }
  get minValue() {
    return this._ensureBounds(), this._minValue;
  }
  get maxValue() {
    return this._ensureBounds(), this._maxValue;
  }
  get usedMemory() {
    return this.values.byteLength + 256;
  }
  _ensureBounds() {
    if (null != this._minValue) return;
    const { noDataValue: a3, values: t3 } = this;
    let s4 = 1 / 0, e = -1 / 0, i = true;
    for (const u of t3) u === a3 ? this._hasNoDataValues = true : (s4 = u < s4 ? u : s4, e = u > e ? u : e, i = false);
    i ? (this._minValue = 0, this._maxValue = 0) : (this._minValue = s4, this._maxValue = e > -3e38 ? e : 0);
  }
};

// node_modules/@arcgis/core/layers/support/LercDecoder.js
var r = class extends o2 {
  constructor(e = null) {
    super("LercWorker", "_decode", { _decode: (e2) => [e2.buffer] }, e, { strategy: "dedicated" }), this.schedule = e, this.ref = 0;
  }
  decode(e, r2, t3) {
    return e && 0 !== e.byteLength ? this.invoke({ buffer: e, options: r2 }, t3) : Promise.resolve(null);
  }
  release() {
    --this.ref <= 0 && (t2.forEach((e, r2) => {
      e === this && t2.delete(r2);
    }), this.destroy());
  }
};
var t2 = /* @__PURE__ */ new Map();
function s3(e = null) {
  let s4 = t2.get(e);
  return s4 || (null != e ? (s4 = new r((r2) => e.immediate.schedule(r2)), t2.set(e, s4)) : (s4 = new r(), t2.set(null, s4))), ++s4.ref, s4;
}

// node_modules/@arcgis/core/layers/ElevationLayer.js
var S = class extends p(l2(b(j(l(b2))))) {
  constructor(...e) {
    super(...e), this.capabilities = { operations: { supportsTileMap: false } }, this.copyright = null, this.heightModelInfo = null, this.path = null, this.minScale = void 0, this.maxScale = void 0, this.opacity = 1, this.operationalLayerType = "ArcGISTiledElevationServiceLayer", this.sourceJSON = null, this.type = "elevation", this.url = null, this.version = null, this._lercDecoder = s3();
  }
  normalizeCtorArgs(e, r2) {
    return "string" == typeof e ? { url: e, ...r2 } : e;
  }
  destroy() {
    this._lercDecoder = t(this._lercDecoder);
  }
  readCapabilities(e, r2) {
    const t3 = r2.capabilities && r2.capabilities.split(",").map((e2) => e2.toLowerCase().trim());
    if (!t3) return { operations: { supportsTileMap: false } };
    return { operations: { supportsTileMap: t3.includes("tilemap") } };
  }
  readVersion(e, r2) {
    let t3 = r2.currentVersion;
    return t3 || (t3 = 9.3), t3;
  }
  load(e) {
    const r2 = null != e ? e.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Image Service"], supportsData: false, validateItem: (e2) => {
      if (e2.typeKeywords) {
        for (let r3 = 0; r3 < e2.typeKeywords.length; r3++) if ("elevation 3d layer" === e2.typeKeywords[r3].toLowerCase()) return true;
      }
      throw new s("portal:invalid-layer-item-type", "Invalid layer item type '${type}', expected '${expectedType}' ", { type: "Image Service", expectedType: "Image Service Elevation 3D Layer" });
    } }, e).catch(f).then(() => this._fetchImageService(r2))), Promise.resolve(this);
  }
  fetchTile(e, t3, i, o3) {
    const s4 = o3 == null ? void 0 : o3.signal, a3 = { responseType: "array-buffer", signal: s4 }, p2 = { noDataValue: o3 == null ? void 0 : o3.noDataValue, returnFileInfo: true };
    return this.load().then(() => this._fetchTileAvailability(e, t3, i, o3)).then(() => H(this.getTileUrl(e, t3, i), a3)).then((e2) => this._lercDecoder.decode(e2.data, p2, s4)).then((e2) => new a2(e2));
  }
  getTileUrl(e, r2, t3) {
    const i = !this.capabilities.operations.supportsTileMap && this.supportsBlankTile, o3 = A({ ...this.parsedUrl.query, blankTile: !i && null });
    return `${this.parsedUrl.path}/tile/${e}/${r2}/${t3}${o3 ? "?" + o3 : ""}`;
  }
  async queryElevation(e, r2) {
    const { query: t3 } = await import("./ElevationQuery-VK5T4H2V.js");
    return s2(r2), t3(this, e, r2);
  }
  async createElevationSampler(e, r2) {
    const { createSampler: t3 } = await import("./ElevationQuery-VK5T4H2V.js");
    return s2(r2), t3(this, e, r2);
  }
  _fetchTileAvailability(e, r2, t3, i) {
    return this.tilemapCache ? this.tilemapCache.fetchAvailability(e, r2, t3, i) : Promise.resolve("unknown");
  }
  async _fetchImageService(e) {
    var _a;
    if (this.sourceJSON) return this.sourceJSON;
    const t3 = { query: { f: "json", ...this.parsedUrl.query }, responseType: "json", signal: e }, i = await H(this.parsedUrl.path, t3);
    i.ssl && (this.url = (_a = this.url) == null ? void 0 : _a.replace(/^http:/i, "https:")), this.sourceJSON = i.data, this.read(i.data, { origin: "service", url: this.parsedUrl });
  }
  get hasOverriddenFetchTile() {
    return !this.fetchTile[w];
  }
};
__decorate([m({ readOnly: true })], S.prototype, "capabilities", void 0), __decorate([o("service", "capabilities", ["capabilities"])], S.prototype, "readCapabilities", null), __decorate([m({ json: { read: { source: "copyrightText" } } })], S.prototype, "copyright", void 0), __decorate([m({ readOnly: true, type: m2 })], S.prototype, "heightModelInfo", void 0), __decorate([m({ type: String, json: { origins: { "web-scene": { read: true, write: true } }, read: false } })], S.prototype, "path", void 0), __decorate([m({ type: ["show", "hide"] })], S.prototype, "listMode", void 0), __decorate([m({ json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } }, readOnly: true })], S.prototype, "minScale", void 0), __decorate([m({ json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } }, readOnly: true })], S.prototype, "maxScale", void 0), __decorate([m({ json: { read: false, write: false, origins: { "web-document": { read: false, write: false } } } })], S.prototype, "opacity", void 0), __decorate([m({ type: ["ArcGISTiledElevationServiceLayer"] })], S.prototype, "operationalLayerType", void 0), __decorate([m()], S.prototype, "sourceJSON", void 0), __decorate([m({ json: { read: false }, value: "elevation", readOnly: true })], S.prototype, "type", void 0), __decorate([m(y)], S.prototype, "url", void 0), __decorate([m()], S.prototype, "version", void 0), __decorate([o("version", ["currentVersion"])], S.prototype, "readVersion", null), S = __decorate([a("esri.layers.ElevationLayer")], S);
var w = Symbol("default-fetch-tile");
S.prototype.fetchTile[w] = true;
var T = S;
export {
  T as default
};
//# sourceMappingURL=ElevationLayer-C2VDKPKO.js.map
