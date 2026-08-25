import {
  Heading,
  constrainHeadingLevel
} from "./chunk-T4YMONJC.js";
import {
  keyed
} from "./chunk-RWBLUXRJ.js";
import "./chunk-O4SR2QJI.js";
import {
  logger
} from "./chunk-PZ74COWN.js";
import {
  slotChangeHasAssignedElement
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

// node_modules/@esri/calcite-components/dist/components/calcite-tip/customElement.js
var CSS = {
  container: "container",
  header: "header",
  heading: "heading",
  close: "close",
  imageFrame: "image-frame",
  content: "content",
  info: "info",
  infoNoThumbnail: "info--no-thumbnail"
};
var ICONS = {
  close: "x"
};
var SLOTS = {
  thumbnail: "thumbnail"
};
var styles = css`:host{--calcite-internal-color-focus: var( --calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)) )}:host{position:relative;margin:1rem;box-sizing:border-box;display:flex;flex-direction:row;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-2);background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-2)}:host *{box-sizing:border-box}.container{inline-size:100%;padding:1rem}:host([closed]),:host([closed]) .container{display:none}:host([selected]) .container{margin:0;border-style:none;padding:0}.header{margin:0;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0;padding:0;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:.5rem}.header{margin-block-end:.5rem}.header .heading{padding:0;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-color-text-1)}.content{display:flex}.info{padding-block:0px;padding-inline:1rem;inline-size:70%}.info--no-thumbnail{inline-size:100%;padding-inline:0px}::slotted(p){margin-block-start:0px}::slotted(a){outline-color:transparent;color:var(--calcite-color-brand)}::slotted(a:focus){outline:var(--calcite-border-width-md) solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline:var(--calcite-border-width-md) solid var(--calcite-internal-color-focus);outline-offset:calc(var(--calcite-spacing-base) * calc(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.image-frame{inline-size:25%}.image-frame img{max-inline-size:100%}::slotted(img){max-inline-size:100%}:host([hidden]){display:none}[hidden]{display:none}`;
var _Tip = class _Tip extends LitElement {
  constructor() {
    super(...arguments);
    this.messages = useT9n();
    this.hasThumbnail = false;
    this.closeDisabled = false;
    this.closed = false;
    this.selected = false;
    this.calciteTipDismiss = createEvent({ cancelable: false });
  }
  async load() {
    logger.deprecated("component", {
      name: "tip",
      removalVersion: 4,
      suggested: ["card", "notice", "panel", "tile"]
    });
  }
  hideTip() {
    this.closed = true;
    this.calciteTipDismiss.emit();
  }
  handleThumbnailSlotChange(event) {
    this.hasThumbnail = slotChangeHasAssignedElement(event);
  }
  renderHeader() {
    var _a;
    const { heading, headingLevel, el } = this;
    const parentLevel = (_a = el.closest("calcite-tip-manager")) == null ? void 0 : _a.headingLevel;
    const relativeLevel = parentLevel ? constrainHeadingLevel(parentLevel + 1) : null;
    const level = headingLevel || relativeLevel;
    return heading ? html`<header class=${safeClassMap(CSS.header)}>${Heading({ class: CSS.heading, level, children: heading })}</header>` : null;
  }
  renderDismissButton() {
    const { closeDisabled, hideTip } = this;
    return !closeDisabled ? html`<calcite-action class=${safeClassMap(CSS.close)} .icon=${ICONS.close} @click=${hideTip} scale=l .text=${this.messages.close}></calcite-action>` : null;
  }
  renderImageFrame() {
    return keyed("thumbnail", html`<div class=${safeClassMap(CSS.imageFrame)} .hidden=${!this.hasThumbnail}><slot name=${SLOTS.thumbnail} @slotchange=${this.handleThumbnailSlotChange}></slot></div>`);
  }
  renderInfoNode() {
    return html`<div class=${safeClassMap({ [CSS.info]: true, [CSS.infoNoThumbnail]: !this.hasThumbnail })}><slot></slot></div>`;
  }
  renderContent() {
    return html`<div class=${safeClassMap(CSS.content)}>${this.renderImageFrame()}${this.renderInfoNode()}</div>`;
  }
  render() {
    return html`<article class=${safeClassMap(CSS.container)}>${this.renderHeader()}${this.renderContent()}</article>${this.renderDismissButton()}`;
  }
};
_Tip.properties = { hasThumbnail: [16, {}, { state: true }], closeDisabled: [7, {}, { reflect: true, type: Boolean }], closed: [7, {}, { reflect: true, type: Boolean }], heading: 1, headingLevel: [11, {}, { type: Number, reflect: true }], messageOverrides: [0, {}, { attribute: false }], selected: [7, {}, { reflect: true, type: Boolean }] };
_Tip.styles = styles;
var Tip = _Tip;
customElement("calcite-tip", Tip);
export {
  Tip
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-tip/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.3.3 *)
*/
//# sourceMappingURL=customElement-VFIB7WGV.js.map
