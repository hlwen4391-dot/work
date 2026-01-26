
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ecs/RageBar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '33608xI9oJLkbpchRcQstg1', 'RageBar');
// Scripts/ecs/RageBar.js

"use strict";

/**
 * 怒气条组件
 * 负责显示单位的怒气值
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    // ProgressBar方式（推荐）
    rageProgress: {
      "default": null,
      type: cc.ProgressBar,
      tooltip: "怒气条进度条组件(如果使用ProgressBar)"
    },
    // Sprite填充方式（备用）
    rageFill: {
      "default": null,
      type: cc.Sprite,
      tooltip: "怒气条填充精灵(如果不使用ProgressBar)"
    }
  },
  onLoad: function onLoad() {
    // 如果使用Sprite方式，保存原始宽度
    if (this.rageFill) {
      this._originalWidth = this.rageFill.node.width;
      // 初始化怒气条为空（宽度为0）
      this.rageFill.node.width = 0;
    }

    // 如果使用ProgressBar方式，初始化进度为0
    if (this.rageProgress) {
      this.rageProgress.progress = 0;
    }
  },
  /**
   * 更新怒气条显示
   * @param {number} rage - 当前怒气值（不超过maxRage）
   * @param {number} maxRage - 最大怒气值
   */
  updateRage: function updateRage(rage, maxRage) {
    if (maxRage <= 0) return;

    // 计算百分比，限制在0-100%之间
    var percent = Math.max(0, Math.min(1, rage / maxRage));

    // 优先使用ProgressBar
    if (this.rageProgress) {
      this.rageProgress.progress = percent;
    }
    // 否则使用Sprite宽度方式
    else if (this.rageFill) {
      // Sprite方式：宽度最大不超过原始宽度（100%）
      this.rageFill.node.width = this._originalWidth * percent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxSYWdlQmFyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicmFnZVByb2dyZXNzIiwidHlwZSIsIlByb2dyZXNzQmFyIiwidG9vbHRpcCIsInJhZ2VGaWxsIiwiU3ByaXRlIiwib25Mb2FkIiwiX29yaWdpbmFsV2lkdGgiLCJub2RlIiwid2lkdGgiLCJwcm9ncmVzcyIsInVwZGF0ZVJhZ2UiLCJyYWdlIiwibWF4UmFnZSIsInBlcmNlbnQiLCJNYXRoIiwibWF4IiwibWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUjtJQUNBQyxZQUFZLEVBQUU7TUFDVixXQUFTLElBQUk7TUFDYkMsSUFBSSxFQUFFTCxFQUFFLENBQUNNLFdBQVc7TUFDcEJDLE9BQU8sRUFBRTtJQUNiLENBQUM7SUFFRDtJQUNBQyxRQUFRLEVBQUU7TUFDTixXQUFTLElBQUk7TUFDYkgsSUFBSSxFQUFFTCxFQUFFLENBQUNTLE1BQU07TUFDZkYsT0FBTyxFQUFFO0lBQ2I7RUFDSixDQUFDO0VBRURHLE1BQU0sV0FBQUEsT0FBQSxFQUFHO0lBQ0w7SUFDQSxJQUFJLElBQUksQ0FBQ0YsUUFBUSxFQUFFO01BQ2YsSUFBSSxDQUFDRyxjQUFjLEdBQUcsSUFBSSxDQUFDSCxRQUFRLENBQUNJLElBQUksQ0FBQ0MsS0FBSztNQUM5QztNQUNBLElBQUksQ0FBQ0wsUUFBUSxDQUFDSSxJQUFJLENBQUNDLEtBQUssR0FBRyxDQUFDO0lBQ2hDOztJQUVBO0lBQ0EsSUFBSSxJQUFJLENBQUNULFlBQVksRUFBRTtNQUNuQixJQUFJLENBQUNBLFlBQVksQ0FBQ1UsUUFBUSxHQUFHLENBQUM7SUFDbEM7RUFDSixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJQyxVQUFVLFdBQUFBLFdBQUNDLElBQUksRUFBRUMsT0FBTyxFQUFFO0lBQ3RCLElBQUlBLE9BQU8sSUFBSSxDQUFDLEVBQUU7O0lBRWxCO0lBQ0EsSUFBTUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLEVBQUVELElBQUksQ0FBQ0UsR0FBRyxDQUFDLENBQUMsRUFBRUwsSUFBSSxHQUFHQyxPQUFPLENBQUMsQ0FBQzs7SUFFeEQ7SUFDQSxJQUFJLElBQUksQ0FBQ2IsWUFBWSxFQUFFO01BQ25CLElBQUksQ0FBQ0EsWUFBWSxDQUFDVSxRQUFRLEdBQUdJLE9BQU87SUFDeEM7SUFDQTtJQUFBLEtBQ0ssSUFBSSxJQUFJLENBQUNWLFFBQVEsRUFBRTtNQUNwQjtNQUNBLElBQUksQ0FBQ0EsUUFBUSxDQUFDSSxJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJLENBQUNGLGNBQWMsR0FBR08sT0FBTztJQUM1RDtFQUNKO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5oCS5rCU5p2h57uE5Lu2XHJcbiAqIOi0n+i0o+aYvuekuuWNleS9jeeahOaAkuawlOWAvFxyXG4gKi9cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBQcm9ncmVzc0JhcuaWueW8j++8iOaOqOiNkO+8iVxyXG4gICAgICAgIHJhZ2VQcm9ncmVzczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Qcm9ncmVzc0JhcixcclxuICAgICAgICAgICAgdG9vbHRpcDogXCLmgJLmsJTmnaHov5vluqbmnaHnu4Tku7Yo5aaC5p6c5L2/55SoUHJvZ3Jlc3NCYXIpXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBTcHJpdGXloavlhYXmlrnlvI/vvIjlpIfnlKjvvIlcclxuICAgICAgICByYWdlRmlsbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGUsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5oCS5rCU5p2h5aGr5YWF57K+54G1KOWmguaenOS4jeS9v+eUqFByb2dyZXNzQmFyKVwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g5aaC5p6c5L2/55SoU3ByaXRl5pa55byP77yM5L+d5a2Y5Y6f5aeL5a695bqmXHJcbiAgICAgICAgaWYgKHRoaXMucmFnZUZpbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fb3JpZ2luYWxXaWR0aCA9IHRoaXMucmFnZUZpbGwubm9kZS53aWR0aDtcclxuICAgICAgICAgICAgLy8g5Yid5aeL5YyW5oCS5rCU5p2h5Li656m677yI5a695bqm5Li6MO+8iVxyXG4gICAgICAgICAgICB0aGlzLnJhZ2VGaWxsLm5vZGUud2lkdGggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5aaC5p6c5L2/55SoUHJvZ3Jlc3NCYXLmlrnlvI/vvIzliJ3lp4vljJbov5vluqbkuLowXHJcbiAgICAgICAgaWYgKHRoaXMucmFnZVByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmFnZVByb2dyZXNzLnByb2dyZXNzID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5oCS5rCU5p2h5pi+56S6XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmFnZSAtIOW9k+WJjeaAkuawlOWAvO+8iOS4jei2hei/h21heFJhZ2XvvIlcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhSYWdlIC0g5pyA5aSn5oCS5rCU5YC8XHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVJhZ2UocmFnZSwgbWF4UmFnZSkge1xyXG4gICAgICAgIGlmIChtYXhSYWdlIDw9IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8g6K6h566X55m+5YiG5q+U77yM6ZmQ5Yi25ZyoMC0xMDAl5LmL6Ze0XHJcbiAgICAgICAgY29uc3QgcGVyY2VudCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHJhZ2UgLyBtYXhSYWdlKSk7XHJcblxyXG4gICAgICAgIC8vIOS8mOWFiOS9v+eUqFByb2dyZXNzQmFyXHJcbiAgICAgICAgaWYgKHRoaXMucmFnZVByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmFnZVByb2dyZXNzLnByb2dyZXNzID0gcGVyY2VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5ZCm5YiZ5L2/55SoU3ByaXRl5a695bqm5pa55byPXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5yYWdlRmlsbCkge1xyXG4gICAgICAgICAgICAvLyBTcHJpdGXmlrnlvI/vvJrlrr3luqbmnIDlpKfkuI3otoXov4fljp/lp4vlrr3luqbvvIgxMDAl77yJXHJcbiAgICAgICAgICAgIHRoaXMucmFnZUZpbGwubm9kZS53aWR0aCA9IHRoaXMuX29yaWdpbmFsV2lkdGggKiBwZXJjZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG4iXX0=