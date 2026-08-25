import {
  p
} from "./chunk-53UJTPCO.js";
import {
  i as i2
} from "./chunk-UHCTIAVL.js";
import {
  n,
  o as o2,
  s as s3
} from "./chunk-3INMDTVW.js";
import "./chunk-3NVF3ZGJ.js";
import {
  n as n2,
  p as p2
} from "./chunk-K4SM7556.js";
import {
  o
} from "./chunk-TGTN62EC.js";
import "./chunk-JJHBCOSL.js";
import {
  E,
  c,
  i,
  s as s2,
  u
} from "./chunk-V6PIRVOO.js";
import {
  m
} from "./chunk-BLVO2TSG.js";
import "./chunk-S37ZVBOB.js";
import "./chunk-WNOCFBHR.js";
import {
  b,
  d,
  m as m2
} from "./chunk-RKBVWAJF.js";
import "./chunk-KVT7TNPE.js";
import "./chunk-VF3OV6F3.js";
import "./chunk-TPDXVISU.js";
import "./chunk-VLLUHJV4.js";
import "./chunk-FKDE64FM.js";
import "./chunk-57YJ4LUD.js";
import {
  k
} from "./chunk-OXBIWFFC.js";
import "./chunk-XG5BA6RK.js";
import {
  M,
  O
} from "./chunk-6MWN3HK7.js";
import "./chunk-25MBQJUA.js";
import "./chunk-CVV6MIDL.js";
import "./chunk-UGAC6FVR.js";
import "./chunk-JIJYOENG.js";
import {
  M as M2
} from "./chunk-3PCQMPQH.js";
import "./chunk-PVAT2NHO.js";
import "./chunk-MPABLVG5.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-PDXC6YP2.js";
import "./chunk-SWYYL7T7.js";
import "./chunk-3PVGVNCV.js";
import "./chunk-7VLZMF2B.js";
import "./chunk-4BEZTMLR.js";
import "./chunk-MWWK5WRN.js";
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
import {
  j
} from "./chunk-DLX5DTNB.js";
import {
  S
} from "./chunk-6LIC47AK.js";
import {
  f
} from "./chunk-7J6TZQJ4.js";
import "./chunk-ZNU5NTGY.js";
import {
  T as T2
} from "./chunk-J3VZVJYU.js";
import "./chunk-U2QKMJ4B.js";
import "./chunk-UWOUWJRN.js";
import "./chunk-4EJ2CVAA.js";
import "./chunk-TSVVEDRS.js";
import "./chunk-HPSHCA6S.js";
import "./chunk-PB4SYOXK.js";
import "./chunk-GJFVHE2X.js";
import "./chunk-A44PNKPT.js";
import {
  I,
  I2,
  T
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
import {
  s2 as s
} from "./chunk-KUWSTWZR.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/webdoc/support/webdocSaveUtils.js
var O2 = ["NatGeo_World_Map", "Ocean_Basemap", "USA_Topo_Maps", "World_Imagery", "World_Street_Map", "World_Terrain_Base", "World_Topo_Map", "World_Hillshade", "Canvas/World_Light_Gray_Base", "Canvas/World_Light_Gray_Reference", "Canvas/World_Dark_Gray_Base", "Canvas/World_Dark_Gray_Reference", "Ocean/World_Ocean_Base", "Ocean/World_Ocean_Reference", "Reference/World_Boundaries_and_Places", "Reference/World_Reference_Overlay", "Reference/World_Transportation"].map((e) => e.toLowerCase());
async function T3(e, t, r) {
  r ?? (r = {}), M3(e, t), await j(() => !t.updatingFromView), await t.load(), await k2(t), await o2(t), await E2(e, t);
  const a = t.portalItem, { json: i3, jsonContext: n3 } = await U(t, a, e.origin);
  return s3(n3, { errorName: `${e.name}:save` }, r), await x(t, a), await _e(e, t, a, i3, n3), await Promise.all([t.updateItemThumbnail(), p(t.resourceReferences, n3)]), a;
}
async function U(e, t, o3) {
  const r = o(t, o3, true), a = e.write({}, r);
  return await Promise.all(r.resources.pendingOperations), { json: a, jsonContext: r };
}
async function C(e, t, r, a) {
  a ?? (a = {});
  const i3 = V(e, r);
  await j(() => !t.updatingFromView), await t.load(), await k2(t), await o2(t), await E2(e, t);
  const { json: n3, jsonContext: s4 } = await U(t, i3, e.origin);
  s3(s4, { errorName: `${e.name}:save` }, a), await Z(t, i3);
  const l = t.getThumbnailState();
  return await be(e, t, i3, n3, s4, a) && (t.resourceReferences.portalItem = i3), t.restoreThumbnailFromState(l), await Promise.all([t.updateItemThumbnail(), p(t.resourceReferences, s4)]), i3;
}
function M3(t, o3) {
  if (!o3.portalItem) throw new s(`${t.name}:portal-item-not-set`, "Portal item to save to has not been set on the WebMap");
  D(t, o3.portalItem);
}
function D(t, o3) {
  if (o3.type !== t.itemType) throw new s(`${t.name}:portal-item-wrong-type`, `Portal item needs to have type "${t.itemType}"`);
}
async function E2(t, r) {
  var _a;
  if ("linkchart" === t.name) return;
  if (!((_a = r.basemap) == null ? void 0 : _a.baseLayers.length)) throw new s(`${t.name}:save`, "Map does not have a valid basemap with a base layer.");
  let a = null;
  if (await j(() => {
    const e = d(r.initialViewProperties, r.basemap);
    return a = e.spatialReference, !e.updating;
  }), !T2(a, r.initialViewProperties.spatialReference)) throw new s(`${t.name}:save`, "The spatial reference of the basemap is not compatible with the one from the map.", { expected: r.initialViewProperties.spatialReference, actual: a });
}
function V(e, t) {
  let o3 = k.from(t);
  return o3.id && (o3 = o3.clone(), o3.id = null), o3.type || (o3.type = e.itemType), o3.portal || (o3.portal = M2.getDefault()), D(e, o3), o3;
}
function k2(e) {
  const t = [];
  return e.basemap && t.push(e.basemap.load()), e.ground && t.push(e.ground.load()), Promise.allSettled(t).then(() => {
  });
}
async function x(e, t) {
  t.extent = await me(e.portalItem, e.initialViewProperties.viewpoint.targetGeometry), await ee(e, t);
}
var G = E.JSAPI;
var L = "CollectorDisabled";
var N = "Collector";
var $ = "Data Editing";
var B = "OfflineDisabled";
var F = "Offline";
var H = "Workforce Project";
var K = "Workforce Worker";
var J = "Workforce Dispatcher";
var q = "Offline Map Areas";
var z = "FieldMapsDisabled";
var Q = E.DEVELOPER_BASEMAP;
var X = "UtilityNetwork";
var Y = "IPS";
async function Z(e, t) {
  c(t, L), c(t, z), c(t, E.METADATA), c(t, B), c(t, q), c(t, J), c(t, H), c(t, K), await x(e, t);
}
async function ee(e, t) {
  i(t, G), await te(e), ie(e, t), ne(e, t), se(e, t), le(e, t), pe(e, t), ce(e, t), ue(e, t), t.typeKeywords && (t.typeKeywords = t.typeKeywords.filter((e2, t2, o3) => o3.indexOf(e2) === t2));
}
function te(e) {
  const t = oe(e).map((e2) => e2.load()).toArray();
  return Promise.allSettled(t).then(() => {
  });
}
function oe(e) {
  return e.allLayers.concat(e.allTables);
}
function re(e) {
  return oe(e).some((e2) => e2.loaded && O(e2) && e2.capabilities.operations.supportsEditing && e2.editingEnabled && ("subtype-group" !== e2.type || e2.sublayers.some((e3) => e3.editingEnabled)));
}
function ae(e) {
  return oe(e).filter((e2) => "group" !== e2.type).every((t) => t.loaded && we(e, t));
}
function ie(e, t) {
  s2(t, L) || s2(t, H) || s2(t, K) || s2(t, J) || !re(e) ? c(t, N) : i(t, N);
}
function ne(e, t) {
  re(e) ? i(t, $) : c(t, $);
}
function se(e, t) {
  !s2(t, B) && ae(e) ? i(t, F) : c(t, F);
}
function le(e, t) {
  m2(e.basemap) ? i(t, Q) : c(t, Q);
}
function pe(e, t) {
  var _a;
  ((_a = e.utilityNetworks) == null ? void 0 : _a.length) ? i(t, X) : c(t, X);
}
function ce(e, t) {
  e.ipsInfo ? i(t, Y) : c(t, Y);
}
function ue(e, t) {
  u(t, E.CHARTS, n(e));
}
async function me(e, t) {
  const o3 = t.clone().normalize();
  let r;
  if (o3.length > 1) for (const a of o3) r ? a.width > r.width && (r = a) : r = a;
  else r = o3[0];
  return fe(e, r);
}
async function fe(e, t) {
  const o3 = t.spatialReference;
  if (o3.isWGS84) return t.clone();
  if (o3.isWebMercator) return S(t);
  const { getGeometryServiceURL: r } = await import("./geometryServiceUtils-E6VNZRUI.js"), a = await r(e), i3 = new p2({ geometries: [t], outSpatialReference: f.WGS84 });
  return (await n2(a, i3))[0];
}
function de(e) {
  return M(e) || "map-notes" === e.type || "route" === e.type;
}
function we(e, t) {
  return O(t) && t.capabilities.operations.supportsSync || de(t) && !t.portalItem || ye(t) && !he(t) && t.spatialReference.equals(e.initialViewProperties.spatialReference);
}
function ye(e) {
  return ("tile" === e.type || "vector-tile" === e.type) && (e.capabilities.operations.supportsExportTiles || ge(e) || b(e));
}
function he(e) {
  return "vector-tile" === e.type && Object.keys(e.sourceNameToSource).length > 1;
}
function ge(e) {
  return "tile" === e.type && (I2(e.url) && O2.some((t) => {
    var _a;
    return (_a = e.url) == null ? void 0 : _a.toLowerCase().includes("/" + t + "/");
  }));
}
async function _e(e, t, o3, r, a) {
  await o3.update({ data: r }), ve(e, t, o3, r, a);
}
async function be(t, o3, r, a, i3, n3) {
  const s4 = o3.portalItem, l = { item: s4, authenticated: !(!(s4 == null ? void 0 : s4.id) || !s4.portal.user) }, p3 = r.portal;
  await p3.signIn();
  const { copyAllowed: c2, itemReloaded: u2 } = await je(l, p3);
  if (l.authenticated || (l.authenticated = u2), !c2) throw new s(`${t.name}:save-as-copy-not-allowed`, "Owner of this map does not allow others to save a copy");
  const m3 = await Re(r, l, a, n3);
  return o3.portalItem = r, ve(t, o3, r, a, i3), m3;
}
async function je(e, t) {
  var _a;
  const { item: o3, authenticated: r } = e;
  return (o3 == null ? void 0 : o3.id) && ((_a = o3.typeKeywords) == null ? void 0 : _a.includes("useOnly")) ? o3.portal.portalHostname !== t.portalHostname ? { copyAllowed: false, itemReloaded: false } : (r || await o3.reload(), { copyAllowed: "admin" === o3.itemControl || "update" === o3.itemControl, itemReloaded: true }) : { copyAllowed: true, itemReloaded: false };
}
async function Re(e, t, o3, r) {
  const i3 = e.portal, { item: n3 } = t, { folder: s4, copyAllResources: l } = r;
  let p3 = false;
  if (l && (n3 == null ? void 0 : n3.id) && T(n3.portal.url, i3.url) && parseInt(n3.portal.currentVersion, 10) >= 2023) {
    const { total: e2 } = await n3.fetchResources();
    p3 = !!e2;
  }
  if (p3) {
    const t2 = await n3.copy({ copyResources: "all", folder: s4 });
    e.id = t2.id, e.portal = t2.portal;
    const r2 = e.toJSON();
    await e.load(), e.read(r2), await e.update({ data: o3 });
  } else await i3.user.addItem({ item: e, folder: s4, data: o3 });
  return p3;
}
function ve(e, o3, a, n3, s4) {
  m.prototype.read.call(o3, { version: n3.version, authoringApp: n3.authoringApp, authoringAppVersion: n3.authoringAppVersion }, { origin: e.origin, ignoreDefaults: true, url: a.itemUrl ? I(a.itemUrl) : void 0 }), i2(s4), o3.resourceInfo = n3;
}
export {
  U as createJSON,
  Re as initializeNewItem,
  je as isCopyAllowed,
  T3 as save,
  C as saveAs
};
//# sourceMappingURL=webdocSaveUtils-RARRRQHL.js.map
