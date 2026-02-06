
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/game/ItemConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
  // 装备在背包中可堆叠多件；装备栏“每槽位一件”由槽位逻辑保证
  {
    id: "war_hammer",
    name: "战锤",
    displayName: "装备战锤",
    description: "装备后攻击力+15",
    icon: null,
    type: "equipment",
    effectType: "attack",
    effectValue: 15,
    maxStack: 99,
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
    maxStack: 99,
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
    maxStack: 99,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZVxcSXRlbUNvbmZpZy5qcyJdLCJuYW1lcyI6WyJJdGVtQ29uZmlnIiwiSXRlbVR5cGUiLCJDT05TVU1BQkxFIiwiRVFVSVBNRU5UIiwiTUFURVJJQUwiLCJFZmZlY3RUeXBlIiwiRVhQIiwiSFAiLCJBVFRBQ0siLCJERUZFTlNFIiwiU1BFRUQiLCJMRVZFTF9VUCIsIlNLSUxMX1NDUk9MTCIsIkVRVUlQTUVOVF9TTE9UUyIsIml0ZW1zIiwiaWQiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJ0eXBlIiwiZWZmZWN0VHlwZSIsImVmZmVjdFZhbHVlIiwibWF4U3RhY2siLCJyYXJpdHkiLCJwcmljZSIsInNraWxsSWQiLCJlcXVpcG1lbnRTbG90IiwiZ2V0SXRlbUJ5SWQiLCJpdGVtSWQiLCJpdGVtIiwiZmluZCIsImNjIiwid2FybiIsImdldEFsbEl0ZW1zIiwiZ2V0SXRlbXNCeVR5cGUiLCJmaWx0ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsVUFBVSxHQUFHO0VBQ2I7RUFDQUMsUUFBUSxFQUFFO0lBQ05DLFVBQVUsRUFBRSxZQUFZO0lBQUc7SUFDM0JDLFNBQVMsRUFBRSxXQUFXO0lBQU07SUFDNUJDLFFBQVEsRUFBRSxVQUFVLENBQVE7RUFDaEMsQ0FBQzs7RUFFRDtFQUNBQyxVQUFVLEVBQUU7SUFDUkMsR0FBRyxFQUFFLEtBQUs7SUFDVkMsRUFBRSxFQUFFLElBQUk7SUFDUkMsTUFBTSxFQUFFLFFBQVE7SUFDaEJDLE9BQU8sRUFBRSxTQUFTO0lBQ2xCQyxLQUFLLEVBQUUsT0FBTztJQUFZO0lBQzFCQyxRQUFRLEVBQUUsVUFBVTtJQUNwQkMsWUFBWSxFQUFFO0VBQ2xCLENBQUM7RUFFRDtFQUNBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FB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STtNQUFBLE9BQUlBLElBQUksQ0FBQ2YsRUFBRSxLQUFLYyxNQUFNO0lBQUEsRUFBQztJQUN4RCxJQUFJLENBQUNDLElBQUksRUFBRTtNQUNQRSxFQUFFLENBQUNDLElBQUksK0RBQTBCSixNQUFNLENBQUc7SUFDOUM7SUFDQSxPQUFPQyxJQUFJLElBQUksSUFBSTtFQUN2QixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSUksV0FBVyxXQUFBQSxZQUFBLEVBQUc7SUFDVixPQUFPLElBQUksQ0FBQ3BCLEtBQUs7RUFDckIsQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSXFCLGNBQWMsV0FBQUEsZUFBQ2YsSUFBSSxFQUFFO0lBQ2pCLE9BQU8sSUFBSSxDQUFDTixLQUFLLENBQUNzQixNQUFNLENBQUMsVUFBQU4sSUFBSTtNQUFBLE9BQUlBLElBQUksQ0FBQ1YsSUFBSSxLQUFLQSxJQUFJO0lBQUEsRUFBQztFQUN4RDtBQUNKLENBQUM7QUFFRGlCLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHdEMsVUFBVSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDpgZPlhbfphY3nva5cbiAqIOWumuS5ieaJgOaciemBk+WFt+eahOWfuuehgOaVsOaNrlxuICovXG52YXIgSXRlbUNvbmZpZyA9IHtcbiAgICAvLyDpgZPlhbfnsbvlnovmnprkuL5cbiAgICBJdGVtVHlwZToge1xuICAgICAgICBDT05TVU1BQkxFOiBcImNvbnN1bWFibGVcIiwgIC8vIOa2iOiAl+WTge+8iOS9v+eUqOWQjua2iOWkse+8iVxuICAgICAgICBFUVVJUE1FTlQ6IFwiZXF1aXBtZW50XCIsICAgICAvLyDoo4XlpIfvvIjlj6/nqb/miLTvvIlcbiAgICAgICAgTUFURVJJQUw6IFwibWF0ZXJpYWxcIiAgICAgICAgLy8g5p2Q5paZ77yI55So5LqO5ZCI5oiQ562J77yJXG4gICAgfSxcblxuICAgIC8vIOmBk+WFt+aViOaenOexu+Wei+aemuS4vlxuICAgIEVmZmVjdFR5cGU6IHtcbiAgICAgICAgRVhQOiBcImV4cFwiLFxuICAgICAgICBIUDogXCJocFwiLFxuICAgICAgICBBVFRBQ0s6IFwiYXR0YWNrXCIsXG4gICAgICAgIERFRkVOU0U6IFwiZGVmZW5zZVwiLFxuICAgICAgICBTUEVFRDogXCJzcGVlZFwiLCAgICAgICAgICAgLy8g5aKe5Yqg6YCf5bqmXG4gICAgICAgIExFVkVMX1VQOiBcImxldmVsX3VwXCIsXG4gICAgICAgIFNLSUxMX1NDUk9MTDogXCJza2lsbF9zY3JvbGxcIlxuICAgIH0sXG5cbiAgICAvKiog6KOF5aSH5qe95L2N6aG65bqP77yM5LiO6KOF5aSH5qCPIDMg5qC85a+55bqU77yaMD3mrablmaggMT3pmLLlhbcgMj3pnovlrZAgKi9cbiAgICBFUVVJUE1FTlRfU0xPVFM6IFtcIndlYXBvblwiLCBcImFybW9yXCIsIFwic2hvZXNcIl0sXG5cbiAgICAvLyDmiYDmnInpgZPlhbfphY3nva7liJfooahcbiAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCJ1cGdyYWRlX3BvdGlvblwiLFxuICAgICAgICAgICAgbmFtZTogXCLljYfnuqfoja/msLRcIixcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIuWNh+e6p+iNr+awtFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi5L2/55So5ZCO5Y+v5Lul5o+Q5Y2H6KeS6Imy562J57qnXCIsXG4gICAgICAgICAgICBpY29uOiBudWxsLCAvLyDlm77moIfotYTmupDvvIhTcHJpdGVGcmFtZe+8jOmcgOimgeWcqOe8lui+keWZqOS4reiuvue9ru+8iVxuICAgICAgICAgICAgdHlwZTogXCJjb25zdW1hYmxlXCIsIC8vIOa2iOiAl+WTgVxuICAgICAgICAgICAgZWZmZWN0VHlwZTogXCJsZXZlbF91cFwiLCAvLyDmlYjmnpznsbvlnovvvJrnm7TmjqXljYfnuqdcbiAgICAgICAgICAgIGVmZmVjdFZhbHVlOiAxLCAvLyDmlYjmnpzlgLzvvJrmj5DljYcx57qnXG4gICAgICAgICAgICBtYXhTdGFjazogOTksIC8vIOacgOWkp+WghuWPoOaVsOmHj1xuICAgICAgICAgICAgcmFyaXR5OiBcImNvbW1vblwiLCAvLyDnqIDmnInluqbvvJrmma7pgJpcbiAgICAgICAgICAgIHByaWNlOiAxMDAgLy8g5Lu35qC877yI6YeR5biB77yJXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOaKgOiDveWNt+i9tO+8muS9v+eUqOWQjuS4uuW9k+WJjeinkuiJsuino+mUgeWvueW6lOaKgOiDve+8iHNraWxsSWQg5LiOIFNraWxsQ29uZmlnL1NraWxsRW51bSDkuIDoh7TvvIlcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwic2Nyb2xsX2ZpcmViYWxsXCIsXG4gICAgICAgICAgICBuYW1lOiBcIueBq+eQg+acr+WNt+i9tFwiLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwi54Gr55CD5pyv5Y236L20XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLkvb/nlKjlkI7lrabkvJrmioDog73vvJrngavnkIPmnK9cIixcbiAgICAgICAgICAgIGljb246IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBcImNvbnN1bWFibGVcIixcbiAgICAgICAgICAgIGVmZmVjdFR5cGU6IFwic2tpbGxfc2Nyb2xsXCIsXG4gICAgICAgICAgICBza2lsbElkOiAzLCAvLyBTa2lsbEVudW0uZmlyZWJhbGxcbiAgICAgICAgICAgIG1heFN0YWNrOiA5OSxcbiAgICAgICAgICAgIHJhcml0eTogXCJ1bmNvbW1vblwiLFxuICAgICAgICAgICAgcHJpY2U6IDIwMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCJzY3JvbGxfYmVhc3RfcmFnZVwiLFxuICAgICAgICAgICAgbmFtZTogXCLlhb3ljJbni4LmmrTljbfovbRcIixcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIuWFveWMlueLguaatOWNt+i9tFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi5L2/55So5ZCO5a2m5Lya5oqA6IO977ya5YW95YyW54uC5pq0XCIsXG4gICAgICAgICAgICBpY29uOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogXCJjb25zdW1hYmxlXCIsXG4gICAgICAgICAgICBlZmZlY3RUeXBlOiBcInNraWxsX3Njcm9sbFwiLFxuICAgICAgICAgICAgc2tpbGxJZDogNywgLy8gU2tpbGxFbnVtLmJlYXN0UmFnZVxuICAgICAgICAgICAgbWF4U3RhY2s6IDk5LFxuICAgICAgICAgICAgcmFyaXR5OiBcInVuY29tbW9uXCIsXG4gICAgICAgICAgICBwcmljZTogMjUwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcInNjcm9sbF9oZWFsX2FsbGllc1wiLFxuICAgICAgICAgICAgbmFtZTogXCLmsrvnlpfmnK/ljbfovbRcIixcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIuayu+eWl+acr+WNt+i9tFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi5L2/55So5ZCO5a2m5Lya5oqA6IO977ya576k5L2T5rK755aXXCIsXG4gICAgICAgICAgICBpY29uOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogXCJjb25zdW1hYmxlXCIsXG4gICAgICAgICAgICBlZmZlY3RUeXBlOiBcInNraWxsX3Njcm9sbFwiLFxuICAgICAgICAgICAgc2tpbGxJZDogOSwgLy8gU2tpbGxFbnVtLmhlYWxBbGxpZXNcbiAgICAgICAgICAgIG1heFN0YWNrOiA5OSxcbiAgICAgICAgICAgIHJhcml0eTogXCJyYXJlXCIsXG4gICAgICAgICAgICBwcmljZTogMzAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcInNjcm9sbF9zdHVuXCIsXG4gICAgICAgICAgICBuYW1lOiBcIuebvuWHu+WNt+i9tFwiLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwi55u+5Ye75Y236L20XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLkvb/nlKjlkI7lrabkvJrmioDog73vvJrnm77lh7tcIixcbiAgICAgICAgICAgIGljb246IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBcImNvbnN1bWFibGVcIixcbiAgICAgICAgICAgIGVmZmVjdFR5cGU6IFwic2tpbGxfc2Nyb2xsXCIsXG4gICAgICAgICAgICBza2lsbElkOiAyLCAvLyBTa2lsbEVudW0uc3R1blNraWxsXG4gICAgICAgICAgICBtYXhTdGFjazogOTksXG4gICAgICAgICAgICByYXJpdHk6IFwidW5jb21tb25cIixcbiAgICAgICAgICAgIHByaWNlOiAxODBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwic2Nyb2xsX3dhcl9jcnlcIixcbiAgICAgICAgICAgIG5hbWU6IFwi5oiY5ZC85Y236L20XCIsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCLmiJjlkLzljbfovbRcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIuS9v+eUqOWQjuWtpuS8muaKgOiDve+8muaImOWQvFwiLFxuICAgICAgICAgICAgaWNvbjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IFwiY29uc3VtYWJsZVwiLFxuICAgICAgICAgICAgZWZmZWN0VHlwZTogXCJza2lsbF9zY3JvbGxcIixcbiAgICAgICAgICAgIHNraWxsSWQ6IDUsIC8vIFNraWxsRW51bS53YXJDcnlcbiAgICAgICAgICAgIG1heFN0YWNrOiA5OSxcbiAgICAgICAgICAgIHJhcml0eTogXCJyYXJlXCIsXG4gICAgICAgICAgICBwcmljZTogMzUwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcInNjcm9sbF9zaGllbGRfYWxsaWVzXCIsXG4gICAgICAgICAgICBuYW1lOiBcIue+pOS9k+aKpOebvuWNt+i9tFwiLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwi576k5L2T5oqk55u+5Y236L20XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLkvb/nlKjlkI7lrabkvJrmioDog73vvJrnvqTkvZPmiqTnm75cIixcbiAgICAgICAgICAgIGljb246IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBcImNvbnN1bWFibGVcIixcbiAgICAgICAgICAgIGVmZmVjdFR5cGU6IFwic2tpbGxfc2Nyb2xsXCIsXG4gICAgICAgICAgICBza2lsbElkOiA2LCAvLyBTa2lsbEVudW0uc2hpZWxkQWxsaWVzXG4gICAgICAgICAgICBtYXhTdGFjazogOTksXG4gICAgICAgICAgICByYXJpdHk6IFwicmFyZVwiLFxuICAgICAgICAgICAgcHJpY2U6IDMyMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCJzY3JvbGxfY2xlYW5zZV9hbGxpZXNcIixcbiAgICAgICAgICAgIG5hbWU6IFwi5YeA5YyW5pyv5Y236L20XCIsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCLlh4DljJbmnK/ljbfovbRcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIuS9v+eUqOWQjuWtpuS8muaKgOiDve+8muWHgOWMluacr1wiLFxuICAgICAgICAgICAgaWNvbjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IFwiY29uc3VtYWJsZVwiLFxuICAgICAgICAgICAgZWZmZWN0VHlwZTogXCJza2lsbF9zY3JvbGxcIixcbiAgICAgICAgICAgIHNraWxsSWQ6IDEwLCAvLyBTa2lsbEVudW0uY2xlYW5zZUFsbGllc1xuICAgICAgICAgICAgbWF4U3RhY2s6IDk5LFxuICAgICAgICAgICAgcmFyaXR5OiBcInJhcmVcIixcbiAgICAgICAgICAgIHByaWNlOiAzODBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwiZXhwX3BvdGlvblwiLFxuICAgICAgICAgICAgbmFtZTogXCLnu4/pqozoja/msLRcIixcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIue7j+mqjOiNr+awtFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi5L2/55So5ZCO6I635b6XMTAw54K557uP6aqM5YC8XCIsXG4gICAgICAgICAgICBpY29uOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogXCJjb25zdW1hYmxlXCIsXG4gICAgICAgICAgICBlZmZlY3RUeXBlOiBcImV4cFwiLFxuICAgICAgICAgICAgZWZmZWN0VmFsdWU6IDEwMCxcbiAgICAgICAgICAgIG1heFN0YWNrOiA5OSxcbiAgICAgICAgICAgIHJhcml0eTogXCJjb21tb25cIixcbiAgICAgICAgICAgIHByaWNlOiA1MFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCJocF9wb3Rpb25cIixcbiAgICAgICAgICAgIG5hbWU6IFwi55Sf5ZG96I2v5rC0XCIsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCLnlJ/lkb3oja/msLRcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIuS9v+eUqOWQjuaBouWkjTUw54K555Sf5ZG95YC8XCIsXG4gICAgICAgICAgICBpY29uOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogXCJjb25zdW1hYmxlXCIsXG4gICAgICAgICAgICBlZmZlY3RUeXBlOiBcImhwXCIsXG4gICAgICAgICAgICBlZmZlY3RWYWx1ZTogNTAsXG4gICAgICAgICAgICBtYXhTdGFjazogOTksXG4gICAgICAgICAgICByYXJpdHk6IFwiY29tbW9uXCIsXG4gICAgICAgICAgICBwcmljZTogMzBcbiAgICAgICAgfSxcbiAgICAgICAgLy8g6KOF5aSH77ya5Y+v56m/5oi05Yiw6KOF5aSH5qCPXG4gICAgICAgIC8vIOijheWkh+WcqOiDjOWMheS4reWPr+WghuWPoOWkmuS7tu+8m+ijheWkh+agj+KAnOavj+anveS9jeS4gOS7tuKAneeUseanveS9jemAu+i+keS/neivgVxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCJ3YXJfaGFtbWVyXCIsXG4gICAgICAgICAgICBuYW1lOiBcIuaImOmUpFwiLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwi6KOF5aSH5oiY6ZSkXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLoo4XlpIflkI7mlLvlh7vlipsrMTVcIixcbiAgICAgICAgICAgIGljb246IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBcImVxdWlwbWVudFwiLFxuICAgICAgICAgICAgZWZmZWN0VHlwZTogXCJhdHRhY2tcIixcbiAgICAgICAgICAgIGVmZmVjdFZhbHVlOiAxNSxcbiAgICAgICAgICAgIG1heFN0YWNrOiA5OSxcbiAgICAgICAgICAgIHJhcml0eTogXCJ1bmNvbW1vblwiLFxuICAgICAgICAgICAgcHJpY2U6IDUwMCxcbiAgICAgICAgICAgIGVxdWlwbWVudFNsb3Q6IFwid2VhcG9uXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwiaXJvbl9hcm1vclwiLFxuICAgICAgICAgICAgbmFtZTogXCLpk4HnlLJcIixcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIumTgeeUslwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi6KOF5aSH5ZCO6Ziy5b6h5YqbKzEwXCIsXG4gICAgICAgICAgICBpY29uOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogXCJlcXVpcG1lbnRcIixcbiAgICAgICAgICAgIGVmZmVjdFR5cGU6IFwiZGVmZW5zZVwiLFxuICAgICAgICAgICAgZWZmZWN0VmFsdWU6IDEwLFxuICAgICAgICAgICAgbWF4U3RhY2s6IDk5LFxuICAgICAgICAgICAgcmFyaXR5OiBcInVuY29tbW9uXCIsXG4gICAgICAgICAgICBwcmljZTogNDAwLFxuICAgICAgICAgICAgZXF1aXBtZW50U2xvdDogXCJhcm1vclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcImxlYXRoZXJfYm9vdHNcIixcbiAgICAgICAgICAgIG5hbWU6IFwi55qu6Z20XCIsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCLnmq7pnbRcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIuijheWkh+WQjumAn+W6pisyXCIsXG4gICAgICAgICAgICBpY29uOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogXCJlcXVpcG1lbnRcIixcbiAgICAgICAgICAgIGVmZmVjdFR5cGU6IFwic3BlZWRcIixcbiAgICAgICAgICAgIGVmZmVjdFZhbHVlOiAyLFxuICAgICAgICAgICAgbWF4U3RhY2s6IDk5LFxuICAgICAgICAgICAgcmFyaXR5OiBcImNvbW1vblwiLFxuICAgICAgICAgICAgcHJpY2U6IDIwMCxcbiAgICAgICAgICAgIGVxdWlwbWVudFNsb3Q6IFwic2hvZXNcIlxuICAgICAgICB9XG4gICAgICAgIC8vIOWQjue7reWPr+S7peWcqOi/memHjOa3u+WKoOabtOWkmumBk+WFt1xuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgICBpZDogXCJleHBfcG90aW9uXCIsXG4gICAgICAgIC8vICAgICBuYW1lOiBcIue7j+mqjOiNr+awtFwiLFxuICAgICAgICAvLyAgICAgZGlzcGxheU5hbWU6IFwi57uP6aqM6I2v5rC0XCIsXG4gICAgICAgIC8vICAgICBkZXNjcmlwdGlvbjogXCLkvb/nlKjlkI7ojrflvpcxMDDngrnnu4/pqozlgLxcIixcbiAgICAgICAgLy8gICAgIGljb246IG51bGwsXG4gICAgICAgIC8vICAgICB0eXBlOiBcImNvbnN1bWFibGVcIixcbiAgICAgICAgLy8gICAgIGVmZmVjdFR5cGU6IFwiZXhwXCIsXG4gICAgICAgIC8vICAgICBlZmZlY3RWYWx1ZTogMTAwLFxuICAgICAgICAvLyAgICAgbWF4U3RhY2s6IDk5LFxuICAgICAgICAvLyAgICAgcmFyaXR5OiBcImNvbW1vblwiLFxuICAgICAgICAvLyAgICAgcHJpY2U6IDUwXG4gICAgICAgIC8vIH1cbiAgICBdLFxuXG4gICAgLyoqXG4gICAgICog5qC55o2uSUTojrflj5bpgZPlhbfphY3nva5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaXRlbUlkIC0g6YGT5YW3SURcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9IOmBk+WFt+mFjee9ruWvueixoeaIlm51bGxcbiAgICAgKi9cbiAgICBnZXRJdGVtQnlJZChpdGVtSWQpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGl0ZW1JZCk7XG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgY2Mud2FybihgW0l0ZW1Db25maWddIOacquaJvuWIsOmBk+WFt+mFjee9rjogJHtpdGVtSWR9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW0gfHwgbnVsbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5omA5pyJ6YGT5YW36YWN572uXG4gICAgICogQHJldHVybnMge0FycmF5fSDpgZPlhbfphY3nva7liJfooahcbiAgICAgKi9cbiAgICBnZXRBbGxJdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOagueaNruexu+Wei+iOt+WPlumBk+WFt+WIl+ihqFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0g6YGT5YW357G75Z6LXG4gICAgICogQHJldHVybnMge0FycmF5fSDpgZPlhbfphY3nva7liJfooahcbiAgICAgKi9cbiAgICBnZXRJdGVtc0J5VHlwZSh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0udHlwZSA9PT0gdHlwZSk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJdGVtQ29uZmlnO1xuIl19