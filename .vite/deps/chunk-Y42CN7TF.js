import {
  m2 as m
} from "./chunk-TSVVEDRS.js";
import {
  a2 as a
} from "./chunk-HPSHCA6S.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";
import {
  n2 as n
} from "./chunk-QRKINRAQ.js";

// node_modules/@arcgis/core/widgets/support/goToUtils.js
function o(o2, t, n2) {
  return o2.goTo(t, n2);
}

// node_modules/@arcgis/core/widgets/support/GoTo.js
var i = (i2) => {
  const p = i2;
  let c = class extends p {
    constructor(...o2) {
      super(...o2), this.goToOverride = null, this.view = null;
    }
    callGoTo(o2) {
      const { view: t } = this;
      return n(t), this.goToOverride ? this.goToOverride(t, o2) : o(t, o2.target, o2.options);
    }
  };
  return __decorate([m()], c.prototype, "goToOverride", void 0), __decorate([m()], c.prototype, "view", void 0), c = __decorate([a("esri.widgets.support.GoTo")], c), c;
};

export {
  i
};
//# sourceMappingURL=chunk-Y42CN7TF.js.map
