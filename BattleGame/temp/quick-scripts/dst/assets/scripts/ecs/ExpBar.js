
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ecs/ExpBar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bf528t9SmpGQ7AGF+QuaOCD', 'ExpBar');
// Scripts/ecs/ExpBar.js

"use strict";

/**
 * 经验条组件
 * 负责显示单位的经验值和等级
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    // ProgressBar方式（推荐）
    expProgress: {
      "default": null,
      type: cc.ProgressBar,
      tooltip: "经验条进度条组件(如果使用ProgressBar)"
    },
    // Sprite填充方式（备用）
    expFill: {
      "default": null,
      type: cc.Sprite,
      tooltip: "经验条填充精灵(如果不使用ProgressBar)"
    },
    // 等级标签（可选）
    levelLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "显示等级的标签（可选）"
    },
    // 经验值标签（可选）
    expLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "显示经验值的标签（可选，格式：当前/需要）"
    }
  },
  onLoad: function onLoad() {
    // 如果使用Sprite方式，保存原始宽度
    if (this.expFill) {
      this._originalWidth = this.expFill.node.width;
      // 初始化经验条为空（宽度为0）
      this.expFill.node.width = 0;
    }

    // 如果使用ProgressBar方式，初始化进度为0
    if (this.expProgress) {
      // 统一设置所有单位的经验条从左到右填充
      this.expProgress.reverse = false;
      this.expProgress.progress = 0;
    }

    // 初始化标签
    if (this.levelLabel) {
      this.levelLabel.string = "Lv.1";
    }
    if (this.expLabel) {
      this.expLabel.string = "0/0";
    }
  },
  start: function start() {
    // 在start中再次确保reverse设置正确（因为某些情况下onLoad可能太早）
    if (this.expProgress) {
      this.expProgress.reverse = false;
    }
  },
  /**
   * 更新经验条显示
   * @param {number} currentExp - 当前等级内的经验值
   * @param {number} expToNext - 升级所需经验值
   * @param {number} level - 当前等级
   * @param {number} progress - 经验进度（0-1）
   */
  updateExp: function updateExp(currentExp, expToNext, level, progress) {
    // 计算百分比，限制在0-100%之间
    var percent = Math.max(0, Math.min(1, progress));

    // 优先使用ProgressBar
    if (this.expProgress) {
      // 强制设置从左到右填充（确保每次更新时都是正确的方向）
      this.expProgress.reverse = false;
      this.expProgress.progress = percent;
    }
    // 否则使用Sprite宽度方式
    else if (this.expFill) {
      // Sprite方式：宽度最大不超过原始宽度（100%）
      this.expFill.node.width = this._originalWidth * percent;
    }

    // 更新等级标签
    if (this.levelLabel) {
      this.levelLabel.string = "Lv." + level;
    }

    // 更新经验值标签
    if (this.expLabel) {
      if (expToNext > 0) {
        this.expLabel.string = currentExp + "/" + expToNext;
      } else {
        this.expLabel.string = "MAX";
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxFeHBCYXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJleHBQcm9ncmVzcyIsInR5cGUiLCJQcm9ncmVzc0JhciIsInRvb2x0aXAiLCJleHBGaWxsIiwiU3ByaXRlIiwibGV2ZWxMYWJlbCIsIkxhYmVsIiwiZXhwTGFiZWwiLCJvbkxvYWQiLCJfb3JpZ2luYWxXaWR0aCIsIm5vZGUiLCJ3aWR0aCIsInJldmVyc2UiLCJwcm9ncmVzcyIsInN0cmluZyIsInN0YXJ0IiwidXBkYXRlRXhwIiwiY3VycmVudEV4cCIsImV4cFRvTmV4dCIsImxldmVsIiwicGVyY2VudCIsIk1hdGgiLCJtYXgiLCJtaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSO0lBQ0FDLFdBQVcsRUFBRTtNQUNULFdBQVMsSUFBSTtNQUNiQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sV0FBVztNQUNwQkMsT0FBTyxFQUFFO0lBQ2IsQ0FBQztJQUVEO0lBQ0FDLE9BQU8sRUFBRTtNQUNMLFdBQVMsSUFBSTtNQUNiSCxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1MsTUFBTTtNQUNmRixPQUFPLEVBQUU7SUFDYixDQUFDO0lBRUQ7SUFDQUcsVUFBVSxFQUFFO01BQ1IsV0FBUyxJQUFJO01BQ2JMLElBQUksRUFBRUwsRUFBRSxDQUFDVyxLQUFLO01BQ2RKLE9BQU8sRUFBRTtJQUNiLENBQUM7SUFFRDtJQUNBSyxRQUFRLEVBQUU7TUFDTixXQUFTLElBQUk7TUFDYlAsSUFBSSxFQUFFTCxFQUFFLENBQUNXLEtBQUs7TUFDZEosT0FBTyxFQUFFO0lBQ2I7RUFDSixDQUFDO0VBRURNLE1BQU0sV0FBQUEsT0FBQSxFQUFHO0lBQ0w7SUFDQSxJQUFJLElBQUksQ0FBQ0wsT0FBTyxFQUFFO01BQ2QsSUFBSSxDQUFDTSxjQUFjLEdBQUcsSUFBSSxDQUFDTixPQUFPLENBQUNPLElBQUksQ0FBQ0MsS0FBSztNQUM3QztNQUNBLElBQUksQ0FBQ1IsT0FBTyxDQUFDTyxJQUFJLENBQUNDLEtBQUssR0FBRyxDQUFDO0lBQy9COztJQUVBO0lBQ0EsSUFBSSxJQUFJLENBQUNaLFdBQVcsRUFBRTtNQUNsQjtNQUNBLElBQUksQ0FBQ0EsV0FBVyxDQUFDYSxPQUFPLEdBQUcsS0FBSztNQUNoQyxJQUFJLENBQUNiLFdBQVcsQ0FBQ2MsUUFBUSxHQUFHLENBQUM7SUFDakM7O0lBRUE7SUFDQSxJQUFJLElBQUksQ0FBQ1IsVUFBVSxFQUFFO01BQ2pCLElBQUksQ0FBQ0EsVUFBVSxDQUFDUyxNQUFNLEdBQUcsTUFBTTtJQUNuQztJQUNBLElBQUksSUFBSSxDQUFDUCxRQUFRLEVBQUU7TUFDZixJQUFJLENBQUNBLFFBQVEsQ0FBQ08sTUFBTSxHQUFHLEtBQUs7SUFDaEM7RUFDSixDQUFDO0VBRURDLEtBQUssV0FBQUEsTUFBQSxFQUFHO0lBQ0o7SUFDQSxJQUFJLElBQUksQ0FBQ2hCLFdBQVcsRUFBRTtNQUNsQixJQUFJLENBQUNBLFdBQVcsQ0FBQ2EsT0FBTyxHQUFHLEtBQUs7SUFDcEM7RUFDSixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSUksU0FBUyxXQUFBQSxVQUFDQyxVQUFVLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFTixRQUFRLEVBQUU7SUFDOUM7SUFDQSxJQUFNTyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUMsRUFBRUQsSUFBSSxDQUFDRSxHQUFHLENBQUMsQ0FBQyxFQUFFVixRQUFRLENBQUMsQ0FBQzs7SUFFbEQ7SUFDQSxJQUFJLElBQUksQ0FBQ2QsV0FBVyxFQUFFO01BQ2xCO01BQ0EsSUFBSSxDQUFDQSxXQUFXLENBQUNhLE9BQU8sR0FBRyxLQUFLO01BQ2hDLElBQUksQ0FBQ2IsV0FBVyxDQUFDYyxRQUFRLEdBQUdPLE9BQU87SUFDdkM7SUFDQTtJQUFBLEtBQ0ssSUFBSSxJQUFJLENBQUNqQixPQUFPLEVBQUU7TUFDbkI7TUFDQSxJQUFJLENBQUNBLE9BQU8sQ0FBQ08sSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSSxDQUFDRixjQUFjLEdBQUdXLE9BQU87SUFDM0Q7O0lBRUE7SUFDQSxJQUFJLElBQUksQ0FBQ2YsVUFBVSxFQUFFO01BQ2pCLElBQUksQ0FBQ0EsVUFBVSxDQUFDUyxNQUFNLFdBQVNLLEtBQU87SUFDMUM7O0lBRUE7SUFDQSxJQUFJLElBQUksQ0FBQ1osUUFBUSxFQUFFO01BQ2YsSUFBSVcsU0FBUyxHQUFHLENBQUMsRUFBRTtRQUNmLElBQUksQ0FBQ1gsUUFBUSxDQUFDTyxNQUFNLEdBQU1HLFVBQVUsU0FBSUMsU0FBVztNQUN2RCxDQUFDLE1BQU07UUFDSCxJQUFJLENBQUNYLFFBQVEsQ0FBQ08sTUFBTSxHQUFHLEtBQUs7TUFDaEM7SUFDSjtFQUNKO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog57uP6aqM5p2h57uE5Lu2XHJcbiAqIOi0n+i0o+aYvuekuuWNleS9jeeahOe7j+mqjOWAvOWSjOetiee6p1xyXG4gKi9cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBQcm9ncmVzc0JhcuaWueW8j++8iOaOqOiNkO+8iVxyXG4gICAgICAgIGV4cFByb2dyZXNzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByb2dyZXNzQmFyLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIue7j+mqjOadoei/m+W6puadoee7hOS7tijlpoLmnpzkvb/nlKhQcm9ncmVzc0JhcilcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIFNwcml0ZeWhq+WFheaWueW8j++8iOWkh+eUqO+8iVxyXG4gICAgICAgIGV4cEZpbGw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIue7j+mqjOadoeWhq+WFheeyvueBtSjlpoLmnpzkuI3kvb/nlKhQcm9ncmVzc0JhcilcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIOetiee6p+agh+etvu+8iOWPr+mAie+8iVxyXG4gICAgICAgIGxldmVsTGFiZWw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5pi+56S6562J57qn55qE5qCH562+77yI5Y+v6YCJ77yJXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDnu4/pqozlgLzmoIfnrb7vvIjlj6/pgInvvIlcclxuICAgICAgICBleHBMYWJlbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgICAgICAgICAgdG9vbHRpcDogXCLmmL7npLrnu4/pqozlgLznmoTmoIfnrb7vvIjlj6/pgInvvIzmoLzlvI/vvJrlvZPliY0v6ZyA6KaB77yJXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyDlpoLmnpzkvb/nlKhTcHJpdGXmlrnlvI/vvIzkv53lrZjljp/lp4vlrr3luqZcclxuICAgICAgICBpZiAodGhpcy5leHBGaWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29yaWdpbmFsV2lkdGggPSB0aGlzLmV4cEZpbGwubm9kZS53aWR0aDtcclxuICAgICAgICAgICAgLy8g5Yid5aeL5YyW57uP6aqM5p2h5Li656m677yI5a695bqm5Li6MO+8iVxyXG4gICAgICAgICAgICB0aGlzLmV4cEZpbGwubm9kZS53aWR0aCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDlpoLmnpzkvb/nlKhQcm9ncmVzc0JhcuaWueW8j++8jOWIneWni+WMlui/m+W6puS4ujBcclxuICAgICAgICBpZiAodGhpcy5leHBQcm9ncmVzcykge1xyXG4gICAgICAgICAgICAvLyDnu5/kuIDorr7nva7miYDmnInljZXkvY3nmoTnu4/pqozmnaHku47lt6bliLDlj7PloavlhYVcclxuICAgICAgICAgICAgdGhpcy5leHBQcm9ncmVzcy5yZXZlcnNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwUHJvZ3Jlc3MucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyW5qCH562+XHJcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxMYWJlbCkge1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsTGFiZWwuc3RyaW5nID0gXCJMdi4xXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmV4cExhYmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwTGFiZWwuc3RyaW5nID0gXCIwLzBcIjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIOWcqHN0YXJ05Lit5YaN5qyh56Gu5L+dcmV2ZXJzZeiuvue9ruato+ehru+8iOWboOS4uuafkOS6m+aDheWGteS4i29uTG9hZOWPr+iDveWkquaXqe+8iVxyXG4gICAgICAgIGlmICh0aGlzLmV4cFByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwUHJvZ3Jlc3MucmV2ZXJzZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDnu4/pqozmnaHmmL7npLpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJyZW50RXhwIC0g5b2T5YmN562J57qn5YaF55qE57uP6aqM5YC8XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZXhwVG9OZXh0IC0g5Y2H57qn5omA6ZyA57uP6aqM5YC8XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGV2ZWwgLSDlvZPliY3nrYnnuqdcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwcm9ncmVzcyAtIOe7j+mqjOi/m+W6pu+8iDAtMe+8iVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVFeHAoY3VycmVudEV4cCwgZXhwVG9OZXh0LCBsZXZlbCwgcHJvZ3Jlc3MpIHtcclxuICAgICAgICAvLyDorqHnrpfnmb7liIbmr5TvvIzpmZDliLblnKgwLTEwMCXkuYvpl7RcclxuICAgICAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgcHJvZ3Jlc3MpKTtcclxuXHJcbiAgICAgICAgLy8g5LyY5YWI5L2/55SoUHJvZ3Jlc3NCYXJcclxuICAgICAgICBpZiAodGhpcy5leHBQcm9ncmVzcykge1xyXG4gICAgICAgICAgICAvLyDlvLrliLborr7nva7ku47lt6bliLDlj7PloavlhYXvvIjnoa7kv53mr4/mrKHmm7TmlrDml7bpg73mmK/mraPnoa7nmoTmlrnlkJHvvIlcclxuICAgICAgICAgICAgdGhpcy5leHBQcm9ncmVzcy5yZXZlcnNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwUHJvZ3Jlc3MucHJvZ3Jlc3MgPSBwZXJjZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlkKbliJnkvb/nlKhTcHJpdGXlrr3luqbmlrnlvI9cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmV4cEZpbGwpIHtcclxuICAgICAgICAgICAgLy8gU3ByaXRl5pa55byP77ya5a695bqm5pyA5aSn5LiN6LaF6L+H5Y6f5aeL5a695bqm77yIMTAwJe+8iVxyXG4gICAgICAgICAgICB0aGlzLmV4cEZpbGwubm9kZS53aWR0aCA9IHRoaXMuX29yaWdpbmFsV2lkdGggKiBwZXJjZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5pu05paw562J57qn5qCH562+XHJcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxMYWJlbCkge1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsTGFiZWwuc3RyaW5nID0gYEx2LiR7bGV2ZWx9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOabtOaWsOe7j+mqjOWAvOagh+etvlxyXG4gICAgICAgIGlmICh0aGlzLmV4cExhYmVsKSB7XHJcbiAgICAgICAgICAgIGlmIChleHBUb05leHQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cExhYmVsLnN0cmluZyA9IGAke2N1cnJlbnRFeHB9LyR7ZXhwVG9OZXh0fWA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cExhYmVsLnN0cmluZyA9IFwiTUFYXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=