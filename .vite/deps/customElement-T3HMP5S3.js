import {
  InteractiveContainer,
  updateHostInteraction
} from "./chunk-D6C7BWBR.js";
import {
  useSetFocus
} from "./chunk-JP2VXTRR.js";
import "./chunk-ROLWNMK2.js";
import "./chunk-PZ74COWN.js";
import {
  focusElementInGroup,
  slotChangeGetAssignedElements
} from "./chunk-VYH67NUG.js";
import "./chunk-OOFWE7NV.js";
import "./chunk-SZNNI5VM.js";
import "./chunk-XFVNPLUN.js";
import {
  LitElement,
  createEvent,
  createRef,
  css,
  customElement,
  html,
  ref,
  safeClassMap
} from "./chunk-L7EQWDU5.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@esri/calcite-components/dist/components/calcite-swatch-group/customElement.js
var CSS = {
  container: "container"
};
var styles = css`:host{--calcite-internal-color-focus: var( --calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)) )}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.container{display:flex;flex-wrap:wrap;gap:var(--calcite-swatch-group-space, var(--calcite-spacing-sm))}:host([scale=s]) .container{gap:var(--calcite-swatch-group-space, var(--calcite-spacing-xs))}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`;
var _SwatchGroup = class _SwatchGroup extends LitElement {
  constructor() {
    super();
    this.items = [];
    this.slotRefEl = createRef();
    this.focusSetter = useSetFocus()(this);
    this.disabled = false;
    this.scale = "m";
    this.selectedItems = [];
    this.selectionMode = "none";
    this.calciteSwatchGroupSelect = createEvent({ cancelable: false });
    this.listen("calciteInternalSwatchKeyEvent", this.calciteInternalSwatchKeyEventListener);
    this.listen("calciteSwatchSelect", this.calciteSwatchSelectListener);
    this.listen("calciteInternalSwatchSelect", this.calciteInternalSwatchSelectListener);
    this.listen("calciteInternalSyncSelectedSwatches", this.calciteInternalSyncSelectedSwatches);
  }
  async setFocus(options) {
    return this.focusSetter(() => {
      return this.el;
    }, options);
  }
  willUpdate(changes) {
    if (changes.has("selectionMode") && (this.hasUpdated || this.selectionMode !== "none")) {
      this.updateItems();
    }
  }
  updated() {
    updateHostInteraction(this);
  }
  calciteInternalSwatchKeyEventListener(event) {
    var _a;
    if (event.composedPath().includes(this.el)) {
      const interactiveItems = (_a = this.items) == null ? void 0 : _a.filter((el) => !el.disabled);
      switch (event.detail.key) {
        case "ArrowRight":
          focusElementInGroup(interactiveItems, event.detail.target, "next");
          break;
        case "ArrowLeft":
          focusElementInGroup(interactiveItems, event.detail.target, "previous");
          break;
        case "Home":
          focusElementInGroup(interactiveItems, event.detail.target, "first");
          break;
        case "End":
          focusElementInGroup(interactiveItems, event.detail.target, "last");
          break;
      }
    }
    event.stopPropagation();
  }
  calciteSwatchSelectListener(event) {
    if (event.composedPath().includes(this.el)) {
      this.setSelectedItems(true, event.target);
    }
    event.stopPropagation();
  }
  calciteInternalSwatchSelectListener(event) {
    if (event.composedPath().includes(this.el)) {
      this.setSelectedItems(false, event.target);
    }
    event.stopPropagation();
  }
  calciteInternalSyncSelectedSwatches(event) {
    if (event.composedPath().includes(this.el)) {
      this.updateSelectedItems();
      if (this.selectionMode === "single" && this.selectedItems.length > 1) {
        this.setSelectedItems(false, event.target);
      }
    }
    event.stopPropagation();
  }
  updateItems(event) {
    var _a, _b, _c;
    const itemsFromSlot = (_a = this.slotRefEl.value) == null ? void 0 : _a.assignedElements({ flatten: true }).filter((el) => el == null ? void 0 : el.matches("calcite-swatch"));
    this.items = !event ? itemsFromSlot : slotChangeGetAssignedElements(event);
    if (((_b = this.items) == null ? void 0 : _b.length) < 1) {
      return;
    }
    (_c = this.items) == null ? void 0 : _c.forEach((el) => {
      el.interactive = true;
      el.scale = this.scale;
      el.selectionMode = this.selectionMode;
      el.parentSwatchGroup = this.el;
    });
    this.setSelectedItems(false);
  }
  updateSelectedItems() {
    var _a;
    this.selectedItems = (_a = this.items) == null ? void 0 : _a.filter((el) => el.selected);
  }
  setSelectedItems(emit, elToMatch) {
    var _a;
    if (elToMatch) {
      (_a = this.items) == null ? void 0 : _a.forEach((el) => {
        const matchingEl = elToMatch === el;
        switch (this.selectionMode) {
          case "multiple":
            if (matchingEl) {
              el.selected = !el.selected;
            }
            break;
          case "single":
            el.selected = matchingEl ? !el.selected : false;
            break;
          case "single-persist":
            el.selected = !!matchingEl;
            break;
        }
      });
    }
    this.updateSelectedItems();
    if (emit) {
      this.calciteSwatchGroupSelect.emit();
    }
  }
  render() {
    const role = this.selectionMode === "none" || this.selectionMode === "multiple" ? "group" : "radiogroup";
    const { disabled } = this;
    return InteractiveContainer({ disabled, children: html`<div .ariaLabel=${this.label} class=${safeClassMap(CSS.container)} .role=${role}><slot @slotchange=${this.updateItems} ${ref(this.slotRefEl)}></slot></div>` });
  }
};
_SwatchGroup.properties = { disabled: [7, {}, { reflect: true, type: Boolean }], label: 1, scale: [3, {}, { reflect: true }], selectedItems: [0, {}, { attribute: false }], selectionMode: [3, {}, { reflect: true }] };
_SwatchGroup.styles = styles;
var SwatchGroup = _SwatchGroup;
customElement("calcite-swatch-group", SwatchGroup);
export {
  SwatchGroup
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-swatch-group/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.3.3 *)
*/
//# sourceMappingURL=customElement-T3HMP5S3.js.map
