import {
  n,
  p
} from "./chunk-K4SM7556.js";
import "./chunk-S37ZVBOB.js";
import "./chunk-WNOCFBHR.js";
import {
  M
} from "./chunk-3PCQMPQH.js";
import "./chunk-PDXC6YP2.js";
import "./chunk-SWYYL7T7.js";
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
import "./chunk-66BNN6ZJ.js";
import "./chunk-NOVKMJNS.js";
import "./chunk-27A66LHG.js";
import "./chunk-XN5EOTP2.js";
import "./chunk-5YBW6KQ6.js";
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
import {
  s,
  s2
} from "./chunk-KUWSTWZR.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/portal/support/geometryServiceUtils.js
async function n2(t = null, i) {
  var _a, _b;
  if (s.geometryServiceUrl) return s.geometryServiceUrl;
  if (!t) throw new s2("internal:geometry-service-url-not-configured", "No geometryServiceUrl in configuration");
  let n3;
  n3 = "portal" in t ? t.portal || M.getDefault() : t, await n3.load({ signal: i });
  const a2 = (_b = (_a = n3.helperServices) == null ? void 0 : _a.geometry) == null ? void 0 : _b.url;
  if (!a2) throw new s2("internal:geometry-service-url-not-configured", "No geometryServiceUrl in configuration");
  return a2;
}
async function a(e, o, a2 = null, c) {
  const l = await n2(a2, c), m = new p({ geometries: [e], outSpatialReference: o }), s3 = await n(l, m, { signal: c });
  if (s3 && Array.isArray(s3) && 1 === s3.length) return s3[0];
  throw new s2("internal:geometry-service-projection-failed", "Geometry projection failed on service");
}
export {
  n2 as getGeometryServiceURL,
  a as projectGeometry
};
//# sourceMappingURL=geometryServiceUtils-E6VNZRUI.js.map
