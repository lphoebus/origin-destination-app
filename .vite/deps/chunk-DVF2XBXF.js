import {
  e
} from "./chunk-66LHZIM3.js";
import {
  n
} from "./chunk-IVB5Y25P.js";
import {
  dt
} from "./chunk-HIGSJTLY.js";

// node_modules/@arcgis/core/views/interactive/snapping/candidates/VertexSnappingCandidate.js
var r = class extends e {
  constructor(n2) {
    super({ ...n2, constraint: new dt(n2.targetPoint) });
  }
  get hints() {
    return [new n(this.targetPoint, this.isDraped, this.domain)];
  }
};

export {
  r
};
//# sourceMappingURL=chunk-DVF2XBXF.js.map
