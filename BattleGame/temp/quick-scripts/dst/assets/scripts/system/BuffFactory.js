
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/system/BuffFactory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd7f9fWqNqJJh5W3IWw0Cea+', 'BuffFactory');
// Scripts/system/BuffFactory.js

"use strict";

var BuffRegistry = require("BuffRegistry");

/**
 * Buff工厂类
 * 根据名称创建对应的Buff配置对象
 */
var BuffFactory = {
  /**
   * 创建Buff配置对象
   * @param {string} name - Buff名称
   * @returns {Object} Buff配置对象
   */
  create: function create(name) {
    var data = BuffRegistry[name];
    if (!data) {
      cc.warn("BuffFactory: \u672A\u627E\u5230\u540D\u4E3A \"" + name + "\" \u7684Buff\u914D\u7F6E");
      return null;
    }
    var buffConfig = {
      name: data.name,
      duration: data.duration,
      interval: data.interval,
      onApply: data.onApply,
      onTick: data.onTick,
      onExpire: data.onExpire,
      modifiers: data.modifiers,
      status: data.status,
      stackable: data.stackable,
      shieldValue: data.shieldValue
    };
    cc.log("[BuffFactory] \u521B\u5EFABuff: name=" + buffConfig.name + ", shieldValue=" + buffConfig.shieldValue + ", data.shieldValue=" + data.shieldValue);
    return buffConfig;
  }
};
module.exports = BuffFactory;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3lzdGVtXFxCdWZmRmFjdG9yeS5qcyJdLCJuYW1lcyI6WyJCdWZmUmVnaXN0cnkiLCJyZXF1aXJlIiwiQnVmZkZhY3RvcnkiLCJjcmVhdGUiLCJuYW1lIiwiZGF0YSIsImNjIiwid2FybiIsImJ1ZmZDb25maWciLCJkdXJhdGlvbiIsImludGVydmFsIiwib25BcHBseSIsIm9uVGljayIsIm9uRXhwaXJlIiwibW9kaWZpZXJzIiwic3RhdHVzIiwic3RhY2thYmxlIiwic2hpZWxkVmFsdWUiLCJsb2ciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFlBQVksR0FBR0MsT0FBTyxDQUFDLGNBQWMsQ0FBQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQyxXQUFXLEdBQUc7RUFDZDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0lDLE1BQU0sV0FBQUEsT0FBQ0MsSUFBSSxFQUFFO0lBQ1QsSUFBTUMsSUFBSSxHQUFHTCxZQUFZLENBQUNJLElBQUksQ0FBQztJQUMvQixJQUFJLENBQUNDLElBQUksRUFBRTtNQUNQQyxFQUFFLENBQUNDLElBQUksb0RBQXdCSCxJQUFJLCtCQUFZO01BQy9DLE9BQU8sSUFBSTtJQUNmO0lBRUEsSUFBTUksVUFBVSxHQUFHO01BQ2ZKLElBQUksRUFBRUMsSUFBSSxDQUFDRCxJQUFJO01BQ2ZLLFFBQVEsRUFBRUosSUFBSSxDQUFDSSxRQUFRO01BQ3ZCQyxRQUFRLEVBQUVMLElBQUksQ0FBQ0ssUUFBUTtNQUN2QkMsT0FBTyxFQUFFTixJQUFJLENBQUNNLE9BQU87TUFDckJDLE1BQU0sRUFBRVAsSUFBSSxDQUFDTyxNQUFNO01BQ25CQyxRQUFRLEVBQUVSLElBQUksQ0FBQ1EsUUFBUTtNQUN2QkMsU0FBUyxFQUFFVCxJQUFJLENBQUNTLFNBQVM7TUFDekJDLE1BQU0sRUFBRVYsSUFBSSxDQUFDVSxNQUFNO01BQ25CQyxTQUFTLEVBQUVYLElBQUksQ0FBQ1csU0FBUztNQUN6QkMsV0FBVyxFQUFFWixJQUFJLENBQUNZO0lBQ3RCLENBQUM7SUFFRFgsRUFBRSxDQUFDWSxHQUFHLDJDQUErQlYsVUFBVSxDQUFDSixJQUFJLHNCQUFpQkksVUFBVSxDQUFDUyxXQUFXLDJCQUFzQlosSUFBSSxDQUFDWSxXQUFXLENBQUc7SUFFcEksT0FBT1QsVUFBVTtFQUNyQjtBQUNKLENBQUM7QUFFRFcsTUFBTSxDQUFDQyxPQUFPLEdBQUdsQixXQUFXIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQnVmZlJlZ2lzdHJ5ID0gcmVxdWlyZShcIkJ1ZmZSZWdpc3RyeVwiKTtcclxuXHJcbi8qKlxyXG4gKiBCdWZm5bel5Y6C57G7XHJcbiAqIOagueaNruWQjeensOWIm+W7uuWvueW6lOeahEJ1ZmbphY3nva7lr7nosaFcclxuICovXHJcbnZhciBCdWZmRmFjdG9yeSA9IHtcclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu6QnVmZumFjee9ruWvueixoVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBCdWZm5ZCN56ewXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBCdWZm6YWN572u5a+56LGhXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZShuYW1lKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IEJ1ZmZSZWdpc3RyeVtuYW1lXTtcclxuICAgICAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICAgICAgY2Mud2FybihgQnVmZkZhY3Rvcnk6IOacquaJvuWIsOWQjeS4uiBcIiR7bmFtZX1cIiDnmoRCdWZm6YWN572uYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYnVmZkNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogZGF0YS5kdXJhdGlvbixcclxuICAgICAgICAgICAgaW50ZXJ2YWw6IGRhdGEuaW50ZXJ2YWwsXHJcbiAgICAgICAgICAgIG9uQXBwbHk6IGRhdGEub25BcHBseSxcclxuICAgICAgICAgICAgb25UaWNrOiBkYXRhLm9uVGljayxcclxuICAgICAgICAgICAgb25FeHBpcmU6IGRhdGEub25FeHBpcmUsXHJcbiAgICAgICAgICAgIG1vZGlmaWVyczogZGF0YS5tb2RpZmllcnMsXHJcbiAgICAgICAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMsXHJcbiAgICAgICAgICAgIHN0YWNrYWJsZTogZGF0YS5zdGFja2FibGUsXHJcbiAgICAgICAgICAgIHNoaWVsZFZhbHVlOiBkYXRhLnNoaWVsZFZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBjYy5sb2coYFtCdWZmRmFjdG9yeV0g5Yib5bu6QnVmZjogbmFtZT0ke2J1ZmZDb25maWcubmFtZX0sIHNoaWVsZFZhbHVlPSR7YnVmZkNvbmZpZy5zaGllbGRWYWx1ZX0sIGRhdGEuc2hpZWxkVmFsdWU9JHtkYXRhLnNoaWVsZFZhbHVlfWApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBidWZmQ29uZmlnO1xyXG4gICAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCdWZmRmFjdG9yeTtcclxuXHJcbiJdfQ==