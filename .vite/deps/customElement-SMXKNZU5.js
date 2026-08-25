import {
  InteractiveContainer,
  updateHostInteraction
} from "./chunk-D6C7BWBR.js";
import {
  logger
} from "./chunk-PZ74COWN.js";
import {
  LitElement,
  css,
  customElement,
  html
} from "./chunk-L7EQWDU5.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@esri/calcite-components/dist/components/calcite-tile-select-group/customElement.js
var styles = css`:host{--calcite-internal-color-focus: var( --calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)) )}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-wrap:wrap}:host ::slotted(calcite-tile-select){margin-block-end:1px;margin-inline-end:1px}:host([layout=vertical]){flex-direction:column}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`;
var _TileSelectGroup = class _TileSelectGroup extends LitElement {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.layout = "horizontal";
  }
  load() {
    logger.deprecated("component", {
      name: "tile-select-group",
      removalVersion: 4,
      suggested: ["tile", "tile-group"]
    });
  }
  updated() {
    updateHostInteraction(this);
  }
  render() {
    return InteractiveContainer({ disabled: this.disabled, children: html`<slot></slot>` });
  }
};
_TileSelectGroup.properties = { disabled: [7, {}, { reflect: true, type: Boolean }], layout: [3, {}, { reflect: true }] };
_TileSelectGroup.styles = styles;
var TileSelectGroup = _TileSelectGroup;
customElement("calcite-tile-select-group", TileSelectGroup);
export {
  TileSelectGroup
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-tile-select-group/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.3.3 *)
*/
//# sourceMappingURL=customElement-SMXKNZU5.js.map
