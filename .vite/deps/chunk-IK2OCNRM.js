import {
  M
} from "./chunk-3PCQMPQH.js";
import {
  _e
} from "./chunk-J3VZVJYU.js";

// node_modules/@arcgis/core/support/getDefaultUnitForView.js
function e(e2) {
  var _a, _b;
  const n = "metric";
  if (null == e2) return n;
  const i = e2.map, l = (i && "portalItem" in i ? (_a = i.portalItem) == null ? void 0 : _a.portal : null) ?? M.getDefault();
  switch (((_b = l.user) == null ? void 0 : _b.units) ?? l.units) {
    case n:
      return n;
    case "english":
      return "imperial";
  }
  return _e(e2.spatialReference) ?? n;
}

export {
  e
};
//# sourceMappingURL=chunk-IK2OCNRM.js.map
