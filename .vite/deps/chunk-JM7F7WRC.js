import {
  e as e2,
  i as i2,
  r as r3,
  s,
  u
} from "./chunk-26FGXCQ6.js";
import {
  e as e3
} from "./chunk-LERWNH2Q.js";
import {
  b,
  z as z2
} from "./chunk-6YICR2EO.js";
import {
  E,
  e,
  f as f2,
  h,
  i,
  m as m3
} from "./chunk-PSH6CRUA.js";
import {
  A,
  m as m2,
  r as r2
} from "./chunk-HXC5WSBJ.js";
import {
  z
} from "./chunk-66BNN6ZJ.js";
import {
  _,
  c
} from "./chunk-NOVKMJNS.js";
import {
  f
} from "./chunk-7J6TZQJ4.js";
import {
  r
} from "./chunk-ZNU5NTGY.js";
import {
  m2 as m
} from "./chunk-TSVVEDRS.js";
import {
  a2
} from "./chunk-HPSHCA6S.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";
import {
  a
} from "./chunk-KUWSTWZR.js";

// node_modules/@arcgis/core/geometry/support/curves/mathUtils.js
function r4(n4, t3, r7, o5) {
  return n4[0] = t3[0] * (1 - o5) + r7[0] * o5, n4[1] = t3[1] * (1 - o5) + r7[1] * o5, n4;
}
function o(n4, r7) {
  return b(n4, r7);
}
function u2(n4, t3, r7) {
  const u9 = o(t3, r7);
  if (0 === u9) return o(t3, n4);
  const i6 = (t3[0] - n4[0]) * (r7[1] - n4[1]) - (t3[1] - n4[1]) * (r7[0] - n4[0]);
  return i6 * i6 / u9;
}
function i3(n4, t3, r7, o5, u9) {
  const [i6, c8] = t3, [e9, m10] = r7, [a8, f10] = o5, [s6, x5] = u9, h9 = (i6 - e9) * (f10 - x5) - (c8 - m10) * (a8 - s6);
  if (0 === h9) return null;
  const l6 = (i6 * m10 - c8 * e9) * (a8 - s6) - (i6 - e9) * (a8 * x5 - f10 * s6), M2 = (i6 * m10 - c8 * e9) * (f10 - x5) - (c8 - m10) * (a8 * x5 - f10 * s6);
  return n4[0] = l6 / h9, n4[1] = M2 / h9, n4;
}
var c2 = 2 * Math.PI;
function e4(n4, t3) {
  const r7 = Math.atan2(n4, t3);
  return r7 < 0 ? r7 + c2 : r7;
}
function m4(n4) {
  return Math.abs(n4) % c2;
}
function a3(n4) {
  const t3 = m4(n4);
  return t3 < Math.PI ? t3 : c2 - t3;
}
function f3(n4, t3) {
  return { min: Math.min(n4, t3), max: Math.max(n4, t3) };
}
function s2(t3, r7, o5, u9) {
  if (m2(m4(t3 - r7), 0)) return o5 ? [t3, t3] : [t3, u9 ? t3 - c2 : t3 + c2];
  const [i6, e9] = u9 ? [t3 - c2, t3] : [t3, t3 + c2];
  return [t3, x({ min: i6, max: e9 }, r7)];
}
function x({ min: n4, max: t3 }, r7) {
  let o5;
  return o5 = t3 - r7, o5 >= c2 ? (o5 -= o5 % c2, r7 + o5) : (o5 = r7 - n4, o5 >= c2 ? (o5 -= o5 % c2, r7 - o5) : r7);
}
function h2(n4, t3) {
  const r7 = x(n4, t3);
  return r7 > n4.min && r7 < n4.max ? r7 : a3(r7 - n4.min) < a3(r7 - n4.max) ? n4.min : n4.max;
}
function l(n4, t3, r7, o5 = 10) {
  return t3.map((t4) => {
    let u9 = t4;
    for (let i6 = 0; i6 < o5; i6++) {
      const [t5, o6, i7, c8, e9, m10] = r7(u9), a8 = n4[0] - t5, f10 = n4[1] - o6, s6 = -i7, x5 = -c8;
      u9 += -(2 * a8 * s6 + 2 * f10 * x5) / (2 * s6 * s6 + 2 * a8 * -e9 + 2 * x5 * x5 + 2 * f10 * -m10 || 1e-6);
    }
    return u9;
  });
}

// node_modules/@arcgis/core/geometry/support/curves/lineUtils.js
function s3(s6, i6, n4) {
  const [c8, e9] = s6, [m10, a8] = i6, [f10, h9] = n4, [l6, p4] = [m10 - c8, a8 - e9];
  let u9 = l6 * (f10 - c8) + p4 * (h9 - e9);
  u9 /= l6 ** 2 + p4 ** 2, u9 = r2(u9, 0, 1);
  const j2 = r4([0, 0], s6, i6, u9);
  return { t: u9, curvePoint: j2, distance: Math.sqrt(o(j2, n4)) };
}

// node_modules/@arcgis/core/geometry/support/curves/circleUtils.js
var c3 = class {
  constructor(t3, n4, i6, a8, r7, s6) {
    this.cx = t3, this.cy = n4, this.radius = i6, this.thetaStart = a8, this.thetaEnd = r7, this.isInvalid = s6;
  }
  get startPoint() {
    const { cx: t3, cy: n4, radius: i6, thetaStart: a8 } = this;
    return [t3 + i6 * Math.cos(a8), n4 + i6 * Math.sin(a8)];
  }
  get endPoint() {
    const { cx: t3, cy: n4, radius: i6, thetaEnd: a8 } = this;
    return [t3 + i6 * Math.cos(a8), n4 + i6 * Math.sin(a8)];
  }
};
function e5(t3, n4) {
  const { cx: i6, cy: a8, radius: r7 } = t3;
  return [i6 + r7 * Math.cos(n4), a8 + r7 * Math.sin(n4)];
}
function h3(t3, n4) {
  if (t3.isInvalid) return r4([0, 0], t3.startPoint, t3.endPoint, n4);
  const { thetaStart: i6, thetaEnd: a8 } = t3;
  return e5(t3, i6 * (1 - n4) + a8 * n4);
}
function u3(t3, s6) {
  if (t3.isInvalid) return s3(t3.startPoint, t3.endPoint, s6);
  const { cx: o5, cy: c8, thetaStart: h9, thetaEnd: u9 } = t3, [d6, f10] = s6, l6 = h2(f3(h9, u9), Math.atan2(f10 - c8, d6 - o5)), M2 = e5(t3, l6);
  return { t: (l6 - h9) / (u9 - h9), curvePoint: M2, distance: Math.sqrt(o(s6, M2)) };
}
function d(n4, a8) {
  if (a8.isInvalid) return f2(n4, a8.startPoint), f2(n4, a8.endPoint), n4;
  const { cx: r7, cy: s6, radius: c8, thetaStart: h9, thetaEnd: u9 } = a8;
  f2(n4, e5(a8, h9)), f2(n4, e5(a8, u9));
  const d6 = f3(h9, u9), f10 = Math.PI / 2;
  let l6 = 0;
  for (const i6 of [[r7 + c8, s6], [r7, s6 + c8], [r7 - c8, s6], [r7, s6 - c8]]) l6 = x(d6, l6), l6 > d6.min && l6 < d6.max && f2(n4, i6), l6 += f10;
  return n4;
}
function f4(t3) {
  if (t3.isInvalid) return 2 * t3.radius;
  const { radius: n4, thetaStart: i6, thetaEnd: a8 } = t3;
  return n4 * Math.abs(a8 - i6);
}

// node_modules/@arcgis/core/geometry/support/curves/circularArcUtils.js
var e6 = e3();
function m5(r7, c8, i6) {
  const [o5, s6] = r7, [m10, l6] = c8, [u9, f10] = i6;
  r3(e6, o5, m10, u9, s6, l6, f10, 1, 1, 1);
  const h9 = e2(e6), M2 = 4 * h9 / (o(r7, c8) + o(c8, i6) + o(i6, r7));
  if (!isFinite(M2) || Math.abs(M2) < 1e-8) return null;
  const p4 = o5 ** 2 + s6 ** 2, b4 = m10 ** 2 + l6 ** 2, j2 = u9 ** 2 + f10 ** 2;
  r3(e6, p4, b4, j2, s6, l6, f10, 1, 1, 1);
  const x5 = e2(e6);
  r3(e6, p4, b4, j2, o5, m10, u9, 1, 1, 1);
  return [x5 / h9 * 0.5, e2(e6) / h9 * -0.5];
}
function l2(t3, n4) {
  const [r7, i6] = n4.c, a8 = m5(t3, i6, r7), e9 = null == a8, l6 = a8 ?? r4([], t3, r7, 0.5), [u9, f10] = t3, [h9, M2] = i6, [p4, b4] = r7, [j2, x5] = l6, d6 = u9 - j2, g3 = f10 - x5, I2 = Math.sqrt(d6 * d6 + g3 * g3), P2 = e4(f10 - x5, u9 - j2), U = e4(M2 - x5, h9 - j2);
  let q3 = e4(b4 - x5, p4 - j2);
  return (U - P2) * (q3 - U) < 0 && (q3 += 2 * Math.sign(P2 - q3) * Math.PI), new c3(j2, x5, I2, P2, q3, e9);
}
function u4(t3, n4, r7) {
  const c8 = h3(t3, r7 / 2), o5 = h3(t3, r7), s6 = h3(t3, (r7 + 1) / 2);
  return [{ c: [o5, c8] }, { c: [[...n4.c[0]], s6] }];
}
function f5(t3, n4) {
  const [r7] = n4.c, { cx: c8, cy: i6, thetaStart: o5, thetaEnd: s6, radius: a8, isInvalid: e9 } = l2(t3, n4);
  return { a: [r7, [c8, i6], Math.abs(s6 - o5) < Math.PI ? 1 : 0, o5 > s6 ? 1 : 0, e9 ? o5 : 0, a8, e9 ? 0 : 1] };
}

// node_modules/@arcgis/core/geometry/support/curves/curveUtils.js
function n(n4) {
  var _a, _b;
  return "curveRings" in n4 && !!((_a = n4.curveRings) == null ? void 0 : _a.length) || "curvePaths" in n4 && !!((_b = n4.curvePaths) == null ? void 0 : _b.length);
}
function r5(n4) {
  return "curveRings" in n4 ? n4.curveRings : n4.curvePaths;
}
function t(n4) {
  return "b" in n4;
}
function u5(n4) {
  return "c" in n4;
}
function i4(n4) {
  return Array.isArray(n4);
}
function e7(n4) {
  return "a" in n4;
}
function c4(n4) {
  return "a" in n4 && 4 === n4.a.length;
}
function a4(n4) {
  return "a" in n4 && 7 === n4.a.length;
}
function f6(n4) {
  return i4(n4) ? n4 : t(n4) ? n4.b[0] : u5(n4) ? n4.c[0] : n4.a[0];
}
function o2(n4) {
  if (t(n4)) {
    const [r7, t3, u9] = n4.b;
    return { b: [[...r7], [...t3], [...u9]] };
  }
  if (u5(n4)) {
    const [r7, t3] = n4.c;
    return { c: [[...r7], [...t3]] };
  }
  if (i4(n4)) return [...n4];
  if (c4(n4)) {
    const [r7, t3, u9, i6] = n4.a;
    return { a: [[...r7], [...t3], u9, i6] };
  }
  if (a4(n4)) {
    const [r7, t3, u9, i6, e9, c8, a8] = n4.a;
    return { a: [[...r7], [...t3], u9, i6, e9, c8, a8] };
  }
  return n4;
}

// node_modules/@arcgis/core/geometry/support/curves/ellipticArc4Utils.js
function h4(r7, h9) {
  const [n4, c8, i6, e9] = h9.a, [m10, M2] = r7, [f10, l6] = n4, [p4, u9] = c8, j2 = m10 - p4, U = M2 - u9, b4 = Math.sqrt(j2 * j2 + U * U), q3 = f10 - p4, x5 = l6 - u9, I2 = Math.sqrt(q3 * q3 + x5 * x5), P2 = 0 === b4 || 0 === I2 || !A(b4, I2), d6 = b4, [w2, y5] = s2(e4(M2 - u9, m10 - p4), Math.atan2(l6 - u9, f10 - p4), i6, e9);
  return new c3(p4, u9, d6, w2, y5, P2);
}
function n2(t3, a8, o5) {
  const { cx: s6, cy: h9, thetaStart: n4, thetaEnd: c8 } = t3, [i6, e9, m10, M2] = a8.a, f10 = n4 * (1 - o5) + c8 * o5;
  return [{ a: [h3(t3, o5), [s6, h9], Math.abs(f10 - n4) < Math.PI ? 1 : 0, M2] }, { a: [[...i6], [s6, h9], Math.abs(c8 - f10) < Math.PI ? 1 : 0, M2] }];
}

// node_modules/@arcgis/core/geometry/support/curves/bezierCurveUtils.js
var i5 = [0, 0];
function a5(t3) {
  const n4 = 1 - t3, o5 = n4 * n4, r7 = t3 * t3;
  return [o5 * n4, 3 * t3 * o5, 3 * r7 * n4, r7 * t3];
}
function h5(t3, n4, o5, r7, s6) {
  const [c8, u9, e9, f10] = a5(s6);
  return [t3[0] * c8 + n4[0] * u9 + o5[0] * e9 + r7[0] * f10, t3[1] * c8 + n4[1] * u9 + o5[1] * e9 + r7[1] * f10];
}
function m6(t3, n4, o5, r7, s6) {
  const [c8, u9, e9, f10] = a5(s6);
  return t3 * c8 + n4 * u9 + o5 * e9 + r7 * f10;
}
function p(t3, n4, o5) {
  const r7 = t3, [s6, c8, u9] = n4.b;
  return h5(r7, c8, u9, s6, o5);
}
function M(t3, n4, o5) {
  const r7 = t3, [s6, c8, u9] = n4.b, f10 = r4([0, 0], r7, c8, o5), a8 = r4(i5, c8, u9, o5), h9 = r4([0, 0], u9, s6, o5), m10 = r4([0, 0], f10, a8, o5), p4 = r4([0, 0], a8, h9, o5);
  return [{ b: [r4([], m10, p4, o5), f10, m10] }, { b: [[...s6], p4, h9] }];
}
function b2(o5, r7, s6) {
  const c8 = o5, [u9, e9, i6] = r7.b, a8 = l(s6, [0.1, 0.5, 0.9], (t3) => {
    const n4 = 1 - t3, [o6, r8] = h5(c8, e9, i6, u9, t3);
    return [o6, r8, 3 * n4 * n4 * (e9[0] - c8[0]) + 6 * n4 * t3 * (i6[0] - e9[0]) + 3 * t3 * t3 * (u9[0] - i6[0]), 3 * n4 * n4 * (e9[1] - c8[1]) + 6 * n4 * t3 * (i6[1] - e9[1]) + 3 * t3 * t3 * (u9[1] - i6[1]), 6 * n4 * (i6[0] - 2 * e9[0] + c8[0]) + 6 * t3 * (u9[0] - 2 * i6[0] + e9[0]), 6 * n4 * (i6[1] - 2 * e9[1] + c8[1]) + 6 * t3 * (u9[1] - 2 * i6[1] + e9[1])];
  }).map((t3) => Math.min(1, Math.max(0, t3)));
  a8.push(0, 1);
  let m10 = 1 / 0;
  const p4 = a8.map((t3) => {
    const n4 = h5(c8, e9, i6, u9, t3), [o6, r8] = n4, f10 = s6[0] - o6, a9 = s6[1] - r8, p5 = Math.sqrt(f10 * f10 + a9 * a9);
    return m10 = Math.min(p5, m10), { t: t3, curvePoint: n4, distance: p5 };
  }), M2 = [];
  for (const f10 of p4) {
    const { t: o6, distance: r8 } = f10;
    A(r8, m10) && !M2.some(({ t: t3 }) => m2(t3, o6)) && M2.push(f10);
  }
  return M2;
}
function l3(t3, n4, u9) {
  const e9 = n4, [f10, i6, a8] = u9.b;
  if (f2(t3, e9), f2(t3, f10), E(t3, i6[0], i6[1]) && E(t3, a8[0], a8[1])) return t3;
  for (const o5 of q(e9[0], i6[0], a8[0], f10[0])) o5 > 0 && o5 < 1 && m3(t3, m6(e9[0], i6[0], a8[0], f10[0], o5));
  for (const o5 of q(e9[1], i6[1], a8[1], f10[1])) o5 > 0 && o5 < 1 && h(t3, m6(e9[1], i6[1], a8[1], f10[1], o5));
  return t3;
}
function q(t3, n4, o5, r7) {
  const s6 = 3 * (3 * (n4 - o5) - t3 + r7), c8 = 6 * (t3 - 2 * n4 + o5), u9 = 3 * (n4 - t3);
  if (0 === s6) return 0 !== c8 ? [-u9 / c8] : [];
  const e9 = Math.sqrt(c8 * c8 - 4 * s6 * u9);
  return [(-c8 + e9) / (2 * s6), (-c8 - e9) / (2 * s6)];
}
function d2(t3, n4, o5) {
  const r7 = 16;
  let s6 = 0, c8 = [n4];
  for (let e9 = 0; e9 < r7; e9++) {
    let n5 = t3;
    const r8 = [];
    for (const t4 of c8) r8.push(...M(n5, t4, 0.5)), n5 = t4.b[0];
    c8 = r8, n5 = t3, s6 = 0;
    let e10 = 0;
    for (const t4 of c8) {
      const [o6, r9, c9] = t4.b, f10 = Math.sqrt(o(n5, o6));
      s6 += (f10 + (Math.sqrt(o(n5, r9)) + Math.sqrt(o(r9, c9)) + Math.sqrt(o(c9, o6)))) / 2, e10 += f10, n5 = o6;
    }
    if (s6 - e10 < o5) return s6;
  }
  return s6;
}

// node_modules/@arcgis/core/geometry/support/curves/ellipticArc7Utils.js
var b3 = class {
  constructor(t3, s6, n4, a8, r7, o5, i6, c8, h9) {
    this.cx = t3, this.cy = s6, this.a = n4, this.b = a8, this.cosR = r7, this.sinR = o5, this.u1 = i6, this.u2 = c8, this.isInvalid = h9;
  }
};
function p2(t3, s6) {
  const [n4, a8, r7, o5, i6, c8, h9] = s6.a, [u9, m10] = t3, [M2, l6] = n4, [p4, R2] = a8, d6 = c8 * h9, x5 = Math.cos(i6), q3 = Math.sin(i6), [I2, g3] = s2(e4(1 / d6 * (m10 - R2) * x5 - 1 / d6 * (u9 - p4) * q3, 1 / c8 * (m10 - R2) * q3 + 1 / c8 * (u9 - p4) * x5), Math.atan2(1 / d6 * (l6 - R2) * x5 - 1 / d6 * (M2 - p4) * q3, 1 / c8 * (l6 - R2) * q3 + 1 / c8 * (M2 - p4) * x5), r7, o5);
  return new b3(p4, R2, c8, d6, x5, q3, I2, g3, 0 === c8 || 0 === d6);
}
function R(t3, s6) {
  const { a: n4, b: a8, cosR: r7, sinR: o5, cx: i6, cy: c8 } = t3, h9 = Math.cos(s6), u9 = Math.sin(s6);
  return [n4 * h9 * r7 - a8 * u9 * o5 + i6, n4 * h9 * o5 + a8 * u9 * r7 + c8];
}
function d3(t3, s6) {
  const { u1: n4, u2: a8 } = t3;
  return R(t3, n4 * (1 - s6) + a8 * s6);
}
function x2(t3, s6, n4) {
  if (n4 < 0 || n4 > 1) return [];
  if (0 === n4 || 1 === n4) return [o2(s6)];
  const [a8, [r7, o5], i6, h9, u9, e9, f10] = s6.a, { u1: m10, u2: M2 } = t3, l6 = m10 * (1 - n4) + M2 * n4;
  return [{ a: [[...d3(t3, n4)], [r7, o5], Math.abs(l6 - m10) < Math.PI ? 1 : 0, h9, u9, e9, f10] }, { a: [[...a8], [r7, o5], Math.abs(M2 - l6) < Math.PI ? 1 : 0, h9, u9, e9, f10] }];
}
function q2(t3, s6) {
  const { a: n4, b: a8, cosR: r7, sinR: o5, u1: i6, u2: c8 } = t3, e9 = Math.PI / 6, f10 = l(s6, [1 * e9, 2 * e9, 4 * e9, 5 * e9, 7 * e9, 8 * e9, 10 * e9, 11 * e9], (s7) => {
    const i7 = Math.cos(s7), c9 = Math.sin(s7), [h9, u9] = R(t3, s7);
    return [h9, u9, -n4 * r7 * c9 - a8 * o5 * i7, -n4 * o5 * c9 + a8 * r7 * i7, -n4 * r7 * i7 + a8 * o5 * c9, -n4 * o5 * i7 - a8 * r7 * c9];
  }), m10 = f3(i6, c8), M2 = new Set(f10.map((t4) => x(m10, t4)).filter((t4) => t4 > m10.min && t4 < m10.max));
  M2.add(i6), M2.add(c8);
  let b4, p4, d6 = 1 / 0;
  for (const h9 of M2) {
    const n5 = R(t3, h9), [a9, r8] = n5, o6 = s6[0] - a9, u9 = s6[1] - r8, e10 = o6 * o6 + u9 * u9;
    e10 < d6 && (b4 = (h9 - i6) / (c8 - i6), p4 = n5, d6 = e10);
  }
  return { t: b4, curvePoint: p4, distance: Math.sqrt(d6) };
}
function I(t3, s6, n4) {
  const a8 = p2(s6, n4), { a: r7, b: o5, u1: c8, u2: e9, cosR: f10, sinR: m10, isInvalid: M2 } = a8, l6 = n4.a[0];
  if (f2(t3, s6), f2(t3, l6), M2) return t3;
  const b4 = Math.atan2(-o5 * m10, r7 * f10), d6 = b4 + Math.PI, x5 = Math.atan2(o5 * f10, r7 * m10), q3 = x5 + Math.PI, I2 = f3(c8, e9);
  for (const u9 of [b4, d6, x5, q3].map((t4) => x(I2, t4))) u9 > I2.min && u9 < I2.max && f2(t3, R(a8, u9));
  return t3;
}
function g(t3, s6, n4) {
  const [a8, r7, o5, i6, c8, h9, u9] = s6.a, e9 = p2(t3, s6), { u1: f10, u2: l6, isInvalid: b4 } = e9, x5 = l6 - f10;
  if (b4) return Math.sqrt(o(t3, a8));
  const q3 = 14, I2 = [0, 0];
  let g3 = 0, j2 = [d3(e9, 0), d3(e9, 0.25), d3(e9, 0.5), d3(e9, 0.75), d3(e9, 1)];
  for (let p4 = 0; p4 < q3; p4++) {
    const t4 = j2.length - 1, s7 = x5 / (2 * t4), a9 = [];
    for (let n5 = 0; n5 < t4; n5++) a9.push(j2[n5]), a9.push(R(e9, f10 + (2 * n5 + 1) * s7));
    a9.push(j2[j2.length - 1]), j2 = a9, g3 = 0;
    let o6 = 0;
    for (let n5 = 1; n5 < j2.length; n5++) {
      const t5 = j2[n5 - 1], s8 = j2[n5];
      if (g3 += Math.sqrt(o(t5, s8)), n5 > 1) {
        const a10 = j2[n5 - 2], i7 = i3(I2, a10, t5, r7, s8);
        o6 += i7 ? Math.sqrt(o(t5, i7)) : Math.abs(s8[0] - t5[0]) + Math.abs(s8[1] - t5[1]);
      } else o6 += g3;
    }
    if (o6 - g3 < n4) return g3;
  }
  return g3;
}
var j = e3();
var v = e3();
var P = e3();
var y = e3();
function w(r7, i6, c8) {
  const [h9, u9, e9, M2, l6, b4, R2] = i6.a, d6 = p2(r7, i6), { cosR: x5, sinR: q3, a: I2, b: g3, cx: w2, cy: U } = d6, B = z2([0, 0], h9, c8), S = z2([0, 0], u9, c8), k = c8[0] * c8[4] < 0 ? 1 - M2 : M2;
  {
    const s6 = I2 * I2 * q3 * q3 + g3 * g3 * x5 * x5, n4 = 2 * (g3 * g3 - I2 * I2) * q3 * x5, a8 = I2 * I2 * x5 * x5 + g3 * g3 * q3 * q3, r8 = -2 * s6 * w2 - n4 * U, o5 = -n4 * w2 - 2 * a8 * U;
    r3(j, s6, n4 / 2, r8 / 2, n4 / 2, a8, o5 / 2, r8 / 2, o5 / 2, s6 * w2 * w2 + n4 * w2 * U + a8 * U * U - I2 * I2 * g3 * g3);
  }
  if (s(v, c8), null == v) {
    const t3 = z2([0, 0], r7, c8);
    return { a: [B, S, e9, M2, e4(B[1], B[0]), Math.sqrt(o(B, t3)) / 2, 0] };
  }
  u(P, v), i2(y, i2(y, P, j), v);
  {
    const t3 = y[0], s6 = 2 * y[1], n4 = y[4], a8 = 2 * y[2], r8 = 2 * y[5], o5 = s6 * s6 - 4 * t3 * n4, i7 = 2 * (t3 * r8 * r8 + n4 * a8 * a8 - s6 * a8 * r8 + o5 * y[8]), c9 = Math.sqrt((t3 - n4) ** 2 + s6 * s6), h10 = -Math.sqrt(i7 * (t3 + n4 + c9)) / o5, u10 = -Math.sqrt(i7 * (t3 + n4 - c9)) / o5;
    return { a: [B, S, e9, k, 0.5 * e4(-s6, n4 - t3), h10, u10 / h10] };
  }
}

// node_modules/@arcgis/core/geometry/support/curves/curveExtent.js
function n3(n4, p4, u9) {
  if (i4(u9)) return f2(n4, p4), f2(n4, u9), n4;
  if (t(u9)) return l3(n4, p4, u9);
  if (u5(u9)) {
    const r7 = l2(p4, u9);
    return d(n4, r7);
  }
  if (c4(u9)) {
    const r7 = h4(p4, u9);
    return d(n4, r7);
  }
  return I(n4, p4, u9);
}

// node_modules/@arcgis/core/geometry/support/boundsUtils.js
function o3(n4) {
  return void 0 !== n4.xmin && void 0 !== n4.ymin && void 0 !== n4.xmax && void 0 !== n4.ymax;
}
function u6(n4) {
  return void 0 !== n4.points;
}
function c5(n4) {
  return void 0 !== n4.x && void 0 !== n4.y;
}
function s4(n4) {
  return void 0 !== n4.paths;
}
function l4(n4) {
  return void 0 !== n4.rings;
}
function h6(n4) {
  function t3(t4, i6) {
    return null == t4 ? i6 : null == i6 ? t4 : n4(t4, i6);
  }
  return t3;
}
var m7 = h6(Math.min);
var a6 = h6(Math.max);
function f7(n4, t3) {
  return s4(t3) ? y2(n4, t3.curvePaths ?? t3.paths, false, false) ?? n4 : l4(t3) ? y2(n4, t3.curveRings ?? t3.rings, false, false) ?? n4 : u6(t3) ? p3(n4, t3.points, false, false, false, false) : o3(t3) ? d4(n4, t3) : (c5(t3) && (n4[0] = t3.x, n4[1] = t3.y, n4[2] = t3.x, n4[3] = t3.y), n4);
}
function x3(n4) {
  let i6, r7, e9, o5;
  for (n4.reset(), i6 = e9 = 1 / 0, r7 = o5 = -1 / 0; n4.nextPath(); ) {
    const t3 = g2(n4);
    i6 = Math.min(t3[0], i6), e9 = Math.min(t3[1], e9), r7 = Math.max(t3[2], r7), o5 = Math.max(t3[3], o5);
  }
  return i([i6, e9, r7, o5]);
}
function g2(n4) {
  let i6, r7, e9, o5;
  for (i6 = e9 = 1 / 0, r7 = o5 = -1 / 0; n4.nextPoint(); ) i6 = Math.min(n4.x, i6), e9 = Math.min(n4.y, e9), r7 = Math.max(n4.x, r7), o5 = Math.max(n4.y, o5);
  return i([i6, e9, r7, o5]);
}
function v2(n4, t3) {
  return s4(t3) ? y2(n4, t3.curvePaths ?? t3.paths, true, false) ?? n4 : l4(t3) ? y2(n4, t3.curveRings ?? t3.rings, true, false) ?? n4 : u6(t3) ? p3(n4, t3.points, true, false, true, false) : o3(t3) ? d4(n4, t3, true, false, true, false) : (c5(t3) && (n4[0] = t3.x, n4[1] = t3.y, n4[2] = t3.z, n4[3] = t3.x, n4[4] = t3.y, n4[5] = t3.z), n4);
}
function y2(t3, o5, u9, c8) {
  const s6 = u9 ? 3 : 2;
  if (!o5.length || !o5[0].length) return null;
  let l6, h9, f10, x5, [g3, v4] = f6(o5[0][0]), y5 = g3, d6 = v4;
  for (let p4 = 0; p4 < o5.length; p4++) {
    const t4 = o5[p4];
    for (let o6 = 0; o6 < t4.length; o6++) {
      const p5 = f6(t4[o6]), [M2, z3] = p5;
      if (g3 = m7(g3, M2), v4 = m7(v4, z3), y5 = a6(y5, M2), d6 = a6(d6, z3), u9 && p5.length > 2) {
        const n4 = p5[2];
        l6 = m7(l6, n4), h9 = a6(h9, n4);
      }
      if (c8 && p5.length > s6) {
        const n4 = p5[s6];
        f10 = m7(l6, n4), x5 = a6(h9, n4);
      }
      const P2 = t4[o6];
      if (i4(P2) || o6 < 1) continue;
      const j2 = f6(t4[o6 - 1]), R2 = e(g3, v4, y5, d6);
      [g3, v4, y5, d6] = n3(R2, j2, P2);
    }
  }
  return u9 ? c8 ? (t3[0] = g3, t3[1] = v4, t3[2] = l6, t3[3] = f10, t3[4] = y5, t3[5] = d6, t3[6] = h9, t3[7] = x5, t3.length = 8, t3) : (t3[0] = g3, t3[1] = v4, t3[2] = l6, t3[3] = y5, t3[4] = d6, t3[5] = h9, t3.length = 6, t3) : c8 ? (t3[0] = g3, t3[1] = v4, t3[2] = f10, t3[3] = y5, t3[4] = d6, t3[5] = x5, t3.length = 6, t3) : (t3[0] = g3, t3[1] = v4, t3[2] = y5, t3[3] = d6, t3.length = 4, t3);
}
function d4(n4, t3, i6, r7, e9, o5) {
  const u9 = t3.xmin, c8 = t3.xmax, s6 = t3.ymin, l6 = t3.ymax;
  let h9 = t3.zmin, m10 = t3.zmax, a8 = t3.mmin, f10 = t3.mmax;
  return e9 ? (h9 = h9 || 0, m10 = m10 || 0, o5 ? (a8 = a8 || 0, f10 = f10 || 0, n4[0] = u9, n4[1] = s6, n4[2] = h9, n4[3] = a8, n4[4] = c8, n4[5] = l6, n4[6] = m10, n4[7] = f10, n4) : (n4[0] = u9, n4[1] = s6, n4[2] = h9, n4[3] = c8, n4[4] = l6, n4[5] = m10, n4)) : o5 ? (a8 = a8 || 0, f10 = f10 || 0, n4[0] = u9, n4[1] = s6, n4[2] = a8, n4[3] = c8, n4[4] = l6, n4[5] = f10, n4) : (n4[0] = u9, n4[1] = s6, n4[2] = c8, n4[3] = l6, n4);
}
function p3(n4, t3, i6, r7, e9, o5) {
  const u9 = i6 ? 3 : 2, c8 = r7 && o5, s6 = i6 && e9;
  if (!t3.length || !t3[0].length) return null;
  let l6, h9, f10, x5, [g3, v4] = t3[0], [y5, d6] = t3[0];
  for (let p4 = 0; p4 < t3.length; p4++) {
    const n5 = t3[p4], [i7, r8] = n5;
    if (g3 = m7(g3, i7), v4 = m7(v4, r8), y5 = a6(y5, i7), d6 = a6(d6, r8), s6 && n5.length > 2) {
      const t4 = n5[2];
      l6 = m7(l6, t4), h9 = a6(h9, t4);
    }
    if (c8 && n5.length > u9) {
      const t4 = n5[u9];
      f10 = m7(l6, t4), x5 = a6(h9, t4);
    }
  }
  return e9 ? (l6 = l6 || 0, h9 = h9 || 0, o5 ? (f10 = f10 || 0, x5 = x5 || 0, n4[0] = g3, n4[1] = v4, n4[2] = l6, n4[3] = f10, n4[4] = y5, n4[5] = d6, n4[6] = h9, n4[7] = x5, n4) : (n4[0] = g3, n4[1] = v4, n4[2] = l6, n4[3] = y5, n4[4] = d6, n4[5] = h9, n4)) : o5 ? (f10 = f10 || 0, x5 = x5 || 0, n4[0] = g3, n4[1] = v4, n4[2] = f10, n4[3] = y5, n4[4] = d6, n4[5] = x5, n4) : (n4[0] = g3, n4[1] = v4, n4[2] = y5, n4[3] = d6, n4);
}

// node_modules/@arcgis/core/geometry/support/extentUtils.js
function t2(n4) {
  return void 0 !== n4.xmin && void 0 !== n4.ymin && void 0 !== n4.xmax && void 0 !== n4.ymax;
}
function u7(n4) {
  return void 0 !== n4.points;
}
function r6(n4) {
  return void 0 !== n4.x && void 0 !== n4.y;
}
function m8(n4) {
  return void 0 !== n4.paths;
}
function o4(n4) {
  return void 0 !== n4.rings;
}
var x4 = [];
function a7(n4, i6, t3, u9) {
  return { xmin: n4, ymin: i6, xmax: t3, ymax: u9 };
}
function c6(n4, i6, t3, u9, r7, m10) {
  return { xmin: n4, ymin: i6, zmin: t3, xmax: u9, ymax: r7, zmax: m10 };
}
function s5(n4, i6, t3, u9, r7, m10) {
  return { xmin: n4, ymin: i6, mmin: t3, xmax: u9, ymax: r7, mmax: m10 };
}
function e8(n4, i6, t3, u9, r7, m10, o5, x5) {
  return { xmin: n4, ymin: i6, zmin: t3, mmin: u9, xmax: r7, ymax: m10, zmax: o5, mmax: x5 };
}
function f8(n4, i6 = false, t3 = false) {
  return i6 ? t3 ? e8(n4[0], n4[1], n4[2], n4[3], n4[4], n4[5], n4[6], n4[7]) : c6(n4[0], n4[1], n4[2], n4[3], n4[4], n4[5]) : t3 ? s5(n4[0], n4[1], n4[2], n4[3], n4[4], n4[5]) : a7(n4[0], n4[1], n4[2], n4[3]);
}
function l5(n4) {
  return n4 ? t2(n4) ? n4 : r6(n4) ? v3(n4) : o4(n4) ? d5(n4) : m8(n4) ? h7(n4) : u7(n4) ? y3(n4) : null : null;
}
function y3(n4) {
  const { hasZ: t3, hasM: u9, points: r7 } = n4, m10 = p3(x4, r7, t3 ?? false, u9 ?? false, t3 ?? false, u9 ?? false);
  return m10 ? f8(m10, t3, u9) : null;
}
function v3(n4) {
  const { x: i6, y: t3, z: u9, m: r7 } = n4, m10 = null != r7;
  return null != u9 ? m10 ? e8(i6, t3, u9, r7, i6, t3, u9, r7) : c6(i6, t3, u9, i6, t3, u9) : m10 ? s5(i6, t3, r7, i6, t3, r7) : a7(i6, t3, i6, t3);
}
function d5(i6) {
  const { hasZ: t3, hasM: u9, rings: r7, curveRings: m10 } = i6, o5 = y2(x4, m10 ?? r7, t3 ?? false, u9 ?? false);
  return o5 ? f8(o5, t3, u9) : null;
}
function h7(i6) {
  const { hasZ: t3, hasM: u9, paths: r7, curvePaths: m10 } = i6, o5 = y2(x4, m10 ?? r7, t3 ?? false, u9 ?? false);
  return o5 ? f8(o5, t3, u9) : null;
}

// node_modules/@arcgis/core/geometry/support/zmUtils.js
function h8(h9, a8, s6 = false) {
  let { hasM: t3, hasZ: e9 } = h9;
  Array.isArray(a8) ? 4 !== a8.length || t3 || e9 ? 3 === a8.length && s6 && !t3 ? (e9 = true, t3 = false) : 3 === a8.length && t3 && e9 && (t3 = false, e9 = false) : (t3 = true, e9 = true) : (e9 = !e9 && a8.hasZ && (!t3 || a8.hasM), t3 = !t3 && a8.hasM && (!e9 || a8.hasZ)), h9.hasZ = e9, h9.hasM = t3;
}

// node_modules/@arcgis/core/geometry/Polyline.js
var c7;
function u8(t3) {
  return !Array.isArray(t3[0]);
}
function f9(t3) {
  var _a;
  return "number" == typeof ((_a = t3[0]) == null ? void 0 : _a[0]);
}
function m9(t3) {
  var _a, _b;
  if (!t3) return;
  let { paths: e9, hasM: r7, hasZ: s6, spatialReference: i6 } = t3;
  switch (e9 ?? (e9 = []), f9(e9) && (e9 = [e9]), (_b = (_a = e9[0]) == null ? void 0 : _a[0]) == null ? void 0 : _b.length) {
    case 4:
      s6 ?? (s6 = true), r7 ?? (r7 = true);
      break;
    case 3:
      s6 ?? (s6 = true !== r7), r7 ?? (r7 = !s6);
      break;
    default:
      s6 ?? (s6 = false), r7 ?? (r7 = false);
  }
  return i6 ?? (i6 = f.WGS84), { ...t3, hasM: r7, hasZ: s6, paths: e9, spatialReference: i6 };
}
var y4 = c7 = class extends c {
  constructor(t3) {
    super(m9(t3)), this.curvePaths = void 0, this.paths = [], this.type = "polyline";
  }
  get cache() {
    return this.commitProperty("curvePaths"), this.commitProperty("hasM"), this.commitProperty("hasZ"), this.commitProperty("paths"), this.commitProperty("spatialReference"), {};
  }
  writeCurvePaths(t3, r7) {
    r7.curvePaths = a(t3);
  }
  get extent() {
    const t3 = h7(this), { spatialReference: e9 } = this;
    return t3 ? new z({ ...t3, spatialReference: e9 }) : null;
  }
  writePaths(t3, r7) {
    r7.paths = a(this.paths);
  }
  addPath(t3) {
    if (!t3) return;
    const e9 = this.paths, r7 = e9.length;
    if (u8(t3)) {
      const s6 = [];
      for (let e10 = 0, r8 = t3.length; e10 < r8; e10++) s6[e10] = t3[e10].toArray();
      e9[r7] = s6;
    } else e9[r7] = t3.slice();
    return this.notifyChange("paths"), this;
  }
  clone() {
    const t3 = new c7();
    return t3.spatialReference = this.spatialReference, t3.paths = a(this.paths), t3.curvePaths = a(this.curvePaths), t3.hasZ = this.hasZ, t3.hasM = this.hasM, t3;
  }
  getPoint(t3, e9) {
    if (!this._validateInputs(t3, e9)) return null;
    const r7 = this.paths[t3][e9], s6 = this.hasZ, i6 = this.hasM;
    return s6 && !i6 ? new _(r7[0], r7[1], r7[2], void 0, this.spatialReference) : i6 && !s6 ? new _(r7[0], r7[1], void 0, r7[2], this.spatialReference) : s6 && i6 ? new _(r7[0], r7[1], r7[2], r7[3], this.spatialReference) : new _(r7[0], r7[1], this.spatialReference);
  }
  insertPoint(t3, e9, r7) {
    return this._validateInputs(t3, e9, true) ? (h8(this, r7), Array.isArray(r7) || (r7 = r7.toArray()), this.paths[t3].splice(e9, 0, r7), this.notifyChange("paths"), this) : this;
  }
  removePath(t3) {
    if (!this._validateInputs(t3, null)) return null;
    const e9 = this.paths.splice(t3, 1)[0], r7 = this.spatialReference, s6 = e9.map((t4) => new _(t4, r7));
    return this.notifyChange("paths"), s6;
  }
  removePoint(t3, e9) {
    if (!this._validateInputs(t3, e9)) return null;
    const r7 = new _(this.paths[t3].splice(e9, 1)[0], this.spatialReference);
    return this.notifyChange("paths"), r7;
  }
  setPoint(t3, e9, r7) {
    return this._validateInputs(t3, e9) ? (h8(this, r7), Array.isArray(r7) || (r7 = r7.toArray()), this.paths[t3][e9] = r7, this.notifyChange("paths"), this) : this;
  }
  _validateInputs(t3, e9, r7 = false) {
    if (null == t3 || t3 < 0 || t3 >= this.paths.length) return false;
    if (null != e9) {
      const s6 = this.paths[t3];
      if (r7 && (e9 < 0 || e9 > s6.length)) return false;
      if (!r7 && (e9 < 0 || e9 >= s6.length)) return false;
    }
    return true;
  }
  toJSON(t3) {
    return this.write({}, t3);
  }
};
__decorate([m({ readOnly: true })], y4.prototype, "cache", null), __decorate([m({ json: { write: true, origins: { "portal-item": { write: false }, "web-map": { write: false }, "web-scene": { write: false } } } })], y4.prototype, "curvePaths", void 0), __decorate([r("curvePaths")], y4.prototype, "writeCurvePaths", null), __decorate([m({ readOnly: true })], y4.prototype, "extent", null), __decorate([m({ type: [[[Number]]], json: { write: { isRequired: true } } })], y4.prototype, "paths", void 0), __decorate([r("paths")], y4.prototype, "writePaths", null), y4 = c7 = __decorate([a2("esri.geometry.Polyline")], y4), y4.prototype.toJSON.isDefaultToJSON = true;

export {
  r4 as r,
  o,
  u2 as u,
  e4 as e,
  h5 as h,
  p,
  M,
  b2 as b,
  d2 as d,
  s3 as s,
  h3 as h2,
  u3 as u2,
  f4 as f,
  l2 as l,
  u4 as u3,
  f5 as f2,
  n,
  r5 as r2,
  t,
  u5 as u4,
  i4 as i,
  e7 as e2,
  c4 as c,
  a4 as a,
  f6 as f3,
  o2,
  h4 as h3,
  n2,
  p2,
  d3 as d2,
  x2 as x,
  q2 as q,
  g,
  w,
  f7 as f4,
  x3 as x2,
  g2,
  v2 as v,
  y2 as y,
  l5 as l2,
  y3 as y2,
  d5 as d3,
  h8 as h4,
  y4 as y3
};
//# sourceMappingURL=chunk-JM7F7WRC.js.map
