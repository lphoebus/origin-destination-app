import {
  filter
} from "./chunk-ESUMWDOK.js";
import {
  useCancelable
} from "./chunk-5DUBQEXE.js";
import {
  debounce
} from "./chunk-CV3WX3PG.js";
import {
  InteractiveContainer,
  updateHostInteraction
} from "./chunk-D6C7BWBR.js";
import {
  useSetFocus
} from "./chunk-JP2VXTRR.js";
import {
  useT9n
} from "./chunk-LNCDDHBA.js";
import {
  DEBOUNCE,
  LitElement,
  createEvent,
  createRef,
  css,
  customElement,
  html,
  ref,
  safeClassMap
} from "./chunk-L7EQWDU5.js";

// node_modules/@esri/calcite-components/dist/components/calcite-filter/customElement.js
var CSS = {
  container: "container"
};
var ICONS = {
  search: "search"
};
var styles = css`:host{--calcite-internal-color-focus: var( --calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)) )}:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;inline-size:100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{display:flex;inline-size:100%}:host([scale=s]) .container{padding:var(--calcite-filter-content-space, var(--calcite-spacing-sm))}:host([scale=m]) .container{padding:var(--calcite-filter-content-space, var(--calcite-spacing-md))}:host([scale=l]) .container{padding:var(--calcite-filter-content-space, var(--calcite-spacing-lg))}label{position:relative;margin-block:0px;display:flex;inline-size:100%;align-items:center;overflow:hidden}calcite-input{inline-size:100%;--calcite-input-background-color: var(--calcite-filter-input-background-color);--calcite-input-border-color: var(--calcite-filter-input-border-color);--calcite-input-corner-radius: var(--calcite-filter-input-corner-radius);--calcite-input-shadow: var(--calcite-filter-input-shadow);--calcite-input-icon-color: var(--calcite-filter-input-icon-color);--calcite-input-text-color: var(--calcite-filter-input-text-color);--calcite-input-placeholder-text-color: var(--calcite-filter-input-placeholder-text-color);--calcite-input-actions-background-color: var(--calcite-filter-input-actions-background-color);--calcite-input-actions-background-color-hover: var(--calcite-filter-input-actions-background-color-hover);--calcite-input-actions-background-color-press: var(--calcite-filter-input-actions-background-color-press);--calcite-input-actions-icon-color: var(--calcite-filter-input-actions-icon-color);--calcite-input-actions-icon-color-hover: var(--calcite-filter-input-actions-icon-color-hover);--calcite-input-actions-icon-color-press: var(--calcite-filter-input-actions-icon-color-press)}:host([hidden]){display:none}[hidden]{display:none}`;
var _Filter = class _Filter extends LitElement {
  constructor() {
    super(...arguments);
    this.cancelable = useCancelable()(this);
    this.filterDebounced = debounce((value, emit = false, onFilter) => this.updateFiltered(filter(this.items ?? [], value, this.filterProps), emit, onFilter), DEBOUNCE.filter);
    this.textInput = createRef();
    this._value = "";
    this.messages = useT9n();
    this.focusSetter = useSetFocus()(this);
    this.disabled = false;
    this.filteredItems = [];
    this.items = [];
    this.scale = "m";
    this.calciteFilterChange = createEvent({ cancelable: false });
  }
  get value() {
    return this._value;
  }
  set value(value) {
    const oldValue = this._value;
    if (value !== oldValue) {
      this._value = value;
      this.valueHandler(value);
    }
  }
  async filter(value = this.value) {
    return new Promise((resolve) => {
      this.value = value;
      this.updateFiltered(filter(this.items ?? [], value, this.filterProps), false, resolve);
    });
  }
  async setFocus(options) {
    return this.focusSetter(() => {
      return this.textInput.value;
    }, options);
  }
  connectedCallback() {
    super.connectedCallback();
    this.cancelable.add(this.filterDebounced);
  }
  async load() {
    this.updateFiltered(filter(this.items ?? [], this.value, this.filterProps));
  }
  willUpdate(changes) {
    var _a;
    if (changes.has("items") && (this.hasUpdated || ((_a = this.items) == null ? void 0 : _a.length) > 0) || changes.has("filterProps")) {
      this.filterDebounced(this.value);
    }
  }
  updated() {
    updateHostInteraction(this);
  }
  valueHandler(value) {
    this.filterDebounced(value);
  }
  inputHandler(event) {
    const target = event.target;
    this.value = target.value;
    this.filterDebounced(target.value, true);
  }
  keyDownHandler(event) {
    if (event.defaultPrevented) {
      return;
    }
    if (event.key === "Escape") {
      this.clear();
      event.preventDefault();
    }
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }
  clear() {
    this.value = "";
    this.filterDebounced("", true);
    this.setFocus();
  }
  updateFiltered(filtered, emit = false, callback) {
    this.filteredItems = filtered;
    if (emit) {
      this.calciteFilterChange.emit();
    }
    callback == null ? void 0 : callback();
  }
  render() {
    const { disabled, scale } = this;
    return InteractiveContainer({ disabled, children: html`<div class=${safeClassMap(CSS.container)}><label><calcite-input clearable .disabled=${disabled} .icon=${ICONS.search} .label=${this.label ?? this.messages.label} .messageOverrides=${{ clear: this.messages.clear }} @keydown=${this.keyDownHandler} @calciteInputInput=${this.inputHandler} .placeholder=${this.placeholder} .scale=${scale} type=text .value=${this.value} ${ref(this.textInput)}></calcite-input></label></div>` });
  }
};
_Filter.properties = { disabled: [7, {}, { reflect: true, type: Boolean }], filterProps: [0, {}, { attribute: false }], filteredItems: [0, {}, { attribute: false }], items: [0, {}, { attribute: false }], label: 1, messageOverrides: [0, {}, { attribute: false }], placeholder: 1, scale: [3, {}, { reflect: true }], value: 1 };
_Filter.shadowRootOptions = { mode: "open", delegatesFocus: true };
_Filter.styles = styles;
var Filter = _Filter;
customElement("calcite-filter", Filter);

export {
  Filter
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-filter/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.3.3 *)
*/
//# sourceMappingURL=chunk-CFE5AKUE.js.map
