import {
  $,
  P
} from "./chunk-3LRSZOWP.js";
import "./chunk-UHCTIAVL.js";
import "./chunk-3INMDTVW.js";
import "./chunk-TGTN62EC.js";
import "./chunk-JJHBCOSL.js";
import {
  E,
  c,
  i,
  l,
  u
} from "./chunk-V6PIRVOO.js";
import "./chunk-VF3OV6F3.js";
import "./chunk-TPDXVISU.js";
import "./chunk-VLLUHJV4.js";
import "./chunk-FKDE64FM.js";
import "./chunk-57YJ4LUD.js";
import "./chunk-OXBIWFFC.js";
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

// node_modules/@arcgis/core/layers/save/mapImageLayerUtils.js
var o = "Map Service";
var l2 = "map-image-layer-save";
var m = "map-image-layer-save-as";
function c2(e) {
  var _a;
  return { isValid: "map-image" === e.type && !((_a = e.sourceJSON) == null ? void 0 : _a.tileInfo), errorMessage: "Layer.type should be 'map-image' and reference a dynamic (non-cached) map service" };
}
function p(e) {
  const t = e.layerJSON;
  return Promise.resolve(t && Object.keys(t).length ? t : null);
}
function u2(e, t) {
  return f(e, t), Promise.resolve();
}
async function y(e, t) {
  const { parsedUrl: s, title: i2, fullExtent: o2 } = e;
  t.url = s.path, t.title || (t.title = i2), t.extent = o2 ? await l(o2) : null, c(t, E.METADATA), f(e, t);
}
function f(e, t) {
  var _a;
  i(t, E.DYNAMIC);
  const r = ((_a = e.sublayers) == null ? void 0 : _a.length) ?? 0;
  u(t, E.MULTI_LAYER, r > 1), u(t, E.SINGLE_LAYER, 1 === r);
}
async function v(t, r) {
  return P({ layer: t, itemType: o, validateLayer: c2, createItemData: p, errorNamePrefix: l2, setItemProperties: u2 }, r);
}
async function I(e, r, a) {
  return $({ layer: e, itemType: o, validateLayer: c2, createItemData: p, errorNamePrefix: m, newItem: r, setItemProperties: y }, a);
}
export {
  v as save,
  I as saveAs
};
//# sourceMappingURL=mapImageLayerUtils-3GMKBTN3.js.map
