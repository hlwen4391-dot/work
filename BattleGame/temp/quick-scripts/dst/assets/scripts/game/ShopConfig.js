
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/game/ShopConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fa1caoyHQZG+46Uyq6OXH4E', 'ShopConfig');
// Scripts/game/ShopConfig.js

"use strict";

/**
 * 商城配置
 * 定义所有可购买的商品及其价格
 */
var ShopConfig = {
  /**
   * 获取所有商品列表
   * @returns {Array} 商品列表 [{ id, name, price, itemId, count, icon, description }, ...]
   */
  getAllItems: function getAllItems() {
    return [{
      id: "upgrade_potion_1",
      name: "升级药水",
      price: 100,
      itemId: "upgrade_potion",
      // 购买后获得的道具ID
      count: 1,
      // 购买数量
      icon: null,
      // 图标（由ItemIconSetter设置）
      description: "使用后可以提升角色等级",
      category: "consumable" // 消耗品
    }, {
      id: "upgrade_potion_5",
      name: "升级药水 x5",
      price: 450,
      // 5个打包优惠价
      itemId: "upgrade_potion",
      count: 5,
      icon: null,
      description: "5个升级药水打包，更优惠",
      category: "consumable"
    }, {
      id: "upgrade_potion_10",
      name: "升级药水 x10",
      price: 800,
      // 10个打包优惠价
      itemId: "upgrade_potion",
      count: 10,
      icon: null,
      description: "10个升级药水打包，超值优惠",
      category: "consumable"
    }
    // 后续可以添加更多商品
    // {
    //     id: "exp_potion_1",
    //     name: "经验药水",
    //     price: 50,
    //     itemId: "exp_potion",
    //     count: 1,
    //     icon: null,
    //     description: "使用后可以获得经验值",
    //     category: "consumable"
    // }
    ];
  },
  /**
   * 根据商品ID获取商品信息
   * @param {string} shopItemId - 商城商品ID
   * @returns {Object|null} 商品信息
   */
  getItemById: function getItemById(shopItemId) {
    var items = this.getAllItems();
    return items.find(function (item) {
      return item.id === shopItemId;
    }) || null;
  },
  /**
   * 根据分类获取商品列表
   * @param {string} category - 商品分类（如 "consumable"）
   * @returns {Array} 商品列表
   */
  getItemsByCategory: function getItemsByCategory(category) {
    var items = this.getAllItems();
    return items.filter(function (item) {
      return item.category === category;
    });
  }
};
module.exports = ShopConfig;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZVxcU2hvcENvbmZpZy5qcyJdLCJuYW1lcyI6WyJTaG9wQ29uZmlnIiwiZ2V0QWxsSXRlbXMiLCJpZCIsIm5hbWUiLCJwcmljZSIsIml0ZW1JZCIsImNvdW50IiwiaWNvbiIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJnZXRJdGVtQnlJZCIsInNob3BJdGVtSWQiLCJpdGVtcyIsImZpbmQiLCJpdGVtIiwiZ2V0SXRlbXNCeUNhdGVnb3J5IiwiZmlsdGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLFVBQVUsR0FBRztFQUNiO0FBQ0o7QUFDQTtBQUNBO0VBQ0lDLFdBQVcsV0FBQUEsWUFBQSxFQUFHO0lBQ1YsT0FBTyxDQUNIO01BQ0lDLEVBQUUsRUFBRSxrQkFBa0I7TUFDdEJDLElBQUksRUFBRSxNQUFNO01BQ1pDLEtBQUssRUFBRSxHQUFHO01BQ1ZDLE1BQU0sRUFBRSxnQkFBZ0I7TUFBRTtNQUMxQkMsS0FBSyxFQUFFLENBQUM7TUFBRTtNQUNWQyxJQUFJLEVBQUUsSUFBSTtNQUFFO01BQ1pDLFdBQVcsRUFBRSxhQUFhO01BQzFCQyxRQUFRLEVBQUUsWUFBWSxDQUFDO0lBQzNCLENBQUMsRUFDRDtNQUNJUCxFQUFFLEVBQUUsa0JBQWtCO01BQ3RCQyxJQUFJLEVBQUUsU0FBUztNQUNmQyxLQUFLLEVBQUUsR0FBRztNQUFFO01BQ1pDLE1BQU0sRUFBRSxnQkFBZ0I7TUFDeEJDLEtBQUssRUFBRSxDQUFDO01BQ1JDLElBQUksRUFBRSxJQUFJO01BQ1ZDLFdBQVcsRUFBRSxjQUFjO01BQzNCQyxRQUFRLEVBQUU7SUFDZCxDQUFDLEVBQ0Q7TUFDSVAsRUFBRSxFQUFFLG1CQUFtQjtNQUN2QkMsSUFBSSxFQUFFLFVBQVU7TUFDaEJDLEtBQUssRUFBRSxHQUFHO01BQUU7TUFDWkMsTUFBTSxFQUFFLGdCQUFnQjtNQUN4QkMsS0FBSyxFQUFFLEVBQUU7TUFDVEMsSUFBSSxFQUFFLElBQUk7TUFDVkMsV0FBVyxFQUFFLGdCQUFnQjtNQUM3QkMsUUFBUSxFQUFFO0lBQ2Q7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQUEsQ0FDSDtFQUNMLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0lDLFdBQVcsV0FBQUEsWUFBQ0MsVUFBVSxFQUFFO0lBQ3BCLElBQU1DLEtBQUssR0FBRyxJQUFJLENBQUNYLFdBQVcsRUFBRTtJQUNoQyxPQUFPVyxLQUFLLENBQUNDLElBQUksQ0FBQyxVQUFBQyxJQUFJO01BQUEsT0FBSUEsSUFBSSxDQUFDWixFQUFFLEtBQUtTLFVBQVU7SUFBQSxFQUFDLElBQUksSUFBSTtFQUM3RCxDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJSSxrQkFBa0IsV0FBQUEsbUJBQUNOLFFBQVEsRUFBRTtJQUN6QixJQUFNRyxLQUFLLEdBQUcsSUFBSSxDQUFDWCxXQUFXLEVBQUU7SUFDaEMsT0FBT1csS0FBSyxDQUFDSSxNQUFNLENBQUMsVUFBQUYsSUFBSTtNQUFBLE9BQUlBLElBQUksQ0FBQ0wsUUFBUSxLQUFLQSxRQUFRO0lBQUEsRUFBQztFQUMzRDtBQUNKLENBQUM7QUFFRFEsTUFBTSxDQUFDQyxPQUFPLEdBQUdsQixVQUFVIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOWVhuWfjumFjee9rlxuICog5a6a5LmJ5omA5pyJ5Y+v6LSt5Lmw55qE5ZWG5ZOB5Y+K5YW25Lu35qC8XG4gKi9cbnZhciBTaG9wQ29uZmlnID0ge1xuICAgIC8qKlxuICAgICAqIOiOt+WPluaJgOacieWVhuWTgeWIl+ihqFxuICAgICAqIEByZXR1cm5zIHtBcnJheX0g5ZWG5ZOB5YiX6KGoIFt7IGlkLCBuYW1lLCBwcmljZSwgaXRlbUlkLCBjb3VudCwgaWNvbiwgZGVzY3JpcHRpb24gfSwgLi4uXVxuICAgICAqL1xuICAgIGdldEFsbEl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcInVwZ3JhZGVfcG90aW9uXzFcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIuWNh+e6p+iNr+awtFwiLFxuICAgICAgICAgICAgICAgIHByaWNlOiAxMDAsXG4gICAgICAgICAgICAgICAgaXRlbUlkOiBcInVwZ3JhZGVfcG90aW9uXCIsIC8vIOi0reS5sOWQjuiOt+W+l+eahOmBk+WFt0lEXG4gICAgICAgICAgICAgICAgY291bnQ6IDEsIC8vIOi0reS5sOaVsOmHj1xuICAgICAgICAgICAgICAgIGljb246IG51bGwsIC8vIOWbvuagh++8iOeUsUl0ZW1JY29uU2V0dGVy6K6+572u77yJXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi5L2/55So5ZCO5Y+v5Lul5o+Q5Y2H6KeS6Imy562J57qnXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiY29uc3VtYWJsZVwiIC8vIOa2iOiAl+WTgVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJ1cGdyYWRlX3BvdGlvbl81XCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCLljYfnuqfoja/msLQgeDVcIixcbiAgICAgICAgICAgICAgICBwcmljZTogNDUwLCAvLyA15Liq5omT5YyF5LyY5oOg5Lu3XG4gICAgICAgICAgICAgICAgaXRlbUlkOiBcInVwZ3JhZGVfcG90aW9uXCIsXG4gICAgICAgICAgICAgICAgY291bnQ6IDUsXG4gICAgICAgICAgICAgICAgaWNvbjogbnVsbCxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCI15Liq5Y2H57qn6I2v5rC05omT5YyF77yM5pu05LyY5oOgXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiY29uc3VtYWJsZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcInVwZ3JhZGVfcG90aW9uXzEwXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCLljYfnuqfoja/msLQgeDEwXCIsXG4gICAgICAgICAgICAgICAgcHJpY2U6IDgwMCwgLy8gMTDkuKrmiZPljIXkvJjmg6Dku7dcbiAgICAgICAgICAgICAgICBpdGVtSWQ6IFwidXBncmFkZV9wb3Rpb25cIixcbiAgICAgICAgICAgICAgICBjb3VudDogMTAsXG4gICAgICAgICAgICAgICAgaWNvbjogbnVsbCxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCIxMOS4quWNh+e6p+iNr+awtOaJk+WMhe+8jOi2heWAvOS8mOaDoFwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcImNvbnN1bWFibGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5ZCO57ut5Y+v5Lul5re75Yqg5pu05aSa5ZWG5ZOBXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgICAgaWQ6IFwiZXhwX3BvdGlvbl8xXCIsXG4gICAgICAgICAgICAvLyAgICAgbmFtZTogXCLnu4/pqozoja/msLRcIixcbiAgICAgICAgICAgIC8vICAgICBwcmljZTogNTAsXG4gICAgICAgICAgICAvLyAgICAgaXRlbUlkOiBcImV4cF9wb3Rpb25cIixcbiAgICAgICAgICAgIC8vICAgICBjb3VudDogMSxcbiAgICAgICAgICAgIC8vICAgICBpY29uOiBudWxsLFxuICAgICAgICAgICAgLy8gICAgIGRlc2NyaXB0aW9uOiBcIuS9v+eUqOWQjuWPr+S7peiOt+W+l+e7j+mqjOWAvFwiLFxuICAgICAgICAgICAgLy8gICAgIGNhdGVnb3J5OiBcImNvbnN1bWFibGVcIlxuICAgICAgICAgICAgLy8gfVxuICAgICAgICBdO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmoLnmja7llYblk4FJROiOt+WPluWVhuWTgeS/oeaBr1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzaG9wSXRlbUlkIC0g5ZWG5Z+O5ZWG5ZOBSURcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9IOWVhuWTgeS/oeaBr1xuICAgICAqL1xuICAgIGdldEl0ZW1CeUlkKHNob3BJdGVtSWQpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldEFsbEl0ZW1zKCk7XG4gICAgICAgIHJldHVybiBpdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gc2hvcEl0ZW1JZCkgfHwgbnVsbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5qC55o2u5YiG57G76I635Y+W5ZWG5ZOB5YiX6KGoXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNhdGVnb3J5IC0g5ZWG5ZOB5YiG57G777yI5aaCIFwiY29uc3VtYWJsZVwi77yJXG4gICAgICogQHJldHVybnMge0FycmF5fSDllYblk4HliJfooahcbiAgICAgKi9cbiAgICBnZXRJdGVtc0J5Q2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldEFsbEl0ZW1zKCk7XG4gICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNhdGVnb3J5ID09PSBjYXRlZ29yeSk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaG9wQ29uZmlnO1xuIl19