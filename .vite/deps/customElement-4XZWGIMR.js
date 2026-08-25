import {
  OPACITY_LIMITS,
  alphaToOpacity,
  color_default,
  hexChar,
  hexify,
  isLonghandHex,
  isShorthandHex,
  isValidHex,
  normalizeHex,
  opacityToAlpha,
  rgbToHex
} from "./chunk-5VCKF7KK.js";
import "./chunk-QMDTZUMI.js";
import {
  keyed
} from "./chunk-RWBLUXRJ.js";
import {
  useSetFocus
} from "./chunk-JP2VXTRR.js";
import "./chunk-ROLWNMK2.js";
import "./chunk-PZ74COWN.js";
import "./chunk-VYH67NUG.js";
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

// node_modules/@esri/calcite-components/dist/components/calcite-color-picker-hex-input/customElement.js
var CSS = {
  container: "container",
  hexInput: "hex-input",
  opacityInput: "opacity-input"
};
var styles = css`:host{--calcite-internal-color-focus: var( --calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)) )}.hex-input{--calcite-input-text-background-color: var(--calcite-color-picker-input-background-color);--calcite-input-text-border-color: var(--calcite-color-picker-input-border-color);--calcite-input-text-text-color: var(--calcite-color-picker-input-text-color);--calcite-input-prefix-background-color: var(--calcite-color-picker-input-prefix-background-color);--calcite-input-prefix-text-color: var(--calcite-color-picker-input-prefix-text-color)}.opacity-input{--calcite-input-number-background-color: var(--calcite-color-picker-input-background-color);--calcite-input-number-border-color: var(--calcite-color-picker-input-border-color);--calcite-input-number-text-color: var(--calcite-color-picker-input-text-color);--calcite-input-suffix-background-color: var(--calcite-color-picker-input-suffix-background-color);--calcite-input-suffix-text-color: var(--calcite-color-picker-input-suffix-text-color)}:host{display:block}.container{display:flex;inline-size:100%;flex-wrap:nowrap;align-items:center}.hex-input{flex-grow:1;text-transform:uppercase}.opacity-input{inline-size:100px;margin-inline-start:-1px}:host([hidden]){display:none}[hidden]{display:none}`;
var DEFAULT_COLOR = color_default();
var _ColorPickerHexInput = class _ColorPickerHexInput extends LitElement {
  constructor() {
    super(...arguments);
    this.hexInputRef = createRef();
    this.opacityInputRef = createRef();
    this.focusSetter = useSetFocus()(this);
    this.internalColor = DEFAULT_COLOR;
    this.alphaChannel = false;
    this.allowEmpty = false;
    this.hexLabel = "Hex";
    this.scale = "m";
    this.value = normalizeHex(hexify(DEFAULT_COLOR, this.alphaChannel), this.alphaChannel, true);
    this.calciteColorPickerHexInputChange = createEvent({ cancelable: false });
  }
  async setFocus(options) {
    return this.focusSetter(() => this.hexInputRef.value, options);
  }
  connectedCallback() {
    super.connectedCallback();
    this.previousNonNullValue = this.value;
    const { allowEmpty, alphaChannel, value } = this;
    if (value) {
      const normalized = normalizeHex(value, alphaChannel);
      if (isValidHex(normalized, alphaChannel)) {
        this.internalSetValue(normalized, normalized, false);
      }
      return;
    }
    if (allowEmpty) {
      this.internalSetValue(void 0, void 0, false);
    }
  }
  willUpdate(changes) {
    if (changes.has("value") && (this.hasUpdated || this.value !== normalizeHex(hexify(DEFAULT_COLOR, this.alphaChannel), this.alphaChannel, true))) {
      this.internalSetValue(this.value, changes.get("value"), false);
    }
  }
  onHexInputBlur() {
    const node = this.hexInputRef.value;
    const inputValue = node.value;
    const hex = `#${inputValue}`;
    const { allowEmpty, internalColor } = this;
    const willClearValue = allowEmpty && !inputValue;
    const isLonghand = isLonghandHex(hex);
    const anyShorthand = isShorthandHex(hex, true) || isShorthandHex(hex, false);
    if (anyShorthand) {
      this.onHexInputChange();
    }
    if (willClearValue || isValidHex(hex) && isLonghand) {
      return;
    }
    node.value = allowEmpty && !internalColor ? "" : this.formatHexForInternalInput(rgbToHex(
      // always display hex input in RRGGBB format
      internalColor.object()
    ));
  }
  onOpacityInputBlur() {
    const node = this.opacityInputRef.value;
    const inputValue = node.value;
    const { allowEmpty, internalColor } = this;
    const willClearValue = allowEmpty && !inputValue;
    if (willClearValue) {
      return;
    }
    node.value = allowEmpty && !internalColor ? "" : this.formatOpacityForInternalInput(internalColor);
  }
  onOpacityInputInput() {
    this.onOpacityInputChange();
  }
  onHexInputChange() {
    const nodeValue = this.hexInputRef.value.value;
    let value = nodeValue;
    if (value) {
      const normalized = normalizeHex(value, false);
      const preserveExistingAlpha = isValidHex(normalized) && this.alphaChannel;
      if (preserveExistingAlpha && this.internalColor) {
        const alphaHex = normalizeHex(this.internalColor.hexa(), true).slice(-2);
        value = `${normalized + alphaHex}`;
      }
    }
    this.internalSetValue(value, this.value);
  }
  onOpacityInputChange() {
    var _a;
    const node = this.opacityInputRef.value;
    let value;
    if (!node.value) {
      value = node.value;
    } else {
      const alpha = opacityToAlpha(Number(node.value));
      value = (_a = this.internalColor) == null ? void 0 : _a.alpha(alpha).hexa();
    }
    this.internalSetValue(value, this.value);
  }
  onInputFocus(event) {
    const focusTarget = event.type === "calciteInternalInputTextFocus" ? this.hexInputRef : this.opacityInputRef;
    focusTarget.value.selectText();
  }
  onHexInputInput() {
    const hexInputValue = `#${this.hexInputRef.value.value}`;
    const oldValue = this.value;
    if (isValidHex(hexInputValue, this.alphaChannel) && isLonghandHex(hexInputValue, this.alphaChannel)) {
      this.internalSetValue(hexInputValue, oldValue);
    }
  }
  onInputKeyDown(event) {
    const { altKey, ctrlKey, metaKey, shiftKey } = event;
    const { alphaChannel, hexInputRef, internalColor, value } = this;
    const { key } = event;
    const composedPath = event.composedPath();
    if (key === "Tab" && isShorthandHex(value, this.alphaChannel) || key === "Enter") {
      if (composedPath.includes(hexInputRef.value)) {
        this.onHexInputChange();
      } else {
        this.onOpacityInputChange();
      }
      if (key === "Enter") {
        event.preventDefault();
      }
      return;
    }
    const isNudgeKey = key === "ArrowDown" || key === "ArrowUp";
    const oldValue = this.value;
    if (isNudgeKey) {
      if (!value) {
        this.internalSetValue(this.previousNonNullValue, oldValue);
        event.preventDefault();
        return;
      }
      const direction = key === "ArrowUp" ? 1 : -1;
      const bump = shiftKey ? 10 : 1;
      this.internalSetValue(hexify(this.nudgeRGBChannels(internalColor, bump * direction, composedPath.includes(hexInputRef.value) ? "rgb" : "a"), alphaChannel), oldValue);
      event.preventDefault();
      return;
    }
    const withModifiers = altKey || ctrlKey || metaKey;
    const singleChar = key.length === 1;
    const validHexChar = hexChar.test(key);
    if (singleChar && !withModifiers && !validHexChar) {
      event.preventDefault();
    }
  }
  onHexInputPaste(event) {
    const hex = event.clipboardData.getData("text");
    if (isValidHex(hex, this.alphaChannel) && isLonghandHex(hex, this.alphaChannel)) {
      event.preventDefault();
      this.hexInputRef.value.value = hex.slice(1);
      this.internalSetValue(hex, this.value);
    }
  }
  internalSetValue(value, oldValue, emit = true) {
    if (value) {
      const { alphaChannel } = this;
      const normalized = normalizeHex(value, alphaChannel, alphaChannel);
      if (isValidHex(normalized, alphaChannel)) {
        const { internalColor: currentColor } = this;
        const nextColor = color_default(normalized);
        const normalizedLonghand = normalizeHex(hexify(nextColor, alphaChannel), alphaChannel);
        const changed = !currentColor || normalizedLonghand !== normalizeHex(hexify(currentColor, alphaChannel), alphaChannel);
        this.internalColor = nextColor;
        this.previousNonNullValue = normalizedLonghand;
        this.value = normalizedLonghand;
        if (changed && emit) {
          this.calciteColorPickerHexInputChange.emit();
        }
        return;
      }
    } else if (this.allowEmpty) {
      this.internalColor = void 0;
      this.value = void 0;
      if (emit) {
        this.calciteColorPickerHexInputChange.emit();
      }
      return;
    }
    this.value = oldValue;
  }
  formatHexForInternalInput(hex) {
    return hex ? hex.replace("#", "").slice(0, 6) : "";
  }
  formatOpacityForInternalInput(color) {
    return color ? `${alphaToOpacity(color.alpha())}` : "";
  }
  nudgeRGBChannels(color, amount, context) {
    let nudgedChannels;
    const channels = color.array();
    const rgbChannels = channels.slice(0, 3);
    if (context === "rgb") {
      const nudgedRGBChannels = rgbChannels.map((channel) => channel + amount);
      nudgedChannels = [
        ...nudgedRGBChannels,
        this.alphaChannel ? channels[3] : void 0
      ];
    } else {
      const nudgedAlpha = opacityToAlpha(alphaToOpacity(color.alpha()) + amount);
      nudgedChannels = [...rgbChannels, nudgedAlpha];
    }
    return color_default(nudgedChannels);
  }
  render() {
    const { alphaChannel, hexLabel, internalColor, messages, scale, value } = this;
    const hexInputValue = this.formatHexForInternalInput(value);
    const opacityInputValue = this.formatOpacityForInternalInput(internalColor);
    const inputScale = scale === "l" ? "m" : "s";
    return html`<div class=${safeClassMap(CSS.container)}><calcite-input-text class=${safeClassMap(CSS.hexInput)} .label=${(messages == null ? void 0 : messages.hex) || hexLabel} .maxLength=${this.alphaChannel ? 8 : 6} @keydown=${this.onInputKeyDown} @paste=${this.onHexInputPaste} @calciteInputTextChange=${this.onHexInputChange} @calciteInputTextInput=${this.onHexInputInput} @calciteInternalInputTextBlur=${this.onHexInputBlur} @calciteInternalInputTextFocus=${this.onInputFocus} prefix-text=# .scale=${inputScale} .value=${hexInputValue} ${ref(this.hexInputRef)}></calcite-input-text>${alphaChannel ? keyed("opacity-input", html`<calcite-input-number class=${safeClassMap(CSS.opacityInput)} .label=${messages == null ? void 0 : messages.opacity} .max=${OPACITY_LIMITS.max} max-length=3 .min=${OPACITY_LIMITS.min} number-button-type=none .numberingSystem=${this.numberingSystem} @keydown=${this.onInputKeyDown} @calciteInputNumberInput=${this.onOpacityInputInput} @calciteInternalInputNumberBlur=${this.onOpacityInputBlur} @calciteInternalInputNumberFocus=${this.onInputFocus} .scale=${inputScale} suffix-text=% .value=${opacityInputValue} ${ref(this.opacityInputRef)}></calcite-input-number>`) : null}</div>`;
  }
};
_ColorPickerHexInput.properties = { internalColor: [16, {}, { state: true }], alphaChannel: [5, {}, { type: Boolean }], allowEmpty: [5, {}, { type: Boolean }], hexLabel: 1, messages: [0, {}, { attribute: false }], numberingSystem: 1, scale: [3, {}, { reflect: true }], value: [3, {}, { reflect: true }] };
_ColorPickerHexInput.styles = styles;
var ColorPickerHexInput = _ColorPickerHexInput;
customElement("calcite-color-picker-hex-input", ColorPickerHexInput);
export {
  ColorPickerHexInput
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-color-picker-hex-input/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.3.3 *)
*/
//# sourceMappingURL=customElement-4XZWGIMR.js.map
