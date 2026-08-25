import {
  $e,
  B,
  Be,
  Ce,
  H,
  He,
  Ke,
  Oe,
  Qe,
  We,
  be,
  ge,
  oe,
  p,
  xe,
  z
} from "./chunk-PP56TFQ2.js";
import "./chunk-LQRNXK47.js";
import "./chunk-RESSXUYO.js";
import {
  P
} from "./chunk-TGZYB2X6.js";
import "./chunk-GW72K4DJ.js";
import "./chunk-YITP5ORI.js";
import {
  n
} from "./chunk-2J6QCNYK.js";
import "./chunk-SBHNAU24.js";
import "./chunk-ZM5SAAQW.js";
import "./chunk-MYD3EEGE.js";
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

// node_modules/@arcgis/core/arcade/functions/featuresetstring.js
function h(a, e) {
  return a && a.domain ? "coded-value" === a.domain.type || "codedValue" === a.domain.type ? p.convertObjectToArcadeDictionary({ type: "codedValue", name: a.domain.name, dataType: P[a.field.type], codedValues: a.domain.codedValues.map((n2) => ({ name: n2.name, code: n2.code })) }, Ke(e)) : p.convertObjectToArcadeDictionary({ type: "range", name: a.domain.name, dataType: P[a.field.type], min: a.domain.minValue, max: a.domain.maxValue }, Ke(e)) : null;
}
function T(p2) {
  "async" === p2.mode && (p2.functions.domain = function(n2, s) {
    return p2.standardFunctionAsync(n2, s, async (d, u, m) => {
      if (oe(m, 2, 3, n2, s), H(m[0])) {
        return h(He(m[0], ge(m[1]), void 0 === m[2] ? void 0 : m[2]), n2);
      }
      if (B(m[0])) {
        await m[0]._ensureLoaded();
        return h(Ce(ge(m[1]), m[0], null, void 0 === m[2] ? void 0 : m[2]), n2);
      }
      throw new n(n2, "InvalidParameter", s);
    });
  }, p2.functions.subtypes = function(r, o) {
    return p2.standardFunctionAsync(r, o, async (c, u, m) => {
      if (oe(m, 1, 1, r, o), H(m[0])) {
        const a = We(m[0]);
        return a ? p.convertObjectToArcadeDictionary(a, Ke(r)) : null;
      }
      if (B(m[0])) {
        await m[0]._ensureLoaded();
        const a = m[0].subtypeMetaData();
        return a ? p.convertObjectToArcadeDictionary(a, Ke(r)) : null;
      }
      throw new n(r, "InvalidParameter", o);
    });
  }, p2.functions.domainname = function(n2, r) {
    return p2.standardFunctionAsync(n2, r, async (s, d, f) => {
      if (oe(f, 2, 4, n2, r), H(f[0])) return $e(f[0], ge(f[1]), f[2], void 0 === f[3] ? void 0 : f[3]);
      if (B(f[0])) {
        await f[0]._ensureLoaded();
        const n3 = Ce(ge(f[1]), f[0], null, void 0 === f[3] ? void 0 : f[3]);
        return xe(n3, f[2]);
      }
      throw new n(n2, "InvalidParameter", r);
    });
  }, p2.signatures.push({ name: "domainname", min: 2, max: 4 }), p2.functions.domaincode = function(n2, r) {
    return p2.standardFunctionAsync(n2, r, async (s, d, u) => {
      if (oe(u, 2, 4, n2, r), H(u[0])) return Be(u[0], ge(u[1]), u[2], void 0 === u[3] ? void 0 : u[3]);
      if (B(u[0])) {
        await u[0]._ensureLoaded();
        const n3 = Ce(ge(u[1]), u[0], null, void 0 === u[3] ? void 0 : u[3]);
        return Oe(n3, u[2]);
      }
      throw new n(n2, "InvalidParameter", r);
    });
  }, p2.signatures.push({ name: "domaincode", min: 2, max: 4 }), p2.functions.text = function(n2, t) {
    return p2.standardFunctionAsync(n2, t, async (r, o, c) => {
      if (oe(c, 1, 2, n2, t), B(c[0])) {
        const e = z(c[1], "");
        if ("" === e) return c[0].castToText();
        if ("schema" === e.toLowerCase()) return c[0].convertToText("schema", r.abortSignal);
        if ("featureset" === e.toLowerCase()) return c[0].convertToText("featureset", r.abortSignal);
        throw new n(n2, "InvalidParameter", t);
      }
      return be(c[0], c[1]);
    });
  }, p2.functions.gdbversion = function(n2, r) {
    return p2.standardFunctionAsync(n2, r, async (o, c, s) => {
      if (oe(s, 1, 1, n2, r), H(s[0])) return s[0].gdbVersion();
      if (B(s[0])) {
        return (await s[0].load()).gdbVersion;
      }
      throw new n(n2, "InvalidParameter", r);
    });
  }, p2.functions.schema = function(r, o) {
    return p2.standardFunctionAsync(r, o, async (c, s, u) => {
      if (oe(u, 1, 1, r, o), B(u[0])) return await u[0].load(), p.convertObjectToArcadeDictionary(u[0].schema(), Ke(r));
      if (H(u[0])) {
        const a = Qe(u[0]);
        return a ? p.convertObjectToArcadeDictionary(a, Ke(r)) : null;
      }
      throw new n(r, "InvalidParameter", o);
    });
  });
}
export {
  T as registerFunctions
};
//# sourceMappingURL=featuresetstring-ANMOME52.js.map
