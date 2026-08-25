import {
  CSS,
  SLOTS
} from "./chunk-OF4BJED2.js";
import {
  keyed
} from "./chunk-RWBLUXRJ.js";
import {
  slotChangeHasAssignedElement
} from "./chunk-VYH67NUG.js";
import {
  LitElement,
  css,
  customElement,
  html,
  safeClassMap
} from "./chunk-L7EQWDU5.js";

// node_modules/@esri/calcite-components/dist/components/calcite-stack/customElement.js
var styles = css`:host{--calcite-internal-color-focus: var( --calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)) )}:host([disabled]) .content{cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) .content *,:host([disabled]) .content ::slotted(*){pointer-events:none}:host{display:flex;flex:1 1 0%;flex-direction:column}.container{display:flex;flex:1 1 auto;align-items:stretch;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}.content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;font-size:var(--calcite-font-size--2);line-height:1.375;padding-inline:var(--calcite-stack-padding-inline, .75rem);padding-block:var(--calcite-stack-padding-block, .5rem)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:0 1 auto}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:.75rem;align-self:center}.actions-start,.actions-end,.content-start,.content-end{display:flex;align-items:center}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}:host([hidden]){display:none}[hidden]{display:none}`;
var _Stack = class _Stack extends LitElement {
  constructor() {
    super(...arguments);
    this.hasActionsEnd = false;
    this.hasActionsStart = false;
    this.hasContentEnd = false;
    this.hasContentStart = false;
    this.disabled = false;
  }
  handleActionsStartSlotChange(event) {
    this.hasActionsStart = slotChangeHasAssignedElement(event);
  }
  handleActionsEndSlotChange(event) {
    this.hasActionsEnd = slotChangeHasAssignedElement(event);
  }
  handleContentStartSlotChange(event) {
    this.hasContentStart = slotChangeHasAssignedElement(event);
  }
  handleContentEndSlotChange(event) {
    this.hasContentEnd = slotChangeHasAssignedElement(event);
  }
  renderActionsStart() {
    const { hasActionsStart } = this;
    return keyed("actions-start-container", html`<div class=${safeClassMap(CSS.actionsStart)} .hidden=${!hasActionsStart}><slot name=${SLOTS.actionsStart} @slotchange=${this.handleActionsStartSlotChange}></slot></div>`);
  }
  renderActionsEnd() {
    const { hasActionsEnd } = this;
    return keyed("actions-end-container", html`<div class=${safeClassMap(CSS.actionsEnd)} .hidden=${!hasActionsEnd}><slot name=${SLOTS.actionsEnd} @slotchange=${this.handleActionsEndSlotChange}></slot></div>`);
  }
  renderContentStart() {
    const { hasContentStart } = this;
    return html`<div class=${safeClassMap(CSS.contentStart)} .hidden=${!hasContentStart}><slot name=${SLOTS.contentStart} @slotchange=${this.handleContentStartSlotChange}></slot></div>`;
  }
  renderDefaultContent() {
    return html`<div class=${safeClassMap(CSS.content)}><slot></slot></div>`;
  }
  renderContentEnd() {
    const { hasContentEnd } = this;
    return html`<div class=${safeClassMap(CSS.contentEnd)} .hidden=${!hasContentEnd}><slot name=${SLOTS.contentEnd} @slotchange=${this.handleContentEndSlotChange}></slot></div>`;
  }
  render() {
    return html`<div class=${safeClassMap(CSS.container)}>${this.renderActionsStart()}${this.renderContentStart()}${this.renderDefaultContent()}${this.renderContentEnd()}${this.renderActionsEnd()}</div>`;
  }
};
_Stack.properties = { hasActionsEnd: [16, {}, { state: true }], hasActionsStart: [16, {}, { state: true }], hasContentEnd: [16, {}, { state: true }], hasContentStart: [16, {}, { state: true }], disabled: [7, {}, { reflect: true, type: Boolean }] };
_Stack.styles = styles;
var Stack = _Stack;
customElement("calcite-stack", Stack);

export {
  Stack
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-stack/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.3.3 *)
*/
//# sourceMappingURL=chunk-TVL7A5EW.js.map
