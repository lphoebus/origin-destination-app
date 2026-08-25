import {
  LitElement,
  createEvent,
  css,
  customElement,
  html
} from "./chunk-L7EQWDU5.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@esri/calcite-components/dist/components/calcite-option-group/customElement.js
var styles = css`:host{--calcite-internal-color-focus: var( --calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)) )}:host{display:block}:host([hidden]){display:none}[hidden]{display:none}`;
var _OptionGroup = class _OptionGroup extends LitElement {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.calciteInternalOptionGroupChange = createEvent({ cancelable: false });
  }
  willUpdate(changes) {
    if (changes.has("disabled") && (this.hasUpdated || this.disabled !== false) || changes.has("label")) {
      this.calciteInternalOptionGroupChange.emit();
    }
  }
  render() {
    return html`<div>${this.label}</div><slot></slot>`;
  }
};
_OptionGroup.properties = { disabled: [7, {}, { reflect: true, type: Boolean }], label: 1 };
_OptionGroup.styles = styles;
var OptionGroup = _OptionGroup;
customElement("calcite-option-group", OptionGroup);
export {
  OptionGroup
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-option-group/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.3.3 *)
*/
//# sourceMappingURL=customElement-JSGG55EP.js.map
