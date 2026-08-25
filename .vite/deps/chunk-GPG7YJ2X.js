import {
  s
} from "./chunk-VNR3A2IW.js";
import {
  a
} from "./chunk-HQPAN4GW.js";
import {
  h
} from "./chunk-KUWSTWZR.js";

// node_modules/@arcgis/core/core/signal.js
var i = class {
  constructor(t, e) {
    this._observable = new s(), this._value = t, this._equalityFunction = e;
  }
  get value() {
    return a(this._observable), this._value;
  }
  set value(t) {
    this._equalityFunction(t, this._value) || (this._value = t, this._observable.notify());
  }
  mutate(t) {
    t(this._value), this._observable.notify();
  }
};
function r(e, s2 = h) {
  return new i(e, s2);
}

export {
  r
};
//# sourceMappingURL=chunk-GPG7YJ2X.js.map
