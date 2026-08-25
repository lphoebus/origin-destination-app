import {
  M
} from "./chunk-4GCWA7OF.js";
import {
  s
} from "./chunk-YGKA7G3B.js";
import "./chunk-BU4CVZEL.js";
import "./chunk-OHZ2SSIW.js";
import {
  i as i2
} from "./chunk-5WHZLSZM.js";
import {
  b
} from "./chunk-OCT7BKO5.js";
import {
  d as d2
} from "./chunk-IP2KDJFI.js";
import "./chunk-WQYOTJRX.js";
import "./chunk-NGOTSWMU.js";
import "./chunk-LLTAZXUM.js";
import "./chunk-C5OUOU2L.js";
import "./chunk-WSW5LOWY.js";
import "./chunk-BWGF4KWM.js";
import "./chunk-G5HYQKIV.js";
import "./chunk-LKJRQUL4.js";
import "./chunk-FRNAPJPV.js";
import "./chunk-WHRWR3UA.js";
import "./chunk-LHXB2FVV.js";
import "./chunk-52224I66.js";
import "./chunk-GXBKLQ4R.js";
import "./chunk-T7GC3GDF.js";
import "./chunk-DJ2VONAQ.js";
import "./chunk-JBITOOAG.js";
import "./chunk-PNFUWJ4W.js";
import "./chunk-UBCTOQOO.js";
import "./chunk-7UQGNZ42.js";
import "./chunk-5XPSWKAI.js";
import "./chunk-WUNQ6CSP.js";
import "./chunk-SDGRW3ZR.js";
import "./chunk-GWZLH7CG.js";
import "./chunk-5DKBYB7N.js";
import "./chunk-3AFXS5Z4.js";
import "./chunk-LVP5OQSB.js";
import "./chunk-JCJOV2OG.js";
import "./chunk-EZLF5T7L.js";
import "./chunk-SPZYEASA.js";
import "./chunk-H7NF3WNO.js";
import "./chunk-R7XUSGO5.js";
import "./chunk-2ST7JUXN.js";
import "./chunk-IFRXGUYI.js";
import "./chunk-MRVM6XH5.js";
import "./chunk-6XIPZBT7.js";
import "./chunk-2KJCRN2H.js";
import "./chunk-ZNPAPEQU.js";
import "./chunk-XJTFKAAL.js";
import "./chunk-LPC5EXUG.js";
import "./chunk-XXCU7BD5.js";
import "./chunk-EQZMGADF.js";
import "./chunk-E5SIY76Q.js";
import "./chunk-XZSHAR3X.js";
import "./chunk-CVV6MIDL.js";
import "./chunk-UGAC6FVR.js";
import "./chunk-ELQLS5UR.js";
import "./chunk-TBHN7NEG.js";
import "./chunk-VR6VPSRB.js";
import "./chunk-R5IGYILM.js";
import "./chunk-WWZXCVZD.js";
import "./chunk-2UMDUMDF.js";
import "./chunk-PVAT2NHO.js";
import "./chunk-MPABLVG5.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-SWYYL7T7.js";
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
import "./chunk-I2W3LINK.js";
import "./chunk-7OBUFU3X.js";
import "./chunk-66BNN6ZJ.js";
import "./chunk-NOVKMJNS.js";
import "./chunk-27A66LHG.js";
import "./chunk-HIM26FXK.js";
import "./chunk-5YBW6KQ6.js";
import "./chunk-VNR3A2IW.js";
import "./chunk-DLX5DTNB.js";
import "./chunk-6LIC47AK.js";
import "./chunk-7J6TZQJ4.js";
import "./chunk-ZNU5NTGY.js";
import "./chunk-J3VZVJYU.js";
import "./chunk-U2QKMJ4B.js";
import "./chunk-UWOUWJRN.js";
import "./chunk-4EJ2CVAA.js";
import {
  m2 as m
} from "./chunk-TSVVEDRS.js";
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
import {
  d
} from "./chunk-QRKINRAQ.js";
import {
  i3 as i
} from "./chunk-KUWSTWZR.js";
import "./chunk-NH2CL7HZ.js";
import "./chunk-3F74YA3Z.js";

// node_modules/@arcgis/core/views/2d/layers/BaseDynamicLayerView2D.js
var h = class extends i2(b(d2)) {
  update(t) {
    this._strategy.update(t).catch((t2) => {
      d(t2) || i.getLogger(this).error(t2);
    }), this.notifyChange("updating");
  }
  attach() {
    this._bitmapContainer = new s(), this.container.addChild(this._bitmapContainer), this._strategy = new M({ container: this._bitmapContainer, fetchSource: this.fetchBitmapData.bind(this), requestUpdate: this.requestUpdate.bind(this) });
  }
  detach() {
    this._strategy.destroy(), this._strategy = null, this.container.removeChild(this._bitmapContainer), this._bitmapContainer.removeAllChildren();
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  fetchBitmapData(t, e, r) {
    return this.layer.fetchImageBitmap(t, e, r);
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this._strategy.updating || this.updateRequested;
  }
};
__decorate([m()], h.prototype, "_strategy", void 0), h = __decorate([a("esri.views.2d.layers.BaseDynamicLayerView2D")], h);
var c = h;
export {
  c as default
};
//# sourceMappingURL=BaseDynamicLayerView2D-GB2VBFPQ.js.map
