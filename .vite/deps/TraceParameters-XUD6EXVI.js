import {
  n as n2
} from "./chunk-YYBHQFVV.js";
import {
  p
} from "./chunk-34QY3NUE.js";
import {
  c
} from "./chunk-XJ34JWUR.js";
import {
  f
} from "./chunk-7J6TZQJ4.js";
import {
  r
} from "./chunk-ZNU5NTGY.js";
import "./chunk-J3VZVJYU.js";
import "./chunk-U2QKMJ4B.js";
import "./chunk-UWOUWJRN.js";
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

// node_modules/@arcgis/core/rest/networks/support/TraceParameters.js
var c2;
var u = c2 = class extends n {
  static from(t) {
    return m(c2, t);
  }
  constructor(t) {
    super(t), this.namedTraceConfigurationGlobalId = null, this.gdbVersion = null, this.traceLocations = [], this.moment = null, this.outSpatialReference = null, this.traceConfiguration = null, this.resultTypes = null, this.traceType = null;
  }
  writeOutSR(t, o, r2) {
    if (null != t) {
      const { wkid: e, latestWkid: i, wkt: s, wkt2: p2 } = t;
      o[r2] = JSON.stringify({ wkid: e ?? void 0, latestWkid: i ?? void 0, wkt: s ?? void 0, wkt2: p2 ?? void 0 });
    }
  }
};
__decorate([m2({ type: String, json: { read: { source: "traceConfigurationGlobalId" }, write: { target: "traceConfigurationGlobalId" } } })], u.prototype, "namedTraceConfigurationGlobalId", void 0), __decorate([m2({ type: String, json: { write: true } })], u.prototype, "gdbVersion", void 0), __decorate([m2({ type: [p], json: { write: true } })], u.prototype, "traceLocations", void 0), __decorate([m2({ type: Date, json: { type: Number, write: { writer: (t, o) => {
  o.moment = t ? t.getTime() : null;
} } } })], u.prototype, "moment", void 0), __decorate([m2({ type: f, json: { write: { allowNull: true, target: "outSR" } } })], u.prototype, "outSpatialReference", void 0), __decorate([r("outSpatialReference")], u.prototype, "writeOutSR", null), __decorate([m2({ type: n2, json: { write: true } })], u.prototype, "traceConfiguration", void 0), __decorate([m2({ type: [Object], json: { write: true } })], u.prototype, "resultTypes", void 0), __decorate([m2({ type: c.apiValues, json: { type: c.jsonValues, read: c.read, write: c.write } })], u.prototype, "traceType", void 0), u = c2 = __decorate([a("esri.rest.networks.support.TraceParameters")], u);
var m3 = u;
export {
  m3 as default
};
//# sourceMappingURL=TraceParameters-XUD6EXVI.js.map
