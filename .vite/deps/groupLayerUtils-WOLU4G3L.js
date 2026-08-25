import {
  p
} from "./chunk-53UJTPCO.js";
import {
  $,
  P
} from "./chunk-3LRSZOWP.js";
import "./chunk-UHCTIAVL.js";
import "./chunk-3INMDTVW.js";
import "./chunk-3NVF3ZGJ.js";
import {
  o
} from "./chunk-TGTN62EC.js";
import "./chunk-JJHBCOSL.js";
import {
  E,
  c,
  i,
  s
} from "./chunk-V6PIRVOO.js";
import "./chunk-VF3OV6F3.js";
import "./chunk-TPDXVISU.js";
import "./chunk-VLLUHJV4.js";
import "./chunk-FKDE64FM.js";
import "./chunk-57YJ4LUD.js";
import "./chunk-OXBIWFFC.js";
import "./chunk-XG5BA6RK.js";
import "./chunk-6MWN3HK7.js";
import "./chunk-25MBQJUA.js";
import "./chunk-JIJYOENG.js";
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
import "./chunk-TSVVEDRS.js";
import "./chunk-HPSHCA6S.js";
import "./chunk-PB4SYOXK.js";
import "./chunk-GJFVHE2X.js";
import "./chunk-A44PNKPT.js";
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
import "./chunk-QRKINRAQ.js";
import "./chunk-KUWSTWZR.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/layers/save/groupLayerUtils.js
var u = "Group Layer";
var c2 = "group-layer-save";
var l = "group-layer-save-as";
var p2 = E.GROUP_LAYER_MAP;
function m(e) {
  return { isValid: "group" === e.type, errorMessage: "Layer.type should be 'group'" };
}
function y(e) {
  return { isValid: s(e, p2), errorMessage: `Layer.portalItem.typeKeywords should have '${p2}'` };
}
function f(e, r) {
  return { ...o(e, "web-map", true), initiator: r };
}
function v(e) {
  const r = e.layerJSON;
  return Promise.resolve(r && Object.keys(r).length ? r : null);
}
async function d(e, r) {
  r.title || (r.title = e.title), c(r, E.METADATA), i(r, p2);
}
async function I(r, t) {
  return P({ layer: r, itemType: u, validateLayer: m, validateItem: y, createJSONContext: (e) => f(e, r), createItemData: v, errorNamePrefix: c2, saveResources: async (e, t2) => (r.sourceIsPortalItem || await e.removeAllResources().catch(() => {
  }), p(r.resourceReferences, t2)) }, t);
}
async function g(e, t, o2) {
  return $({ layer: e, itemType: u, validateLayer: m, createJSONContext: (r) => f(r, e), createItemData: v, errorNamePrefix: l, newItem: t, setItemProperties: d, saveResources: (r, t2) => p(e.resourceReferences, t2) }, o2);
}
export {
  I as save,
  g as saveAs
};
//# sourceMappingURL=groupLayerUtils-WOLU4G3L.js.map
