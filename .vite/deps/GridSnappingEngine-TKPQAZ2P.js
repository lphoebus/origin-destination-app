import {
  n
} from "./chunk-S6MNQFAI.js";
import {
  i as i2
} from "./chunk-67HDIB6R.js";
import "./chunk-Z2VNECWP.js";
import "./chunk-LI44BB66.js";
import {
  d
} from "./chunk-RFZO7KB5.js";
import "./chunk-HIGSJTLY.js";
import {
  f,
  l as l2
} from "./chunk-RCDARI2U.js";
import {
  l,
  t,
  u as u2
} from "./chunk-LDK5BPO3.js";
import "./chunk-PODBP65Q.js";
import "./chunk-WXGZCYG3.js";
import "./chunk-GKYYWAKB.js";
import "./chunk-NN6BMFFP.js";
import "./chunk-C7WLYOQL.js";
import "./chunk-TK2EVVYP.js";
import "./chunk-ZTT7LSRG.js";
import "./chunk-UISC6JT5.js";
import "./chunk-NA7IIYEG.js";
import "./chunk-G4GYF45W.js";
import "./chunk-ZILZAUQI.js";
import {
  w
} from "./chunk-SPZYEASA.js";
import "./chunk-H7NF3WNO.js";
import {
  u
} from "./chunk-SCBC6HXA.js";
import "./chunk-H3DIC2LV.js";
import "./chunk-IABCCFYF.js";
import "./chunk-O34PYKME.js";
import "./chunk-UD33XSRY.js";
import {
  L
} from "./chunk-RGNEOB6I.js";
import "./chunk-S37ZVBOB.js";
import "./chunk-VR3OXZAC.js";
import "./chunk-WNOCFBHR.js";
import "./chunk-M3SP5TM6.js";
import "./chunk-NK2YW3YT.js";
import "./chunk-TCDKBCY3.js";
import "./chunk-NULLBAN4.js";
import "./chunk-YBGSS2I2.js";
import "./chunk-SBHNAU24.js";
import "./chunk-ZM5SAAQW.js";
import "./chunk-CG7LVCFL.js";
import {
  W,
  b as b2
} from "./chunk-VF3OV6F3.js";
import "./chunk-TPDXVISU.js";
import "./chunk-VLLUHJV4.js";
import "./chunk-FKDE64FM.js";
import "./chunk-57YJ4LUD.js";
import "./chunk-3UHA63PD.js";
import "./chunk-UGAC6FVR.js";
import "./chunk-WWZXCVZD.js";
import "./chunk-LD5EOJIR.js";
import "./chunk-PVAT2NHO.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-YOKAK57B.js";
import "./chunk-GPG7YJ2X.js";
import "./chunk-7VLZMF2B.js";
import "./chunk-4BEZTMLR.js";
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
import {
  s
} from "./chunk-HXC5WSBJ.js";
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
import "./chunk-DLX5DTNB.js";
import "./chunk-6LIC47AK.js";
import "./chunk-7J6TZQJ4.js";
import "./chunk-ZNU5NTGY.js";
import {
  N2 as N
} from "./chunk-J3VZVJYU.js";
import "./chunk-U2QKMJ4B.js";
import "./chunk-UWOUWJRN.js";
import "./chunk-4EJ2CVAA.js";
import {
  b,
  m2 as m
} from "./chunk-TSVVEDRS.js";
import {
  a2 as a
} from "./chunk-HPSHCA6S.js";
import "./chunk-PB4SYOXK.js";
import "./chunk-GJFVHE2X.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";
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
  i3 as i
} from "./chunk-KUWSTWZR.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/views/interactive/snapping/GridSnappingEngine.js
var w2 = class extends b {
  constructor(t2) {
    super(t2), this.options = null;
  }
  destroy() {
    this._set("options", null);
  }
  get grid() {
    return this.view.grid;
  }
  get effectiveViewRotation() {
    var _a;
    return ((_a = this.grid) == null ? void 0 : _a.rotateWithMap) ? 0 : s(this.view.rotation ?? 0);
  }
  get gridRotation() {
    var _a;
    return s(((_a = this.grid) == null ? void 0 : _a.rotation) ?? 0);
  }
  get gridCenter() {
    var _a;
    const { spatialReference: t2, grid: e } = this;
    if (!e || !t2 || !b2(e.center.spatialReference, t2)) return null;
    try {
      const r = W(e.center, t2), i3 = t2.isWrappable && null != ((_a = this.view) == null ? void 0 : _a.center) ? L(r.x, this.view.center.x, t2) : r.x;
      return l2(i3, r.y, r.z);
    } catch (i3) {
      return i.getLogger(this).errorOnce("Grid Snapping - Failed to project grid center.", i3), null;
    }
  }
  get offsetScaleFactor() {
    const { pixelsPerStride: t2, grid: e } = this;
    if (!e || !t2) return 1;
    const { majorLineInterval: r, dynamicScaling: i3 } = e;
    return r < 1 ? null : l(r, t2, i3);
  }
  get spatialReference() {
    return this.view.spatialReference;
  }
  get gridMetersPerStride() {
    const { grid: t2 } = this;
    return t2 ? N(t2.spacing, t2.units, "meters") : null;
  }
  get viewMetersPerPixel() {
    const { viewMetersPerSRUnit: t2 } = this;
    return null == t2 ? null : t2 * u(this.view.scale, this.view.spatialReference);
  }
  get viewMetersPerSRUnit() {
    const { spatialReference: t2 } = this.view;
    return this.gridCenter ? u2(this.gridCenter[0], this.gridCenter[1], t2) : null;
  }
  get pixelsPerStride() {
    const { gridMetersPerStride: t2, viewMetersPerPixel: e } = this;
    return e && t2 ? t2 / e : null;
  }
  get updating() {
    return null != this.grid && null != this.spatialReference && null == this.viewMetersPerSRUnit;
  }
  async fetchCandidates(t2, e, r) {
    var _a;
    const { options: i3, view: n2 } = this;
    if (!(i3 == null ? void 0 : i3.effectiveGridEnabled) || !n2.grid || ((_a = r.feature) == null ? void 0 : _a.attributes) && d in r.feature.attributes) return [];
    const o = r.coordinateHelper.arrayToPoint(t2), s2 = i3.distance * ("touch" === r.pointer ? i3.touchSensitivityMultiplier : 1);
    return this.fetchCandidatesSync(o, s2);
  }
  fetchCandidatesSync(t2, e) {
    const r = [], { grid: i3, effectiveViewRotation: n2, gridRotation: o, gridCenter: s2, viewMetersPerPixel: a2, viewMetersPerSRUnit: c, offsetScaleFactor: u3, spatialReference: g, gridMetersPerStride: f2, pixelsPerStride: m2 } = this;
    if (!(i3 && a2 && c && s2 && g && u3 && f2 && m2)) return r;
    if (!i3.dynamicScaling && m2 < t) return r;
    if (!b2(t2.spatialReference, g)) return r;
    const S = W(t2, g), w3 = l2(S.x, S.y, S.z), x = P(w3, -o, s2, -n2), C = f2 / c * u3, U = R(x, C, s2), { shouldSnapX: b3, shouldSnapY: L2 } = j(U, x, e, a2, c);
    if (!b3 && !L2) return [];
    const z = l2((b3 ? U : x)[0], (L2 ? U : x)[1]), E = P(z, o, s2, n2), F = P(U, o, s2, n2);
    if (L2) {
      const t3 = M(U, x, C, "y"), e2 = P(t3, o, s2, n2);
      r.push(new i2({ lineStart: F, lineEnd: e2, targetPoint: E, isDraped: false }));
    }
    if (b3) {
      const t3 = M(U, x, C, "x"), e2 = P(t3, o, s2, n2);
      r.push(new i2({ lineStart: F, lineEnd: e2, targetPoint: E, isDraped: false }));
    }
    return b3 && L2 && r.push(new n(E, r[0], r[1], false)), r;
  }
};
__decorate([m({ constructOnly: true })], w2.prototype, "view", void 0), __decorate([m()], w2.prototype, "options", void 0), __decorate([m()], w2.prototype, "grid", null), __decorate([m()], w2.prototype, "effectiveViewRotation", null), __decorate([m()], w2.prototype, "gridRotation", null), __decorate([m()], w2.prototype, "gridCenter", null), __decorate([m()], w2.prototype, "offsetScaleFactor", null), __decorate([m()], w2.prototype, "spatialReference", null), __decorate([m()], w2.prototype, "gridMetersPerStride", null), __decorate([m()], w2.prototype, "viewMetersPerPixel", null), __decorate([m()], w2.prototype, "viewMetersPerSRUnit", null), __decorate([m()], w2.prototype, "pixelsPerStride", null), __decorate([m()], w2.prototype, "updating", null), w2 = __decorate([a("esri.views.interactive.snapping.GridSnappingEngine")], w2);
var P = (t2, e, r, i3) => {
  const n2 = f(t2[0], t2[1], t2[2]);
  return w(n2, w(n2, n2, r, e), r, i3);
};
var R = (t2, e, r) => {
  const i3 = (t2[0] - r[0]) / e, n2 = (t2[1] - r[1]) / e, o = Math.trunc(i3), s2 = Math.trunc(n2), a2 = Math.round(i3 % 1), p = Math.round(n2 % 1), l3 = r[0] + (o + a2) * e, c = r[1] + (s2 + p) * e;
  return l2(l3, c);
};
var j = (t2, e, r, i3, n2) => {
  if (i3 <= 0) return { shouldSnapX: false, shouldSnapY: false };
  const o = (t2[0] - e[0]) / i3, s2 = (t2[1] - e[1]) / i3;
  return { shouldSnapX: Math.abs(o * n2) < r, shouldSnapY: Math.abs(s2 * n2) < r };
};
var M = (t2, e, r, i3) => {
  if ("y" === i3) {
    const i4 = e[0] > t2[0] ? 1 : -1;
    return l2(t2[0] + r * i4, t2[1]);
  }
  const n2 = e[1] > t2[1] ? 1 : -1;
  return l2(t2[0], t2[1] + r * n2);
};
export {
  w2 as GridSnappingEngine
};
//# sourceMappingURL=GridSnappingEngine-TKPQAZ2P.js.map
