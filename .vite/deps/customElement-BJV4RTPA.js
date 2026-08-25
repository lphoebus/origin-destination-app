import {
  Validation
} from "./chunk-PFKOGVX4.js";
import {
  InternalLabel
} from "./chunk-W52ACYWZ.js";
import {
  connectLabel,
  disconnectLabel,
  getLabelText
} from "./chunk-NVYVFFMV.js";
import {
  HiddenFormInputSlot,
  afterConnectDefaultValueSet,
  connectForm,
  disconnectForm
} from "./chunk-UVUXPGAI.js";
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
  getElementDir,
  slotChangeGetAssignedElements
} from "./chunk-VYH67NUG.js";
import {
  useT9n
} from "./chunk-LNCDDHBA.js";
import "./chunk-OOFWE7NV.js";
import "./chunk-SZNNI5VM.js";
import "./chunk-XFVNPLUN.js";
import {
  LitElement,
  createEvent,
  css,
  customElement,
  html,
  isServer,
  nothing,
  safeClassMap,
  stringOrBoolean
} from "./chunk-L7EQWDU5.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@esri/calcite-components/dist/components/calcite-segmented-control/customElement.js
var CSS = {
  itemWrapper: "item-wrapper"
};
var IDS = {
  validationMessage: "segmentedControlValidationMessage"
};
var styles = css`:host{--calcite-internal-color-focus: var( --calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)) )}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column}.item-wrapper{display:flex;background-color:var(--calcite-color-foreground-1);inline-size:fit-content;outline:1px solid var(--calcite-segmented-control-border-color, var(--calcite-color-border-input));outline-offset:-1px}:host([appearance=outline])>.item-wrapper{background-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([layout=vertical])>.item-wrapper{flex-direction:column;align-items:flex-start;align-self:flex-start}:host([width=full])>.item-wrapper{inline-size:100%;min-inline-size:fit-content}:host([width=full])>.item-wrapper ::slotted(calcite-segmented-control-item){flex:1 1 auto}:host([width=full][layout=vertical])>.item-wrapper ::slotted(calcite-segmented-control-item){justify-content:flex-start}.internal-label-alignment--center{align-items:center}.internal-label-alignment--end{align-items:end}.internal-label--container{display:flex;justify-content:space-between;color:var(--calcite-color-text-1)}.internal-label-required--indicator{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-status-danger);padding-inline:var(--calcite-spacing-base)}.internal-label-required--indicator:hover{cursor:help}.internal-label--text{line-height:1}:host([scale=s]) .internal-label-spacing--bottom{margin-block-end:var(--calcite-spacing-xxs)}:host([scale=s]) .internal-label-spacing-inline--end{margin-inline-end:var(--calcite-spacing-sm)}:host([scale=s]) .internal-label-spacing-inline--start{margin-inline-start:var(--calcite-spacing-sm)}:host([scale=s]) .internal-label--text{font-size:var(--calcite-font-size--2)}:host([scale=m]) .internal-label-spacing--bottom{margin-block-end:var(--calcite-spacing-sm)}:host([scale=m]) .internal-label-spacing-inline--end{margin-inline-end:var(--calcite-spacing-sm)}:host([scale=m]) .internal-label-spacing-inline--start{margin-inline-start:var(--calcite-spacing-sm)}:host([scale=m]) .internal-label--text{font-size:var(--calcite-font-size--1)}:host([scale=l]) .internal-label-spacing--bottom{margin-block-end:var(--calcite-spacing-sm)}:host([scale=l]) .internal-label-spacing-inline--end{margin-inline-end:var(--calcite-spacing-md)}:host([scale=l]) .internal-label-spacing-inline--start{margin-inline-start:var(--calcite-spacing-md)}:host([scale=l]) .internal-label--text{font-size:var(--calcite-font-size-0)}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:.5rem}:host([scale=s]) .validation-container{padding-block-start:.25rem}::slotted(input[slot=hidden-form-input]){margin:0!important;opacity:0!important;outline:none!important;padding:0!important;position:absolute!important;inset:0!important;transform:none!important;-webkit-appearance:none!important;z-index:-1!important}:host([hidden]){display:none}[hidden]{display:none}`;
var _SegmentedControl = class _SegmentedControl extends LitElement {
  constructor() {
    super();
    this.items = [];
    this.messages = useT9n();
    this.focusSetter = useSetFocus()(this);
    this.appearance = "solid";
    this.disabled = false;
    this.layout = "horizontal";
    this.required = false;
    this.scale = "m";
    this.status = "idle";
    this.validity = {
      valid: false,
      badInput: false,
      customError: false,
      patternMismatch: false,
      rangeOverflow: false,
      rangeUnderflow: false,
      stepMismatch: false,
      tooLong: false,
      tooShort: false,
      typeMismatch: false,
      valueMissing: false
    };
    this.value = null;
    this.width = "auto";
    this.calciteSegmentedControlChange = createEvent({ cancelable: false });
    this.listen("calciteInternalSegmentedControlItemChange", this.handleSelected);
    this.listen("keydown", this.handleKeyDown);
    this.listen("click", this.handleClick);
  }
  async setFocus(options) {
    return this.focusSetter(() => {
      return this.selectedItem || this.items[0];
    }, options);
  }
  connectedCallback() {
    super.connectedCallback();
    connectLabel(this);
    connectForm(this);
  }
  willUpdate(changes) {
    if (changes.has("appearance") && (this.hasUpdated || this.appearance !== "solid") || changes.has("layout") && (this.hasUpdated || this.layout !== "horizontal") || changes.has("scale") && (this.hasUpdated || this.scale !== "m")) {
      this.handleItemPropChange();
    }
    if (changes.has("value") && (this.hasUpdated || this.value !== null)) {
      this.valueHandler(this.value);
    }
    if (changes.has("selectedItem")) {
      this.handleSelectedItemChange(this.selectedItem, changes.get("selectedItem"));
    }
  }
  updated() {
    updateHostInteraction(this);
  }
  loaded() {
    afterConnectDefaultValueSet(this, this.value);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    disconnectLabel(this);
    disconnectForm(this);
  }
  valueHandler(value) {
    const { items } = this;
    items.forEach((item) => item.checked = item.value === value);
  }
  handleSelectedItemChange(newItem, oldItem) {
    this.value = newItem == null ? void 0 : newItem.value;
    if (newItem === oldItem) {
      return;
    }
    const { items } = this;
    const match = items.filter((item) => item === newItem).pop();
    if (match) {
      this.selectItem(match);
    } else if (items[0]) {
      items[0].tabIndex = 0;
    }
  }
  handleClick(event) {
    if (this.disabled) {
      return;
    }
    if (event.target.localName === "calcite-segmented-control-item") {
      this.selectItem(event.target, true);
    }
  }
  handleSelected(event) {
    event.preventDefault();
    const el = event.target;
    if (el.checked) {
      this.selectItem(el);
    }
    event.stopPropagation();
  }
  handleKeyDown(event) {
    const keys = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", " "];
    const { key } = event;
    const { el, selectedItem } = this;
    if (keys.indexOf(key) === -1) {
      return;
    }
    let adjustedKey = key;
    if (getElementDir(el) === "rtl") {
      if (key === "ArrowRight") {
        adjustedKey = "ArrowLeft";
      }
      if (key === "ArrowLeft") {
        adjustedKey = "ArrowRight";
      }
    }
    const { items } = this;
    let selectedIndex = -1;
    items.forEach((item, index) => {
      if (item === selectedItem) {
        selectedIndex = index;
      }
    });
    switch (adjustedKey) {
      case "ArrowLeft":
      case "ArrowUp": {
        event.preventDefault();
        const previous = selectedIndex < 1 ? items[items.length - 1] : items[selectedIndex - 1];
        this.selectItem(previous, true);
        return;
      }
      case "ArrowRight":
      case "ArrowDown": {
        event.preventDefault();
        const next = selectedIndex === -1 ? items[1] : items[selectedIndex + 1] || items[0];
        this.selectItem(next, true);
        return;
      }
      case " ":
        event.preventDefault();
        this.selectItem(event.target, true);
        return;
      default:
        return;
    }
  }
  handleItemPropChange() {
    const { items } = this;
    items.forEach((item) => {
      item.appearance = this.appearance;
      item.layout = this.layout;
      item.scale = this.scale;
    });
  }
  handleSelectedItem() {
    const { items } = this;
    const lastChecked = items.filter((item) => item.checked).pop();
    if (lastChecked) {
      this.selectItem(lastChecked);
    } else if (items[0]) {
      items[0].tabIndex = 0;
    }
  }
  async handleDefaultSlotChange(event) {
    const items = slotChangeGetAssignedElements(event).filter((el) => el.matches("calcite-segmented-control-item"));
    await Promise.all(items.map((item) => item.componentOnReady()));
    this.items = items;
    this.handleSelectedItem();
    this.handleItemPropChange();
  }
  onLabelClick() {
    this.setFocus();
  }
  async selectItem(selected, emit = false) {
    if (selected === this.selectedItem) {
      return;
    }
    const { items } = this;
    let match = null;
    items.forEach((item) => {
      const matches = item === selected;
      if (matches && !item.checked || !matches && item.checked) {
        item.checked = matches;
      }
      item.tabIndex = matches ? 0 : -1;
      if (matches) {
        match = item;
      }
    });
    this.selectedItem = match;
    if (match && emit) {
      await this.updateComplete;
      this.calciteSegmentedControlChange.emit();
      if (!isServer) {
        match.focus();
      }
    }
  }
  render() {
    this.el.role = "radiogroup";
    return html`${this.labelText && InternalLabel({ labelText: this.labelText, onClick: this.onLabelClick, required: this.required, tooltipText: this.messages.required }) || ""}<div aria-errormessage=${IDS.validationMessage} aria-label=${getLabelText(this) ?? nothing} .ariaInvalid=${this.status === "invalid"} .ariaRequired=${this.required} class=${safeClassMap(CSS.itemWrapper)}>${InteractiveContainer({ disabled: this.disabled, children: html`<slot @slotchange=${this.handleDefaultSlotChange}></slot>${HiddenFormInputSlot({ component: this })}` })}</div>${this.validationMessage && this.status === "invalid" ? Validation({ icon: this.validationIcon, id: IDS.validationMessage, message: this.validationMessage, scale: this.scale, status: this.status }) : null}`;
  }
};
_SegmentedControl.properties = { appearance: [3, {}, { reflect: true }], disabled: [7, {}, { reflect: true, type: Boolean }], form: [3, {}, { reflect: true }], layout: [3, {}, { reflect: true }], labelText: 1, messageOverrides: [0, {}, { attribute: false }], name: [3, {}, { reflect: true }], required: [7, {}, { reflect: true, type: Boolean }], scale: [3, {}, { reflect: true }], selectedItem: [0, {}, { attribute: false }], status: [3, {}, { reflect: true }], validationIcon: [3, { converter: stringOrBoolean }, { reflect: true }], validationMessage: 1, validity: [0, {}, { attribute: false }], value: 1, width: [3, {}, { reflect: true }] };
_SegmentedControl.styles = styles;
var SegmentedControl = _SegmentedControl;
customElement("calcite-segmented-control", SegmentedControl);
export {
  SegmentedControl
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-segmented-control/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.3.3 *)
*/
//# sourceMappingURL=customElement-BJV4RTPA.js.map
