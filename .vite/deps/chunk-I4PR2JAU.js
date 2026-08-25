import {
  m2 as m
} from "./chunk-TSVVEDRS.js";
import {
  a2 as a
} from "./chunk-HPSHCA6S.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";

// node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js
var s = (s2) => {
  const t = s2;
  let c = class extends t {
    constructor() {
      super(...arguments), this.customParameters = null;
    }
  };
  return __decorate([m({ type: Object, json: { write: { overridePolicy: (r) => ({ enabled: !!(r && Object.keys(r).length > 0) }) } } })], c.prototype, "customParameters", void 0), c = __decorate([a("esri.layers.mixins.CustomParametersMixin")], c), c;
};

export {
  s
};
//# sourceMappingURL=chunk-I4PR2JAU.js.map
