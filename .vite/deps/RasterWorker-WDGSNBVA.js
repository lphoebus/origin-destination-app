import {
  n,
  t,
  u as u3
} from "./chunk-CXCPQKHI.js";
import {
  T as T2
} from "./chunk-G4OYF5ZW.js";
import "./chunk-BHZ75SYR.js";
import {
  j as j2,
  re
} from "./chunk-XMYNJUI5.js";
import {
  O,
  R,
  k2 as k,
  y
} from "./chunk-FFHXKFOV.js";
import {
  D,
  E,
  N,
  T,
  W,
  f2 as f,
  j,
  u,
  u2
} from "./chunk-7YB5CBL3.js";
import {
  c as c3
} from "./chunk-DSPBOXLE.js";
import {
  c as c2
} from "./chunk-ERXRREFJ.js";
import "./chunk-PAB34USM.js";
import "./chunk-WGFWIFPQ.js";
import "./chunk-3Q736RJI.js";
import "./chunk-FDPM4CVW.js";
import "./chunk-H3DIC2LV.js";
import "./chunk-IABCCFYF.js";
import "./chunk-SBHNAU24.js";
import "./chunk-ZM5SAAQW.js";
import "./chunk-VF3OV6F3.js";
import "./chunk-TPDXVISU.js";
import {
  c
} from "./chunk-VLLUHJV4.js";
import "./chunk-FKDE64FM.js";
import "./chunk-57YJ4LUD.js";
import "./chunk-ELQLS5UR.js";
import "./chunk-MPABLVG5.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-GTUYDBKL.js";
import "./chunk-MWWK5WRN.js";
import "./chunk-PDYTYXXK.js";
import "./chunk-B7MDSPWU.js";
import "./chunk-JM7F7WRC.js";
import "./chunk-3AVEDGU7.js";
import "./chunk-26FGXCQ6.js";
import "./chunk-LERWNH2Q.js";
import "./chunk-6YICR2EO.js";
import "./chunk-PSH6CRUA.js";
import "./chunk-UJKR5KHP.js";
import "./chunk-HXC5WSBJ.js";
import {
  r
} from "./chunk-5HYMAKZL.js";
import {
  z
} from "./chunk-66BNN6ZJ.js";
import {
  _
} from "./chunk-NOVKMJNS.js";
import "./chunk-27A66LHG.js";
import "./chunk-5YBW6KQ6.js";
import "./chunk-VNR3A2IW.js";
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

// node_modules/@arcgis/core/layers/support/rasterTransforms/IdentityTransform.js
var e;
var p = e = class extends t {
  constructor() {
    super(...arguments), this.type = "identity";
  }
  clone() {
    return new e();
  }
};
__decorate([r({ IdentityXform: "identity" })], p.prototype, "type", void 0), p = e = __decorate([a("esri.layers.support.rasterTransforms.IdentityTransform")], p);

// node_modules/@arcgis/core/layers/support/rasterTransforms/utils.js
var n2 = { GCSShiftXform: n, IdentityXform: p, PolynomialXform: u3 };
function f2(r2) {
  const o = r2 == null ? void 0 : r2.type;
  if (!o) return null;
  const t2 = n2[r2 == null ? void 0 : r2.type];
  if (t2) {
    const o2 = new t2();
    return o2.read(r2), o2;
  }
  return null;
}

// node_modules/@arcgis/core/layers/support/RasterWorker.js
function B(e2) {
  if (!e2) return { result: null, transferList: [] };
  const { pixelBlock: r2, transferList: t2 } = e2.getTransferableObject();
  return { result: r2, transferList: t2 };
}
var N2 = class {
  convertVectorFieldData(e2) {
    const r2 = c2.fromJSON(e2.pixelBlock), t2 = B(f(r2, e2.type));
    return Promise.resolve(t2);
  }
  convertPixelBlockToFeatures(r2) {
    const t2 = j({ pixelBlock: c2.fromJSON(r2.pixelBlock), extent: z.fromJSON(r2.extent), fieldNames: r2.fieldNames, skipFactor: r2.skipFactor, skipSpatialReference: true, pixelIdOffset: r2.pixelIdOffset, imageRowSize: r2.imageRowSize });
    return Promise.resolve(t2);
  }
  computeStatisticsHistograms(e2) {
    const r2 = c2.fromJSON(e2.pixelBlock), t2 = k(r2, { histogramSize: e2.histogramSize, includeSkewnessKurtosis: e2.includeSkewnessKurtosis });
    return Promise.resolve(t2);
  }
  async decode(e2) {
    return B(await R(e2.data, e2.options));
  }
  symbolize(r2) {
    r2.pixelBlock = c2.fromJSON(r2.pixelBlock), r2.extent = r2.extent ? z.fromJSON(r2.extent) : null;
    const t2 = B(this.symbolizer.symbolize(r2));
    return Promise.resolve(t2);
  }
  highlightPixels(e2) {
    const r2 = c2.fromJSON(e2.pixelBlock), t2 = c2.fromJSON(e2.renderedPixelBlock);
    return u(r2, t2, e2.highlightOptions), Promise.resolve(t2.toJSON());
  }
  async updateSymbolizer(e2) {
    var _a;
    this.symbolizer = O.fromJSON(e2.symbolizerJSON), e2.histograms && "rasterStretch" === ((_a = this.symbolizer) == null ? void 0 : _a.rendererJSON.type) && (this.symbolizer.rendererJSON.histograms = e2.histograms);
  }
  async updateRasterFunction(e2) {
    this.rasterFunction = T2(e2.rasterFunctionJSON);
  }
  async process(t2) {
    var _a;
    return B(this.rasterFunction.process({ extent: z.fromJSON(t2.extent), primaryPixelBlocks: t2.primaryPixelBlocks.map((e2) => null != e2 ? c2.fromJSON(e2) : null), primaryPixelSizes: (_a = t2.primaryPixelSizes) == null ? void 0 : _a.map((e2) => null != e2 ? _.fromJSON(e2) : null), primaryRasterIds: t2.primaryRasterIds }));
  }
  stretch(e2) {
    const r2 = B(this.symbolizer.simpleStretch(c2.fromJSON(e2.srcPixelBlock), e2.stretchParams));
    return Promise.resolve(r2);
  }
  estimateStatisticsHistograms(e2) {
    const r2 = y(c2.fromJSON(e2.srcPixelBlock));
    return Promise.resolve(r2);
  }
  split(e2) {
    const r2 = W(c2.fromJSON(e2.srcPixelBlock), e2.tileSize, e2.maximumPyramidLevel ?? 0, false === e2.useBilinear), t2 = [];
    let o;
    return r2 && (o = /* @__PURE__ */ new Map(), r2.forEach((e3, r3) => {
      if (e3) {
        const { pixelBlock: s, transferList: i } = e3.getTransferableObject();
        o.set(r3, s), i.forEach((e4) => {
          t2.includes(e4) || t2.push(e4);
        });
      }
    })), Promise.resolve({ result: o, transferList: t2 });
  }
  clipTile(e2) {
    const r2 = c2.fromJSON(e2.pixelBlock), t2 = B(E({ ...e2, pixelBlock: r2 }));
    return Promise.resolve(t2);
  }
  async mosaicAndTransform(e2) {
    const r2 = e2.srcPixelBlocks.map((e3) => e3 ? new c2(e3) : null), t2 = T(r2, e2.srcMosaicSize, { blockWidths: e2.blockWidths, alignmentInfo: e2.alignmentInfo, clipOffset: e2.clipOffset, clipSize: e2.clipSize });
    let o, i = t2;
    e2.coefs && (i = N(t2, e2.destDimension, e2.coefs, e2.sampleSpacing, e2.interpolation)), e2.projectDirections && e2.gcsGrid && (o = D(e2.destDimension, e2.gcsGrid), i = u2(i, e2.isUV ? "vector-uv" : "vector-magdir", o));
    const { result: n3, transferList: l } = B(i);
    return { result: { pixelBlock: n3, localNorthDirections: o }, transferList: l };
  }
  async createFlowMesh(e2, r2) {
    const t2 = { data: new Float32Array(e2.flowData.buffer), mask: new Uint8Array(e2.flowData.maskBuffer), width: e2.flowData.width, height: e2.flowData.height }, { vertexData: s, indexData: o } = await c3(e2.meshType, e2.simulationSettings, t2, r2.signal);
    return { result: { vertexBuffer: s.buffer, indexBuffer: o.buffer }, transferList: [s.buffer, o.buffer] };
  }
  async getProjectionOffsetGrid(r2) {
    var _a;
    const s = z.fromJSON(r2.projectedExtent), o = z.fromJSON(r2.srcBufferExtent);
    let i = null;
    ((_a = r2.datumTransformationSteps) == null ? void 0 : _a.length) && (i = new c({ steps: r2.datumTransformationSteps })), await j2();
    const n3 = r2.rasterTransform ? f2(r2.rasterTransform) : null;
    return re({ ...r2, projectedExtent: s, srcBufferExtent: o, datumTransformation: i, rasterTransform: n3 });
  }
};
export {
  N2 as default
};
//# sourceMappingURL=RasterWorker-WDGSNBVA.js.map
