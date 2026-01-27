/**
 * 道具信息弹窗组件
 * 显示道具的详细信息（名称、描述、效果等）
 */
cc.Class({
    extends: cc.Component,

    properties: {
        // 弹窗背景
        background: {
            default: null,
            type: cc.Node,
            tooltip: "弹窗背景节点"
        },

        // 道具名称标签
        nameLabel: {
            default: null,
            type: cc.Label,
            tooltip: "道具名称标签"
        },

        // 道具描述标签
        descriptionLabel: {
            default: null,
            type: cc.Label,
            tooltip: "道具描述标签"
        },

        // 效果信息标签
        effectLabel: {
            default: null,
            type: cc.Label,
            tooltip: "效果信息标签"
        },

        // 数量标签
        countLabel: {
            default: null,
            type: cc.Label,
            tooltip: "数量标签"
        },

        // 稀有度标签（可选）
        rarityLabel: {
            default: null,
            type: cc.Label,
            tooltip: "稀有度标签（可选）"
        },

        // 类型标签（可选）
        typeLabel: {
            default: null,
            type: cc.Label,
            tooltip: "类型标签（可选）"
        },

        // 价格标签（可选）
        priceLabel: {
            default: null,
            type: cc.Label,
            tooltip: "价格标签（可选）"
        },

        // 延迟显示时间（毫秒），避免鼠标快速移动时频繁显示/隐藏
        showDelay: {
            default: 300,
            tooltip: "延迟显示时间（毫秒）"
        },

        // 隐藏延迟时间（毫秒）
        hideDelay: {
            default: 100,
            tooltip: "隐藏延迟时间（毫秒）"
        }
    },

    onLoad() {
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
    _initLayout() {
        if (!this.background) {
            cc.warn("[ItemTooltip] 未绑定 background 节点，无法自动布局文本");
            return;
        }

        const bgNode = this.background;
        const bgSize = bgNode.getContentSize();
        if (!bgSize || bgSize.width <= 0 || bgSize.height <= 0) {
            // 如果背景还没设置大小，可以稍后再根据需要调整
            cc.log("[ItemTooltip] background 尺寸为 0，将使用默认布局尺寸 (300x220)");
            bgNode.setContentSize(300, 220);
        }

        // 优化的内边距与行间距
        const PADDING_X = 20;
        const PADDING_Y_TOP = 20;      // 顶部内边距
        const PADDING_Y_BOTTOM = 20;   // 底部内边距（增加底部空间）
        const LINE_SPACING_SMALL = 4;  // 小间距（用于同一组信息）
        const LINE_SPACING_MEDIUM = 8; // 中间距（用于不同组信息）
        const LINE_SPACING_LARGE = 12; // 大间距（用于标题和内容之间）

        /**
         * 将一个 Label 节点挂到背景下面，并设置基础样式
         * @param {cc.Label} labelComp
         * @param {number} fontSize
         * @param {"LEFT"|"CENTER"|"RIGHT"} hAlign
         * @param {boolean} enableWrap
         * @param {cc.Color} textColor - 文字颜色（可选）
         * @param {boolean} isBold - 是否加粗（可选）
         */
        const setupLabel = (labelComp, fontSize, hAlign, enableWrap, textColor, isBold) => {
            if (!labelComp) {
                return null;
            }
            const node = labelComp.node;

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
            const width = bgNode.width - PADDING_X * 2;
            node.setContentSize(width, labelComp.lineHeight);

            return node;
        };

        // 设置各个Label（优化后的样式 - 更亮的颜色）
        // 名称：居中，大字体，纯白色，更亮
        const nameNode = setupLabel(this.nameLabel, 26, "CENTER", false, new cc.Color(255, 255, 255, 255), true);

        // 描述：左对齐，中等字体，支持换行，亮白色
        const descNode = setupLabel(this.descriptionLabel, 18, "LEFT", true, new cc.Color(255, 255, 255, 255), false);

        // 效果：左对齐，中等字体，支持换行，亮绿色
        const effectNode = setupLabel(this.effectLabel, 18, "LEFT", true, new cc.Color(120, 255, 120, 255), false);

        // 数量：左对齐，小字体，黑色
        const countNode = setupLabel(this.countLabel, 16, "LEFT", false, new cc.Color(0, 0, 0, 255), false);

        // 稀有度：左对齐，小字体，根据稀有度会有不同颜色（在显示时动态设置）
        const rarityNode = setupLabel(this.rarityLabel, 16, "LEFT", false, new cc.Color(255, 255, 255, 255), false);

        // 类型：左对齐，小字体，亮白色
        const typeNode = setupLabel(this.typeLabel, 16, "LEFT", false, new cc.Color(255, 255, 255, 255), false);

        // 价格：左对齐，小字体，金色（突出显示）
        const priceNode = setupLabel(this.priceLabel, 16, "LEFT", false, new cc.Color(255, 215, 0, 255), false);

        // 从上到下排版
        // 坐标以 background 为父节点，锚点默认 (0.5, 0.5)
        let currentY = bgNode.height / 2 - PADDING_Y_TOP;
        const startXLeft = -bgNode.width / 2 + PADDING_X;
        const startXCenter = 0; // 居中位置

        // 放置节点（支持不同的间距和对齐方式）
        const placeNode = (node, spacing, alignLeft = true) => {
            if (!node) return;
            node.setAnchorPoint(alignLeft ? 0 : 0.5, 1); // 左对齐用(0,1)，居中用(0.5,1)
            node.x = alignLeft ? startXLeft : startXCenter;
            node.y = currentY;
            currentY -= (node.height + spacing);
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
    _updateLayoutAfterContent() {
        if (!this.background) {
            return;
        }

        const bgNode = this.background;
        const PADDING_Y_TOP = 20;
        const PADDING_Y_BOTTOM = 20;
        const LINE_SPACING_SMALL = 4;
        const LINE_SPACING_MEDIUM = 8;
        const LINE_SPACING_LARGE = 12;
        const startXLeft = -bgNode.width / 2 + 20;
        const startXCenter = 0;

        let currentY = bgNode.height / 2 - PADDING_Y_TOP;

        const placeNode = (labelComp, spacing, alignLeft = true) => {
            if (!labelComp || !labelComp.node.active) return;
            const node = labelComp.node;
            node.setAnchorPoint(alignLeft ? 0 : 0.5, 1);
            node.x = alignLeft ? startXLeft : startXCenter;
            node.y = currentY;

            // 更新节点高度（如果支持换行）
            if (labelComp.enableWrapText && labelComp.overflow === cc.Label.Overflow.RESIZE_HEIGHT) {
                // Label会自动调整高度，我们需要获取实际高度
                const actualHeight = node.height;
                currentY -= (actualHeight + spacing);
            } else {
                currentY -= (node.height + spacing);
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
        const totalHeight = bgNode.height / 2 - currentY + PADDING_Y_BOTTOM;
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
    showItemInfo(itemData, targetNodeOrPosition) {
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
    _doShowItemInfo(itemData, targetNodeOrPosition) {
        const ItemConfig = require("ItemConfig");
        const itemConfig = ItemConfig.getItemById(itemData.itemId);

        if (!itemConfig) {
            cc.warn(`[ItemTooltip] 未找到道具配置: ${itemData.itemId}`);
            return;
        }

        // 设置道具名称（优化显示）
        if (this.nameLabel) {
            const displayName = itemConfig.displayName || itemConfig.name || itemConfig.id;
            this.nameLabel.string = displayName;
            // 确保名称标签可见
            this.nameLabel.node.active = true;
        }

        // 设置道具描述（优化显示）
        if (this.descriptionLabel) {
            const desc = itemConfig.description || "无描述";
            this.descriptionLabel.string = desc;
            this.descriptionLabel.node.active = true;
            // 确保描述文字可以正确换行
            this.descriptionLabel.enableWrapText = true;
        }

        // 设置效果信息（优化显示格式）
        if (this.effectLabel) {
            let effectText = "";
            switch (itemConfig.effectType) {
                case ItemConfig.EffectType.LEVEL_UP:
                    effectText = `效果：提升 ${itemConfig.effectValue || 1} 级`;
                    break;
                case ItemConfig.EffectType.EXP:
                    effectText = `效果：获得 ${itemConfig.effectValue || 0} 点经验值`;
                    break;
                case ItemConfig.EffectType.HP:
                    effectText = `效果：恢复 ${itemConfig.effectValue || 0} 点生命值`;
                    break;
                case ItemConfig.EffectType.ATTACK:
                    effectText = `效果：增加 ${itemConfig.effectValue || 0} 点攻击力`;
                    break;
                case ItemConfig.EffectType.DEFENSE:
                    effectText = `效果：增加 ${itemConfig.effectValue || 0} 点防御力`;
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
            const count = itemData.count || 0;
            if (count > 1) {
                this.countLabel.string = `数量：${count}`;
                this.countLabel.node.active = true;
            } else {
                // 数量为1或0时不显示数量标签
                this.countLabel.node.active = false;
            }
        }

        // 设置稀有度（可选）- 根据稀有度设置不同颜色
        if (this.rarityLabel) {
            const rarityMap = {
                "common": "普通",
                "uncommon": " uncommon",
                "rare": "稀有",
                "epic": "史诗",
                "legendary": "传说"
            };
            const rarityText = rarityMap[itemConfig.rarity] || itemConfig.rarity || "普通";
            this.rarityLabel.string = `稀有度：${rarityText}`;

            // 根据稀有度设置颜色（更亮的颜色）
            let rarityColor = new cc.Color(255, 255, 255, 255); // 默认白色
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
            const typeMap = {
                "consumable": "消耗品",
                "equipment": "装备",
                "material": "材料"
            };
            const typeText = typeMap[itemConfig.type] || itemConfig.type || "未知";
            this.typeLabel.string = `类型：${typeText}`;
            this.typeLabel.node.active = true;
        }

        // 设置价格（可选）- 优化显示
        if (this.priceLabel) {
            const price = itemConfig.price || 0;
            if (price > 0) {
                this.priceLabel.string = `价格：${price} 金币`;
                this.priceLabel.node.active = true;
                // 确保价格标签使用金色
                this.priceLabel.node.color = new cc.Color(255, 215, 0, 255);
            } else {
                // 如果没有价格或价格为0，隐藏价格标签
                this.priceLabel.node.active = false;
            }
        }

        // 显示信息后，重新调整布局（确保文字换行后位置正确）
        this.scheduleOnce(() => {
            this._updateLayoutAfterContent();
        }, 0);

        // 设置位置（显示在道具节点的右上方）
        if (targetNodeOrPosition) {
            let targetWorldPos;

            // 判断传入的是节点还是坐标
            if (targetNodeOrPosition instanceof cc.Node) {
                // 传入的是道具格子节点，计算其右上角的世界坐标
                const targetNode = targetNodeOrPosition;
                const targetSize = targetNode.getContentSize();
                const targetAnchor = targetNode.getAnchorPoint();

                // 计算节点右上角的本地坐标（相对于节点锚点）
                // 右上角相对于锚点的偏移 = (宽度 * (1 - anchorX), 高度 * (1 - anchorY))
                // 因为锚点通常在(0.5, 0.5)，所以右上角 = (width/2, height/2)
                const offsetX = targetSize.width * (1 - targetAnchor.x);
                const offsetY = targetSize.height * (1 - targetAnchor.y);

                // 节点右上角在节点本地坐标系中的位置（相对于节点位置）
                const topRightInNode = cc.v2(offsetX, offsetY);

                // 转换为世界坐标
                if (targetNode.parent) {
                    // 先转换为父节点的世界坐标
                    const nodeWorldPos = targetNode.parent.convertToWorldSpaceAR(targetNode.position);
                    // 然后加上右上角的偏移（需要考虑节点的旋转和缩放）
                    // 简化处理：直接使用节点位置 + 偏移
                    targetWorldPos = targetNode.parent.convertToWorldSpaceAR(
                        cc.v2(targetNode.x + offsetX, targetNode.y + offsetY)
                    );
                } else {
                    targetWorldPos = cc.v2(targetNode.x + offsetX, targetNode.y + offsetY);
                }

                cc.log("[ItemTooltip] 道具节点信息:", {
                    nodeName: targetNode.name,
                    nodePos: targetNode.position,
                    nodeSize: targetSize,
                    anchor: targetAnchor,
                    offset: { x: offsetX, y: offsetY },
                    worldPos: targetWorldPos
                });
            } else {
                // 传入的是坐标（兼容旧代码）
                let screenPos;
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
            const parentNode = this.node.parent || cc.director.getScene();
            if (!parentNode) {
                cc.warn("[ItemTooltip] tooltip节点没有父节点，无法计算位置");
                return;
            }

            const localPos = parentNode.convertToNodeSpaceAR(targetWorldPos);

            // 获取tooltip大小和锚点
            const tooltipSize = this.node.getContentSize();
            const tooltipAnchor = this.node.getAnchorPoint();
            const offsetX = 10; // 右侧偏移（像素）
            const offsetY = 10; // 上方偏移（像素）

            // 计算tooltip左下角的位置（因为tooltip的锚点可能在左下角）
            // 道具节点右上角 + 偏移 = tooltip左下角位置
            // 如果tooltip锚点是(0, 0)，那么tooltip位置就是左下角
            // 如果tooltip锚点是(0.5, 0.5)，需要调整
            let finalX = localPos.x + offsetX;
            let finalY = localPos.y + offsetY;

            // 根据tooltip锚点调整位置
            // 如果锚点在左下角(0, 0)，finalX和finalY就是tooltip的位置
            // 如果锚点在中心(0.5, 0.5)，需要减去tooltip大小的一半
            finalX += tooltipSize.width * tooltipAnchor.x;
            finalY += tooltipSize.height * tooltipAnchor.y;

            // 调整位置，避免超出屏幕
            const screenSize = cc.winSize;

            // 计算tooltip的边界（考虑锚点）
            const tooltipLeft = finalX - tooltipSize.width * tooltipAnchor.x;
            const tooltipRight = finalX + tooltipSize.width * (1 - tooltipAnchor.x);
            const tooltipBottom = finalY - tooltipSize.height * tooltipAnchor.y;
            const tooltipTop = finalY + tooltipSize.height * (1 - tooltipAnchor.y);

            // 屏幕边界（Cocos Creator坐标系：中心为原点）
            const screenLeft = -screenSize.width / 2;
            const screenRight = screenSize.width / 2;
            const screenBottom = -screenSize.height / 2;
            const screenTop = screenSize.height / 2;

            // 如果超出右边界，显示在左侧
            if (tooltipRight > screenRight) {
                finalX = localPos.x - tooltipSize.width * (1 - tooltipAnchor.x) - offsetX;
            }

            // 如果超出上边界，显示在下方
            if (tooltipTop > screenTop) {
                finalY = localPos.y - tooltipSize.height * (1 - tooltipAnchor.y) - offsetY;
            }

            // 确保不超出左边界
            const newTooltipLeft = finalX - tooltipSize.width * tooltipAnchor.x;
            if (newTooltipLeft < screenLeft) {
                finalX = screenLeft + tooltipSize.width * tooltipAnchor.x + 10;
            }

            // 确保不超出下边界
            const newTooltipBottom = finalY - tooltipSize.height * tooltipAnchor.y;
            if (newTooltipBottom < screenBottom) {
                finalY = screenBottom + tooltipSize.height * tooltipAnchor.y + 10;
            }

            this.node.setPosition(finalX, finalY);

            cc.log("[ItemTooltip] 位置计算完成:", {
                道具节点世界坐标: targetWorldPos,
                道具节点本地坐标: localPos,
                tooltip位置: { x: finalX, y: finalY },
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
    hideItemInfo() {
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
    hideItemInfoImmediate() {
        this._clearTimers();
        this.node.active = false;
    },

    /**
     * 清除所有定时器
     * @private
     */
    _clearTimers() {
        if (this._showTimer) {
            clearTimeout(this._showTimer);
            this._showTimer = null;
        }
        if (this._hideTimer) {
            clearTimeout(this._hideTimer);
            this._hideTimer = null;
        }
    },

    onDestroy() {
        // 清理定时器
        this._clearTimers();
    }
});
