import {
  a as a3
} from "./chunk-NW5WSZAH.js";
import {
  a as a2
} from "./chunk-SBHNAU24.js";
import {
  l
} from "./chunk-VLH4C4OL.js";
import {
  o
} from "./chunk-27A66LHG.js";
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
  a2 as a
} from "./chunk-HPSHCA6S.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";

// node_modules/@arcgis/core/layers/support/FeatureType.js
var c = class extends l(n) {
  constructor(o2) {
    super(o2), this.id = null, this.name = null, this.domains = null, this.templates = null;
  }
  readDomains(o2) {
    const r2 = {};
    for (const t of Object.keys(o2)) r2[t] = a2(o2[t]);
    return r2;
  }
  writeDomains(o2, r2) {
    var _a;
    const t = {};
    for (const e of Object.keys(o2)) o2[e] && (t[e] = (_a = o2[e]) == null ? void 0 : _a.toJSON());
    r2.domains = t;
  }
};
__decorate([m({ json: { write: true } })], c.prototype, "id", void 0), __decorate([m({ json: { write: true } })], c.prototype, "name", void 0), __decorate([m({ json: { write: true } })], c.prototype, "domains", void 0), __decorate([o("domains")], c.prototype, "readDomains", null), __decorate([r("domains")], c.prototype, "writeDomains", null), __decorate([m({ type: [a3], json: { write: true } })], c.prototype, "templates", void 0), c = __decorate([a("esri.layers.support.FeatureType")], c);

export {
  c
};
//# sourceMappingURL=chunk-BAIJD2TT.js.map
