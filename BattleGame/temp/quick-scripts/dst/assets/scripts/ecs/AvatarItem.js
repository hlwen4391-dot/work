
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ecs/AvatarItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '53decLGXRpE15xEnDrmvOp8', 'AvatarItem');
// Scripts/ecs/AvatarItem.js

"use strict";

/**
 * 头像项组件
 * 用于头像Prefab，管理单个头像的显示和状态
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    // 头像图片
    iconSprite: {
      "default": null,
      type: cc.Sprite,
      tooltip: "头像图片Sprite组件"
    },
    // 名称标签
    nameLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "名称标签Label组件"
    },
    // 勾选标记节点
    checkmarkNode: {
      "default": null,
      type: cc.Node,
      tooltip: "勾选标记节点（选中时显示）"
    }
  },
  /**
   * 初始化头像
   * @param {Object} unitData - 单位数据
   * @param {string} team - 队伍类型
   * @param {cc.Component} parentUI - 父UI组件（SelectSceneUI）
   */
  init: function init(unitData, team, parentUI) {
    this.unitData = unitData;
    this.team = team;
    this.parentUI = parentUI;
    this.isSelected = false;

    // 设置头像图片
    if (this.iconSprite && unitData.icon) {
      this.iconSprite.spriteFrame = unitData.icon;

      // 确保Sprite组件设置正确
      if (this.iconSprite.type !== cc.Sprite.Type.SIMPLE) {
        this.iconSprite.type = cc.Sprite.Type.SIMPLE;
      }
      if (this.iconSprite.sizeMode !== cc.Sprite.SizeMode.CUSTOM) {
        this.iconSprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
      }

      // 设置头像节点大小（限制最大尺寸，防止过大）
      if (this.iconSprite.node) {
        var maxSize = this.maxAvatarSize || 120; // 最大头像尺寸（像素）
        var defaultSize = this.avatarSize || 100; // 默认头像尺寸（像素）

        // 如果节点大小异常大（超过最大尺寸），重置为默认大小
        if (this.iconSprite.node.width > maxSize || this.iconSprite.node.height > maxSize) {
          this.iconSprite.node.width = defaultSize;
          this.iconSprite.node.height = defaultSize;
          cc.log("[AvatarItem] \u5934\u50CF\u8FC7\u5927\uFF0C\u91CD\u7F6E\u4E3A\u9ED8\u8BA4\u5927\u5C0F: " + unitData.name + " -> " + defaultSize + "x" + defaultSize);
        }
        // 如果节点大小为0，设置为默认大小
        else if (this.iconSprite.node.width === 0 || this.iconSprite.node.height === 0) {
          this.iconSprite.node.width = defaultSize;
          this.iconSprite.node.height = defaultSize;
          cc.log("[AvatarItem] \u5934\u50CF\u5927\u5C0F\u4E3A0\uFF0C\u8BBE\u7F6E\u4E3A\u9ED8\u8BA4\u5927\u5C0F: " + unitData.name + " -> " + defaultSize + "x" + defaultSize);
        }
        // 如果节点大小合理，限制在最大尺寸内并保持正方形
        else {
          // 确保宽高比例一致（保持正方形），且不超过最大尺寸
          var size = Math.min(Math.min(this.iconSprite.node.width, this.iconSprite.node.height), maxSize);
          this.iconSprite.node.width = size;
          this.iconSprite.node.height = size;
        }
      }
      cc.log("[AvatarItem] \u8BBE\u7F6E\u5934\u50CF: " + unitData.name + ", spriteFrame=" + (unitData.icon.name || '已设置') + ", \u5927\u5C0F=" + this.iconSprite.node.width + "x" + this.iconSprite.node.height);
    } else {
      if (!this.iconSprite) {
        cc.warn("[AvatarItem] iconSprite\u672A\u7ED1\u5B9A: " + unitData.name);
      }
      if (!unitData.icon) {
        cc.warn("[AvatarItem] unitData.icon\u4E3A\u7A7A: " + unitData.name);
      }
    }

    // 设置名称
    if (this.nameLabel) {
      this.nameLabel.string = unitData.displayName || unitData.name;
      // 调整字体大小（调小一点）
      if (this.nameLabel.fontSize > 0) {
        this.nameLabel.fontSize = Math.max(16, this.nameLabel.fontSize * 0.7); // 缩小到原来的70%，最小16
      } else {
        this.nameLabel.fontSize = 20; // 如果字体大小为0或未设置，设置为20
      }
    }

    // 初始隐藏勾选标记
    if (this.checkmarkNode) {
      this.checkmarkNode.active = false;
    }
  },
  /**
   * 设置选中状态
   * @param {boolean} selected - 是否选中
   */
  setSelected: function setSelected(selected) {
    this.isSelected = selected;
    if (this.checkmarkNode) {
      this.checkmarkNode.active = selected;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxBdmF0YXJJdGVtLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaWNvblNwcml0ZSIsInR5cGUiLCJTcHJpdGUiLCJ0b29sdGlwIiwibmFtZUxhYmVsIiwiTGFiZWwiLCJjaGVja21hcmtOb2RlIiwiTm9kZSIsImluaXQiLCJ1bml0RGF0YSIsInRlYW0iLCJwYXJlbnRVSSIsImlzU2VsZWN0ZWQiLCJpY29uIiwic3ByaXRlRnJhbWUiLCJUeXBlIiwiU0lNUExFIiwic2l6ZU1vZGUiLCJTaXplTW9kZSIsIkNVU1RPTSIsIm5vZGUiLCJtYXhTaXplIiwibWF4QXZhdGFyU2l6ZSIsImRlZmF1bHRTaXplIiwiYXZhdGFyU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwibG9nIiwibmFtZSIsInNpemUiLCJNYXRoIiwibWluIiwid2FybiIsInN0cmluZyIsImRpc3BsYXlOYW1lIiwiZm9udFNpemUiLCJtYXgiLCJhY3RpdmUiLCJzZXRTZWxlY3RlZCIsInNlbGVjdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUjtJQUNBQyxVQUFVLEVBQUU7TUFDUixXQUFTLElBQUk7TUFDYkMsSUFBSSxFQUFFTCxFQUFFLENBQUNNLE1BQU07TUFDZkMsT0FBTyxFQUFFO0lBQ2IsQ0FBQztJQUVEO0lBQ0FDLFNBQVMsRUFBRTtNQUNQLFdBQVMsSUFBSTtNQUNiSCxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1MsS0FBSztNQUNkRixPQUFPLEVBQUU7SUFDYixDQUFDO0lBRUQ7SUFDQUcsYUFBYSxFQUFFO01BQ1gsV0FBUyxJQUFJO01BQ2JMLElBQUksRUFBRUwsRUFBRSxDQUFDVyxJQUFJO01BQ2JKLE9BQU8sRUFBRTtJQUNi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QUFNLEdBQUcsS0FBSztJQUNyQztFQUNKLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJQyxXQUFXLFdBQUFBLFlBQUNDLFFBQVEsRUFBRTtJQUNsQixJQUFJLENBQUMzQixVQUFVLEdBQUcyQixRQUFRO0lBQzFCLElBQUksSUFBSSxDQUFDakMsYUFBYSxFQUFFO01BQ3BCLElBQUksQ0FBQ0EsYUFBYSxDQUFDK0IsTUFBTSxHQUFHRSxRQUFRO0lBQ3hDO0VBQ0o7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDlpLTlg4/pobnnu4Tku7ZcclxuICog55So5LqO5aS05YOPUHJlZmFi77yM566h55CG5Y2V5Liq5aS05YOP55qE5pi+56S65ZKM54q25oCBXHJcbiAqL1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIOWktOWDj+WbvueJh1xyXG4gICAgICAgIGljb25TcHJpdGU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWktOWDj+WbvueJh1Nwcml0Zee7hOS7tlwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g5ZCN56ew5qCH562+XHJcbiAgICAgICAgbmFtZUxhYmVsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWQjeensOagh+etvkxhYmVs57uE5Lu2XCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDli77pgInmoIforrDoioLngrlcclxuICAgICAgICBjaGVja21hcmtOb2RlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5Yu+6YCJ5qCH6K6w6IqC54K577yI6YCJ5Lit5pe25pi+56S677yJXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5aS05YOPXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdW5pdERhdGEgLSDljZXkvY3mlbDmja5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZWFtIC0g6Zif5LyN57G75Z6LXHJcbiAgICAgKiBAcGFyYW0ge2NjLkNvbXBvbmVudH0gcGFyZW50VUkgLSDniLZVSee7hOS7tu+8iFNlbGVjdFNjZW5lVUnvvIlcclxuICAgICAqL1xyXG4gICAgaW5pdCh1bml0RGF0YSwgdGVhbSwgcGFyZW50VUkpIHtcclxuICAgICAgICB0aGlzLnVuaXREYXRhID0gdW5pdERhdGE7XHJcbiAgICAgICAgdGhpcy50ZWFtID0gdGVhbTtcclxuICAgICAgICB0aGlzLnBhcmVudFVJID0gcGFyZW50VUk7XHJcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIOiuvue9ruWktOWDj+WbvueJh1xyXG4gICAgICAgIGlmICh0aGlzLmljb25TcHJpdGUgJiYgdW5pdERhdGEuaWNvbikge1xyXG4gICAgICAgICAgICB0aGlzLmljb25TcHJpdGUuc3ByaXRlRnJhbWUgPSB1bml0RGF0YS5pY29uO1xyXG5cclxuICAgICAgICAgICAgLy8g56Gu5L+dU3ByaXRl57uE5Lu26K6+572u5q2j56GuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmljb25TcHJpdGUudHlwZSAhPT0gY2MuU3ByaXRlLlR5cGUuU0lNUExFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmljb25TcHJpdGUudHlwZSA9IGNjLlNwcml0ZS5UeXBlLlNJTVBMRTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pY29uU3ByaXRlLnNpemVNb2RlICE9PSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmljb25TcHJpdGUuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDorr7nva7lpLTlg4/oioLngrnlpKflsI/vvIjpmZDliLbmnIDlpKflsLrlr7jvvIzpmLLmraLov4flpKfvvIlcclxuICAgICAgICAgICAgaWYgKHRoaXMuaWNvblNwcml0ZS5ub2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhTaXplID0gdGhpcy5tYXhBdmF0YXJTaXplIHx8IDEyMDsgLy8g5pyA5aSn5aS05YOP5bC65a+477yI5YOP57Sg77yJXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0U2l6ZSA9IHRoaXMuYXZhdGFyU2l6ZSB8fCAxMDA7IC8vIOm7mOiupOWktOWDj+WwuuWvuO+8iOWDj+e0oO+8iVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIOWmguaenOiKgueCueWkp+Wwj+W8guW4uOWkp++8iOi2hei/h+acgOWkp+WwuuWvuO+8ie+8jOmHjee9ruS4uum7mOiupOWkp+Wwj1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaWNvblNwcml0ZS5ub2RlLndpZHRoID4gbWF4U2l6ZSB8fCB0aGlzLmljb25TcHJpdGUubm9kZS5oZWlnaHQgPiBtYXhTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pY29uU3ByaXRlLm5vZGUud2lkdGggPSBkZWZhdWx0U2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmljb25TcHJpdGUubm9kZS5oZWlnaHQgPSBkZWZhdWx0U2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtBdmF0YXJJdGVtXSDlpLTlg4/ov4flpKfvvIzph43nva7kuLrpu5jorqTlpKflsI86ICR7dW5pdERhdGEubmFtZX0gLT4gJHtkZWZhdWx0U2l6ZX14JHtkZWZhdWx0U2l6ZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIOWmguaenOiKgueCueWkp+Wwj+S4ujDvvIzorr7nva7kuLrpu5jorqTlpKflsI9cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaWNvblNwcml0ZS5ub2RlLndpZHRoID09PSAwIHx8IHRoaXMuaWNvblNwcml0ZS5ub2RlLmhlaWdodCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWNvblNwcml0ZS5ub2RlLndpZHRoID0gZGVmYXVsdFNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pY29uU3ByaXRlLm5vZGUuaGVpZ2h0ID0gZGVmYXVsdFNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQXZhdGFySXRlbV0g5aS05YOP5aSn5bCP5Li6MO+8jOiuvue9ruS4uum7mOiupOWkp+WwjzogJHt1bml0RGF0YS5uYW1lfSAtPiAke2RlZmF1bHRTaXplfXgke2RlZmF1bHRTaXplfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c6IqC54K55aSn5bCP5ZCI55CG77yM6ZmQ5Yi25Zyo5pyA5aSn5bC65a+45YaF5bm25L+d5oyB5q2j5pa55b2iXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDnoa7kv53lrr3pq5jmr5TkvovkuIDoh7TvvIjkv53mjIHmraPmlrnlvaLvvInvvIzkuJTkuI3otoXov4fmnIDlpKflsLrlr7hcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gTWF0aC5taW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKHRoaXMuaWNvblNwcml0ZS5ub2RlLndpZHRoLCB0aGlzLmljb25TcHJpdGUubm9kZS5oZWlnaHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhTaXplXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmljb25TcHJpdGUubm9kZS53aWR0aCA9IHNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pY29uU3ByaXRlLm5vZGUuaGVpZ2h0ID0gc2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2MubG9nKGBbQXZhdGFySXRlbV0g6K6+572u5aS05YOPOiAke3VuaXREYXRhLm5hbWV9LCBzcHJpdGVGcmFtZT0ke3VuaXREYXRhLmljb24ubmFtZSB8fCAn5bey6K6+572uJ30sIOWkp+Wwjz0ke3RoaXMuaWNvblNwcml0ZS5ub2RlLndpZHRofXgke3RoaXMuaWNvblNwcml0ZS5ub2RlLmhlaWdodH1gKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaWNvblNwcml0ZSkge1xyXG4gICAgICAgICAgICAgICAgY2Mud2FybihgW0F2YXRhckl0ZW1dIGljb25TcHJpdGXmnKrnu5Hlrpo6ICR7dW5pdERhdGEubmFtZX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXVuaXREYXRhLmljb24pIHtcclxuICAgICAgICAgICAgICAgIGNjLndhcm4oYFtBdmF0YXJJdGVtXSB1bml0RGF0YS5pY29u5Li656m6OiAke3VuaXREYXRhLm5hbWV9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOiuvue9ruWQjeensFxyXG4gICAgICAgIGlmICh0aGlzLm5hbWVMYWJlbCkge1xyXG4gICAgICAgICAgICB0aGlzLm5hbWVMYWJlbC5zdHJpbmcgPSB1bml0RGF0YS5kaXNwbGF5TmFtZSB8fCB1bml0RGF0YS5uYW1lO1xyXG4gICAgICAgICAgICAvLyDosIPmlbTlrZfkvZPlpKflsI/vvIjosIPlsI/kuIDngrnvvIlcclxuICAgICAgICAgICAgaWYgKHRoaXMubmFtZUxhYmVsLmZvbnRTaXplID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lTGFiZWwuZm9udFNpemUgPSBNYXRoLm1heCgxNiwgdGhpcy5uYW1lTGFiZWwuZm9udFNpemUgKiAwLjcpOyAvLyDnvKnlsI/liLDljp/mnaXnmoQ3MCXvvIzmnIDlsI8xNlxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lTGFiZWwuZm9udFNpemUgPSAyMDsgLy8g5aaC5p6c5a2X5L2T5aSn5bCP5Li6MOaIluacquiuvue9ru+8jOiuvue9ruS4ujIwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWIneWni+makOiXj+WLvumAieagh+iusFxyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrbWFya05vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja21hcmtOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7pgInkuK3nirbmgIFcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2VsZWN0ZWQgLSDmmK/lkKbpgInkuK1cclxuICAgICAqL1xyXG4gICAgc2V0U2VsZWN0ZWQoc2VsZWN0ZWQpIHtcclxuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBzZWxlY3RlZDtcclxuICAgICAgICBpZiAodGhpcy5jaGVja21hcmtOb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2ttYXJrTm9kZS5hY3RpdmUgPSBzZWxlY3RlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuIl19