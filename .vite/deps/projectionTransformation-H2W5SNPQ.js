import {
  Jc,
  Lc,
  Og,
  Rg,
  Wg,
  Yg,
  t_,
  zc
} from "./chunk-WDVA66U2.js";
import "./chunk-46RQS76J.js";
import "./chunk-JJZLVRAQ.js";
import {
  n
} from "./chunk-3QMQSBQ4.js";
import "./chunk-KNBNEFVY.js";
import "./chunk-JTZJWVKG.js";
import "./chunk-A44PNKPT.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/geometry/operators/support/projectionTransformation.js
function f(c, f2, m) {
  var _a;
  let u, l;
  if (m == null ? void 0 : m.geographicTransformation) {
    if ((_a = m.geographicTransformation.steps) == null ? void 0 : _a.length) {
      const s = new t_();
      s.setInputSpatialReference(c), s.setOutputSpatialReference(f2);
      for (const e of m.geographicTransformation.steps) {
        let a;
        a = e.wkid ? Lc(e.wkid, e.isInverse) : zc(e.wkt, e.isInverse), s.add(a);
      }
      u = s.create();
    } else u = Jc();
    if (m.extendedParams) {
      l = Wg();
      const { densificationStep: e } = m.extendedParams;
      null != e && (l.densificationStep = e);
    }
  } else if (m == null ? void 0 : m.areaOfInterestExtent) return Yg(c, f2, p(m.areaOfInterestExtent));
  return u ? Rg(c, f2, u, l) : Og(c, f2);
}
function p(e) {
  return n.construct(e.xmin, e.ymin, e.xmax, e.ymax);
}
export {
  f as createProjectionTransformation
};
//# sourceMappingURL=projectionTransformation-H2W5SNPQ.js.map
