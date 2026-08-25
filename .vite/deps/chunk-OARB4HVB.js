import {
  i,
  l
} from "./chunk-FTZXSP5Q.js";
import {
  p
} from "./chunk-TEBTNGNL.js";
import {
  t
} from "./chunk-VMCI7OYW.js";
import {
  c
} from "./chunk-R4BXZRFW.js";
import {
  b
} from "./chunk-JIJYOENG.js";
import {
  m2 as m
} from "./chunk-TSVVEDRS.js";
import {
  a2 as a
} from "./chunk-HPSHCA6S.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";

// node_modules/@arcgis/core/layers/GraphicsLayer.js
var n = class extends p(t(b)) {
  constructor(r) {
    super(r), this.elevationInfo = null, this.graphics = new i(), this.screenSizePerspectiveEnabled = true, this.type = "graphics", this.internal = false;
  }
  destroy() {
    this.removeAll(), this.graphics.destroy();
  }
  get loaded() {
    return super.loaded;
  }
  add(r) {
    return this.graphics.add(r), this;
  }
  addMany(r) {
    return this.graphics.addMany(r), this;
  }
  removeAll() {
    return this.graphics.removeAll(), this;
  }
  remove(r) {
    this.graphics.remove(r);
  }
  removeMany(r) {
    this.graphics.removeMany(r);
  }
  graphicChanged(r) {
    this.emit("graphic-update", r);
  }
};
__decorate([m({ type: c })], n.prototype, "elevationInfo", void 0), __decorate([m(l(i, "graphics"))], n.prototype, "graphics", void 0), __decorate([m({ type: ["show", "hide"] })], n.prototype, "listMode", void 0), __decorate([m()], n.prototype, "screenSizePerspectiveEnabled", void 0), __decorate([m({ readOnly: true })], n.prototype, "type", void 0), __decorate([m({ constructOnly: true })], n.prototype, "internal", void 0), n = __decorate([a("esri.layers.GraphicsLayer")], n);

export {
  n
};
//# sourceMappingURL=chunk-OARB4HVB.js.map
