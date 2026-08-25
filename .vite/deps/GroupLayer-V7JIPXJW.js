import {
  e
} from "./chunk-POLRZPLS.js";
import {
  C
} from "./chunk-KS2SIUHU.js";
import "./chunk-BCTQIS5A.js";
import {
  a as a3
} from "./chunk-4KGWDEAE.js";
import {
  o as o2
} from "./chunk-3INMDTVW.js";
import "./chunk-HB3JH7KQ.js";
import "./chunk-Y2UJY47V.js";
import "./chunk-RQRWUJK2.js";
import {
  n2,
  n3,
  t as t2
} from "./chunk-J5JGNPPQ.js";
import {
  l as l4
} from "./chunk-FRAXXR66.js";
import {
  y
} from "./chunk-QVQ53CNO.js";
import {
  l as l2
} from "./chunk-3IVY6YOS.js";
import {
  j
} from "./chunk-X5OKHTDR.js";
import "./chunk-UCNMOXOX.js";
import "./chunk-V6PIRVOO.js";
import {
  b2 as b
} from "./chunk-C5LXEBBN.js";
import {
  l as l3
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
import {
  k
} from "./chunk-OXBIWFFC.js";
import "./chunk-6MWN3HK7.js";
import "./chunk-FJNWBRNT.js";
import "./chunk-25MBQJUA.js";
import "./chunk-CVV6MIDL.js";
import "./chunk-UGAC6FVR.js";
import {
  b as b2
} from "./chunk-JIJYOENG.js";
import "./chunk-AHPD36K6.js";
import "./chunk-7KWU42EX.js";
import "./chunk-LD5EOJIR.js";
import "./chunk-MYD3EEGE.js";
import "./chunk-2UMDUMDF.js";
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
  a,
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
import "./chunk-EO4UMOUD.js";
import "./chunk-PRKAQBHS.js";
import "./chunk-CYEWK46L.js";
import "./chunk-NVNJVVMF.js";
import "./chunk-63GXB7XB.js";
import "./chunk-5XIDIYOG.js";
import "./chunk-QLJQMJ35.js";
import {
  n
} from "./chunk-HQPAN4GW.js";
import "./chunk-PXFESYJY.js";
import "./chunk-BZQFVEAQ.js";
import {
  L,
  f2 as f
} from "./chunk-QRKINRAQ.js";
import {
  i3 as i
} from "./chunk-KUWSTWZR.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/layers/GroupLayer.js
var C2 = class extends p(t(b(j(n3(n2(l3(b2))))))) {
  constructor(e2) {
    super(e2), this.allLayers = new l4({ getCollections: () => [this.layers], getChildrenFunction: (e3) => "layers" in e3 ? e3.layers : null }), this.allTables = t2(this), this.fullExtent = void 0, this.operationalLayerType = "GroupLayer", this.spatialReference = void 0, this.type = "group", this._debouncedSaveOperations = L(async (e3, t3, i2) => {
      const { save: r2, saveAs: s } = await import("./groupLayerUtils-WOLU4G3L.js");
      switch (e3) {
        case 0:
          return r2(this, t3);
        case 1:
          return s(this, i2, t3);
      }
    });
  }
  initialize() {
    this._enforceVisibility(this.visibilityMode, this.visible), this.addHandles([l(() => {
      let e2 = this.parent;
      for (; e2 && "parent" in e2 && e2.parent; ) e2 = e2.parent;
      return e2 && e in e2;
    }, (e2) => {
      const t3 = "prevent-adding-tables";
      this.removeHandles(t3), e2 && (this.tables.removeAll(), this.addHandles(a(() => this.tables, "before-add", (e3) => {
        e3.preventDefault(), i.getLogger(this).errorOnce("tables", "tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.");
      }), t3));
    }, w), l(() => this.visible, this._onVisibilityChange.bind(this), U)]);
  }
  destroy() {
    this.allLayers.destroy(), this.allTables.destroy();
  }
  get sourceIsPortalItem() {
    return this.portalItem && 7 === this.originIdOf("portalItem");
  }
  _writeLayers(e2, t3, i2, r2) {
    const s = [];
    if (!e2) return s;
    e2.forEach((e3) => {
      const t4 = y(e3, r2.webmap ? r2.webmap.getLayerJSONFromResourceInfo(e3) : null, r2);
      (t4 == null ? void 0 : t4.layerType) && s.push(t4);
    }), t3.layers = s;
  }
  set portalItem(e2) {
    this._set("portalItem", e2);
  }
  readPortalItem(e2, t3, i2) {
    const { itemId: r2, layerType: s } = t3;
    if ("GroupLayer" === s && r2) return new k({ id: r2, portal: i2 == null ? void 0 : i2.portal });
  }
  writePortalItem(e2, t3) {
    (e2 == null ? void 0 : e2.id) && (t3.itemId = e2.id);
  }
  set visibilityMode(e2) {
    const t3 = this._get("visibilityMode") !== e2;
    this._set("visibilityMode", e2), t3 && this._enforceVisibility(e2, this.visible);
  }
  async beforeSave() {
    return o2(this);
  }
  load(e2) {
    const t3 = this.loadFromPortal({ supportedTypes: ["Feature Service", "Feature Collection", "Group Layer", "Scene Service", "Video Service"], layerModuleTypeMap: a3, populateGroupLayer: C }, e2).catch((e3) => {
      if (f(e3), this.sourceIsPortalItem) throw e3;
    });
    return this.addResolvingPromise(t3), Promise.resolve(this);
  }
  async loadAll() {
    return l2(this, (e2) => {
      e2(this.layers, this.tables);
    });
  }
  async save(e2) {
    return this._debouncedSaveOperations(0, e2);
  }
  async saveAs(e2, t3) {
    return this._debouncedSaveOperations(1, t3, e2);
  }
  layerAdded(e2) {
    e2.visible && "exclusive" === this.visibilityMode ? this._turnOffOtherLayers(e2) : "inherited" === this.visibilityMode && (e2.visible = this.visible), this.hasHandles(e2.uid) ? console.error(`Layer read to Grouplayer: uid=${e2.uid}`) : this.addHandles(l(() => e2.visible, (t3) => this._onChildVisibilityChange(e2, t3), U), e2.uid);
  }
  layerRemoved(e2) {
    this.removeHandles(e2.uid), this._enforceVisibility(this.visibilityMode, this.visible);
  }
  _turnOffOtherLayers(e2) {
    this.layers.forEach((t3) => {
      t3 !== e2 && (t3.visible = false);
    });
  }
  _enforceVisibility(e2, t3) {
    if (!n(this).initialized) return;
    const i2 = this.layers;
    let r2 = i2.find((e3) => e3.visible);
    switch (e2) {
      case "exclusive":
        i2.length && !r2 && (r2 = i2.at(0), r2.visible = true), this._turnOffOtherLayers(r2);
        break;
      case "inherited":
        i2.forEach((e3) => {
          e3.visible = t3;
        });
    }
  }
  _onVisibilityChange(e2) {
    "inherited" === this.visibilityMode && this.layers.forEach((t3) => {
      t3.visible = e2;
    });
  }
  _onChildVisibilityChange(e2, t3) {
    switch (this.visibilityMode) {
      case "exclusive":
        t3 ? this._turnOffOtherLayers(e2) : this._isAnyLayerVisible() || (e2.visible = true);
        break;
      case "inherited":
        e2.visible = this.visible;
    }
  }
  _isAnyLayerVisible() {
    return this.layers.some((e2) => e2.visible);
  }
};
__decorate([m({ readOnly: true, dependsOn: [] })], C2.prototype, "allLayers", void 0), __decorate([m({ readOnly: true })], C2.prototype, "allTables", void 0), __decorate([m({ json: { read: true, write: true } })], C2.prototype, "blendMode", void 0), __decorate([m()], C2.prototype, "fullExtent", void 0), __decorate([m({ readOnly: true })], C2.prototype, "sourceIsPortalItem", null), __decorate([m({ json: { read: false, write: { ignoreOrigin: true } } })], C2.prototype, "layers", void 0), __decorate([r("layers")], C2.prototype, "_writeLayers", null), __decorate([m({ type: ["GroupLayer"] })], C2.prototype, "operationalLayerType", void 0), __decorate([m({ json: { origins: { "web-map": { read: false, write: { overridePolicy(e2, t3, i2) {
  return { enabled: "Group Layer" === (e2 == null ? void 0 : e2.type) && (i2 == null ? void 0 : i2.initiator) !== this };
} } }, "web-scene": { read: false, write: false } } } })], C2.prototype, "portalItem", null), __decorate([o("web-map", "portalItem", ["itemId"])], C2.prototype, "readPortalItem", null), __decorate([r("web-map", "portalItem", { itemId: { type: String } })], C2.prototype, "writePortalItem", null), __decorate([m()], C2.prototype, "spatialReference", void 0), __decorate([m({ json: { read: false }, readOnly: true, value: "group" })], C2.prototype, "type", void 0), __decorate([m({ type: ["independent", "inherited", "exclusive"], value: "independent", json: { write: true, origins: { "web-map": { type: ["independent", "exclusive"], write: (e2, t3, i2) => {
  "inherited" !== e2 && (t3[i2] = e2);
} } } } })], C2.prototype, "visibilityMode", null), C2 = __decorate([a2("esri.layers.GroupLayer")], C2);
var V = C2;
export {
  V as default
};
//# sourceMappingURL=GroupLayer-V7JIPXJW.js.map
