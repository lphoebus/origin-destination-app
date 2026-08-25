import {
  f
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
import "./chunk-66BNN6ZJ.js";
import "./chunk-NOVKMJNS.js";
import "./chunk-27A66LHG.js";
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

// node_modules/@arcgis/core/arcade/geometry/operatorsWorker.js
function t(e, t2) {
  let r2;
  return { loaded: false, load: () => r2 ?? (r2 = t2().then((t3) => {
    o[e] = { loaded: true, execute: t3 };
  })) };
}
function r(e) {
  return null == e ? null : e.toJSON();
}
var o = { disjoint: t("disjoint", () => import("./disjointOperator-APWUNVX4.js").then((e) => e.execute)), intersects: t("intersects", () => import("./intersectsOperator-S2NIMNCJ.js").then((e) => e.execute)), touches: t("touches", () => import("./touchesOperator-IESYL5L3.js").then((e) => e.execute)), crosses: t("crosses", () => import("./crossesOperator-GZYXCAE2.js").then((e) => e.execute)), within: t("within", () => import("./withinOperator-V5HYAPR2.js").then((e) => e.execute)), contains: t("contains", () => import("./containsOperator-QE2EZLLE.js").then((e) => e.execute)), overlaps: t("overlaps", () => import("./overlapsOperator-RDT2LQZJ.js").then((e) => e.execute)), equals: t("equals", async () => {
  const t2 = await import("./equalsOperator-LBB7XMLZ.js");
  return (r2, o2) => t2.execute(f(r2), f(o2));
}), relate: t("relate", async () => {
  const t2 = await import("./relateOperator-FUKNTILO.js");
  return (r2, o2, n2) => t2.execute(f(r2), f(o2), n2);
}), intersection: t("intersection", () => import("./intersectionOperator-DFKXHBMY.js").then((e) => e.execute)), union: t("union", () => import("./unionOperator-ZDI4GWJ7.js").then((e) => e.executeMany)), difference: t("difference", async () => {
  const t2 = await import("./differenceOperator-33UMQGM4.js");
  return (o2, n2) => r(t2.execute(f(o2), f(n2)));
}), symmetricDifference: t("symmetricDifference", async () => {
  const t2 = await import("./symmetricDifferenceOperator-H3WN74AY.js");
  return (o2, n2) => r(t2.execute(f(o2), f(n2)));
}), clip: t("clip", async () => {
  const t2 = await import("./clipOperator-2ASW2MTL.js");
  return (o2, n2) => r(t2.execute(f(o2), f(n2)));
}), cut: t("cut", async () => {
  const t2 = await import("./cutOperator-ON2YMCVA.js");
  return (o2, n2) => t2.execute(f(o2), f(n2)).map((e) => r(e));
}), area: t("area", async () => {
  const t2 = await import("./areaOperator-2YN7GDAE.js"), { convertFromSpatialReferenceUnit: r2, toAreaUnit: o2 } = await import("./unitConversion-DHONZKZJ.js");
  return (n2, a) => {
    const s = t2.execute(f(n2));
    return r2(n2.spatialReference, o2(a), s);
  };
}), geodeticArea: t("geodeticArea", async () => {
  const t2 = await import("./geodeticAreaOperator-PWMNLVUN.js"), { convert: r2, squareMeters: o2, toAreaUnit: n2 } = await import("./unitConversion-DHONZKZJ.js");
  return await t2.load(), (a, s, i) => {
    const c = t2.execute(f(a), { curveType: i });
    return r2(o2, n2(s), c);
  };
}), length: t("length", async () => {
  const e = await import("./lengthOperator-RPOD6BFW.js"), { convertFromSpatialReferenceUnit: t2, toLengthUnit: r2 } = await import("./unitConversion-DHONZKZJ.js");
  return (o2, n2) => {
    const a = e.execute(o2);
    return t2(o2.spatialReference, r2(n2), a);
  };
}), geodeticLength: t("geodeticLength", async () => {
  const t2 = await import("./geodeticLengthOperator-FWBPDSIH.js"), { convert: r2, meters: o2, toLengthUnit: n2 } = await import("./unitConversion-DHONZKZJ.js");
  return await t2.load(), (a, s, i) => {
    const c = t2.execute(f(a), { curveType: i });
    return r2(o2, n2(s), c);
  };
}), distance: t("distance", async () => {
  const t2 = await import("./distanceOperator-T2KHAUMW.js"), { convertFromSpatialReferenceUnit: r2, toLengthUnit: o2 } = await import("./unitConversion-DHONZKZJ.js");
  return (n2, a, s) => {
    const i = t2.execute(f(n2), f(a));
    return r2(n2.spatialReference, o2(s), i);
  };
}), densify: t("densify", async () => {
  const t2 = await import("./densifyOperator-UXXJENLC.js"), { convertToSpatialReferenceUnit: o2, toLengthUnit: n2 } = await import("./unitConversion-DHONZKZJ.js");
  return (a, s, i) => (s = o2(n2(i), a.spatialReference, s), r(t2.execute(f(a), s)));
}), geodeticDensify: t("geodeticDensify", async () => {
  const t2 = await import("./geodeticDensifyOperator-OW66LJNQ.js"), { convert: o2, meters: n2, toLengthUnit: a } = await import("./unitConversion-DHONZKZJ.js");
  return await t2.load(), (s, i, c, p) => (i = o2(a(c), n2, i), r(t2.execute(f(s), i, { curveType: p })));
}), generalize: t("generalize", async () => {
  const t2 = await import("./generalizeOperator-2ZTZNYX2.js"), { convertToSpatialReferenceUnit: o2, toLengthUnit: n2 } = await import("./unitConversion-DHONZKZJ.js");
  return (a, s, i, c) => (s = o2(n2(i), a.spatialReference, s), r(t2.execute(f(a), s, c)));
}), buffer: t("buffer", async () => {
  const e = await import("./bufferOperator-BJLAHSE2.js"), { convertToSpatialReferenceUnit: t2, toLengthUnit: r2 } = await import("./unitConversion-DHONZKZJ.js");
  return (o2, n2, a) => (n2 = t2(r2(a), o2.spatialReference, n2), e.execute(o2, n2));
}), geodesicBuffer: t("geodesicBuffer", async () => {
  const e = await import("./geodesicBufferOperator-PQEMZFOM.js"), { convert: t2, meters: r2, toLengthUnit: o2 } = await import("./unitConversion-DHONZKZJ.js");
  return await e.load(), (n2, a, s, i) => (a = t2(o2(s), r2, a), e.execute(n2, a, { curveType: i }));
}), offset: t("offset", async () => {
  const { executeOffsetJson: e } = await import("./offset-PFCC5HQM.js");
  return e;
}), rotate: t("rotate", async () => {
  const t2 = await import("./affineTransformOperator-ZTK3EC6X.js"), { default: o2 } = await import("./Transformation-NZIEDYAP.js");
  return (n2, a, s, i) => {
    const c = new o2().rotate(a, s, i);
    return r(t2.execute(f(n2), c));
  };
}), centroid: t("centroid", async () => {
  const t2 = await import("./centroidOperator-S4H5KTBD.js");
  return (o2) => r(t2.execute(f(o2)));
}), labelPoint: t("labelPoint", async () => {
  const t2 = await import("./labelPointOperator-NNYLYZYW.js");
  return (o2) => r(t2.execute(f(o2)));
}), simplify: t("simplify", () => import("./simplifyOperator-W27FYNF2.js").then((e) => e.execute)), isSelfIntersecting: t("isSelfIntersecting", async () => {
  const { NonSimpleResult: t2 } = await import("./OperatorDefinitions-TGDMHU3X.js"), r2 = await import("./simplifyOGCOperator-4XUYIMRK.js"), o2 = /* @__PURE__ */ new Set([5, 6, 7, 10, 11, 12]);
  return (n2) => {
    const a = new t2();
    return !r2.isSimple(f(n2), a) && o2.has(a.m_reason);
  };
}), isSimple: t("isSimple", () => import("./simplifyOperator-W27FYNF2.js").then((e) => e.isSimple)), convexHull: t("convexHull", () => import("./convexHullOperator-T5V3L3OB.js").then((e) => e.execute)), getNearestCoordinate: t("getNearestCoordinate", async () => {
  const t2 = await import("./proximityOperator-XWQ6FQ4H.js");
  return (o2, n2, a) => {
    const s = t2.getNearestCoordinate(f(o2), f(n2), a);
    return { ...s, coordinate: r(s.coordinate) };
  };
}), getNearestVertex: t("getNearestVertex", async () => {
  const t2 = await import("./proximityOperator-XWQ6FQ4H.js");
  return (o2, n2) => {
    const a = t2.getNearestVertex(f(o2), f(n2));
    return { ...a, coordinate: r(a.coordinate) };
  };
}) };
function n(e, t2) {
  const r2 = o[e];
  return r2.loaded ? r2.execute.apply(void 0, t2) : r2.load().then(() => n(e, t2));
}
export {
  n as invokeGeometryOp
};
//# sourceMappingURL=operatorsWorker-P3VGQ2IO.js.map
