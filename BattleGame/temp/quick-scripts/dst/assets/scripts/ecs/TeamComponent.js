
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ecs/TeamComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0076cyuiS5BapBEIa6ufPi/', 'TeamComponent');
// Scripts/ecs/TeamComponent.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    team: {
      "default": "",
      type: cc.String,
      tooltip: "队伍名称（hero/monster）"
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxUZWFtQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGVhbSIsInR5cGUiLCJTdHJpbmciLCJ0b29sdGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLElBQUksRUFBRTtNQUNGLFdBQVMsRUFBRTtNQUNYQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sTUFBTTtNQUNmQyxPQUFPLEVBQUU7SUFDYjtFQUNKO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHRlYW06IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogXCJcIixcclxuICAgICAgICAgICAgdHlwZTogY2MuU3RyaW5nLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIumYn+S8jeWQjeensO+8iGhlcm8vbW9uc3Rlcu+8iVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19