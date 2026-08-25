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

// node_modules/@esri/calcite-components/dist/components/calcite-tip-group/customElement.js
var styles = css`:host{--calcite-internal-color-focus: var( --calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)) )}:host{box-sizing:border-box;display:block;background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-2)}::slotted(calcite-tip){margin:0;border-style:none;max-inline-size:var(--calcite-tip-max-width)}:host([hidden]){display:none}[hidden]{display:none}`;
var _TipGroup = class _TipGroup extends LitElement {
  load() {
    logger.deprecated("component", {
      name: "tip-group",
      removalVersion: 4,
      suggested: ["carousel", "carousel-item"]
    });
  }
  render() {
    return html`<slot></slot>`;
  }
};
_TipGroup.properties = { groupTitle: 1 };
_TipGroup.styles = styles;
var TipGroup = _TipGroup;
customElement("calcite-tip-group", TipGroup);
export {
  TipGroup
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-tip-group/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.3.3 *)
*/
//# sourceMappingURL=customElement-VZ5FPZLT.js.map
