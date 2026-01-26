
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ecs/random.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxyYW5kb20uanMiXSwibmFtZXMiOlsibXVsYmVycnkzMiIsInNlZWQiLCJ0IiwiTWF0aCIsImltdWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFhQyxJQUFJLEVBQUU7RUFDN0IsT0FBTyxZQUFZO0lBQ2ZBLElBQUksSUFBSSxDQUFDO0lBQ1RBLElBQUksR0FBR0EsSUFBSSxHQUFHLFVBQVUsR0FBRyxDQUFDO0lBQzVCLElBQUlDLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxJQUFJLENBQUNILElBQUksR0FBR0EsSUFBSSxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUdBLElBQUksQ0FBQztJQUMvQ0MsQ0FBQyxJQUFJQSxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsSUFBSSxDQUFDRixDQUFDLEdBQUdBLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHQSxDQUFDLENBQUM7SUFDdkMsT0FBTyxDQUFDLENBQUNBLENBQUMsR0FBR0EsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksVUFBVTtFQUM5QyxDQUFDO0FBQ0wsQ0FBQztBQUVERyxNQUFNLENBQUNDLE9BQU8sR0FBR04sVUFBVSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG11bGJlcnJ5MzIgPSBmdW5jdGlvbiAoc2VlZCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZWVkIHw9IDA7XHJcbiAgICAgICAgc2VlZCA9IHNlZWQgKyAweDZEMkI3OUY1IHwgMDtcclxuICAgICAgICBsZXQgdCA9IE1hdGguaW11bChzZWVkIF4gc2VlZCA+Pj4gMTUsIDEgfCBzZWVkKTtcclxuICAgICAgICB0IF49IHQgKyBNYXRoLmltdWwodCBeIHQgPj4+IDcsIDYxIHwgdCk7XHJcbiAgICAgICAgcmV0dXJuICgodCBeIHQgPj4+IDE0KSA+Pj4gMCkgLyA0Mjk0OTY3Mjk2O1xyXG4gICAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtdWxiZXJyeTMyO1xyXG4iXX0=