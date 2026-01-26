"use strict";
cc._RF.push(module, 'f929fsX8VpOIr+QAlLws2sD', 'random');
// Scripts/ecs/random.js

"use strict";

var mulberry32 = function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = seed + 0x6D2B79F5 | 0;
    var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t ^= t + Math.imul(t ^ t >>> 7, 61 | t);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
};
module.exports = mulberry32;

cc._RF.pop();