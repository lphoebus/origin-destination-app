import {
  J
} from "./chunk-QFVNOJSP.js";
import "./chunk-2FU45OJM.js";
import "./chunk-2HZRCXTJ.js";
import "./chunk-WQNPUDXY.js";
import {
  Be,
  Ee,
  Ue
} from "./chunk-FQCWOTPI.js";
import {
  al
} from "./chunk-WDVA66U2.js";
import "./chunk-46RQS76J.js";
import {
  s,
  t
} from "./chunk-JJZLVRAQ.js";
import {
  n
} from "./chunk-3QMQSBQ4.js";
import {
  j
} from "./chunk-KNBNEFVY.js";
import "./chunk-JTZJWVKG.js";
import "./chunk-7J6TZQJ4.js";
import "./chunk-ZNU5NTGY.js";
import {
  F
} from "./chunk-J3VZVJYU.js";
import "./chunk-U2QKMJ4B.js";
import "./chunk-UWOUWJRN.js";
import "./chunk-4EJ2CVAA.js";
import "./chunk-TSVVEDRS.js";
import "./chunk-HPSHCA6S.js";
import "./chunk-PB4SYOXK.js";
import "./chunk-GJFVHE2X.js";
import "./chunk-A44PNKPT.js";
import "./chunk-EO4UMOUD.js";
import "./chunk-PRKAQBHS.js";
import "./chunk-CYEWK46L.js";
import "./chunk-NVNJVVMF.js";
import "./chunk-63GXB7XB.js";
import "./chunk-5XIDIYOG.js";
import "./chunk-QLJQMJ35.js";
import "./chunk-HQPAN4GW.js";
import "./chunk-PXFESYJY.js";
import "./chunk-BZQFVEAQ.js";
import "./chunk-QRKINRAQ.js";
import "./chunk-KUWSTWZR.js";
import {
  N
} from "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorGraphicBuffer.js
var m = class {
  getOperatorType() {
    return 10111;
  }
  supportsCurves() {
    return true;
  }
  accelerateGeometry(e, t2, r) {
    return false;
  }
  canAccelerateGeometry(e) {
    return false;
  }
  executeMany(e, t2, r, i, n2, m3, o2, c2, h, a2, _) {
    if (h) {
      const h2 = new u(e, t2, r, i, n2, m3, o2, c2, _);
      return new al().executeMany(h2, t2, _, 2);
    }
    return new u(e, t2, r, i, n2, m3, o2, c2, _);
  }
};
var u = class extends t {
  constructor(e, t2, r, s3, m3, u2, o2, c2, h) {
    super(), this.m_currentUnionEnvelope2D = new n(), this.m_index = -1, this.m_dindex = -1, this.m_progressTracker = h, this.m_bufferer = new J(h), this.m_inputGeoms = e, this.m_spatialReference = t2, this.m_distances = r, this.m_maxDeviation = o2, this.m_maxVerticesInFullCircle = c2, this.m_joins = s3, this.m_caps = m3, this.m_miterLimit = u2;
  }
  tock() {
    return true;
  }
  getRank() {
    return 1;
  }
  next() {
    {
      let e;
      for (; e = this.m_inputGeoms.next(); ) return j(e), this.m_index = this.m_inputGeoms.getGeometryID(), this.m_dindex + 1 < this.m_distances.length && this.m_dindex++, this.buffer(e, this.m_distances[this.m_dindex]);
      return null;
    }
  }
  getGeometryID() {
    return this.m_index;
  }
  buffer(e, t2) {
    return this.m_bufferer.buffer(e, t2, this.m_spatialReference, this.m_joins, this.m_caps, this.m_miterLimit, this.m_maxDeviation, this.m_maxVerticesInFullCircle);
  }
};
var o = new m();
function c(e, r, s3, i, n2, m3, u2, c2, h) {
  const a2 = o.executeMany(new s(e), r, s3, i, n2, m3, u2, c2, h, 0, null);
  return Array.from(a2);
}

// node_modules/@arcgis/core/geometry/operators/json/graphicBufferOperator.js
var m2 = { round: 0, miter: 1, bevel: 2 };
var s2 = { round: 0, butt: 1, square: 2 };
function a(a2, u2, p, c2, f = {}) {
  let { miterLimit: l = 10, maxDeviation: j2 = NaN, maxVerticesInFullCircle: x = 96, union: v = false, unit: b } = f;
  const [d, y] = Be(a2);
  if (b) {
    const r = Ee(a2);
    r && (u2 = u2.map((o2) => F(o2, b, r)), j2 && (j2 = F(j2, b, r)));
  }
  return c(d, y, u2, m2[p], s2[c2], l, j2, x, v).map((r) => Ue(r, y)).filter(N);
}
export {
  a as executeMany
};
//# sourceMappingURL=graphicBufferOperator-QOKDA6WP.js.map
