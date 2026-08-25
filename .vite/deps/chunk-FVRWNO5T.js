import {
  n
} from "./chunk-4EJ2CVAA.js";
import {
  m2 as m
} from "./chunk-TSVVEDRS.js";
import {
  a2 as a
} from "./chunk-HPSHCA6S.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";

// node_modules/@arcgis/core/layers/support/FeatureReduction.js
var s = class extends n {
  constructor() {
    super(...arguments), this.type = null;
  }
};
__decorate([m({ type: ["selection", "cluster", "binning"], readOnly: true, json: { read: false, write: true } })], s.prototype, "type", void 0), s = __decorate([a("esri.layers.support.FeatureReduction")], s);

// node_modules/@arcgis/core/layers/support/FeatureReductionSelection.js
var s2;
var p = s2 = class extends s {
  constructor(o) {
    super(o), this.type = "selection";
  }
  clone() {
    return new s2();
  }
};
__decorate([m({ type: ["selection"] })], p.prototype, "type", void 0), p = s2 = __decorate([a("esri.layers.support.FeatureReductionSelection")], p);

export {
  s,
  p
};
//# sourceMappingURL=chunk-FVRWNO5T.js.map
