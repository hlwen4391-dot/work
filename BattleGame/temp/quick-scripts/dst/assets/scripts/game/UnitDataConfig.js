
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/game/UnitDataConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3a6d6Z8U7ZOB6SuT9HA0YKr', 'UnitDataConfig');
// Scripts/game/UnitDataConfig.js

"use strict";

/**
 * 单位数据配置
 * 定义所有可选择的英雄和怪物数据
 */
var _require = require("SkillConfig"),
  SkillConfig = _require.SkillConfig;
var UnitDataConfig = {
  // 英雄列表（按照固定顺序排列）
  heros: [{
    name: "战士",
    displayName: "战士",
    icon: null,
    // 头像图片资源（SpriteFrame，需要在编辑器中设置）
    prefab: null,
    // 人物原型Prefab（需要在编辑器中设置）
    avatarPosition: 0,
    // 头像固定位置索引（0 = 第一个位置）
    hp: 120,
    attack: 18,
    defense: 1,
    speed: 2,
    // 提高速度以加快战斗节奏（原12）
    crit: 0,
    skills: [SkillConfig.normalAttack, SkillConfig.stunSkill, SkillConfig.shieldAllies]
  }, {
    name: "法师",
    displayName: "法师",
    icon: null,
    // 头像图片资源（SpriteFrame，需要在编辑器中设置）
    prefab: null,
    // 人物原型Prefab（需要在编辑器中设置）
    avatarPosition: 1,
    // 头像固定位置索引（1 = 第二个位置）
    hp: 100,
    attack: 12,
    defense: 1,
    speed: 3,
    // 提高速度以加快战斗节奏（原8）
    crit: 0,
    miss: 0,
    skills: [SkillConfig.normalAttack, SkillConfig.fireball]
  }, {
    name: "修女",
    displayName: "修女",
    icon: null,
    // 头像图片资源（SpriteFrame，需要在编辑器中设置）
    prefab: null,
    // 人物原型Prefab（需要在编辑器中设置）
    avatarPosition: 2,
    // 头像固定位置索引（2 = 第三个位置）
    hp: 120,
    attack: 20,
    defense: 1,
    speed: 1,
    // 提高速度以加快战斗节奏（原10）
    crit: 0,
    miss: 0,
    skills: [SkillConfig.normalAttack, SkillConfig.healAllies]
  }],
  // 怪物列表（按照固定顺序排列）
  monsters: [{
    name: "怪物",
    displayName: "怪物",
    icon: null,
    // 头像图片资源（SpriteFrame，需要在编辑器中设置）
    prefab: null,
    // 人物原型Prefab（需要在编辑器中设置）
    avatarPosition: 0,
    // 头像固定位置索引（0 = 第一个位置）
    hp: 130,
    attack: 12,
    defense: 1,
    speed: 1,
    // 提高速度以加快战斗节奏（原15）
    skills: [SkillConfig.normalAttack, SkillConfig.beastRage]
  }, {
    name: "Boss",
    displayName: "Boss",
    icon: null,
    // 头像图片资源（SpriteFrame，需要在编辑器中设置）
    prefab: null,
    // 人物原型Prefab（需要在编辑器中设置）
    avatarPosition: 1,
    // 头像固定位置索引（1 = 第二个位置）
    hp: 150,
    attack: 20,
    defense: 1,
    speed: 1,
    // 提高速度以加快战斗节奏（原10）
    skills: [SkillConfig.normalAttack, SkillConfig.warCry]
  }, {
    name: "大祭司",
    displayName: "大祭司",
    icon: null,
    prefab: null,
    avatarPosition: 2,
    hp: 110,
    attack: 19,
    defense: 1,
    speed: 2,
    // 提高速度以加快战斗节奏（原10）
    skills: [SkillConfig.normalAttack, SkillConfig.cleanseAllies]
  }]
};
module.exports = UnitDataConfig;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZVxcVW5pdERhdGFDb25maWcuanMiXSwibmFtZXMiOlsiX3JlcXVpcmUiLCJyZXF1aXJlIiwiU2tpbGxDb25maWciLCJVbml0RGF0YUNvbmZpZyIsImhlcm9zIiwibmFtZSIsImRpc3BsYXlOYW1lIiwiaWNvbiIsInByZWZhYiIsImF2YXRhclBvc2l0aW9uIiwiaHAiLCJhdHRhY2siLCJkZWZlbnNlIiwic3BlZWQiLCJjcml0Iiwic2tpbGxzIiwibm9ybWFsQXR0YWNrIiwic3R1blNraWxsIiwic2hpZWxkQWxsaWVzIiwibWlzcyIsImZpcmViYWxsIiwiaGVhbEFsbGllcyIsIm1vbnN0ZXJzIiwiYmVhc3RSYWdlIiwid2FyQ3J5IiwiY2xlYW5zZUFsbGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFBQSxRQUFBLEdBQXdCQyxPQUFPLENBQUMsYUFBYSxDQUFDO0VBQXRDQyxXQUFXLEdBQUFGLFFBQUEsQ0FBWEUsV0FBVztBQUVuQixJQUFJQyxjQUFjLEdBQUc7RUFDakI7RUFDQUMsS0FBSyxFQUFFLENBQ0g7SUFDSUMsSUFBSSxFQUFFLElBQUk7SUFDVkMsV0FBVyxFQUFFLElBQUk7SUFDakJDLElBQUksRUFBRSxJQUFJO0lBQUU7SUFDWkMsTUFBTSxFQUFFLElBQUk7SUFBRTtJQUNkQyxjQUFjLEVBQUUsQ0FBQztJQUFFO0lBQ25CQyxFQUFFLEVBQUUsR0FBRztJQUNQQyxNQUFNLEVBQUUsRUFBRTtJQUNWQyxPQUFPLEVBQUUsQ0FBQztJQUNWQyxLQUFLLEVBQUUsQ0FBQztJQUFHO0lBQ1hDLElBQUksRUFBRSxDQUFDO0lBQ1BDLE1BQU0sRUFBRSxDQUNKYixXQUFXLENBQUNjLFlBQVksRUFDeEJkLFdBQVcsQ0FBQ2UsU0FBUyxFQUNyQmYsV0FBVyxDQUFDZ0IsWUFBWTtFQUVoQyxDQUFDLEVBQ0Q7SUFDSWIsSUFBSSxFQUFFLElBQUk7SUFDVkMsV0FBVyxFQUFFLElBQUk7SUFDakJDLElBQUksRUFBRSxJQUFJO0lBQUU7SUFDWkMsTUFBTSxFQUFFLElBQUk7SUFBRTtJQUNkQyxjQUFjLEVBQUUsQ0FBQztJQUFFO0lBQ25CQyxFQUFFLEVBQUUsR0FBRztJQUNQQyxNQUFNLEVBQUUsRUFBRTtJQUNWQyxPQUFPLEVBQUUsQ0FBQztJQUNWQyxLQUFLLEVBQUUsQ0FBQztJQUFHO0lBQ1hDLElBQUksRUFBRSxDQUFDO0lBQ1BLLElBQUksRUFBRSxDQUFDO0lBQ1BKLE1BQU0sRUFBRSxDQUNKYixXQUFXLENBQUNjLFlBQVksRUFDeEJkLFdBQVcsQ0FBQ2tCLFFBQVE7RUFFNUIsQ0FBQyxFQUNEO0lBQ0lmLElBQUksRUFBRSxJQUFJO0lBQ1ZDLFdBQVcsRUFBRSxJQUFJO0lBQ2pCQyxJQUFJLEVBQUUsSUFBSTtJQUFFO0lBQ1pDLE1BQU0sRUFBRSxJQUFJO0lBQUU7SUFDZEMsY0FBYyxFQUFFLENBQUM7SUFBRTtJQUNuQkMsRUFBRSxFQUFFLEdBQUc7SUFDUEMsTUFBTSxFQUFFLEVBQUU7SUFDVkMsT0FBTyxFQUFFLENBQUM7SUFDVkMsS0FBSyxFQUFFLENBQUM7SUFBRztJQUNYQyxJQUFJLEVBQUUsQ0FBQztJQUNQSyxJQUFJLEVBQUUsQ0FBQztJQUNQSixNQUFNLEVBQUUsQ0FDSmIsV0FBVyxDQUFDYyxZQUFZLEVBQ3hCZCxXQUFXLENBQUNtQixVQUFVO0VBRTlCLENBQUMsQ0FDSjtFQUVEO0VBQ0FDLFFBQVEsRUFBRSxDQUNOO0lBQ0lqQixJQUFJLEVBQUUsSUFBSTtJQUNWQyxXQUFXLEVBQUUsSUFBSTtJQUNqQkMsSUFBSSxFQUFFLElBQUk7SUFBRTtJQUNaQyxNQUFNLEVBQUUsSUFBSTtJQUFFO0lBQ2RDLGNBQWMsRUFBRSxDQUFDO0lBQUU7SUFDbkJDLEVBQUUsRUFBRSxHQUFHO0lBQ1BDLE1BQU0sRUFBRSxFQUFFO0lBQ1ZDLE9BQU8sRUFBRSxDQUFDO0lBQ1ZDLEtBQUssRUFBRSxDQUFDO0lBQUc7SUFDWEUsTUFBTSxFQUFFLENBQ0piLFdBQVcsQ0FBQ2MsWUFBWSxFQUN4QmQsV0FBVyxDQUFDcUIsU0FBUztFQUU3QixDQUFDLEVBQ0Q7SUFDSWxCLElBQUksRUFBRSxNQUFNO0lBQ1pDLFdBQVcsRUFBRSxNQUFNO0lBQ25CQyxJQUFJLEVBQUUsSUFBSTtJQUFFO0lBQ1pDLE1BQU0sRUFBRSxJQUFJO0lBQUU7SUFDZEMsY0FBYyxFQUFFLENBQUM7SUFBRTtJQUNuQkMsRUFBRSxFQUFFLEdBQUc7SUFDUEMsTUFBTSxFQUFFLEVBQUU7SUFDVkMsT0FBTyxFQUFFLENBQUM7SUFDVkMsS0FBSyxFQUFFLENBQUM7SUFBRztJQUNYRSxNQUFNLEVBQUUsQ0FDSmIsV0FBVyxDQUFDYyxZQUFZLEVBQ3hCZCxXQUFXLENBQUNzQixNQUFNO0VBRTFCLENBQUMsRUFDRDtJQUNJbkIsSUFBSSxFQUFFLEtBQUs7SUFDWEMsV0FBVyxFQUFFLEtBQUs7SUFDbEJDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLE1BQU0sRUFBRSxJQUFJO0lBQ1pDLGNBQWMsRUFBRSxDQUFDO0lBQ2pCQyxFQUFFLEVBQUUsR0FBRztJQUNQQyxNQUFNLEVBQUUsRUFBRTtJQUNWQyxPQUFPLEVBQUUsQ0FBQztJQUNWQyxLQUFLLEVBQUUsQ0FBQztJQUFHO0lBQ1hFLE1BQU0sRUFBRSxDQUNKYixXQUFXLENBQUNjLFlBQVksRUFDeEJkLFdBQVcsQ0FBQ3VCLGFBQWE7RUFFakMsQ0FBQztBQUdULENBQUM7QUFFREMsTUFBTSxDQUFDQyxPQUFPLEdBQUd4QixjQUFjIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5Y2V5L2N5pWw5o2u6YWN572uXHJcbiAqIOWumuS5ieaJgOacieWPr+mAieaLqeeahOiLsembhOWSjOaAqueJqeaVsOaNrlxyXG4gKi9cclxuY29uc3QgeyBTa2lsbENvbmZpZyB9ID0gcmVxdWlyZShcIlNraWxsQ29uZmlnXCIpO1xyXG5cclxudmFyIFVuaXREYXRhQ29uZmlnID0ge1xyXG4gICAgLy8g6Iux6ZuE5YiX6KGo77yI5oyJ54Wn5Zu65a6a6aG65bqP5o6S5YiX77yJXHJcbiAgICBoZXJvczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCLmiJjlo6tcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwi5oiY5aOrXCIsXHJcbiAgICAgICAgICAgIGljb246IG51bGwsIC8vIOWktOWDj+WbvueJh+i1hOa6kO+8iFNwcml0ZUZyYW1l77yM6ZyA6KaB5Zyo57yW6L6R5Zmo5Lit6K6+572u77yJXHJcbiAgICAgICAgICAgIHByZWZhYjogbnVsbCwgLy8g5Lq654mp5Y6f5Z6LUHJlZmFi77yI6ZyA6KaB5Zyo57yW6L6R5Zmo5Lit6K6+572u77yJXHJcbiAgICAgICAgICAgIGF2YXRhclBvc2l0aW9uOiAwLCAvLyDlpLTlg4/lm7rlrprkvY3nva7ntKLlvJXvvIgwID0g56ys5LiA5Liq5L2N572u77yJXHJcbiAgICAgICAgICAgIGhwOiAxMjAsXHJcbiAgICAgICAgICAgIGF0dGFjazogMTgsXHJcbiAgICAgICAgICAgIGRlZmVuc2U6IDEsXHJcbiAgICAgICAgICAgIHNwZWVkOiAyLCAgLy8g5o+Q6auY6YCf5bqm5Lul5Yqg5b+r5oiY5paX6IqC5aWP77yI5Y6fMTLvvIlcclxuICAgICAgICAgICAgY3JpdDogMCxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICBTa2lsbENvbmZpZy5ub3JtYWxBdHRhY2ssXHJcbiAgICAgICAgICAgICAgICBTa2lsbENvbmZpZy5zdHVuU2tpbGwsXHJcbiAgICAgICAgICAgICAgICBTa2lsbENvbmZpZy5zaGllbGRBbGxpZXNcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIuazleW4iFwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCLms5XluIhcIixcclxuICAgICAgICAgICAgaWNvbjogbnVsbCwgLy8g5aS05YOP5Zu+54mH6LWE5rqQ77yIU3ByaXRlRnJhbWXvvIzpnIDopoHlnKjnvJbovpHlmajkuK3orr7nva7vvIlcclxuICAgICAgICAgICAgcHJlZmFiOiBudWxsLCAvLyDkurrnianljp/lnotQcmVmYWLvvIjpnIDopoHlnKjnvJbovpHlmajkuK3orr7nva7vvIlcclxuICAgICAgICAgICAgYXZhdGFyUG9zaXRpb246IDEsIC8vIOWktOWDj+WbuuWumuS9jee9rue0ouW8le+8iDEgPSDnrKzkuozkuKrkvY3nva7vvIlcclxuICAgICAgICAgICAgaHA6IDEwMCxcclxuICAgICAgICAgICAgYXR0YWNrOiAxMixcclxuICAgICAgICAgICAgZGVmZW5zZTogMSxcclxuICAgICAgICAgICAgc3BlZWQ6IDMsICAvLyDmj5Dpq5jpgJ/luqbku6XliqDlv6vmiJjmlpfoioLlpY/vvIjljp8477yJXHJcbiAgICAgICAgICAgIGNyaXQ6IDAsXHJcbiAgICAgICAgICAgIG1pc3M6IDAsXHJcbiAgICAgICAgICAgIHNraWxsczogW1xyXG4gICAgICAgICAgICAgICAgU2tpbGxDb25maWcubm9ybWFsQXR0YWNrLFxyXG4gICAgICAgICAgICAgICAgU2tpbGxDb25maWcuZmlyZWJhbGxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIuS/ruWls1wiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCLkv67lpbNcIixcclxuICAgICAgICAgICAgaWNvbjogbnVsbCwgLy8g5aS05YOP5Zu+54mH6LWE5rqQ77yIU3ByaXRlRnJhbWXvvIzpnIDopoHlnKjnvJbovpHlmajkuK3orr7nva7vvIlcclxuICAgICAgICAgICAgcHJlZmFiOiBudWxsLCAvLyDkurrnianljp/lnotQcmVmYWLvvIjpnIDopoHlnKjnvJbovpHlmajkuK3orr7nva7vvIlcclxuICAgICAgICAgICAgYXZhdGFyUG9zaXRpb246IDIsIC8vIOWktOWDj+WbuuWumuS9jee9rue0ouW8le+8iDIgPSDnrKzkuInkuKrkvY3nva7vvIlcclxuICAgICAgICAgICAgaHA6IDEyMCxcclxuICAgICAgICAgICAgYXR0YWNrOiAyMCxcclxuICAgICAgICAgICAgZGVmZW5zZTogMSxcclxuICAgICAgICAgICAgc3BlZWQ6IDEsICAvLyDmj5Dpq5jpgJ/luqbku6XliqDlv6vmiJjmlpfoioLlpY/vvIjljp8xMO+8iVxyXG4gICAgICAgICAgICBjcml0OiAwLFxyXG4gICAgICAgICAgICBtaXNzOiAwLFxyXG4gICAgICAgICAgICBza2lsbHM6IFtcclxuICAgICAgICAgICAgICAgIFNraWxsQ29uZmlnLm5vcm1hbEF0dGFjayxcclxuICAgICAgICAgICAgICAgIFNraWxsQ29uZmlnLmhlYWxBbGxpZXNcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcblxyXG4gICAgLy8g5oCq54mp5YiX6KGo77yI5oyJ54Wn5Zu65a6a6aG65bqP5o6S5YiX77yJXHJcbiAgICBtb25zdGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCLmgKrnialcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwi5oCq54mpXCIsXHJcbiAgICAgICAgICAgIGljb246IG51bGwsIC8vIOWktOWDj+WbvueJh+i1hOa6kO+8iFNwcml0ZUZyYW1l77yM6ZyA6KaB5Zyo57yW6L6R5Zmo5Lit6K6+572u77yJXHJcbiAgICAgICAgICAgIHByZWZhYjogbnVsbCwgLy8g5Lq654mp5Y6f5Z6LUHJlZmFi77yI6ZyA6KaB5Zyo57yW6L6R5Zmo5Lit6K6+572u77yJXHJcbiAgICAgICAgICAgIGF2YXRhclBvc2l0aW9uOiAwLCAvLyDlpLTlg4/lm7rlrprkvY3nva7ntKLlvJXvvIgwID0g56ys5LiA5Liq5L2N572u77yJXHJcbiAgICAgICAgICAgIGhwOiAxMzAsXHJcbiAgICAgICAgICAgIGF0dGFjazogMTIsXHJcbiAgICAgICAgICAgIGRlZmVuc2U6IDEsXHJcbiAgICAgICAgICAgIHNwZWVkOiAxLCAgLy8g5o+Q6auY6YCf5bqm5Lul5Yqg5b+r5oiY5paX6IqC5aWP77yI5Y6fMTXvvIlcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICBTa2lsbENvbmZpZy5ub3JtYWxBdHRhY2ssXHJcbiAgICAgICAgICAgICAgICBTa2lsbENvbmZpZy5iZWFzdFJhZ2VcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkJvc3NcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiQm9zc1wiLFxyXG4gICAgICAgICAgICBpY29uOiBudWxsLCAvLyDlpLTlg4/lm77niYfotYTmupDvvIhTcHJpdGVGcmFtZe+8jOmcgOimgeWcqOe8lui+keWZqOS4reiuvue9ru+8iVxyXG4gICAgICAgICAgICBwcmVmYWI6IG51bGwsIC8vIOS6uueJqeWOn+Wei1ByZWZhYu+8iOmcgOimgeWcqOe8lui+keWZqOS4reiuvue9ru+8iVxyXG4gICAgICAgICAgICBhdmF0YXJQb3NpdGlvbjogMSwgLy8g5aS05YOP5Zu65a6a5L2N572u57Si5byV77yIMSA9IOesrOS6jOS4quS9jee9ru+8iVxyXG4gICAgICAgICAgICBocDogMTUwLFxyXG4gICAgICAgICAgICBhdHRhY2s6IDIwLFxyXG4gICAgICAgICAgICBkZWZlbnNlOiAxLFxyXG4gICAgICAgICAgICBzcGVlZDogMSwgIC8vIOaPkOmrmOmAn+W6puS7peWKoOW/q+aImOaWl+iKguWlj++8iOWOnzEw77yJXHJcbiAgICAgICAgICAgIHNraWxsczogW1xyXG4gICAgICAgICAgICAgICAgU2tpbGxDb25maWcubm9ybWFsQXR0YWNrLFxyXG4gICAgICAgICAgICAgICAgU2tpbGxDb25maWcud2FyQ3J5XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCLlpKfnpa3lj7hcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwi5aSn56Wt5Y+4XCIsXHJcbiAgICAgICAgICAgIGljb246IG51bGwsXHJcbiAgICAgICAgICAgIHByZWZhYjogbnVsbCxcclxuICAgICAgICAgICAgYXZhdGFyUG9zaXRpb246IDIsXHJcbiAgICAgICAgICAgIGhwOiAxMTAsXHJcbiAgICAgICAgICAgIGF0dGFjazogMTksXHJcbiAgICAgICAgICAgIGRlZmVuc2U6IDEsXHJcbiAgICAgICAgICAgIHNwZWVkOiAyLCAgLy8g5o+Q6auY6YCf5bqm5Lul5Yqg5b+r5oiY5paX6IqC5aWP77yI5Y6fMTDvvIlcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICBTa2lsbENvbmZpZy5ub3JtYWxBdHRhY2ssXHJcbiAgICAgICAgICAgICAgICBTa2lsbENvbmZpZy5jbGVhbnNlQWxsaWVzXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcblxyXG4gICAgXVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBVbml0RGF0YUNvbmZpZztcclxuXHJcbiJdfQ==