import {
  a as a3
} from "./chunk-3BPWG5NZ.js";
import {
  a as a2
} from "./chunk-XJ34JWUR.js";
import {
  f,
  s,
  u
} from "./chunk-WNOCFBHR.js";
import {
  n
} from "./chunk-4EJ2CVAA.js";
import {
  c,
  m2 as m
} from "./chunk-TSVVEDRS.js";
import {
  a2 as a
} from "./chunk-HPSHCA6S.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";
import {
  H2 as H
} from "./chunk-EO4UMOUD.js";
import {
  i3 as i
} from "./chunk-KUWSTWZR.js";

// node_modules/@arcgis/core/rest/networks/support/QueryAssociationsResult.js
var p = class extends n {
  constructor(o) {
    super(o), this.associations = [];
  }
};
__decorate([m({ type: [a3], json: { write: true } })], p.prototype, "associations", void 0), p = __decorate([a("esri.rest.networks.support.QueryAssociationsResult")], p);

// node_modules/@arcgis/core/rest/networks/queryAssociations.js
function a4(e) {
  const { returnDeletes: t, elements: o, gdbVersion: n2, moment: s2 } = e.toJSON();
  return { returnDeletes: t, elements: JSON.stringify(o.map((e2) => ({ globalId: e2.globalId, networkSourceId: e2.networkSourceId, terminalId: e2.terminalId }))), types: JSON.stringify(e.types.map((e2) => a2.toJSON(e2))).replaceAll('"connectivity"', '"junctionJunctionConnectivity"'), gdbVersion: n2, moment: s2 ?? Date.now() };
}
async function p2(r, p3, m2) {
  const u2 = f(r), l = { ...a4(p3), f: "json" }, y = u({ ...u2.query, ...l }), d = s(y, { ...m2, method: "post" }), f2 = `${u2.path}/associations/query`, { data: g } = await H(f2, d), j = p.fromJSON(g);
  return p3.types.includes("connectivity") && c(i.getLogger("esri/rest/networks/support/QueryAssociationsParameters"), "types", { replacement: "Please use 'junction-junction-connectivity' instead of 'connectivity'.", see: "https://arcg.is/11Tr8a#types", version: "4.29", warnOnce: true }), j;
}

export {
  p2 as p
};
//# sourceMappingURL=chunk-UOYWOXWU.js.map
