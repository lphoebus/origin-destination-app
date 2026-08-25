import {
  connectSortableComponent,
  disconnectSortableComponent
} from "./chunk-VCL2FB3U.js";
import {
  InteractiveContainer,
  updateHostInteraction
} from "./chunk-D6C7BWBR.js";
import {
  logger
} from "./chunk-PZ74COWN.js";
import {
  createObserver
} from "./chunk-IYWUU57N.js";
import {
  focusElement
} from "./chunk-VYH67NUG.js";
import "./chunk-OOFWE7NV.js";
import {
  LitElement,
  createEvent,
  css,
  customElement,
  html,
  safeClassMap
} from "./chunk-L7EQWDU5.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@esri/calcite-components/dist/components/calcite-sortable-list/customElement.js
var CSS = {
  container: "container",
  containerHorizontal: "container--horizontal",
  containerVertical: "container--vertical"
};
var styles = css`:host{--calcite-internal-color-focus: var( --calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)) )}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{display:flex;flex:1 1 auto}.container--vertical{flex-direction:column}.container--horizontal{flex-direction:row}:host([hidden]){display:none}[hidden]{display:none}`;
var _SortableList = class _SortableList extends LitElement {
  constructor() {
    super();
    this.dragEnabled = true;
    this.items = [];
    this.mutationObserver = createObserver("mutation", () => {
      this.setUpSorting();
    });
    this.disabled = false;
    this.handleSelector = "calcite-handle";
    this.layout = "vertical";
    this.loading = false;
    this.calciteListOrderChange = createEvent({ cancelable: false });
    this.listen("calciteHandleNudge", this.calciteHandleNudgeNextHandler);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setUpSorting();
    this.beginObserving();
  }
  load() {
    logger.deprecated("component", {
      name: "sortable-list",
      removalVersion: 4,
      suggested: "block-group"
    });
  }
  updated() {
    updateHostInteraction(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    disconnectSortableComponent(this);
    this.endObserving();
  }
  calciteHandleNudgeNextHandler(event) {
    this.handleNudgeEvent(event);
  }
  onGlobalDragStart() {
    this.endObserving();
  }
  onGlobalDragEnd() {
    this.beginObserving();
  }
  onDragEnd() {
  }
  onDragStart() {
  }
  onDragSort() {
    this.items = Array.from(this.el.children);
    this.calciteListOrderChange.emit();
  }
  handleNudgeEvent(event) {
    const { direction } = event.detail;
    const handle = event.composedPath().find((el) => el.matches(this.handleSelector));
    const sortItem = this.items.find((item) => {
      return item.contains(handle) || event.composedPath().includes(item);
    });
    const lastIndex = this.items.length - 1;
    const startingIndex = this.items.indexOf(sortItem);
    let appendInstead = false;
    let buddyIndex;
    if (direction === "up") {
      if (startingIndex === 0) {
        appendInstead = true;
      } else {
        buddyIndex = startingIndex - 1;
      }
    } else {
      if (startingIndex === lastIndex) {
        buddyIndex = 0;
      } else if (startingIndex === lastIndex - 1) {
        appendInstead = true;
      } else {
        buddyIndex = startingIndex + 2;
      }
    }
    this.endObserving();
    if (appendInstead) {
      sortItem.parentElement.appendChild(sortItem);
    } else {
      sortItem.parentElement.insertBefore(sortItem, this.items[buddyIndex]);
    }
    this.items = Array.from(this.el.children);
    this.beginObserving();
    requestAnimationFrame(() => focusElement(handle));
    if ("selected" in handle) {
      handle.selected = true;
    }
  }
  setUpSorting() {
    this.items = Array.from(this.el.children);
    connectSortableComponent(this);
  }
  beginObserving() {
    var _a;
    (_a = this.mutationObserver) == null ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
  }
  endObserving() {
    var _a;
    (_a = this.mutationObserver) == null ? void 0 : _a.disconnect();
  }
  render() {
    const { disabled, layout } = this;
    const horizontal = layout === "horizontal" || false;
    return InteractiveContainer({ disabled, children: html`<div class=${safeClassMap({
      [CSS.container]: true,
      [CSS.containerVertical]: !horizontal,
      [CSS.containerHorizontal]: horizontal
    })}><slot></slot></div>` });
  }
};
_SortableList.properties = { canPull: [0, {}, { attribute: false }], canPut: [0, {}, { attribute: false }], disabled: [7, {}, { reflect: true, type: Boolean }], dragSelector: [3, {}, { reflect: true }], group: [3, {}, { reflect: true }], handleSelector: [3, {}, { reflect: true }], layout: [3, {}, { reflect: true }], loading: [7, {}, { reflect: true, type: Boolean }] };
_SortableList.styles = styles;
var SortableList = _SortableList;
customElement("calcite-sortable-list", SortableList);
export {
  SortableList
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-sortable-list/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.3.3 *)
*/
//# sourceMappingURL=customElement-CJIIKR2V.js.map
