import {
  t
} from "./chunk-Z2VNECWP.js";
import {
  bt
} from "./chunk-HIGSJTLY.js";
import {
  s3 as s
} from "./chunk-RCDARI2U.js";

// node_modules/@arcgis/core/views/interactive/snapping/candidates/LineSnappingCandidate.js
var i = class extends t {
  constructor({ lineStart: n, lineEnd: i2, targetPoint: s2, isDraped: r }) {
    super(s2, new bt(n, i2), r, 2), this._referenceLineHint = new s(2, n, i2, r, this.domain);
  }
  get hints() {
    return [this._referenceLineHint, new s(0, this._lineEndClosestToTarget(), this.targetPoint, this.isDraped, this.domain)];
  }
  _lineEndClosestToTarget() {
    return this.constraint.closestEndTo(this.targetPoint);
  }
};

export {
  i
};
//# sourceMappingURL=chunk-67HDIB6R.js.map
