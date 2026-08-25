import {
  r
} from "./chunk-QRI7345Z.js";
import {
  o
} from "./chunk-HZDVRU4W.js";
import {
  n
} from "./chunk-3CBUHP6N.js";
import {
  p
} from "./chunk-ODT736DD.js";
import {
  f
} from "./chunk-WVJWBF3D.js";
import {
  e
} from "./chunk-BWZG6ZZT.js";
import {
  s
} from "./chunk-WHRWR3UA.js";
import {
  t
} from "./chunk-LKEWZQLY.js";

// node_modules/@arcgis/core/chunks/NativeLine.glsl.js
function a(a2) {
  const d2 = new s(), { vertex: g, fragment: c, varyings: m } = d2;
  return d2.fragment.include(p, a2), d2.include(o), d2.include(r, a2), d2.include(n, a2), f(g, a2), d2.attributes.add("position", "vec3"), m.add("vpos", "vec3", { invariant: true }), g.main.add(t`vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);`), a2.hasVertexColors || c.uniforms.add(new e("constantColor", (e2) => e2.color)), c.main.add(t`
    discardBySlice(vpos);
    vec4 color = ${a2.hasVertexColors ? "vColor" : "constantColor"};
    outputColorHighlightOID(color, vpos, color.rgb);
  `), d2;
}
var d = Object.freeze(Object.defineProperty({ __proto__: null, build: a }, Symbol.toStringTag, { value: "Module" }));

export {
  a,
  d
};
//# sourceMappingURL=chunk-XUSULVYZ.js.map
