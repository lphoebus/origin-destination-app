import {
  e
} from "./chunk-MPILMNLY.js";
import {
  u
} from "./chunk-PVAT2NHO.js";
import {
  H2 as H
} from "./chunk-EO4UMOUD.js";
import "./chunk-PRKAQBHS.js";
import "./chunk-QRKINRAQ.js";
import "./chunk-KUWSTWZR.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/symbols/support/previewWebStyleSymbol.js
async function n(e2, n2, s) {
  var _a;
  const r = (_a = e2.thumbnail) == null ? void 0 : _a.url;
  if (r) {
    const e3 = o((await H(r, { responseType: "image" })).data, s);
    return (s == null ? void 0 : s.node) ? (s.node.appendChild(e3), s.node) : e3;
  }
  const a = await e2.fetchSymbol({ acceptedFormats: e });
  return a ? n2(a, s) : null;
}
function o(t, i) {
  const n2 = !/\\.svg$/i.test(t.src) && (i == null ? void 0 : i.disableUpsampling), o2 = Math.max(t.width, t.height);
  let s = null != (i == null ? void 0 : i.maxSize) ? u(i.maxSize) : 120;
  n2 && (s = Math.min(o2, s));
  const r = "number" == typeof (i == null ? void 0 : i.size) ? i == null ? void 0 : i.size : null, a = Math.min(s, null != r ? u(r) : o2);
  if (a !== o2) {
    const e2 = 0 !== t.width && 0 !== t.height ? t.width / t.height : 1;
    e2 >= 1 ? (t.width = a, t.height = a / e2) : (t.width = a * e2, t.height = a);
  }
  return t;
}
export {
  n as previewWebStyleSymbol
};
//# sourceMappingURL=previewWebStyleSymbol-BBW5W3UK.js.map
