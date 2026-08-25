import {
  d
} from "./chunk-2VLVOCYN.js";
import "./chunk-YYBHQFVV.js";
import "./chunk-XJ34JWUR.js";
import "./chunk-BLVO2TSG.js";
import {
  f,
  s,
  u
} from "./chunk-WNOCFBHR.js";
import "./chunk-27A66LHG.js";
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

// node_modules/@arcgis/core/rest/networks/support/QueryNamedTraceConfigurationsResult.js
var a2 = class extends n {
  constructor(r) {
    super(r), this.namedTraceConfigurations = [];
  }
};
__decorate([m({ type: [d], json: { read: { source: "traceConfigurations" }, write: { target: "traceConfigurations" } } })], a2.prototype, "namedTraceConfigurations", void 0), a2 = __decorate([a("esri.rest.networks.support.QueryNamedTraceConfigurationsResult")], a2);

// node_modules/@arcgis/core/rest/networks/queryNamedTraceConfigurations.js
async function e(e2, n2, g) {
  const i = f(e2), l = n2.toJSON();
  n2.globalIds && n2.globalIds.length > 0 && (l.globalIds = JSON.stringify(n2.globalIds)), n2.creators && n2.creators.length > 0 && (l.creators = JSON.stringify(n2.creators)), n2.tags && n2.tags.length > 0 && (l.tags = JSON.stringify(n2.tags)), n2.names && n2.names.length > 0 && (l.names = JSON.stringify(n2.names));
  const m2 = { ...l, f: "json" }, f2 = u({ ...i.query, ...m2 }), u2 = s(f2, { ...g, method: "post" }), c = `${i.path}/traceConfigurations/query`, { data: p } = await H(c, u2);
  return a2.fromJSON(p);
}
export {
  e as queryNamedTraceConfigurations
};
//# sourceMappingURL=queryNamedTraceConfigurations-OCLLW635.js.map
