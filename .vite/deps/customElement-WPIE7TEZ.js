import {
  ExpandToggle,
  toggleChildActionText
} from "./chunk-CXLYJR2X.js";
import "./chunk-5U7MEVLS.js";
import "./chunk-FMO33YBG.js";
import {
  useSetFocus
} from "./chunk-JP2VXTRR.js";
import "./chunk-ROLWNMK2.js";
import {
  logger
} from "./chunk-PZ74COWN.js";
import {
  createObserver
} from "./chunk-IYWUU57N.js";
import {
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
  safeClassMap
} from "./chunk-L7EQWDU5.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@esri/calcite-components/dist/components/calcite-action-pad/customElement.js
var CSS = {
  actionGroupEnd: "action-group--end",
  container: "container"
};
var SLOTS = {
  expandTooltip: "expand-tooltip"
};
var styles = css`:host{--calcite-internal-color-focus: var( --calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)) )}:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:block}@keyframes in{0%{opacity:0}to{opacity:1}}:host{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:var(--calcite-action-pad-corner-radius, .125rem);background:transparent}:host([expanded][layout=vertical]) .container{max-inline-size:var(--calcite-action-pad-expanded-max-width, auto)}:host([layout=vertical]) ::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:1px}.container{display:inline-flex;flex-direction:column;overflow:hidden;--tw-shadow: 0 6px 20px -4px rgba(0, 0, 0, .1), 0 4px 12px -2px rgba(0, 0, 0, .08);--tw-shadow-colored: 0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);gap:var(--calcite-action-pad-items-space, 0);border-radius:calc(var(--calcite-action-pad-corner-radius, .125rem) * 2);background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1))}.action-group--bottom{flex-grow:1;justify-content:flex-end;padding-block-end:0px}:host([layout=horizontal]) .container{flex-direction:row}:host([layout=horizontal]) .container .action-group--bottom{padding:0}:host([layout=horizontal]) .container ::slotted(calcite-action-group:not(:last-of-type)){border-inline-end-width:1px}:host([hidden]){display:none}[hidden]{display:none}`;
var _ActionPad = class _ActionPad extends LitElement {
  constructor() {
    super();
    this.mutationObserver = createObserver("mutation", () => this.updateGroups());
    this.toggleExpand = () => {
      this.expanded = !this.expanded;
      this.calciteActionPadToggle.emit();
    };
    this.messages = useT9n();
    this.focusSetter = useSetFocus()(this);
    this.expandDisabled = false;
    this.expanded = false;
    this.layout = "vertical";
    this.overlayPositioning = "absolute";
    this.scale = "m";
    this.calciteActionPadCollapse = createEvent({ cancelable: false });
    this.calciteActionPadExpand = createEvent({ cancelable: false });
    this.calciteActionPadToggle = createEvent({ cancelable: false });
    this.listen("calciteActionMenuOpen", this.actionMenuOpenHandler);
  }
  async setFocus(options) {
    return this.focusSetter(() => {
      return this.el;
    }, options);
  }
  connectedCallback() {
    var _a;
    super.connectedCallback();
    (_a = this.mutationObserver) == null ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
  }
  async load() {
    logger.deprecated("component", {
      name: "action-pad",
      removalVersion: 4,
      suggested: "action-bar"
    });
  }
  willUpdate(changes) {
    if (changes.has("expanded") && this.hasUpdated) {
      toggleChildActionText({ el: this.el, expanded: this.expanded });
    }
    if (changes.has("layout") && (this.hasUpdated || this.layout !== "vertical")) {
      this.updateGroups();
    }
    if (changes.has("expanded") && this.hasUpdated) {
      if (this.expanded) {
        this.calciteActionPadExpand.emit();
      } else {
        this.calciteActionPadCollapse.emit();
      }
    }
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback();
    (_a = this.mutationObserver) == null ? void 0 : _a.disconnect();
  }
  actionMenuOpenHandler(event) {
    var _a;
    if (event.target.menuOpen) {
      const composedPath = event.composedPath();
      (_a = this.actionGroups) == null ? void 0 : _a.forEach((group) => {
        if (!composedPath.includes(group)) {
          group.menuOpen = false;
        }
      });
    }
  }
  updateGroups() {
    const groups = Array.from(this.el.querySelectorAll("calcite-action-group"));
    this.actionGroups = groups;
    this.setGroupLayout(groups);
  }
  setGroupLayout(groups) {
    groups.forEach((group) => group.layout = this.layout);
  }
  handleDefaultSlotChange() {
    this.updateGroups();
  }
  handleTooltipSlotChange(event) {
    const tooltips = slotChangeGetAssignedElements(event).filter((el) => el == null ? void 0 : el.matches("calcite-tooltip"));
    this.expandTooltip = tooltips[0];
  }
  renderBottomActionGroup() {
    const { expanded, expandDisabled, messages, el, position, toggleExpand, scale, layout, actionsEndGroupLabel, overlayPositioning } = this;
    const expandToggleNode = !expandDisabled ? ExpandToggle({ collapseLabel: messages.collapseLabel, collapseText: messages.collapse, el, expandLabel: messages.expandLabel, expandText: messages.expand, expanded, position, scale, toggle: toggleExpand, tooltip: this.expandTooltip }) : null;
    return expandToggleNode ? html`<calcite-action-group class=${safeClassMap(CSS.actionGroupEnd)} .label=${actionsEndGroupLabel} .layout=${layout} .overlayPositioning=${overlayPositioning} .scale=${scale}><slot name=${SLOTS.expandTooltip} @slotchange=${this.handleTooltipSlotChange}></slot>${expandToggleNode}</calcite-action-group>` : null;
  }
  render() {
    return html`<div class=${safeClassMap(CSS.container)}><slot @slotchange=${this.handleDefaultSlotChange}></slot>${this.renderBottomActionGroup()}</div>`;
  }
};
_ActionPad.properties = { expandTooltip: [16, {}, { state: true }], actionsEndGroupLabel: 1, expandDisabled: [7, {}, { reflect: true, type: Boolean }], expanded: [7, {}, { reflect: true, type: Boolean }], layout: [3, {}, { reflect: true }], messageOverrides: [0, {}, { attribute: false }], overlayPositioning: [3, {}, { reflect: true }], position: [3, {}, { reflect: true }], scale: [3, {}, { reflect: true }] };
_ActionPad.shadowRootOptions = { mode: "open", delegatesFocus: true };
_ActionPad.styles = styles;
var ActionPad = _ActionPad;
customElement("calcite-action-pad", ActionPad);
export {
  ActionPad
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-action-pad/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.3.3 *)
*/
//# sourceMappingURL=customElement-WPIE7TEZ.js.map
