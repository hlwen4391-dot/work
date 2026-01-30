
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
    // 增加经验值
    HP: "hp",
    // 恢复生命值
    ATTACK: "attack",
    // 增加攻击力
    DEFENSE: "defense",
    // 增加防御力
    LEVEL_UP: "level_up",
    // 直接升级
    SKILL_SCROLL: "skill_scroll" // 技能卷轴（使用后解锁对应技能）
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZVxcSXRlbUNvbmZpZy5qcyJdLCJuYW1lcyI6WyJJdGVtQ29uZmlnIiwiSXRlbVR5cGUiLCJDT05TVU1BQkxFIiwiRVFVSVBNRU5UIiwiTUFURVJJQUwiLCJFZmZlY3RUeXBlIiwiRVhQIiwiSFAiLCJBVFRBQ0siLCJERUZFTlNFIiwiTEVWRUxfVVAiLCJTS0lMTF9TQ1JPTEwiLCJpdGVtcyIsImlkIiwibmFtZSIsImRpc3BsYXlOYW1lIiwiZGVzY3JpcHRpb24iLCJpY29uIiwidHlwZSIsImVmZmVjdFR5cGUiLCJlZmZlY3RWYWx1ZSIsIm1heFN0YWNrIiwicmFyaXR5IiwicHJpY2UiLCJza2lsbElkIiwiZ2V0SXRlbUJ5SWQiLCJpdGVtSWQiLCJpdGVtIiwiZmluZCIsImNjIiwid2FybiIsImdldEFsbEl0ZW1zIiwiZ2V0SXRlbXNCeVR5cGUiLCJmaWx0ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsVUFBVSxHQUFHO0VBQ2I7RUFDQUMsUUFBUSxFQUFFO0lBQ05DLFVBQVUsRUFBRSxZQUFZO0lBQUc7SUFDM0JDLFNBQVMsRUFBRSxXQUFXO0lBQU07SUFDNUJDLFFBQVEsRUFBRSxVQUFVLENBQVE7RUFDaEMsQ0FBQzs7RUFFRDtFQUNBQyxVQUFVLEVBQUU7SUFDUkMsR0FBRyxFQUFFLEtBQUs7SUFBZTtJQUN6QkMsRUFBRSxFQUFFLElBQUk7SUFBaUI7SUFDekJDLE1BQU0sRUFBRSxRQUFRO0lBQVU7SUFDMUJDLE9BQU8sRUFBRSxTQUFTO0lBQVE7SUFDMUJDLFFBQVEsRUFBRSxVQUFVO0lBQU07SUFDMUJDLFlBQVksRUFBRSxjQUFjLENBQUU7RUFDbEMsQ0FBQzs7RUFFRDtFQUNBQyxLQUFLLEVBQUUsQ0FDSDtJQUNJQyxFQUFFLEVBQUUsZ0JBQWdCO0lBQ3BCQyxJQUFJLEVBQUUsTUFBTTtJQUNaQyxXQUFXLEVB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QSxPQUFJQSxJQUFJLENBQUNkLEVBQUUsS0FBS2EsTUFBTTtJQUFBLEVBQUM7SUFDeEQsSUFBSSxDQUFDQyxJQUFJLEVBQUU7TUFDUEUsRUFBRSxDQUFDQyxJQUFJLCtEQUEwQkosTUFBTSxDQUFHO0lBQzlDO0lBQ0EsT0FBT0MsSUFBSSxJQUFJLElBQUk7RUFDdkIsQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0VBQ0lJLFdBQVcsV0FBQUEsWUFBQSxFQUFHO0lBQ1YsT0FBTyxJQUFJLENBQUNuQixLQUFLO0VBQ3JCLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0lvQixjQUFjLFdBQUFBLGVBQUNkLElBQUksRUFBRTtJQUNqQixPQUFPLElBQUksQ0FBQ04sS0FBSyxDQUFDcUIsTUFBTSxDQUFDLFVBQUFOLElBQUk7TUFBQSxPQUFJQSxJQUFJLENBQUNULElBQUksS0FBS0EsSUFBSTtJQUFBLEVBQUM7RUFDeEQ7QUFDSixDQUFDO0FBRURnQixNQUFNLENBQUNDLE9BQU8sR0FBR25DLFVBQVUiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDpgZPlhbfphY3nva5cclxuICog5a6a5LmJ5omA5pyJ6YGT5YW355qE5Z+656GA5pWw5o2uXHJcbiAqL1xyXG52YXIgSXRlbUNvbmZpZyA9IHtcclxuICAgIC8vIOmBk+WFt+exu+Wei+aemuS4vlxyXG4gICAgSXRlbVR5cGU6IHtcclxuICAgICAgICBDT05TVU1BQkxFOiBcImNvbnN1bWFibGVcIiwgIC8vIOa2iOiAl+WTge+8iOS9v+eUqOWQjua2iOWkse+8iVxyXG4gICAgICAgIEVRVUlQTUVOVDogXCJlcXVpcG1lbnRcIiwgICAgIC8vIOijheWkh++8iOWPr+epv+aItO+8iVxyXG4gICAgICAgIE1BVEVSSUFMOiBcIm1hdGVyaWFsXCIgICAgICAgIC8vIOadkOaWme+8iOeUqOS6juWQiOaIkOetie+8iVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyDpgZPlhbfmlYjmnpznsbvlnovmnprkuL5cclxuICAgIEVmZmVjdFR5cGU6IHtcclxuICAgICAgICBFWFA6IFwiZXhwXCIsICAgICAgICAgICAgICAvLyDlop7liqDnu4/pqozlgLxcclxuICAgICAgICBIUDogXCJocFwiLCAgICAgICAgICAgICAgICAvLyDmgaLlpI3nlJ/lkb3lgLxcclxuICAgICAgICBBVFRBQ0s6IFwiYXR0YWNrXCIsICAgICAgICAgLy8g5aKe5Yqg5pS75Ye75YqbXHJcbiAgICAgICAgREVGRU5TRTogXCJkZWZlbnNlXCIsICAgICAgIC8vIOWinuWKoOmYsuW+oeWKm1xyXG4gICAgICAgIExFVkVMX1VQOiBcImxldmVsX3VwXCIsICAgICAvLyDnm7TmjqXljYfnuqdcclxuICAgICAgICBTS0lMTF9TQ1JPTEw6IFwic2tpbGxfc2Nyb2xsXCIgIC8vIOaKgOiDveWNt+i9tO+8iOS9v+eUqOWQjuino+mUgeWvueW6lOaKgOiDve+8iVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyDmiYDmnInpgZPlhbfphY3nva7liJfooahcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogXCJ1cGdyYWRlX3BvdGlvblwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIuWNh+e6p+iNr+awtFwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCLljYfnuqfoja/msLRcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi5L2/55So5ZCO5Y+v5Lul5o+Q5Y2H6KeS6Imy562J57qnXCIsXHJcbiAgICAgICAgICAgIGljb246IG51bGwsIC8vIOWbvuagh+i1hOa6kO+8iFNwcml0ZUZyYW1l77yM6ZyA6KaB5Zyo57yW6L6R5Zmo5Lit6K6+572u77yJXHJcbiAgICAgICAgICAgIHR5cGU6IFwiY29uc3VtYWJsZVwiLCAvLyDmtojogJflk4FcclxuICAgICAgICAgICAgZWZmZWN0VHlwZTogXCJsZXZlbF91cFwiLCAvLyDmlYjmnpznsbvlnovvvJrnm7TmjqXljYfnuqdcclxuICAgICAgICAgICAgZWZmZWN0VmFsdWU6IDEsIC8vIOaViOaenOWAvO+8muaPkOWNhzHnuqdcclxuICAgICAgICAgICAgbWF4U3RhY2s6IDk5LCAvLyDmnIDlpKfloIblj6DmlbDph49cclxuICAgICAgICAgICAgcmFyaXR5OiBcImNvbW1vblwiLCAvLyDnqIDmnInluqbvvJrmma7pgJpcclxuICAgICAgICAgICAgcHJpY2U6IDEwMCAvLyDku7fmoLzvvIjph5HluIHvvIlcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOaKgOiDveWNt+i9tO+8muS9v+eUqOWQjuS4uuW9k+WJjeinkuiJsuino+mUgeWvueW6lOaKgOiDve+8iHNraWxsSWQg5LiOIFNraWxsQ29uZmlnL1NraWxsRW51bSDkuIDoh7TvvIlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiBcInNjcm9sbF9maXJlYmFsbFwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIueBq+eQg+acr+WNt+i9tFwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCLngavnkIPmnK/ljbfovbRcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi5L2/55So5ZCO5a2m5Lya5oqA6IO977ya54Gr55CD5pyvXCIsXHJcbiAgICAgICAgICAgIGljb246IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiY29uc3VtYWJsZVwiLFxyXG4gICAgICAgICAgICBlZmZlY3RUeXBlOiBcInNraWxsX3Njcm9sbFwiLFxyXG4gICAgICAgICAgICBza2lsbElkOiAzLCAvLyBTa2lsbEVudW0uZmlyZWJhbGxcclxuICAgICAgICAgICAgbWF4U3RhY2s6IDk5LFxyXG4gICAgICAgICAgICByYXJpdHk6IFwidW5jb21tb25cIixcclxuICAgICAgICAgICAgcHJpY2U6IDIwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogXCJzY3JvbGxfYmVhc3RfcmFnZVwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIuWFveWMlueLguaatOWNt+i9tFwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCLlhb3ljJbni4LmmrTljbfovbRcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi5L2/55So5ZCO5a2m5Lya5oqA6IO977ya5YW95YyW54uC5pq0XCIsXHJcbiAgICAgICAgICAgIGljb246IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiY29uc3VtYWJsZVwiLFxyXG4gICAgICAgICAgICBlZmZlY3RUeXBlOiBcInNraWxsX3Njcm9sbFwiLFxyXG4gICAgICAgICAgICBza2lsbElkOiA3LCAvLyBTa2lsbEVudW0uYmVhc3RSYWdlXHJcbiAgICAgICAgICAgIG1heFN0YWNrOiA5OSxcclxuICAgICAgICAgICAgcmFyaXR5OiBcInVuY29tbW9uXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiAyNTBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IFwic2Nyb2xsX2hlYWxfYWxsaWVzXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwi5rK755aX5pyv5Y236L20XCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIuayu+eWl+acr+WNt+i9tFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLkvb/nlKjlkI7lrabkvJrmioDog73vvJrnvqTkvZPmsrvnlpdcIixcclxuICAgICAgICAgICAgaWNvbjogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogXCJjb25zdW1hYmxlXCIsXHJcbiAgICAgICAgICAgIGVmZmVjdFR5cGU6IFwic2tpbGxfc2Nyb2xsXCIsXHJcbiAgICAgICAgICAgIHNraWxsSWQ6IDksIC8vIFNraWxsRW51bS5oZWFsQWxsaWVzXHJcbiAgICAgICAgICAgIG1heFN0YWNrOiA5OSxcclxuICAgICAgICAgICAgcmFyaXR5OiBcInJhcmVcIixcclxuICAgICAgICAgICAgcHJpY2U6IDMwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogXCJzY3JvbGxfc3R1blwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIuebvuWHu+WNt+i9tFwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCLnm77lh7vljbfovbRcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi5L2/55So5ZCO5a2m5Lya5oqA6IO977ya55u+5Ye7XCIsXHJcbiAgICAgICAgICAgIGljb246IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiY29uc3VtYWJsZVwiLFxyXG4gICAgICAgICAgICBlZmZlY3RUeXBlOiBcInNraWxsX3Njcm9sbFwiLFxyXG4gICAgICAgICAgICBza2lsbElkOiAyLCAvLyBTa2lsbEVudW0uc3R1blNraWxsXHJcbiAgICAgICAgICAgIG1heFN0YWNrOiA5OSxcclxuICAgICAgICAgICAgcmFyaXR5OiBcInVuY29tbW9uXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiAxODBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IFwic2Nyb2xsX3dhcl9jcnlcIixcclxuICAgICAgICAgICAgbmFtZTogXCLmiJjlkLzljbfovbRcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwi5oiY5ZC85Y236L20XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIuS9v+eUqOWQjuWtpuS8muaKgOiDve+8muaImOWQvFwiLFxyXG4gICAgICAgICAgICBpY29uOiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBcImNvbnN1bWFibGVcIixcclxuICAgICAgICAgICAgZWZmZWN0VHlwZTogXCJza2lsbF9zY3JvbGxcIixcclxuICAgICAgICAgICAgc2tpbGxJZDogNSwgLy8gU2tpbGxFbnVtLndhckNyeVxyXG4gICAgICAgICAgICBtYXhTdGFjazogOTksXHJcbiAgICAgICAgICAgIHJhcml0eTogXCJyYXJlXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiAzNTBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IFwic2Nyb2xsX3NoaWVsZF9hbGxpZXNcIixcclxuICAgICAgICAgICAgbmFtZTogXCLnvqTkvZPmiqTnm77ljbfovbRcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwi576k5L2T5oqk55u+5Y236L20XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIuS9v+eUqOWQjuWtpuS8muaKgOiDve+8mue+pOS9k+aKpOebvlwiLFxyXG4gICAgICAgICAgICBpY29uOiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBcImNvbnN1bWFibGVcIixcclxuICAgICAgICAgICAgZWZmZWN0VHlwZTogXCJza2lsbF9zY3JvbGxcIixcclxuICAgICAgICAgICAgc2tpbGxJZDogNiwgLy8gU2tpbGxFbnVtLnNoaWVsZEFsbGllc1xyXG4gICAgICAgICAgICBtYXhTdGFjazogOTksXHJcbiAgICAgICAgICAgIHJhcml0eTogXCJyYXJlXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiAzMjBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IFwic2Nyb2xsX2NsZWFuc2VfYWxsaWVzXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwi5YeA5YyW5pyv5Y236L20XCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIuWHgOWMluacr+WNt+i9tFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLkvb/nlKjlkI7lrabkvJrmioDog73vvJrlh4DljJbmnK9cIixcclxuICAgICAgICAgICAgaWNvbjogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogXCJjb25zdW1hYmxlXCIsXHJcbiAgICAgICAgICAgIGVmZmVjdFR5cGU6IFwic2tpbGxfc2Nyb2xsXCIsXHJcbiAgICAgICAgICAgIHNraWxsSWQ6IDEwLCAvLyBTa2lsbEVudW0uY2xlYW5zZUFsbGllc1xyXG4gICAgICAgICAgICBtYXhTdGFjazogOTksXHJcbiAgICAgICAgICAgIHJhcml0eTogXCJyYXJlXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiAzODBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IFwiZXhwX3BvdGlvblwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIue7j+mqjOiNr+awtFwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCLnu4/pqozoja/msLRcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi5L2/55So5ZCO6I635b6XMTAw54K557uP6aqM5YC8XCIsXHJcbiAgICAgICAgICAgIGljb246IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiY29uc3VtYWJsZVwiLFxyXG4gICAgICAgICAgICBlZmZlY3RUeXBlOiBcImV4cFwiLFxyXG4gICAgICAgICAgICBlZmZlY3RWYWx1ZTogMTAwLFxyXG4gICAgICAgICAgICBtYXhTdGFjazogOTksXHJcbiAgICAgICAgICAgIHJhcml0eTogXCJjb21tb25cIixcclxuICAgICAgICAgICAgcHJpY2U6IDUwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiBcImhwX3BvdGlvblwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIueUn+WRveiNr+awtFwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCLnlJ/lkb3oja/msLRcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi5L2/55So5ZCO5oGi5aSNNTDngrnnlJ/lkb3lgLxcIixcclxuICAgICAgICAgICAgaWNvbjogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogXCJjb25zdW1hYmxlXCIsXHJcbiAgICAgICAgICAgIGVmZmVjdFR5cGU6IFwiaHBcIixcclxuICAgICAgICAgICAgZWZmZWN0VmFsdWU6IDUwLFxyXG4gICAgICAgICAgICBtYXhTdGFjazogOTksXHJcbiAgICAgICAgICAgIHJhcml0eTogXCJjb21tb25cIixcclxuICAgICAgICAgICAgcHJpY2U6IDMwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWQjue7reWPr+S7peWcqOi/memHjOa3u+WKoOabtOWkmumBk+WFt1xyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgaWQ6IFwiZXhwX3BvdGlvblwiLFxyXG4gICAgICAgIC8vICAgICBuYW1lOiBcIue7j+mqjOiNr+awtFwiLFxyXG4gICAgICAgIC8vICAgICBkaXNwbGF5TmFtZTogXCLnu4/pqozoja/msLRcIixcclxuICAgICAgICAvLyAgICAgZGVzY3JpcHRpb246IFwi5L2/55So5ZCO6I635b6XMTAw54K557uP6aqM5YC8XCIsXHJcbiAgICAgICAgLy8gICAgIGljb246IG51bGwsXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IFwiY29uc3VtYWJsZVwiLFxyXG4gICAgICAgIC8vICAgICBlZmZlY3RUeXBlOiBcImV4cFwiLFxyXG4gICAgICAgIC8vICAgICBlZmZlY3RWYWx1ZTogMTAwLFxyXG4gICAgICAgIC8vICAgICBtYXhTdGFjazogOTksXHJcbiAgICAgICAgLy8gICAgIHJhcml0eTogXCJjb21tb25cIixcclxuICAgICAgICAvLyAgICAgcHJpY2U6IDUwXHJcbiAgICAgICAgLy8gfVxyXG4gICAgXSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOagueaNrklE6I635Y+W6YGT5YW36YWN572uXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaXRlbUlkIC0g6YGT5YW3SURcclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8bnVsbH0g6YGT5YW36YWN572u5a+56LGh5oiWbnVsbFxyXG4gICAgICovXHJcbiAgICBnZXRJdGVtQnlJZChpdGVtSWQpIHtcclxuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaXRlbUlkKTtcclxuICAgICAgICBpZiAoIWl0ZW0pIHtcclxuICAgICAgICAgICAgY2Mud2FybihgW0l0ZW1Db25maWddIOacquaJvuWIsOmBk+WFt+mFjee9rjogJHtpdGVtSWR9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtIHx8IG51bGw7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5omA5pyJ6YGT5YW36YWN572uXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IOmBk+WFt+mFjee9ruWIl+ihqFxyXG4gICAgICovXHJcbiAgICBnZXRBbGxJdGVtcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmoLnmja7nsbvlnovojrflj5bpgZPlhbfliJfooahcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0g6YGT5YW357G75Z6LXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IOmBk+WFt+mFjee9ruWIl+ihqFxyXG4gICAgICovXHJcbiAgICBnZXRJdGVtc0J5VHlwZSh0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS50eXBlID09PSB0eXBlKTtcclxuICAgIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSXRlbUNvbmZpZztcclxuIl19