import {
  s,
  s2
} from "./chunk-CP6Q2FSK.js";
import {
  a
} from "./chunk-S6WABKDT.js";
import "./chunk-S7STGGET.js";
import "./chunk-UBRI7U6V.js";
import {
  B,
  Je,
  U,
  ge,
  oe
} from "./chunk-PP56TFQ2.js";
import "./chunk-LQRNXK47.js";
import "./chunk-RESSXUYO.js";
import "./chunk-PNFUWJ4W.js";
import "./chunk-TGZYB2X6.js";
import "./chunk-XJTFKAAL.js";
import "./chunk-LPC5EXUG.js";
import "./chunk-XXCU7BD5.js";
import "./chunk-EQZMGADF.js";
import "./chunk-2BF5UAFG.js";
import {
  n as n2
} from "./chunk-GW72K4DJ.js";
import "./chunk-YITP5ORI.js";
import {
  n
} from "./chunk-2J6QCNYK.js";
import "./chunk-WB7QIPJO.js";
import "./chunk-6SW7QJSX.js";
import "./chunk-SBHNAU24.js";
import "./chunk-ZM5SAAQW.js";
import "./chunk-CG7LVCFL.js";
import "./chunk-TBHN7NEG.js";
import "./chunk-VR6VPSRB.js";
import "./chunk-R5IGYILM.js";
import "./chunk-WWZXCVZD.js";
import "./chunk-7KWU42EX.js";
import "./chunk-LD5EOJIR.js";
import "./chunk-MYD3EEGE.js";
import "./chunk-QN24DCIC.js";
import "./chunk-TVEPRWYA.js";
import "./chunk-3PVGVNCV.js";
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
import "./chunk-IHMZ3RSY.js";
import "./chunk-GMQ2EQ27.js";
import "./chunk-6YDIQE3P.js";
import "./chunk-XN5EOTP2.js";
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
import "./chunk-QRKINRAQ.js";
import "./chunk-KUWSTWZR.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/arcade/functions/featuresetgeom.js
function c(i) {
  return async (c2, f2, p) => {
    if (oe(p, 2, 2, c2, f2), null === (p = Je(p))[0] && null === p[1]) return false;
    if (B(p[0])) {
      if (U(p[1])) return new s2({ parentfeatureset: p[0], relation: i, relationGeom: p[1] });
      if (null === p[1]) return new s({ parentfeatureset: p[0] });
      throw new n(c2, "InvalidParameter", f2);
    }
    if (U(p[0])) {
      if (U(p[1])) {
        switch (i) {
          case "esriSpatialRelEnvelopeIntersects": {
            const e = n2(p[0]), n3 = n2(p[1]);
            return null != e && null != n3 && a("intersects", [e.toJSON(), n3.toJSON()]);
          }
          case "esriSpatialRelIntersects":
            return a("intersects", [p[0].toJSON(), p[1].toJSON()]);
          case "esriSpatialRelContains":
            return a("contains", [p[0].toJSON(), p[1].toJSON()]);
          case "esriSpatialRelOverlaps":
            return a("overlaps", [p[0].toJSON(), p[1].toJSON()]);
          case "esriSpatialRelWithin":
            return a("within", [p[0].toJSON(), p[1].toJSON()]);
          case "esriSpatialRelTouches":
            return a("touches", [p[0].toJSON(), p[1].toJSON()]);
          case "esriSpatialRelCrosses":
            return a("crosses", [p[0].toJSON(), p[1].toJSON()]);
        }
        throw new n(c2, "InvalidParameter", f2);
      }
      if (B(p[1])) return new s2({ parentfeatureset: p[1], relation: i, relationGeom: p[0] });
      if (null === p[1]) return false;
      throw new n(c2, "InvalidParameter", f2);
    }
    if (null === p[0]) {
      if (B(p[1])) return new s({ parentfeatureset: p[1] });
      if (U(p[1]) || null === p[1]) return false;
    }
    throw new n(c2, "InvalidParameter", f2);
  };
}
function f(t) {
  "async" === t.mode && (t.functions.intersects = function(e, n3) {
    return t.standardFunctionAsync(e, n3, c("esriSpatialRelIntersects"));
  }, t.functions.envelopeintersects = function(e, n3) {
    return t.standardFunctionAsync(e, n3, c("esriSpatialRelEnvelopeIntersects"));
  }, t.signatures.push({ name: "envelopeintersects", min: 2, max: 2 }), t.functions.contains = function(e, n3) {
    return t.standardFunctionAsync(e, n3, c("esriSpatialRelContains"));
  }, t.functions.overlaps = function(e, n3) {
    return t.standardFunctionAsync(e, n3, c("esriSpatialRelOverlaps"));
  }, t.functions.within = function(e, n3) {
    return t.standardFunctionAsync(e, n3, c("esriSpatialRelWithin"));
  }, t.functions.touches = function(e, n3) {
    return t.standardFunctionAsync(e, n3, c("esriSpatialRelTouches"));
  }, t.functions.crosses = function(e, n3) {
    return t.standardFunctionAsync(e, n3, c("esriSpatialRelCrosses"));
  }, t.functions.relate = function(o, c2) {
    return t.standardFunctionAsync(o, c2, async (t2, f2, p) => {
      if (p = Je(p), oe(p, 3, 3, o, c2), U(p[0]) && U(p[1])) return a("relate", [p[0].toJSON(), p[1].toJSON(), ge(p[2])]);
      if (U(p[0]) && null === p[1]) return false;
      if (U(p[1]) && null === p[0]) return false;
      if (B(p[0]) && null === p[1]) return new s({ parentfeatureset: p[0] });
      if (B(p[1]) && null === p[0]) return new s({ parentfeatureset: p[1] });
      if (B(p[0]) && U(p[1])) return p[0].relate(p[1], ge(p[2]));
      if (B(p[1]) && U(p[0])) return p[1].relate(p[0], ge(p[2]));
      if (null === p[0] && null === p[1]) return false;
      throw new n(o, "InvalidParameter", c2);
    });
  });
}
export {
  f as registerFunctions
};
//# sourceMappingURL=featuresetgeom-AOTV5KBG.js.map
