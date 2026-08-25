import {
  M
} from "./chunk-3PCQMPQH.js";
import {
  I
} from "./chunk-EO4UMOUD.js";

// node_modules/@arcgis/core/portal/support/jsonContext.js
function e(t, r) {
  return { ...l(t, r), readResourcePaths: [] };
}
function o(r, e2, o2) {
  const i = I(r.itemUrl);
  return { ...l(r, e2), messages: [], writtenProperties: [], blockedRelativeUrls: [], verifyItemRelativeUrls: i ? { rootPath: i.path, writtenUrls: [] } : null, resources: o2 ? { toAdd: [], toUpdate: [], toKeep: [], pendingOperations: [] } : null };
}
function l(e2, o2) {
  return { origin: o2, url: I(e2.itemUrl), portal: e2.portal || M.getDefault(), portalItem: e2 };
}

export {
  e,
  o
};
//# sourceMappingURL=chunk-TGTN62EC.js.map
