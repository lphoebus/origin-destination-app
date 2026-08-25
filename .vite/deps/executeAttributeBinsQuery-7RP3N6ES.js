import {
  i
} from "./chunk-AHSO7NTS.js";
import {
  T as T2
} from "./chunk-2K7MZSHS.js";
import "./chunk-IDEDWNOH.js";
import "./chunk-IJ2MGIXU.js";
import {
  t
} from "./chunk-YJLNGOA5.js";
import "./chunk-42UJ54JV.js";
import "./chunk-UXT53YVB.js";
import {
  P
} from "./chunk-RGNEOB6I.js";
import "./chunk-S37ZVBOB.js";
import "./chunk-VR3OXZAC.js";
import {
  f
} from "./chunk-WNOCFBHR.js";
import "./chunk-TCDKBCY3.js";
import "./chunk-NULLBAN4.js";
import "./chunk-SBHNAU24.js";
import "./chunk-ZM5SAAQW.js";
import "./chunk-VF3OV6F3.js";
import "./chunk-TPDXVISU.js";
import "./chunk-VLLUHJV4.js";
import "./chunk-FKDE64FM.js";
import "./chunk-57YJ4LUD.js";
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
import "./chunk-7VLZMF2B.js";
import "./chunk-4BEZTMLR.js";
import "./chunk-GTUYDBKL.js";
import "./chunk-VLH4C4OL.js";
import {
  v
} from "./chunk-MWWK5WRN.js";
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
import {
  A,
  T
} from "./chunk-J3VZVJYU.js";
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

// node_modules/@arcgis/core/rest/query/operations/queryAttributeBins.js
function l(t2) {
  const e = t2.geometry, i3 = t2.toJSON(), r = i3;
  let u, l2, a2;
  if (null != e && (l2 = e.spatialReference, a2 = A(l2), r.geometryType = v(e), r.geometry = JSON.stringify(e), r.inSR = a2), i3.outSR ? (r.outSR = A(i3.outSR), u = t2.outSpatialReference) : e && (r.outSR = r.inSR, u = l2), r.bin && (r.bin = JSON.stringify(r.bin)), r.quantizationParameters && (r.quantizationParameters = JSON.stringify(r.quantizationParameters)), r.outStatistics && (r.outStatistics = JSON.stringify(r.outStatistics)), r.outTimeReference && (r.outTimeReference = JSON.stringify(r.outTimeReference)), i3.timeExtent) {
    const t3 = i3.timeExtent, { start: e2, end: n } = t3;
    null == e2 && null == n || (r.time = e2 === n ? e2 : `${e2 ?? "null"},${n ?? "null"}`), delete i3.timeExtent;
  }
  return t2.defaultSpatialReference && T(l2, u) && (r.defaultSR = r.inSR, delete r.inSR, delete r.outSR), r;
}
async function a(t2, e, i3) {
  return null != e.timeExtent && e.timeExtent.isEmpty ? { data: { features: [] } } : await m(t2, e, i3);
}
async function m(n, o, s = {}) {
  const a2 = "string" == typeof n ? I(n) : n, m2 = o.geometry ? [o.geometry] : [], f2 = await P(m2, null, { signal: s.signal }), y = f2 == null ? void 0 : f2[0];
  null != y && ((o = o.clone()).geometry = y);
  const p = t({ ...a2.query, f: "json", ...l(o) });
  return H(V(a2.path, "queryBins"), { ...s, query: { ...p, ...s.query } });
}

// node_modules/@arcgis/core/rest/query/executeAttributeBinsQuery.js
async function i2(i3, s, u) {
  const { data: m2 } = await a(f(i3), T2.from(s), u);
  return i.fromJSON(m2);
}
export {
  i2 as executeAttributeBinsQuery
};
//# sourceMappingURL=executeAttributeBinsQuery-7RP3N6ES.js.map
