import {
  c
} from "./chunk-ZM3WOGSB.js";
import "./chunk-B3JUOOGN.js";
import {
  e
} from "./chunk-JVVENG6Z.js";
import {
  q
} from "./chunk-D6PEJ6S7.js";
import "./chunk-XLTADLTD.js";
import "./chunk-KK6SAEHE.js";
import "./chunk-CDASZ5XF.js";
import "./chunk-CNF6SPK6.js";
import "./chunk-KYLNZZVU.js";
import "./chunk-BHZARL3M.js";
import "./chunk-CUQZRZOS.js";
import "./chunk-6BMGEERX.js";
import "./chunk-PSY2F25Z.js";
import "./chunk-SPZYEASA.js";
import "./chunk-H7NF3WNO.js";
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
import {
  s as s2
} from "./chunk-QRKINRAQ.js";
import {
  a,
  s2 as s
} from "./chunk-KUWSTWZR.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/geometry/support/meshUtils/convertMeshVertexSpace.js
async function m(m2, n, c2) {
  await Promise.resolve(), s2(c2);
  const l = q(m2, n, { useEllipsoid: c2 == null ? void 0 : c2.useEllipsoid });
  if (!l) throw new s("meshUtils:convertVertexSpace()", "Failed to convert to provided vertex space due to projection errors");
  return m2.clone(e(void 0, { vertexAttributes: new c({ ...l, uv: a(m2.vertexAttributes.uv), color: a(m2.vertexAttributes.color) }), vertexSpace: n, transform: null }));
}
export {
  m as convertMeshVertexSpace
};
//# sourceMappingURL=convertMeshVertexSpace-ATT5FD5K.js.map
