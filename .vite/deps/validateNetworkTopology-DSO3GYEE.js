import {
  i
} from "./chunk-KJ7XD5IV.js";
import {
  f,
  s as s2,
  u
} from "./chunk-WNOCFBHR.js";
import "./chunk-4EJ2CVAA.js";
import "./chunk-TSVVEDRS.js";
import "./chunk-HPSHCA6S.js";
import "./chunk-A44PNKPT.js";
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
import {
  s2 as s
} from "./chunk-KUWSTWZR.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/rest/networks/validateNetworkTopology.js
async function o(t, o2, d2) {
  const l = f(t), u2 = o2.toJSON();
  o2.validationSet && (u2.validationSet = JSON.stringify(o2.validationSet));
  const c = { ...u2, returnEdits: true, f: "json" }, p = u({ ...l.query, ...c }), f2 = s2(p, { ...d2, method: "post" }), k = `${l.path}/validateNetworkTopology`, { data: v } = await H(k, f2);
  return i.fromJSON(n(v));
}
async function d(r, o2, d2) {
  if (!o2.gdbVersion) throw new s("submit-validate-network-topology-job:missing-gdb-version", "version is missing");
  const n2 = f(r), l = o2.toJSON();
  o2.validationSet && (l.validationSet = JSON.stringify(o2.validationSet));
  const u2 = s2(n2.query, { query: u({ ...l, returnEdits: true, async: true, f: "json" }), ...d2, method: "post" }), c = `${n2.path}/validateNetworkTopology`, { data: p } = await H(c, u2);
  return p ? p.statusUrl : null;
}
function n(e) {
  return e.serviceEdits && (e.serviceEdits = e.serviceEdits.map((e2) => (e2.editedFeatures.spatialReference && (e2.editedFeatures.spatialReference = { wkid: e2.editedFeatures.spatialReference.wkid, wkt: e2.editedFeatures.spatialReference.wkt, wkt2: e2.editedFeatures.spatialReference.wkt2, latestWkid: e2.editedFeatures.spatialReference.latestWkid, latestVcsWkid: e2.editedFeatures.spatialReference.latestVcsWkid, vcsWkid: e2.editedFeatures.spatialReference.vcsWkid }), e2 = { layerId: e2.id, editedFeatures: e2.editedFeatures }))), e;
}
export {
  n as handleValidateNetworkTopologyResult,
  d as submitValidateNetworkTopologyJob,
  o as validateNetworkTopology
};
//# sourceMappingURL=validateNetworkTopology-DSO3GYEE.js.map
