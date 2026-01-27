
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ecs/ItemTooltip.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d9f1E6uP5H/pBCM+Uh0BFV', 'ItemTooltip');
// Scripts/ecs/ItemTooltip.js

"use strict";

/**
 * 道具信息弹窗组件
 * 显示道具的详细信息（名称、描述、效果等）
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    // 弹窗背景
    background: {
      "default": null,
      type: cc.Node,
      tooltip: "弹窗背景节点"
    },
    // 道具名称标签
    nameLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "道具名称标签"
    },
    // 道具描述标签
    descriptionLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "道具描述标签"
    },
    // 效果信息标签
    effectLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "效果信息标签"
    },
    // 数量标签
    countLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "数量标签"
    },
    // 稀有度标签（可选）
    rarityLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "稀有度标签（可选）"
    },
    // 类型标签（可选）
    typeLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "类型标签（可选）"
    },
    // 价格标签（可选）
    priceLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "价格标签（可选）"
    },
    // 延迟显示时间（毫秒），避免鼠标快速移动时频繁显示/隐藏
    showDelay: {
      "default": 300,
      tooltip: "延迟显示时间（毫秒）"
    },
    // 隐藏延迟时间（毫秒）
    hideDelay: {
      "default": 100,
      tooltip: "隐藏延迟时间（毫秒）"
    }
  },
  onLoad: function onLoad() {
    // 初始隐藏弹窗
    this.node.active = false;

    // 延迟显示/隐藏的定时器
    this._showTimer = null;
    this._hideTimer = null;

    // 初始化字体与布局（确保在背景节点下合理显示）
    this._initLayout();
  },
  /**
   * 初始化弹窗内部各文本在背景下的布局与样式
   * @private
   */
  _initLayout: function _initLayout() {
    if (!this.background) {
      cc.warn("[ItemTooltip] 未绑定 background 节点，无法自动布局文本");
      return;
    }
    var bgNode = this.background;
    var bgSize = bgNode.getContentSize();
    if (!bgSize || bgSize.width <= 0 || bgSize.height <= 0) {
      // 如果背景还没设置大小，可以稍后再根据需要调整
      cc.log("[ItemTooltip] background 尺寸为 0，将使用默认布局尺寸 (300x220)");
      bgNode.setContentSize(300, 220);
    }

    // 优化的内边距与行间距
    var PADDING_X = 20;
    var PADDING_Y_TOP = 20; // 顶部内边距
    var PADDING_Y_BOTTOM = 20; // 底部内边距（增加底部空间）
    var LINE_SPACING_SMALL = 4; // 小间距（用于同一组信息）
    var LINE_SPACING_MEDIUM = 8; // 中间距（用于不同组信息）
    var LINE_SPACING_LARGE = 12; // 大间距（用于标题和内容之间）

    /**
     * 将一个 Label 节点挂到背景下面，并设置基础样式
     * @param {cc.Label} labelComp
     * @param {number} fontSize
     * @param {"LEFT"|"CENTER"|"RIGHT"} hAlign
     * @param {boolean} enableWrap
     * @param {cc.Color} textColor - 文字颜色（可选）
     * @param {boolean} isBold - 是否加粗（可选）
     */
    var setupLabel = function setupLabel(labelComp, fontSize, hAlign, enableWrap, textColor, isBold) {
      if (!labelComp) {
        return null;
      }
      var node = labelComp.node;

      // 确保父节点是 background
      if (node.parent !== bgNode) {
        node.removeFromParent(false);
        bgNode.addChild(node);
      }

      // 基本字体样式
      labelComp.fontSize = fontSize;
      labelComp.lineHeight = Math.round(fontSize * 1.4); // 增加行高，提升可读性
      labelComp.enableWrapText = !!enableWrap;

      // 设置文字颜色（确保颜色足够亮）
      if (textColor) {
        labelComp.node.color = textColor;
      } else {
        // 默认纯白色（更亮）
        labelComp.node.color = new cc.Color(255, 255, 255, 255);
      }

      // 溢出模式：描述等使用 RESIZE_HEIGHT，自适应高度
      if (enableWrap) {
        labelComp.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
      } else {
        labelComp.overflow = cc.Label.Overflow.NONE;
      }

      // 对齐方式
      switch (hAlign) {
        case "CENTER":
          labelComp.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
          break;
        case "RIGHT":
          labelComp.horizontalAlign = cc.Label.HorizontalAlign.RIGHT;
          break;
        default:
          labelComp.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
          break;
      }

      // 默认宽度：背景宽度减去左右内边距
      var width = bgNode.width - PADDING_X * 2;
      node.setContentSize(width, labelComp.lineHeight);
      return node;
    };

    // 设置各个Label（优化后的样式 - 更亮的颜色）
    // 名称：居中，大字体，纯白色，更亮
    var nameNode = setupLabel(this.nameLabel, 26, "CENTER", false, new cc.Color(255, 255, 255, 255), true);

    // 描述：左对齐，中等字体，支持换行，亮白色
    var descNode = setupLabel(this.descriptionLabel, 18, "LEFT", true, new cc.Color(255, 255, 255, 255), false);

    // 效果：左对齐，中等字体，支持换行，亮绿色
    var effectNode = setupLabel(this.effectLabel, 18, "LEFT", true, new cc.Color(120, 255, 120, 255), false);

    // 数量：左对齐，小字体，黑色
    var countNode = setupLabel(this.countLabel, 16, "LEFT", false, new cc.Color(0, 0, 0, 255), false);

    // 稀有度：左对齐，小字体，根据稀有度会有不同颜色（在显示时动态设置）
    var rarityNode = setupLabel(this.rarityLabel, 16, "LEFT", false, new cc.Color(255, 255, 255, 255), false);

    // 类型：左对齐，小字体，亮白色
    var typeNode = setupLabel(this.typeLabel, 16, "LEFT", false, new cc.Color(255, 255, 255, 255), false);

    // 价格：左对齐，小字体，金色（突出显示）
    var priceNode = setupLabel(this.priceLabel, 16, "LEFT", false, new cc.Color(255, 215, 0, 255), false);

    // 从上到下排版
    // 坐标以 background 为父节点，锚点默认 (0.5, 0.5)
    var currentY = bgNode.height / 2 - PADDING_Y_TOP;
    var startXLeft = -bgNode.width / 2 + PADDING_X;
    var startXCenter = 0; // 居中位置

    // 放置节点（支持不同的间距和对齐方式）
    var placeNode = function placeNode(node, spacing, alignLeft) {
      if (alignLeft === void 0) {
        alignLeft = true;
      }
      if (!node) return;
      node.setAnchorPoint(alignLeft ? 0 : 0.5, 1); // 左对齐用(0,1)，居中用(0.5,1)
      node.x = alignLeft ? startXLeft : startXCenter;
      node.y = currentY;
      currentY -= node.height + spacing;
    };

    // 布局顺序（优化后的间距）
    placeNode(nameNode, LINE_SPACING_LARGE, false); // 名称居中，大间距
    placeNode(descNode, LINE_SPACING_MEDIUM, true); // 描述左对齐，中间距
    placeNode(effectNode, LINE_SPACING_MEDIUM, true); // 效果左对齐，中间距

    // 下方信息组（数量、稀有度、类型、价格）- 小间距
    placeNode(countNode, LINE_SPACING_SMALL, true);
    placeNode(rarityNode, LINE_SPACING_SMALL, true);
    placeNode(typeNode, LINE_SPACING_SMALL, true);
    placeNode(priceNode, PADDING_Y_BOTTOM, true); // 最后一个，使用底部内边距作为间距
  },
  /**
   * 在内容设置后更新布局（处理文字换行后的高度变化）
   * @private
   */
  _updateLayoutAfterContent: function _updateLayoutAfterContent() {
    if (!this.background) {
      return;
    }
    var bgNode = this.background;
    var PADDING_Y_TOP = 20;
    var PADDING_Y_BOTTOM = 20;
    var LINE_SPACING_SMALL = 4;
    var LINE_SPACING_MEDIUM = 8;
    var LINE_SPACING_LARGE = 12;
    var startXLeft = -bgNode.width / 2 + 20;
    var startXCenter = 0;
    var currentY = bgNode.height / 2 - PADDING_Y_TOP;
    var placeNode = function placeNode(labelComp, spacing, alignLeft) {
      if (alignLeft === void 0) {
        alignLeft = true;
      }
      if (!labelComp || !labelComp.node.active) return;
      var node = labelComp.node;
      node.setAnchorPoint(alignLeft ? 0 : 0.5, 1);
      node.x = alignLeft ? startXLeft : startXCenter;
      node.y = currentY;

      // 更新节点高度（如果支持换行）
      if (labelComp.enableWrapText && labelComp.overflow === cc.Label.Overflow.RESIZE_HEIGHT) {
        // Label会自动调整高度，我们需要获取实际高度
        var actualHeight = node.height;
        currentY -= actualHeight + spacing;
      } else {
        currentY -= node.height + spacing;
      }
    };

    // 重新布局所有可见的标签
    if (this.nameLabel && this.nameLabel.node.active) {
      placeNode(this.nameLabel, LINE_SPACING_LARGE, false);
    }
    if (this.descriptionLabel && this.descriptionLabel.node.active) {
      placeNode(this.descriptionLabel, LINE_SPACING_MEDIUM, true);
    }
    if (this.effectLabel && this.effectLabel.node.active) {
      placeNode(this.effectLabel, LINE_SPACING_MEDIUM, true);
    }
    if (this.countLabel && this.countLabel.node.active) {
      placeNode(this.countLabel, LINE_SPACING_SMALL, true);
    }
    if (this.rarityLabel && this.rarityLabel.node.active) {
      placeNode(this.rarityLabel, LINE_SPACING_SMALL, true);
    }
    if (this.typeLabel && this.typeLabel.node.active) {
      placeNode(this.typeLabel, LINE_SPACING_SMALL, true);
    }
    if (this.priceLabel && this.priceLabel.node.active) {
      placeNode(this.priceLabel, PADDING_Y_BOTTOM, true);
    }

    // 根据实际内容高度调整背景大小（可选）
    var totalHeight = bgNode.height / 2 - currentY + PADDING_Y_BOTTOM;
    if (totalHeight > bgNode.height) {
      // 如果内容超出背景，可以动态调整背景高度
      bgNode.setContentSize(bgNode.width, totalHeight);
      cc.log("[ItemTooltip] 背景高度已调整为:", totalHeight);
    }
  },
  /**
   * 显示道具信息
   * @param {Object} itemData - 道具数据 { itemId, count }
   * @param {cc.Node|cc.Vec2} targetNodeOrPosition - 目标节点（道具格子节点）或位置坐标
   */
  showItemInfo: function showItemInfo(itemData, targetNodeOrPosition) {
    if (!itemData || !itemData.itemId) {
      cc.warn("[ItemTooltip] 道具数据无效", itemData);
      return;
    }

    // 添加调试日志
    cc.log("[ItemTooltip] 显示道具信息:", itemData.itemId, "目标:", targetNodeOrPosition);

    // 清除隐藏定时器（如果正在隐藏，取消隐藏）
    if (this._hideTimer) {
      clearTimeout(this._hideTimer);
      this._hideTimer = null;
    }

    // 清除之前的显示定时器
    if (this._showTimer) {
      clearTimeout(this._showTimer);
      this._showTimer = null;
    }

    // 右键点击或长按时立即显示（不需要延迟）
    this._doShowItemInfo(itemData, targetNodeOrPosition);
  },
  /**
   * 实际显示道具信息
   * @private
   * @param {Object} itemData - 道具数据
   * @param {cc.Node|cc.Vec2} targetNodeOrPosition - 目标节点或位置
   */
  _doShowItemInfo: function _doShowItemInfo(itemData, targetNodeOrPosition) {
    var _this = this;
    var ItemConfig = require("ItemConfig");
    var itemConfig = ItemConfig.getItemById(itemData.itemId);
    if (!itemConfig) {
      cc.warn("[ItemTooltip] \u672A\u627E\u5230\u9053\u5177\u914D\u7F6E: " + itemData.itemId);
      return;
    }

    // 设置道具名称（优化显示）
    if (this.nameLabel) {
      var displayName = itemConfig.displayName || itemConfig.name || itemConfig.id;
      this.nameLabel.string = displayName;
      // 确保名称标签可见
      this.nameLabel.node.active = true;
    }

    // 设置道具描述（优化显示）
    if (this.descriptionLabel) {
      var desc = itemConfig.description || "无描述";
      this.descriptionLabel.string = desc;
      this.descriptionLabel.node.active = true;
      // 确保描述文字可以正确换行
      this.descriptionLabel.enableWrapText = true;
    }

    // 设置效果信息（优化显示格式）
    if (this.effectLabel) {
      var effectText = "";
      switch (itemConfig.effectType) {
        case ItemConfig.EffectType.LEVEL_UP:
          effectText = "\u6548\u679C\uFF1A\u63D0\u5347 " + (itemConfig.effectValue || 1) + " \u7EA7";
          break;
        case ItemConfig.EffectType.EXP:
          effectText = "\u6548\u679C\uFF1A\u83B7\u5F97 " + (itemConfig.effectValue || 0) + " \u70B9\u7ECF\u9A8C\u503C";
          break;
        case ItemConfig.EffectType.HP:
          effectText = "\u6548\u679C\uFF1A\u6062\u590D " + (itemConfig.effectValue || 0) + " \u70B9\u751F\u547D\u503C";
          break;
        case ItemConfig.EffectType.ATTACK:
          effectText = "\u6548\u679C\uFF1A\u589E\u52A0 " + (itemConfig.effectValue || 0) + " \u70B9\u653B\u51FB\u529B";
          break;
        case ItemConfig.EffectType.DEFENSE:
          effectText = "\u6548\u679C\uFF1A\u589E\u52A0 " + (itemConfig.effectValue || 0) + " \u70B9\u9632\u5FA1\u529B";
          break;
        default:
          effectText = "效果：未知";
      }
      this.effectLabel.string = effectText;
      this.effectLabel.node.active = true;
      // 确保效果文字可以正确换行
      this.effectLabel.enableWrapText = true;
    }

    // 设置数量（优化显示格式）
    if (this.countLabel) {
      var count = itemData.count || 0;
      if (count > 1) {
        this.countLabel.string = "\u6570\u91CF\uFF1A" + count;
        this.countLabel.node.active = true;
      } else {
        // 数量为1或0时不显示数量标签
        this.countLabel.node.active = false;
      }
    }

    // 设置稀有度（可选）- 根据稀有度设置不同颜色
    if (this.rarityLabel) {
      var rarityMap = {
        "common": "普通",
        "uncommon": " uncommon",
        "rare": "稀有",
        "epic": "史诗",
        "legendary": "传说"
      };
      var rarityText = rarityMap[itemConfig.rarity] || itemConfig.rarity || "普通";
      this.rarityLabel.string = "\u7A00\u6709\u5EA6\uFF1A" + rarityText;

      // 根据稀有度设置颜色（更亮的颜色）
      var rarityColor = new cc.Color(255, 255, 255, 255); // 默认白色
      switch (itemConfig.rarity) {
        case "common":
          rarityColor = new cc.Color(240, 240, 240, 255); // 亮灰色
          break;
        case "uncommon":
          rarityColor = new cc.Color(80, 255, 80, 255); // 亮绿色
          break;
        case "rare":
          rarityColor = new cc.Color(80, 180, 255, 255); // 亮蓝色
          break;
        case "epic":
          rarityColor = new cc.Color(220, 80, 255, 255); // 亮紫色
          break;
        case "legendary":
          rarityColor = new cc.Color(255, 220, 60, 255); // 亮金色
          break;
      }
      this.rarityLabel.node.color = rarityColor;
    }

    // 设置类型（可选）- 优化显示
    if (this.typeLabel) {
      var typeMap = {
        "consumable": "消耗品",
        "equipment": "装备",
        "material": "材料"
      };
      var typeText = typeMap[itemConfig.type] || itemConfig.type || "未知";
      this.typeLabel.string = "\u7C7B\u578B\uFF1A" + typeText;
      this.typeLabel.node.active = true;
    }

    // 设置价格（可选）- 优化显示
    if (this.priceLabel) {
      var price = itemConfig.price || 0;
      if (price > 0) {
        this.priceLabel.string = "\u4EF7\u683C\uFF1A" + price + " \u91D1\u5E01";
        this.priceLabel.node.active = true;
        // 确保价格标签使用金色
        this.priceLabel.node.color = new cc.Color(255, 215, 0, 255);
      } else {
        // 如果没有价格或价格为0，隐藏价格标签
        this.priceLabel.node.active = false;
      }
    }

    // 显示信息后，重新调整布局（确保文字换行后位置正确）
    this.scheduleOnce(function () {
      _this._updateLayoutAfterContent();
    }, 0);

    // 设置位置（显示在道具节点的右上方）
    if (targetNodeOrPosition) {
      var targetWorldPos;

      // 判断传入的是节点还是坐标
      if (targetNodeOrPosition instanceof cc.Node) {
        // 传入的是道具格子节点，计算其右上角的世界坐标
        var targetNode = targetNodeOrPosition;
        var targetSize = targetNode.getContentSize();
        var targetAnchor = targetNode.getAnchorPoint();

        // 计算节点右上角的本地坐标（相对于节点锚点）
        // 右上角相对于锚点的偏移 = (宽度 * (1 - anchorX), 高度 * (1 - anchorY))
        // 因为锚点通常在(0.5, 0.5)，所以右上角 = (width/2, height/2)
        var _offsetX = targetSize.width * (1 - targetAnchor.x);
        var _offsetY = targetSize.height * (1 - targetAnchor.y);

        // 节点右上角在节点本地坐标系中的位置（相对于节点位置）
        var topRightInNode = cc.v2(_offsetX, _offsetY);

        // 转换为世界坐标
        if (targetNode.parent) {
          // 先转换为父节点的世界坐标
          var nodeWorldPos = targetNode.parent.convertToWorldSpaceAR(targetNode.position);
          // 然后加上右上角的偏移（需要考虑节点的旋转和缩放）
          // 简化处理：直接使用节点位置 + 偏移
          targetWorldPos = targetNode.parent.convertToWorldSpaceAR(cc.v2(targetNode.x + _offsetX, targetNode.y + _offsetY));
        } else {
          targetWorldPos = cc.v2(targetNode.x + _offsetX, targetNode.y + _offsetY);
        }
        cc.log("[ItemTooltip] 道具节点信息:", {
          nodeName: targetNode.name,
          nodePos: targetNode.position,
          nodeSize: targetSize,
          anchor: targetAnchor,
          offset: {
            x: _offsetX,
            y: _offsetY
          },
          worldPos: targetWorldPos
        });
      } else {
        // 传入的是坐标（兼容旧代码）
        var screenPos;
        if (targetNodeOrPosition instanceof cc.Vec2) {
          screenPos = targetNodeOrPosition;
        } else {
          screenPos = new cc.Vec2(targetNodeOrPosition.x, targetNodeOrPosition.y);
        }

        // 屏幕坐标转换为世界坐标
        if (cc.Canvas.instance && cc.Canvas.instance.node) {
          targetWorldPos = cc.Canvas.instance.node.convertToWorldSpaceAR(screenPos);
        } else {
          targetWorldPos = screenPos;
        }
      }

      // 转换为tooltip父节点的本地坐标
      var parentNode = this.node.parent || cc.director.getScene();
      if (!parentNode) {
        cc.warn("[ItemTooltip] tooltip节点没有父节点，无法计算位置");
        return;
      }
      var localPos = parentNode.convertToNodeSpaceAR(targetWorldPos);

      // 获取tooltip大小和锚点
      var tooltipSize = this.node.getContentSize();
      var tooltipAnchor = this.node.getAnchorPoint();
      var offsetX = 10; // 右侧偏移（像素）
      var offsetY = 10; // 上方偏移（像素）

      // 计算tooltip左下角的位置（因为tooltip的锚点可能在左下角）
      // 道具节点右上角 + 偏移 = tooltip左下角位置
      // 如果tooltip锚点是(0, 0)，那么tooltip位置就是左下角
      // 如果tooltip锚点是(0.5, 0.5)，需要调整
      var finalX = localPos.x + offsetX;
      var finalY = localPos.y + offsetY;

      // 根据tooltip锚点调整位置
      // 如果锚点在左下角(0, 0)，finalX和finalY就是tooltip的位置
      // 如果锚点在中心(0.5, 0.5)，需要减去tooltip大小的一半
      finalX += tooltipSize.width * tooltipAnchor.x;
      finalY += tooltipSize.height * tooltipAnchor.y;

      // 调整位置，避免超出屏幕
      var screenSize = cc.winSize;

      // 计算tooltip的边界（考虑锚点）
      var tooltipLeft = finalX - tooltipSize.width * tooltipAnchor.x;
      var tooltipRight = finalX + tooltipSize.width * (1 - tooltipAnchor.x);
      var tooltipBottom = finalY - tooltipSize.height * tooltipAnchor.y;
      var tooltipTop = finalY + tooltipSize.height * (1 - tooltipAnchor.y);

      // 屏幕边界（Cocos Creator坐标系：中心为原点）
      var screenLeft = -screenSize.width / 2;
      var screenRight = screenSize.width / 2;
      var screenBottom = -screenSize.height / 2;
      var screenTop = screenSize.height / 2;

      // 如果超出右边界，显示在左侧
      if (tooltipRight > screenRight) {
        finalX = localPos.x - tooltipSize.width * (1 - tooltipAnchor.x) - offsetX;
      }

      // 如果超出上边界，显示在下方
      if (tooltipTop > screenTop) {
        finalY = localPos.y - tooltipSize.height * (1 - tooltipAnchor.y) - offsetY;
      }

      // 确保不超出左边界
      var newTooltipLeft = finalX - tooltipSize.width * tooltipAnchor.x;
      if (newTooltipLeft < screenLeft) {
        finalX = screenLeft + tooltipSize.width * tooltipAnchor.x + 10;
      }

      // 确保不超出下边界
      var newTooltipBottom = finalY - tooltipSize.height * tooltipAnchor.y;
      if (newTooltipBottom < screenBottom) {
        finalY = screenBottom + tooltipSize.height * tooltipAnchor.y + 10;
      }
      this.node.setPosition(finalX, finalY);
      cc.log("[ItemTooltip] 位置计算完成:", {
        道具节点世界坐标: targetWorldPos,
        道具节点本地坐标: localPos,
        tooltip位置: {
          x: finalX,
          y: finalY
        },
        tooltip大小: tooltipSize,
        tooltip锚点: tooltipAnchor
      });
    }

    // 显示弹窗
    this.node.active = true;

    // 确保弹窗显示在最上层
    this.node.zIndex = 1000;

    // 添加调试日志
    cc.log("[ItemTooltip] 弹窗已显示，节点active:", this.node.active, "位置:", this.node.position);
  },
  /**
   * 隐藏道具信息
   */
  hideItemInfo: function hideItemInfo() {
    // 清除显示定时器
    if (this._showTimer) {
      clearTimeout(this._showTimer);
      this._showTimer = null;
    }

    // 立即隐藏（右键点击时不需要延迟）
    this.node.active = false;
  },
  /**
   * 立即隐藏（无延迟）
   */
  hideItemInfoImmediate: function hideItemInfoImmediate() {
    this._clearTimers();
    this.node.active = false;
  },
  /**
   * 清除所有定时器
   * @private
   */
  _clearTimers: function _clearTimers() {
    if (this._showTimer) {
      clearTimeout(this._showTimer);
      this._showTimer = null;
    }
    if (this._hideTimer) {
      clearTimeout(this._hideTimer);
      this._hideTimer = null;
    }
  },
  onDestroy: function onDestroy() {
    // 清理定时器
    this._clearTimers();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxJdGVtVG9vbHRpcC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJhY2tncm91bmQiLCJ0eXBlIiwiTm9kZSIsInRvb2x0aXAiLCJuYW1lTGFiZWwiLCJMYWJlbCIsImRlc2NyaXB0aW9uTGFiZWwiLCJlZmZlY3RMYWJlbCIsImNvdW50TGFiZWwiLCJyYXJpdHlMYWJlbCIsInR5cGVMYWJlbCIsInByaWNlTGFiZWwiLCJzaG93RGVsYXkiLCJoaWRlRGVsYXkiLCJvbkxvYWQiLCJub2RlIiwiYWN0aXZlIiwiX3Nob3dUaW1lciIsIl9oaWRlVGltZXIiLCJfaW5pdExheW91dCIsIndhcm4iLCJiZ05vZGUiLCJiZ1NpemUiLCJnZXRDb250ZW50U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwibG9nIiwic2V0Q29udGVudFNpemUiLCJQQURESU5HX1giLCJQQURESU5HX1lfVE9QIiwiUEFERElOR19ZX0JPVFRPTSIsIkxJTkVfU1BBQ0lOR19TTUFMTCIsIkxJTkVfU1BBQ0lOR19NRURJVU0iLCJMSU5FX1NQQUNJTkdfTEFSR0UiLCJzZXR1cExhYmVsIiwibGFiZWxDb21wIiwiZm9udFNpemUiLCJoQWxpZ24iLCJlbmFibGVXcmFwIiwidGV4dENvbG9yIiwiaXNCb2xkIiwicGFyZW50IiwicmVtb3ZlRnJvbVBhcmVudCIsImFkZENoaWxkIiwibGluZUhlaWdodCIsIk1hdGgiLCJyb3VuZCIsImVuYWJsZVdyYXBUZXh0IiwiY29sb3IiLCJDb2xvciIsIm92ZXJmbG93IiwiT3ZlcmZsb3ciLCJSRVNJWkVfSEVJR0hUIiwiTk9ORSIsImhvcml6b250YWxBbGlnbiIsIkhvcml6b250YWxBbGlnbiIsIkNFTlRFUiIsIlJJR0hUIiwiTEVGVCIsIm5hbWVOb2RlIiwiZGVzY05vZGUiLCJlZmZlY3ROb2RlIiwiY291bnROb2RlIiwicmFyaXR5Tm9kZSIsInR5cGVOb2RlIiwicHJpY2VOb2RlIiwiY3VycmVudFkiLCJzdGFydFhMZWZ0Iiwic3RhcnRYQ2VudGVyIiwicGxhY2VOb2RlIiwic3BhY2luZyIsImFsaWduTGVmdCIsInNldEFuY2hvclBvaW50IiwieCIsInkiLCJfdXBkYXRlTGF5b3V0QWZ0ZXJDb250ZW50IiwiYWN0dWFsSGVpZ2h0IiwidG90YWxIZWlnaHQiLCJzaG93SXRlbUluZm8iLCJpdGVtRGF0YSIsInRhcmdldE5vZGVPclBvc2l0aW9uIiwiaXRlbUlkIiwiY2xlYXJUaW1lb3V0IiwiX2RvU2hvd0l0ZW1JbmZvIiwiX3RoaXMiLCJJdGVtQ29uZmlnIiwicmVxdWlyZSIsIml0ZW1Db25maWciLCJnZXRJdGVtQnlJZCIsImRpc3BsYXlOYW1lIiwibmFtZSIsImlkIiwic3RyaW5nIiwiZGVzYyIsImRlc2NyaXB0aW9uIiwiZWZmZWN0VGV4dCIsImVmZmVjdFR5cGUiLCJFZmZlY3RUeXBlIiwiTEVWRUxfVVAiLCJlZmZlY3RWYWx1ZSIsIkVYUCIsIkhQIiwiQVRUQUNLIiwiREVGRU5TRSIsImNvdW50IiwicmFyaXR5TWFwIiwicmFyaXR5VGV4dCIsInJhcml0eSIsInJhcml0eUNvbG9yIiwidHlwZU1hcCIsInR5cGVUZXh0IiwicHJpY2UiLCJzY2hlZHVsZU9uY2UiLCJ0YXJnZXRXb3JsZFBvcyIsInRhcmdldE5vZGUiLCJ0YXJnZXRTaXplIiwidGFyZ2V0QW5jaG9yIiwiZ2V0QW5jaG9yUG9pbnQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInRvcFJpZ2h0SW5Ob2RlIiwidjIiLCJub2RlV29ybGRQb3MiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJwb3NpdGlvbiIsIm5vZGVOYW1lIiwibm9kZVBvcyIsIm5vZGVTaXplIiwiYW5jaG9yIiwib2Zmc2V0Iiwid29ybGRQb3MiLCJzY3JlZW5Qb3MiLCJWZWMyIiwiQ2FudmFzIiwiaW5zdGFuY2UiLCJwYXJlbnROb2RlIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImxvY2FsUG9zIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJ0b29sdGlwU2l6ZSIsInRvb2x0aXBBbmNob3IiLCJmaW5hbFgiLCJmaW5hbFkiLCJzY3JlZW5TaXplIiwid2luU2l6ZSIsInRvb2x0aXBMZWZ0IiwidG9vbHRpcFJpZ2h0IiwidG9vbHRpcEJvdHRvbSIsInRvb2x0aXBUb3AiLCJzY3JlZW5MZWZ0Iiwic2NyZWVuUmlnaHQiLCJzY3JlZW5Cb3R0b20iLCJzY3JlZW5Ub3AiLCJuZXdUb29sdGlwTGVmdCIsIm5ld1Rvb2x0aXBCb3R0b20iLCJzZXRQb3NpdGlvbiIsIumBk+WFt+iKgueCueS4lueVjOWdkOaghyIsIumBk+WFt+iKgueCueacrOWcsOWdkOaghyIsInRvb2x0aXDkvY3nva4iLCJ0b29sdGlw5aSn5bCPIiwidG9vbHRpcOmUmueCuSIsInpJbmRleCIsImhpZGVJdGVtSW5mbyIsImhpZGVJdGVtSW5mb0ltbWVkaWF0ZSIsIl9jbGVhclRpbWVycyIsIm9uRGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1I7SUFDQUMsVUFBVSxFQUFFO01BQ1IsV0FBUyxJQUFJO01BQ2JDLElBQUksRUFBRUwsRUFBRSxDQUFDTSxJQUFJO01BQ2JDLE9BQU8sRUFBRTtJQUNiLENBQUM7SUFFRDtJQUNBQyxTQUFTLEVBQUU7TUFDUCxXQUFTLElBQUk7TUFDYkgsSUFBSSxFQUFFTCxFQUFFLENBQUNTLEtBQUs7TUFDZEYsT0FBTyxFQUFFO0lBQ2IsQ0FBQztJQUVEO0lBQ0FHLGdCQUFnQixFQUFFO01BQ2QsV0FBUyxJQUFJO01BQ2JMLElBQUksRUFBRUwsRUFBRSxDQUFDUyxLQUFLO01BQ2RGLE9BQU8sRUFBRTtJQUNiLENBQUM7SUFFRDtJQUNBSSxXQUFXLEVBQUU7TUFDVCxXQUFTLElBQUk7TUFDYk4sSUFBSSxFQUFFTCxFQUFFLENBQUNTLEtBQUs7TUFDZEYsT0FBTyxFQUFFO0lBQ2Is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QyxNQUFNLEdBQUcsS0FBSztFQUM1QixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSXFKLFlBQVksV0FBQUEsYUFBQSxFQUFHO0lBQ1gsSUFBSSxJQUFJLENBQUNwSixVQUFVLEVBQUU7TUFDakJpRSxZQUFZLENBQUMsSUFBSSxDQUFDakUsVUFBVSxDQUFDO01BQzdCLElBQUksQ0FBQ0EsVUFBVSxHQUFHLElBQUk7SUFDMUI7SUFDQSxJQUFJLElBQUksQ0FBQ0MsVUFBVSxFQUFFO01BQ2pCZ0UsWUFBWSxDQUFDLElBQUksQ0FBQ2hFLFVBQVUsQ0FBQztNQUM3QixJQUFJLENBQUNBLFVBQVUsR0FBRyxJQUFJO0lBQzFCO0VBQ0osQ0FBQztFQUVEb0osU0FBUyxXQUFBQSxVQUFBLEVBQUc7SUFDUjtJQUNBLElBQUksQ0FBQ0QsWUFBWSxFQUFFO0VBQ3ZCO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOmBk+WFt+S/oeaBr+W8ueeql+e7hOS7tlxuICog5pi+56S66YGT5YW355qE6K+m57uG5L+h5oGv77yI5ZCN56ew44CB5o+P6L+w44CB5pWI5p6c562J77yJXG4gKi9cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIOW8ueeql+iDjOaZr1xuICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5by556qX6IOM5pmv6IqC54K5XCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDpgZPlhbflkI3np7DmoIfnrb5cbiAgICAgICAgbmFtZUxhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgICAgICB0b29sdGlwOiBcIumBk+WFt+WQjeensOagh+etvlwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g6YGT5YW35o+P6L+w5qCH562+XG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6YGT5YW35o+P6L+w5qCH562+XCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDmlYjmnpzkv6Hmga/moIfnrb5cbiAgICAgICAgZWZmZWN0TGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5pWI5p6c5L+h5oGv5qCH562+XCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDmlbDph4/moIfnrb5cbiAgICAgICAgY291bnRMYWJlbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmlbDph4/moIfnrb5cIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOeogOacieW6puagh+etvu+8iOWPr+mAie+8iVxuICAgICAgICByYXJpdHlMYWJlbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLnqIDmnInluqbmoIfnrb7vvIjlj6/pgInvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOexu+Wei+agh+etvu+8iOWPr+mAie+8iVxuICAgICAgICB0eXBlTGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi57G75Z6L5qCH562+77yI5Y+v6YCJ77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDku7fmoLzmoIfnrb7vvIjlj6/pgInvvIlcbiAgICAgICAgcHJpY2VMYWJlbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLku7fmoLzmoIfnrb7vvIjlj6/pgInvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOW7tui/n+aYvuekuuaXtumXtO+8iOavq+enku+8ie+8jOmBv+WFjem8oOagh+W/q+mAn+enu+WKqOaXtumikee5geaYvuekui/pmpDol49cbiAgICAgICAgc2hvd0RlbGF5OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAzMDAsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuW7tui/n+aYvuekuuaXtumXtO+8iOavq+enku+8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g6ZqQ6JeP5bu26L+f5pe26Ze077yI5q+r56eS77yJXG4gICAgICAgIGhpZGVEZWxheToge1xuICAgICAgICAgICAgZGVmYXVsdDogMTAwLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLpmpDol4/lu7bov5/ml7bpl7TvvIjmr6vnp5LvvIlcIlxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8g5Yid5aeL6ZqQ6JeP5by556qXXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAvLyDlu7bov5/mmL7npLov6ZqQ6JeP55qE5a6a5pe25ZmoXG4gICAgICAgIHRoaXMuX3Nob3dUaW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuX2hpZGVUaW1lciA9IG51bGw7XG5cbiAgICAgICAgLy8g5Yid5aeL5YyW5a2X5L2T5LiO5biD5bGA77yI56Gu5L+d5Zyo6IOM5pmv6IqC54K55LiL5ZCI55CG5pi+56S677yJXG4gICAgICAgIHRoaXMuX2luaXRMYXlvdXQoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5by556qX5YaF6YOo5ZCE5paH5pys5Zyo6IOM5pmv5LiL55qE5biD5bGA5LiO5qC35byPXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfaW5pdExheW91dCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJhY2tncm91bmQpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJbSXRlbVRvb2x0aXBdIOacque7keWumiBiYWNrZ3JvdW5kIOiKgueCue+8jOaXoOazleiHquWKqOW4g+WxgOaWh+acrFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJnTm9kZSA9IHRoaXMuYmFja2dyb3VuZDtcbiAgICAgICAgY29uc3QgYmdTaXplID0gYmdOb2RlLmdldENvbnRlbnRTaXplKCk7XG4gICAgICAgIGlmICghYmdTaXplIHx8IGJnU2l6ZS53aWR0aCA8PSAwIHx8IGJnU2l6ZS5oZWlnaHQgPD0gMCkge1xuICAgICAgICAgICAgLy8g5aaC5p6c6IOM5pmv6L+Y5rKh6K6+572u5aSn5bCP77yM5Y+v5Lul56iN5ZCO5YaN5qC55o2u6ZyA6KaB6LCD5pW0XG4gICAgICAgICAgICBjYy5sb2coXCJbSXRlbVRvb2x0aXBdIGJhY2tncm91bmQg5bC65a+45Li6IDDvvIzlsIbkvb/nlKjpu5jorqTluIPlsYDlsLrlr7ggKDMwMHgyMjApXCIpO1xuICAgICAgICAgICAgYmdOb2RlLnNldENvbnRlbnRTaXplKDMwMCwgMjIwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOS8mOWMlueahOWGhei+uei3neS4juihjOmXtOi3nVxuICAgICAgICBjb25zdCBQQURESU5HX1ggPSAyMDtcbiAgICAgICAgY29uc3QgUEFERElOR19ZX1RPUCA9IDIwOyAgICAgIC8vIOmhtumDqOWGhei+uei3nVxuICAgICAgICBjb25zdCBQQURESU5HX1lfQk9UVE9NID0gMjA7ICAgLy8g5bqV6YOo5YaF6L656Led77yI5aKe5Yqg5bqV6YOo56m66Ze077yJXG4gICAgICAgIGNvbnN0IExJTkVfU1BBQ0lOR19TTUFMTCA9IDQ7ICAvLyDlsI/pl7Tot53vvIjnlKjkuo7lkIzkuIDnu4Tkv6Hmga/vvIlcbiAgICAgICAgY29uc3QgTElORV9TUEFDSU5HX01FRElVTSA9IDg7IC8vIOS4remXtOi3ne+8iOeUqOS6juS4jeWQjOe7hOS/oeaBr++8iVxuICAgICAgICBjb25zdCBMSU5FX1NQQUNJTkdfTEFSR0UgPSAxMjsgLy8g5aSn6Ze06Led77yI55So5LqO5qCH6aKY5ZKM5YaF5a655LmL6Ze077yJXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWwhuS4gOS4qiBMYWJlbCDoioLngrnmjILliLDog4zmma/kuIvpnaLvvIzlubborr7nva7ln7rnoYDmoLflvI9cbiAgICAgICAgICogQHBhcmFtIHtjYy5MYWJlbH0gbGFiZWxDb21wXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBmb250U2l6ZVxuICAgICAgICAgKiBAcGFyYW0ge1wiTEVGVFwifFwiQ0VOVEVSXCJ8XCJSSUdIVFwifSBoQWxpZ25cbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBlbmFibGVXcmFwXG4gICAgICAgICAqIEBwYXJhbSB7Y2MuQ29sb3J9IHRleHRDb2xvciAtIOaWh+Wtl+minOiJsu+8iOWPr+mAie+8iVxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQm9sZCAtIOaYr+WQpuWKoOeyl++8iOWPr+mAie+8iVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3Qgc2V0dXBMYWJlbCA9IChsYWJlbENvbXAsIGZvbnRTaXplLCBoQWxpZ24sIGVuYWJsZVdyYXAsIHRleHRDb2xvciwgaXNCb2xkKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWxhYmVsQ29tcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGxhYmVsQ29tcC5ub2RlO1xuXG4gICAgICAgICAgICAvLyDnoa7kv53niLboioLngrnmmK8gYmFja2dyb3VuZFxuICAgICAgICAgICAgaWYgKG5vZGUucGFyZW50ICE9PSBiZ05vZGUpIHtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUZyb21QYXJlbnQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJnTm9kZS5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5Z+65pys5a2X5L2T5qC35byPXG4gICAgICAgICAgICBsYWJlbENvbXAuZm9udFNpemUgPSBmb250U2l6ZTtcbiAgICAgICAgICAgIGxhYmVsQ29tcC5saW5lSGVpZ2h0ID0gTWF0aC5yb3VuZChmb250U2l6ZSAqIDEuNCk7IC8vIOWinuWKoOihjOmrmO+8jOaPkOWNh+WPr+ivu+aAp1xuICAgICAgICAgICAgbGFiZWxDb21wLmVuYWJsZVdyYXBUZXh0ID0gISFlbmFibGVXcmFwO1xuXG4gICAgICAgICAgICAvLyDorr7nva7mloflrZfpopzoibLvvIjnoa7kv53popzoibLotrPlpJ/kuq7vvIlcbiAgICAgICAgICAgIGlmICh0ZXh0Q29sb3IpIHtcbiAgICAgICAgICAgICAgICBsYWJlbENvbXAubm9kZS5jb2xvciA9IHRleHRDb2xvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g6buY6K6k57qv55m96Imy77yI5pu05Lqu77yJXG4gICAgICAgICAgICAgICAgbGFiZWxDb21wLm5vZGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5rqi5Ye65qih5byP77ya5o+P6L+w562J5L2/55SoIFJFU0laRV9IRUlHSFTvvIzoh6rpgILlupTpq5jluqZcbiAgICAgICAgICAgIGlmIChlbmFibGVXcmFwKSB7XG4gICAgICAgICAgICAgICAgbGFiZWxDb21wLm92ZXJmbG93ID0gY2MuTGFiZWwuT3ZlcmZsb3cuUkVTSVpFX0hFSUdIVDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGFiZWxDb21wLm92ZXJmbG93ID0gY2MuTGFiZWwuT3ZlcmZsb3cuTk9ORTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5a+56b2Q5pa55byPXG4gICAgICAgICAgICBzd2l0Y2ggKGhBbGlnbikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJDRU5URVJcIjpcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxDb21wLmhvcml6b250YWxBbGlnbiA9IGNjLkxhYmVsLkhvcml6b250YWxBbGlnbi5DRU5URVI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJSSUdIVFwiOlxuICAgICAgICAgICAgICAgICAgICBsYWJlbENvbXAuaG9yaXpvbnRhbEFsaWduID0gY2MuTGFiZWwuSG9yaXpvbnRhbEFsaWduLlJJR0hUO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBsYWJlbENvbXAuaG9yaXpvbnRhbEFsaWduID0gY2MuTGFiZWwuSG9yaXpvbnRhbEFsaWduLkxFRlQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDpu5jorqTlrr3luqbvvJrog4zmma/lrr3luqblh4/ljrvlt6blj7PlhoXovrnot51cbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gYmdOb2RlLndpZHRoIC0gUEFERElOR19YICogMjtcbiAgICAgICAgICAgIG5vZGUuc2V0Q29udGVudFNpemUod2lkdGgsIGxhYmVsQ29tcC5saW5lSGVpZ2h0KTtcblxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g6K6+572u5ZCE5LiqTGFiZWzvvIjkvJjljJblkI7nmoTmoLflvI8gLSDmm7Tkuq7nmoTpopzoibLvvIlcbiAgICAgICAgLy8g5ZCN56ew77ya5bGF5Lit77yM5aSn5a2X5L2T77yM57qv55m96Imy77yM5pu05LquXG4gICAgICAgIGNvbnN0IG5hbWVOb2RlID0gc2V0dXBMYWJlbCh0aGlzLm5hbWVMYWJlbCwgMjYsIFwiQ0VOVEVSXCIsIGZhbHNlLCBuZXcgY2MuQ29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KSwgdHJ1ZSk7XG5cbiAgICAgICAgLy8g5o+P6L+w77ya5bem5a+56b2Q77yM5Lit562J5a2X5L2T77yM5pSv5oyB5o2i6KGM77yM5Lqu55m96ImyXG4gICAgICAgIGNvbnN0IGRlc2NOb2RlID0gc2V0dXBMYWJlbCh0aGlzLmRlc2NyaXB0aW9uTGFiZWwsIDE4LCBcIkxFRlRcIiwgdHJ1ZSwgbmV3IGNjLkNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSksIGZhbHNlKTtcblxuICAgICAgICAvLyDmlYjmnpzvvJrlt6blr7npvZDvvIzkuK3nrYnlrZfkvZPvvIzmlK/mjIHmjaLooYzvvIzkuq7nu7/oibJcbiAgICAgICAgY29uc3QgZWZmZWN0Tm9kZSA9IHNldHVwTGFiZWwodGhpcy5lZmZlY3RMYWJlbCwgMTgsIFwiTEVGVFwiLCB0cnVlLCBuZXcgY2MuQ29sb3IoMTIwLCAyNTUsIDEyMCwgMjU1KSwgZmFsc2UpO1xuXG4gICAgICAgIC8vIOaVsOmHj++8muW3puWvuem9kO+8jOWwj+Wtl+S9k++8jOm7keiJslxuICAgICAgICBjb25zdCBjb3VudE5vZGUgPSBzZXR1cExhYmVsKHRoaXMuY291bnRMYWJlbCwgMTYsIFwiTEVGVFwiLCBmYWxzZSwgbmV3IGNjLkNvbG9yKDAsIDAsIDAsIDI1NSksIGZhbHNlKTtcblxuICAgICAgICAvLyDnqIDmnInluqbvvJrlt6blr7npvZDvvIzlsI/lrZfkvZPvvIzmoLnmja7nqIDmnInluqbkvJrmnInkuI3lkIzpopzoibLvvIjlnKjmmL7npLrml7bliqjmgIHorr7nva7vvIlcbiAgICAgICAgY29uc3QgcmFyaXR5Tm9kZSA9IHNldHVwTGFiZWwodGhpcy5yYXJpdHlMYWJlbCwgMTYsIFwiTEVGVFwiLCBmYWxzZSwgbmV3IGNjLkNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSksIGZhbHNlKTtcblxuICAgICAgICAvLyDnsbvlnovvvJrlt6blr7npvZDvvIzlsI/lrZfkvZPvvIzkuq7nmb3oibJcbiAgICAgICAgY29uc3QgdHlwZU5vZGUgPSBzZXR1cExhYmVsKHRoaXMudHlwZUxhYmVsLCAxNiwgXCJMRUZUXCIsIGZhbHNlLCBuZXcgY2MuQ29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KSwgZmFsc2UpO1xuXG4gICAgICAgIC8vIOS7t+agvO+8muW3puWvuem9kO+8jOWwj+Wtl+S9k++8jOmHkeiJsu+8iOeqgeWHuuaYvuekuu+8iVxuICAgICAgICBjb25zdCBwcmljZU5vZGUgPSBzZXR1cExhYmVsKHRoaXMucHJpY2VMYWJlbCwgMTYsIFwiTEVGVFwiLCBmYWxzZSwgbmV3IGNjLkNvbG9yKDI1NSwgMjE1LCAwLCAyNTUpLCBmYWxzZSk7XG5cbiAgICAgICAgLy8g5LuO5LiK5Yiw5LiL5o6S54mIXG4gICAgICAgIC8vIOWdkOagh+S7pSBiYWNrZ3JvdW5kIOS4uueItuiKgueCue+8jOmUmueCuem7mOiupCAoMC41LCAwLjUpXG4gICAgICAgIGxldCBjdXJyZW50WSA9IGJnTm9kZS5oZWlnaHQgLyAyIC0gUEFERElOR19ZX1RPUDtcbiAgICAgICAgY29uc3Qgc3RhcnRYTGVmdCA9IC1iZ05vZGUud2lkdGggLyAyICsgUEFERElOR19YO1xuICAgICAgICBjb25zdCBzdGFydFhDZW50ZXIgPSAwOyAvLyDlsYXkuK3kvY3nva5cblxuICAgICAgICAvLyDmlL7nva7oioLngrnvvIjmlK/mjIHkuI3lkIznmoTpl7Tot53lkozlr7npvZDmlrnlvI/vvIlcbiAgICAgICAgY29uc3QgcGxhY2VOb2RlID0gKG5vZGUsIHNwYWNpbmcsIGFsaWduTGVmdCA9IHRydWUpID0+IHtcbiAgICAgICAgICAgIGlmICghbm9kZSkgcmV0dXJuO1xuICAgICAgICAgICAgbm9kZS5zZXRBbmNob3JQb2ludChhbGlnbkxlZnQgPyAwIDogMC41LCAxKTsgLy8g5bem5a+56b2Q55SoKDAsMSnvvIzlsYXkuK3nlKgoMC41LDEpXG4gICAgICAgICAgICBub2RlLnggPSBhbGlnbkxlZnQgPyBzdGFydFhMZWZ0IDogc3RhcnRYQ2VudGVyO1xuICAgICAgICAgICAgbm9kZS55ID0gY3VycmVudFk7XG4gICAgICAgICAgICBjdXJyZW50WSAtPSAobm9kZS5oZWlnaHQgKyBzcGFjaW5nKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDluIPlsYDpobrluo/vvIjkvJjljJblkI7nmoTpl7Tot53vvIlcbiAgICAgICAgcGxhY2VOb2RlKG5hbWVOb2RlLCBMSU5FX1NQQUNJTkdfTEFSR0UsIGZhbHNlKTsgLy8g5ZCN56ew5bGF5Lit77yM5aSn6Ze06LedXG4gICAgICAgIHBsYWNlTm9kZShkZXNjTm9kZSwgTElORV9TUEFDSU5HX01FRElVTSwgdHJ1ZSk7IC8vIOaPj+i/sOW3puWvuem9kO+8jOS4remXtOi3nVxuICAgICAgICBwbGFjZU5vZGUoZWZmZWN0Tm9kZSwgTElORV9TUEFDSU5HX01FRElVTSwgdHJ1ZSk7IC8vIOaViOaenOW3puWvuem9kO+8jOS4remXtOi3nVxuXG4gICAgICAgIC8vIOS4i+aWueS/oeaBr+e7hO+8iOaVsOmHj+OAgeeogOacieW6puOAgeexu+Wei+OAgeS7t+agvO+8iS0g5bCP6Ze06LedXG4gICAgICAgIHBsYWNlTm9kZShjb3VudE5vZGUsIExJTkVfU1BBQ0lOR19TTUFMTCwgdHJ1ZSk7XG4gICAgICAgIHBsYWNlTm9kZShyYXJpdHlOb2RlLCBMSU5FX1NQQUNJTkdfU01BTEwsIHRydWUpO1xuICAgICAgICBwbGFjZU5vZGUodHlwZU5vZGUsIExJTkVfU1BBQ0lOR19TTUFMTCwgdHJ1ZSk7XG4gICAgICAgIHBsYWNlTm9kZShwcmljZU5vZGUsIFBBRERJTkdfWV9CT1RUT00sIHRydWUpOyAvLyDmnIDlkI7kuIDkuKrvvIzkvb/nlKjlupXpg6jlhoXovrnot53kvZzkuLrpl7Tot51cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Zyo5YaF5a656K6+572u5ZCO5pu05paw5biD5bGA77yI5aSE55CG5paH5a2X5o2i6KGM5ZCO55qE6auY5bqm5Y+Y5YyW77yJXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfdXBkYXRlTGF5b3V0QWZ0ZXJDb250ZW50KCkge1xuICAgICAgICBpZiAoIXRoaXMuYmFja2dyb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYmdOb2RlID0gdGhpcy5iYWNrZ3JvdW5kO1xuICAgICAgICBjb25zdCBQQURESU5HX1lfVE9QID0gMjA7XG4gICAgICAgIGNvbnN0IFBBRERJTkdfWV9CT1RUT00gPSAyMDtcbiAgICAgICAgY29uc3QgTElORV9TUEFDSU5HX1NNQUxMID0gNDtcbiAgICAgICAgY29uc3QgTElORV9TUEFDSU5HX01FRElVTSA9IDg7XG4gICAgICAgIGNvbnN0IExJTkVfU1BBQ0lOR19MQVJHRSA9IDEyO1xuICAgICAgICBjb25zdCBzdGFydFhMZWZ0ID0gLWJnTm9kZS53aWR0aCAvIDIgKyAyMDtcbiAgICAgICAgY29uc3Qgc3RhcnRYQ2VudGVyID0gMDtcblxuICAgICAgICBsZXQgY3VycmVudFkgPSBiZ05vZGUuaGVpZ2h0IC8gMiAtIFBBRERJTkdfWV9UT1A7XG5cbiAgICAgICAgY29uc3QgcGxhY2VOb2RlID0gKGxhYmVsQ29tcCwgc3BhY2luZywgYWxpZ25MZWZ0ID0gdHJ1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFsYWJlbENvbXAgfHwgIWxhYmVsQ29tcC5ub2RlLmFjdGl2ZSkgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGxhYmVsQ29tcC5ub2RlO1xuICAgICAgICAgICAgbm9kZS5zZXRBbmNob3JQb2ludChhbGlnbkxlZnQgPyAwIDogMC41LCAxKTtcbiAgICAgICAgICAgIG5vZGUueCA9IGFsaWduTGVmdCA/IHN0YXJ0WExlZnQgOiBzdGFydFhDZW50ZXI7XG4gICAgICAgICAgICBub2RlLnkgPSBjdXJyZW50WTtcblxuICAgICAgICAgICAgLy8g5pu05paw6IqC54K56auY5bqm77yI5aaC5p6c5pSv5oyB5o2i6KGM77yJXG4gICAgICAgICAgICBpZiAobGFiZWxDb21wLmVuYWJsZVdyYXBUZXh0ICYmIGxhYmVsQ29tcC5vdmVyZmxvdyA9PT0gY2MuTGFiZWwuT3ZlcmZsb3cuUkVTSVpFX0hFSUdIVCkge1xuICAgICAgICAgICAgICAgIC8vIExhYmVs5Lya6Ieq5Yqo6LCD5pW06auY5bqm77yM5oiR5Lus6ZyA6KaB6I635Y+W5a6e6ZmF6auY5bqmXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0dWFsSGVpZ2h0ID0gbm9kZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgY3VycmVudFkgLT0gKGFjdHVhbEhlaWdodCArIHNwYWNpbmcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50WSAtPSAobm9kZS5oZWlnaHQgKyBzcGFjaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyDph43mlrDluIPlsYDmiYDmnInlj6/op4HnmoTmoIfnrb5cbiAgICAgICAgaWYgKHRoaXMubmFtZUxhYmVsICYmIHRoaXMubmFtZUxhYmVsLm5vZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICBwbGFjZU5vZGUodGhpcy5uYW1lTGFiZWwsIExJTkVfU1BBQ0lOR19MQVJHRSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRlc2NyaXB0aW9uTGFiZWwgJiYgdGhpcy5kZXNjcmlwdGlvbkxhYmVsLm5vZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICBwbGFjZU5vZGUodGhpcy5kZXNjcmlwdGlvbkxhYmVsLCBMSU5FX1NQQUNJTkdfTUVESVVNLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lZmZlY3RMYWJlbCAmJiB0aGlzLmVmZmVjdExhYmVsLm5vZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICBwbGFjZU5vZGUodGhpcy5lZmZlY3RMYWJlbCwgTElORV9TUEFDSU5HX01FRElVTSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY291bnRMYWJlbCAmJiB0aGlzLmNvdW50TGFiZWwubm9kZS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHBsYWNlTm9kZSh0aGlzLmNvdW50TGFiZWwsIExJTkVfU1BBQ0lOR19TTUFMTCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmFyaXR5TGFiZWwgJiYgdGhpcy5yYXJpdHlMYWJlbC5ub2RlLmFjdGl2ZSkge1xuICAgICAgICAgICAgcGxhY2VOb2RlKHRoaXMucmFyaXR5TGFiZWwsIExJTkVfU1BBQ0lOR19TTUFMTCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudHlwZUxhYmVsICYmIHRoaXMudHlwZUxhYmVsLm5vZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICBwbGFjZU5vZGUodGhpcy50eXBlTGFiZWwsIExJTkVfU1BBQ0lOR19TTUFMTCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJpY2VMYWJlbCAmJiB0aGlzLnByaWNlTGFiZWwubm9kZS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHBsYWNlTm9kZSh0aGlzLnByaWNlTGFiZWwsIFBBRERJTkdfWV9CT1RUT00sIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5qC55o2u5a6e6ZmF5YaF5a656auY5bqm6LCD5pW06IOM5pmv5aSn5bCP77yI5Y+v6YCJ77yJXG4gICAgICAgIGNvbnN0IHRvdGFsSGVpZ2h0ID0gYmdOb2RlLmhlaWdodCAvIDIgLSBjdXJyZW50WSArIFBBRERJTkdfWV9CT1RUT007XG4gICAgICAgIGlmICh0b3RhbEhlaWdodCA+IGJnTm9kZS5oZWlnaHQpIHtcbiAgICAgICAgICAgIC8vIOWmguaenOWGheWuuei2heWHuuiDjOaZr++8jOWPr+S7peWKqOaAgeiwg+aVtOiDjOaZr+mrmOW6plxuICAgICAgICAgICAgYmdOb2RlLnNldENvbnRlbnRTaXplKGJnTm9kZS53aWR0aCwgdG90YWxIZWlnaHQpO1xuICAgICAgICAgICAgY2MubG9nKFwiW0l0ZW1Ub29sdGlwXSDog4zmma/pq5jluqblt7LosIPmlbTkuLo6XCIsIHRvdGFsSGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmmL7npLrpgZPlhbfkv6Hmga9cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbURhdGEgLSDpgZPlhbfmlbDmja4geyBpdGVtSWQsIGNvdW50IH1cbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV8Y2MuVmVjMn0gdGFyZ2V0Tm9kZU9yUG9zaXRpb24gLSDnm67moIfoioLngrnvvIjpgZPlhbfmoLzlrZDoioLngrnvvInmiJbkvY3nva7lnZDmoIdcbiAgICAgKi9cbiAgICBzaG93SXRlbUluZm8oaXRlbURhdGEsIHRhcmdldE5vZGVPclBvc2l0aW9uKSB7XG4gICAgICAgIGlmICghaXRlbURhdGEgfHwgIWl0ZW1EYXRhLml0ZW1JZCkge1xuICAgICAgICAgICAgY2Mud2FybihcIltJdGVtVG9vbHRpcF0g6YGT5YW35pWw5o2u5peg5pWIXCIsIGl0ZW1EYXRhKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOa3u+WKoOiwg+ivleaXpeW/l1xuICAgICAgICBjYy5sb2coXCJbSXRlbVRvb2x0aXBdIOaYvuekuumBk+WFt+S/oeaBrzpcIiwgaXRlbURhdGEuaXRlbUlkLCBcIuebruaghzpcIiwgdGFyZ2V0Tm9kZU9yUG9zaXRpb24pO1xuXG4gICAgICAgIC8vIOa4hemZpOmakOiXj+WumuaXtuWZqO+8iOWmguaenOato+WcqOmakOiXj++8jOWPlua2iOmakOiXj++8iVxuICAgICAgICBpZiAodGhpcy5faGlkZVRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5faGlkZVRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuX2hpZGVUaW1lciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmuIXpmaTkuYvliY3nmoTmmL7npLrlrprml7blmahcbiAgICAgICAgaWYgKHRoaXMuX3Nob3dUaW1lcikge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Nob3dUaW1lcik7XG4gICAgICAgICAgICB0aGlzLl9zaG93VGltZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5Y+z6ZSu54K55Ye75oiW6ZW/5oyJ5pe256uL5Y2z5pi+56S677yI5LiN6ZyA6KaB5bu26L+f77yJXG4gICAgICAgIHRoaXMuX2RvU2hvd0l0ZW1JbmZvKGl0ZW1EYXRhLCB0YXJnZXROb2RlT3JQb3NpdGlvbik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWunumZheaYvuekuumBk+WFt+S/oeaBr1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1EYXRhIC0g6YGT5YW35pWw5o2uXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfGNjLlZlYzJ9IHRhcmdldE5vZGVPclBvc2l0aW9uIC0g55uu5qCH6IqC54K55oiW5L2N572uXG4gICAgICovXG4gICAgX2RvU2hvd0l0ZW1JbmZvKGl0ZW1EYXRhLCB0YXJnZXROb2RlT3JQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBJdGVtQ29uZmlnID0gcmVxdWlyZShcIkl0ZW1Db25maWdcIik7XG4gICAgICAgIGNvbnN0IGl0ZW1Db25maWcgPSBJdGVtQ29uZmlnLmdldEl0ZW1CeUlkKGl0ZW1EYXRhLml0ZW1JZCk7XG5cbiAgICAgICAgaWYgKCFpdGVtQ29uZmlnKSB7XG4gICAgICAgICAgICBjYy53YXJuKGBbSXRlbVRvb2x0aXBdIOacquaJvuWIsOmBk+WFt+mFjee9rjogJHtpdGVtRGF0YS5pdGVtSWR9YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDorr7nva7pgZPlhbflkI3np7DvvIjkvJjljJbmmL7npLrvvIlcbiAgICAgICAgaWYgKHRoaXMubmFtZUxhYmVsKSB7XG4gICAgICAgICAgICBjb25zdCBkaXNwbGF5TmFtZSA9IGl0ZW1Db25maWcuZGlzcGxheU5hbWUgfHwgaXRlbUNvbmZpZy5uYW1lIHx8IGl0ZW1Db25maWcuaWQ7XG4gICAgICAgICAgICB0aGlzLm5hbWVMYWJlbC5zdHJpbmcgPSBkaXNwbGF5TmFtZTtcbiAgICAgICAgICAgIC8vIOehruS/neWQjeensOagh+etvuWPr+ingVxuICAgICAgICAgICAgdGhpcy5uYW1lTGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6K6+572u6YGT5YW35o+P6L+w77yI5LyY5YyW5pi+56S677yJXG4gICAgICAgIGlmICh0aGlzLmRlc2NyaXB0aW9uTGFiZWwpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlc2MgPSBpdGVtQ29uZmlnLmRlc2NyaXB0aW9uIHx8IFwi5peg5o+P6L+wXCI7XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uTGFiZWwuc3RyaW5nID0gZGVzYztcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb25MYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyDnoa7kv53mj4/ov7DmloflrZflj6/ku6XmraPnoa7mjaLooYxcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb25MYWJlbC5lbmFibGVXcmFwVGV4dCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDorr7nva7mlYjmnpzkv6Hmga/vvIjkvJjljJbmmL7npLrmoLzlvI/vvIlcbiAgICAgICAgaWYgKHRoaXMuZWZmZWN0TGFiZWwpIHtcbiAgICAgICAgICAgIGxldCBlZmZlY3RUZXh0ID0gXCJcIjtcbiAgICAgICAgICAgIHN3aXRjaCAoaXRlbUNvbmZpZy5lZmZlY3RUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBJdGVtQ29uZmlnLkVmZmVjdFR5cGUuTEVWRUxfVVA6XG4gICAgICAgICAgICAgICAgICAgIGVmZmVjdFRleHQgPSBg5pWI5p6c77ya5o+Q5Y2HICR7aXRlbUNvbmZpZy5lZmZlY3RWYWx1ZSB8fCAxfSDnuqdgO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEl0ZW1Db25maWcuRWZmZWN0VHlwZS5FWFA6XG4gICAgICAgICAgICAgICAgICAgIGVmZmVjdFRleHQgPSBg5pWI5p6c77ya6I635b6XICR7aXRlbUNvbmZpZy5lZmZlY3RWYWx1ZSB8fCAwfSDngrnnu4/pqozlgLxgO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEl0ZW1Db25maWcuRWZmZWN0VHlwZS5IUDpcbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0VGV4dCA9IGDmlYjmnpzvvJrmgaLlpI0gJHtpdGVtQ29uZmlnLmVmZmVjdFZhbHVlIHx8IDB9IOeCueeUn+WRveWAvGA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgSXRlbUNvbmZpZy5FZmZlY3RUeXBlLkFUVEFDSzpcbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0VGV4dCA9IGDmlYjmnpzvvJrlop7liqAgJHtpdGVtQ29uZmlnLmVmZmVjdFZhbHVlIHx8IDB9IOeCueaUu+WHu+WKm2A7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgSXRlbUNvbmZpZy5FZmZlY3RUeXBlLkRFRkVOU0U6XG4gICAgICAgICAgICAgICAgICAgIGVmZmVjdFRleHQgPSBg5pWI5p6c77ya5aKe5YqgICR7aXRlbUNvbmZpZy5lZmZlY3RWYWx1ZSB8fCAwfSDngrnpmLLlvqHliptgO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBlZmZlY3RUZXh0ID0gXCLmlYjmnpzvvJrmnKrnn6VcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZWZmZWN0TGFiZWwuc3RyaW5nID0gZWZmZWN0VGV4dDtcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0TGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgLy8g56Gu5L+d5pWI5p6c5paH5a2X5Y+v5Lul5q2j56Gu5o2i6KGMXG4gICAgICAgICAgICB0aGlzLmVmZmVjdExhYmVsLmVuYWJsZVdyYXBUZXh0ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOiuvue9ruaVsOmHj++8iOS8mOWMluaYvuekuuagvOW8j++8iVxuICAgICAgICBpZiAodGhpcy5jb3VudExhYmVsKSB7XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IGl0ZW1EYXRhLmNvdW50IHx8IDA7XG4gICAgICAgICAgICBpZiAoY291bnQgPiAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudExhYmVsLnN0cmluZyA9IGDmlbDph4/vvJoke2NvdW50fWA7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudExhYmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5pWw6YeP5Li6MeaIljDml7bkuI3mmL7npLrmlbDph4/moIfnrb5cbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50TGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOiuvue9rueogOacieW6pu+8iOWPr+mAie+8iS0g5qC55o2u56iA5pyJ5bqm6K6+572u5LiN5ZCM6aKc6ImyXG4gICAgICAgIGlmICh0aGlzLnJhcml0eUxhYmVsKSB7XG4gICAgICAgICAgICBjb25zdCByYXJpdHlNYXAgPSB7XG4gICAgICAgICAgICAgICAgXCJjb21tb25cIjogXCLmma7pgJpcIixcbiAgICAgICAgICAgICAgICBcInVuY29tbW9uXCI6IFwiIHVuY29tbW9uXCIsXG4gICAgICAgICAgICAgICAgXCJyYXJlXCI6IFwi56iA5pyJXCIsXG4gICAgICAgICAgICAgICAgXCJlcGljXCI6IFwi5Y+y6K+XXCIsXG4gICAgICAgICAgICAgICAgXCJsZWdlbmRhcnlcIjogXCLkvKDor7RcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHJhcml0eVRleHQgPSByYXJpdHlNYXBbaXRlbUNvbmZpZy5yYXJpdHldIHx8IGl0ZW1Db25maWcucmFyaXR5IHx8IFwi5pmu6YCaXCI7XG4gICAgICAgICAgICB0aGlzLnJhcml0eUxhYmVsLnN0cmluZyA9IGDnqIDmnInluqbvvJoke3Jhcml0eVRleHR9YDtcblxuICAgICAgICAgICAgLy8g5qC55o2u56iA5pyJ5bqm6K6+572u6aKc6Imy77yI5pu05Lqu55qE6aKc6Imy77yJXG4gICAgICAgICAgICBsZXQgcmFyaXR5Q29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTsgLy8g6buY6K6k55m96ImyXG4gICAgICAgICAgICBzd2l0Y2ggKGl0ZW1Db25maWcucmFyaXR5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNvbW1vblwiOlxuICAgICAgICAgICAgICAgICAgICByYXJpdHlDb2xvciA9IG5ldyBjYy5Db2xvcigyNDAsIDI0MCwgMjQwLCAyNTUpOyAvLyDkuq7ngbDoibJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInVuY29tbW9uXCI6XG4gICAgICAgICAgICAgICAgICAgIHJhcml0eUNvbG9yID0gbmV3IGNjLkNvbG9yKDgwLCAyNTUsIDgwLCAyNTUpOyAvLyDkuq7nu7/oibJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInJhcmVcIjpcbiAgICAgICAgICAgICAgICAgICAgcmFyaXR5Q29sb3IgPSBuZXcgY2MuQ29sb3IoODAsIDE4MCwgMjU1LCAyNTUpOyAvLyDkuq7ok53oibJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImVwaWNcIjpcbiAgICAgICAgICAgICAgICAgICAgcmFyaXR5Q29sb3IgPSBuZXcgY2MuQ29sb3IoMjIwLCA4MCwgMjU1LCAyNTUpOyAvLyDkuq7ntKvoibJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImxlZ2VuZGFyeVwiOlxuICAgICAgICAgICAgICAgICAgICByYXJpdHlDb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDIyMCwgNjAsIDI1NSk7IC8vIOS6rumHkeiJslxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmFyaXR5TGFiZWwubm9kZS5jb2xvciA9IHJhcml0eUNvbG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6K6+572u57G75Z6L77yI5Y+v6YCJ77yJLSDkvJjljJbmmL7npLpcbiAgICAgICAgaWYgKHRoaXMudHlwZUxhYmVsKSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlTWFwID0ge1xuICAgICAgICAgICAgICAgIFwiY29uc3VtYWJsZVwiOiBcIua2iOiAl+WTgVwiLFxuICAgICAgICAgICAgICAgIFwiZXF1aXBtZW50XCI6IFwi6KOF5aSHXCIsXG4gICAgICAgICAgICAgICAgXCJtYXRlcmlhbFwiOiBcIuadkOaWmVwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgdHlwZVRleHQgPSB0eXBlTWFwW2l0ZW1Db25maWcudHlwZV0gfHwgaXRlbUNvbmZpZy50eXBlIHx8IFwi5pyq55+lXCI7XG4gICAgICAgICAgICB0aGlzLnR5cGVMYWJlbC5zdHJpbmcgPSBg57G75Z6L77yaJHt0eXBlVGV4dH1gO1xuICAgICAgICAgICAgdGhpcy50eXBlTGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6K6+572u5Lu35qC877yI5Y+v6YCJ77yJLSDkvJjljJbmmL7npLpcbiAgICAgICAgaWYgKHRoaXMucHJpY2VMYWJlbCkge1xuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBpdGVtQ29uZmlnLnByaWNlIHx8IDA7XG4gICAgICAgICAgICBpZiAocHJpY2UgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZUxhYmVsLnN0cmluZyA9IGDku7fmoLzvvJoke3ByaWNlfSDph5HluIFgO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VMYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8g56Gu5L+d5Lu35qC85qCH562+5L2/55So6YeR6ImyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZUxhYmVsLm5vZGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LCAyMTUsIDAsIDI1NSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOayoeacieS7t+agvOaIluS7t+agvOS4ujDvvIzpmpDol4/ku7fmoLzmoIfnrb5cbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlTGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaYvuekuuS/oeaBr+WQju+8jOmHjeaWsOiwg+aVtOW4g+WxgO+8iOehruS/neaWh+Wtl+aNouihjOWQjuS9jee9ruato+ehru+8iVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVMYXlvdXRBZnRlckNvbnRlbnQoKTtcbiAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgLy8g6K6+572u5L2N572u77yI5pi+56S65Zyo6YGT5YW36IqC54K555qE5Y+z5LiK5pa577yJXG4gICAgICAgIGlmICh0YXJnZXROb2RlT3JQb3NpdGlvbikge1xuICAgICAgICAgICAgbGV0IHRhcmdldFdvcmxkUG9zO1xuXG4gICAgICAgICAgICAvLyDliKTmlq3kvKDlhaXnmoTmmK/oioLngrnov5jmmK/lnZDmoIdcbiAgICAgICAgICAgIGlmICh0YXJnZXROb2RlT3JQb3NpdGlvbiBpbnN0YW5jZW9mIGNjLk5vZGUpIHtcbiAgICAgICAgICAgICAgICAvLyDkvKDlhaXnmoTmmK/pgZPlhbfmoLzlrZDoioLngrnvvIzorqHnrpflhbblj7PkuIrop5LnmoTkuJbnlYzlnZDmoIdcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXROb2RlID0gdGFyZ2V0Tm9kZU9yUG9zaXRpb247XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U2l6ZSA9IHRhcmdldE5vZGUuZ2V0Q29udGVudFNpemUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRBbmNob3IgPSB0YXJnZXROb2RlLmdldEFuY2hvclBvaW50KCk7XG5cbiAgICAgICAgICAgICAgICAvLyDorqHnrpfoioLngrnlj7PkuIrop5LnmoTmnKzlnLDlnZDmoIfvvIjnm7jlr7nkuo7oioLngrnplJrngrnvvIlcbiAgICAgICAgICAgICAgICAvLyDlj7PkuIrop5Lnm7jlr7nkuo7plJrngrnnmoTlgY/np7sgPSAo5a695bqmICogKDEgLSBhbmNob3JYKSwg6auY5bqmICogKDEgLSBhbmNob3JZKSlcbiAgICAgICAgICAgICAgICAvLyDlm6DkuLrplJrngrnpgJrluLjlnKgoMC41LCAwLjUp77yM5omA5Lul5Y+z5LiK6KeSID0gKHdpZHRoLzIsIGhlaWdodC8yKVxuICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldFggPSB0YXJnZXRTaXplLndpZHRoICogKDEgLSB0YXJnZXRBbmNob3IueCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IHRhcmdldFNpemUuaGVpZ2h0ICogKDEgLSB0YXJnZXRBbmNob3IueSk7XG5cbiAgICAgICAgICAgICAgICAvLyDoioLngrnlj7PkuIrop5LlnKjoioLngrnmnKzlnLDlnZDmoIfns7vkuK3nmoTkvY3nva7vvIjnm7jlr7nkuo7oioLngrnkvY3nva7vvIlcbiAgICAgICAgICAgICAgICBjb25zdCB0b3BSaWdodEluTm9kZSA9IGNjLnYyKG9mZnNldFgsIG9mZnNldFkpO1xuXG4gICAgICAgICAgICAgICAgLy8g6L2s5o2i5Li65LiW55WM5Z2Q5qCHXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldE5vZGUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWFiOi9rOaNouS4uueItuiKgueCueeahOS4lueVjOWdkOagh1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub2RlV29ybGRQb3MgPSB0YXJnZXROb2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGFyZ2V0Tm9kZS5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIC8vIOeEtuWQjuWKoOS4iuWPs+S4iuinkueahOWBj+enu++8iOmcgOimgeiAg+iZkeiKgueCueeahOaXi+i9rOWSjOe8qeaUvu+8iVxuICAgICAgICAgICAgICAgICAgICAvLyDnroDljJblpITnkIbvvJrnm7TmjqXkvb/nlKjoioLngrnkvY3nva4gKyDlgY/np7tcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0V29ybGRQb3MgPSB0YXJnZXROb2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy52Mih0YXJnZXROb2RlLnggKyBvZmZzZXRYLCB0YXJnZXROb2RlLnkgKyBvZmZzZXRZKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFdvcmxkUG9zID0gY2MudjIodGFyZ2V0Tm9kZS54ICsgb2Zmc2V0WCwgdGFyZ2V0Tm9kZS55ICsgb2Zmc2V0WSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiW0l0ZW1Ub29sdGlwXSDpgZPlhbfoioLngrnkv6Hmga86XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZU5hbWU6IHRhcmdldE5vZGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbm9kZVBvczogdGFyZ2V0Tm9kZS5wb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbm9kZVNpemU6IHRhcmdldFNpemUsXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvcjogdGFyZ2V0QW5jaG9yLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IHsgeDogb2Zmc2V0WCwgeTogb2Zmc2V0WSB9LFxuICAgICAgICAgICAgICAgICAgICB3b3JsZFBvczogdGFyZ2V0V29ybGRQb3NcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5Lyg5YWl55qE5piv5Z2Q5qCH77yI5YW85a655pen5Luj56CB77yJXG4gICAgICAgICAgICAgICAgbGV0IHNjcmVlblBvcztcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Tm9kZU9yUG9zaXRpb24gaW5zdGFuY2VvZiBjYy5WZWMyKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcmVlblBvcyA9IHRhcmdldE5vZGVPclBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcmVlblBvcyA9IG5ldyBjYy5WZWMyKHRhcmdldE5vZGVPclBvc2l0aW9uLngsIHRhcmdldE5vZGVPclBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIOWxj+W5leWdkOagh+i9rOaNouS4uuS4lueVjOWdkOagh1xuICAgICAgICAgICAgICAgIGlmIChjYy5DYW52YXMuaW5zdGFuY2UgJiYgY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0V29ybGRQb3MgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoc2NyZWVuUG9zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRXb3JsZFBvcyA9IHNjcmVlblBvcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOi9rOaNouS4unRvb2x0aXDniLboioLngrnnmoTmnKzlnLDlnZDmoIdcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSB0aGlzLm5vZGUucGFyZW50IHx8IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XG4gICAgICAgICAgICBpZiAoIXBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwiW0l0ZW1Ub29sdGlwXSB0b29sdGlw6IqC54K55rKh5pyJ54i26IqC54K577yM5peg5rOV6K6h566X5L2N572uXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbG9jYWxQb3MgPSBwYXJlbnROb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHRhcmdldFdvcmxkUG9zKTtcblxuICAgICAgICAgICAgLy8g6I635Y+WdG9vbHRpcOWkp+Wwj+WSjOmUmueCuVxuICAgICAgICAgICAgY29uc3QgdG9vbHRpcFNpemUgPSB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKTtcbiAgICAgICAgICAgIGNvbnN0IHRvb2x0aXBBbmNob3IgPSB0aGlzLm5vZGUuZ2V0QW5jaG9yUG9pbnQoKTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldFggPSAxMDsgLy8g5Y+z5L6n5YGP56e777yI5YOP57Sg77yJXG4gICAgICAgICAgICBjb25zdCBvZmZzZXRZID0gMTA7IC8vIOS4iuaWueWBj+enu++8iOWDj+e0oO+8iVxuXG4gICAgICAgICAgICAvLyDorqHnrpd0b29sdGlw5bem5LiL6KeS55qE5L2N572u77yI5Zug5Li6dG9vbHRpcOeahOmUmueCueWPr+iDveWcqOW3puS4i+inku+8iVxuICAgICAgICAgICAgLy8g6YGT5YW36IqC54K55Y+z5LiK6KeSICsg5YGP56e7ID0gdG9vbHRpcOW3puS4i+inkuS9jee9rlxuICAgICAgICAgICAgLy8g5aaC5p6cdG9vbHRpcOmUmueCueaYrygwLCAwKe+8jOmCo+S5iHRvb2x0aXDkvY3nva7lsLHmmK/lt6bkuIvop5JcbiAgICAgICAgICAgIC8vIOWmguaenHRvb2x0aXDplJrngrnmmK8oMC41LCAwLjUp77yM6ZyA6KaB6LCD5pW0XG4gICAgICAgICAgICBsZXQgZmluYWxYID0gbG9jYWxQb3MueCArIG9mZnNldFg7XG4gICAgICAgICAgICBsZXQgZmluYWxZID0gbG9jYWxQb3MueSArIG9mZnNldFk7XG5cbiAgICAgICAgICAgIC8vIOagueaNrnRvb2x0aXDplJrngrnosIPmlbTkvY3nva5cbiAgICAgICAgICAgIC8vIOWmguaenOmUmueCueWcqOW3puS4i+inkigwLCAwKe+8jGZpbmFsWOWSjGZpbmFsWeWwseaYr3Rvb2x0aXDnmoTkvY3nva5cbiAgICAgICAgICAgIC8vIOWmguaenOmUmueCueWcqOS4reW/gygwLjUsIDAuNSnvvIzpnIDopoHlh4/ljrt0b29sdGlw5aSn5bCP55qE5LiA5Y2KXG4gICAgICAgICAgICBmaW5hbFggKz0gdG9vbHRpcFNpemUud2lkdGggKiB0b29sdGlwQW5jaG9yLng7XG4gICAgICAgICAgICBmaW5hbFkgKz0gdG9vbHRpcFNpemUuaGVpZ2h0ICogdG9vbHRpcEFuY2hvci55O1xuXG4gICAgICAgICAgICAvLyDosIPmlbTkvY3nva7vvIzpgb/lhY3otoXlh7rlsY/luZVcbiAgICAgICAgICAgIGNvbnN0IHNjcmVlblNpemUgPSBjYy53aW5TaXplO1xuXG4gICAgICAgICAgICAvLyDorqHnrpd0b29sdGlw55qE6L6555WM77yI6ICD6JmR6ZSa54K577yJXG4gICAgICAgICAgICBjb25zdCB0b29sdGlwTGVmdCA9IGZpbmFsWCAtIHRvb2x0aXBTaXplLndpZHRoICogdG9vbHRpcEFuY2hvci54O1xuICAgICAgICAgICAgY29uc3QgdG9vbHRpcFJpZ2h0ID0gZmluYWxYICsgdG9vbHRpcFNpemUud2lkdGggKiAoMSAtIHRvb2x0aXBBbmNob3IueCk7XG4gICAgICAgICAgICBjb25zdCB0b29sdGlwQm90dG9tID0gZmluYWxZIC0gdG9vbHRpcFNpemUuaGVpZ2h0ICogdG9vbHRpcEFuY2hvci55O1xuICAgICAgICAgICAgY29uc3QgdG9vbHRpcFRvcCA9IGZpbmFsWSArIHRvb2x0aXBTaXplLmhlaWdodCAqICgxIC0gdG9vbHRpcEFuY2hvci55KTtcblxuICAgICAgICAgICAgLy8g5bGP5bmV6L6555WM77yIQ29jb3MgQ3JlYXRvcuWdkOagh+ezu++8muS4reW/g+S4uuWOn+eCue+8iVxuICAgICAgICAgICAgY29uc3Qgc2NyZWVuTGVmdCA9IC1zY3JlZW5TaXplLndpZHRoIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IHNjcmVlblJpZ2h0ID0gc2NyZWVuU2l6ZS53aWR0aCAvIDI7XG4gICAgICAgICAgICBjb25zdCBzY3JlZW5Cb3R0b20gPSAtc2NyZWVuU2l6ZS5oZWlnaHQgLyAyO1xuICAgICAgICAgICAgY29uc3Qgc2NyZWVuVG9wID0gc2NyZWVuU2l6ZS5oZWlnaHQgLyAyO1xuXG4gICAgICAgICAgICAvLyDlpoLmnpzotoXlh7rlj7PovrnnlYzvvIzmmL7npLrlnKjlt6bkvqdcbiAgICAgICAgICAgIGlmICh0b29sdGlwUmlnaHQgPiBzY3JlZW5SaWdodCkge1xuICAgICAgICAgICAgICAgIGZpbmFsWCA9IGxvY2FsUG9zLnggLSB0b29sdGlwU2l6ZS53aWR0aCAqICgxIC0gdG9vbHRpcEFuY2hvci54KSAtIG9mZnNldFg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOWmguaenOi2heWHuuS4iui+ueeVjO+8jOaYvuekuuWcqOS4i+aWuVxuICAgICAgICAgICAgaWYgKHRvb2x0aXBUb3AgPiBzY3JlZW5Ub3ApIHtcbiAgICAgICAgICAgICAgICBmaW5hbFkgPSBsb2NhbFBvcy55IC0gdG9vbHRpcFNpemUuaGVpZ2h0ICogKDEgLSB0b29sdGlwQW5jaG9yLnkpIC0gb2Zmc2V0WTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g56Gu5L+d5LiN6LaF5Ye65bem6L6555WMXG4gICAgICAgICAgICBjb25zdCBuZXdUb29sdGlwTGVmdCA9IGZpbmFsWCAtIHRvb2x0aXBTaXplLndpZHRoICogdG9vbHRpcEFuY2hvci54O1xuICAgICAgICAgICAgaWYgKG5ld1Rvb2x0aXBMZWZ0IDwgc2NyZWVuTGVmdCkge1xuICAgICAgICAgICAgICAgIGZpbmFsWCA9IHNjcmVlbkxlZnQgKyB0b29sdGlwU2l6ZS53aWR0aCAqIHRvb2x0aXBBbmNob3IueCArIDEwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDnoa7kv53kuI3otoXlh7rkuIvovrnnlYxcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rvb2x0aXBCb3R0b20gPSBmaW5hbFkgLSB0b29sdGlwU2l6ZS5oZWlnaHQgKiB0b29sdGlwQW5jaG9yLnk7XG4gICAgICAgICAgICBpZiAobmV3VG9vbHRpcEJvdHRvbSA8IHNjcmVlbkJvdHRvbSkge1xuICAgICAgICAgICAgICAgIGZpbmFsWSA9IHNjcmVlbkJvdHRvbSArIHRvb2x0aXBTaXplLmhlaWdodCAqIHRvb2x0aXBBbmNob3IueSArIDEwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oZmluYWxYLCBmaW5hbFkpO1xuXG4gICAgICAgICAgICBjYy5sb2coXCJbSXRlbVRvb2x0aXBdIOS9jee9ruiuoeeul+WujOaIkDpcIiwge1xuICAgICAgICAgICAgICAgIOmBk+WFt+iKgueCueS4lueVjOWdkOaghzogdGFyZ2V0V29ybGRQb3MsXG4gICAgICAgICAgICAgICAg6YGT5YW36IqC54K55pys5Zyw5Z2Q5qCHOiBsb2NhbFBvcyxcbiAgICAgICAgICAgICAgICB0b29sdGlw5L2N572uOiB7IHg6IGZpbmFsWCwgeTogZmluYWxZIH0sXG4gICAgICAgICAgICAgICAgdG9vbHRpcOWkp+WwjzogdG9vbHRpcFNpemUsXG4gICAgICAgICAgICAgICAgdG9vbHRpcOmUmueCuTogdG9vbHRpcEFuY2hvclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmmL7npLrlvLnnqpdcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgLy8g56Gu5L+d5by556qX5pi+56S65Zyo5pyA5LiK5bGCXG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggPSAxMDAwO1xuXG4gICAgICAgIC8vIOa3u+WKoOiwg+ivleaXpeW/l1xuICAgICAgICBjYy5sb2coXCJbSXRlbVRvb2x0aXBdIOW8ueeql+W3suaYvuekuu+8jOiKgueCuWFjdGl2ZTpcIiwgdGhpcy5ub2RlLmFjdGl2ZSwgXCLkvY3nva46XCIsIHRoaXMubm9kZS5wb3NpdGlvbik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOmakOiXj+mBk+WFt+S/oeaBr1xuICAgICAqL1xuICAgIGhpZGVJdGVtSW5mbygpIHtcbiAgICAgICAgLy8g5riF6Zmk5pi+56S65a6a5pe25ZmoXG4gICAgICAgIGlmICh0aGlzLl9zaG93VGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zaG93VGltZXIpO1xuICAgICAgICAgICAgdGhpcy5fc2hvd1RpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOeri+WNs+makOiXj++8iOWPs+mUrueCueWHu+aXtuS4jemcgOimgeW7tui/n++8iVxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOeri+WNs+makOiXj++8iOaXoOW7tui/n++8iVxuICAgICAqL1xuICAgIGhpZGVJdGVtSW5mb0ltbWVkaWF0ZSgpIHtcbiAgICAgICAgdGhpcy5fY2xlYXJUaW1lcnMoKTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmuIXpmaTmiYDmnInlrprml7blmahcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9jbGVhclRpbWVycygpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Nob3dUaW1lcikge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Nob3dUaW1lcik7XG4gICAgICAgICAgICB0aGlzLl9zaG93VGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9oaWRlVGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9oaWRlVGltZXIpO1xuICAgICAgICAgICAgdGhpcy5faGlkZVRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIC8vIOa4heeQhuWumuaXtuWZqFxuICAgICAgICB0aGlzLl9jbGVhclRpbWVycygpO1xuICAgIH1cbn0pO1xuIl19