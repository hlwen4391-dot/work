
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/game/UnitDataConfigComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92ac6ji/gRP5ZgA8AChc/R+', 'UnitDataConfigComponent');
// Scripts/game/UnitDataConfigComponent.js

"use strict";

/**
 * 单位数据配置组件
 * 可以在编辑器中直接配置单位数据，包括头像图片和Prefab
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    // 英雄配置列表
    heroConfigs: {
      "default": [],
      type: [cc.Object],
      tooltip: "英雄配置列表"
    },
    // 怪物配置列表
    monsterConfigs: {
      "default": [],
      type: [cc.Object],
      tooltip: "怪物配置列表"
    }
  },
  onLoad: function onLoad() {
    // 将配置应用到UnitDataConfig
    this._applyConfigs();
  },
  /**
   * 应用配置到UnitDataConfig
   * @private
   */
  _applyConfigs: function _applyConfigs() {
    var UnitDataConfig = require("UnitDataConfig");

    // 应用英雄配置
    if (this.heroConfigs && this.heroConfigs.length > 0) {
      this.heroConfigs.forEach(function (config, index) {
        if (UnitDataConfig.heros && UnitDataConfig.heros[index]) {
          // 更新头像和Prefab
          if (config.icon) {
            UnitDataConfig.heros[index].icon = config.icon;
          }
          if (config.prefab) {
            UnitDataConfig.heros[index].prefab = config.prefab;
          }
          if (config.avatarPosition !== undefined) {
            UnitDataConfig.heros[index].avatarPosition = config.avatarPosition;
          }
        }
      });
    }

    // 应用怪物配置
    if (this.monsterConfigs && this.monsterConfigs.length > 0) {
      this.monsterConfigs.forEach(function (config, index) {
        if (UnitDataConfig.monsters && UnitDataConfig.monsters[index]) {
          // 更新头像和Prefab
          if (config.icon) {
            UnitDataConfig.monsters[index].icon = config.icon;
          }
          if (config.prefab) {
            UnitDataConfig.monsters[index].prefab = config.prefab;
          }
          if (config.avatarPosition !== undefined) {
            UnitDataConfig.monsters[index].avatarPosition = config.avatarPosition;
          }
        }
      });
    }
    cc.log("[UnitDataConfigComponent] 配置已应用到UnitDataConfig");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZVxcVW5pdERhdGFDb25maWdDb21wb25lbnQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJoZXJvQ29uZmlncyIsInR5cGUiLCJPYmplY3QiLCJ0b29sdGlwIiwibW9uc3RlckNvbmZpZ3MiLCJvbkxvYWQiLCJfYXBwbHlDb25maWdzIiwiVW5pdERhdGFDb25maWciLCJyZXF1aXJlIiwibGVuZ3RoIiwiZm9yRWFjaCIsImNvbmZpZyIsImluZGV4IiwiaGVyb3MiLCJpY29uIiwicHJlZmFiIiwiYXZhdGFyUG9zaXRpb24iLCJ1bmRlZmluZWQiLCJtb25zdGVycyIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1I7SUFDQUMsV0FBVyxFQUFFO01BQ1QsV0FBUyxFQUFFO01BQ1hDLElBQUksRUFBRSxDQUFDTCxFQUFFLENBQUNNLE1BQU0sQ0FBQztNQUNqQkMsT0FBTyxFQUFFO0lBQ2IsQ0FBQztJQUVEO0lBQ0FDLGNBQWMsRUFBRTtNQUNaLFdBQVMsRUFBRTtNQUNYSCxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxNQUFNLENBQUM7TUFDakJDLE9BQU8sRUFBRTtJQUNiO0VBQ0osQ0FBQztFQUVERSxNQUFNLFdBQUFBLE9BQUEsRUFBRztJQUNMO0lBQ0EsSUFBSSxDQUFDQyxhQUFhLEVBQUU7RUFDeEIsQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0VBQ0lBLGFBQWEsV0FBQUEsY0FBQSxFQUFHO0lBQ1osSUFBTUMsY0FBYyxHQUFHQyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7O0lBRWhEO0lBQ0EsSUFBSSxJQUFJLENBQUNSLFdBQVcsSUFBSSxJQUFJLENBQUNBLFdBQVcsQ0FBQ1MsTUFBTSxHQUFHLENBQUMsRUFBRTtNQUNqRCxJQUFJLENBQUNULFdBQVcsQ0FBQ1UsT0FBTyxDQUFDLFVBQUNDLE1BQU0sRUFBRUMsS0FBSyxFQUFLO1FBQ3hDLElBQUlMLGNBQWMsQ0FBQ00sS0FBSyxJQUFJTixjQUFjLENBQUNNLEtBQUssQ0FBQ0QsS0FBSyxDQUFDLEVBQUU7VUFDckQ7VUFDQSxJQUFJRCxNQUFNLENBQUNHLElBQUksRUFBRTtZQUNiUCxjQUFjLENBQUNNLEtBQUssQ0FBQ0QsS0FBSyxDQUFDLENBQUNFLElBQUksR0FBR0gsTUFBTSxDQUFDRyxJQUFJO1VBQ2xEO1VBQ0EsSUFBSUgsTUFBTSxDQUFDSSxNQUFNLEVBQUU7WUFDZlIsY0FBYyxDQUFDTSxLQUFLLENBQUNELEtBQUssQ0FBQyxDQUFDRyxNQUFNLEdBQUdKLE1BQU0sQ0FBQ0ksTUFBTTtVQUN0RDtVQUNBLElBQUlKLE1BQU0sQ0FBQ0ssY0FBYyxLQUFLQyxTQUFTLEVBQUU7WUFDckNWLGNBQWMsQ0FBQ00sS0FBSyxDQUFDRCxLQUFLLENBQUMsQ0FBQ0ksY0FBYyxHQUFHTCxNQUFNLENBQUNLLGNBQWM7VUFDdEU7UUFDSjtNQUNKLENBQUMsQ0FBQztJQUNOOztJQUVBO0lBQ0EsSUFBSSxJQUFJLENBQUNaLGNBQWMsSUFBSSxJQUFJLENBQUNBLGNBQWMsQ0FBQ0ssTUFBTSxHQUFHLENBQUMsRUFBRTtNQUN2RCxJQUFJLENBQUNMLGNBQWMsQ0FBQ00sT0FBTyxDQUFDLFVBQUNDLE1BQU0sRUFBRUMsS0FBSyxFQUFLO1FBQzNDLElBQUlMLGNBQWMsQ0FBQ1csUUFBUSxJQUFJWCxjQUFjLENBQUNXLFFBQVEsQ0FBQ04sS0FBSyxDQUFDLEVBQUU7VUFDM0Q7VUFDQSxJQUFJRCxNQUFNLENBQUNHLElBQUksRUFBRTtZQUNiUCxjQUFjLENBQUNXLFFBQVEsQ0FBQ04sS0FBSyxDQUFDLENBQUNFLElBQUksR0FBR0gsTUFBTSxDQUFDRyxJQUFJO1VBQ3JEO1VBQ0EsSUFBSUgsTUFBTSxDQUFDSSxNQUFNLEVBQUU7WUFDZlIsY0FBYyxDQUFDVyxRQUFRLENBQUNOLEtBQUssQ0FBQyxDQUFDRyxNQUFNLEdBQUdKLE1BQU0sQ0FBQ0ksTUFBTTtVQUN6RDtVQUNBLElBQUlKLE1BQU0sQ0FBQ0ssY0FBYyxLQUFLQyxTQUFTLEVBQUU7WUFDckNWLGNBQWMsQ0FBQ1csUUFBUSxDQUFDTixLQUFLLENBQUMsQ0FBQ0ksY0FBYyxHQUFHTCxNQUFNLENBQUNLLGNBQWM7VUFDekU7UUFDSjtNQUNKLENBQUMsQ0FBQztJQUNOO0lBRUFwQixFQUFFLENBQUN1QixHQUFHLENBQUMsZ0RBQWdELENBQUM7RUFDNUQ7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDljZXkvY3mlbDmja7phY3nva7nu4Tku7ZcclxuICog5Y+v5Lul5Zyo57yW6L6R5Zmo5Lit55u05o6l6YWN572u5Y2V5L2N5pWw5o2u77yM5YyF5ous5aS05YOP5Zu+54mH5ZKMUHJlZmFiXHJcbiAqL1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIOiLsembhOmFjee9ruWIl+ihqFxyXG4gICAgICAgIGhlcm9Db25maWdzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBbY2MuT2JqZWN0XSxcclxuICAgICAgICAgICAgdG9vbHRpcDogXCLoi7Hpm4TphY3nva7liJfooahcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIOaAqueJqemFjee9ruWIl+ihqFxyXG4gICAgICAgIG1vbnN0ZXJDb25maWdzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBbY2MuT2JqZWN0XSxcclxuICAgICAgICAgICAgdG9vbHRpcDogXCLmgKrnianphY3nva7liJfooahcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIOWwhumFjee9ruW6lOeUqOWIsFVuaXREYXRhQ29uZmlnXHJcbiAgICAgICAgdGhpcy5fYXBwbHlDb25maWdzKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bqU55So6YWN572u5YiwVW5pdERhdGFDb25maWdcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9hcHBseUNvbmZpZ3MoKSB7XHJcbiAgICAgICAgY29uc3QgVW5pdERhdGFDb25maWcgPSByZXF1aXJlKFwiVW5pdERhdGFDb25maWdcIik7XHJcblxyXG4gICAgICAgIC8vIOW6lOeUqOiLsembhOmFjee9rlxyXG4gICAgICAgIGlmICh0aGlzLmhlcm9Db25maWdzICYmIHRoaXMuaGVyb0NvbmZpZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmhlcm9Db25maWdzLmZvckVhY2goKGNvbmZpZywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChVbml0RGF0YUNvbmZpZy5oZXJvcyAmJiBVbml0RGF0YUNvbmZpZy5oZXJvc1tpbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmm7TmlrDlpLTlg4/lkoxQcmVmYWJcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmljb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVW5pdERhdGFDb25maWcuaGVyb3NbaW5kZXhdLmljb24gPSBjb25maWcuaWNvbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5wcmVmYWIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVW5pdERhdGFDb25maWcuaGVyb3NbaW5kZXhdLnByZWZhYiA9IGNvbmZpZy5wcmVmYWI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcuYXZhdGFyUG9zaXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVbml0RGF0YUNvbmZpZy5oZXJvc1tpbmRleF0uYXZhdGFyUG9zaXRpb24gPSBjb25maWcuYXZhdGFyUG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOW6lOeUqOaAqueJqemFjee9rlxyXG4gICAgICAgIGlmICh0aGlzLm1vbnN0ZXJDb25maWdzICYmIHRoaXMubW9uc3RlckNvbmZpZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vbnN0ZXJDb25maWdzLmZvckVhY2goKGNvbmZpZywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChVbml0RGF0YUNvbmZpZy5tb25zdGVycyAmJiBVbml0RGF0YUNvbmZpZy5tb25zdGVyc1tpbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmm7TmlrDlpLTlg4/lkoxQcmVmYWJcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmljb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVW5pdERhdGFDb25maWcubW9uc3RlcnNbaW5kZXhdLmljb24gPSBjb25maWcuaWNvbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5wcmVmYWIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVW5pdERhdGFDb25maWcubW9uc3RlcnNbaW5kZXhdLnByZWZhYiA9IGNvbmZpZy5wcmVmYWI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcuYXZhdGFyUG9zaXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVbml0RGF0YUNvbmZpZy5tb25zdGVyc1tpbmRleF0uYXZhdGFyUG9zaXRpb24gPSBjb25maWcuYXZhdGFyUG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNjLmxvZyhcIltVbml0RGF0YUNvbmZpZ0NvbXBvbmVudF0g6YWN572u5bey5bqU55So5YiwVW5pdERhdGFDb25maWdcIik7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuIl19