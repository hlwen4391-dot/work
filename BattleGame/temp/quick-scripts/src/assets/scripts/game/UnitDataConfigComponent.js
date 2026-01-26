"use strict";
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