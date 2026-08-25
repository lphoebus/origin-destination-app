import {
  v
} from "./chunk-LPI3TGIR.js";
import {
  r
} from "./chunk-EH7DSPDE.js";
import {
  t
} from "./chunk-YJLNGOA5.js";
import {
  g
} from "./chunk-42UJ54JV.js";
import {
  P
} from "./chunk-RGNEOB6I.js";
import "./chunk-S37ZVBOB.js";
import "./chunk-VR3OXZAC.js";
import {
  f
} from "./chunk-WNOCFBHR.js";
import "./chunk-NK2YW3YT.js";
import "./chunk-TCDKBCY3.js";
import "./chunk-NULLBAN4.js";
import "./chunk-SBHNAU24.js";
import "./chunk-ZM5SAAQW.js";
import "./chunk-IG7ETWYB.js";
import "./chunk-D6CL4FKW.js";
import "./chunk-PHUTVPCW.js";
import "./chunk-PKMCKJ2F.js";
import "./chunk-EMUDAHJ3.js";
import "./chunk-EUDAX724.js";
import "./chunk-UYVMVEPA.js";
import "./chunk-JJOFZPNA.js";
import "./chunk-4BEDL4SU.js";
import "./chunk-6JSVAOL7.js";
import "./chunk-7OACEG3J.js";
import "./chunk-ELQLS5UR.js";
import "./chunk-TBHN7NEG.js";
import "./chunk-VR6VPSRB.js";
import "./chunk-R5IGYILM.js";
import "./chunk-WWZXCVZD.js";
import "./chunk-AHPD36K6.js";
import "./chunk-7KWU42EX.js";
import "./chunk-LD5EOJIR.js";
import "./chunk-MYD3EEGE.js";
import "./chunk-2UMDUMDF.js";
import "./chunk-3PCQMPQH.js";
import "./chunk-PVAT2NHO.js";
import "./chunk-MPABLVG5.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-3MKPTM6T.js";
import "./chunk-PDXC6YP2.js";
import "./chunk-SWYYL7T7.js";
import "./chunk-YOKAK57B.js";
import "./chunk-GTUYDBKL.js";
import "./chunk-VLH4C4OL.js";
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
import "./chunk-I2W3LINK.js";
import "./chunk-5HYMAKZL.js";
import "./chunk-7OBUFU3X.js";
import "./chunk-66BNN6ZJ.js";
import "./chunk-NOVKMJNS.js";
import "./chunk-27A66LHG.js";
import "./chunk-HIM26FXK.js";
import "./chunk-IHMZ3RSY.js";
import "./chunk-GMQ2EQ27.js";
import "./chunk-6YDIQE3P.js";
import "./chunk-XN5EOTP2.js";
import "./chunk-5YBW6KQ6.js";
import "./chunk-VNR3A2IW.js";
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
  H2 as H,
  I,
  V
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

// node_modules/@arcgis/core/rest/query/operations/queryPivot.js
function n(t2) {
  const o = r(t2), r2 = o.outPivots;
  if (r2 == null ? void 0 : r2.length) {
    for (const t3 of r2) "Pivot" === t3.pivotType && t3.pivotParameters.outStatistic ? t3.pivotParameters.outStatistic = JSON.stringify(t3.pivotParameters.outStatistic) : "Unpivot" === t3.pivotType && (t3.unPivotParameters.sourceFields = t3.unPivotParameters.sourceFields.join(","));
    o.outPivots = JSON.stringify(r2);
  }
  return o;
}
async function u(t2, o, r2) {
  return await a(t2, o, r2);
}
async function a(s, u2, a2 = {}) {
  const m = "string" == typeof s ? I(s) : s, p = u2.geometry ? [u2.geometry] : [], l = await P(p, null, { signal: a2.signal }), c = l == null ? void 0 : l[0];
  null != c && ((u2 = u2.clone()).geometry = c);
  const y = t({ ...m.query, f: "json", ...n(u2) });
  return H(V(m.path, "queryPivot"), { ...a2, query: { ...y, ...a2.query } });
}

// node_modules/@arcgis/core/rest/query/executePivotQuery.js
async function i(i2, s, m) {
  const p = f(i2), u2 = { ...m }, { data: a2 } = await u(p, v.from(s), u2);
  return g.fromJSON(a2);
}
export {
  i as executePivotQuery
};
//# sourceMappingURL=executePivotQuery-5Q2PX64K.js.map
