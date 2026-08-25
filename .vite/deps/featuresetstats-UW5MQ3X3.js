import {
  x
} from "./chunk-62OBQCXR.js";
import {
  l
} from "./chunk-HPGZFG6B.js";
import {
  L,
  i
} from "./chunk-S7STGGET.js";
import {
  B,
  K,
  Ke,
  oe,
  te,
  ue,
  z
} from "./chunk-PP56TFQ2.js";
import "./chunk-LQRNXK47.js";
import "./chunk-RESSXUYO.js";
import "./chunk-TGZYB2X6.js";
import {
  m
} from "./chunk-GW72K4DJ.js";
import "./chunk-YITP5ORI.js";
import {
  n
} from "./chunk-2J6QCNYK.js";
import "./chunk-SBHNAU24.js";
import "./chunk-ZM5SAAQW.js";
import {
  e,
  o,
  t
} from "./chunk-MYD3EEGE.js";
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
import "./chunk-NOVKMJNS.js";
import "./chunk-27A66LHG.js";
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

// node_modules/@arcgis/core/arcade/functions/featuresetstats.js
async function p(n2, t2, e2, r) {
  if (1 === e2.length) {
    if (o(e2[0])) return l(n2, e2[0], z(e2[1], -1));
    if (te(e2[0])) return l(n2, e2[0].toArray(), z(e2[1], -1));
  } else if (2 === e2.length) {
    if (o(e2[0])) return l(n2, e2[0], z(e2[1], -1));
    if (te(e2[0])) return l(n2, e2[0].toArray(), z(e2[1], -1));
    if (B(e2[0])) {
      const a = await e2[0].load(), i2 = await F(L.create(e2[1], { fieldsIndex: a.getFieldsIndex(), timeZone: a.dateFieldsTimeZoneDefaultUTC }), r, t2);
      return A(t2, await e2[0].calculateStatistic(n2, i2, z(e2[2], 1e3), t2.abortSignal));
    }
  } else if (3 === e2.length && B(e2[0])) {
    const a = await e2[0].load(), i2 = await F(L.create(e2[1], { fieldsIndex: a.getFieldsIndex(), timeZone: a.dateFieldsTimeZoneDefaultUTC }), r, t2);
    return A(t2, await e2[0].calculateStatistic(n2, i2, z(e2[2], 1e3), t2.abortSignal));
  }
  return l(n2, e2, -1);
}
function A(t2, e2) {
  return e2 instanceof i ? m.fromReaderAsTimeStampOffset(e2.toStorageFormat()) : e2 instanceof Date ? m.dateJSAndZoneToArcadeDate(e2, Ke(t2)) : e2;
}
async function F(n2, t2, e2) {
  const r = n2.getVariables();
  if (r.length > 0) {
    const a = {};
    for (const n3 of r) a[n3] = t2.evaluateIdentifier(e2, { name: n3 });
    n2.parameters = a;
  }
  return n2;
}
function h(n2) {
  "async" === n2.mode && (n2.functions.stdev = function(t2, e2) {
    return n2.standardFunctionAsync(t2, e2, (e3, r, a) => p("stdev", t2, a, n2));
  }, n2.functions.variance = function(t2, e2) {
    return n2.standardFunctionAsync(t2, e2, (e3, r, a) => p("variance", t2, a, n2));
  }, n2.functions.average = function(t2, e2) {
    return n2.standardFunctionAsync(t2, e2, (e3, r, a) => p("mean", t2, a, n2));
  }, n2.functions.mean = function(t2, e2) {
    return n2.standardFunctionAsync(t2, e2, (e3, r, a) => p("mean", t2, a, n2));
  }, n2.functions.sum = function(t2, e2) {
    return n2.standardFunctionAsync(t2, e2, (e3, r, a) => p("sum", t2, a, n2));
  }, n2.functions.min = function(t2, e2) {
    return n2.standardFunctionAsync(t2, e2, (e3, r, a) => p("min", t2, a, n2));
  }, n2.functions.max = function(t2, e2) {
    return n2.standardFunctionAsync(t2, e2, (e3, r, a) => p("max", t2, a, n2));
  }, n2.functions.count = function(t2, s) {
    return n2.standardFunctionAsync(t2, s, async (n3, u, c) => {
      if (oe(c, 1, 1, t2, s), null == c[0]) return 0;
      if (B(c[0])) return c[0].count(n3.abortSignal);
      if (o(c[0]) || e(c[0])) return c[0].length;
      if (te(c[0])) return c[0].length();
      if (K(c[0])) return c[0].entryCount();
      throw new n(t2, "InvalidParameter", s);
    });
  }, n2.functions.isempty = function(i2, o2) {
    return n2.standardFunctionAsync(i2, o2, async (n3, i3, o3) => {
      if (oe(o3, 1, 2, n3, i3), o3.length >= 2 && !t(o3[1])) throw new n(n3, "InvalidParameter", i3);
      return z(o3[1], false) ? B(o3[0]) ? await o3[0].isEmpty(n3.abortSignal) : x(o3[0]) : ue(o3[0]);
    });
  });
}
export {
  h as registerFunctions
};
//# sourceMappingURL=featuresetstats-UW5MQ3X3.js.map
