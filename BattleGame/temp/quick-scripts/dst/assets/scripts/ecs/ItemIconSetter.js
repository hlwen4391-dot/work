
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ecs/ItemIconSetter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '87faaF6VwpACo+QYJbnpmAo', 'ItemIconSetter');
// Scripts/ecs/ItemIconSetter.js

"use strict";

/**
 * 道具图标设置器
 * 在编辑器中按「ItemConfig.items 的顺序」绑定图标数组，运行时自动写入 ItemConfig，
 * 使每个道具拥有不同图标（道具栏、商城等会从 ItemConfig 读取 icon 显示）。
 *
 * 使用方式：
 * 1. 将本组件挂在场景中（如 Canvas 下）;
 * 2. 在属性检查器中展开 itemIcons 数组，长度与 ItemConfig.items 一致;
 * 3. 按顺序拖入 SpriteFrame：第 0 个=升级药水，第 1 个=火球术卷轴，第 2 个=兽化狂暴卷轴，第 3 个=治疗术卷轴 ……
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    /**
     * 道具图标数组，与 ItemConfig.items 顺序一一对应
     * 第 i 个元素对应 ItemConfig.items[i] 的图标
     */
    itemIcons: {
      "default": [],
      type: [cc.SpriteFrame],
      tooltip: "按 ItemConfig 中道具顺序：升级药水、火球术卷轴、兽化狂暴卷轴、治疗术卷轴……"
    }
  },
  onLoad: function onLoad() {
    var ItemConfig = require("ItemConfig");
    var items = ItemConfig.getAllItems();
    var setCount = 0;
    for (var i = 0; i < items.length; i++) {
      if (this.itemIcons && this.itemIcons[i]) {
        items[i].icon = this.itemIcons[i];
        setCount++;
        cc.log("[ItemIconSetter] \u2713 " + items[i].name + " (" + items[i].id + ") \u56FE\u6807\u5DF2\u8BBE\u7F6E");
      } else if (items[i].icon == null) {
        cc.warn("[ItemIconSetter] \u26A0\uFE0F \u7B2C " + (i + 1) + " \u4E2A\u9053\u5177\u300C" + items[i].name + "\u300D\u672A\u7ED1\u5B9A\u56FE\u6807\uFF0C\u8BF7\u5728 itemIcons[" + i + "] \u4E2D\u62D6\u5165 SpriteFrame");
      }
    }
    if (setCount > 0) {
      cc.log("[ItemIconSetter] \u5171\u8BBE\u7F6E " + setCount + "/" + items.length + " \u4E2A\u9053\u5177\u56FE\u6807");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxJdGVtSWNvblNldHRlci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIml0ZW1JY29ucyIsInR5cGUiLCJTcHJpdGVGcmFtZSIsInRvb2x0aXAiLCJvbkxvYWQiLCJJdGVtQ29uZmlnIiwicmVxdWlyZSIsIml0ZW1zIiwiZ2V0QWxsSXRlbXMiLCJzZXRDb3VudCIsImkiLCJsZW5ndGgiLCJpY29uIiwibG9nIiwibmFtZSIsImlkIiwid2FybiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1I7QUFDUjtBQUNBO0FBQ0E7SUFDUUMsU0FBUyxFQUFFO01BQ1AsV0FBUyxFQUFFO01BQ1hDLElBQUksRUFBRSxDQUFDTCxFQUFFLENBQUNNLFdBQVcsQ0FBQztNQUN0QkMsT0FBTyxFQUFFO0lBQ2I7RUFDSixDQUFDO0VBRURDLE1BQU0sV0FBQUEsT0FBQSxFQUFHO0lBQ0wsSUFBTUMsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBWSxDQUFDO0lBQ3hDLElBQU1DLEtBQUssR0FBR0YsVUFBVSxDQUFDRyxXQUFXLEVBQUU7SUFDdEMsSUFBSUMsUUFBUSxHQUFHLENBQUM7SUFFaEIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdILEtBQUssQ0FBQ0ksTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUNuQyxJQUFJLElBQUksQ0FBQ1YsU0FBUyxJQUFJLElBQUksQ0FBQ0EsU0FBUyxDQUFDVSxDQUFDLENBQUMsRUFBRTtRQUNyQ0gsS0FBSyxDQUFDRyxDQUFDLENBQUMsQ0FBQ0UsSUFBSSxHQUFHLElBQUksQ0FBQ1osU0FBUyxDQUFDVSxDQUFDLENBQUM7UUFDakNELFFBQVEsRUFBRTtRQUNWYixFQUFFLENBQUNpQixHQUFHLDhCQUF1Qk4sS0FBSyxDQUFDRyxDQUFDLENBQUMsQ0FBQ0ksSUFBSSxVQUFLUCxLQUFLLENBQUNHLENBQUMsQ0FBQyxDQUFDSyxFQUFFLHNDQUFVO01BQ3hFLENBQUMsTUFBTSxJQUFJUixLQUFLLENBQUNHLENBQUMsQ0FBQyxDQUFDRSxJQUFJLElBQUksSUFBSSxFQUFFO1FBQzlCaEIsRUFBRSxDQUFDb0IsSUFBSSw0Q0FBMEJOLENBQUMsR0FBRyxDQUFDLGtDQUFRSCxLQUFLLENBQUNHLENBQUMsQ0FBQyxDQUFDSSxJQUFJLHlFQUF1QkosQ0FBQyxzQ0FBb0I7TUFDM0c7SUFDSjtJQUVBLElBQUlELFFBQVEsR0FBRyxDQUFDLEVBQUU7TUFDZGIsRUFBRSxDQUFDaUIsR0FBRywwQ0FBeUJKLFFBQVEsU0FBSUYsS0FBSyxDQUFDSSxNQUFNLHFDQUFTO0lBQ3BFO0VBQ0o7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDpgZPlhbflm77moIforr7nva7lmahcclxuICog5Zyo57yW6L6R5Zmo5Lit5oyJ44CMSXRlbUNvbmZpZy5pdGVtcyDnmoTpobrluo/jgI3nu5Hlrprlm77moIfmlbDnu4TvvIzov5DooYzml7boh6rliqjlhpnlhaUgSXRlbUNvbmZpZ++8jFxyXG4gKiDkvb/mr4/kuKrpgZPlhbfmi6XmnInkuI3lkIzlm77moIfvvIjpgZPlhbfmoI/jgIHllYbln47nrYnkvJrku44gSXRlbUNvbmZpZyDor7vlj5YgaWNvbiDmmL7npLrvvInjgIJcclxuICpcclxuICog5L2/55So5pa55byP77yaXHJcbiAqIDEuIOWwhuacrOe7hOS7tuaMguWcqOWcuuaZr+S4re+8iOWmgiBDYW52YXMg5LiL77yJO1xyXG4gKiAyLiDlnKjlsZ7mgKfmo4Dmn6XlmajkuK3lsZXlvIAgaXRlbUljb25zIOaVsOe7hO+8jOmVv+W6puS4jiBJdGVtQ29uZmlnLml0ZW1zIOS4gOiHtDtcclxuICogMy4g5oyJ6aG65bqP5ouW5YWlIFNwcml0ZUZyYW1l77ya56ysIDAg5LiqPeWNh+e6p+iNr+awtO+8jOesrCAxIOS4qj3ngavnkIPmnK/ljbfovbTvvIznrKwgMiDkuKo95YW95YyW54uC5pq05Y236L2077yM56ysIDMg5LiqPeayu+eWl+acr+WNt+i9tCDigKbigKZcclxuICovXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6YGT5YW35Zu+5qCH5pWw57uE77yM5LiOIEl0ZW1Db25maWcuaXRlbXMg6aG65bqP5LiA5LiA5a+55bqUXHJcbiAgICAgICAgICog56ysIGkg5Liq5YWD57Sg5a+55bqUIEl0ZW1Db25maWcuaXRlbXNbaV0g55qE5Zu+5qCHXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaXRlbUljb25zOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBbY2MuU3ByaXRlRnJhbWVdLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIuaMiSBJdGVtQ29uZmlnIOS4remBk+WFt+mhuuW6j++8muWNh+e6p+iNr+awtOOAgeeBq+eQg+acr+WNt+i9tOOAgeWFveWMlueLguaatOWNt+i9tOOAgeayu+eWl+acr+WNt+i9tOKApuKAplwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY29uc3QgSXRlbUNvbmZpZyA9IHJlcXVpcmUoXCJJdGVtQ29uZmlnXCIpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gSXRlbUNvbmZpZy5nZXRBbGxJdGVtcygpO1xyXG4gICAgICAgIGxldCBzZXRDb3VudCA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbUljb25zICYmIHRoaXMuaXRlbUljb25zW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtc1tpXS5pY29uID0gdGhpcy5pdGVtSWNvbnNbaV07XHJcbiAgICAgICAgICAgICAgICBzZXRDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKGBbSXRlbUljb25TZXR0ZXJdIOKckyAke2l0ZW1zW2ldLm5hbWV9ICgke2l0ZW1zW2ldLmlkfSkg5Zu+5qCH5bey6K6+572uYCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbXNbaV0uaWNvbiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjYy53YXJuKGBbSXRlbUljb25TZXR0ZXJdIOKaoO+4jyDnrKwgJHtpICsgMX0g5Liq6YGT5YW344CMJHtpdGVtc1tpXS5uYW1lfeOAjeacque7keWumuWbvuagh++8jOivt+WcqCBpdGVtSWNvbnNbJHtpfV0g5Lit5ouW5YWlIFNwcml0ZUZyYW1lYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXRDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgY2MubG9nKGBbSXRlbUljb25TZXR0ZXJdIOWFseiuvue9riAke3NldENvdW50fS8ke2l0ZW1zLmxlbmd0aH0g5Liq6YGT5YW35Zu+5qCHYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19