import {
  n
} from "./chunk-GJFVHE2X.js";

// node_modules/@arcgis/core/libs/lyr3d/Lyr3DModule.js
function n2() {
  return new Promise((t) => import("./lyr3DMain-3URKXBMQ.js").then((t2) => t2.l).then(({ default: n3 }) => {
    const e2 = n3({ locateFile: i, onRuntimeInitialized: () => t(e2) });
  })).catch((t) => {
    throw t;
  });
}
function e() {
  return new Promise((t) => import("./lyr3DWorker-Q6YVUSNZ.js").then((t2) => t2.l).then(({ default: n3 }) => {
    const e2 = n3({ locateFile: i, onRuntimeInitialized: () => t(e2) });
  })).catch((t) => {
    throw t;
  });
}
function i(n3) {
  return n(`esri/libs/lyr3d/${n3}`);
}

export {
  n2 as n,
  e
};
//# sourceMappingURL=chunk-X2G2OP2M.js.map
