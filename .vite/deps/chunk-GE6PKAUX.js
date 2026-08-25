import {
  e
} from "./chunk-IBYBIPKO.js";
import {
  c
} from "./chunk-3HOZN44V.js";
import {
  o
} from "./chunk-AK5YCCM7.js";
import {
  s
} from "./chunk-WHRWR3UA.js";
import {
  e as e2
} from "./chunk-GVIRILEN.js";
import {
  t
} from "./chunk-LKEWZQLY.js";
import {
  r
} from "./chunk-NOPG2N5A.js";

// node_modules/@arcgis/core/chunks/TextureOnly.glsl.js
var a = class extends c {
  constructor() {
    super(...arguments), this.color = r(1, 1, 1);
  }
};
function n() {
  const e3 = new s();
  return e3.include(o), e3.fragment.uniforms.add(new e2("tex", (e4) => e4.texture), new e("uColor", (e4) => e4.color)), e3.fragment.main.add(t`vec4 texColor = texture(tex, uv);
fragColor = texColor * vec4(uColor, 1.0);`), e3;
}
var m = Object.freeze(Object.defineProperty({ __proto__: null, TextureOnlyPassParameters: a, build: n }, Symbol.toStringTag, { value: "Module" }));

export {
  a,
  n,
  m
};
//# sourceMappingURL=chunk-GE6PKAUX.js.map
