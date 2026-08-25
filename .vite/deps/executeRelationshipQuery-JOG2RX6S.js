import {
  t
} from "./chunk-YJLNGOA5.js";
import {
  g
} from "./chunk-42UJ54JV.js";
import {
  u
} from "./chunk-TCROKNPY.js";
import {
  f
} from "./chunk-WNOCFBHR.js";
import "./chunk-YBGSS2I2.js";
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
import {
  A
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

// node_modules/@arcgis/core/rest/query/operations/queryRelatedRecords.js
function r(e, o) {
  const r2 = e.toJSON();
  return r2.objectIds && (r2.objectIds = r2.objectIds.join(",")), r2.orderByFields && (r2.orderByFields = r2.orderByFields.join(",")), r2.outFields && !(o == null ? void 0 : o.returnCountOnly) ? r2.outFields.includes("*") ? r2.outFields = "*" : r2.outFields = r2.outFields.join(",") : delete r2.outFields, r2.outSR && (r2.outSR = A(r2.outSR)), r2.dynamicDataSource && (r2.layer = JSON.stringify({ source: r2.dynamicDataSource }), delete r2.dynamicDataSource), r2;
}
async function s(e, t2, o) {
  const r2 = await a(e, t2, o), s2 = r2.data, n3 = s2.geometryType, d = s2.spatialReference, c = {};
  for (const a2 of s2.relatedRecordGroups) {
    const e2 = { fields: void 0, geometryType: n3, spatialReference: d, hasZ: !!s2.hasZ, hasM: !!s2.hasM, features: a2.relatedRecords };
    if (null != a2.objectId) c[a2.objectId] = e2;
    else for (const t3 of Object.keys(a2)) "relatedRecords" !== t3 && (c[a2[t3]] = e2);
  }
  return { ...r2, data: c };
}
async function n(e, t2, o) {
  const r2 = await a(e, t2, o, { returnCountOnly: true }), s2 = r2.data, n3 = {};
  for (const a2 of s2.relatedRecordGroups) null != a2.objectId && (n3[a2.objectId] = a2.count);
  return { ...r2, data: n3 };
}
async function a(t2, s2, n3 = {}, a2) {
  const d = t({ ...t2.query, f: "json", ...a2, ...r(s2, a2) });
  return H(t2.path + "/queryRelatedRecords", { ...n3, query: { ...n3.query, ...d } });
}

// node_modules/@arcgis/core/rest/query/executeRelationshipQuery.js
async function n2(e, n3, u3) {
  n3 = u.from(n3);
  const a2 = f(e);
  return s(a2, n3, u3).then((t2) => {
    const r2 = t2.data, e2 = {};
    return Object.keys(r2).forEach((t3) => e2[t3] = g.fromJSON(r2[t3])), e2;
  });
}
async function u2(r2, o, n3) {
  o = u.from(o);
  const u3 = f(r2);
  return n(u3, o, { ...n3 }).then((t2) => t2.data);
}
export {
  n2 as executeRelationshipQuery,
  u2 as executeRelationshipQueryForCount
};
//# sourceMappingURL=executeRelationshipQuery-JOG2RX6S.js.map
