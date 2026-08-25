import {
  c
} from "./chunk-NJ2KBGD4.js";
import {
  AccessorController,
  getAccessorControllerBoundProperties,
  makeBinderProxy
} from "./chunk-C7LETAUT.js";
import {
  proxyExports
} from "./chunk-SZNNI5VM.js";
import {
  getControllersCount,
  isEsriInternalEnv,
  trackPropKey
} from "./chunk-L7EQWDU5.js";
import {
  l
} from "./chunk-DLX5DTNB.js";
import {
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet
} from "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/map-components/dist/chunks/useWidget.js
var I = (d, e) => (t) => C(t, d);
var _o, _e, _t, _p_instances, i_fn, s_fn, n_fn;
var p = class extends AccessorController {
  constructor(e, t) {
    var _a;
    super(e, t);
    __privateAdd(this, _p_instances);
    __privateAdd(this, _o, /* @__PURE__ */ new Map());
    __privateAdd(this, _e);
    __privateAdd(this, _t);
    new c(e);
    const i = this, o = i.instance;
    let n = o.viewModel, l2 = o.visibleElements;
    const r = new Proxy(this.exports, {
      get(s, c2, h) {
        return c2 === "viewModel" ? n : c2 === "visibleElements" ? l2 : Reflect.get(s, c2, h);
      }
    });
    if (__privateSet(i, _t, o), i.instance = r, i.exports = r, n) {
      const s = {
        component: e,
        get exports() {
          return i.instance.viewModel;
        }
      };
      getAccessorControllerBoundProperties(i).set("viewModel", "viewModel"), e.addController(s), n = makeBinderProxy(e, new WeakRef(s), getControllersCount(e) - 1, n, __privateGet(i, _o));
    }
    i.instance.visibleElements && (l2 = __privateMethod(_a = i, _p_instances, i_fn).call(_a, o));
  }
  hostConnected() {
    this.instance = __privateGet(this, _t), super.hostConnected();
  }
  hostLoad() {
    __privateSet(this, _e, l(() => this.component.el.view, (e) => {
      const t = this.instance;
      !("view" in t) && typeof t.viewModel == "object" ? t.viewModel.view = e : t.view = e, !("map" in t) && typeof t.viewModel == "object" ? t.viewModel.map = e == null ? void 0 : e.map : t.map = e == null ? void 0 : e.map;
    }, { sync: true, initial: true }));
  }
  hostUpdate(e) {
    e.has("closed") && (this.instance.visible = !this.component.closed);
  }
  hostLoaded() {
    const { el: e } = this.component;
    e.childElem ?? (e.childElem = document.createElement("div")), this.instance.container = e.childElem, (this.component.el.shadowRoot ?? this.component.el).appendChild(this.instance.container), this.component.closed !== void 0 && this.onLifecycle(() => l(() => this.instance.visible, (i) => this.component.closed = !i, { initial: true }));
  }
  hostDestroy() {
    var _a;
    (_a = __privateGet(this, _e)) == null ? void 0 : _a.remove(), super.hostDestroy();
  }
};
_o = new WeakMap();
_e = new WeakMap();
_t = new WeakMap();
_p_instances = new WeakSet();
i_fn = function(e) {
  return new Proxy(e.visibleElements, {
    get: (t, i) => {
      if (typeof i == "symbol" || i in Promise.prototype)
        return t[i];
      const o = [i], n = __privateMethod(this, _p_instances, s_fn).call(this, o);
      return trackPropKey(this.component, (l2) => {
        const r = l2;
        this.component[r] = false;
        let s = e.visibleElements ?? {}, c2;
        for (const a of o.slice(0, -1))
          if (typeof s[a] == "object" && s[a] !== null)
            s = s[a];
          else {
            c2 = !!s[a];
            break;
          }
        c2 === void 0 && (c2 = !!(s[o.slice(-1)[0]] ?? true));
        const f = r.startsWith("hide") || r.startsWith("show") ? r.startsWith("hide") : c2;
        this.onUpdate((a) => {
          if (a.has(r)) {
            const u = this.component[r];
            __privateMethod(this, _p_instances, n_fn).call(this, o, u, f);
          }
        });
      }, n);
    }
  });
};
s_fn = function(e) {
  const t = new Proxy({}, {
    get: (i, o) => {
      const n = Reflect.get(i, o);
      return typeof o == "symbol" || o in Promise.prototype ? n : (e.push(o), t);
    }
  });
  return t;
};
n_fn = function(e, t, i) {
  let o = this.instance.visibleElements ?? {};
  for (const l2 of e.slice(0, -1))
    (typeof o[l2] != "object" || o[l2] === null) && (o[l2] = {}), o = o[l2];
  const n = !!(i ? !t : t);
  o[e.at(-1)] = n;
};
isEsriInternalEnv() && (p.devOnly$allowedPropNameMismatches = /* @__PURE__ */ new Set([
  "manager",
  "el",
  "position",
  "multipleSortEnabled",
  // Deprecated
  "focusTrapEnabled",
  "focusTrapDisabled",
  // Deprecated
  "hideLastEditInfo"
]));
var C = proxyExports(p);

export {
  I
};
/*! Bundled license information:

@arcgis/map-components/dist/chunks/useWidget.js:
  (*! All material copyright Esri, All Rights Reserved, unless otherwise specified.
  See https://js.arcgis.com/4.34/esri/copyright.txt for details.
  v4.34.1 *)
*/
//# sourceMappingURL=chunk-TC7AOQMQ.js.map
