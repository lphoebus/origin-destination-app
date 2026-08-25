import {
  n
} from "./chunk-2J6QCNYK.js";

// node_modules/@arcgis/core/arcade/arcadeEnvironment.js
function r(r2) {
  if ("string" == typeof r2) return r2.toLowerCase();
  if ("name" in r2) return r2.name.toLowerCase();
  if ("string" != typeof r2.value) throw new n(null, "InvalidIdentifier", null);
  return r2.value.toLowerCase();
}
var t = Object.freeze({ aborted: false });

export {
  r,
  t
};
//# sourceMappingURL=chunk-2N7LZRX5.js.map
