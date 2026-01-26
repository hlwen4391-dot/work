
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/game/UnitConfigItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9ce8cSqrBRHFILjwNcjlw9B', 'UnitConfigItem');
// Scripts/game/UnitConfigItem.js

"use strict";

/**
 * 单个单位配置项
 * 用于在编辑器中配置单个单位的头像和Prefab
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    // 单位名称（用于匹配UnitDataConfig中的单位）
    unitName: {
      "default": "",
      tooltip: "单位名称（必须与UnitDataConfig中的name一致）"
    },
    // 头像图片资源
    icon: {
      "default": null,
      type: cc.SpriteFrame,
      tooltip: "头像图片资源（SpriteFrame）"
    },
    // 人物原型Prefab
    prefab: {
      "default": null,
      type: cc.Prefab,
      tooltip: "人物原型Prefab（用于在中间显示）"
    },
    // 头像位置索引
    avatarPosition: {
      "default": 0,
      tooltip: "头像固定位置索引（0=第一个位置，1=第二个位置...）"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZVxcVW5pdENvbmZpZ0l0ZW0uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ1bml0TmFtZSIsInRvb2x0aXAiLCJpY29uIiwidHlwZSIsIlNwcml0ZUZyYW1lIiwicHJlZmFiIiwiUHJlZmFiIiwiYXZhdGFyUG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSO0lBQ0FDLFFBQVEsRUFBRTtNQUNOLFdBQVMsRUFBRTtNQUNYQyxPQUFPLEVBQUU7SUFDYixDQUFDO0lBRUQ7SUFDQUMsSUFBSSxFQUFFO01BQ0YsV0FBUyxJQUFJO01BQ2JDLElBQUksRUFBRVAsRUFBRSxDQUFDUSxXQUFXO01BQ3BCSCxPQUFPLEVBQUU7SUFDYixDQUFDO0lBRUQ7SUFDQUksTUFBTSxFQUFFO01BQ0osV0FBUyxJQUFJO01BQ2JGLElBQUksRUFBRVAsRUFBRSxDQUFDVSxNQUFNO01BQ2ZMLE9BQU8sRUFBRTtJQUNiLENBQUM7SUFFRDtJQUNBTSxjQUFjLEVBQUU7TUFDWixXQUFTLENBQUM7TUFDVk4sT0FBTyxFQUFFO0lBQ2I7RUFDSjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWNleS4quWNleS9jemFjee9rumhuVxyXG4gKiDnlKjkuo7lnKjnvJbovpHlmajkuK3phY3nva7ljZXkuKrljZXkvY3nmoTlpLTlg4/lkoxQcmVmYWJcclxuICovXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8g5Y2V5L2N5ZCN56ew77yI55So5LqO5Yy56YWNVW5pdERhdGFDb25maWfkuK3nmoTljZXkvY3vvIlcclxuICAgICAgICB1bml0TmFtZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBcIlwiLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWNleS9jeWQjeensO+8iOW/hemhu+S4jlVuaXREYXRhQ29uZmln5Lit55qEbmFtZeS4gOiHtO+8iVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g5aS05YOP5Zu+54mH6LWE5rqQXHJcbiAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICAgICAgdG9vbHRpcDogXCLlpLTlg4/lm77niYfotYTmupDvvIhTcHJpdGVGcmFtZe+8iVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g5Lq654mp5Y6f5Z6LUHJlZmFiXHJcbiAgICAgICAgcHJlZmFiOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgdG9vbHRpcDogXCLkurrnianljp/lnotQcmVmYWLvvIjnlKjkuo7lnKjkuK3pl7TmmL7npLrvvIlcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIOWktOWDj+S9jee9rue0ouW8lVxyXG4gICAgICAgIGF2YXRhclBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDAsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5aS05YOP5Zu65a6a5L2N572u57Si5byV77yIMD3nrKzkuIDkuKrkvY3nva7vvIwxPeesrOS6jOS4quS9jee9ri4uLu+8iVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbiJdfQ==