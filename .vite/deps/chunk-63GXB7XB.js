import {
  has
} from "./chunk-NH2CL7HZ.js";

// node_modules/@arcgis/core/core/ObjectPool.js
function t(t2) {
  return (t2 == null ? void 0 : t2.release) && "function" == typeof t2.release;
}
function i(t2) {
  return (t2 == null ? void 0 : t2.acquire) && "function" == typeof t2.acquire;
}
var _e = class _e {
  constructor(t2, i2, e2, s = 1, o = 0) {
    this._creator = t2, this._acquireFunction = i2, this._releaseFunction = e2, this.allocationSize = s, this._pool = new Array(o), this._initialSize = o;
    for (let r = 0; r < o; r++) this._pool[r] = this._creator();
    this.allocationSize = Math.max(s, 1);
  }
  destroy() {
    this.prune(0);
  }
  acquire(...t2) {
    let s;
    if (_e.test.disabled) s = this._creator();
    else {
      if (0 === this._pool.length) {
        const t3 = this.allocationSize;
        for (let i2 = 0; i2 < t3; i2++) this._pool[i2] = this._creator();
      }
      s = this._pool.pop();
    }
    return this._acquireFunction ? this._acquireFunction(s, ...t2) : i(s) && s.acquire(...t2), s;
  }
  release(i2) {
    i2 && !_e.test.disabled && (this._releaseFunction ? this._releaseFunction(i2) : t(i2) && i2.release(), this._pool.push(i2));
  }
  prune(t2 = this._initialSize) {
    if (!(t2 >= this._pool.length)) {
      for (let i2 = t2; i2 < this._pool.length; ++i2) {
        const t3 = this._pool[i2];
        this._dispose(t3);
      }
      this._pool.length = t2;
    }
  }
  _dispose(t2) {
    t2.dispose && "function" == typeof t2.dispose && t2.dispose();
  }
};
_e.test = { disabled: !!has("esri-tests-disable-memory-pools") };
var e = _e;

// node_modules/@arcgis/core/core/accessorSupport/Lifecycle.js
var I = { INITIALIZING: 0, CONSTRUCTING: 1, CONSTRUCTED: 2, DESTROYING: 3, DESTROYED: 4 };

export {
  e,
  I
};
//# sourceMappingURL=chunk-63GXB7XB.js.map
