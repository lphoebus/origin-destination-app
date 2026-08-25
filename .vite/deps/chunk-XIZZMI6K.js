import {
  c
} from "./chunk-NJ2KBGD4.js";
import {
  html,
  unsafeStatic
} from "./chunk-O4SR2QJI.js";
import {
  AccessorController,
  m
} from "./chunk-C7LETAUT.js";
import {
  makeT9nController,
  proxyExports
} from "./chunk-SZNNI5VM.js";
import {
  classes
} from "./chunk-XFVNPLUN.js";
import {
  isEsriInternalEnv,
  nothing2 as nothing,
  safeClassMap
} from "./chunk-L7EQWDU5.js";
import {
  l
} from "./chunk-DLX5DTNB.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet
} from "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/map-components/dist/chunks/useT9n.js
var s = makeT9nController(m);

// node_modules/@arcgis/map-components/dist/chunks/useViewModel.js
var v = (t, o) => (e2) => a(e2, t);
var _o;
var r = class extends AccessorController {
  constructor(o, e2) {
    super(o, e2);
    __privateAdd(this, _o);
    new c(this.component);
  }
  hostLoad() {
    __privateSet(this, _o, l(
      () => this.component.el.view,
      (o) => {
        this.instance.view = o, this.instance.map = o == null ? void 0 : o.map;
      },
      { sync: true, initial: true }
    ));
  }
  hostDestroy() {
    var _a;
    (_a = __privateGet(this, _o)) == null ? void 0 : _a.remove(), super.hostDestroy();
  }
};
_o = new WeakMap();
isEsriInternalEnv() && (r.devOnly$allowedPropNameMismatches = /* @__PURE__ */ new Set(["manager", "el", "swipePosition"]));
var a = proxyExports(r);

// node_modules/@arcgis/map-components/dist/chunks/globalCss.js
var e = {
  disabled: "esri-disabled",
  empty: "esri-widget__content--empty",
  heading: "esri-widget__heading",
  loaderAnimation: "esri-widget__loader-animation",
  panel: "esri-widget--panel",
  widget: "esri-widget",
  widgetButton: "esri-widget--button",
  widgetDisabled: "esri-widget--disabled"
};

// node_modules/@arcgis/map-components/dist/chunks/heading.js
function v2({ level: a2, class: t, id: n, children: o, excludeGlobalCss: r2 }) {
  const e2 = u(a2), s2 = `h${e2}`, i = unsafeStatic(s2);
  return html`<${i} .ariaLevel=${String(e2)} class=${safeClassMap(classes(r2 ? t : e.heading, t))} id=${n ?? nothing} role=heading>${o}</${i}>`;
}
function h(a2, t, n) {
  return Math.min(Math.max(a2, t), n);
}
function u(a2) {
  return h(Math.ceil(a2), 1, 6);
}

export {
  s,
  v,
  e,
  v2
};
/*! Bundled license information:

@arcgis/map-components/dist/chunks/useT9n.js:
@arcgis/map-components/dist/chunks/useViewModel.js:
@arcgis/map-components/dist/chunks/globalCss.js:
@arcgis/map-components/dist/chunks/heading.js:
  (*! All material copyright Esri, All Rights Reserved, unless otherwise specified.
  See https://js.arcgis.com/4.34/esri/copyright.txt for details.
  v4.34.1 *)
*/
//# sourceMappingURL=chunk-XIZZMI6K.js.map
