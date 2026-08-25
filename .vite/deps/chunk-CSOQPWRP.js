import {
  makeGenericController
} from "./chunk-SZNNI5VM.js";

// node_modules/@esri/calcite-components/dist/chunks/usePreventDocumentScroll.js
var openedComponentCount = 0;
var initialDocumentOverflowStyle = "";
var usePreventDocumentScroll = () => {
  function addOpenedComponent() {
    openedComponentCount++;
    if (openedComponentCount === 1) {
      initialDocumentOverflowStyle = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";
    }
  }
  function removeOpenedComponent() {
    openedComponentCount--;
    if (openedComponentCount === 0) {
      document.documentElement.style.overflow = initialDocumentOverflowStyle;
    }
  }
  return makeGenericController((component, controller) => {
    controller.onConnected(() => {
      if (component.opened && component.preventDocumentScroll) {
        addOpenedComponent();
      }
    });
    controller.onUpdate((changes) => {
      if (!component.hasUpdated) {
        return;
      }
      if (changes.has("opened") && component.preventDocumentScroll) {
        if (component.opened) {
          addOpenedComponent();
        } else {
          removeOpenedComponent();
        }
      } else if (changes.has("preventDocumentScroll") && component.opened) {
        if (component.preventDocumentScroll) {
          addOpenedComponent();
        } else {
          removeOpenedComponent();
        }
      }
    });
    controller.onDisconnected(() => {
      if (component.opened && component.preventDocumentScroll) {
        removeOpenedComponent();
      }
    });
  });
};

export {
  usePreventDocumentScroll
};
/*! Bundled license information:

@esri/calcite-components/dist/chunks/usePreventDocumentScroll.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.3.3 *)
*/
//# sourceMappingURL=chunk-CSOQPWRP.js.map
