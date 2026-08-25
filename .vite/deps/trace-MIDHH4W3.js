import {
  c
} from "./chunk-ISGJ323W.js";
import "./chunk-43WR4GUJ.js";
import "./chunk-34QY3NUE.js";
import "./chunk-GW5PUVUW.js";
import "./chunk-PSBAH6IH.js";
import "./chunk-XJ34JWUR.js";
import "./chunk-GQZMDDEP.js";
import {
  f,
  s,
  u
} from "./chunk-WNOCFBHR.js";
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
import "./chunk-5YBW6KQ6.js";
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

// node_modules/@arcgis/core/rest/networks/trace.js
async function n(o, n2, a2) {
  var _a;
  const i = f(o), u2 = n2.toJSON();
  u2.traceLocations = JSON.stringify(n2.traceLocations), n2.resultTypes && (u2.resultTypes = JSON.stringify(n2.resultTypes)), n2.moment || "SDE.DEFAULT" !== ((_a = n2.gdbVersion) == null ? void 0 : _a.toUpperCase()) && n2.gdbVersion || (u2.moment = Date.now());
  const y = s(i.query, { query: u({ ...u2, f: "json" }), ...a2 }), p = `${i.path}/trace`;
  return H(p, y).then((t) => c2(t));
}
async function a(o, n2, a2) {
  const c3 = f(o), i = n2.toJSON();
  i.traceLocations = JSON.stringify(n2.traceLocations), n2.resultTypes && (i.resultTypes = JSON.stringify(n2.resultTypes));
  const u2 = s(c3.query, { query: u({ ...i, async: true, f: "json" }), ...a2 }), y = `${c3.path}/trace`, { data: p } = await H(y, u2);
  return p.statusUrl;
}
function c2(t) {
  const { data: s2 } = t;
  return c.fromJSON(s2.traceResults);
}
export {
  a as submitTraceJob,
  n as trace
};
//# sourceMappingURL=trace-MIDHH4W3.js.map
