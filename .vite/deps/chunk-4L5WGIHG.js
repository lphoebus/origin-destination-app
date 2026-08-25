// node_modules/@arcgis/core/networks/support/networkFieldUtils.js
function t(t2) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
  const e2 = t2 == null ? void 0 : t2.fieldsIndex, n = "fromnetworksourceid", o = "fromglobalid", i = "fromterminalid", r = "fromfirstunit", a = "fromnumunits", m = "tonetworksourceid", s = "toglobalid", l = "toterminalid", u = "tofirstunit", g = "tonumunits", f = "status", d = "associationtype", c = "iscontentvisible", p = "percentalong", I = "globalid";
  return { fromNetworkSourceId: ((_a = e2 == null ? void 0 : e2.get(n)) == null ? void 0 : _a.name) ?? n, fromGlobalId: ((_b = e2 == null ? void 0 : e2.get(o)) == null ? void 0 : _b.name) ?? o, fromTerminalId: ((_c = e2 == null ? void 0 : e2.get(i)) == null ? void 0 : _c.name) ?? i, fromFirstUnit: ((_d = e2 == null ? void 0 : e2.get(r)) == null ? void 0 : _d.name) ?? r, fromNumUnits: ((_e = e2 == null ? void 0 : e2.get(a)) == null ? void 0 : _e.name) ?? a, toNetworkSourceId: ((_f = e2 == null ? void 0 : e2.get(m)) == null ? void 0 : _f.name) ?? m, toGlobalId: ((_g = e2 == null ? void 0 : e2.get(s)) == null ? void 0 : _g.name) ?? s, toTerminalId: ((_h = e2 == null ? void 0 : e2.get(l)) == null ? void 0 : _h.name) ?? l, toFirstUnit: ((_i = e2 == null ? void 0 : e2.get(u)) == null ? void 0 : _i.name) ?? u, toNumUnits: ((_j = e2 == null ? void 0 : e2.get(g)) == null ? void 0 : _j.name) ?? g, status: ((_k = e2 == null ? void 0 : e2.get(f)) == null ? void 0 : _k.name) ?? f, associationType: ((_l = e2 == null ? void 0 : e2.get(d)) == null ? void 0 : _l.name) ?? d, isContentVisible: ((_m = e2 == null ? void 0 : e2.get(c)) == null ? void 0 : _m.name) ?? c, percentAlong: ((_n = e2 == null ? void 0 : e2.get(p)) == null ? void 0 : _n.name) ?? p, globalId: ((_o = e2 == null ? void 0 : e2.get((t2 == null ? void 0 : t2.globalIdField) ?? I)) == null ? void 0 : _o.name) ?? I };
}
function e(t2, e2) {
  if ("feature" !== e2.type && "subtype-group" !== e2.type) return [];
  if (!e2.url) return [];
  const n = "utilityNetworks" in t2.map ? t2.map.utilityNetworks ?? [] : [];
  for (const o of n) if (o.isUtilityLayer(e2)) {
    const t3 = e2.fieldsIndex.get("assetgroup"), n2 = e2.fieldsIndex.get("assettype");
    return [t3 == null ? void 0 : t3.name, n2 == null ? void 0 : n2.name].filter((t4) => null != t4);
  }
  return [];
}

export {
  t,
  e
};
//# sourceMappingURL=chunk-4L5WGIHG.js.map
