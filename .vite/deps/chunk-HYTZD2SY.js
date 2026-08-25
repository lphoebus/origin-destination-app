import {
  m as m3
} from "./chunk-N2FJI6TD.js";
import {
  m as m2
} from "./chunk-7VLZMF2B.js";
import {
  s as s3
} from "./chunk-I2W3LINK.js";
import {
  o
} from "./chunk-27A66LHG.js";
import {
  s as s2
} from "./chunk-5YBW6KQ6.js";
import {
  r
} from "./chunk-ZNU5NTGY.js";
import {
  n
} from "./chunk-4EJ2CVAA.js";
import {
  m2 as m
} from "./chunk-TSVVEDRS.js";
import {
  D,
  a2,
  w,
  x
} from "./chunk-HPSHCA6S.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";
import {
  mt,
  tt
} from "./chunk-EO4UMOUD.js";
import {
  a,
  i3 as i,
  s2 as s
} from "./chunk-KUWSTWZR.js";

// node_modules/@arcgis/core/webdoc/support/SlideThumbnail.js
var p;
var u = p = class extends n {
  constructor() {
    super(...arguments), this.url = "";
  }
  destroy() {
    this.url = "";
  }
  get isSecureUrl() {
    return mt(this.url);
  }
  get isDataURI() {
    return tt(this.url);
  }
  clone() {
    return new p({ url: this.url });
  }
};
__decorate([m({ type: String, json: { write: { isRequired: true } } })], u.prototype, "url", void 0), __decorate([m()], u.prototype, "isSecureUrl", null), __decorate([m()], u.prototype, "isDataURI", null), u = p = __decorate([a2("esri.webdoc.support.SlideThumbnail")], u);

// node_modules/@arcgis/core/webdoc/support/timeProperties.js
var m4 = { type: m2, json: { read: { source: "timeExtent", reader: (e) => e ? Array.isArray(e) ? m2.fromArray(e) : m2.fromJSON(e) : null }, write: { writer: (r2, t, o2, m5) => {
  r2 && (r2.isEmpty ? (m5 == null ? void 0 : m5.messages) && m5.messages.push(new s("invalid-timeExtent", "TimeExtent cannot be empty")) : t[o2] = r2.toArray());
}, target: { timeExtent: { type: [[x, D]] } } } } };

// node_modules/@arcgis/core/webmap/Bookmark.js
var h;
var y = h = class extends s3(n) {
  constructor(t) {
    super(t), this.name = null, this.thumbnail = new u(), this.timeExtent = null;
  }
  castThumbnail(t) {
    return "string" == typeof t ? new u({ url: t }) : w(u, t);
  }
  set viewpoint(t) {
    const { targetGeometry: e, scale: o2 } = t;
    null != e && "point" === e.type && null == o2 && i.getLogger(this).warn("Bookmark.viewpoint should include 'scale' when its targetGeometry is a point.", t), this._set("viewpoint", t);
  }
  readViewpoint(t, o2) {
    const { extent: r2, viewpoint: i2 } = o2;
    return m3.fromJSON(i2 || { targetGeometry: r2 });
  }
  writeViewpoint(t, e, r2, i2) {
    if (!t) return;
    const { targetGeometry: n2 } = t;
    if (null != n2 && "extent" !== n2.type) {
      const t2 = "Bookmark.viewpoint cannot be written to JSON when the viewpoint's targetGeometry is not an extent.";
      return void ((i2 == null ? void 0 : i2.messages) ? i2.messages.push(new s("property:unsupported", t2)) : i.getLogger(this).error(t2));
    }
    null != n2 && (e.extent = n2.toJSON()), e[r2] = t.toJSON();
  }
  clone() {
    return new h(a({ name: this.name, thumbnail: this.thumbnail, timeExtent: this.timeExtent, viewpoint: this.viewpoint }));
  }
};
__decorate([m({ type: String, nonNullable: true, json: { write: { isRequired: true } } })], y.prototype, "name", void 0), __decorate([m({ type: u, json: { write: { overridePolicy: (t) => ({ enabled: !(!t || !t.url) }) } } })], y.prototype, "thumbnail", void 0), __decorate([s2("thumbnail")], y.prototype, "castThumbnail", null), __decorate([m(m4)], y.prototype, "timeExtent", void 0), __decorate([m({ type: m3, nonNullable: true, json: { write: true } })], y.prototype, "viewpoint", null), __decorate([o("viewpoint", ["extent", "viewpoint"])], y.prototype, "readViewpoint", null), __decorate([r("viewpoint")], y.prototype, "writeViewpoint", null), y = h = __decorate([a2("esri.webmap.Bookmark")], y);
var f = y;

export {
  u,
  f
};
//# sourceMappingURL=chunk-HYTZD2SY.js.map
