"use strict";
cc._RF.push(module, '7a903DvkaNCVZBfYbV30xcm', 'ItemConfig');
// Scripts/game/ItemConfig.js

"use strict";

/**
 * 道具配置
 * 定义所有道具的基础数据
 */
var ItemConfig = {
  // 道具类型枚举
  ItemType: {
    CONSUMABLE: "consumable",
    // 消耗品（使用后消失）
    EQUIPMENT: "equipment",
    // 装备（可穿戴）
    MATERIAL: "material" // 材料（用于合成等）
  },

  // 道具效果类型枚举
  EffectType: {
    EXP: "exp",
    // 增加经验值
    HP: "hp",
    // 恢复生命值
    ATTACK: "attack",
    // 增加攻击力
    DEFENSE: "defense",
    // 增加防御力
    LEVEL_UP: "level_up" // 直接升级
  },

  // 所有道具配置列表
  items: [{
    id: "upgrade_potion",
    name: "升级药水",
    displayName: "升级药水",
    description: "使用后可以提升角色等级",
    icon: null,
    // 图标资源（SpriteFrame，需要在编辑器中设置）
    type: "consumable",
    // 消耗品
    effectType: "level_up",
    // 效果类型：直接升级
    effectValue: 1,
    // 效果值：提升1级
    maxStack: 99,
    // 最大堆叠数量
    rarity: "common",
    // 稀有度：普通
    price: 100 // 价格（金币）
  }
  // 后续可以在这里添加更多道具
  // {
  //     id: "exp_potion",
  //     name: "经验药水",
  //     displayName: "经验药水",
  //     description: "使用后获得100点经验值",
  //     icon: null,
  //     type: "consumable",
  //     effectType: "exp",
  //     effectValue: 100,
  //     maxStack: 99,
  //     rarity: "common",
  //     price: 50
  // }
  ],
  /**
   * 根据ID获取道具配置
   * @param {string} itemId - 道具ID
   * @returns {Object|null} 道具配置对象或null
   */
  getItemById: function getItemById(itemId) {
    var item = this.items.find(function (item) {
      return item.id === itemId;
    });
    if (!item) {
      cc.warn("[ItemConfig] \u672A\u627E\u5230\u9053\u5177\u914D\u7F6E: " + itemId);
    }
    return item || null;
  },
  /**
   * 获取所有道具配置
   * @returns {Array} 道具配置列表
   */
  getAllItems: function getAllItems() {
    return this.items;
  },
  /**
   * 根据类型获取道具列表
   * @param {string} type - 道具类型
   * @returns {Array} 道具配置列表
   */
  getItemsByType: function getItemsByType(type) {
    return this.items.filter(function (item) {
      return item.type === type;
    });
  }
};
module.exports = ItemConfig;

cc._RF.pop();