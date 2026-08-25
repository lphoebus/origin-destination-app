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
  u
} from "./chunk-PNGBXYFX.js";
import {
  d
} from "./chunk-P2ZATJ76.js";
import {
  i
} from "./chunk-MHQVY7RU.js";
import {
  e as e2
} from "./chunk-FVMPABSB.js";
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

// node_modules/@arcgis/core/chunks/ColorMaterial.glsl.js
function u2(u3) {
  const v2 = new s(), { vertex: b, fragment: m, attributes: w, varyings: p2 } = v2, { hasVVColor: f2, hasVertexColors: h } = u3;
  return f(b, u3), v2.include(o), v2.include(r, u3), v2.include(u, u3), v2.include(d, u3), m.include(p, u3), v2.include(n, u3), v2.include(i, u3), w.add("position", "vec3"), f2 && w.add("colorFeatureAttribute", "float"), h || p2.add("vColor", "vec4"), p2.add("vpos", "vec3", { invariant: true }), b.uniforms.add(new e("uColor", (e3) => e3.color)), b.main.add(t`
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${h ? "vColor *= uColor;" : f2 ? "vColor = uColor * interpolateVVColor(colorFeatureAttribute);" : "vColor = uColor;"}
      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      gl_Position = transformPosition(proj, view, vpos);`), m.include(e2), m.main.add(t`discardBySlice(vpos);
discardByTerrainDepth();
outputColorHighlightOID(vColor, vpos, vColor.rgb);`), v2;
}
var v = Object.freeze(Object.defineProperty({ __proto__: null, build: u2 }, Symbol.toStringTag, { value: "Module" }));

export {
  u2 as u,
  v
};
//# sourceMappingURL=chunk-OBNQHGY6.js.map
