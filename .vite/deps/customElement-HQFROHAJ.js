import {
  InteractiveContainer,
  updateHostInteraction
} from "./chunk-D6C7BWBR.js";
import {
  createObserver
} from "./chunk-IYWUU57N.js";
import {
  focusElementInGroup
} from "./chunk-VYH67NUG.js";
import "./chunk-OOFWE7NV.js";
import {
  LitElement,
  createEvent,
  css,
  customElement,
  html,
  ref,
  safeClassMap
} from "./chunk-L7EQWDU5.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@esri/calcite-components/dist/components/calcite-tile-group/customElement.js
var CSS = {
  container: "container"
};
var styles = css`:host{--calcite-internal-color-focus: var( --calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)) )}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{box-sizing:border-box;display:inline-block}:host ::slotted(calcite-tile){margin-block-end:var(--calcite-spacing-px);margin-inline-end:var(--calcite-spacing-px)}.container{display:grid;grid-auto-rows:minmax(auto,1fr)}:host([scale=s]) .container{grid-template-columns:repeat(auto-fit,minmax(100px,1fr))}:host([scale=m]) .container{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}:host([scale=l]) .container{grid-template-columns:repeat(auto-fit,minmax(160px,1fr))}:host([layout=vertical]) .container{display:flex;flex-direction:column}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`;
var _TileGroup = class _TileGroup extends LitElement {
  constructor() {
    super();
    this.items = [];
    this.mutationObserver = createObserver("mutation", () => this.updateTiles());
    this.alignment = "start";
    this.disabled = false;
    this.layout = "horizontal";
    this.scale = "m";
    this.selectedItems = [];
    this.selectionAppearance = "icon";
    this.selectionMode = "none";
    this.calciteTileGroupSelect = createEvent({ cancelable: false });
    this.listen("calciteInternalTileKeyEvent", this.calciteInternalTileKeyEventListener);
    this.listen("calciteTileSelect", this.calciteTileSelectHandler);
  }
  connectedCallback() {
    var _a;
    super.connectedCallback();
    (_a = this.mutationObserver) == null ? void 0 : _a.observe(this.el, { childList: true });
    this.updateTiles();
  }
  willUpdate(changes) {
    if (changes.has("scale") && (this.hasUpdated || this.scale !== "m") || changes.has("selectionMode") && (this.hasUpdated || this.selectionMode !== "none") || changes.has("selectionAppearance") && (this.hasUpdated || this.selectionAppearance !== "icon")) {
      this.updateTiles();
    }
  }
  updated() {
    updateHostInteraction(this);
  }
  loaded() {
    this.updateSelectedItems();
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback();
    (_a = this.mutationObserver) == null ? void 0 : _a.disconnect();
  }
  getSlottedTiles() {
    var _a;
    return (_a = this.slotEl) == null ? void 0 : _a.assignedElements({ flatten: true }).filter((el) => el == null ? void 0 : el.matches("calcite-tile"));
  }
  selectItem(item) {
    var _a;
    if (!item) {
      return;
    }
    (_a = this.items) == null ? void 0 : _a.forEach((el) => {
      const matchingEl = item === el;
      switch (this.selectionMode) {
        case "multiple":
          if (matchingEl) {
            el.selected = !el.selected;
          }
          break;
        case "single":
          el.selected = matchingEl && !el.selected;
          break;
        case "single-persist":
          el.selected = !!matchingEl;
          break;
      }
    });
    this.updateSelectedItems();
    this.calciteTileGroupSelect.emit();
  }
  setSlotEl(el) {
    this.slotEl = el;
  }
  updateSelectedItems() {
    var _a, _b;
    const selectedItems = (_a = this.items) == null ? void 0 : _a.filter((el) => el.selected);
    if ((this.selectionMode === "single" || this.selectionMode === "single-persist") && (selectedItems == null ? void 0 : selectedItems.length) > 1) {
      this.selectedItems = [selectedItems.pop()];
      (_b = this.items) == null ? void 0 : _b.forEach((el) => {
        if (this.selectedItems.indexOf(el) === -1) {
          el.selected = false;
        }
      });
    } else {
      this.selectedItems = selectedItems ?? [];
    }
  }
  updateTiles() {
    var _a;
    this.items = this.getSlottedTiles();
    (_a = this.items) == null ? void 0 : _a.forEach((el) => {
      el.alignment = this.alignment;
      el.interactive = true;
      el.layout = this.layout;
      el.scale = this.scale;
      el.selectionAppearance = this.selectionAppearance;
      el.selectionMode = this.selectionMode;
    });
    this.updateSelectedItems();
  }
  calciteInternalTileKeyEventListener(event) {
    var _a;
    if (event.composedPath().includes(this.el)) {
      event.preventDefault();
      event.stopPropagation();
      const interactiveItems = (_a = this.items) == null ? void 0 : _a.filter((el) => !el.disabled);
      switch (event.detail.key) {
        case "ArrowDown":
        case "ArrowRight":
          focusElementInGroup(interactiveItems, event.detail.target, "next", true, false);
          break;
        case "ArrowUp":
        case "ArrowLeft":
          focusElementInGroup(interactiveItems, event.detail.target, "previous", true, false);
          break;
        case "Home":
          focusElementInGroup(interactiveItems, event.detail.target, "first", true, false);
          break;
        case "End":
          focusElementInGroup(interactiveItems, event.detail.target, "last", true, false);
          break;
      }
    }
  }
  calciteTileSelectHandler(event) {
    if (event.composedPath().includes(this.el)) {
      this.selectItem(event.target);
    }
  }
  render() {
    const role = this.selectionMode === "none" || this.selectionMode === "multiple" ? "group" : "radiogroup";
    return InteractiveContainer({ disabled: this.disabled, children: html`<div .ariaLabel=${this.label} class=${safeClassMap(CSS.container)} .role=${role}><slot @slotchange=${this.updateTiles} ${ref(this.setSlotEl)}></slot></div>` });
  }
};
_TileGroup.properties = { alignment: [3, {}, { reflect: true }], disabled: [7, {}, { reflect: true, type: Boolean }], label: 1, layout: [3, {}, { reflect: true }], scale: [3, {}, { reflect: true }], selectedItems: [0, {}, { attribute: false }], selectionAppearance: [3, {}, { reflect: true }], selectionMode: [3, {}, { reflect: true }] };
_TileGroup.styles = styles;
var TileGroup = _TileGroup;
customElement("calcite-tile-group", TileGroup);
export {
  TileGroup
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-tile-group/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.3.3 *)
*/
//# sourceMappingURL=customElement-HQFROHAJ.js.map
