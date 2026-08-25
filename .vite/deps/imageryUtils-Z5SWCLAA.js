import {
  r
} from "./chunk-6M2B5QQD.js";
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

// node_modules/@arcgis/core/layers/save/imageryUtils.js
var l2 = "Image Service";
var o = "imagery-layer-save";
var m = "imagery-layer-save-as";
var n = "imagery-tile-layer-save";
var c2 = "imagery-tile-layer-save-as";
var p = "WCS";
var u2 = "wcs-layer-save";
var g = "wcs-layer-save-as";
function v(e) {
  if ("imagery" === e.type || "wcs" === e.type) return { isValid: true };
  const { raster: t } = e, a = r(t)[0];
  return { isValid: "RasterTileServer" === (a == null ? void 0 : a.datasetFormat) && ("Raster" === a.tileType || "Map" === a.tileType), errorMessage: "imagery tile layer should be created from a tiled image service." };
}
function f(e) {
  const t = e.layerJSON;
  return Promise.resolve(t && Object.keys(t).length ? t : null);
}
async function d(e, t) {
  const { parsedUrl: r2, title: l3, fullExtent: o2 } = e;
  t.url = r2.path, t.title || (t.title = l3);
  try {
    t.extent = await l(o2);
  } catch {
    t.extent = void 0;
  }
  c(t, E.METADATA), u(t, E.TILED_IMAGERY, "imagery-tile" === e.type);
}
async function I(t, r2) {
  const a = "imagery" === t.type ? o : "imagery-tile" === t.type ? n : u2, s = "wcs" === t.type ? p : l2;
  return P({ layer: t, itemType: s, validateLayer: v, createItemData: f, errorNamePrefix: a }, r2);
}
async function T(e, r2, a) {
  const s = "imagery" === e.type ? m : "imagery-tile" === e.type ? c2 : g, i = "wcs" === e.type ? p : l2;
  return $({ layer: e, itemType: i, validateLayer: v, createItemData: f, errorNamePrefix: s, newItem: r2, setItemProperties: d }, a);
}
export {
  I as save,
  T as saveAs
};
//# sourceMappingURL=imageryUtils-Z5SWCLAA.js.map
