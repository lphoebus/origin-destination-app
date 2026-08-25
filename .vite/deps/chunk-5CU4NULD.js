import {
  u
} from "./chunk-ELQLS5UR.js";
import {
  r
} from "./chunk-ZNU5NTGY.js";
import {
  n
} from "./chunk-4EJ2CVAA.js";
import {
  m2 as m
} from "./chunk-TSVVEDRS.js";
import {
  a2 as a,
  x
} from "./chunk-HPSHCA6S.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";

// node_modules/@arcgis/core/renderers/visualVariables/support/ColorStop.js
var i;
var c = i = class extends n {
  constructor(r2) {
    super(r2), this.color = null, this.label = null, this.value = null;
  }
  writeValue(r2, o, e) {
    o[e] = r2 ?? 0;
  }
  clone() {
    return new i({ color: this.color && this.color.clone(), label: this.label, value: this.value });
  }
};
__decorate([m({ type: u, json: { type: [x], write: { isRequired: true } } })], c.prototype, "color", void 0), __decorate([m({ type: String, json: { write: true } })], c.prototype, "label", void 0), __decorate([m({ type: Number, json: { write: { writerEnsuresNonNull: true } } })], c.prototype, "value", void 0), __decorate([r("value")], c.prototype, "writeValue", null), c = i = __decorate([a("esri.renderers.visualVariables.support.ColorStop")], c);
var a2 = c;

export {
  a2 as a
};
//# sourceMappingURL=chunk-5CU4NULD.js.map
