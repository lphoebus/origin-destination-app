import {
  color_default,
  hexify
} from "./chunk-5VCKF7KK.js";
import "./chunk-QMDTZUMI.js";
import {
  keyed
} from "./chunk-RWBLUXRJ.js";
import {
  getModeName
} from "./chunk-VYH67NUG.js";
import "./chunk-OOFWE7NV.js";
import {
  LitElement,
  css,
  customElement,
  html,
  nothing,
  safeClassMap,
  svg
} from "./chunk-L7EQWDU5.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@esri/calcite-components/dist/components/calcite-color-picker-swatch/customElement.js
var CSS = {
  swatch: "swatch",
  noColorSwatch: "swatch--no-color",
  checker: "checker"
};
var COLORS = {
  borderLight: "rgba(0, 0, 0, 0.3)",
  borderDark: "rgba(255, 255, 255, 0.15)"
};
var checkerSquareSize = 4;
var CHECKER_DIMENSIONS = {
  squareSize: checkerSquareSize,
  size: checkerSquareSize * 2
};
var IDS = {
  checker: "checker",
  shape: "shape"
};
var styles = css`:host{--calcite-internal-color-focus: var( --calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)) )}:host{position:relative;display:inline-flex}:host([scale=s]){block-size:1.25rem;inline-size:1.25rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem}.swatch{overflow:hidden;block-size:inherit;inline-size:inherit}.swatch rect{transition-property:all;transition-duration:var(--calcite-animation-timing);transition-timing-function:cubic-bezier(.4,0,.2,1)}.swatch--no-color rect{fill:var(--calcite-color-foreground-1)}.swatch--no-color line{stroke:var(--calcite-color-status-danger)}.checker{fill:#cacaca}:host([hidden]){display:none}[hidden]{display:none}`;
var _ColorPickerSwatch = class _ColorPickerSwatch extends LitElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.scale = "m";
  }
  load() {
    this.handleColorChange(this.color);
  }
  willUpdate(changes) {
    if (changes.has("color")) {
      this.handleColorChange(this.color);
    }
  }
  handleColorChange(color) {
    this.internalColor = color ? color_default(color) : null;
  }
  render() {
    const isEmpty = !this.internalColor;
    const classes = {
      [CSS.swatch]: true,
      [CSS.noColorSwatch]: isEmpty
    };
    return html`<svg class=${safeClassMap(classes)} xmlns=http://www.w3.org/2000/svg>${this.renderSwatch()}</svg>`;
  }
  renderSwatch() {
    const { active, el, internalColor } = this;
    const borderRadius = active ? "100%" : "0";
    const theme = getModeName(el);
    const borderColor = theme === "light" ? COLORS.borderLight : COLORS.borderDark;
    const isEmpty = !internalColor;
    const commonSwatchProps = {
      height: "100%",
      rx: borderRadius,
      stroke: borderColor,
      strokeWidth: "2",
      width: "100%"
    };
    if (isEmpty) {
      return svg`<clipPath id=${IDS.shape}><rect height=100% rx=${borderRadius} width=100% /></clipPath>${this.renderSwatchRect({
        clipPath: `inset(0 round ${borderRadius})`,
        ...commonSwatchProps
      })}<line clip-path=url(#shape) stroke-width=3 x1=100% x2=0 y1=0 y2=100% />`;
    }
    const alpha = internalColor.alpha();
    const hex = hexify(internalColor);
    const hexa = hexify(internalColor, alpha < 1);
    return svg`<title>${hexa}</title><defs><pattern height=${CHECKER_DIMENSIONS.size} id=${IDS.checker} patternUnits=userSpaceOnUse width=${CHECKER_DIMENSIONS.size} x=0 y=0><rect class=${safeClassMap(CSS.checker)} height=${CHECKER_DIMENSIONS.squareSize} width=${CHECKER_DIMENSIONS.squareSize} x=0 y=0 /><rect class=${safeClassMap(CSS.checker)} height=${CHECKER_DIMENSIONS.squareSize} width=${CHECKER_DIMENSIONS.squareSize} x=${CHECKER_DIMENSIONS.squareSize} y=${CHECKER_DIMENSIONS.squareSize} /></pattern></defs>${this.renderSwatchRect({
      fill: "url(#checker)",
      rx: commonSwatchProps.rx,
      height: commonSwatchProps.height,
      width: commonSwatchProps.width
    })}${this.renderSwatchRect({
      clipPath: alpha < 1 ? "polygon(100% 0, 0 0, 0 100%)" : `inset(0 round ${borderRadius})`,
      fill: hex,
      ...commonSwatchProps
    })}${alpha < 1 ? this.renderSwatchRect({
      clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
      fill: hexa,
      key: "opacity-fill",
      ...commonSwatchProps
    }) : null}`;
  }
  renderSwatchRect({ clipPath, fill, height, key, rx, stroke, strokeWidth, width }) {
    return keyed(key, svg`<rect clip-path=${clipPath ?? nothing} fill=${fill ?? nothing} height=${height ?? nothing} rx=${rx ?? nothing} stroke=${stroke ?? nothing} stroke-width=${strokeWidth ?? nothing} width=${width ?? nothing} />`);
  }
};
_ColorPickerSwatch.properties = { active: [7, {}, { reflect: true, type: Boolean }], color: 1, scale: [3, {}, { reflect: true }] };
_ColorPickerSwatch.styles = styles;
var ColorPickerSwatch = _ColorPickerSwatch;
customElement("calcite-color-picker-swatch", ColorPickerSwatch);
export {
  ColorPickerSwatch
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-color-picker-swatch/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.3.3 *)
*/
//# sourceMappingURL=customElement-YMAU4ES5.js.map
