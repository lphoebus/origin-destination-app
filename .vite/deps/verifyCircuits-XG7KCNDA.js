import {
  t
} from "./chunk-4RL3UO6Q.js";
import "./chunk-SBC46NPP.js";
import "./chunk-UVUMG3B2.js";
import "./chunk-KOHHXDNE.js";
import "./chunk-57ETVQUV.js";
import "./chunk-DNQU52JW.js";
import "./chunk-ZTT7LSRG.js";
import "./chunk-SPZYEASA.js";
import "./chunk-KR46Y4WW.js";
import "./chunk-VWYWPNIA.js";
import "./chunk-IABCCFYF.js";
import "./chunk-RGNEOB6I.js";
import "./chunk-S37ZVBOB.js";
import "./chunk-VR3OXZAC.js";
import {
  f,
  s,
  u
} from "./chunk-WNOCFBHR.js";
import "./chunk-VF3OV6F3.js";
import "./chunk-TPDXVISU.js";
import "./chunk-VLLUHJV4.js";
import "./chunk-FKDE64FM.js";
import "./chunk-57YJ4LUD.js";
import "./chunk-XG5BA6RK.js";
import "./chunk-6MWN3HK7.js";
import "./chunk-25MBQJUA.js";
import "./chunk-UGAC6FVR.js";
import "./chunk-JIJYOENG.js";
import "./chunk-IG7ETWYB.js";
import "./chunk-D6CL4FKW.js";
import "./chunk-PHUTVPCW.js";
import "./chunk-PKMCKJ2F.js";
import "./chunk-EMUDAHJ3.js";
import "./chunk-EUDAX724.js";
import "./chunk-UYVMVEPA.js";
import "./chunk-JJOFZPNA.js";
import "./chunk-4BEDL4SU.js";
import "./chunk-6JSVAOL7.js";
import "./chunk-7OACEG3J.js";
import "./chunk-ELQLS5UR.js";
import "./chunk-TBHN7NEG.js";
import "./chunk-VR6VPSRB.js";
import "./chunk-R5IGYILM.js";
import "./chunk-WWZXCVZD.js";
import "./chunk-AHPD36K6.js";
import "./chunk-7KWU42EX.js";
import "./chunk-LD5EOJIR.js";
import "./chunk-MYD3EEGE.js";
import "./chunk-2UMDUMDF.js";
import "./chunk-3PCQMPQH.js";
import "./chunk-PVAT2NHO.js";
import "./chunk-MPABLVG5.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-3MKPTM6T.js";
import "./chunk-PDXC6YP2.js";
import "./chunk-SWYYL7T7.js";
import "./chunk-YOKAK57B.js";
import "./chunk-7VLZMF2B.js";
import "./chunk-4BEZTMLR.js";
import "./chunk-GTUYDBKL.js";
import "./chunk-VLH4C4OL.js";
import "./chunk-MWWK5WRN.js";
import "./chunk-PDYTYXXK.js";
import "./chunk-B7MDSPWU.js";
import {
  y3 as y
} from "./chunk-JM7F7WRC.js";
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
import "./chunk-DLX5DTNB.js";
import "./chunk-6LIC47AK.js";
import "./chunk-7J6TZQJ4.js";
import "./chunk-ZNU5NTGY.js";
import "./chunk-J3VZVJYU.js";
import "./chunk-U2QKMJ4B.js";
import "./chunk-UWOUWJRN.js";
import {
  n
} from "./chunk-4EJ2CVAA.js";
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
import "./chunk-QRKINRAQ.js";
import "./chunk-KUWSTWZR.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/rest/networks/circuits/support/CircuitVerifyResult.js
var p = class extends n {
  constructor(r) {
    super(r), this.error = null, this.geometry = null, this.name = null;
  }
};
__decorate([m({ type: Object })], p.prototype, "error", void 0), __decorate([m({ type: y })], p.prototype, "geometry", void 0), __decorate([m({ type: String })], p.prototype, "name", void 0), p = __decorate([a("esri.rest.networks.circuits.support.CircuitVerifyResult")], p);
var i = p;

// node_modules/@arcgis/core/rest/networks/circuits/support/VerifyCircuitsResult.js
var c = class extends n {
  constructor(r) {
    super(r), this.circuits = [], this.moment = null, this.exceededTransferLimit = false, this.serviceEdits = null;
  }
  readServiceEdits(r, e) {
    return t(r);
  }
};
__decorate([m({ type: [i], json: { type: [i], write: true } })], c.prototype, "circuits", void 0), __decorate([m({ type: Date, json: { type: Number, write: { writer: (r, e) => {
  e.moment = r ? r.getTime() : null;
} } } })], c.prototype, "moment", void 0), __decorate([m({ type: Boolean, json: { type: Boolean, write: true } })], c.prototype, "exceededTransferLimit", void 0), __decorate([m({ type: [Object], json: { type: [Object], write: true } })], c.prototype, "serviceEdits", void 0), __decorate([o("serviceEdits")], c.prototype, "readServiceEdits", null), c = __decorate([a("esri.rest.networks.circuits.support.VerifyCircuitsResult")], c);

// node_modules/@arcgis/core/rest/networks/circuits/verifyCircuits.js
async function c2(c3, u2, e) {
  const f2 = f(c3), m2 = u2.toJSON();
  u2.circuits && (m2.circuits = JSON.stringify(u2.circuits));
  const n2 = { ...m2, f: "json" }, p2 = u({ ...f2.query, ...n2 }), a2 = s(p2, { ...e, method: "post" }), y2 = `${f2.path}/circuits/verify`, { data: j } = await H(y2, a2);
  return c.fromJSON(j);
}
export {
  c2 as verifyCircuits
};
//# sourceMappingURL=verifyCircuits-XG7KCNDA.js.map
