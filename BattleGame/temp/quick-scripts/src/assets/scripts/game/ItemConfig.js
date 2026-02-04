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
    HP: "hp",
    ATTACK: "attack",
    DEFENSE: "defense",
    SPEED: "speed",
    // 增加速度
    LEVEL_UP: "level_up",
    SKILL_SCROLL: "skill_scroll"
  },
  /** 装备槽位顺序，与装备栏 3 格对应：0=武器 1=防具 2=鞋子 */
  EQUIPMENT_SLOTS: ["weapon", "armor", "shoes"],
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
  },
  // 技能卷轴：使用后为当前角色解锁对应技能（skillId 与 SkillConfig/SkillEnum 一致）
  {
    id: "scroll_fireball",
    name: "火球术卷轴",
    displayName: "火球术卷轴",
    description: "使用后学会技能：火球术",
    icon: null,
    type: "consumable",
    effectType: "skill_scroll",
    skillId: 3,
    // SkillEnum.fireball
    maxStack: 99,
    rarity: "uncommon",
    price: 200
  }, {
    id: "scroll_beast_rage",
    name: "兽化狂暴卷轴",
    displayName: "兽化狂暴卷轴",
    description: "使用后学会技能：兽化狂暴",
    icon: null,
    type: "consumable",
    effectType: "skill_scroll",
    skillId: 7,
    // SkillEnum.beastRage
    maxStack: 99,
    rarity: "uncommon",
    price: 250
  }, {
    id: "scroll_heal_allies",
    name: "治疗术卷轴",
    displayName: "治疗术卷轴",
    description: "使用后学会技能：群体治疗",
    icon: null,
    type: "consumable",
    effectType: "skill_scroll",
    skillId: 9,
    // SkillEnum.healAllies
    maxStack: 99,
    rarity: "rare",
    price: 300
  }, {
    id: "scroll_stun",
    name: "盾击卷轴",
    displayName: "盾击卷轴",
    description: "使用后学会技能：盾击",
    icon: null,
    type: "consumable",
    effectType: "skill_scroll",
    skillId: 2,
    // SkillEnum.stunSkill
    maxStack: 99,
    rarity: "uncommon",
    price: 180
  }, {
    id: "scroll_war_cry",
    name: "战吼卷轴",
    displayName: "战吼卷轴",
    description: "使用后学会技能：战吼",
    icon: null,
    type: "consumable",
    effectType: "skill_scroll",
    skillId: 5,
    // SkillEnum.warCry
    maxStack: 99,
    rarity: "rare",
    price: 350
  }, {
    id: "scroll_shield_allies",
    name: "群体护盾卷轴",
    displayName: "群体护盾卷轴",
    description: "使用后学会技能：群体护盾",
    icon: null,
    type: "consumable",
    effectType: "skill_scroll",
    skillId: 6,
    // SkillEnum.shieldAllies
    maxStack: 99,
    rarity: "rare",
    price: 320
  }, {
    id: "scroll_cleanse_allies",
    name: "净化术卷轴",
    displayName: "净化术卷轴",
    description: "使用后学会技能：净化术",
    icon: null,
    type: "consumable",
    effectType: "skill_scroll",
    skillId: 10,
    // SkillEnum.cleanseAllies
    maxStack: 99,
    rarity: "rare",
    price: 380
  }, {
    id: "exp_potion",
    name: "经验药水",
    displayName: "经验药水",
    description: "使用后获得100点经验值",
    icon: null,
    type: "consumable",
    effectType: "exp",
    effectValue: 100,
    maxStack: 99,
    rarity: "common",
    price: 50
  }, {
    id: "hp_potion",
    name: "生命药水",
    displayName: "生命药水",
    description: "使用后恢复50点生命值",
    icon: null,
    type: "consumable",
    effectType: "hp",
    effectValue: 50,
    maxStack: 99,
    rarity: "common",
    price: 30
  },
  // 装备：可穿戴到装备栏
  {
    id: "war_hammer",
    name: "战锤",
    displayName: "装备战锤",
    description: "装备后攻击力+15",
    icon: null,
    type: "equipment",
    effectType: "attack",
    effectValue: 15,
    maxStack: 1,
    rarity: "uncommon",
    price: 500,
    equipmentSlot: "weapon"
  }, {
    id: "iron_armor",
    name: "铁甲",
    displayName: "铁甲",
    description: "装备后防御力+10",
    icon: null,
    type: "equipment",
    effectType: "defense",
    effectValue: 10,
    maxStack: 1,
    rarity: "uncommon",
    price: 400,
    equipmentSlot: "armor"
  }, {
    id: "leather_boots",
    name: "皮靴",
    displayName: "皮靴",
    description: "装备后速度+2",
    icon: null,
    type: "equipment",
    effectType: "speed",
    effectValue: 2,
    maxStack: 1,
    rarity: "common",
    price: 200,
    equipmentSlot: "shoes"
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