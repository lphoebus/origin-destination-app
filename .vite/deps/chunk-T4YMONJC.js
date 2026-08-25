import {
  keyed
} from "./chunk-RWBLUXRJ.js";
import {
  html,
  literal,
  unsafeStatic
} from "./chunk-O4SR2QJI.js";
import {
  safeClassMap
} from "./chunk-L7EQWDU5.js";

// node_modules/@esri/calcite-components/dist/chunks/Heading.js
function constrainHeadingLevel(level) {
  return Math.min(Math.max(Math.ceil(level), 1), 6);
}
var Heading = ({ children, ...props }) => {
  const DynamicHtmlTag = props.level ? unsafeStatic(`h${props.level}`) : literal`div`;
  return keyed(props.key, html`<${DynamicHtmlTag} class=${safeClassMap(props.class)}>${children}</${DynamicHtmlTag}>`);
};

export {
  constrainHeadingLevel,
  Heading
};
/*! Bundled license information:

@esri/calcite-components/dist/chunks/Heading.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.3.3 *)
*/
//# sourceMappingURL=chunk-T4YMONJC.js.map
