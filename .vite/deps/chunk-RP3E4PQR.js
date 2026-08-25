import {
  O
} from "./chunk-7OBUFU3X.js";
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

// node_modules/@arcgis/core/layers/support/LayerFloorInfo.js
var l;
var i = l = class extends n {
  constructor(o) {
    super(o), this.floorField = null, this.viewAllMode = false, this.viewAllLevelIds = new O();
  }
  clone() {
    return new l({ floorField: this.floorField, viewAllMode: this.viewAllMode, viewAllLevelIds: this.viewAllLevelIds });
  }
};
__decorate([m({ type: String, json: { write: { isRequired: true } } })], i.prototype, "floorField", void 0), __decorate([m({ json: { read: false, write: false } })], i.prototype, "viewAllMode", void 0), __decorate([m({ json: { read: false, write: false } })], i.prototype, "viewAllLevelIds", void 0), i = l = __decorate([a("esri.layers.support.LayerFloorInfo")], i);

export {
  i
};
//# sourceMappingURL=chunk-RP3E4PQR.js.map
