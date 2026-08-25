import {
  j
} from "./chunk-X5OKHTDR.js";
import "./chunk-V6PIRVOO.js";
import {
  l
} from "./chunk-BLVO2TSG.js";
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
  b
} from "./chunk-JIJYOENG.js";
import "./chunk-3PCQMPQH.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-PDXC6YP2.js";
import "./chunk-SWYYL7T7.js";
import "./chunk-7VLZMF2B.js";
import "./chunk-4BEZTMLR.js";
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
import "./chunk-EO4UMOUD.js";
import "./chunk-PRKAQBHS.js";
import "./chunk-CYEWK46L.js";
import "./chunk-NVNJVVMF.js";
import "./chunk-63GXB7XB.js";
import {
  A
} from "./chunk-5XIDIYOG.js";
import "./chunk-QLJQMJ35.js";
import "./chunk-HQPAN4GW.js";
import "./chunk-PXFESYJY.js";
import "./chunk-BZQFVEAQ.js";
import "./chunk-QRKINRAQ.js";
import {
  s2 as s
} from "./chunk-KUWSTWZR.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/layers/UnsupportedLayer.js
var l2 = class extends j(l(b)) {
  constructor(e) {
    super(e), this.resourceInfo = null, this.persistenceEnabled = true, this.type = "unsupported";
  }
  initialize() {
    this.addResolvingPromise(new Promise((e, o) => {
      A(() => {
        const e2 = this.resourceInfo && (this.resourceInfo.layerType || this.resourceInfo.type);
        let t = "Unsupported layer type";
        e2 && (t += " " + e2), o(new s("layer:unsupported-layer-type", t, { layerType: e2 }));
      });
    }));
  }
  read(e, r) {
    const o = { resourceInfo: e };
    null != e.id && (o.id = e.id), null != e.title && (o.title = e.title), super.read(o, r);
  }
  write(e, r) {
    return Object.assign(e || {}, this.resourceInfo, { id: this.id });
  }
};
__decorate([m({ readOnly: true })], l2.prototype, "resourceInfo", void 0), __decorate([m({ type: ["show", "hide"] })], l2.prototype, "listMode", void 0), __decorate([m({ type: Boolean, readOnly: false })], l2.prototype, "persistenceEnabled", void 0), __decorate([m({ json: { read: false }, readOnly: true, value: "unsupported" })], l2.prototype, "type", void 0), l2 = __decorate([a("esri.layers.UnsupportedLayer")], l2);
var a2 = l2;
export {
  a2 as default
};
//# sourceMappingURL=UnsupportedLayer-YTPSOWKH.js.map
