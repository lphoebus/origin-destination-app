import {
  s
} from "./chunk-NFIJHMSS.js";
import {
  h2 as h
} from "./chunk-GWZLH7CG.js";
import {
  a2 as a
} from "./chunk-HPSHCA6S.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";

// node_modules/@arcgis/core/views/2d/layers/graphics/HighlightGraphicContainer.js
var o = class extends s {
  get hasHighlight() {
    return this.children.some((r) => r.hasData);
  }
  renderChildren(r) {
    this.attributeView.update(), 16 === r.drawPhase && this.children.some((r2) => r2.hasData) && (super.renderChildren(r), r.context.setColorMask(true, true, true, true), h(r, false, (r2) => {
      this._renderChildren(r2, 1);
    }));
  }
};
o = __decorate([a("esri.views.2d.layers.graphics.HighlightGraphicContainer")], o);

export {
  o
};
//# sourceMappingURL=chunk-PRAOOVL3.js.map
