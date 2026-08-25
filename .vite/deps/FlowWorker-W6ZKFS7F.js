import {
  f as f2,
  x
} from "./chunk-A5PR6K4S.js";
import {
  d,
  f
} from "./chunk-DSPBOXLE.js";
import "./chunk-YOKAK57B.js";
import "./chunk-PSH6CRUA.js";
import "./chunk-HXC5WSBJ.js";
import "./chunk-66BNN6ZJ.js";
import "./chunk-NOVKMJNS.js";
import "./chunk-27A66LHG.js";
import "./chunk-5YBW6KQ6.js";
import "./chunk-6LIC47AK.js";
import "./chunk-7J6TZQJ4.js";
import "./chunk-ZNU5NTGY.js";
import "./chunk-J3VZVJYU.js";
import "./chunk-U2QKMJ4B.js";
import "./chunk-UWOUWJRN.js";
import "./chunk-4EJ2CVAA.js";
import "./chunk-TSVVEDRS.js";
import {
  a2 as a
} from "./chunk-HPSHCA6S.js";
import "./chunk-PB4SYOXK.js";
import "./chunk-GJFVHE2X.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";
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
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/views/3d/support/flow/FlowWorker.js
var i = class {
  constructor() {
    this._tileData = /* @__PURE__ */ new Map();
  }
  async generateStreamlines(t) {
    const { flowData: e, flowExtentInfo: r, needsMagnitude: o, simulationSettings: a2, startPositions: i2 } = t, n2 = l(f(a2, e), a2, r.modelSize, o, i2);
    return { result: { streamlines: n2 }, transferList: n2 == null ? void 0 : n2.map((t2) => t2.vertices.buffer) };
  }
  async generateTiledStreamlines(t) {
    const { flowDataTiles: e, flowExtentInfo: s, needsMagnitude: r, reset: a2, simulationSettings: i2, startPositions: n2 } = t;
    this._updateTileData(e, a2);
    const c = l(x(i2, this._tileData, s), i2, s.modelSize, r, n2);
    return { result: { streamlines: c }, transferList: (c == null ? void 0 : c.map((t2) => t2.vertices.buffer)) ?? [] };
  }
  _updateTileData(t, e) {
    e && this._tileData.forEach((e2, s) => {
      null == t.get(s) && this._tileData.delete(s);
    }), t.forEach((t2, e2) => {
      "delete" === t2.type ? this._tileData.delete(e2) : "on-worker" !== t2.type && "waiting" !== t2.type && this._tileData.set(e2, t2.data);
    });
  }
};
i = __decorate([a("esri.views.3d.support.flow.FlowWorker")], i);
var n = i;
function l(t, e, s, o, i2) {
  if (null == t) return;
  const n2 = d(e, t, s[0], s[1], { positions: i2 }), l2 = [], c = f2(o);
  for (const { vertices: r, stage: a2 } of n2) {
    const t2 = new Float32Array(r.length * c);
    for (let e2 = 0; e2 < r.length; e2++) t2[e2 * c] = r[e2].x, t2[e2 * c + 1] = r[e2].y, t2[e2 * c + 2] = r[e2].t, o && (t2[e2 * c + 3] = r[e2].speed);
    l2.push({ vertices: t2, stage: a2, hasMagnitude: o });
  }
  return l2;
}
export {
  n as default
};
//# sourceMappingURL=FlowWorker-W6ZKFS7F.js.map
