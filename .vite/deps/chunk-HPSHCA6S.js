import {
  e as e3
} from "./chunk-PRKAQBHS.js";
import {
  I
} from "./chunk-63GXB7XB.js";
import {
  a as a2,
  u
} from "./chunk-HQPAN4GW.js";
import {
  a,
  e,
  e2,
  i3 as i,
  s2 as s
} from "./chunk-KUWSTWZR.js";

// node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var r = () => i.getLogger("esri.core.accessorSupport.ensureTypes");
function t(e6) {
  if (null == e6) return e6;
  const n7 = new Date(e6);
  return isNaN(n7.getTime()) ? (r().error("Accessor#set", `Invalid date value: '${e6}', falling back to current date`), /* @__PURE__ */ new Date()) : n7;
}
function o(e6) {
  return null == e6 ? e6 : !!e6;
}
function u2(e6) {
  return null == e6 ? e6 : e6.toString();
}
function a3(e6, n7 = 0) {
  return null == e6 ? e6 : (e6 = parseFloat(e6), isNaN(e6) ? n7 : e6);
}
function s2(e6) {
  return null == e6 ? e6 : Math.round(parseFloat(e6));
}
function l(e6) {
  return null;
}
function i2(e6, n7) {
  return (r5) => {
    let t2 = e6(r5);
    return null != n7.step && (t2 = Math.round(t2 / n7.step) * n7.step), null != n7.min && (t2 = Math.max(n7.min, t2)), null != n7.max && (t2 = Math.min(n7.max, t2)), t2;
  };
}
function c(e6) {
  return (e6 == null ? void 0 : e6.constructor) && void 0 !== e6.constructor.__accessorMetadata__;
}
function f(e6, n7) {
  return null != n7 && e6 && !(n7 instanceof e6);
}
function p(e6) {
  return e6 && "isCollection" in e6;
}
function y(e6) {
  return (e6 == null ? void 0 : e6.Type) ? "function" == typeof e6.Type ? e6.Type : e6.Type.base : null;
}
function v(e6, n7) {
  if (!(n7 == null ? void 0 : n7.constructor) || !p(n7.constructor)) return g(e6, n7) ? n7 : new e6(n7);
  const r5 = y(e6.prototype.itemType), t2 = y(n7.constructor.prototype.itemType);
  return r5 ? t2 ? r5 === t2 ? n7 : r5.prototype.isPrototypeOf(t2.prototype) ? new e6(n7) : (g(e6, n7), n7) : new e6(n7) : n7;
}
function g(e6, n7) {
  return !!c(n7) && (r().error("Accessor#set", "Assigning an instance of '" + (n7.declaredClass || "unknown") + "' which is not a subclass of '" + h(e6) + "'"), true);
}
function m(e6, n7) {
  return null == n7 ? n7 : p(e6) ? v(e6, n7) : f(e6, n7) ? g(e6, n7) ? n7 : new e6(n7) : n7;
}
function h(e6) {
  var _a;
  return ((_a = e6 == null ? void 0 : e6.prototype) == null ? void 0 : _a.declaredClass) || "unknown";
}
var d = /* @__PURE__ */ new WeakMap();
function b(e6) {
  switch (e6) {
    case Number:
      return (e7) => a3(e7);
    case x:
      return s2;
    case Boolean:
      return o;
    case String:
      return u2;
    case Date:
      return t;
    case D:
      return l;
    default:
      return e3(d, e6, () => m.bind(null, e6));
  }
}
function w(e6, n7) {
  const r5 = b(e6);
  return 1 === arguments.length ? r5 : r5(n7);
}
function A(e6, n7, r5) {
  return 1 === arguments.length ? A.bind(null, e6) : n7 ? Array.isArray(n7) ? n7.map((n8) => e6(n8, r5)) : [e6(n7, r5)] : n7;
}
function $(e6, n7) {
  return 1 === arguments.length ? A((n8) => w(e6, n8)) : A((n8) => w(e6, n8), n7);
}
function j(e6, n7, r5) {
  return 0 !== n7 && Array.isArray(r5) ? r5.map((r6) => j(e6, n7 - 1, r6)) : e6(r5);
}
function k(e6, n7, r5) {
  if (2 === arguments.length) return (r6) => k(e6, n7, r6);
  if (!r5) return r5;
  r5 = j(e6, n7, r5);
  let t2 = n7, o7 = r5;
  for (; t2 > 0 && Array.isArray(o7); ) t2--, o7 = o7[0];
  if (void 0 !== o7) for (let u5 = 0; u5 < t2; u5++) r5 = [r5];
  return r5;
}
function M(e6, n7, r5) {
  return 2 === arguments.length ? k((n8) => w(e6, n8), n7) : k((n8) => w(e6, n8), n7, r5);
}
function N(e6) {
  return !!Array.isArray(e6) && !e6.some((n7) => {
    const r5 = typeof n7;
    return !("string" === r5 || "number" === r5 || "function" === r5 && e6.length > 1);
  });
}
function T(e6, n7) {
  if (2 === arguments.length) return T(e6).call(null, n7);
  const t2 = /* @__PURE__ */ new Set(), o7 = e6.filter((e7) => "function" != typeof e7), u5 = e6.filter((e7) => "function" == typeof e7);
  for (const r5 of e6) "string" != typeof r5 && "number" != typeof r5 || t2.add(r5);
  let a9 = null, s7 = null;
  return (e7, n8) => {
    if (null == e7) return e7;
    const l5 = typeof e7, i5 = "string" === l5 || "number" === l5;
    return i5 && (t2.has(e7) || u5.some((e8) => "string" === l5 && e8 === String || "number" === l5 && e8 === Number)) || "object" === l5 && u5.some((n9) => !f(n9, e7)) ? e7 : (i5 && o7.length ? (a9 || (a9 = o7.map((e8) => "string" == typeof e8 ? `'${e8}'` : `${e8}`).join(", ")), r().error("Accessor#set", `'${e7}' is not a valid value for this property, only the following values are valid: ${a9}`)) : "object" == typeof e7 && u5.length ? (s7 || (s7 = u5.map((e8) => h(e8)).join(", ")), r().error("Accessor#set", `'${e7}' is not a valid value for this property, value must be one of ${s7}`)) : r().error("Accessor#set", `'${e7}' is not a valid value for this property`), n8 && (n8.valid = false), null);
  };
}
function S(e6, n7) {
  if (2 === arguments.length) return S(e6).call(null, n7);
  const t2 = {}, o7 = [], u5 = [];
  for (const r5 in e6.typeMap) {
    const n8 = e6.typeMap[r5];
    t2[r5] = w(n8), o7.push(h(n8)), u5.push(r5);
  }
  const a9 = () => `'${o7.join("', '")}'`, s7 = () => `'${u5.join("', '")}'`, l5 = "string" == typeof e6.key ? (n8) => n8[e6.key] : e6.key;
  return (n8) => {
    if (e6.base && !f(e6.base, n8)) return n8;
    if (null == n8) return n8;
    const o8 = l5(n8) || e6.defaultKeyValue, u6 = t2[o8];
    if (!u6) return r().error("Accessor#set", `Invalid property value, value needs to be one of ${a9()}, or a plain object that can autocast (having .type = ${s7()})`), null;
    if (!f(e6.typeMap[o8], n8)) return n8;
    if ("string" == typeof e6.key && !c(n8)) {
      const r5 = {};
      for (const t3 in n8) t3 !== e6.key && (r5[t3] = n8[t3]);
      return u6(r5);
    }
    return u6(n8);
  };
}
var x = class {
};
var D = class {
};
var _ = { native: (e6) => ({ type: "native", value: e6 }), array: (e6) => ({ type: "array", value: e6 }), oneOf: (e6) => ({ type: "one-of", values: e6 }) };
function B(e6) {
  if (!e6 || !("type" in e6)) return false;
  switch (e6.type) {
    case "native":
    case "array":
    case "one-of":
      return true;
  }
  return false;
}
function C(e6) {
  switch (e6.type) {
    case "native":
      return w(e6.value);
    case "array":
      return A(C(e6.value));
    case "one-of":
      return I2(e6);
    default:
      return null;
  }
}
function I2(e6) {
  let n7 = null;
  return (t2, o7) => L(t2, e6) ? t2 : (null == n7 && (n7 = F(e6)), r().error("Accessor#set", `Invalid property value, value needs to be of type ${n7}`), o7 && (o7.valid = false), null);
}
function F(e6) {
  switch (e6.type) {
    case "native":
      switch (e6.value) {
        case Number:
          return "number";
        case String:
          return "string";
        case Boolean:
          return "boolean";
        case x:
          return "integer";
        case Date:
          return "date";
        case D:
          return "null";
        default:
          return h(e6.value);
      }
    case "array":
      return `array of ${F(e6.value)}`;
    case "one-of": {
      const n7 = e6.values.map((e7) => F(e7));
      return `one of ${n7.slice(0, -1)} or ${n7[n7.length - 1]}`;
    }
  }
  return "unknown";
}
function L(e6, n7) {
  if (null == e6) return true;
  switch (n7.type) {
    case "native":
      switch (n7.value) {
        case Number:
        case x:
          return "number" == typeof e6;
        case Boolean:
          return "boolean" == typeof e6;
        case String:
          return "string" == typeof e6;
        case D:
          return null === e6;
      }
      return e6 instanceof n7.value;
    case "array":
      return !!Array.isArray(e6) && !e6.some((e7) => !L(e7, n7.value));
    case "one-of":
      return n7.values.some((n8) => L(e6, n8));
  }
}

// node_modules/@arcgis/core/core/Warning.js
var s3 = class extends e2 {
  constructor(e6, s7, t2) {
    super(e6, s7, t2);
  }
};
s3.prototype.type = "warning";

// node_modules/@arcgis/core/core/accessorSupport/beforeDestroy.js
var o2 = Symbol("Accessor-beforeDestroy");

// node_modules/@arcgis/core/core/accessorSupport/metadata.js
function r2(e6) {
  let r5 = e6.constructor.__accessorMetadata__;
  const o7 = Object.prototype.hasOwnProperty.call(e6.constructor, "__accessorMetadata__");
  if (r5) {
    if (!o7) {
      r5 = Object.create(r5);
      for (const e7 in r5) r5[e7] = a(r5[e7]);
      Object.defineProperty(e6.constructor, "__accessorMetadata__", { value: r5, enumerable: false, configurable: true, writable: true });
    }
  } else r5 = {}, Object.defineProperty(e6.constructor, "__accessorMetadata__", { value: r5, enumerable: false, configurable: true, writable: true });
  return e6.constructor.__accessorMetadata__;
}
function o3(t2, e6) {
  const o7 = r2(t2);
  let c6 = o7[e6];
  return c6 || (c6 = o7[e6] = {}), c6;
}
function c2(t2, r5) {
  return u(t2, r5, n);
}
var a4 = /^(?:[^.]+\.)?(?:value|type|(?:json\.type|json\.origins\.[^.]\.type))$/;
function n(t2) {
  return a4.test(t2) ? "replace" : "merge";
}

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/originAliases.js
function n2(n7) {
  if (n7.json && n7.json.origins) {
    const o7 = n7.json.origins, e6 = { "web-document": ["web-scene", "web-map"] };
    for (const n8 in e6) if (o7[n8]) {
      const s7 = o7[n8];
      e6[n8].forEach((n9) => {
        o7[n9] = s7;
      }), delete o7[n8];
    }
  }
}

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/type.js
function e4(e6) {
  var _a;
  return !!e6 && ((_a = e6.prototype) == null ? void 0 : _a.declaredClass) && 0 === e6.prototype.declaredClass.indexOf("esri.core.Collection");
}

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/utils.js
function n3(n7, i5) {
  return o4(n7, "any", i5 == null ? void 0 : i5.origin);
}
function i3(n7, i5) {
  return o4(n7, "read", i5 == null ? void 0 : i5.origin);
}
function r3(n7, i5) {
  return o4(n7, "write", i5 == null ? void 0 : i5.origin);
}
function o4(n7, i5, r5) {
  let o7 = n7 == null ? void 0 : n7.json;
  if ((o7 == null ? void 0 : o7.origins) && r5) {
    let n8;
    n8 = "link-chart" === r5 ? o7.origins[r5] && ("any" === i5 || i5 in o7.origins[r5]) ? o7.origins[r5] : o7.origins["web-map"] : o7.origins[r5], n8 && ("any" === i5 || i5 in n8) && (o7 = n8);
  }
  return o7;
}

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/reader.js
var p2 = () => i.getLogger("esri.core.accessorSupport.extensions.serializableProperty.reader");
function u3(t2, r5, n7) {
  var _a, _b;
  t2 && (!n7 && !r5.read || ((_a = r5.read) == null ? void 0 : _a.reader) || false === ((_b = r5.read) == null ? void 0 : _b.enabled) || m2(t2) && e("read.reader", s4(t2), r5));
}
function s4(t2) {
  var _a, _b;
  const e6 = t2.ndimArray ?? 0;
  if (e6 > 1) return a5(t2);
  if (1 === e6) return d2(t2);
  if ("type" in t2 && l2(t2.type)) {
    const e7 = (_b = (_a = t2.type.prototype) == null ? void 0 : _a.itemType) == null ? void 0 : _b.Type, r5 = d2("function" == typeof e7 ? { type: e7 } : { types: e7 });
    return (e8, n7, o7) => {
      const i5 = r5(e8, n7, o7);
      return i5 ? new t2.type(i5) : i5;
    };
  }
  return y2(t2);
}
function y2(t2) {
  return "type" in t2 ? f2(t2.type) : v2(t2.types);
}
function f2(t2) {
  return t2.prototype.read ? (e6, r5, n7) => {
    if (null == e6) return e6;
    const o7 = typeof e6;
    if ("object" !== o7) return void p2().error(`Expected JSON value of type 'object' to deserialize type '${t2.prototype.declaredClass}', but got '${o7}'`);
    const i5 = new t2();
    return i5.read(e6, n7), i5;
  } : t2.fromJSON;
}
function c3(t2, e6, r5, n7) {
  return 0 !== n7 && Array.isArray(e6) ? e6.map((e7) => c3(t2, e7, r5, n7 - 1)) : t2(e6, void 0, r5);
}
function a5(t2) {
  const e6 = y2(t2), r5 = c3.bind(null, e6), n7 = t2.ndimArray ?? 0;
  return (t3, e7, o7) => {
    if (null == t3) return t3;
    t3 = r5(t3, o7, n7);
    let i5 = n7, p6 = t3;
    for (; i5 > 0 && Array.isArray(p6); ) i5--, p6 = p6[0];
    if (void 0 !== p6) for (let r6 = 0; r6 < i5; r6++) t3 = [t3];
    return t3;
  };
}
function d2(t2) {
  const e6 = y2(t2);
  return (t3, r5, n7) => {
    if (null == t3) return t3;
    if (Array.isArray(t3)) {
      const r6 = [];
      for (const o8 of t3) {
        const t4 = e6(o8, void 0, n7);
        void 0 !== t4 && r6.push(t4);
      }
      return r6;
    }
    const o7 = e6(t3, void 0, n7);
    return void 0 !== o7 ? [o7] : void 0;
  };
}
function l2(t2) {
  if (!e4(t2)) return false;
  const e6 = t2.prototype.itemType;
  return !(!e6 || !e6.Type) && ("function" == typeof e6.Type ? j2(e6.Type) : g2(e6.Type));
}
function m2(t2) {
  return "types" in t2 ? g2(t2.types) : j2(t2.type);
}
function j2(t2) {
  return !Array.isArray(t2) && (!!t2 && t2.prototype && ("read" in t2.prototype || "fromJSON" in t2 || l2(t2)));
}
function g2(t2) {
  for (const e6 in t2.typeMap) {
    if (!j2(t2.typeMap[e6])) return false;
  }
  return true;
}
function v2(t2) {
  let e6 = null;
  const n7 = t2.errorContext ?? "type", o7 = t2.validate;
  return (i5, u5, s7) => {
    if (null == i5) return i5;
    const y5 = typeof i5;
    if ("object" !== y5) return void p2().error(`Expected JSON value of type 'object' to deserialize, but got '${y5}'`);
    e6 || (e6 = b2(t2));
    const f6 = t2.key;
    if ("string" != typeof f6) return;
    const c6 = i5[A2(f6, e6, s7)], a9 = c6 ? e6[c6] : t2.defaultKeyValue ? t2.typeMap[t2.defaultKeyValue] : void 0;
    if (!a9) {
      const t3 = `Type '${c6 || "unknown"}' is not supported`;
      return (s7 == null ? void 0 : s7.messages) && i5 && s7.messages.push(new s3(`${n7}:unsupported`, t3, { definition: i5, context: s7 })), void p2().error(t3);
    }
    const d3 = new a9();
    return d3.read(i5, s7), o7 ? o7(d3) : d3;
  };
}
function A2(t2, e6, r5) {
  var _a;
  const o7 = Object.values(e6)[0], p6 = r2(o7.prototype)[t2], u5 = i3(p6, r5), s7 = (_a = u5 == null ? void 0 : u5.read) == null ? void 0 : _a.source;
  return s7 && "string" == typeof s7 ? s7 : t2;
}
function b2(t2) {
  var _a, _b;
  const e6 = {};
  for (const r5 in t2.typeMap) {
    const o7 = t2.typeMap[r5], i5 = r2(o7.prototype);
    if ("function" == typeof t2.key) continue;
    const p6 = i5[t2.key];
    if (!p6) continue;
    if (((_a = p6.json) == null ? void 0 : _a.type) && Array.isArray(p6.json.type) && 1 === p6.json.type.length && "string" == typeof p6.json.type[0]) {
      e6[p6.json.type[0]] = o7;
      continue;
    }
    const u5 = (_b = p6.json) == null ? void 0 : _b.write;
    if (!(u5 == null ? void 0 : u5.writer)) {
      e6[r5] = o7;
      continue;
    }
    const s7 = u5.target, y5 = "string" == typeof s7 ? s7 : t2.key, f6 = {};
    u5.writer(r5, f6, y5), f6[y5] && (e6[f6[y5]] = o7);
  }
  return e6;
}

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/shorthands.js
function e5(e6) {
  if (e6.json || (e6.json = {}), o5(e6.json), n4(e6.json), r4(e6.json), e6.json.origins) for (const t2 in e6.json.origins) o5(e6.json.origins[t2]), n4(e6.json.origins[t2]), r4(e6.json.origins[t2]);
  return true;
}
function r4(e6) {
  e6.name && (e6.read && "object" == typeof e6.read ? void 0 === e6.read.source && (e6.read.source = e6.name) : e6.read = { source: e6.name }, e6.write && "object" == typeof e6.write ? void 0 === e6.write.target && (e6.write.target = e6.name) : e6.write = { target: e6.name });
}
function o5(e6) {
  "boolean" == typeof e6.read ? e6.read = { enabled: e6.read } : "function" == typeof e6.read ? e6.read = { enabled: true, reader: e6.read } : e6.read && "object" == typeof e6.read && void 0 === e6.read.enabled && (e6.read.enabled = true);
}
function n4(e6) {
  "boolean" == typeof e6.write ? e6.write = { enabled: e6.write } : "function" == typeof e6.write ? e6.write = { enabled: true, writer: e6.write } : e6.write && "object" == typeof e6.write && void 0 === e6.write.enabled && (e6.write.enabled = true);
}

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/writer.js
function i4(r5, e6) {
  if (!e6.write || e6.write.writer || false === e6.write.enabled && !e6.write.overridePolicy) return;
  const t2 = (r5 == null ? void 0 : r5.ndimArray) ?? 0;
  r5 && (1 === t2 || "type" in r5 && e4(r5.type)) ? e6.write.writer = a6 : t2 > 1 ? e6.write.writer = l3(t2) : e6.types ? Array.isArray(e6.types) ? e6.write.writer = f3(e6.types[0]) : e6.write.writer = o6(e6.types) : e6.write.writer = s5;
}
function o6(r5) {
  return (e6, t2, n7, i5) => e6 ? u4(e6, r5, i5) ? s5(e6, t2, n7, i5) : void 0 : s5(e6, t2, n7, i5);
}
function u4(t2, n7, i5) {
  for (const r5 in n7.typeMap) if (t2 instanceof n7.typeMap[r5]) return true;
  if (i5 == null ? void 0 : i5.messages) {
    const o7 = n7.errorContext ?? "type", u5 = `Values of type '${("function" != typeof n7.key ? t2[n7.key] : t2.declaredClass) ?? "Unknown"}' cannot be written`;
    i5 && i5.messages && t2 && i5.messages.push(new s(`${o7}:unsupported`, u5, { definition: t2, context: i5 })), i.getLogger("esri.core.accessorSupport.extensions.serializableProperty.writer").error(u5);
  }
  return false;
}
function f3(r5) {
  return (e6, t2, n7, i5) => {
    if (!e6 || !Array.isArray(e6)) return s5(e6, t2, n7, i5);
    return s5(e6.filter((e7) => u4(e7, r5, i5)), t2, n7, i5);
  };
}
function s5(r5, e6, n7, i5) {
  e(n7, p3(r5, i5), e6);
}
function p3(r5, e6) {
  return r5 && "function" == typeof r5.write ? r5.write({}, e6) : r5 && "function" == typeof r5.toJSON ? r5.toJSON() : "number" == typeof r5 ? y3(r5) : r5;
}
function y3(r5) {
  return r5 === -1 / 0 ? -Number.MAX_VALUE : r5 === 1 / 0 ? Number.MAX_VALUE : isNaN(r5) ? null : r5;
}
function a6(r5, e6, n7, i5) {
  let o7;
  null === r5 ? o7 = null : r5 && "function" == typeof r5.map ? (o7 = r5.map((r6) => p3(r6, i5)), "function" == typeof o7.toArray && (o7 = o7.toArray())) : o7 = [p3(r5, i5)], e(n7, o7, e6);
}
function c4(r5, e6, t2) {
  return 0 !== t2 && Array.isArray(r5) ? r5.map((r6) => c4(r6, e6, t2 - 1)) : p3(r5, e6);
}
function l3(r5) {
  return (e6, n7, i5, o7) => {
    let u5;
    if (null === e6) u5 = null;
    else {
      u5 = c4(e6, o7, r5);
      let t2 = r5, n8 = u5;
      for (; t2 > 0 && Array.isArray(n8); ) t2--, n8 = n8[0];
      if (void 0 !== n8) for (let r6 = 0; r6 < t2; r6++) u5 = [u5];
    }
    e(i5, u5, n7);
  };
}

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty.js
function s6(r5) {
  var _a;
  const e6 = n5(r5);
  if (r5.json.origins) for (const o7 in r5.json.origins) {
    const s7 = r5.json.origins[o7], n7 = s7.types ? p4(s7) : e6;
    u3(n7, s7, false), s7.types && !s7.write && ((_a = r5.json.write) == null ? void 0 : _a.enabled) && (s7.write = { ...r5.json.write }), i4(n7, s7);
  }
  u3(e6, r5.json, true), i4(e6, r5.json);
}
function n5(r5) {
  return r5.json.types ? a7(r5.json) : r5.type ? y4(r5) : a7(r5);
}
function p4(r5) {
  return r5.type ? y4(r5) : a7(r5);
}
function y4(e6) {
  if (!e6.type) return;
  let t2 = 0, o7 = e6.type;
  for (; Array.isArray(o7) && !N(o7); ) o7 = o7[0], t2++;
  return { type: o7, ndimArray: t2 };
}
function a7(r5) {
  if (!r5.types) return;
  let e6 = 0, t2 = r5.types;
  for (; Array.isArray(t2); ) t2 = t2[0], e6++;
  return { types: t2, ndimArray: e6 };
}
function f4(r5) {
  e5(r5) && (n2(r5), s6(r5));
}

// node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var n6 = /* @__PURE__ */ new Set();
var c5 = /* @__PURE__ */ new Set();
function a8(e6) {
  return (s7) => {
    e6 ?? (e6 = "esri.core.Accessor"), s7.prototype.declaredClass = e6, p5(s7);
    const i5 = [], a9 = [];
    let l5 = s7.prototype;
    for (; l5; ) l5.hasOwnProperty("initialize") && !n6.has(l5.initialize) && (n6.add(l5.initialize), i5.push(l5.initialize)), l5.hasOwnProperty("destroy") && !c5.has(l5.destroy) && (c5.add(l5.destroy), a9.push(l5.destroy)), l5 = Object.getPrototypeOf(l5);
    n6.clear(), c5.clear();
    const f6 = class extends s7 {
      constructor(...e7) {
        if (super(...e7), this.constructor === f6 && "function" == typeof this.postscript) {
          if (i5.length && Object.defineProperty(this, "initialize", { enumerable: false, configurable: true, value() {
            for (let e8 = i5.length - 1; e8 >= 0; e8--) i5[e8].call(this);
          } }), a9.length) {
            let e8 = false;
            const o7 = this[o2];
            Object.defineProperty(this, "destroy", { enumerable: false, configurable: true, value() {
              if (!e8) {
                this.__accessor__.lifecycle = I.DESTROYING, e8 = true, o7.call(this);
                for (let e9 = 0; e9 < a9.length; e9++) a9[e9].call(this);
              }
            } });
          }
          Object.defineProperty(this, Symbol.dispose, { enumerable: false, configurable: true, value() {
            this.destroy();
          } }), this.postscript();
        }
      }
    };
    f6.__accessorMetadata__ = r2(s7.prototype), f6.prototype.declaredClass = e6;
    const u5 = (e6 || "AccessorSubclass").split(".").slice(-1)[0];
    return Object.defineProperty(f6, "name", { value: u5, configurable: true }), f6;
  };
}
function l4(e6, t2) {
  return null == t2.get ? function() {
    const t3 = this.__accessor__, r5 = t3.propertiesByName.get(e6);
    if (void 0 === r5) return;
    t3.mutable && a2(r5);
    const o7 = t3.store;
    return o7.has(e6) ? o7.get(e6) : r5.metadata.value;
  } : function() {
    const t3 = this.__accessor__, r5 = t3.propertiesByName.get(e6);
    if (void 0 !== r5) return r5.getComputed(t3);
  };
}
function p5(e6) {
  const t2 = e6.prototype, s7 = r2(t2), n7 = {};
  for (const o7 of Object.getOwnPropertyNames(s7)) {
    const e7 = s7[o7];
    f4(e7), n7[o7] = { enumerable: true, configurable: true, get: l4(o7, e7), set(t3) {
      const s8 = this.__accessor__;
      if (void 0 !== s8) {
        if (s8.mutable) return s8.initialized && e7.readOnly ? f5("read-only", o7) : s8.lifecycle === I.CONSTRUCTED && e7.constructOnly ? f5("construct-only", o7) : void s8.set(o7, t3);
      } else Object.defineProperty(this, o7, { enumerable: true, configurable: true, writable: true, value: t3 });
    } };
  }
  Object.defineProperties(e6.prototype, n7);
}
var f5 = (t2, r5) => {
  i.getLogger("esri.core.Accessor").error(`cannot assign to ${t2} property '${r5}'`);
};

export {
  o2 as o,
  r2 as r,
  o3 as o2,
  c2 as c,
  u2 as u,
  a3 as a,
  s2 as s,
  i2 as i,
  m,
  w,
  A,
  $,
  k,
  M,
  N,
  T,
  S,
  x,
  D,
  _,
  B,
  C,
  s3 as s2,
  n3 as n,
  i3 as i2,
  r3 as r2,
  s4 as s3,
  y3 as y,
  a8 as a2
};
//# sourceMappingURL=chunk-HPSHCA6S.js.map
