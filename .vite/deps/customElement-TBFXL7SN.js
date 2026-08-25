import {
  useSetFocus
} from "./chunk-JP2VXTRR.js";
import "./chunk-ROLWNMK2.js";
import "./chunk-PZ74COWN.js";
import {
  focusElement,
  focusElementInGroup,
  slotChangeGetAssignedElements
} from "./chunk-VYH67NUG.js";
import {
  useT9n
} from "./chunk-LNCDDHBA.js";
import "./chunk-OOFWE7NV.js";
import {
  useWatchAttributes
} from "./chunk-SZNNI5VM.js";
import "./chunk-XFVNPLUN.js";
import {
  LitElement,
  css,
  customElement,
  html
} from "./chunk-L7EQWDU5.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@esri/calcite-components/dist/components/calcite-menu/customElement.js
var styles = css`:host{--calcite-internal-color-focus: var( --calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)) )}:host{display:flex}ul{margin:0;display:inline-flex;block-size:100%;align-items:center;padding:0}:host([layout=vertical]) ul{display:flex;inline-size:100%;flex-direction:column}:host([hidden]){display:none}[hidden]{display:none}`;
var _Menu = class _Menu extends LitElement {
  constructor() {
    super();
    this.attributeWatch = useWatchAttributes(["role"], this.handleGlobalAttributesChanged);
    this.menuItems = [];
    this.messages = useT9n();
    this.focusSetter = useSetFocus()(this);
    this.layout = "horizontal";
    this.listen("calciteInternalMenuItemKeyEvent", this.calciteInternalNavMenuItemKeyEvent);
  }
  async setFocus(options) {
    return this.focusSetter(() => {
      return this.menuItems[0];
    }, options);
  }
  willUpdate(changes) {
    if (changes.has("layout") && (this.hasUpdated || this.layout !== "horizontal")) {
      this.setMenuItemLayout(this.menuItems, this.layout);
    }
  }
  handleGlobalAttributesChanged() {
    this.requestUpdate();
    this.setMenuItemLayout(this.menuItems, this.layout);
  }
  calciteInternalNavMenuItemKeyEvent(event) {
    const target = event.target;
    const submenuItems = event.detail.children;
    const key = event.detail.event.key;
    event.stopPropagation();
    if (key === "ArrowDown") {
      if (target.layout === "vertical") {
        focusElementInGroup(this.menuItems, target, "next", false, false);
      } else {
        if (event.detail.isSubmenuOpen) {
          submenuItems[0].setFocus();
        }
      }
    } else if (key === "ArrowUp") {
      if (this.layout === "vertical") {
        focusElementInGroup(this.menuItems, target, "previous", false, false);
      } else {
        if (event.detail.isSubmenuOpen) {
          submenuItems[submenuItems.length - 1].setFocus();
        }
      }
    } else if (key === "ArrowRight") {
      if (this.layout === "horizontal") {
        focusElementInGroup(this.menuItems, target, "next", false, false);
      } else {
        if (event.detail.isSubmenuOpen) {
          submenuItems[0].setFocus();
        }
      }
    } else if (key === "ArrowLeft") {
      if (this.layout === "horizontal") {
        focusElementInGroup(this.menuItems, target, "previous", false, false);
      } else {
        if (event.detail.isSubmenuOpen) {
          this.focusParentElement(event.target);
        }
      }
    } else if (key === "Escape") {
      this.focusParentElement(event.target);
    }
    event.preventDefault();
  }
  handleMenuSlotChange(event) {
    this.menuItems = slotChangeGetAssignedElements(event);
    this.setMenuItemLayout(this.menuItems, this.layout);
  }
  focusParentElement(el) {
    const parentEl = el.parentElement;
    if (parentEl) {
      focusElement(parentEl);
      parentEl.open = false;
    }
  }
  setMenuItemLayout(items, layout) {
    items.forEach((item) => {
      item.layout = layout;
      if (this.getEffectiveRole() === "menubar") {
        item.isTopLevelItem = true;
        item.topLevelMenuLayout = this.layout;
      }
    });
  }
  getEffectiveRole() {
    return this.el.role || "menubar";
  }
  render() {
    return html`<ul .ariaLabel=${this.label} .role=${this.getEffectiveRole()}><slot @slotchange=${this.handleMenuSlotChange}></slot></ul>`;
  }
};
_Menu.properties = { label: 1, layout: [3, {}, { reflect: true }], messageOverrides: [0, {}, { attribute: false }] };
_Menu.shadowRootOptions = { mode: "open", delegatesFocus: true };
_Menu.styles = styles;
var Menu = _Menu;
customElement("calcite-menu", Menu);
export {
  Menu
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-menu/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.3.3 *)
*/
//# sourceMappingURL=customElement-TBFXL7SN.js.map
