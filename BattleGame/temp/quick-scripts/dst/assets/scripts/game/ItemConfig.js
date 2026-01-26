
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZVxcSXRlbUNvbmZpZy5qcyJdLCJuYW1lcyI6WyJJdGVtQ29uZmlnIiwiSXRlbVR5cGUiLCJDT05TVU1BQkxFIiwiRVFVSVBNRU5UIiwiTUFURVJJQUwiLCJFZmZlY3RUeXBlIiwiRVhQIiwiSFAiLCJBVFRBQ0siLCJERUZFTlNFIiwiTEVWRUxfVVAiLCJpdGVtcyIsImlkIiwibmFtZSIsImRpc3BsYXlOYW1lIiwiZGVzY3JpcHRpb24iLCJpY29uIiwidHlwZSIsImVmZmVjdFR5cGUiLCJlZmZlY3RWYWx1ZSIsIm1heFN0YWNrIiwicmFyaXR5IiwicHJpY2UiLCJnZXRJdGVtQnlJZCIsIml0ZW1JZCIsIml0ZW0iLCJmaW5kIiwiY2MiLCJ3YXJuIiwiZ2V0QWxsSXRlbXMiLCJnZXRJdGVtc0J5VHlwZSIsImZpbHRlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxVQUFVLEdBQUc7RUFDYjtFQUNBQyxRQUFRLEVBQUU7SUFDTkMsVUFBVSxFQUFFLFlBQVk7SUFBRztJQUMzQkMsU0FBUyxFQUFFLFdBQVc7SUFBTTtJQUM1QkMsUUFBUSxFQUFFLFVBQVUsQ0FBUTtFQUNoQyxDQUFDOztFQUVEO0VBQ0FDLFVBQVUsRUFBRTtJQUNSQyxHQUFHLEVBQUUsS0FBSztJQUFlO0lBQ3pCQyxFQUFFLEVBQUUsSUFBSTtJQUFpQjtJQUN6QkMsTUFBTSxFQUFFLFFBQVE7SUFBVTtJQUMxQkMsT0FBTyxFQUFFLFNBQVM7SUFBUTtJQUMxQkMsUUFBUSxFQUFFLFVBQVUsQ0FBTTtFQUM5QixDQUFDOztFQUVEO0VBQ0FDLEtBQUssRUFBRSxDQUNIO0lBQ0lDLEVBQUUsRUFBRSxnQkFBZ0I7SUFDcEJDLElBQUksRUFBRSxNQUFNO0lBQ1pDLFdBQVcsRUFBRSxNQUFNO0lBQ25CQyxXQUFXLEVBQUUsYUFBYTtJQUMxQkMsSUFBSSxFQUFFLElBQUk7SUFBRTtJQUNaQyxJQUFJLEVBQUUsWUFBWTtJQUFFO0lBQ3BCQyxVQUFVLEVBQUUsVUFBVTtJQUFFO0lBQ3hCQyxXQUFXLEVBQUUsQ0FBQztJQUFFO0lBQ2hCQyxRQUFRLEVBQUUsRUFBRTtJQUFFO0lBQ2RDLE1BQU0sRUFBRSxRQUFRO0lBQUU7SUFDbEJDLEtBQUssRUFBRSxHQUFHLENBQUM7RUFDZjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFBQSxDQUNIO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJQyxXQUFXLFdBQUFBLFlBQUNDLE1BQU0sRUFBRTtJQUNoQixJQUFNQyxJQUFJLEdBQUcsSUFBSSxDQUFDZCxLQUFLLENBQUNlLElBQUksQ0FBQyxVQUFBRCxJQUFJO01BQUEsT0FBSUEsSUFBSSxDQUFDYixFQUFFLEtBQUtZLE1BQU07SUFBQSxFQUFDO0lBQ3hELElBQUksQ0FBQ0MsSUFBSSxFQUFFO01BQ1BFLEVBQUUsQ0FBQ0MsSUFBSSwrREFBMEJKLE1BQU0sQ0FBRztJQUM5QztJQUNBLE9BQU9DLElBQUksSUFBSSxJQUFJO0VBQ3ZCLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJSSxXQUFXLFdBQUFBLFlBQUEsRUFBRztJQUNWLE9BQU8sSUFBSSxDQUFDbEIsS0FBSztFQUNyQixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJbUIsY0FBYyxXQUFBQSxlQUFDYixJQUFJLEVBQUU7SUFDakIsT0FBTyxJQUFJLENBQUNOLEtBQUssQ0FBQ29CLE1BQU0sQ0FBQyxVQUFBTixJQUFJO01BQUEsT0FBSUEsSUFBSSxDQUFDUixJQUFJLEtBQUtBLElBQUk7SUFBQSxFQUFDO0VBQ3hEO0FBQ0osQ0FBQztBQUVEZSxNQUFNLENBQUNDLE9BQU8sR0FBR2pDLFVBQVUiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDpgZPlhbfphY3nva5cclxuICog5a6a5LmJ5omA5pyJ6YGT5YW355qE5Z+656GA5pWw5o2uXHJcbiAqL1xyXG52YXIgSXRlbUNvbmZpZyA9IHtcclxuICAgIC8vIOmBk+WFt+exu+Wei+aemuS4vlxyXG4gICAgSXRlbVR5cGU6IHtcclxuICAgICAgICBDT05TVU1BQkxFOiBcImNvbnN1bWFibGVcIiwgIC8vIOa2iOiAl+WTge+8iOS9v+eUqOWQjua2iOWkse+8iVxyXG4gICAgICAgIEVRVUlQTUVOVDogXCJlcXVpcG1lbnRcIiwgICAgIC8vIOijheWkh++8iOWPr+epv+aItO+8iVxyXG4gICAgICAgIE1BVEVSSUFMOiBcIm1hdGVyaWFsXCIgICAgICAgIC8vIOadkOaWme+8iOeUqOS6juWQiOaIkOetie+8iVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyDpgZPlhbfmlYjmnpznsbvlnovmnprkuL5cclxuICAgIEVmZmVjdFR5cGU6IHtcclxuICAgICAgICBFWFA6IFwiZXhwXCIsICAgICAgICAgICAgICAvLyDlop7liqDnu4/pqozlgLxcclxuICAgICAgICBIUDogXCJocFwiLCAgICAgICAgICAgICAgICAvLyDmgaLlpI3nlJ/lkb3lgLxcclxuICAgICAgICBBVFRBQ0s6IFwiYXR0YWNrXCIsICAgICAgICAgLy8g5aKe5Yqg5pS75Ye75YqbXHJcbiAgICAgICAgREVGRU5TRTogXCJkZWZlbnNlXCIsICAgICAgIC8vIOWinuWKoOmYsuW+oeWKm1xyXG4gICAgICAgIExFVkVMX1VQOiBcImxldmVsX3VwXCIgICAgICAvLyDnm7TmjqXljYfnuqdcclxuICAgIH0sXHJcblxyXG4gICAgLy8g5omA5pyJ6YGT5YW36YWN572u5YiX6KGoXHJcbiAgICBpdGVtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IFwidXBncmFkZV9wb3Rpb25cIixcclxuICAgICAgICAgICAgbmFtZTogXCLljYfnuqfoja/msLRcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwi5Y2H57qn6I2v5rC0XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIuS9v+eUqOWQjuWPr+S7peaPkOWNh+inkuiJsuetiee6p1wiLFxyXG4gICAgICAgICAgICBpY29uOiBudWxsLCAvLyDlm77moIfotYTmupDvvIhTcHJpdGVGcmFtZe+8jOmcgOimgeWcqOe8lui+keWZqOS4reiuvue9ru+8iVxyXG4gICAgICAgICAgICB0eXBlOiBcImNvbnN1bWFibGVcIiwgLy8g5raI6ICX5ZOBXHJcbiAgICAgICAgICAgIGVmZmVjdFR5cGU6IFwibGV2ZWxfdXBcIiwgLy8g5pWI5p6c57G75Z6L77ya55u05o6l5Y2H57qnXHJcbiAgICAgICAgICAgIGVmZmVjdFZhbHVlOiAxLCAvLyDmlYjmnpzlgLzvvJrmj5DljYcx57qnXHJcbiAgICAgICAgICAgIG1heFN0YWNrOiA5OSwgLy8g5pyA5aSn5aCG5Y+g5pWw6YePXHJcbiAgICAgICAgICAgIHJhcml0eTogXCJjb21tb25cIiwgLy8g56iA5pyJ5bqm77ya5pmu6YCaXHJcbiAgICAgICAgICAgIHByaWNlOiAxMDAgLy8g5Lu35qC877yI6YeR5biB77yJXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWQjue7reWPr+S7peWcqOi/memHjOa3u+WKoOabtOWkmumBk+WFt1xyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgaWQ6IFwiZXhwX3BvdGlvblwiLFxyXG4gICAgICAgIC8vICAgICBuYW1lOiBcIue7j+mqjOiNr+awtFwiLFxyXG4gICAgICAgIC8vICAgICBkaXNwbGF5TmFtZTogXCLnu4/pqozoja/msLRcIixcclxuICAgICAgICAvLyAgICAgZGVzY3JpcHRpb246IFwi5L2/55So5ZCO6I635b6XMTAw54K557uP6aqM5YC8XCIsXHJcbiAgICAgICAgLy8gICAgIGljb246IG51bGwsXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IFwiY29uc3VtYWJsZVwiLFxyXG4gICAgICAgIC8vICAgICBlZmZlY3RUeXBlOiBcImV4cFwiLFxyXG4gICAgICAgIC8vICAgICBlZmZlY3RWYWx1ZTogMTAwLFxyXG4gICAgICAgIC8vICAgICBtYXhTdGFjazogOTksXHJcbiAgICAgICAgLy8gICAgIHJhcml0eTogXCJjb21tb25cIixcclxuICAgICAgICAvLyAgICAgcHJpY2U6IDUwXHJcbiAgICAgICAgLy8gfVxyXG4gICAgXSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOagueaNrklE6I635Y+W6YGT5YW36YWN572uXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaXRlbUlkIC0g6YGT5YW3SURcclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8bnVsbH0g6YGT5YW36YWN572u5a+56LGh5oiWbnVsbFxyXG4gICAgICovXHJcbiAgICBnZXRJdGVtQnlJZChpdGVtSWQpIHtcclxuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaXRlbUlkKTtcclxuICAgICAgICBpZiAoIWl0ZW0pIHtcclxuICAgICAgICAgICAgY2Mud2FybihgW0l0ZW1Db25maWddIOacquaJvuWIsOmBk+WFt+mFjee9rjogJHtpdGVtSWR9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtIHx8IG51bGw7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5omA5pyJ6YGT5YW36YWN572uXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IOmBk+WFt+mFjee9ruWIl+ihqFxyXG4gICAgICovXHJcbiAgICBnZXRBbGxJdGVtcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmoLnmja7nsbvlnovojrflj5bpgZPlhbfliJfooahcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0g6YGT5YW357G75Z6LXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IOmBk+WFt+mFjee9ruWIl+ihqFxyXG4gICAgICovXHJcbiAgICBnZXRJdGVtc0J5VHlwZSh0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS50eXBlID09PSB0eXBlKTtcclxuICAgIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSXRlbUNvbmZpZztcclxuIl19