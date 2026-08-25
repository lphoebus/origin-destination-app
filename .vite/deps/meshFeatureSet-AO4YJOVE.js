import {
  i as i3,
  n as n2
} from "./chunk-VCANUAUH.js";
import {
  Y
} from "./chunk-WWTHSN2T.js";
import "./chunk-XB7HCEMV.js";
import {
  i as i2,
  n
} from "./chunk-PRILJ5XG.js";
import "./chunk-UVUMG3B2.js";
import "./chunk-KOHHXDNE.js";
import "./chunk-COPFIRGP.js";
import "./chunk-ZM3WOGSB.js";
import "./chunk-B3JUOOGN.js";
import "./chunk-KBZWDSXU.js";
import "./chunk-JVVENG6Z.js";
import "./chunk-52224I66.js";
import "./chunk-DNQU52JW.js";
import "./chunk-C7WLYOQL.js";
import "./chunk-TK2EVVYP.js";
import "./chunk-ZTT7LSRG.js";
import "./chunk-OGQHWOPB.js";
import "./chunk-V7Y3WM6L.js";
import "./chunk-D6PEJ6S7.js";
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
import "./chunk-RCRCU33S.js";
import {
  g
} from "./chunk-42UJ54JV.js";
import {
  s
} from "./chunk-VWYWPNIA.js";
import "./chunk-H3DIC2LV.js";
import "./chunk-IABCCFYF.js";
import "./chunk-SBHNAU24.js";
import "./chunk-ZM5SAAQW.js";
import "./chunk-VF3OV6F3.js";
import "./chunk-TPDXVISU.js";
import "./chunk-VLLUHJV4.js";
import "./chunk-FKDE64FM.js";
import "./chunk-57YJ4LUD.js";
import "./chunk-UGAC6FVR.js";
import {
  _
} from "./chunk-IG7ETWYB.js";
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
import {
  z
} from "./chunk-66BNN6ZJ.js";
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
import {
  f
} from "./chunk-7J6TZQJ4.js";
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
import {
  e
} from "./chunk-PRKAQBHS.js";
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
  i3 as i
} from "./chunk-KUWSTWZR.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/rest/support/meshFeatureSet.js
var p = () => i.getLogger("esri.rest.support.meshFeatureSet");
function l(t, r, s2) {
  const o = s2.features;
  s2.features = [], delete s2.geometryType;
  const a = g.fromJSON(s2);
  if (a.geometryType = "mesh", !s2.assetMaps) return a;
  const u = g2(r, s2.assetMaps), i4 = t.sourceSpatialReference ?? f.WGS84, m = s2.globalIdFieldName, { outFields: c } = t, p2 = null != c && c.length > 0 ? y(c.includes("*") ? null : new Set(c)) : () => ({});
  for (const n3 of o) {
    const t2 = h(n3, m, i4, r, u);
    a.features.push(new _({ geometry: t2, attributes: p2(n3) }));
  }
  return a;
}
function y(e2) {
  return ({ attributes: t }) => {
    if (!t) return {};
    if (!e2) return t;
    for (const r in t) e2.has(r) || delete t[r];
    return t;
  };
}
function h(e2, t, r, n3, a) {
  const u = e2.attributes[t], i4 = a.get(u);
  if (null == i4 || !e2.geometry) return null;
  const f2 = n2(e2.attributes, r, n3.transformFieldRoles), p2 = z.fromJSON(e2.geometry);
  p2.spatialReference = r;
  const l2 = i3(e2.attributes, n3.transformFieldRoles), y2 = r.isGeographic ? "local" : "georeferenced", h2 = d(i4);
  return h2 ? Y.createWithExternalSource(f2, h2, { extent: p2, transform: l2, vertexSpace: y2, unitConversionDisabled: true }) : Y.createIncomplete(f2, { extent: p2, transform: l2, vertexSpace: y2 });
}
function g2(e2, t) {
  const s2 = /* @__PURE__ */ new Map();
  for (const o of t) {
    const t2 = o.parentGlobalId;
    if (null == t2) continue;
    const n3 = o.assetName, a = o.assetType, u = o.assetHash, f2 = o.assetURL, m = o.conversionStatus, c = o.seqNo, l2 = s(a, e2.supportedFormats);
    if (!l2) {
      p().error("mesh-feature-set:unknown-format", `Service returned an asset of type ${a}, but it does not list it as a supported type`);
      continue;
    }
    const y2 = e(s2, t2, () => ({ files: /* @__PURE__ */ new Map() }));
    e(y2.files, n3, () => ({ name: n3, type: a, mimeType: l2, status: S(m), parts: [] })).parts[c] = { hash: u, url: f2 };
  }
  return s2;
}
function d(e2) {
  const t = Array.from(e2.files.values()), r = new Array();
  for (const s2 of t) {
    if (2 !== s2.status) return null;
    const e3 = new Array();
    for (const t2 of s2.parts) {
      if (!t2) return null;
      e3.push(new n(t2.url, t2.hash));
    }
    r.push(new i2(s2.name, s2.mimeType, e3));
  }
  return { type: "service", assets: r };
}
function S(e2) {
  switch (e2) {
    case "COMPLETED":
    case "SUBMITTED":
      return 2;
    case "INPROGRESS":
      return 1;
    default:
      return 0;
  }
}
export {
  g2 as assetMapFromAssetMapsJSON,
  h as extractMesh,
  l as meshFeatureSetFromJSON
};
//# sourceMappingURL=meshFeatureSet-AO4YJOVE.js.map
