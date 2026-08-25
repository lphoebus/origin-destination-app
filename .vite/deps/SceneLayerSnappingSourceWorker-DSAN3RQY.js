import {
  S
} from "./chunk-QTHZ5PV7.js";
import "./chunk-5AWBLE2K.js";
import {
  b,
  j,
  v
} from "./chunk-4IU3T5IJ.js";
import {
  I,
  lt,
  q2,
  z
} from "./chunk-NN6BMFFP.js";
import "./chunk-C7WLYOQL.js";
import "./chunk-TK2EVVYP.js";
import "./chunk-ZTT7LSRG.js";
import {
  g as g2
} from "./chunk-HZQPQFNJ.js";
import "./chunk-EQAM4DBF.js";
import "./chunk-OGQHWOPB.js";
import "./chunk-FEQXF6QO.js";
import "./chunk-6JIJOPDX.js";
import "./chunk-V7Y3WM6L.js";
import "./chunk-DJ2VONAQ.js";
import "./chunk-JBITOOAG.js";
import "./chunk-6BMGEERX.js";
import "./chunk-PSY2F25Z.js";
import "./chunk-EZLF5T7L.js";
import {
  g,
  p,
  q,
  u
} from "./chunk-SPZYEASA.js";
import "./chunk-H7NF3WNO.js";
import "./chunk-H3DIC2LV.js";
import "./chunk-IABCCFYF.js";
import "./chunk-UGAC6FVR.js";
import "./chunk-WWZXCVZD.js";
import {
  n,
  t
} from "./chunk-NOPG2N5A.js";
import "./chunk-26FGXCQ6.js";
import "./chunk-LERWNH2Q.js";
import "./chunk-6YICR2EO.js";
import "./chunk-UJKR5KHP.js";
import "./chunk-HXC5WSBJ.js";
import {
  a2 as a
} from "./chunk-HPSHCA6S.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";
import "./chunk-PRKAQBHS.js";
import "./chunk-63GXB7XB.js";
import "./chunk-HQPAN4GW.js";
import "./chunk-PXFESYJY.js";
import "./chunk-BZQFVEAQ.js";
import {
  s
} from "./chunk-QRKINRAQ.js";
import "./chunk-KUWSTWZR.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/sceneLayerSnappingUtils.js
var n2 = 1e3;
function a2(t2, n3, a3) {
  const m = i;
  g(m, t2, 0.5), q(m, m, n3, 0.5);
  const f = p(m, t2);
  return u(m, m, a3), q2(m, f);
}
var i = n();

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/SceneLayerSnappingSourceWorker.js
var _ = class {
  constructor() {
    this._idToComponent = /* @__PURE__ */ new Map(), this._components = new S((e) => e.bounds), this._edges = new S((e) => e.bounds), this._tmpLineSegment = v(), this._tmpP1 = n(), this._tmpP2 = n(), this._tmpP3 = n(), this.remoteClient = null;
  }
  async fetchCandidates(e, o) {
    await Promise.resolve(), s(o), await this._ensureEdgeLocations(e, o);
    const s2 = [];
    return this._edges.forEachNeighbor((t2) => (this._addCandidates(e, t2, s2), s2.length < n2), e.bounds), { result: { candidates: s2 } };
  }
  async _ensureEdgeLocations(e, t2) {
    const o = [];
    if (this._components.forEachNeighbor((e2) => {
      if (null == e2.info) {
        const { id: t3, uid: s3 } = e2;
        o.push({ id: t3, uid: s3 });
      }
      return true;
    }, e.bounds), !o.length) return;
    const s2 = { components: o }, n3 = await this.remoteClient.invoke("fetchAllEdgeLocations", s2, t2 ?? {});
    for (const i2 of n3.components) this._setFetchEdgeLocations(i2);
  }
  async add(e) {
    const t2 = new w(e.id, e.bounds);
    return this._idToComponent.set(t2.id, t2), this._components.add([t2]), { result: {} };
  }
  async remove(e) {
    const t2 = this._idToComponent.get(e.id);
    if (t2) {
      const e2 = [];
      this._edges.forEachNeighbor((o) => (o.component === t2 && e2.push(o), true), t2.bounds), this._edges.remove(e2), this._components.remove([t2]), this._idToComponent.delete(t2.id);
    }
    return { result: {} };
  }
  _setFetchEdgeLocations(e) {
    const t2 = this._idToComponent.get(e.id);
    if (null == t2 || e.uid !== t2.uid) return;
    const o = g2.createView(e.locations), s2 = new Array(o.count), n3 = n(), r = n();
    for (let i2 = 0; i2 < o.count; i2++) {
      o.position0.getVec(i2, n3), o.position1.getVec(i2, r);
      const c2 = a2(n3, r, e.origin), d2 = new C(t2, i2, c2);
      s2[i2] = d2;
    }
    this._edges.add(s2);
    const { objectIds: c, origin: d } = e;
    t2.info = { locations: o, objectIds: c, origin: d };
  }
  _addCandidates(e, t2, o) {
    const { info: n3 } = t2.component, { origin: i2, objectIds: r } = n3, c = n3.locations, d = c.position0.getVec(t2.index, this._tmpP1), a3 = c.position1.getVec(t2.index, this._tmpP2);
    u(d, d, i2), u(a3, a3, i2);
    const p2 = r[c.componentIndex.get(t2.index)];
    this._addEdgeCandidate(e, p2, d, a3, o), j2(e, p2, d, o), j2(e, p2, a3, o);
  }
  _addEdgeCandidate(e, t2, o, s2, i2) {
    if (!e.returnEdge) return;
    const c = z(e.bounds, E), u2 = b(o, s2, this._tmpLineSegment), h = j(u2, c, this._tmpP3);
    lt(e.bounds, h) && i2.push({ type: "edge", objectId: t2, target: t(h), distance: p(c, h), start: t(o), end: t(s2) });
  }
};
_ = __decorate([a("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")], _);
var b2 = _;
function j2(e, t2, o, s2) {
  e.returnVertex && lt(e.bounds, o) && s2.push({ type: "vertex", objectId: t2, target: t(o), distance: p(I(e.bounds), o) });
}
var _w = class _w {
  constructor(e, t2) {
    this.id = e, this.bounds = t2, this.info = null, this.uid = ++_w.uid;
  }
};
_w.uid = 0;
var w = _w;
var C = class {
  constructor(e, t2, o) {
    this.component = e, this.index = t2, this.bounds = o;
  }
};
var E = n();
export {
  b2 as default
};
//# sourceMappingURL=SceneLayerSnappingSourceWorker-DSAN3RQY.js.map
