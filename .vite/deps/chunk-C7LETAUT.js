import {
  proxyExports
} from "./chunk-SZNNI5VM.js";
import {
  GenericController,
  createEventFactory,
  css,
  isEsriInternalEnv,
  makeRuntime,
  retrieveComponent,
  trackKey,
  trackPropKey
} from "./chunk-L7EQWDU5.js";
import {
  s as s2
} from "./chunk-VNR3A2IW.js";
import {
  a as a2,
  l
} from "./chunk-DLX5DTNB.js";
import {
  s3 as s
} from "./chunk-NVNJVVMF.js";
import {
  a,
  f
} from "./chunk-HQPAN4GW.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet
} from "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/map-components/dist/chunks/runtime.js
import "/Users/lau12100/Documents/Code Projects/origin-destination-app/node_modules/@arcgis/map-components/dist/cdn/main.css";

// node_modules/@arcgis/core/applications/Components/reactiveUtils.js
function s3() {
  return new s2();
}
function i(r4) {
  return new s(r4);
}
function a3(r4) {
  a(r4);
}
function p(r4, o5) {
  return f(r4, o5);
}

// node_modules/@arcgis/map-components/dist/chunks/runtime.js
var o = css`:host{display:block;box-sizing:border-box;*,*:before,*:after{box-sizing:inherit}}:host([hidden]){display:none}:host(:not(arcgis-basemap-gallery-item,arcgis-layer-list-item,arcgis-print-custom-text-elements,arcgis-print-dpi-input,arcgis-print-export-button,arcgis-print-exported-link,arcgis-print-exports-panel,arcgis-print-format-select,arcgis-print-layout-advanced-options,arcgis-print-layout-panel,arcgis-print-main-panel,arcgis-print-map-only-advanced-options,arcgis-print-map-only-panel,arcgis-print-out-spatial-reference-input,arcgis-print-preview-input,arcgis-print-scale-section,arcgis-print-template-select,arcgis-print-template-selector,arcgis-labeled-switch,arcgis-measurement-content,arcgis-version-management-service-item,arcgis-version-management-version-item,arcgis-version-management-version-list,arcgis-version-management-version-properties,arcgis-video-player-action-bar,arcgis-video-player-actions-group,arcgis-video-player-controls-group,arcgis-video-player-metadata,arcgis-video-player-settings,arcgis-video-player-slider)){font-family:var(--calcite-font-family)}`;
var e = makeRuntime({ defaultAssetPath: "https://js.arcgis.com/4.34/map-components/", hydratedAttribute: "hydrated", commonStyles: o });
var { customElement: l2, getAssetPath: m, setAssetPath: d } = e;
e.t = a3;
e.o = s3;
e.c = i;
e.r = p;

// node_modules/@arcgis/lumina/dist/controllers/accessor/index.js
var reEmitEvent = (getEventedAccessor, eventName) => {
  const component = retrieveComponent();
  const manager = component.manager;
  manager.onLoaded(() => manager.onLifecycle(() => a2(getEventedAccessor, eventName, emitter.emit)));
  const emitter = createEventFactory();
  if (isEsriInternalEnv()) {
    if (typeof emitter !== "object" || emitter === null || !("emit" in emitter) || typeof emitter.emit !== "function") {
      throw new Error(`Expected to find $createEvent static property on Lumina's LitElement`);
    }
  }
  return emitter;
};
var makeAccessorController = (createInstance, _options) => (component) => proxy(component, createInstance);
var _isInstanceOwner, _exportsObservable, _createInstance;
var AccessorController = class extends GenericController {
  constructor(component, createInstance) {
    super(component);
    __privateAdd(this, _isInstanceOwner);
    __privateAdd(this, _exportsObservable);
    __privateAdd(this, _createInstance);
    this.Y = /* @__PURE__ */ new Map();
    this.A = void 0;
    __privateSet(this, _exportsObservable, s3());
    const that = this;
    __privateSet(that, _createInstance, createInstance);
    that.Z();
    that.setProvisionalExports(
      makeBinderProxy(
        component,
        new WeakRef(that),
        component.M.length - 1,
        that.instance,
        that.Y
      ),
      false
    );
    trackPropKey(
      component,
      (resolved) => {
        if (resolved) {
          const handle = l(
            // If the property to which controller is assigned is public, the user may
            // manually create an accessor instance and assign it to this property
            // We pick it up and replace our created accessor instance with user's.
            () => component[resolved],
            (newInstance) => {
              if (newInstance === that.instance) {
                return;
              }
              const oldInstance = that.instance;
              that.exports = newInstance;
              that.instance = newInstance;
              that.Y.forEach(
                (propName, propertyName) => component.requestUpdate(propName, oldInstance[propertyName])
              );
              if (__privateGet(that, _isInstanceOwner)) {
                oldInstance.destroy();
              }
              __privateSet(that, _isInstanceOwner, false);
            },
            { sync: true }
          );
          that.onDestroy(handle.remove);
        }
      },
      that.exports
    );
  }
  get exports() {
    a3(__privateGet(this, _exportsObservable));
    return super.exports;
  }
  set exports(value) {
    super.exports = value;
    __privateGet(this, _exportsObservable).notify();
  }
  /** @private */
  Z() {
    var _a;
    const that = this;
    that.instance = "prototype" in __privateGet(that, _createInstance) && "declaredClass" in __privateGet(that, _createInstance).prototype ? new (__privateGet(that, _createInstance))() : __privateGet(_a = that, _createInstance).call(_a);
    __privateSet(that, _isInstanceOwner, true);
  }
  hostConnected() {
    this.exports = this.instance;
  }
  // FEATURE: is there a way to detect that accessor does not need to be destroyed?
  //   Is it possible to write accessors that don't need to be destroyed?
  hostDestroy() {
    var _a, _b;
    if (__privateGet(this, _isInstanceOwner)) {
      (_b = (_a = this.instance).destroy) == null ? void 0 : _b.call(_a);
    }
  }
};
_isInstanceOwner = new WeakMap();
_exportsObservable = new WeakMap();
_createInstance = new WeakMap();
var proxy = proxyExports(AccessorController);
var makeBinderProxy = (component, accessorControllerRef, accessorControllerIndex, instance, boundProperties) => new Proxy(instance, {
  get: (target, propertyName) => {
    const value = target[propertyName];
    if (
      // Possibly called by the JS engine
      typeof propertyName === "symbol" || // Already bound?
      boundProperties.has(propertyName)
    ) {
      return value;
    }
    const accessorController = component.M[accessorControllerIndex];
    accessorController.A = propertyName;
    return trackKey(
      component,
      (resolved) => {
        var _a;
        accessorController.A = void 0;
        if (resolved !== void 0) {
          const propName = resolved.key;
          boundProperties.set(propertyName, propName);
          const descriptor = component.constructor.getPropertyOptions(
            propName
          );
          if (isEsriInternalEnv()) {
            if (!(propertyName in instance)) {
              throw new Error(`"${propertyName}" does not exist on the accessor instance`);
            }
            const accessorController2 = component.M[accessorControllerIndex];
            if (descriptor.i !== void 0 && descriptor.i !== accessorControllerIndex) {
              console.error(component.M[descriptor.i], accessorController2);
              throw Error(
                `Expected property "${propName}" to be bound to the controller at index ${descriptor.i}, but tried to bind it to a controller at index ${accessorControllerIndex}. Double check whether you are calling useAccessor() conditionally in a way that is not supported.`
              );
            }
            if (accessorController2 !== accessorControllerRef.deref()) {
              console.error(accessorController2);
              throw Error(
                `Expected controller at index ${accessorControllerIndex} to be instance of useAccessor but it is not.`
              );
            }
            const isFlippingBoolean = resolved.key.toLowerCase().includes("disable");
            const collidesWithNativeProp = propertyName in HTMLElement.prototype;
            const collidesWithCustomProp = ((_a = accessorControllerRef.deref().constructor.devOnly$allowedPropNameMismatches) == null ? void 0 : _a.has(propName)) === true;
            if (resolved.key !== propertyName && !collidesWithNativeProp && !collidesWithCustomProp && !isFlippingBoolean) {
              throw new Error(
                `Tried to bind "${resolved == null ? void 0 : resolved.key}" property to "${propertyName.toString()}" - property names must match`
              );
            }
            if (!resolved.isReactive) {
              throw new Error(
                `For two-way binding with Accessor to work, the property on your component must have @property() or @state() decorator. "${propertyName.toString()}" has neither`
              );
            }
          }
          const shouldFlipBoolean = propertyName !== propName && propName.toLowerCase().includes("disable");
          watchBoundProperty(accessorControllerRef, descriptor, propertyName, propName, shouldFlipBoolean);
          if (descriptor.i === void 0) {
            bindPropToProperty(descriptor, accessorControllerIndex, propertyName, shouldFlipBoolean);
          }
        }
      },
      value
    );
  }
});
var watchBoundProperty = (controllerRef, descriptor, propertyName, propName, shouldFlipBoolean, _handle) => _handle = l(
  () => {
    const controller = controllerRef.deref();
    return controller === void 0 || controller.component.manager.destroyed ? _handle = _handle.remove() : controller.exports[propertyName];
  },
  (_, oldValue) => {
    if (!_handle) {
      return;
    }
    const component = controllerRef.deref().component;
    component == null ? void 0 : component.requestUpdate(propName, shouldFlipBoolean ? !oldValue : oldValue);
    descriptor.c = false;
  },
  // At present, since useAccessor initializes the Accessor instance without
  // any properties, it assumes that there is no need to do initial sync of
  // accessor properties to the component, especially since the component
  // setter always gets the newest value from the Accessor instance anyway.
  // We might wish to change that if view model is shared between multiple
  // components and has default value for some property. Even then, this issue
  // will only manifest itself in default value not being reflected to
  // attribute (). If fixing above becomes important, can do so by adding
  // `initial: true` here and updating the above code to only call .notify()
  // if hasChanged returns true (see reference implementation in
  // _handleInstanceChanged). Not doing so yet as it is an edge case that is
  // easy to work around and proper fix will add overhead to the startup of
  // each component.
  { sync: true }
);
var bindPropToProperty = (descriptor, accessorControllerIndex, propertyName, shouldFlipBoolean) => {
  descriptor.d.get = function() {
    var _a;
    const value = (_a = this.M[accessorControllerIndex]) == null ? void 0 : _a.exports[propertyName];
    return shouldFlipBoolean ? !value : value;
  };
  descriptor.d.set = function(newValue) {
    const accessorController = this.M[accessorControllerIndex];
    if (accessorController.A !== propertyName) {
      accessorController.exports[propertyName] = shouldFlipBoolean ? !newValue : newValue;
    }
  };
};
var getAccessorControllerBoundProperties = (controller) => controller.Y;
var reCreateAccessor = (instance, component) => {
  const accessorController = component.manager.useRefSync(instance);
  accessorController == null ? void 0 : accessorController.hostDestroy();
  accessorController == null ? void 0 : accessorController.Z();
  accessorController == null ? void 0 : accessorController.hostConnected();
  if (accessorController === void 0) {
    console.error("Unable to resolve the useAccessor controller from the provided value");
  }
};

// node_modules/@arcgis/map-components/dist/chunks/component-utils.js
var u = {
  "top-left": "top-left",
  "top-right": "top-right",
  "bottom-left": "bottom-left",
  "bottom-right": "bottom-right",
  "bottom-leading": "bottom-start",
  "bottom-trailing": "bottom-end",
  "top-leading": "top-start",
  "top-trailing": "top-end"
};
var g = ["manual"];
function b2(t) {
  t.el.childElem && (t.el.childElem.ownedBy = t.el), t.position && g.includes(t.position) ? t.el.removeAttribute("slot") : t.position && (t.el.slot = u[t.position]);
  const e2 = h2(t);
  if (!e2) {
    const i2 = v(t);
    if (!i2) {
      d2(t);
      return;
    }
    return f2(i2, t, true), i2;
  }
  return y(e2, t.el.parent) || (t.el.parent = e2, e2.localName === "arcgis-expand" ? E(e2, t) : e2.localName === "arcgis-placement" ? p3(e2, t) : f2(e2, t, false)), e2;
}
function h2({ el: t }) {
  for (let e2 = t.parentElement; e2; e2 = (e2 == null ? void 0 : e2.parentElement) ?? null) {
    if (a5.has(e2.localName))
      return e2;
    if ("ownedBy" in e2 && e2.ownedBy instanceof HTMLElement && a5.has(e2.ownedBy.localName))
      return e2.ownedBy;
  }
}
var a5 = /* @__PURE__ */ new Set([
  "arcgis-map",
  "arcgis-scene",
  "arcgis-link-chart",
  "arcgis-expand",
  "arcgis-placement"
]);
function y(t, e2) {
  if (t !== e2)
    return false;
  const i2 = t.localName;
  return i2 === "arcgis-expand" || i2 === "arcgis-placement";
}
function n2(t, e2, i2 = "arcgisReady") {
  const r4 = t;
  if (r4.view)
    e2(r4.view);
  else {
    let s5 = function(l3) {
      l3.target === t && (n2(t, e2, i2), t.removeEventListener(i2, s5));
    };
    t.addEventListener(i2, s5);
  }
}
var E = (t, e2) => n2(t, (i2) => {
  const r4 = o4(e2);
  e2.el.shadowRoot ? t.content = e2.el : e2.el.childElem && t.content != null && r4.append(e2.el.childElem), e2.el.view = i2;
});
var p3 = (t, e2) => n2(t, (i2) => {
  const r4 = o4(e2);
  e2.el.childElem && r4.append(e2.el.childElem), e2.el.view = i2;
});
var f2 = (t, e2, i2) => n2(
  t,
  (r4) => {
    i2 && d2(e2), e2.el.view = r4, e2.referenceElement = t;
  },
  "arcgisViewReadyChange"
);
function S(t, e2) {
  return e2 === void 0 || (t == null ? void 0 : t.targetGeometry) !== (e2 == null ? void 0 : e2.targetGeometry) || (t == null ? void 0 : t.rotation) !== (e2 == null ? void 0 : e2.rotation) || (t == null ? void 0 : t.scale) !== (e2 == null ? void 0 : e2.scale);
}
function T(t, e2) {
  return c(e2 == null ? void 0 : e2.center, t);
}
function c(t, e2) {
  if (typeof e2 == "string")
    return c(t, e2.split(",").map(Number));
  if (!t)
    return e2;
  if (Array.isArray(e2)) {
    const i2 = e2[0], r4 = e2[1], s5 = e2.length > 2 ? e2[2] : void 0;
    if (i2 !== t.longitude || r4 !== t.latitude || s5 !== t.z)
      return e2;
  } else if (e2 && !(t == null ? void 0 : t.equals(e2)))
    return e2;
}
function d2(t) {
  t.el.childElem && o4(t).append(t.el.childElem);
}
function o4(t) {
  return t.el.shadowRoot ?? t.el;
}
function v(t, e2) {
  const i2 = t.referenceElement;
  if (typeof i2 != "string")
    return i2 ?? void 0;
  const r4 = i2.includes("#") || i2.includes(".") || i2.includes("["), s5 = t.el.getRootNode();
  return (r4 ? void 0 : s5.querySelector(`#${i2}`)) ?? s5.querySelector(i2) ?? void 0;
}
var P = (t) => t.el.childElem;

export {
  l2 as l,
  m,
  reEmitEvent,
  makeAccessorController,
  AccessorController,
  makeBinderProxy,
  getAccessorControllerBoundProperties,
  reCreateAccessor,
  b2 as b,
  S,
  T,
  P
};
/*! Bundled license information:

@arcgis/map-components/dist/chunks/runtime.js:
@arcgis/map-components/dist/chunks/component-utils.js:
  (*! All material copyright Esri, All Rights Reserved, unless otherwise specified.
  See https://js.arcgis.com/4.34/esri/copyright.txt for details.
  v4.34.1 *)
*/
//# sourceMappingURL=chunk-C7LETAUT.js.map
