import {
  q
} from "./chunk-D6PEJ6S7.js";
import "./chunk-XLTADLTD.js";
import "./chunk-KK6SAEHE.js";
import "./chunk-CDASZ5XF.js";
import {
  i
} from "./chunk-CNF6SPK6.js";
import "./chunk-KYLNZZVU.js";
import "./chunk-BHZARL3M.js";
import "./chunk-CUQZRZOS.js";
import "./chunk-6BMGEERX.js";
import "./chunk-PSY2F25Z.js";
import {
  s
} from "./chunk-3YFKOSNE.js";
import "./chunk-SPZYEASA.js";
import "./chunk-H7NF3WNO.js";
import "./chunk-BUBWQ637.js";
import "./chunk-H3DIC2LV.js";
import "./chunk-IABCCFYF.js";
import "./chunk-VF3OV6F3.js";
import "./chunk-TPDXVISU.js";
import "./chunk-VLLUHJV4.js";
import "./chunk-FKDE64FM.js";
import "./chunk-57YJ4LUD.js";
import "./chunk-UGAC6FVR.js";
import "./chunk-WWZXCVZD.js";
import "./chunk-MPABLVG5.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-VLH4C4OL.js";
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
import "./chunk-5HYMAKZL.js";
import "./chunk-66BNN6ZJ.js";
import "./chunk-NOVKMJNS.js";
import "./chunk-27A66LHG.js";
import "./chunk-5YBW6KQ6.js";
import "./chunk-VNR3A2IW.js";
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
import {
  has
} from "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/geometry/support/meshUtils/ElevationSamplerWorker.js
var n = class {
  async createIndex(t, r) {
    var _a;
    const n2 = new Array();
    if (!((_a = t.vertexAttributes) == null ? void 0 : _a.position)) return new s();
    const o2 = a(t), s3 = null != r ? await r.invoke("createIndexThread", o2, { transferList: n2 }) : this.createIndexThread(o2).result;
    return i2().fromJSON(s3);
  }
  createIndexThread(e) {
    const t = i2();
    if (!e) return { result: t.toJSON() };
    const r = new Float64Array(e.position);
    return e.components ? s2(t, r, e.components.map((e2) => new Uint32Array(e2))) : o(t, r);
  }
};
function o(e, t) {
  const r = new Array(t.length / 9);
  let n2 = 0;
  for (let o2 = 0; o2 < t.length; o2 += 9) r[n2++] = c(t, o2, o2 + 3, o2 + 6);
  return e.load(r), { result: e.toJSON() };
}
function s2(e, t, r) {
  let n2 = 0;
  for (const a2 of r) n2 += a2.length / 3;
  const o2 = new Array(n2);
  let s3 = 0;
  for (const a2 of r) for (let e2 = 0; e2 < a2.length; e2 += 3) o2[s3++] = c(t, 3 * a2[e2], 3 * a2[e2 + 1], 3 * a2[e2 + 2]);
  return e.load(o2), { result: e.toJSON() };
}
function a(e) {
  var _a;
  const { vertexAttributes: { position: n2 }, vertexSpace: o2, spatialReference: s3, transform: a2 } = e, i3 = (_a = q({ vertexAttributes: { position: n2 }, vertexSpace: o2, spatialReference: s3, transform: a2 }, i.absolute, { allowBufferReuse: true })) == null ? void 0 : _a.position;
  return i3 ? !e.components || e.components.some((e2) => !e2.faces) ? { position: i3.buffer } : { position: i3.buffer, components: e.components.map((e2) => e2.faces) } : null;
}
function i2() {
  return new s(9, has("esri-csp-restrictions") ? (e) => e : [".minX", ".minY", ".maxX", ".maxY"]);
}
function c(e, t, r, n2) {
  return { minX: Math.min(e[t], e[r], e[n2]), maxX: Math.max(e[t], e[r], e[n2]), minY: Math.min(e[t + 1], e[r + 1], e[n2 + 1]), maxY: Math.max(e[t + 1], e[r + 1], e[n2 + 1]), p0: [e[t], e[t + 1], e[t + 2]], p1: [e[r], e[r + 1], e[r + 2]], p2: [e[n2], e[n2 + 1], e[n2 + 2]] };
}
export {
  n as default
};
//# sourceMappingURL=ElevationSamplerWorker-PRFWCACA.js.map
