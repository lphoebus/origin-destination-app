import {
  I,
  e as e2
} from "./chunk-63GXB7XB.js";
import {
  A
} from "./chunk-5XIDIYOG.js";
import {
  e as e3,
  f,
  l,
  n,
  o,
  s
} from "./chunk-HQPAN4GW.js";
import {
  e
} from "./chunk-QRKINRAQ.js";
import {
  h,
  j
} from "./chunk-KUWSTWZR.js";

// node_modules/@arcgis/core/core/uid.js
var t = 0;
function e4() {
  return ++t;
}

// node_modules/@arcgis/core/core/accessorSupport/tracking/SimpleTrackingTarget.js
var s2 = class extends s {
  constructor(t4) {
    super(new i(t4)), this._observer && e5.register(this, new WeakRef(this._observer), this);
  }
  destroy() {
    var _a, _b;
    this._observer && e5.unregister(this._observer), (_a = this.accessed) == null ? void 0 : _a.clear(), this.clear(), (_b = this._observer) == null ? void 0 : _b.destroy();
  }
};
var i = class {
  constructor(t4) {
    this._notify = t4, this._invalidCount = 0, this.destroyed = false;
  }
  onInvalidated() {
    this._invalidCount++;
  }
  onCommitted() {
    if (this.destroyed) return;
    const t4 = this._invalidCount;
    if (1 === t4) return this._invalidCount = 0, void this._notify();
    this._invalidCount = t4 > 0 ? t4 - 1 : 0;
  }
  destroy() {
    this.destroyed = true, this._notify = r;
  }
};
var e5 = new FinalizationRegistry((t4) => {
  var _a;
  (_a = t4.deref()) == null ? void 0 : _a.destroy();
});
function r() {
}

// node_modules/@arcgis/core/core/accessorSupport/trackingUtils.js
var u = false;
var l2 = [];
function o2(l3, o6) {
  let e9 = new s2(a), i5 = null, s5 = false;
  function a() {
    if (!e9 || s5) return;
    if (u) return void c(a);
    const n3 = i5;
    e9.clear(), u = true, s5 = true, i5 = f(e9, l3), s5 = false, u = false, o6(i5, n3), f2();
  }
  function m2() {
    e9 && (e9.destroy(), e9 = null, i5 = null);
  }
  return s5 = true, i5 = f(e9, l3), s5 = false, e(m2);
}
function e6(u4, l3) {
  let o6 = new s2(i5), e9 = null;
  function i5() {
    l3(e9, f4);
  }
  function c3() {
    o6 && (o6.destroy(), o6 = null), e9 = null;
  }
  function f4() {
    return o6 ? (o6.clear(), e9 = f(o6, u4), e9) : null;
  }
  return f4(), e(c3);
}
function i2(l3, o6) {
  let e9 = false, i5 = false;
  const s5 = !!(o6 == null ? void 0 : o6.sync);
  let a = new s2(() => {
    e9 || i5 || (i5 = true, s5 ? m2() : queueMicrotask(m2));
  });
  function m2() {
    i5 = false, a && !e9 && (u ? c(m2) : (a.clear(), u = true, e9 = true, f(a, l3), e9 = false, u = false, f2()));
  }
  function p2() {
    a && (a.destroy(), a = null);
  }
  return e9 = true, f(a, l3), e9 = false, e(p2);
}
function c(n3) {
  l2.includes(n3) || l2.unshift(n3);
}
function f2() {
  for (; l2.length; ) l2.pop()();
}

// node_modules/@arcgis/core/core/ArrayPool.js
function r2(e9) {
  e9.length = 0;
}
var t2 = class {
  constructor(t4 = 50, o6 = 50) {
    this._pool = new e2(() => [], void 0, r2, o6, t4);
  }
  acquire() {
    return this._pool.acquire();
  }
  release(e9) {
    this._pool.release(e9);
  }
  prune() {
    this._pool.prune(0);
  }
  static acquire() {
    return o3.acquire();
  }
  static release(e9) {
    return o3.release(e9);
  }
  static prune() {
    o3.prune();
  }
};
var o3 = new t2(100);

// node_modules/@arcgis/core/core/ReentrantObjectPool.js
var s3 = class extends e2 {
  constructor() {
    super(...arguments), this._set = /* @__PURE__ */ new Set();
  }
  destroy() {
    super.destroy(), this._set = null;
  }
  acquire(...e9) {
    const s5 = super.acquire(...e9);
    return this._set.delete(s5), s5;
  }
  release(e9) {
    e9 && !this._set.has(e9) && (super.release(e9), this._set.add(e9));
  }
  _dispose(e9) {
    this._set.delete(e9), super._dispose(e9);
  }
};

// node_modules/@arcgis/core/core/SetUtils.js
function n2(n3, r4) {
  for (const t4 of n3.values()) if (r4(t4)) return true;
  return false;
}
function r3(n3, r4) {
  if (!r4) return n3;
  for (const t4 of r4) null != t4 && n3.add(t4);
  return n3;
}
function t3(n3, r4) {
  return null != r4 && n3.add(r4), n3;
}
function u2(n3, t4) {
  const u4 = /* @__PURE__ */ new Set();
  return r3(u4, n3), r3(u4, t4), u4;
}
function e7(n3, r4) {
  const t4 = /* @__PURE__ */ new Set();
  for (const u4 of r4) n3.has(u4) && t4.add(u4);
  return t4;
}
function o4(n3, r4) {
  if (!n3 || !r4) return false;
  if (n3 === r4) return true;
  for (const t4 of n3) if (!r4.has(t4)) return false;
  return true;
}
function f3(n3, r4) {
  if (null == n3 && null == r4) return true;
  if (null == n3 || null == r4 || n3.size !== r4.size) return false;
  for (const t4 of n3) if (!r4.has(t4)) return false;
  return true;
}
function i3(n3, r4) {
  const t4 = new Set(n3);
  for (const u4 of r4) t4.delete(u4);
  return t4;
}
function c2(n3, r4) {
  return i3(u2(n3, r4), e7(n3, r4));
}

// node_modules/@arcgis/core/core/accessorSupport/get.js
function i4(t4, i5) {
  const e9 = t4.endsWith("?") ? t4.slice(0, -1) : t4;
  if (null != i5.getItemAt || Array.isArray(i5)) {
    const t5 = parseInt(e9, 10);
    if (!isNaN(t5)) return Array.isArray(i5) ? i5[t5] : i5.at(t5);
  }
  const u4 = n(i5);
  return e3(u4, e9) ? u4.get(e9) : i5[e9];
}
function e8(t4, n3, r4) {
  if (null == t4) return t4;
  const u4 = i4(n3[r4], t4);
  return !u4 && r4 < n3.length - 1 ? void 0 : r4 === n3.length - 1 ? u4 : e8(u4, n3, r4 + 1);
}
function u3(n3, r4, u4 = 0) {
  return "string" != typeof r4 || r4.includes(".") ? e8(n3, o(r4), u4) : i4(r4, n3);
}
function o5(t4, n3) {
  return u3(t4, n3);
}
function s4(t4, n3) {
  return void 0 !== u3(n3, t4);
}

// node_modules/@arcgis/core/core/accessorSupport/watch.js
var _h = class _h {
  constructor() {
    this.uid = e4(), this.removed = false, this.type = null, this.oldValue = null, this.callback = null, this.getValue = null, this.target = null, this.path = null, this.equals = null;
  }
  static acquireUntracked(e9, t4, l3, o6, i5) {
    return this.pool.acquire(0, e9, t4, l3, o6, i5, j);
  }
  static acquireTracked(e9, t4, r4, l3) {
    return this.pool.acquire(1, e9, t4, r4, null, null, l3);
  }
  notify(e9, t4) {
    0 === this.type ? this.callback.call(this.target, e9, t4, this.path, this.target) : this.callback.call(null, e9, t4, void 0, void 0);
  }
  acquire(e9, t4, r4, l3, o6, i5, n3) {
    this.uid = e4(), this.removed = false, this.type = e9, this.oldValue = t4, this.callback = r4, this.getValue = l3, this.target = o6, this.path = i5, this.equals = n3;
  }
  release() {
    this.target = this.path = this.oldValue = this.callback = this.getValue = null, this.uid = e4(), this.removed = true;
  }
};
_h.pool = new s3(() => new _h());
var h2 = _h;
var m = new t2();
var p = /* @__PURE__ */ new Set();
var v;
function _(e9) {
  p.delete(e9), p.add(e9), g();
}
function g() {
  v || (v = A(k));
}
function j2(e9) {
  if (e9.removed) return;
  const t4 = e9.oldValue, r4 = e9.getValue();
  e9.equals(t4, r4) || (e9.oldValue = r4, e9.notify(r4, t4));
}
function q(e9) {
  for (const t4 of p.values()) t4.target === e9 && (t4.removed = true);
}
function k() {
  let e9 = 10;
  for (; v && e9--; ) {
    v = null;
    const e10 = y(), t4 = m.acquire();
    for (const r4 of e10) {
      const e11 = r4.uid;
      j2(r4), e11 === r4.uid && r4.removed && t4.push(r4);
    }
    for (const r4 of p) r4.removed && (t4.push(r4), p.delete(r4));
    for (const r4 of t4) h2.pool.release(r4);
    m.release(t4), m.release(e10), V.forEach((e11) => e11());
  }
}
function y() {
  const e9 = m.acquire();
  e9.length = p.size;
  let t4 = 0;
  for (const r4 of p) e9[t4] = r4, ++t4;
  return p.clear(), e9;
}
var V = /* @__PURE__ */ new Set();
function E(e9) {
  return V.add(e9), e(() => V.delete(e9));
}
function b(e9, r4, l3) {
  let o6 = l(e9, r4, l3, (e10, r5, l4) => {
    let i5, n3, s5 = e6(() => u3(e10, r5), (t4, s6) => {
      var _a;
      ((_a = e10.__accessor__) == null ? void 0 : _a.lifecycle) === I.DESTROYED || i5 && i5.uid !== n3 ? o6.remove() : (i5 || (i5 = h2.acquireUntracked(t4, l4, s6, e10, r5), n3 = i5.uid), _(i5));
    });
    return e(() => {
      s5.remove(), i5 && (i5.uid !== n3 || i5.removed || (i5.removed = true, _(i5)), i5 = null), o6 = s5 = null;
    });
  });
  return o6;
}
function D(e9, t4, l3) {
  const o6 = l(e9, t4, l3, (e10, t5, l4) => {
    let i5 = false;
    return o2(() => u3(e10, t5), (n3, s5) => {
      e10.__accessor__.lifecycle !== I.DESTROYED ? i5 || (i5 = true, j(s5, n3) || l4.call(e10, n3, s5, t5, e10), i5 = false) : o6.remove();
    });
  });
  return o6;
}
function S(e9, r4, l3, o6 = false) {
  return e9.__accessor__ && e9.__accessor__.lifecycle !== I.DESTROYED ? o6 ? D(e9, r4, l3) : b(e9, r4, l3) : e();
}
function w(e9, r4, l3) {
  let o6, i5, n3 = e6(e9, (e10, t4) => {
    o6 && o6.uid !== i5 ? n3.remove() : (o6 || (o6 = h2.acquireTracked(e10, r4, t4, l3), i5 = o6.uid), _(o6));
  });
  return e(() => {
    n3.remove(), o6 && (o6.uid !== i5 || o6.removed || (o6.removed = true, _(o6)), o6 = null), n3 = null;
  });
}
function T(e9, t4, r4) {
  let l3 = false;
  return o2(e9, (e10, o6) => {
    l3 || (l3 = true, r4(o6, e10) || t4(e10, o6), l3 = false);
  });
}
function U(e9, t4, r4 = false, o6 = h) {
  return r4 ? T(e9, t4, o6) : w(e9, t4, o6);
}
function O(e9) {
  return n2(p, (t4) => t4.oldValue === e9);
}

export {
  t2 as t,
  s3 as s,
  n2 as n,
  r3 as r,
  t3 as t2,
  u2 as u,
  e7 as e,
  o4 as o,
  f3 as f,
  i3 as i,
  c2 as c,
  e4 as e2,
  u3 as u2,
  o5 as o2,
  s4 as s2,
  s2 as s3,
  i2,
  g,
  q,
  E,
  S,
  U,
  O
};
//# sourceMappingURL=chunk-NVNJVVMF.js.map
