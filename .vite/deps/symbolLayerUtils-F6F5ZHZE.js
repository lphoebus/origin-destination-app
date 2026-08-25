import {
  e
} from "./chunk-3VQPIBWQ.js";
import "./chunk-NJGE4AQH.js";
import {
  c
} from "./chunk-EUDAX724.js";
import {
  p,
  u
} from "./chunk-VR6VPSRB.js";
import "./chunk-R5IGYILM.js";
import "./chunk-WWZXCVZD.js";
import {
  n
} from "./chunk-NOPG2N5A.js";
import "./chunk-PSH6CRUA.js";
import "./chunk-HXC5WSBJ.js";
import "./chunk-66BNN6ZJ.js";
import "./chunk-NOVKMJNS.js";
import "./chunk-27A66LHG.js";
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

// node_modules/@arcgis/core/symbols/support/symbolLayerUtils.js
var c2 = a();
function a() {
  return new e(50);
}
function u2() {
  c2 = a();
}
async function l(e2, o) {
  var _a, _b;
  if ((_a = e2.resource) == null ? void 0 : _a.href) return m(e2.resource.href).then((e3) => [e3.width, e3.height]);
  if ((_b = e2.resource) == null ? void 0 : _b.primitive) return null != o ? [o, o] : [256, 256];
  throw new s("symbol3d:invalid-symbol-layer", "symbol layers of type Icon must have either an href or a primitive resource");
}
function m(r) {
  return H(r, { responseType: "image" }).then((e2) => e2.data);
}
async function f(e2, o = null) {
  var _a, _b;
  if (!e2.isPrimitive) {
    const o2 = (_a = e2.resource) == null ? void 0 : _a.href;
    if (!o2) throw new s("symbol:invalid-resource", "The symbol does not have a valid resource");
    const s2 = c2.get(o2);
    if (null != s2) return s2;
    const { fetch: n2 } = await import("./objectResourceUtils-QO5QYODW.js"), a3 = await n2(o2, { disableTextures: true, spherical: true }), u3 = p(a3.referenceBoundingBox, n());
    return c2.put(o2, u3), u3;
  }
  if (!((_b = e2.resource) == null ? void 0 : _b.primitive)) throw new s("symbol:invalid-resource", "The symbol does not have a valid resource");
  const a2 = u(c(e2.resource.primitive));
  if (null != o) for (let r = 0; r < a2.length; r++) a2[r] *= o;
  return p(a2, n());
}
export {
  u2 as clearBoundingBoxCache,
  l as computeIconLayerResourceSize,
  f as computeObjectLayerResourceSize
};
//# sourceMappingURL=symbolLayerUtils-F6F5ZHZE.js.map
