import {
  Heading
} from "./chunk-T4YMONJC.js";
import {
  keyed
} from "./chunk-RWBLUXRJ.js";
import "./chunk-O4SR2QJI.js";
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
  css,
  customElement,
  html,
  nothing2 as nothing,
  safeClassMap
} from "./chunk-L7EQWDU5.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@esri/calcite-components/dist/components/calcite-navigation-logo/customElement.js
var CSS = {
  container: "container",
  containerLink: "container--link",
  textContainer: "text-container",
  heading: "heading",
  description: "description",
  image: "image",
  standalone: "standalone",
  icon: "icon"
};
var styles = css`:host{--calcite-internal-color-focus: var( --calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)) )}:host{display:inline-flex}.container{margin:0;display:flex;align-items:center;justify-content:center;font-size:var(--calcite-font-size-0);line-height:1.25rem;background-color:var(--calcite-navigation-background-color, var(--calcite-internal-navigation-logo-background-color, var(--calcite-color-foreground-1)));border-block-end:2px solid var(--calcite-color-transparent);transition-property:background-color;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out}.container--link{cursor:pointer;text-decoration-line:none;outline-color:transparent}:host(:focus) .container--link{outline:var(--calcite-border-width-md) solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline:var(--calcite-border-width-md) solid var(--calcite-internal-color-focus);outline-offset:calc(calc(-1 * var(--calcite-spacing-base)) * calc(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.image,.icon{margin:0;display:flex;block-size:1.75rem;padding-inline:1rem;color:var(--calcite-navigation-logo-text-color, var(--calcite-icon-color, var(--calcite-internal-navigation-logo-text-color, inherit)))}.image~.icon{padding-inline-start:0px}.image~.text-container,.icon~.text-container{padding-inline-start:0px}:host([href]:hover),:host([href]:focus){--calcite-internal-navigation-logo-background-color: var(--calcite-color-foreground-2)}:host([href]:active){--calcite-internal-navigation-logo-background-color: var(--calcite-color-foreground-3)}:host([active]) .container{border-block-end-color:var(--calcite-navigation-accent-color, var(--calcite-color-brand))}:host([active]),:host([href]:active){--calcite-internal-navigation-logo-text-color: var(--calcite-color-brand)}.text-container{margin-block-start:.125rem;display:flex;flex-direction:column;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-inline:1rem;text-align:start}.heading{margin-inline-start:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--calcite-font-size-0);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-navigation-logo-heading-text-color, var(--calcite-color-text-1))}.standalone{font-size:var(--calcite-font-size-1)}.description{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--calcite-color-text-2);color:var(--calcite-navigation-logo-text-color, var(--calcite-color-text-2));font-size:var(--calcite-font-size--1)}:host([hidden]){display:none}[hidden]{display:none}`;
var _NavigationLogo = class _NavigationLogo extends LitElement {
  constructor() {
    super(...arguments);
    this.focusSetter = useSetFocus()(this);
    this.iconFlipRtl = false;
  }
  async setFocus(options) {
    return this.focusSetter(() => {
      if (this.href) {
        return this.el;
      }
    }, options);
  }
  renderIcon() {
    return html`<calcite-icon class=${safeClassMap(CSS.icon)} .flipRtl=${this.iconFlipRtl} .icon=${this.icon} scale=l></calcite-icon>`;
  }
  renderHeaderContent() {
    const { heading, headingLevel, description } = this;
    const headingNode = heading ? keyed(CSS.heading, Heading({ class: {
      [CSS.heading]: true,
      [CSS.standalone]: !this.description
    }, level: headingLevel, children: heading })) : null;
    const descriptionNode = description ? keyed(CSS.description, html`<span class=${safeClassMap(CSS.description)}>${description}</span>`) : null;
    return headingNode || descriptionNode ? keyed(CSS.textContainer, html`<div class=${safeClassMap(CSS.textContainer)}>${headingNode}${descriptionNode}</div>`) : null;
  }
  render() {
    const { icon, href, label, rel, target, thumbnail } = this;
    const content = html`${thumbnail && html`<img alt=${(label || "") ?? nothing} class=${safeClassMap(CSS.image)} src=${thumbnail ?? nothing}>` || ""}${icon && this.renderIcon() || ""}${this.renderHeaderContent()}`;
    return href ? html`<a class=${safeClassMap({
      [CSS.container]: true,
      [CSS.containerLink]: true
    })} href=${href ?? nothing} rel=${rel ?? nothing} target=${target ?? nothing}>${content}</a>` : html`<div class=${safeClassMap(CSS.container)}>${content}</div>`;
  }
};
_NavigationLogo.properties = { active: [7, {}, { reflect: true, type: Boolean }], description: 1, heading: 1, headingLevel: [11, {}, { type: Number, reflect: true }], href: [3, {}, { reflect: true }], icon: [3, {}, { reflect: true }], iconFlipRtl: [7, {}, { reflect: true, type: Boolean }], label: 1, rel: [3, {}, { reflect: true }], target: [3, {}, { reflect: true }], thumbnail: 1 };
_NavigationLogo.shadowRootOptions = { mode: "open", delegatesFocus: true };
_NavigationLogo.styles = styles;
var NavigationLogo = _NavigationLogo;
customElement("calcite-navigation-logo", NavigationLogo);
export {
  NavigationLogo
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-navigation-logo/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.3.3 *)
*/
//# sourceMappingURL=customElement-N46ND3DR.js.map
