"use strict";
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