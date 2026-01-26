"use strict";
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