import {
  keyed
} from "./chunk-RWBLUXRJ.js";
import {
  getIconScale
} from "./chunk-ROLWNMK2.js";
import {
  html,
  nothing,
  ref,
  safeClassMap
} from "./chunk-L7EQWDU5.js";

// node_modules/@esri/calcite-components/dist/chunks/XButton.js
var CSS = {
  button: "x-button",
  buttonRound: "x-button--round"
};
var XButton = ({ disabled, focusable, key, label, onClick, ref: ref$1, round = true, scale, title }) => keyed(key, html`<button .ariaLabel=${label} class=${safeClassMap({
  [((scale2) => `x-button--${scale2}`)(scale)]: true,
  [CSS.button]: true,
  [CSS.buttonRound]: round
})} .disabled=${disabled} @click=${onClick} .tabIndex=${focusable ? 0 : -1} title=${title ?? nothing} type=button ${ref(ref$1)}><calcite-icon icon=x .scale=${getIconScale(scale)}></calcite-icon></button>`);

export {
  CSS,
  XButton
};
/*! Bundled license information:

@esri/calcite-components/dist/chunks/XButton.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.3.3 *)
*/
//# sourceMappingURL=chunk-R3Z5EHQ7.js.map
