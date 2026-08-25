import {
  d,
  g,
  w
} from "./chunk-OIZP3Q4S.js";
import {
  n as n2
} from "./chunk-PI6EDVBU.js";
import {
  m as m2
} from "./chunk-SBHNAU24.js";
import {
  f
} from "./chunk-7J6TZQJ4.js";
import {
  n
} from "./chunk-4EJ2CVAA.js";
import {
  m2 as m
} from "./chunk-TSVVEDRS.js";
import {
  a2 as a
} from "./chunk-HPSHCA6S.js";
import {
  o
} from "./chunk-PB4SYOXK.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";
import {
  s2 as s
} from "./chunk-KUWSTWZR.js";

// node_modules/@arcgis/core/layers/support/ParquetEncodingLocation.js
var s2 = class extends n {
  constructor(o2) {
    super(o2), this.type = "location", this.latitudeFieldName = null, this.longitudeFieldName = null;
  }
};
__decorate([m({ type: ["location"], readOnly: true, json: { write: true } })], s2.prototype, "type", void 0), __decorate([m({ json: { write: true } })], s2.prototype, "latitudeFieldName", void 0), __decorate([m({ json: { write: true } })], s2.prototype, "longitudeFieldName", void 0), s2 = __decorate([a("esri.layers.support.ParquetEncodingLocation")], s2);

// node_modules/@arcgis/core/layers/support/ParquetEncodingWkb.js
var s3 = class extends n {
  constructor(r) {
    super(r), this.type = "wkb", this.primaryFieldName = null;
  }
};
__decorate([m({ type: ["wkb"], readOnly: true, json: { write: true } })], s3.prototype, "type", void 0), __decorate([m({ json: { write: true } })], s3.prototype, "orientation", void 0), __decorate([m({ json: { write: true } })], s3.prototype, "primaryFieldName", void 0), s3 = __decorate([a("esri.layers.support.ParquetEncodingWkb")], s3);

// node_modules/@arcgis/core/layers/support/parquetUtils.js
var c = new o({ esriGeometryPoint: "point", esriGeometryPolygon: "polygon", esriGeometryPolyline: "polyline", esriGeometryMultipoint: "multipoint" });
function p(e) {
  return c.toJSON(e);
}
function f2(e) {
  return c.fromJSON(e);
}
async function y(e, o2 = {}) {
  if (e.geometryType && e.spatialReference && e.encoding && e.fields) return e;
  if (e.urls.length < 1) throw new s("parquet:bad-input", "At least one url must be specified", e);
  const r = await d(e.urls.getItemAt(0), { getCustomParameters: () => o2.customParameters }), l = w(r), s4 = { ...e, file: r };
  null == s4.fields && (s4.fields = r.fields().map((e2) => m2.fromJSON({ name: e2.name, type: e2.type }))), null == s4.encoding && (s4.encoding = g2(l, s4.fields));
  const c2 = g(r);
  if (c2) switch (c2.mode) {
    case "z":
      s4.displayOptimization = { mode: "z" };
      break;
    case "xz": {
      const e2 = c2.multiscale;
      if (!e2) throw new s("bad-format", "XZ display optimization requires multiscale geometries");
      s4.displayOptimization = { mode: "xz", multiscale: e2 };
      break;
    }
  }
  if (!s4.encoding) return s4;
  switch (s4.encoding.type) {
    case "location":
      null == s4.spatialReference && (s4.spatialReference = f.WGS84), null == s4.geometryType && (s4.geometryType = "point");
      break;
    case "wkb": {
      if (!l) return s4;
      const e2 = l.primary_column, t = l.columns[e2];
      if (s4.geometryType || (s4.geometryType = P(t)), s4.spatialReference || (s4.spatialReference = b(t)), s4.fields) for (const o3 of Object.keys(l.columns)) s4.fields = s4.fields.filter((e3) => e3.name !== o3);
    }
  }
  return s4;
}
function g2(e, t) {
  if (null != e) {
    const t2 = e.primary_column, o3 = e.columns[t2];
    return new s3({ primaryFieldName: t2, orientation: o3.orientation ?? null });
  }
  const o2 = n2(t.map((e2) => e2.name));
  return o2.latitudeFieldName && o2.longitudeFieldName ? new s2({ latitudeFieldName: o2.latitudeFieldName, longitudeFieldName: o2.longitudeFieldName }) : null;
}
function w2(e) {
  switch (e) {
    case "Point":
      return "point";
    case "Polygon":
    case "MultiPolygon":
      return "polygon";
    case "LineString":
      return "polyline";
    case "MultiPoint":
      return "multipoint";
    default:
      return null;
  }
}
function P(e) {
  const { geometry_types: o2 } = e, n3 = /* @__PURE__ */ new Set();
  for (const t of o2) {
    const e2 = w2(t);
    e2 && n3.add(e2);
  }
  if (n3.size > 1) throw new s("unsupported", "Parquet mixed geometry types are not support", { geometryTypes: n3 });
  return 1 === n3.size ? n3.values().next().value : void 0;
}
function b(e) {
  var _a, _b;
  const t = (_b = (_a = e.crs) == null ? void 0 : _a.id) == null ? void 0 : _b.code;
  return t && "number" == typeof t ? new f({ wkid: t }) : void 0;
}

export {
  s2 as s,
  s3 as s2,
  p,
  f2 as f,
  y
};
//# sourceMappingURL=chunk-UBVTBAHV.js.map
