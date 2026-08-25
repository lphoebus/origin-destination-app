import {
  connectSortableComponent,
  disconnectSortableComponent
} from "./chunk-VCL2FB3U.js";
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
import "./chunk-ROLWNMK2.js";
import "./chunk-PZ74COWN.js";
import {
  createObserver
} from "./chunk-IYWUU57N.js";
import {
  getRootNode,
  slotChangeGetAssignedElements
} from "./chunk-VYH67NUG.js";
import {
  guid
} from "./chunk-OOFWE7NV.js";
import "./chunk-SZNNI5VM.js";
import "./chunk-XFVNPLUN.js";
import {
  DEBOUNCE,
  LitElement,
  createEvent,
  css,
  customElement,
  html,
  safeClassMap
} from "./chunk-L7EQWDU5.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@esri/calcite-components/dist/components/calcite-block-group/customElement.js
function isBlock(element) {
  return element.tagName === "CALCITE-BLOCK";
}
var CSS = {
  container: "container",
  groupContainer: "group-container",
  scrim: "scrim",
  assistiveText: "assistive-text"
};
var blockGroupSelector = "calcite-block-group";
var blockSelector = "calcite-block";
var styles = css`:host{--calcite-internal-color-focus: var( --calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)) )}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}.container{position:relative}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`;
function updateBlockChildren(blockChildren) {
  blockChildren.forEach((block) => {
    block.setPosition = blockChildren.indexOf(block) + 1;
    block.setSize = blockChildren.length;
  });
}
var _BlockGroup = class _BlockGroup extends LitElement {
  constructor() {
    super();
    this.dragSelector = blockSelector;
    this.handleSelector = "calcite-sort-handle";
    this.mutationObserver = createObserver("mutation", () => {
      this.updateBlockItemsDebounced();
    });
    this.blockAndGroups = [];
    this.cancelable = useCancelable()(this);
    this.focusSetter = useSetFocus()(this);
    this.updateBlockItemsDebounced = debounce(this.updateBlockItems, DEBOUNCE.nextTick);
    this.sortHandleMenuItems = [];
    this.disabled = false;
    this.dragEnabled = false;
    this.loading = false;
    this.scale = "m";
    this.sortDisabled = false;
    this.calciteBlockGroupDragEnd = createEvent({ cancelable: false });
    this.calciteBlockGroupDragStart = createEvent({ cancelable: false });
    this.calciteBlockGroupOrderChange = createEvent({ cancelable: false });
    this.calciteBlockGroupMoveHalt = createEvent({ cancelable: false });
    this.listen("calciteInternalAssistiveTextChange", this.handleCalciteInternalAssistiveTextChange);
    this.listen("calciteBlockSortHandleBeforeOpen", this.updateBlockItemsDebounced);
    this.listen("calciteSortHandleReorder", this.handleSortReorder);
    this.listen("calciteSortHandleMove", this.handleSortMove);
    this.listen("calciteSortHandleAdd", this.handleSortAdd);
  }
  async setFocus(options) {
    return this.focusSetter(() => {
      return this.el;
    }, options);
  }
  emitOrderChangeEvent(detail) {
    this.calciteBlockGroupOrderChange.emit(detail);
  }
  connectedCallback() {
    super.connectedCallback();
    this.connectObserver();
    this.updateBlockItemsDebounced();
    this.setUpSorting();
    this.setParentBlockGroup();
    this.cancelable.add(this.updateBlockItemsDebounced);
  }
  willUpdate(changes) {
    if (changes.has("group") || changes.has("canPull") && this.hasUpdated || changes.has("canPut") && this.hasUpdated || changes.has("dragEnabled") && (this.hasUpdated || this.dragEnabled !== false) || changes.has("sortDisabled") && (this.hasUpdated || this.sortDisabled !== false)) {
      this.updateBlockItemsDebounced();
    }
    if (changes.has("scale") && this.hasUpdated) {
      this.updateBlockAndGroupScale();
    }
  }
  updated() {
    updateHostInteraction(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.disconnectObserver();
    disconnectSortableComponent(this);
  }
  updateBlockItems() {
    this.updateGroupItems();
    const { dragEnabled, el, sortDisabled, sortHandleMenuItems } = this;
    const items = Array.from(this.el.querySelectorAll(blockSelector));
    const fromEl = el;
    const fromElItems = Array.from(fromEl.children).filter(isBlock);
    items.forEach((item) => {
      if (item.closest(blockGroupSelector) === el) {
        item.moveToItems = sortHandleMenuItems.filter((moveToItem) => this.validateSortMenuItem({
          type: "move",
          fromEl,
          toEl: moveToItem.element,
          dragEl: item,
          newIndex: 0,
          oldIndex: fromElItems.indexOf(item)
        }));
        item.addToItems = this.sortHandleMenuItems.filter((moveToItem) => this.validateSortMenuItem({
          type: "add",
          fromEl,
          toEl: moveToItem.element,
          dragEl: item,
          newIndex: 0,
          oldIndex: fromElItems.indexOf(item)
        }));
        item.dragHandle = dragEnabled;
        item.sortDisabled = sortDisabled;
      }
    });
    this.setUpSorting();
  }
  updateGroupItems() {
    const { el, group } = this;
    const rootNode = getRootNode(el);
    const blockGroups = group ? Array.from(rootNode.querySelectorAll(`${blockGroupSelector}[group="${group}"]`)).filter((blockGroup) => !blockGroup.disabled && blockGroup.dragEnabled) : [];
    this.sortHandleMenuItems = blockGroups.map((element) => ({
      element,
      label: element.label ?? element.id,
      id: guid()
    }));
  }
  handleCalciteInternalAssistiveTextChange(event) {
    this.assistiveText = event.detail.message;
    event.stopPropagation();
  }
  handleSortReorder(event) {
    if (this.parentBlockGroupEl || event.defaultPrevented) {
      return;
    }
    event.preventDefault();
    this.handleReorder(event);
  }
  handleSortAdd(event) {
    if (this.parentBlockGroupEl || event.defaultPrevented) {
      return;
    }
    event.preventDefault();
    this.handleAdd(event);
  }
  handleSortMove(event) {
    if (this.parentBlockGroupEl || event.defaultPrevented) {
      return;
    }
    event.preventDefault();
    this.handleMove(event);
  }
  connectObserver() {
    var _a;
    (_a = this.mutationObserver) == null ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
  }
  disconnectObserver() {
    var _a;
    (_a = this.mutationObserver) == null ? void 0 : _a.disconnect();
  }
  setUpSorting() {
    const { dragEnabled } = this;
    if (!dragEnabled) {
      return;
    }
    connectSortableComponent(this);
  }
  onGlobalDragStart() {
    this.disconnectObserver();
  }
  onGlobalDragEnd() {
    this.connectObserver();
  }
  onDragEnd(detail) {
    this.calciteBlockGroupDragEnd.emit(detail);
  }
  onDragStart(detail) {
    detail.dragEl.sortHandleOpen = false;
    this.calciteBlockGroupDragStart.emit(detail);
  }
  onDragSort(detail) {
    this.setParentBlockGroup();
    this.updateBlockItemsDebounced();
    this.calciteBlockGroupOrderChange.emit(detail);
  }
  setParentBlockGroup() {
    var _a;
    this.parentBlockGroupEl = (_a = this.el.parentElement) == null ? void 0 : _a.closest(blockGroupSelector);
  }
  handleDefaultSlotChange(event) {
    const blockChildren = [];
    this.blockAndGroups = slotChangeGetAssignedElements(event).filter((el) => {
      if (el.matches(blockSelector)) {
        blockChildren.push(el);
      }
      return el.matches(blockSelector) || el.matches(blockGroupSelector);
    });
    updateBlockChildren(blockChildren);
    this.updateBlockAndGroupScale();
  }
  updateBlockAndGroupScale() {
    this.blockAndGroups.forEach((el) => {
      el.scale = this.scale;
    });
  }
  validateSortMenuItem({ fromEl, toEl, dragEl, newIndex, oldIndex, type }) {
    var _a, _b;
    if (!fromEl || !toEl || toEl === fromEl || dragEl.contains(toEl)) {
      return false;
    }
    const canPull = ((_a = fromEl.canPull) == null ? void 0 : _a.call(fromEl, {
      toEl,
      fromEl,
      dragEl,
      newIndex,
      oldIndex
    })) ?? true;
    const canPut = ((_b = toEl.canPut) == null ? void 0 : _b.call(toEl, {
      toEl,
      fromEl,
      dragEl,
      newIndex,
      oldIndex
    })) ?? true;
    return (type === "add" ? canPull === "clone" : canPull === true) && canPut;
  }
  handleAdd(event) {
    const { addTo } = event.detail;
    const dragEl = event.target;
    const fromEl = dragEl == null ? void 0 : dragEl.parentElement;
    const toEl = addTo.element;
    const fromElItems = Array.from(fromEl.children).filter(isBlock);
    const oldIndex = fromElItems.indexOf(dragEl);
    const newIndex = 0;
    if (!this.validateSortMenuItem({ type: "add", fromEl, toEl, dragEl, newIndex, oldIndex })) {
      return;
    }
    dragEl.sortHandleOpen = false;
    this.disconnectObserver();
    const newEl = dragEl.cloneNode();
    toEl.prepend(newEl);
    this.updateBlockItemsDebounced();
    this.connectObserver();
    const eventDetail = {
      dragEl,
      fromEl,
      toEl,
      newIndex,
      oldIndex
    };
    this.calciteBlockGroupOrderChange.emit(eventDetail);
    toEl.emitOrderChangeEvent(eventDetail);
  }
  handleMove(event) {
    const { moveTo } = event.detail;
    const dragEl = event.target;
    const fromEl = dragEl == null ? void 0 : dragEl.parentElement;
    const toEl = moveTo.element;
    const fromElItems = Array.from(fromEl.children).filter(isBlock);
    const oldIndex = fromElItems.indexOf(dragEl);
    const newIndex = 0;
    if (!this.validateSortMenuItem({ type: "move", fromEl, toEl, dragEl, newIndex, oldIndex })) {
      return;
    }
    dragEl.sortHandleOpen = false;
    this.disconnectObserver();
    toEl.prepend(dragEl);
    this.updateBlockItemsDebounced();
    this.connectObserver();
    const eventDetail = {
      dragEl,
      fromEl,
      toEl,
      newIndex,
      oldIndex
    };
    this.calciteBlockGroupOrderChange.emit(eventDetail);
    toEl.emitOrderChangeEvent(eventDetail);
  }
  handleReorder(event) {
    const { reorder } = event.detail;
    const dragEl = event.target;
    const parentEl = dragEl == null ? void 0 : dragEl.parentElement;
    if (!parentEl) {
      return;
    }
    dragEl.sortHandleOpen = false;
    const sameParentItems = Array.from(parentEl.children).filter(isBlock);
    const lastIndex = sameParentItems.length - 1;
    const oldIndex = sameParentItems.indexOf(dragEl);
    let newIndex = oldIndex;
    switch (reorder) {
      case "top":
        newIndex = 0;
        break;
      case "bottom":
        newIndex = lastIndex;
        break;
      case "up":
        newIndex = oldIndex === 0 ? 0 : oldIndex - 1;
        break;
      case "down":
        newIndex = oldIndex === lastIndex ? lastIndex : oldIndex + 1;
        break;
    }
    this.disconnectObserver();
    const referenceEl = reorder === "up" || reorder === "top" ? sameParentItems[newIndex] : sameParentItems[newIndex].nextSibling;
    parentEl.insertBefore(dragEl, referenceEl);
    this.updateBlockItemsDebounced();
    this.connectObserver();
    this.calciteBlockGroupOrderChange.emit({
      dragEl,
      fromEl: parentEl,
      toEl: parentEl,
      newIndex,
      oldIndex
    });
  }
  render() {
    const { loading, label } = this;
    return InteractiveContainer({ disabled: this.disabled, children: html`<div class=${safeClassMap(CSS.container)}>${this.dragEnabled ? html`<span aria-live=assertive class=${safeClassMap(CSS.assistiveText)}>${this.assistiveText}</span>` : null}${loading ? html`<calcite-scrim class=${safeClassMap(CSS.scrim)} .loading=${loading}></calcite-scrim>` : null}<div .ariaBusy=${loading} .ariaLabel=${label || ""} class=${safeClassMap(CSS.groupContainer)} role=group><slot @slotchange=${this.handleDefaultSlotChange}></slot></div></div>` });
  }
};
_BlockGroup.properties = { assistiveText: [16, {}, { state: true }], sortHandleMenuItems: [16, {}, { state: true }], canPull: [0, {}, { attribute: false }], canPut: [0, {}, { attribute: false }], disabled: [7, {}, { reflect: true, type: Boolean }], dragEnabled: [7, {}, { reflect: true, type: Boolean }], group: [3, {}, { reflect: true }], label: 1, loading: [7, {}, { reflect: true, type: Boolean }], scale: [3, {}, { reflect: true }], sortDisabled: [7, {}, { reflect: true, type: Boolean }] };
_BlockGroup.styles = styles;
var BlockGroup = _BlockGroup;
customElement("calcite-block-group", BlockGroup);
export {
  BlockGroup
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-block-group/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.3.3 *)
*/
//# sourceMappingURL=customElement-PUIMHTDJ.js.map
