
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
 * 在编辑器中绑定道具图标资源，运行时自动设置到ItemConfig
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    // 升级药水图标
    upgradePotionIcon: {
      "default": null,
      type: cc.SpriteFrame,
      tooltip: "升级药水图标（SpriteFrame）"
    }

    // 后续可以添加更多道具图标
    // expPotionIcon: {
    //     default: null,
    //     type: cc.SpriteFrame,
    //     tooltip: "经验药水图标（SpriteFrame）"
    // }
  },
  onLoad: function onLoad() {
    var ItemConfig = require("ItemConfig");

    // 设置升级药水图标
    var upgradePotion = ItemConfig.getItemById("upgrade_potion");
    if (upgradePotion && this.upgradePotionIcon) {
      upgradePotion.icon = this.upgradePotionIcon;
      cc.log("[ItemIconSetter] ✓ 设置升级药水图标成功");
    } else if (upgradePotion && !this.upgradePotionIcon) {
      cc.warn("[ItemIconSetter] ⚠️ 升级药水图标未设置，请在编辑器中绑定");
    }

    // 后续可以添加更多道具图标的设置
    // const expPotion = ItemConfig.getItemById("exp_potion");
    // if (expPotion && this.expPotionIcon) {
    //     expPotion.icon = this.expPotionIcon;
    //     cc.log("[ItemIconSetter] ✓ 设置经验药水图标成功");
    // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxJdGVtSWNvblNldHRlci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInVwZ3JhZGVQb3Rpb25JY29uIiwidHlwZSIsIlNwcml0ZUZyYW1lIiwidG9vbHRpcCIsIm9uTG9hZCIsIkl0ZW1Db25maWciLCJyZXF1aXJlIiwidXBncmFkZVBvdGlvbiIsImdldEl0ZW1CeUlkIiwiaWNvbiIsImxvZyIsIndhcm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSO0lBQ0FDLGlCQUFpQixFQUFFO01BQ2YsV0FBUyxJQUFJO01BQ2JDLElBQUksRUFBRUwsRUFBRSxDQUFDTSxXQUFXO01BQ3BCQyxPQUFPLEVBQUU7SUFDYjs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFDSixDQUFDO0VBRURDLE1BQU0sV0FBQUEsT0FBQSxFQUFHO0lBQ0wsSUFBTUMsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBWSxDQUFDOztJQUV4QztJQUNBLElBQU1DLGFBQWEsR0FBR0YsVUFBVSxDQUFDRyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7SUFDOUQsSUFBSUQsYUFBYSxJQUFJLElBQUksQ0FBQ1AsaUJBQWlCLEVBQUU7TUFDekNPLGFBQWEsQ0FBQ0UsSUFBSSxHQUFHLElBQUksQ0FBQ1QsaUJBQWlCO01BQzNDSixFQUFFLENBQUNjLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQztJQUMzQyxDQUFDLE1BQU0sSUFBSUgsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDUCxpQkFBaUIsRUFBRTtNQUNqREosRUFBRSxDQUFDZSxJQUFJLENBQUMsd0NBQXdDLENBQUM7SUFDckQ7O0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0o7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDpgZPlhbflm77moIforr7nva7lmahcclxuICog5Zyo57yW6L6R5Zmo5Lit57uR5a6a6YGT5YW35Zu+5qCH6LWE5rqQ77yM6L+Q6KGM5pe26Ieq5Yqo6K6+572u5YiwSXRlbUNvbmZpZ1xyXG4gKi9cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyDljYfnuqfoja/msLTlm77moIdcclxuICAgICAgICB1cGdyYWRlUG90aW9uSWNvbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICAgICAgdG9vbHRpcDogXCLljYfnuqfoja/msLTlm77moIfvvIhTcHJpdGVGcmFtZe+8iVwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDlkI7nu63lj6/ku6Xmt7vliqDmm7TlpJrpgZPlhbflm77moIdcclxuICAgICAgICAvLyBleHBQb3Rpb25JY29uOiB7XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIC8vICAgICB0b29sdGlwOiBcIue7j+mqjOiNr+awtOWbvuagh++8iFNwcml0ZUZyYW1l77yJXCJcclxuICAgICAgICAvLyB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjb25zdCBJdGVtQ29uZmlnID0gcmVxdWlyZShcIkl0ZW1Db25maWdcIik7XHJcblxyXG4gICAgICAgIC8vIOiuvue9ruWNh+e6p+iNr+awtOWbvuagh1xyXG4gICAgICAgIGNvbnN0IHVwZ3JhZGVQb3Rpb24gPSBJdGVtQ29uZmlnLmdldEl0ZW1CeUlkKFwidXBncmFkZV9wb3Rpb25cIik7XHJcbiAgICAgICAgaWYgKHVwZ3JhZGVQb3Rpb24gJiYgdGhpcy51cGdyYWRlUG90aW9uSWNvbikge1xyXG4gICAgICAgICAgICB1cGdyYWRlUG90aW9uLmljb24gPSB0aGlzLnVwZ3JhZGVQb3Rpb25JY29uO1xyXG4gICAgICAgICAgICBjYy5sb2coXCJbSXRlbUljb25TZXR0ZXJdIOKckyDorr7nva7ljYfnuqfoja/msLTlm77moIfmiJDlip9cIik7XHJcbiAgICAgICAgfSBlbHNlIGlmICh1cGdyYWRlUG90aW9uICYmICF0aGlzLnVwZ3JhZGVQb3Rpb25JY29uKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCJbSXRlbUljb25TZXR0ZXJdIOKaoO+4jyDljYfnuqfoja/msLTlm77moIfmnKrorr7nva7vvIzor7flnKjnvJbovpHlmajkuK3nu5HlrppcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDlkI7nu63lj6/ku6Xmt7vliqDmm7TlpJrpgZPlhbflm77moIfnmoTorr7nva5cclxuICAgICAgICAvLyBjb25zdCBleHBQb3Rpb24gPSBJdGVtQ29uZmlnLmdldEl0ZW1CeUlkKFwiZXhwX3BvdGlvblwiKTtcclxuICAgICAgICAvLyBpZiAoZXhwUG90aW9uICYmIHRoaXMuZXhwUG90aW9uSWNvbikge1xyXG4gICAgICAgIC8vICAgICBleHBQb3Rpb24uaWNvbiA9IHRoaXMuZXhwUG90aW9uSWNvbjtcclxuICAgICAgICAvLyAgICAgY2MubG9nKFwiW0l0ZW1JY29uU2V0dGVyXSDinJMg6K6+572u57uP6aqM6I2v5rC05Zu+5qCH5oiQ5YqfXCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==