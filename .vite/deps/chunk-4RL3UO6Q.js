import {
  I
} from "./chunk-SBC46NPP.js";
import {
  f
} from "./chunk-7J6TZQJ4.js";

// node_modules/@arcgis/core/rest/networks/support/utils.js
function t(t2) {
  return t2.map((t3) => {
    const i = t3.editedFeatures, a = f.fromJSON(i == null ? void 0 : i.spatialReference);
    return i ? { layerId: t3.id, editedFeatures: I(i, a) } : null;
  }).filter((e) => null !== e);
}

export {
  t
};
//# sourceMappingURL=chunk-4RL3UO6Q.js.map
