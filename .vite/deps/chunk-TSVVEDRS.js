import {
  $,
  A,
  B,
  C,
  M,
  N,
  S as S2,
  T,
  a2 as a3,
  c,
  i as i3,
  k,
  o as o2,
  o2 as o3,
  r,
  w
} from "./chunk-HPSHCA6S.js";
import {
  r as r2
} from "./chunk-CYEWK46L.js";
import {
  S,
  o2 as o,
  q
} from "./chunk-NVNJVVMF.js";
import {
  I,
  e
} from "./chunk-63GXB7XB.js";
import {
  a as a2,
  f,
  i as i2,
  m,
  s as s2,
  u2,
  y
} from "./chunk-HQPAN4GW.js";
import {
  u2 as u
} from "./chunk-QRKINRAQ.js";
import {
  a,
  i3 as i,
  j,
  s2 as s
} from "./chunk-KUWSTWZR.js";
import {
  has
} from "./chunk-NH2CL7HZ.js";

// node_modules/@arcgis/core/core/deprecate.js
var e2 = /* @__PURE__ */ new WeakMap();
function n(n6, t6, r6 = false) {
  const o6 = `🛑 DEPRECATED - ${t6}`;
  if (!r6) return void n6.warn(o6);
  let i5 = e2.get(n6);
  i5 || (i5 = /* @__PURE__ */ new Set(), e2.set(n6, i5)), i5.has(t6) || (i5.add(t6), n6.warn(o6));
}
var t = "https://www.esriurl.com/";
function r3(e8, n6, r6, o6 = {}) {
  has("esri-deprecation-warnings") && m2(e8, `This widget is deprecated. Use the ${n6} component instead.`, { see: [`${n6} component reference: ${t}${r6}/`, `Esri's move to web components: ${t}components-transition-plan/`], replacement: `<${r6}></${r6}>`, warnOnce: true, ...o6 });
}
function o4(e8, n6, r6, o6 = {}) {
  has("esri-deprecation-warnings") && m2(e8, `This view model is deprecated. Use the ${n6} component directly instead.`, { see: [`${n6} component reference: ${t}${r6}/`, `Esri's move to web components: ${t}components-transition-plan/`], replacement: `<${r6}></${r6}>`, warnOnce: true, ...o6 });
}
function i4(e8, n6, t6 = {}) {
  has("esri-deprecation-warnings") && m2(e8, `Module: ${n6}`, t6);
}
function s3(e8, n6, t6 = {}) {
  if (has("esri-deprecation-warnings")) {
    const { moduleName: r6 } = t6;
    m2(e8, `Function: ${(r6 ? r6 + "::" : "") + n6 + "()"}`, t6);
  }
}
function c2(e8, n6, t6 = {}) {
  if (has("esri-deprecation-warnings")) {
    const { moduleName: r6 } = t6;
    m2(e8, `Property: ${(r6 ? r6 + "::" : "") + n6}`, t6);
  }
}
function p(e8, n6, t6 = {}) {
  has("esri-deprecation-warnings") && m2(e8, `Multiple argument constructor: ${n6}`, { warnOnce: true, replacement: `new ${n6}({ <your properties here> })`, ...t6 });
}
function m2(e8, t6, r6 = {}) {
  if (has("esri-deprecation-warnings")) {
    const { replacement: o6, version: i5, see: s6, warnOnce: c3 } = r6;
    let a4 = t6;
    if (o6 && (a4 += `
	🛠️ Replacement: ${o6}`), i5 && (a4 += `
	⚙️ Version: ${i5}`), s6) if (Array.isArray(s6)) {
      a4 += "\n	🔗 See for more details:";
      for (const e9 of s6) a4 += `
		${e9}`;
    } else a4 += `
	🔗 See ${s6} for more details.`;
    n(e8, a4, c3);
  }
}

// node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js
var e3 = 8;
function r4(e8) {
  switch (e8) {
    case "defaults":
      return 0;
    case "service":
      return 2;
    case "portal-item":
      return 3;
    case "web-scene":
      return 4;
    case "web-map":
      return 5;
    case "link-chart":
      return 6;
    case "user":
      return 7;
    default:
      return null;
  }
}
function t2(e8) {
  switch (e8) {
    case 0:
      return "defaults";
    case 2:
      return "service";
    case 3:
      return "portal-item";
    case 4:
      return "web-scene";
    case 5:
      return "web-map";
    case 6:
      return "link-chart";
    case 7:
      return "user";
  }
}
function u3(e8) {
  return t2(e8);
}

// node_modules/@arcgis/core/core/accessorSupport/set.js
function t3(o6, e8, s6) {
  if (o6 && e8) if ("object" == typeof e8) for (const r6 of Object.getOwnPropertyNames(e8)) t3(o6, r6, e8[r6]);
  else {
    if (e8.includes(".")) {
      const n6 = e8.split("."), i6 = n6.splice(-1, 1)[0];
      return void t3(o(o6, n6), i6, s6);
    }
    const i5 = o6.__accessor__;
    null != i5 && n2(e8, i5), o6[e8] = s6;
  }
}
function n2(r6, t6) {
  if (has("esri-unknown-property-errors") && !e4(r6, t6)) throw new s("set:unknown-property", s4(r6, t6));
}
function e4(o6, r6) {
  return null != r6.metadata[o6];
}
function s4(o6, r6) {
  return "setting unknown property '" + o6 + "' on instance of " + r6.host.declaredClass;
}

// node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
function m3(n6 = {}) {
  return (i5, s6) => {
    if (i5 === Function.prototype) throw new Error(`Inappropriate use of @property() on a static field: ${i5.name}.${s6}. Accessor does not support static properties.`);
    const a4 = Object.getOwnPropertyDescriptor(i5, s6), c3 = o3(i5, s6);
    a4 && (a4.get || a4.set ? (c3.get = a4.get || c3.get, c3.set = a4.set || c3.set) : "value" in a4 && ("value" in n6 && i.getLogger("esri.core.accessorSupport.decorators.property").warn(`@property() will redefine the value of "${s6}" on "${i5.constructor.name}" already defined in the metadata`, n6), c3.value = n6.value = a4.value)), null != n6.readOnly && (c3.readOnly = n6.readOnly);
    const f4 = n6.aliasOf;
    if (f4) {
      const t6 = "string" == typeof f4 ? f4 : f4.source, r6 = "string" == typeof f4 ? null : true === f4.overridable;
      let e8;
      c3.dependsOn = [t6], c3.get = function() {
        let r7 = o(this, t6);
        if ("function" == typeof r7) {
          e8 || (e8 = t6.split(".").slice(0, -1).join("."));
          const o6 = o(this, e8);
          o6 && (r7 = r7.bind(o6));
        }
        return r7;
      }, c3.readOnly || (c3.set = r6 ? function(t7) {
        this._override(s6, t7);
      } : function(r7) {
        t3(this, t6, r7);
      });
    }
    const p3 = n6.type, u5 = n6.types;
    if (!c3.cast) {
      let t6;
      p3 ? t6 = v(p3) : u5 && (t6 = Array.isArray(u5) ? A(S2(u5[0])) : S2(u5)), n6.cast = h(n6.cast, t6);
    }
    c(c3, n6), n6.range && (c3.cast = i3(c3.cast, n6.range));
  };
}
function j2(t6, r6, e8) {
  const o6 = o3(t6, e8);
  o6.json || (o6.json = {});
  let n6 = o6.json;
  return void 0 !== r6 && (n6.origins || (n6.origins = {}), n6.origins[r6] || (n6.origins[r6] = {}), n6 = n6.origins[r6]), n6;
}
function v(t6) {
  let r6 = 0, e8 = t6;
  if (B(t6)) return C(t6);
  for (; Array.isArray(e8) && 1 === e8.length && "string" != typeof e8[0] && "number" != typeof e8[0]; ) e8 = e8[0], r6++;
  const o6 = e8;
  if (N(o6)) return 0 === r6 ? T(o6) : k(T(o6), r6);
  if (1 === r6) return $(o6);
  if (r6 > 1) return M(o6, r6);
  const l = t6;
  return l.from ? l.from : w(l);
}
function h(t6, r6) {
  if (t6 || r6) return t6 ? r6 ? (e8, o6) => r6(t6(e8, o6), o6) : t6 : r6;
}

// node_modules/@arcgis/core/core/iteratorUtils.js
function n3(n6) {
  const t6 = [];
  return function* () {
    yield* t6;
    let e8, o6 = t6.length;
    for (; !(e8 = n6.next()).done; ) for (t6.push(e8.value), yield e8.value; ++o6 < t6.length; ) yield t6[o6];
  };
}
function t4(n6, t6) {
  for (const e8 of n6) if (null != e8 && t6(e8)) return e8;
}
function e5(n6) {
  return null != n6 && "function" == typeof n6[Symbol.iterator];
}

// node_modules/@arcgis/core/core/Handles.js
var r5 = class {
  constructor() {
    this._groups = /* @__PURE__ */ new Map();
  }
  destroy() {
    this.removeAll();
  }
  get size() {
    let t6 = 0;
    return this._groups.forEach((r6) => {
      t6 += r6.length;
    }), t6;
  }
  add(r6, e8) {
    if (e5(r6)) {
      const t6 = this._getOrCreateGroup(e8);
      for (const e9 of r6) o5(e9) && t6.push(e9);
    } else if (o5(r6)) {
      this._getOrCreateGroup(e8).push(r6);
    }
    return this;
  }
  forEach(t6, r6) {
    if ("function" == typeof t6) this._groups.forEach((r7) => r7.forEach(t6));
    else {
      const e8 = this._getGroup(t6);
      e8 && r6 && e8.forEach(r6);
    }
  }
  has(t6) {
    return this._groups.has(e6(t6));
  }
  remove(r6) {
    if ("string" != typeof r6 && e5(r6)) {
      for (const t6 of r6) this.remove(t6);
      return this;
    }
    return this.has(r6) ? (s5(this._getGroup(r6)), this._groups.delete(e6(r6)), this) : this;
  }
  removeAll() {
    return this._groups.forEach(s5), this._groups.clear(), this;
  }
  removeReference(t6) {
    return this._groups.delete(t6), this;
  }
  _getOrCreateGroup(t6) {
    if (this.has(t6)) return this._getGroup(t6);
    const r6 = [];
    return this._groups.set(e6(t6), r6), r6;
  }
  _getGroup(t6) {
    return this._groups.get(e6(t6));
  }
};
function e6(t6) {
  return t6 || "_default_";
}
function s5(t6) {
  for (const e8 of t6) e8 instanceof r5 ? e8.removeAll() : e8.remove();
}
function o5(t6) {
  return null != t6 && (!!t6.remove || t6 instanceof r5);
}

// node_modules/@arcgis/core/core/accessorSupport/Property.js
var n4 = class extends r2 {
  constructor(t6, i5) {
    super(), this.propertyName = t6, this.metadata = i5, this.trackingTarget = new s2(this), this.flags = 0, this.flags = i2.Dirty | (i5.nonNullable ? i2.NonNullable : 0) | (i5.hasOwnProperty("value") ? i2.HasDefaultValue : 0) | (void 0 === i5.get ? i2.DepTrackingInitialized : 0) | (void 0 === i5.dependsOn ? i2.AutoTracked : 0);
  }
  destroy() {
    this.flags & i2.Dirty && this.onCommitted(), super.destroy(), this.trackingTarget.destroy();
  }
  getComputed(t6) {
    t6.mutable && a2(this);
    const r6 = t6.store, n6 = this.propertyName, g2 = this.flags, h2 = r6.get(n6);
    if (g2 & i2.Computing) return h2;
    if (~g2 & i2.Dirty && r6.has(n6)) return h2;
    this.flags |= i2.Computing;
    const l = t6.host;
    let d2;
    g2 & i2.AutoTracked ? d2 = f(this.trackingTarget, this.metadata.get, l) : (y(l, this), d2 = this.metadata.get.call(l)), this.flags |= i2.DepTrackingInitialized, r6.set(n6, d2, 1);
    const m6 = r6.get(n6);
    return m6 === h2 ? this.flags &= ~i2.Dirty : u2(this.commit, this), this.flags &= ~i2.Computing, m6;
  }
  notifyChange() {
    this.onInvalidated(), this.onCommitted();
  }
  invalidate() {
    this.onInvalidated();
  }
  commit() {
    this.flags &= ~i2.Dirty, this.onCommitted();
  }
  onInvalidated() {
    ~this.flags & i2.Overridden && (this.flags |= i2.Dirty);
    const t6 = this._observers;
    if (t6 && t6.length > 0) for (const i5 of t6) i5.onInvalidated();
  }
  onCommitted() {
    const t6 = this._observers;
    if (t6 && t6.length > 0) {
      const i5 = t6.slice();
      for (const t7 of i5) t7.onCommitted();
    }
  }
};

// node_modules/@arcgis/core/core/accessorSupport/Store.js
var e7 = class _e {
  constructor() {
    this._values = /* @__PURE__ */ new Map(), this.multipleOriginsSupported = false;
  }
  clone(t6) {
    const r6 = new _e();
    return this._values.forEach((e8, i5) => {
      t6 && t6.has(i5) || r6.set(i5, a(e8));
    }), r6;
  }
  get(s6) {
    return this._values.get(s6);
  }
  originOf() {
    return 7;
  }
  keys() {
    return [...this._values.keys()];
  }
  set(s6, e8) {
    this._values.set(s6, e8);
  }
  delete(s6) {
    this._values.delete(s6);
  }
  has(s6) {
    return this._values.has(s6);
  }
  isAtOrigin(s6, e8) {
    return this.has(s6);
  }
  isBelowOrigin(s6, e8) {
    return !this.has(s6);
  }
  forEach(s6) {
    this._values.forEach(s6);
  }
};

// node_modules/@arcgis/core/core/accessorSupport/Properties.js
function f2(t6, e8, i5) {
  return void 0 !== t6;
}
function p2(t6, e8, s6, r6) {
  return void 0 !== t6 && (!(null == s6 && t6.flags & i2.NonNullable) || (r6.lifecycle, I.INITIALIZING, false));
}
var m4 = class {
  constructor(t6) {
    this.host = t6, this.propertiesByName = /* @__PURE__ */ new Map(), this.ctorArgs = null, this.lifecycle = I.INITIALIZING, this.store = new e7(), this.mutable = true, this._origin = 7;
    const e8 = this.host.constructor.__accessorMetadata__;
    for (const i5 in e8) {
      const t7 = new n4(i5, e8[i5]);
      this.propertiesByName.set(i5, t7);
    }
    this.metadata = e8;
  }
  initialize() {
    this.lifecycle = I.CONSTRUCTING;
  }
  constructed() {
    this.lifecycle = I.CONSTRUCTED;
  }
  destroy() {
    this.lifecycle = I.DESTROYED, this.propertiesByName.forEach((t6) => t6.destroy());
  }
  get initialized() {
    return this.lifecycle !== I.INITIALIZING;
  }
  get(t6) {
    const e8 = this.propertiesByName.get(t6);
    if (!f2(e8)) return;
    if (e8.metadata.get) return e8.getComputed(this);
    this.mutable && a2(e8);
    const i5 = this.store;
    return i5.has(t6) ? i5.get(t6) : e8.metadata.value;
  }
  originOf(t6) {
    const e8 = this.store.originOf(t6);
    if (void 0 === e8) {
      const e9 = this.propertiesByName.get(t6);
      if (void 0 !== e9 && e9.flags & i2.HasDefaultValue) return "defaults";
    }
    return t2(e8);
  }
  has(t6) {
    return this.propertiesByName.has(t6) && this.store.has(t6);
  }
  keys() {
    return [...this.propertiesByName.keys()];
  }
  internalGet(t6) {
    const e8 = this.propertiesByName.get(t6);
    if (f2(e8)) return this.store.has(t6) ? this.store.get(t6) : e8.metadata.value;
  }
  internalSet(t6, e8) {
    const i5 = this.propertiesByName.get(t6);
    f2(i5) && this._internalSet(i5, e8);
  }
  getDependsInfo(t6, e8, i5) {
    const r6 = this.propertiesByName.get(e8);
    if (!f2(r6)) return "";
    const n6 = new s2(), o6 = f(n6, () => {
      var _a;
      return (_a = r6.metadata.get) == null ? void 0 : _a.call(t6);
    });
    let a4 = `${i5}${t6.declaredClass.split(".").pop()}.${e8}: ${o6}
`;
    const l = n6.accessed ?? /* @__PURE__ */ new Set();
    if (0 === l.size) return a4;
    i5 += "  ";
    for (const c3 of l) {
      if (!(c3 instanceof n4)) continue;
      a4 += `${i5}${c3.propertyName}: undefined
`;
    }
    return a4;
  }
  setAtOrigin(t6, e8, i5) {
    const s6 = this.propertiesByName.get(t6);
    if (f2(s6)) return this._setAtOrigin(s6, e8, i5);
  }
  isOverridden(t6) {
    const e8 = this.propertiesByName.get(t6);
    return void 0 !== e8 && !!(e8.flags & i2.Overridden);
  }
  clearOrigin(t6, e8) {
    const i5 = this.store, s6 = this.propertiesByName.get(t6);
    if (!f2(s6)) return;
    const r6 = i5.isAtOrigin(t6, e8) && !(s6.flags & i2.Overridden);
    i5.delete(t6, e8), r6 && s6.notifyChange();
  }
  clearOverride(t6) {
    const e8 = this.propertiesByName.get(t6);
    e8 && e8.flags & i2.Overridden && (e8.flags &= ~i2.Overridden, e8.notifyChange());
  }
  override(t6, e8) {
    const i5 = this.propertiesByName.get(t6);
    if (!p2(i5, t6, e8, this)) return;
    const s6 = i5.metadata.cast;
    if (s6) {
      const t7 = this._cast(s6, e8), { valid: i6, value: r6 } = t7;
      if (d.release(t7), !i6) return;
      e8 = r6;
    }
    i5.flags |= i2.Overridden, this._internalSet(i5, e8);
  }
  set(t6, e8) {
    const i5 = this.propertiesByName.get(t6);
    if (!p2(i5, t6, e8, this)) return;
    const s6 = i5.metadata.cast;
    if (s6) {
      const t7 = this._cast(s6, e8), { valid: i6, value: r7 } = t7;
      if (d.release(t7), !i6) return;
      e8 = r7;
    }
    const r6 = i5.metadata.set;
    r6 ? r6.call(this.host, e8) : this._internalSet(i5, e8);
  }
  setDefaultOrigin(t6) {
    this._origin = r4(t6);
  }
  getDefaultOrigin() {
    return t2(this._origin);
  }
  notifyChange(t6) {
    const e8 = this.propertiesByName.get(t6);
    void 0 !== e8 && e8.notifyChange();
  }
  invalidate(t6) {
    const e8 = this.propertiesByName.get(t6);
    void 0 !== e8 && e8.invalidate();
  }
  commit(t6) {
    const e8 = this.propertiesByName.get(t6);
    void 0 !== e8 && e8.commit();
  }
  _internalSet(t6, e8) {
    const s6 = this.lifecycle !== I.INITIALIZING ? this._origin : 0;
    this._setAtOrigin(t6, e8, s6);
  }
  _setAtOrigin(e8, i5, s6) {
    const r6 = this.store, n6 = e8.propertyName;
    if (r6.isAtOrigin(n6, s6) && j(i5, r6.get(n6)) && ~e8.flags & i2.Overridden) return;
    const o6 = r6.isBelowOrigin(n6, s6) || r6.isAtOrigin(n6, s6);
    o6 && e8.invalidate(), r6.set(n6, i5, s6), o6 && e8.commit(), m(this.host, e8);
  }
  _cast(t6, e8) {
    const i5 = d.acquire();
    return i5.valid = true, i5.value = e8, t6 && (i5.value = t6.call(this.host, e8, i5)), i5;
  }
};
var u4 = class {
  constructor() {
    this.value = null, this.valid = true;
  }
  acquire() {
    this.valid = true;
  }
  release() {
    this.value = null;
  }
};
var d = new e(() => new u4());

// node_modules/@arcgis/core/core/accessorSupport/testSupport.js
var n5;
function t5() {
  return n5;
}

// node_modules/@arcgis/core/core/Accessor.js
var f3;
var y2;
function m5(e8) {
  var _a;
  if (null == e8) return { value: e8 };
  if (Array.isArray(e8)) return { type: [e8[0]], value: null };
  switch (typeof e8) {
    case "object":
      return ((_a = e8.constructor) == null ? void 0 : _a.__accessorMetadata__) || e8 instanceof Date ? { type: e8.constructor, value: e8 } : e8;
    case "boolean":
      return { type: Boolean, value: e8 };
    case "string":
      return { type: String, value: e8 };
    case "number":
      return { type: Number, value: e8 };
    case "function":
      return { type: e8, value: null };
    default:
      return;
  }
}
var v2 = Symbol("Accessor-Handles");
var g = Symbol("Accessor-Initialized");
var _b = class _b {
  static createSubclass(e8 = {}) {
    if (Array.isArray(e8)) throw new Error("Multi-inheritance unsupported since 4.16");
    const { properties: t6, declaredClass: r6, constructor: s6 } = e8;
    delete e8.declaredClass, delete e8.properties, delete e8.constructor;
    const o6 = this;
    class c3 extends o6 {
      constructor(...e9) {
        super(...e9), this.inherited = null, s6 && s6.apply(this, e9);
      }
    }
    r(c3.prototype);
    for (const i5 in e8) {
      const t7 = e8[i5];
      c3.prototype[i5] = "function" == typeof t7 ? function(...e9) {
        const r7 = this.inherited;
        let s7;
        this.inherited = function(...e10) {
          if (o6.prototype[i5]) return o6.prototype[i5].apply(this, e10);
        };
        try {
          s7 = t7.apply(this, e9);
        } catch (c4) {
          throw this.inherited = r7, c4;
        }
        return this.inherited = r7, s7;
      } : e8[i5];
    }
    for (const i5 in t6) {
      const e9 = m5(t6[i5]);
      m3(e9)(c3.prototype, i5);
    }
    return a3(r6)(c3);
  }
  static freeze(e8) {
    return e8 instanceof _b ? e8.__accessor__.mutable = false : Object.freeze(e8), e8;
  }
  static isFrozen(e8) {
    return e8 instanceof _b ? !e8.__accessor__.mutable : Object.isFrozen(e8);
  }
  constructor(...e8) {
    var _a, _b2;
    if (this[f3] = null, this[y2] = false, this.constructor === _b) throw new Error("[accessor] cannot instantiate Accessor. This can be fixed by creating a subclass of Accessor");
    const t6 = new m4(this);
    Object.defineProperty(this, "__accessor__", { enumerable: false, value: t6 }), e8.length > 0 && (t6.ctorArgs = ((_a = this.normalizeCtorArgs) == null ? void 0 : _a.apply(this, e8)) ?? e8[0]), (_b2 = t5()) == null ? void 0 : _b2.onInstanceConstruct(this);
  }
  postscript() {
    const e8 = this.__accessor__, t6 = e8.ctorArgs;
    e8.initialize(), t6 && (this.set(t6), e8.ctorArgs = null), e8.constructed(), this.initialize(), this[g] = true;
  }
  initialize() {
  }
  [o2]() {
    this[v2] = u(this[v2]);
  }
  destroy() {
    var _a;
    this.destroyed || (q(this), this.__accessor__.destroy(), (_a = t5()) == null ? void 0 : _a.onInstanceDestroy(this));
  }
  [Symbol.dispose]() {
    this.destroy();
  }
  get constructed() {
    return this.__accessor__ && this.__accessor__.initialized || false;
  }
  get initialized() {
    return this[g];
  }
  get destroyed() {
    var _a;
    return ((_a = this.__accessor__) == null ? void 0 : _a.lifecycle) === I.DESTROYED || false;
  }
  get destroying() {
    var _a;
    return ((_a = this.__accessor__) == null ? void 0 : _a.lifecycle) === I.DESTROYING || false;
  }
  commitProperty(e8) {
    o(this, e8);
  }
  hasOwnProperty(e8) {
    return this.__accessor__ ? this.__accessor__.has(e8) : Object.prototype.hasOwnProperty.call(this, e8);
  }
  keys() {
    return this.__accessor__ ? this.__accessor__.keys() : [];
  }
  set(e8, t6) {
    return t3(this, e8, t6), this;
  }
  watch(t6, s6, o6) {
    return s3(i.getLogger(this), "`watch` is deprecated in favor of reactiveUtils.watch", { replacement: "reactiveUtils.watch", version: "4.32", see: "https://arcg.is/1vaqf42#watch", warnOnce: true }), S(this, t6, s6, o6);
  }
  addHandles(e8, r6) {
    if (this.destroyed) {
      const t6 = Array.isArray(e8) ? e8 : [e8];
      for (const e9 of t6) e9.remove();
      return;
    }
    (this[v2] ?? (this[v2] = new r5())).add(e8, r6);
  }
  removeHandles(e8) {
    var _a;
    (_a = this[v2]) == null ? void 0 : _a.remove(e8);
  }
  removeAllHandles() {
    var _a;
    (_a = this[v2]) == null ? void 0 : _a.removeAll();
  }
  removeHandlesReference(e8) {
    var _a;
    (_a = this[v2]) == null ? void 0 : _a.removeReference(e8);
  }
  hasHandles(e8) {
    var _a;
    return true === ((_a = this[v2]) == null ? void 0 : _a.has(e8));
  }
  _override(e8, t6) {
    void 0 === t6 ? this.__accessor__.clearOverride(e8) : this.__accessor__.override(e8, t6);
  }
  _clearOverride(e8) {
    return this.__accessor__.clearOverride(e8);
  }
  _overrideIfSome(e8, t6) {
    null == t6 ? this.__accessor__.clearOverride(e8) : this.__accessor__.override(e8, t6);
  }
  _isOverridden(e8) {
    return this.__accessor__.isOverridden(e8);
  }
  notifyChange(e8) {
    this.__accessor__.notifyChange(e8);
  }
  _get(e8) {
    return this.__accessor__.internalGet(e8);
  }
  _set(e8, t6) {
    return this.__accessor__.internalSet(e8, t6), this;
  }
};
f3 = v2, y2 = g;
var b = _b;

export {
  r3 as r,
  o4 as o,
  i4 as i,
  s3 as s,
  c2 as c,
  p,
  m2 as m,
  n3 as n,
  t4 as t,
  e5 as e,
  r5 as r2,
  e3 as e2,
  r4 as r3,
  t2,
  u3 as u,
  m3 as m2,
  j2 as j,
  b
};
//# sourceMappingURL=chunk-TSVVEDRS.js.map
