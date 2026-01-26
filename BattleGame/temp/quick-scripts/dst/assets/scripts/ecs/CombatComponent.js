
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ecs/CombatComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6fea3WN1c5JyKwqgvnJC9PY', 'CombatComponent');
// Scripts/ecs/CombatComponent.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    lastDamage: {
      "default": 0,
      type: cc.Integer,
      readonly: true,
      tooltip: "上次受到的伤害（只读）"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxDb21iYXRDb21wb25lbnQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsYXN0RGFtYWdlIiwidHlwZSIsIkludGVnZXIiLCJyZWFkb25seSIsInRvb2x0aXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsVUFBVSxFQUFFO01BQ1IsV0FBUyxDQUFDO01BQ1ZDLElBQUksRUFBRUwsRUFBRSxDQUFDTSxPQUFPO01BQ2hCQyxRQUFRLEVBQUUsSUFBSTtNQUNkQyxPQUFPLEVBQUU7SUFFYjtFQUNKO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYXN0RGFtYWdlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxuICAgICAgICAgICAgdHlwZTogY2MuSW50ZWdlcixcbiAgICAgICAgICAgIHJlYWRvbmx5OiB0cnVlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLkuIrmrKHlj5fliLDnmoTkvKTlrrPvvIjlj6ror7vvvIlcIlxuXG4gICAgICAgIH1cbiAgICB9XG59KTsgIl19