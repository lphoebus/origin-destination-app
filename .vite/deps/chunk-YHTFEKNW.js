import {
  e as e2
} from "./chunk-H4DXYBOY.js";
import {
  e
} from "./chunk-QDCHXPXG.js";
import {
  t
} from "./chunk-LKEWZQLY.js";
import {
  n as n2
} from "./chunk-H7NF3WNO.js";
import {
  n
} from "./chunk-H3DIC2LV.js";
import {
  s
} from "./chunk-IABCCFYF.js";
import {
  o
} from "./chunk-6YICR2EO.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl.js
function f(r) {
  r.fragment.uniforms.add(new e2("projInfo", (r2) => n3(r2.camera))), r.fragment.uniforms.add(new e("zScale", (r2) => m(r2.camera))), r.fragment.code.add(t`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`);
}
function n3(r) {
  const o2 = r.projectionMatrix;
  return 0 === o2[11] ? s(c, 2 / (r.fullWidth * o2[0]), 2 / (r.fullHeight * o2[5]), (1 + o2[12]) / o2[0], (1 + o2[13]) / o2[5]) : s(c, -2 / (r.fullWidth * o2[0]), -2 / (r.fullHeight * o2[5]), (1 - o2[8]) / o2[0], (1 - o2[9]) / o2[5]);
}
var c = n();
function m(o2) {
  return 0 === o2.projectionMatrix[11] ? o(l, 0, 1) : o(l, 1, 0);
}
var l = n2();

export {
  f
};
//# sourceMappingURL=chunk-YHTFEKNW.js.map
