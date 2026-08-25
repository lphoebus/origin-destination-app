import {
  u
} from "./chunk-2IBUF6VK.js";
import {
  a,
  c,
  d,
  f,
  g,
  t
} from "./chunk-HZQPQFNJ.js";
import "./chunk-EQAM4DBF.js";
import "./chunk-OGQHWOPB.js";
import "./chunk-FEQXF6QO.js";
import "./chunk-6JIJOPDX.js";
import "./chunk-V7Y3WM6L.js";
import "./chunk-DJ2VONAQ.js";
import "./chunk-JBITOOAG.js";
import "./chunk-6BMGEERX.js";
import "./chunk-PSY2F25Z.js";
import "./chunk-EZLF5T7L.js";
import "./chunk-SPZYEASA.js";
import "./chunk-H7NF3WNO.js";
import "./chunk-H3DIC2LV.js";
import "./chunk-IABCCFYF.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-6YICR2EO.js";
import "./chunk-UJKR5KHP.js";
import "./chunk-HXC5WSBJ.js";
import "./chunk-BZQFVEAQ.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker.js
var o = class {
  async extract(e) {
    const t2 = c2(e), n = c(t2), r = [t2.data.buffer];
    return { result: u2(n, r), transferList: r };
  }
  async extractComponentsEdgeLocations(t2) {
    const s = c2(t2), i = f(s.data, s.skipDeduplicate, s.indices, s.indicesLength), a2 = d(i, p), o2 = [];
    return { result: u(a2.regular.instancesData, o2), transferList: o2 };
  }
  async extractEdgeLocations(t2) {
    const s = c2(t2), i = f(s.data, s.skipDeduplicate, s.indices, s.indicesLength), a2 = d(i, f2), o2 = [];
    return { result: u(a2.regular.instancesData, o2), transferList: o2 };
  }
};
function c2(e) {
  return { data: t.createView(e.dataBuffer), indices: "Uint32Array" === e.indicesType ? new Uint32Array(e.indices) : "Uint16Array" === e.indicesType ? new Uint16Array(e.indices) : e.indices, indicesLength: e.indicesLength, writerSettings: e.writerSettings, skipDeduplicate: e.skipDeduplicate };
}
function u2(t2, n) {
  n.push(t2.regular.lodInfo.lengths.buffer), n.push(t2.silhouette.lodInfo.lengths.buffer);
  return { regular: { instancesData: u(t2.regular.instancesData, n), lodInfo: { lengths: t2.regular.lodInfo.lengths.buffer } }, silhouette: { instancesData: u(t2.silhouette.instancesData, n), lodInfo: { lengths: t2.silhouette.lodInfo.lengths.buffer } }, averageEdgeLength: t2.averageEdgeLength };
}
var l = class {
  allocate(e) {
    return a.createBuffer(e);
  }
  trim(e, t2) {
    return e.slice(0, t2);
  }
  write(e, t2, n) {
    e.position0.setVec(t2, n.position0), e.position1.setVec(t2, n.position1);
  }
};
var d2 = class {
  allocate(e) {
    return g.createBuffer(e);
  }
  trim(e, t2) {
    return e.slice(0, t2);
  }
  write(e, t2, n) {
    e.position0.setVec(t2, n.position0), e.position1.setVec(t2, n.position1), e.componentIndex.set(t2, n.componentIndex);
  }
};
var f2 = new l();
var p = new d2();
export {
  o as default
};
//# sourceMappingURL=EdgeProcessingWorker-O2EQS6RR.js.map
