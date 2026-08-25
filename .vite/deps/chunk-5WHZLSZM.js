import {
  a
} from "./chunk-DLX5DTNB.js";
import {
  a2
} from "./chunk-HPSHCA6S.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";
import {
  d
} from "./chunk-QRKINRAQ.js";
import {
  i3 as i
} from "./chunk-KUWSTWZR.js";

// node_modules/@arcgis/core/views/layers/RefreshableLayerView.js
var i2 = (i3) => {
  const a3 = i3;
  let c = class extends a3 {
    initialize() {
      this.addHandles(a(() => this.layer, "refresh", (r) => {
        this.doRefresh(r.dataChanged).catch((r2) => {
          d(r2) || i.getLogger(this).error(r2);
        });
      }), "RefreshableLayerView");
    }
  };
  return c = __decorate([a2("esri.views.layers.RefreshableLayerView")], c), c;
};

export {
  i2 as i
};
//# sourceMappingURL=chunk-5WHZLSZM.js.map
