import {
  d
} from "./chunk-QOXGPG76.js";
import {
  S
} from "./chunk-5GBQRWWW.js";
import "./chunk-YJLNGOA5.js";
import "./chunk-2YRDWNDV.js";
import "./chunk-RGNEOB6I.js";
import "./chunk-S37ZVBOB.js";
import "./chunk-VR3OXZAC.js";
import {
  f
} from "./chunk-WNOCFBHR.js";
import "./chunk-NULLBAN4.js";
import "./chunk-TPDXVISU.js";
import "./chunk-YOKAK57B.js";
import "./chunk-7VLZMF2B.js";
import "./chunk-4BEZTMLR.js";
import "./chunk-GTUYDBKL.js";
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
import {
  z
} from "./chunk-66BNN6ZJ.js";
import "./chunk-NOVKMJNS.js";
import "./chunk-27A66LHG.js";
import "./chunk-IHMZ3RSY.js";
import "./chunk-GMQ2EQ27.js";
import "./chunk-6YDIQE3P.js";
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
import "./chunk-KUWSTWZR.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/rest/query/executeForTopExtents.js
async function e(e2, n, m) {
  const s = f(e2), i = await d(s, S.from(n), { ...m }), u = i.data.extent;
  return !u || isNaN(u.xmin) || isNaN(u.ymin) || isNaN(u.xmax) || isNaN(u.ymax) ? { count: i.data.count, extent: null } : { count: i.data.count, extent: z.fromJSON(u) };
}
export {
  e as executeForTopExtents
};
//# sourceMappingURL=executeForTopExtents-NAFFSDQS.js.map
