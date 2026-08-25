import {
  AllComboboxChildrenSelector,
  ComboboxItemGroupSelector,
  ComboboxItemSelector
} from "./chunk-WGZXFP2J.js";
import {
  nodeListToArray
} from "./chunk-VYH67NUG.js";
import {
  isServer
} from "./chunk-L7EQWDU5.js";

// node_modules/@esri/calcite-components/dist/chunks/utils4.js
function getAncestors(element) {
  var _a, _b;
  const parent = (_a = element.parentElement) == null ? void 0 : _a.closest(AllComboboxChildrenSelector);
  const grandparent = (_b = parent == null ? void 0 : parent.parentElement) == null ? void 0 : _b.closest(AllComboboxChildrenSelector);
  return [parent, grandparent].filter((el) => el);
}
function getItemAncestors(item) {
  var _a;
  return ((_a = item.ancestors) == null ? void 0 : _a.filter((el) => el.nodeName === "CALCITE-COMBOBOX-ITEM")) || [];
}
function getItemChildren(item) {
  return nodeListToArray(item.querySelectorAll("calcite-combobox-item"));
}
function hasActiveChildren(node) {
  const items = nodeListToArray(node.querySelectorAll("calcite-combobox-item"));
  return items.filter((item) => item.selected).length > 0;
}
function getDepth(element) {
  if (isServer) {
    return 0;
  }
  const result = document.evaluate(
    "ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",
    element,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null
  );
  const depth = result.snapshotLength;
  if (depth > 0 && element.nodeName === ComboboxItemSelector) {
    for (let i = 0; i < depth; i++) {
      const parent = result.snapshotItem(i);
      if (parent.nodeName === ComboboxItemGroupSelector) {
        return depth;
      }
    }
  } else if (element.nodeName === ComboboxItemGroupSelector) {
    return depth;
  }
  return depth + 1;
}
function isSingleLike(selectionMode) {
  return selectionMode.includes("single");
}
function getLabel(item) {
  return item.shortHeading || item.heading || item.textLabel;
}

export {
  getAncestors,
  getItemAncestors,
  getItemChildren,
  hasActiveChildren,
  getDepth,
  isSingleLike,
  getLabel
};
/*! Bundled license information:

@esri/calcite-components/dist/chunks/utils4.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.3.3 *)
*/
//# sourceMappingURL=chunk-C5BYEPEL.js.map
