import {
  l
} from "./chunk-TLJJRMIX.js";
import {
  t
} from "./chunk-LSWCXDSB.js";
import {
  p as p4
} from "./chunk-5KRWFQOF.js";
import {
  e as e2,
  i,
  p as p2,
  p2 as p3
} from "./chunk-BX7ZEDOU.js";
import {
  K,
  Ke,
  U,
  ee,
  ge,
  ie,
  ne,
  oe,
  p,
  re,
  z
} from "./chunk-PP56TFQ2.js";
import "./chunk-LQRNXK47.js";
import "./chunk-RESSXUYO.js";
import {
  n as n3,
  p as p5
} from "./chunk-K4SM7556.js";
import "./chunk-TGZYB2X6.js";
import "./chunk-GW72K4DJ.js";
import "./chunk-YITP5ORI.js";
import {
  n
} from "./chunk-2J6QCNYK.js";
import "./chunk-S37ZVBOB.js";
import "./chunk-WNOCFBHR.js";
import "./chunk-SBHNAU24.js";
import "./chunk-ZM5SAAQW.js";
import {
  G,
  L,
  W
} from "./chunk-VF3OV6F3.js";
import "./chunk-TPDXVISU.js";
import "./chunk-VLLUHJV4.js";
import "./chunk-FKDE64FM.js";
import "./chunk-57YJ4LUD.js";
import {
  k
} from "./chunk-OXBIWFFC.js";
import {
  c as c2,
  e,
  n as n2,
  o
} from "./chunk-MYD3EEGE.js";
import {
  M
} from "./chunk-3PCQMPQH.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-PDXC6YP2.js";
import "./chunk-SWYYL7T7.js";
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
import "./chunk-5HYMAKZL.js";
import "./chunk-66BNN6ZJ.js";
import {
  c
} from "./chunk-NOVKMJNS.js";
import "./chunk-27A66LHG.js";
import "./chunk-6YDIQE3P.js";
import "./chunk-XN5EOTP2.js";
import "./chunk-5YBW6KQ6.js";
import "./chunk-VNR3A2IW.js";
import {
  S,
  j
} from "./chunk-6LIC47AK.js";
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
  s
} from "./chunk-KUWSTWZR.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/arcade/functions/knowledgegraph.js
var J = null;
async function N(r) {
  const t2 = s.geometryServiceUrl ?? "";
  if (!t2) {
    G() || await L();
    for (const e3 of r) e3.container[e3.indexer] = W(e3.container[e3.indexer], f.WGS84);
    return;
  }
  const n4 = r.map((e3) => e3.container[e3.indexer]), o2 = new p5({ geometries: n4, outSpatialReference: f.WGS84 }), a = await n3(t2, o2);
  for (let e3 = 0; e3 < a.length; e3++) {
    const t3 = r[e3];
    t3.container[t3.indexer] = a[e3];
  }
}
async function F(e3, r) {
  const t2 = new k({ portal: e3, id: r });
  return await t2.load(), null === J && (J = await import("./knowledgeGraphService-UXAN47HP.js")), await J.fetchKnowledgeGraph(t2.url);
}
function M2(e3, r, t2, n4, o2) {
  if (null === e3) return null;
  if (e(e3) || n2(e3)) return e3;
  if (ne(e3)) return e3.toJSDate();
  if (ne(e3)) return e3.toJSDate();
  if (re(e3)) return e3.toStorageFormat();
  if (ie(e3)) return e3.toStorageString();
  if (K(e3)) {
    const a = {};
    for (const i2 of e3.keys()) a[i2] = M2(e3.field(i2), r, t2, n4, o2), a[i2] instanceof c && o2.push({ container: a, indexer: i2 });
    return a;
  }
  if (o(e3)) {
    const a = e3.map((e4) => M2(e4, r, t2, n4, o2));
    for (let e4 = 0; e4 < a.length; e4++) a[e4] instanceof c && o2.push({ container: a, indexer: e4 });
    return a;
  }
  return U(e3) ? e3.spatialReference.isWGS84 ? e3 : e3.spatialReference.isWebMercator && r ? S(e3) : e3 : void 0;
}
function Q(e3, r) {
  if (!e3) return e3;
  if (e3.spatialReference.isWGS84 && r.spatialReference.isWebMercator) return j(e3);
  if (e3.spatialReference.equals(r.spatialReference)) return e3;
  throw new n(r, "WrongSpatialReference", null);
}
function B(e3, r) {
  if (!e3) return null;
  const t2 = {};
  for (const n4 in e3) t2[n4] = E(e3[n4], r);
  return t2;
}
function E(e3, r) {
  return null === e3 ? null : o(e3) ? e3.map((e4) => E(e4, r)) : e3 instanceof p2 ? { graphTypeName: e3.typeName, id: e3.id, graphType: "entity", properties: B(e3.properties, r) } : e3 instanceof e2 ? { graphType: "object", properties: B(e3.properties, r) } : e3 instanceof i ? { graphTypeName: e3.typeName, id: e3.id, graphType: "relationship", originId: e3.originId ?? null, destinationId: e3.destinationId ?? null, properties: B(e3.properties, r) } : e3 instanceof p3 ? { graphType: "path", path: e3.path ? e3.path.map((e4) => E(e4, r)) : null } : U(e3) ? Q(e3, r) : e(e3) || n2(e3) || c2(e3) ? e3 : null;
}
function K2(e3) {
  "async" === e3.mode && (e3.functions.knowledgegraphbyportalitem = function(t2, i2) {
    return e3.standardFunctionAsync(t2, i2, (e4, s2, p6) => {
      var _a, _b;
      if (oe(p6, 2, 2, t2, i2), null === p6[0]) throw new n(t2, "PortalRequired", i2);
      if (p6[0] instanceof t) {
        const e5 = ge(p6[1]);
        let r;
        r = ((_a = t2.services) == null ? void 0 : _a.portal) ? t2.services.portal : M.getDefault();
        return F(l(p6[0], r), e5);
      }
      if (false === e(p6[0])) throw new n(t2, "InvalidParameter", i2);
      const l2 = ge(p6[0]);
      return F(((_b = t2.services) == null ? void 0 : _b.portal) ?? M.getDefault(), l2);
    });
  }, e3.signatures.push({ name: "knowledgegraphbyportalitem", min: 2, max: 2 }), e3.functions.querygraph = function(r, a) {
    return e3.standardFunctionAsync(r, a, async (e4, l2, c3) => {
      var _a;
      oe(c3, 2, 4, r, a);
      const f2 = c3[0];
      if (!ee(f2)) throw new n(r, "InvalidParameter", a);
      const u = c3[1];
      if (!e(u)) throw new n(r, "InvalidParameter", a);
      null === J && (J = await import("./knowledgeGraphService-UXAN47HP.js"));
      let m = null;
      const d = z(c3[2], null);
      if (!(d instanceof p || null === d)) throw new n(r, "InvalidParameter", a);
      if (d) {
        let e5 = [];
        m = M2(d, true, false, r, e5), e5 = e5.filter((e6) => !e6.container[e6.indexer].spatialReference.isWGS84), e5.length > 0 && await N(e5);
      }
      const h = z(c3[3], false), g = new p4({ openCypherQuery: u, bindParameters: m, provenanceBehavior: h ? "include" : "exclude" });
      (((_a = f2 == null ? void 0 : f2.serviceDefinition) == null ? void 0 : _a.currentVersion) ?? 11.3) > 11.2 && (g.outputSpatialReference = r.spatialReference);
      const w = (await J.executeQueryStreaming(f2, g)).resultRowsStream.getReader(), y = [];
      try {
        for (; ; ) {
          const { done: e5, value: t2 } = await w.read();
          if (e5) break;
          if (o(t2)) for (const n4 of t2) y.push(E(n4, r));
          else {
            const e6 = [];
            for (const n4 of t2) e6.push(E(t2[n4], r));
            y.push(e6);
          }
        }
      } catch (j2) {
        throw j2;
      }
      return p.convertJsonToArcade(y, Ke(r), false, true);
    });
  }, e3.signatures.push({ name: "querygraph", min: 2, max: 4 }));
}
export {
  K2 as registerFunctions
};
//# sourceMappingURL=knowledgegraph-X7W3DTHE.js.map
