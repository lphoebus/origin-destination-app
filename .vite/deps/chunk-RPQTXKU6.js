import {
  a as a2
} from "./chunk-XJ34JWUR.js";
import {
  s
} from "./chunk-GQZMDDEP.js";
import {
  n
} from "./chunk-4EJ2CVAA.js";
import {
  m2
} from "./chunk-TSVVEDRS.js";
import {
  a2 as a,
  m
} from "./chunk-HPSHCA6S.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";

// node_modules/@arcgis/core/rest/networks/support/QueryAssociationsParameters.js
var m3;
var n2 = m3 = class extends n {
  static from(e) {
    return m(m3, e);
  }
  constructor(e) {
    super(e), this.returnDeletes = false, this.elements = [], this.types = [], this.gdbVersion = null, this.moment = null;
  }
};
__decorate([m2({ type: Boolean, json: { write: true } })], n2.prototype, "returnDeletes", void 0), __decorate([m2({ type: [s], json: { write: true } })], n2.prototype, "elements", void 0), __decorate([m2({ type: [a2.apiValues], json: { type: a2.jsonValues, read: a2.read, write: a2.write } })], n2.prototype, "types", void 0), __decorate([m2({ type: String, json: { write: true } })], n2.prototype, "gdbVersion", void 0), __decorate([m2({ type: Date, json: { type: Number, write: { writer: (e, t) => {
  t.moment = e == null ? void 0 : e.getTime();
} } } })], n2.prototype, "moment", void 0), n2 = m3 = __decorate([a("esri.rest.networks.support.QueryAssociationsParameters")], n2);

export {
  n2 as n
};
//# sourceMappingURL=chunk-RPQTXKU6.js.map
