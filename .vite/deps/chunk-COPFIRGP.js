import {
  n as n3,
  r
} from "./chunk-B3JUOOGN.js";
import {
  n as n2,
  u
} from "./chunk-KBZWDSXU.js";
import {
  l
} from "./chunk-VLH4C4OL.js";
import {
  s
} from "./chunk-5YBW6KQ6.js";
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
import {
  i3 as i
} from "./chunk-KUWSTWZR.js";

// node_modules/@arcgis/core/geometry/support/MeshComponent.js
var u2;
var h = u2 = class extends l(n) {
  static from(r2) {
    return m(u2, r2);
  }
  constructor(r2) {
    super(r2), this.faces = null, this.material = null, this.name = void 0, this.shading = "source", this.trustSourceNormals = false;
  }
  castFaces(r2) {
    return n3(r2, Uint32Array, [Uint16Array], { loggerTag: ".faces=", stride: 3 }, i.getLogger(this));
  }
  castMaterial(r2) {
    return m(r2 && "object" == typeof r2 && ("metallic" in r2 || "roughness" in r2 || "metallicRoughnessTexture" in r2) ? u : n2, r2);
  }
  get memoryUsage() {
    let r2 = 0;
    return null != this.faces && (r2 += this.faces.byteLength), null != this.material && (r2 += this.material.memoryUsage), r2;
  }
};
__decorate([m2({ json: { write: r } })], h.prototype, "faces", void 0), __decorate([s("faces")], h.prototype, "castFaces", null), __decorate([m2({ type: n2, json: { write: true } })], h.prototype, "material", void 0), __decorate([s("material")], h.prototype, "castMaterial", null), __decorate([m2({ json: { write: true } })], h.prototype, "name", void 0), __decorate([m2({ type: String, json: { write: true } })], h.prototype, "shading", void 0), __decorate([m2({ type: Boolean })], h.prototype, "trustSourceNormals", void 0), h = u2 = __decorate([a("esri.geometry.support.MeshComponent")], h);

export {
  h
};
//# sourceMappingURL=chunk-COPFIRGP.js.map
