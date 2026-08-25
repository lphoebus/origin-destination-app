import {
  a as a3
} from "./chunk-YOKAK57B.js";
import {
  f,
  l
} from "./chunk-VLH4C4OL.js";
import {
  r as r2
} from "./chunk-HXC5WSBJ.js";
import {
  _
} from "./chunk-NOVKMJNS.js";
import {
  o
} from "./chunk-27A66LHG.js";
import {
  s
} from "./chunk-5YBW6KQ6.js";
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
  a,
  a2
} from "./chunk-HPSHCA6S.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";

// node_modules/@arcgis/core/CameraLayout.js
var t = class extends f {
  constructor(o2) {
    super(o2), this.row = 0, this.column = 0, this.rows = 1, this.columns = 1;
  }
  equals(o2) {
    return null != o2 && (this.row === o2.row && this.rows === o2.rows && this.column === o2.column && this.columns === o2.columns);
  }
};
__decorate([m({ type: Number, nonNullable: true, json: { read: false, write: false } })], t.prototype, "row", void 0), __decorate([m({ type: Number, nonNullable: true, json: { read: false, write: false } })], t.prototype, "column", void 0), __decorate([m({ type: Number, nonNullable: true, json: { read: false, write: false } })], t.prototype, "rows", void 0), __decorate([m({ type: Number, nonNullable: true, json: { read: false, write: false } })], t.prototype, "columns", void 0), t = __decorate([a2("esri.CameraLayout")], t);
var l2 = t;

// node_modules/@arcgis/core/Camera.js
var y = class extends l(n) {
  constructor(...o2) {
    super(...o2), this.position = new _([0, 0, 0]), this.heading = 0, this.tilt = 0, this.fov = 55, this.layout = new l2();
  }
  normalizeCtorArgs(o2, r3, t2, e) {
    if (o2 && "object" == typeof o2 && ("x" in o2 || Array.isArray(o2))) {
      const i = { position: o2 };
      return null != r3 && (i.heading = r3), null != t2 && (i.tilt = t2), null != e && (i.fov = e), i;
    }
    return o2;
  }
  writePosition(o2, r3, t2, e) {
    const i = o2.clone();
    i.x = a(o2.x || 0), i.y = a(o2.y || 0), i.z = o2.hasZ ? a(o2.z || 0) : o2.z, r3[t2] = i.write({}, e);
  }
  readPosition(o2, r3) {
    const t2 = new _();
    return t2.read(o2, r3), t2.x = a(t2.x || 0), t2.y = a(t2.y || 0), t2.z = t2.hasZ ? a(t2.z || 0) : t2.z, t2;
  }
  equals(o2) {
    return null != o2 && (this.tilt === o2.tilt && this.heading === o2.heading && this.fov === o2.fov && this.position.equals(o2.position) && this.layout.equals(o2.layout));
  }
};
__decorate([m({ type: _, json: { write: { isRequired: true } } })], y.prototype, "position", void 0), __decorate([r("position")], y.prototype, "writePosition", null), __decorate([o("position")], y.prototype, "readPosition", null), __decorate([m({ type: Number, nonNullable: true, json: { write: { isRequired: true } } }), s((o2) => a3.normalize(a(o2)))], y.prototype, "heading", void 0), __decorate([m({ type: Number, nonNullable: true, json: { write: { isRequired: true } } }), s((o2) => r2(a(o2), -180, 180))], y.prototype, "tilt", void 0), __decorate([m({ type: Number, nonNullable: true, json: { default: 55, write: true } }), s((o2) => r2(a(o2, 55), 1, 170))], y.prototype, "fov", void 0), __decorate([m({ type: l2, nonNullable: true, json: { read: false, write: false } })], y.prototype, "layout", void 0), y = __decorate([a2("esri.Camera")], y);
var d = y;

export {
  d
};
//# sourceMappingURL=chunk-4BAF4JCZ.js.map
