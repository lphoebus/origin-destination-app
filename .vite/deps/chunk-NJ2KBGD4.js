import {
  b
} from "./chunk-C7LETAUT.js";
import {
  proxyExports
} from "./chunk-SZNNI5VM.js";
import {
  GenericController
} from "./chunk-L7EQWDU5.js";
import {
  f
} from "./chunk-DLX5DTNB.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet
} from "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/map-components/dist/chunks/useView.js
var _e;
var c = class extends GenericController {
  constructor(e) {
    super(e);
    __privateAdd(this, _e);
    this.setProvisionalExports(void 0);
  }
  hostConnected() {
    this.component.manager.loadedCalled && b(this.component);
  }
  hostLoad() {
    this.component.manager.destroyed;
  }
  hostLoaded() {
    var _a;
    const { el: e } = this.component, n = ((_a = e.shadowRoot) == null ? void 0 : _a.firstElementChild) ?? e.firstElementChild ?? void 0;
    e.childElem ?? (e.childElem = n), __privateSet(this, _e, f(
      () => this.component.view != null,
      () => {
        this.component.arcgisReady.emit();
      },
      { once: true, initial: true, sync: true }
    )), e.isConnected && b(this.component);
  }
  hostDisconnected() {
    var _a, _b, _c2;
    typeof this.component.el.childElem == "object" && ((_b = (_a = this.component.view) == null ? void 0 : _a.ui) == null ? void 0 : _b.remove(this.component.el.childElem)), (_c2 = __privateGet(this, _e)) == null ? void 0 : _c2.remove();
  }
  hostUpdate(e) {
    e.has("position") && this.component.el.childElem != null && typeof this.component.position == "string" && b(this.component), e.has("referenceElement") && b(this.component);
  }
};
_e = new WeakMap();
var l = proxyExports(c);

export {
  c
};
/*! Bundled license information:

@arcgis/map-components/dist/chunks/useView.js:
  (*! All material copyright Esri, All Rights Reserved, unless otherwise specified.
  See https://js.arcgis.com/4.34/esri/copyright.txt for details.
  v4.34.1 *)
*/
//# sourceMappingURL=chunk-NJ2KBGD4.js.map
