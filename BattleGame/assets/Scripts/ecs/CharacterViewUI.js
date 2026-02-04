/**
 * 人物属性查看UI组件
 * 管理头像列表、人物原型显示、属性面板
 */
cc.Class({
    extends: cc.Component,

    properties: {
        // 左侧头像列表容器
        avatarListContainer: {
            default: null,
            type: cc.Node,
            tooltip: "左侧头像列表容器节点"
        },

        // 中间人物原型显示区域
        characterDisplayArea: {
            default: null,
            type: cc.Node,
            tooltip: "中间人物原型显示区域节点"
        },

        // 道具栏容器（显示在人物原型下方）
        inventoryContainer: {
            default: null,
            type: cc.Node,
            tooltip: "道具栏容器节点（网格布局，显示在人物原型下方）"
        },

        // 装备栏容器（3个格子，可放在道具栏上方或下方）
        equipmentContainer: {
            default: null,
            type: cc.Node,
            tooltip: "装备栏容器节点（3个格子：如武器/防具/饰品）"
        },

        // 装备格子Prefab（不填则使用 itemSlotPrefab）
        equipmentSlotPrefab: {
            default: null,
            type: cc.Prefab,
            tooltip: "装备格子Prefab，留空则使用道具格子Prefab"
        },

        // 道具项Prefab（用于创建道具格子）
        itemSlotPrefab: {
            default: null,
            type: cc.Prefab,
            tooltip: "道具格子Prefab（包含图标和数量标签）"
        },

        // 道具信息弹窗组件（可选）
        itemTooltip: {
            default: null,
            type: cc.Node,
            tooltip: "道具信息弹窗节点（包含ItemTooltip组件）"
        },

        // 道具栏网格配置
        inventoryColumns: {
            default: 6,
            tooltip: "道具栏列数（每行显示的道具数量）"
        },
        inventoryRows: {
            default: 4,
            tooltip: "道具栏行数"
        },
        itemSlotSize: {
            default: 80,
            tooltip: "道具格子大小（宽高）"
        },
        itemSlotSpacing: {
            default: 0,
            tooltip: "道具格子之间的间距"
        },

        // 属性面板（半透明背景）
        statsPanel: {
            default: null,
            type: cc.Node,
            tooltip: "属性面板节点（半透明背景）"
        },

        // 头像Prefab（用于动态创建头像）
        avatarPrefab: {
            default: null,
            type: cc.Prefab,
            tooltip: "头像Prefab（包含头像图片）"
        },

        // 单位数据配置
        unitDataConfig: {
            default: null,
            tooltip: "单位数据配置（可选，如果不设置则从UnitDataConfig获取）"
        },

        // 备用资源：英雄头像资源列表（仅在UnitDataConfig中资源为空时使用）
        heroIcons: {
            default: [],
            type: [cc.SpriteFrame],
            tooltip: "英雄头像资源列表（备用，仅在SelectScene未加载时使用）"
        },

        // 备用资源：怪物头像资源列表（仅在UnitDataConfig中资源为空时使用）
        monsterIcons: {
            default: [],
            type: [cc.SpriteFrame],
            tooltip: "怪物头像资源列表（备用，仅在SelectScene未加载时使用）"
        },

        // 备用资源：英雄Prefab列表（仅在UnitDataConfig中资源为空时使用）
        heroPrefabs: {
            default: [],
            type: [cc.Prefab],
            tooltip: "英雄Prefab列表（备用，仅在SelectScene未加载时使用）"
        },

        // 备用资源：怪物Prefab列表（仅在UnitDataConfig中资源为空时使用）
        monsterPrefabs: {
            default: [],
            type: [cc.Prefab],
            tooltip: "怪物Prefab列表（备用，仅在SelectScene未加载时使用）"
        },

        // 头像间距
        avatarSpacing: {
            default: 100,
            tooltip: "头像之间的间距"
        },

        // 属性面板中的属性标签（需要在编辑器中绑定）
        hpLabel: {
            default: null,
            type: cc.Label,
            tooltip: "生命值标签"
        },
        attackLabel: {
            default: null,
            type: cc.Label,
            tooltip: "攻击力标签"
        },
        defenseLabel: {
            default: null,
            type: cc.Label,
            tooltip: "防御力标签"
        },
        speedLabel: {
            default: null,
            type: cc.Label,
            tooltip: "速度标签"
        },
        critLabel: {
            default: null,
            type: cc.Label,
            tooltip: "暴击率标签"
        },
        missLabel: {
            default: null,
            type: cc.Label,
            tooltip: "闪避率标签"
        },
        levelLabel: {
            default: null,
            type: cc.Label,
            tooltip: "等级标签"
        },
        expLabel: {
            default: null,
            type: cc.Label,
            tooltip: "经验值标签"
        }
    },

    onLoad() {
        // 获取单位数据配置（优先使用SelectScene中已设置好的资源）
        if (!this.unitDataConfig) {
            this.unitDataConfig = require("UnitDataConfig");
        }

        // 如果UnitDataConfig中的资源为空，从场景配置中加载（备用方案）
        this._loadConfigIfNeeded();

        // 当前显示的人物原型
        this.currentDisplayPrefab = null;
        // 当前选中的单位数据
        this.currentUnitData = null;

        // 初始化UI
        this._initAvatars();

        // 初始化道具栏（延迟一帧，确保容器节点已完全初始化）
        this.scheduleOnce(() => {
            this._initInventory();
        }, 0);

        // 初始化装备栏（3个格子）
        this.scheduleOnce(() => {
            this._initEquipmentBar();
        }, 0.05);

        // 设置道具图标（如果ItemIconSetter组件已设置）
        this._setupItemIcons();

        // 初始化道具数据（添加5个升级药水用于测试）
        this.scheduleOnce(async () => {
            await this._initDefaultItems();
        }, 0.5);

        // 隐藏属性面板
        if (this.statsPanel) {
            this.statsPanel.active = false;
        }

        // 拖拽状态（装备从道具栏拖到装备栏 / 从装备栏拖回）
        this._dragSprite = null;
        this._draggingItem = null;
        this._draggingSlot = null;
        this._draggingFromEquipment = null;
        this._dragIconSize = null;
        this._dragStartCanvasPos = null; // 拖拽开始时原始图标在 Canvas 下的坐标（用于从原位置“拽出来”）

        // 绑定点击事件（点击任意地方关闭属性面板）
        // 使用Canvas或场景根节点来捕获点击事件
        const canvas = cc.find("Canvas");
        if (canvas) {
            // 先绑定拖拽相关事件（优先级更高）
            canvas.on(cc.Node.EventType.TOUCH_MOVE, this._onGlobalTouchMove, this);
            canvas.on(cc.Node.EventType.TOUCH_END, this._onGlobalTouchEnd, this);
            canvas.on(cc.Node.EventType.TOUCH_CANCEL, this._onGlobalTouchEnd, this);
            // 点击关闭面板事件（在拖拽事件之后，避免冲突）
            canvas.on(cc.Node.EventType.TOUCH_END, this._onCanvasClick, this);
        }
    },

    /**
     * 如果UnitDataConfig中的资源为空，从场景配置中加载（备用方案）
     * 优先使用SelectScene中已设置好的资源，如果为空才使用场景配置
     * @private
     */
    _loadConfigIfNeeded() {
        let needLoad = false;

        // 检查是否有资源为空
        if (this.unitDataConfig && this.unitDataConfig.heros) {
            for (let i = 0; i < this.unitDataConfig.heros.length; i++) {
                if (!this.unitDataConfig.heros[i].icon || !this.unitDataConfig.heros[i].prefab) {
                    needLoad = true;
                    break;
                }
            }
        }

        if (!needLoad && this.unitDataConfig && this.unitDataConfig.monsters) {
            for (let i = 0; i < this.unitDataConfig.monsters.length; i++) {
                if (!this.unitDataConfig.monsters[i].icon || !this.unitDataConfig.monsters[i].prefab) {
                    needLoad = true;
                    break;
                }
            }
        }

        // 如果有资源为空，从场景配置中加载
        if (needLoad) {
            cc.log("[CharacterViewUI] 检测到UnitDataConfig中资源为空，从场景配置加载（备用方案）");

            // 应用英雄头像和Prefab配置（仅在UnitDataConfig中资源为空时设置）
            if (this.heroIcons && this.heroIcons.length > 0) {
                this.heroIcons.forEach((icon, index) => {
                    if (this.unitDataConfig.heros && this.unitDataConfig.heros[index] && icon && !this.unitDataConfig.heros[index].icon) {
                        this.unitDataConfig.heros[index].icon = icon;
                        cc.log(`[CharacterViewUI] 从场景配置设置英雄头像: ${this.unitDataConfig.heros[index].name}`);
                    }
                });
            }

            if (this.heroPrefabs && this.heroPrefabs.length > 0) {
                this.heroPrefabs.forEach((prefab, index) => {
                    if (this.unitDataConfig.heros && this.unitDataConfig.heros[index] && prefab && !this.unitDataConfig.heros[index].prefab) {
                        this.unitDataConfig.heros[index].prefab = prefab;
                        cc.log(`[CharacterViewUI] 从场景配置设置英雄Prefab: ${this.unitDataConfig.heros[index].name}`);
                    }
                });
            }

            // 应用怪物头像和Prefab配置（仅在UnitDataConfig中资源为空时设置）
            if (this.monsterIcons && this.monsterIcons.length > 0) {
                this.monsterIcons.forEach((icon, index) => {
                    if (this.unitDataConfig.monsters && this.unitDataConfig.monsters[index] && icon && !this.unitDataConfig.monsters[index].icon) {
                        this.unitDataConfig.monsters[index].icon = icon;
                        cc.log(`[CharacterViewUI] 从场景配置设置怪物头像: ${this.unitDataConfig.monsters[index].name}`);
                    }
                });
            }

            if (this.monsterPrefabs && this.monsterPrefabs.length > 0) {
                this.monsterPrefabs.forEach((prefab, index) => {
                    if (this.unitDataConfig.monsters && this.unitDataConfig.monsters[index] && prefab && !this.unitDataConfig.monsters[index].prefab) {
                        this.unitDataConfig.monsters[index].prefab = prefab;
                        cc.log(`[CharacterViewUI] 从场景配置设置怪物Prefab: ${this.unitDataConfig.monsters[index].name}`);
                    }
                });
            }
        } else {
            cc.log("[CharacterViewUI] UnitDataConfig中已有资源，直接使用（可能由SelectScene设置）");
        }
    },

    /**
     * 绑定Canvas点击事件
     * @private
     */
    _bindCanvasClick() {
        const canvas = cc.find("Canvas");
        if (canvas) {
            canvas.on(cc.Node.EventType.TOUCH_END, this._onCanvasClick, this);
        } else {
            // 延迟绑定（如果Canvas还未创建）
            this.scheduleOnce(() => {
                this._bindCanvasClick();
            }, 0.1);
        }
    },

    /**
     * 初始化头像列表
     * @private
     */
    _initAvatars() {
        if (!this.avatarListContainer) {
            cc.error("[CharacterViewUI] 未设置avatarListContainer，无法创建头像列表");
            return;
        }

        if (!this.avatarPrefab) {
            cc.error("[CharacterViewUI] 未设置avatarPrefab，无法创建头像");
            return;
        }

        // 清空容器
        this.avatarListContainer.removeAllChildren();

        // 计算英雄数量（用于怪物头像的位置偏移）
        const heroCount = this.unitDataConfig && this.unitDataConfig.heros ? this.unitDataConfig.heros.length : 0;

        // 创建英雄头像
        if (this.unitDataConfig && this.unitDataConfig.heros) {
            this.unitDataConfig.heros.forEach((heroData, index) => {
                this._createAvatar(heroData, "hero", index);
            });
        }

        // 创建怪物头像（位置从英雄后面开始）
        if (this.unitDataConfig && this.unitDataConfig.monsters) {
            this.unitDataConfig.monsters.forEach((monsterData, index) => {
                // 使用 heroCount + index 作为位置索引，让怪物排在英雄后面
                this._createAvatar(monsterData, "monster", heroCount + index);
            });
        }
    },

    /**
     * 初始化道具栏
     * @private
     */
    _initInventory() {
        if (!this.inventoryContainer) {
            cc.warn("[CharacterViewUI] 未设置inventoryContainer，跳过道具栏初始化");
            return;
        }

        if (!this.itemSlotPrefab) {
            cc.warn("[CharacterViewUI] 未设置itemSlotPrefab，跳过道具栏初始化");
            return;
        }

        // 强制设置行列数（确保使用新的值）
        if (this.inventoryColumns !== 6) {
            this.inventoryColumns = 6;
            cc.log("[CharacterViewUI] 强制设置列数为6");
        }
        if (this.inventoryRows !== 4) {
            this.inventoryRows = 4;
            cc.log("[CharacterViewUI] 强制设置行数为4");
        }

        // 清空容器
        this.inventoryContainer.removeAllChildren();

        // 确保容器可见
        this.inventoryContainer.active = true;
        this.inventoryContainer.opacity = 255;

        // 设置容器锚点为居中（0.5, 0.5），这样位置计算更简单
        this.inventoryContainer.setAnchorPoint(0.5, 0.5);

        // 计算道具栏总格子数和容器大小
        const totalSlots = this.inventoryColumns * this.inventoryRows;
        const slotSize = this.itemSlotSize || 80;
        const spacing = this.itemSlotSpacing || 0; // 间隔改为0

        // 先计算并设置容器大小（必须在添加子节点之前）
        const totalWidth = (this.inventoryColumns * slotSize) + ((this.inventoryColumns - 1) * spacing);
        const totalHeight = (this.inventoryRows * slotSize) + ((this.inventoryRows - 1) * spacing);
        this.inventoryContainer.setContentSize(totalWidth, totalHeight);

        // 添加Mask组件，裁剪超出范围的格子
        let mask = this.inventoryContainer.getComponent(cc.Mask);
        if (!mask) {
            mask = this.inventoryContainer.addComponent(cc.Mask);
            mask.type = cc.Mask.Type.RECT; // 矩形裁剪
            cc.log("[CharacterViewUI] 自动添加Mask组件到道具栏容器（用于裁剪超出范围的格子）");
        }

        cc.log(`[CharacterViewUI] 道具栏容器大小: ${totalWidth} x ${totalHeight}, 格子数: ${totalSlots}, 锚点: (${this.inventoryContainer.getAnchorPoint().x}, ${this.inventoryContainer.getAnchorPoint().y})`);

        // 方式一：使用Layout组件自动布局（推荐）
        // 检查是否已有Layout组件，如果没有则添加
        let layout = this.inventoryContainer.getComponent(cc.Layout);
        if (!layout) {
            layout = this.inventoryContainer.addComponent(cc.Layout);
            cc.log("[CharacterViewUI] 自动添加Layout组件到道具栏容器");
        }

        // 禁用Layout组件，使用手动布局（更可控）
        // Layout组件在GRID模式下可能有问题，手动布局更可靠
        if (layout) {
            layout.enabled = false; // 禁用Layout组件
            cc.log("[CharacterViewUI] 禁用Layout组件，使用手动布局");
        }

        // 创建道具格子
        for (let i = 0; i < totalSlots; i++) {
            const slotNode = cc.instantiate(this.itemSlotPrefab);
            if (!slotNode) {
                cc.error(`[CharacterViewUI] 无法实例化道具格子Prefab (索引: ${i})`);
                continue;
            }

            slotNode.name = `ItemSlot_${i}`;

            // 确保节点可见
            slotNode.active = true;
            slotNode.opacity = 255;

            // 强制设置节点大小为slotSize（覆盖Prefab的默认大小）
            slotNode.setContentSize(slotSize, slotSize);

            // 设置节点锚点为居中（便于定位）
            slotNode.setAnchorPoint(0.5, 0.5);

            // 设置缩放为0.8
            slotNode.setScale(0.8, 0.8, 0.8);

            // 添加到容器
            this.inventoryContainer.addChild(slotNode);

            // 初始化道具格子（空状态）
            this._initItemSlot(slotNode, i);
        }

        // 验证创建结果
        const createdSlots = this.inventoryContainer.children.length;
        cc.log(`[CharacterViewUI] 道具栏初始化完成: ${this.inventoryRows}行 x ${this.inventoryColumns}列 = ${totalSlots}个格子, 实际创建: ${createdSlots}个`);

        if (createdSlots === 0) {
            cc.error("[CharacterViewUI] 警告：没有创建任何道具格子！请检查itemSlotPrefab是否正确绑定。");
            return;
        }

        // 使用手动布局（确保间隔为0，并添加边框）
        this._manualLayoutInventory();

        // 输出调试信息
        const containerPos = this.inventoryContainer.getPosition();
        const containerWorldPos = this.inventoryContainer.convertToWorldSpaceAR(cc.v2(0, 0));
        cc.log(`[CharacterViewUI] 容器位置: 本地(${containerPos.x.toFixed(1)}, ${containerPos.y.toFixed(1)}), 世界(${containerWorldPos.x.toFixed(1)}, ${containerWorldPos.y.toFixed(1)})`);
        cc.log(`[CharacterViewUI] 容器大小: ${this.inventoryContainer.getContentSize().width} x ${this.inventoryContainer.getContentSize().height}`);
        cc.log(`[CharacterViewUI] 容器可见性: active=${this.inventoryContainer.active}, opacity=${this.inventoryContainer.opacity}`);
    },

    /**
     * 手动布局道具栏（备用方案）
     * @private
     */
    _manualLayoutInventory() {
        if (!this.inventoryContainer) {
            return;
        }

        const slotSize = this.itemSlotSize || 80;
        const spacing = this.itemSlotSpacing || 0; // 间隔改为0
        const scale = 0.8; // 缩放值
        const slots = this.inventoryContainer.children;

        // 获取容器大小和锚点
        const containerSize = this.inventoryContainer.getContentSize();
        const anchorPoint = this.inventoryContainer.getAnchorPoint();

        // 计算实际显示大小（考虑缩放）
        const displaySize = slotSize * scale;

        // 计算容器大小（使用实际显示大小，确保紧密排列）
        const totalWidth = this.inventoryColumns * displaySize;
        const totalHeight = this.inventoryRows * displaySize;

        // 更新容器大小（使用实际显示大小）
        this.inventoryContainer.setContentSize(totalWidth, totalHeight);

        // 计算起始位置：从左上角开始，第一个格子的中心位置
        // 使用实际显示大小来计算位置，确保紧密排列
        const startX = -totalWidth / 2 + displaySize / 2;
        const startY = totalHeight / 2 - displaySize / 2;

        cc.log(`[CharacterViewUI] 手动布局参数: slotSize=${slotSize}, scale=${scale}, displaySize=${displaySize.toFixed(1)}, spacing=${spacing}`);
        cc.log(`[CharacterViewUI] 容器大小: ${totalWidth.toFixed(1)} x ${totalHeight.toFixed(1)}, startX=${startX.toFixed(1)}, startY=${startY.toFixed(1)}`);

        // 手动设置每个格子的位置
        slots.forEach((slotNode, index) => {
            const row = Math.floor(index / this.inventoryColumns);
            const col = index % this.inventoryColumns;

            // 计算位置（使用实际显示大小，确保紧密排列，无间隙）
            const x = startX + col * displaySize;
            const y = startY - row * displaySize;

            // 设置位置（确保在容器范围内）
            slotNode.setPosition(x, y);

            // 强制设置节点大小为slotSize（覆盖Prefab的默认大小）
            slotNode.setContentSize(slotSize, slotSize);

            // 设置节点锚点为居中
            slotNode.setAnchorPoint(0.5, 0.5);

            // 设置缩放为0.8（必须在设置位置之后，确保位置计算正确）
            slotNode.setScale(0.8, 0.8, 0.8);

            // 确保节点可见
            slotNode.active = true;
            slotNode.opacity = 255;

            // 调整子节点大小（Background、Icon等）
            const children = slotNode.children;
            for (let j = 0; j < children.length; j++) {
                const child = children[j];
                // 如果是背景或图标节点，设置为与父节点相同大小
                if (child.name === "Background" || child.name === "Icon") {
                    child.setContentSize(slotSize, slotSize);
                    child.setAnchorPoint(0.5, 0.5);
                }
            }

            // 确保格子可见（添加背景）
            this._ensureSlotVisible(slotNode, index);

            // 添加边框线框（用于区分每个格子）- 必须在最后添加，确保显示在最上层
            this._addSlotBorder(slotNode, slotSize);

            // 验证位置是否在容器范围内（使用实际显示大小）
            const slotPos = slotNode.getPosition();
            const slotHalfSize = displaySize / 2;
            const containerHalfWidth = totalWidth / 2;
            const containerHalfHeight = totalHeight / 2;

            const isInRange = (slotPos.x - slotHalfSize >= -containerHalfWidth) &&
                (slotPos.x + slotHalfSize <= containerHalfWidth) &&
                (slotPos.y - slotHalfSize >= -containerHalfHeight) &&
                (slotPos.y + slotHalfSize <= containerHalfHeight);

            if (index < 5) { // 输出前5个格子的详细信息
                cc.log(`[CharacterViewUI] 格子${index}: 位置(${x.toFixed(1)}, ${y.toFixed(1)}), 大小${slotSize}x${slotSize}, 容器内: ${isInRange ? '✓' : '✗'}`);
            }

            if (!isInRange) {
                cc.warn(`[CharacterViewUI] 警告：格子${index}位置超出容器范围！位置: (${x.toFixed(1)}, ${y.toFixed(1)}), 容器大小: ${containerSize.width}x${containerSize.height}`);
            }
        });

        cc.log(`[CharacterViewUI] 手动布局完成，共${slots.length}个格子`);
    },

    /**
     * 确保道具格子可见（如果没有背景，添加一个简单的背景）
     * @private
     * @param {cc.Node} slotNode - 道具格子节点
     * @param {number} index - 格子索引
     */
    _ensureSlotVisible(slotNode, index) {
        // 检查节点是否有可见的Sprite组件
        let hasVisibleSprite = false;
        let spriteNode = null;

        // 检查主节点
        const mainSprite = slotNode.getComponent(cc.Sprite);
        if (mainSprite && mainSprite.spriteFrame) {
            hasVisibleSprite = true;
            spriteNode = slotNode;
        }

        // 检查子节点（Background、Icon等）
        if (!hasVisibleSprite) {
            const children = slotNode.children;
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                const childSprite = child.getComponent(cc.Sprite);
                if (childSprite && childSprite.spriteFrame) {
                    hasVisibleSprite = true;
                    spriteNode = child;
                    break;
                }
            }
        }

        // 如果没有可见的Sprite，创建一个简单的背景（不包含边框，边框由_addSlotBorder单独处理）
        if (!hasVisibleSprite) {
            // 检查是否已有Background节点
            let bgNode = slotNode.getChildByName("Background");

            if (!bgNode) {
                // 创建背景节点
                bgNode = new cc.Node("Background");
                bgNode.setContentSize(slotNode.getContentSize().width, slotNode.getContentSize().height);
                bgNode.setAnchorPoint(0.5, 0.5);

                // 使用Graphics组件绘制背景（不绘制边框）
                const graphics = bgNode.addComponent(cc.Graphics);

                // 绘制背景（半透明灰色）
                graphics.fillColor = new cc.Color(60, 60, 60, 80);
                const slotSize = slotNode.getContentSize().width;
                graphics.rect(-slotSize / 2, -slotSize / 2, slotSize, slotSize);
                graphics.fill();

                slotNode.addChild(bgNode);
                bgNode.setPosition(0, 0);

                if (index === 0) {
                    cc.log(`[CharacterViewUI] 为道具格子添加了Graphics背景`);
                }
            }
        } else if (index === 0) {
            cc.log(`[CharacterViewUI] 道具格子已有可见背景: ${spriteNode.name}`);
        }
    },

    /**
     * 为道具格子添加边框线框（用于区分每个格子）
     * @private
     * @param {cc.Node} slotNode - 道具格子节点
     * @param {number} slotSize - 格子大小
     */
    _addSlotBorder(slotNode, slotSize) {
        // 检查是否已有Border节点，如果有则先移除
        let borderNode = slotNode.getChildByName("Border");
        if (borderNode) {
            borderNode.destroy();
        }

        // 创建边框节点
        borderNode = new cc.Node("Border");
        borderNode.setContentSize(slotSize, slotSize);
        borderNode.setAnchorPoint(0.5, 0.5);

        // 使用Graphics组件绘制边框线框
        const graphics = borderNode.addComponent(cc.Graphics);

        // 设置边框样式（白色，5像素宽，更明显）
        graphics.strokeColor = new cc.Color(255, 255, 255, 255);
        graphics.lineWidth = 5;

        // 绘制矩形边框（从中心点开始绘制）
        // 注意：由于节点有缩放0.8，实际显示大小会小一些，但边框会正确显示
        const halfSize = slotSize / 2;
        graphics.rect(-halfSize, -halfSize, slotSize, slotSize);
        graphics.stroke();

        // 确保边框节点在最上层（最后添加，显示在最前面）
        slotNode.addChild(borderNode);
        borderNode.setPosition(0, 0);
        borderNode.zIndex = 999; // 使用zIndex替代已废弃的setLocalZOrder，设置较高的层级，确保显示在最前面

        // 确保边框节点可见
        borderNode.active = true;
        borderNode.opacity = 255;
    },

    /**
     * 初始化道具格子
     * @private
     * @param {cc.Node} slotNode - 道具格子节点
     * @param {number} index - 格子索引
     */
    _initItemSlot(slotNode, index) {
        // 查找图标节点和数量标签
        const iconNode = slotNode.getChildByName("Icon") || slotNode;
        const countLabel = slotNode.getChildByName("CountLabel");

        // 初始状态：空格子
        if (iconNode) {
            const sprite = iconNode.getComponent(cc.Sprite);
            if (sprite) {
                sprite.spriteFrame = null; // 清空图标
            }
            iconNode.opacity = 100; // 半透明显示空格子
        }

        if (countLabel) {
            const label = countLabel.getComponent(cc.Label);
            if (label) {
                label.string = ""; // 清空数量
            }
        }

        // 保存格子索引
        slotNode._slotIndex = index;
        slotNode._isEmpty = true;
    },

    /**
     * 更新道具栏显示（根据当前选中的角色）
     * @private
     */
    async _updateInventory() {
        if (!this.inventoryContainer || !this.currentUnitData) {
            return;
        }

        // 从角色数据中获取道具列表（支持异步）
        const items = await this._getCharacterItems(this.currentUnitData.name);

        // 更新每个格子
        const slots = this.inventoryContainer.children;
        slots.forEach((slotNode, index) => {
            if (index < items.length && items[index]) {
                // 有道具，显示道具信息
                this._setItemSlot(slotNode, items[index]);
            } else {
                // 空格子
                this._initItemSlot(slotNode, index);

                // 清空所有事件（空格子不需要显示tooltip）
                slotNode.off(cc.Node.EventType.MOUSE_DOWN);
                slotNode.off(cc.Node.EventType.MOUSE_UP);
                slotNode.off(cc.Node.EventType.TOUCH_START);
                slotNode.off(cc.Node.EventType.TOUCH_END);
                slotNode._touchStartTime = null;
            }
        });
    },

    /**
     * 初始化装备栏（3个格子）
     * @private
     */
    _initEquipmentBar() {
        if (!this.equipmentContainer) {
            cc.warn("[CharacterViewUI] 未设置equipmentContainer，跳过装备栏初始化");
            return;
        }

        const prefab = this.equipmentSlotPrefab || this.itemSlotPrefab;
        if (!prefab) {
            cc.warn("[CharacterViewUI] 未设置equipmentSlotPrefab且无itemSlotPrefab，跳过装备栏初始化");
            return;
        }

        const slotCount = 3;
        const slotSize = this.itemSlotSize || 80;
        const spacing = 10;

        this.equipmentContainer.removeAllChildren();
        this.equipmentContainer.active = true;
        this.equipmentContainer.opacity = 255;
        this.equipmentContainer.setAnchorPoint(0.5, 0.5);

        const totalHeight = slotCount * slotSize + (slotCount - 1) * spacing;
        this.equipmentContainer.setContentSize(slotSize, totalHeight);

        for (let i = 0; i < slotCount; i++) {
            const slotNode = cc.instantiate(prefab);
            if (!slotNode) {
                cc.error(`[CharacterViewUI] 无法实例化装备格子 Prefab (索引: ${i})`);
                continue;
            }

            const ItemConfig = require("ItemConfig");
            const slotTypes = ItemConfig.EQUIPMENT_SLOTS || ["weapon", "armor", "shoes"];
            slotNode.name = `EquipmentSlot_${i}`;
            slotNode._slotIndex = i;
            slotNode._slotType = slotTypes[i] || "weapon";
            slotNode._isEquipment = true;
            slotNode.active = true;
            slotNode.opacity = 255;
            slotNode.setContentSize(slotSize, slotSize);
            slotNode.setAnchorPoint(0.5, 0.5);
            slotNode.setScale(0.8, 0.8, 0.8);

            this.equipmentContainer.addChild(slotNode);
            this._initItemSlot(slotNode, i);
        }

        this._layoutEquipmentBar();
        cc.log(`[CharacterViewUI] 装备栏初始化完成，共 ${slotCount} 个格子`);
    },

    /**
     * 装备栏布局（3个格子纵向排列）
     * @private
     */
    _layoutEquipmentBar() {
        if (!this.equipmentContainer || this.equipmentContainer.children.length === 0) {
            return;
        }

        const slotSize = this.itemSlotSize || 80;
        const scale = 0.8;
        const displaySize = slotSize * scale;
        const spacing = 10;
        const slots = this.equipmentContainer.children;
        const totalHeight = slots.length * displaySize + (slots.length - 1) * spacing;

        this.equipmentContainer.setContentSize(displaySize, totalHeight);
        const startY = totalHeight / 2 - displaySize / 2;

        slots.forEach((slotNode, index) => {
            const y = startY - index * (displaySize + spacing);
            slotNode.setPosition(0, y);
            slotNode.setContentSize(slotSize, slotSize);
            slotNode.setAnchorPoint(0.5, 0.5);
            slotNode.setScale(0.8, 0.8, 0.8);
            this._ensureSlotVisible(slotNode, index);
            this._addSlotBorder(slotNode, slotSize);

            // 让装备栏格子里的 Icon 节点尺寸适配格子大小
            const iconNode = slotNode.getChildByName("Icon");
            if (iconNode) {
                iconNode.setContentSize(slotSize, slotSize);
                iconNode.setAnchorPoint(0.5, 0.5);
                const sp = iconNode.getComponent(cc.Sprite);
                if (sp) {
                    sp.sizeMode = cc.Sprite.SizeMode.CUSTOM;
                }
            }
        });
    },

    /**
     * 更新装备栏显示（按当前角色从 EquipmentDataManager 加载，每位英雄独立）
     * @private
     */
    async _updateEquipmentBar() {
        if (!this.equipmentContainer || !this.currentUnitData) {
            return;
        }

        const EquipmentDataManager = require("EquipmentDataManager");
        const ItemConfig = require("ItemConfig");
        const { slots: equipmentSlots } = await EquipmentDataManager.getEquipment(this.currentUnitData.name);
        const slotNodes = this.equipmentContainer.children;

        for (let i = 0; i < slotNodes.length; i++) {
            const slotNode = slotNodes[i];
            const itemId = equipmentSlots[i] || null;
            if (itemId) {
                const config = ItemConfig.getItemById(itemId);
                const itemData = config ? {
                    id: config.id,
                    name: config.displayName || config.name,
                    icon: config.icon,
                    count: 1,
                    config: config
                } : null;
                if (itemData) {
                    this._setEquipmentSlot(slotNode, itemData, i);
                } else {
                    this._initItemSlot(slotNode, i);
                    slotNode._isEmpty = true;
                    slotNode._itemData = null;
                }
            } else {
                this._initItemSlot(slotNode, i);
                slotNode._isEmpty = true;
                slotNode._itemData = null;
            }
        }
    },

    /**
     * 设置装备格子内容（带拖拽卸下）
     * @private
     */
    _setEquipmentSlot(slotNode, itemData, slotIndex) {
        const iconNode = slotNode.getChildByName("Icon") || slotNode;
        const countLabel = slotNode.getChildByName("CountLabel");

        if (iconNode && itemData.icon) {
            const sprite = iconNode.getComponent(cc.Sprite);
            if (sprite) {
                sprite.spriteFrame = itemData.icon;
                // 确保图标按格子大小缩放显示
                sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
            }
            // 将 Icon 节点本身缩放到与格子一致
            const slotSize = this.itemSlotSize || slotNode.width || 80;
            iconNode.setContentSize(slotSize, slotSize);
            iconNode.setAnchorPoint(0.5, 0.5);
            iconNode.opacity = 255;
        } else if (iconNode) {
            const sprite = iconNode.getComponent(cc.Sprite);
            if (sprite) sprite.spriteFrame = null;
            iconNode.opacity = 255;
        }
        if (countLabel) {
            const label = countLabel.getComponent(cc.Label);
            if (label) label.string = "";
        }

        slotNode._itemData = itemData;
        slotNode._isEmpty = false;
        slotNode._slotIndex = slotIndex;
        slotNode._slotType = slotNode._slotType || (require("ItemConfig").EQUIPMENT_SLOTS || ["weapon", "armor", "shoes"])[slotIndex];

        slotNode.off(cc.Node.EventType.TOUCH_START);
        slotNode.on(cc.Node.EventType.TOUCH_START, (e) => {
            e.stopPropagation();
            this._draggingFromEquipment = slotNode;
            this._draggingItem = itemData;
            this._dragIconSize = this._getSlotIconDisplaySize(slotNode);
            // 记录原始图标在 Canvas 下的位置（用于从原格子“拽出来”）
            const iconNode = slotNode.getChildByName("Icon") || slotNode;
            const canvas = cc.find("Canvas");
            if (canvas && iconNode && iconNode.isValid && iconNode.convertToWorldSpaceAR && canvas.convertToNodeSpaceAR) {
                const worldPos = iconNode.convertToWorldSpaceAR(cc.v2(0, 0));
                this._dragStartCanvasPos = canvas.convertToNodeSpaceAR(worldPos);
            } else {
                this._dragStartCanvasPos = null;
            }
        }, this);
    },

    /**
     * 获取触摸点下的格子节点（装备栏或道具栏）
     * @param {cc.Event.EventTouch} event
     * @returns {{ node: cc.Node, isEquipment: boolean, slotIndex: number, slotType?: string }|null}
     */
    _getNodeUnderTouch(event) {
        if (!event || !event.touch) return null;

        // 获取UI坐标（相对于Canvas）
        let uiPos = null;
        if (event.getUILocation) {
            uiPos = event.getUILocation();
        } else if (event.touch && event.touch.getUILocation) {
            uiPos = event.touch.getUILocation();
        } else {
            // 降级方案：使用屏幕坐标
            const screenPos = event.getLocation();
            const canvas = cc.find("Canvas");
            if (canvas && canvas.getComponent(cc.Camera)) {
                const camera = canvas.getComponent(cc.Camera);
                uiPos = camera.getScreenToWorldPoint(screenPos);
            } else {
                uiPos = screenPos;
            }
        }

        if (!uiPos) return null;
        const worldPos = cc.v2(uiPos.x, uiPos.y);

        if (this.equipmentContainer && this.equipmentContainer.children) {
            const slots = this.equipmentContainer.children;
            for (let i = 0; i < slots.length; i++) {
                const slot = slots[i];
                if (!slot || !slot.parent) continue;
                try {
                    const localPos = slot.parent.convertToNodeSpaceAR(worldPos);
                    const rect = slot.getBoundingBox();
                    if (rect && rect.contains && rect.contains(localPos)) {
                        return { node: slot, isEquipment: true, slotIndex: i, slotType: slot._slotType };
                    }
                } catch (e) {
                    // 忽略转换错误
                }
            }
        }
        if (this.inventoryContainer && this.inventoryContainer.children) {
            const slots = this.inventoryContainer.children;
            for (let i = 0; i < slots.length; i++) {
                const slot = slots[i];
                if (!slot || !slot.parent) continue;
                try {
                    const localPos = slot.parent.convertToNodeSpaceAR(worldPos);
                    const rect = slot.getBoundingBox();
                    if (rect && rect.contains && rect.contains(localPos)) {
                        return { node: slot, isEquipment: false, slotIndex: i };
                    }
                } catch (e) {
                    // 忽略转换错误
                }
            }
        }
        return null;
    },

    _onGlobalTouchMove(event) {
        if (!this._draggingItem && !this._draggingFromEquipment) return;
        if (!event || !event.touch) return;

        const canvas = cc.find("Canvas");
        if (!canvas) return;

        // 获取 UI 坐标，再统一转换到 Canvas 本地坐标系
        let uiPos = null;
        if (event.getUILocation) {
            uiPos = event.getUILocation();
        } else if (event.touch && event.touch.getUILocation) {
            uiPos = event.touch.getUILocation();
        } else {
            const screenPos = event.getLocation();
            if (canvas.getComponent(cc.Camera)) {
                const camera = canvas.getComponent(cc.Camera);
                uiPos = camera.getScreenToWorldPoint(screenPos);
            } else {
                uiPos = screenPos;
            }
        }
        if (!uiPos) return;

        const canvasPos = canvas.convertToNodeSpaceAR(cc.v2(uiPos.x, uiPos.y));

        // 只有移动超过一定距离才开始创建拖拽图标（避免轻触就“冒出”拖拽节点）
        const DRAG_START_DISTANCE = 8;
        if (!this._dragSprite && this._dragStartCanvasPos) {
            const dx = canvasPos.x - this._dragStartCanvasPos.x;
            const dy = canvasPos.y - this._dragStartCanvasPos.y;
            if ((dx * dx + dy * dy) < DRAG_START_DISTANCE * DRAG_START_DISTANCE) {
                return;
            }
        }

        if (!this._dragSprite) {
            this._dragSprite = new cc.Node("DragIcon");
            const sp = this._dragSprite.addComponent(cc.Sprite);
            const item = this._draggingItem || (this._draggingFromEquipment && this._draggingFromEquipment._itemData);
            if (item && item.icon) sp.spriteFrame = item.icon;
            // 让拖拽图标尺寸与格子内 Icon 的显示尺寸一致（包含父节点缩放）
            const sourceSlot = this._draggingSlot || this._draggingFromEquipment;
            const iconSize = this._dragIconSize || this._getSlotIconDisplaySize(sourceSlot);
            this._dragSprite.setContentSize(iconSize.width, iconSize.height);
            this._dragSprite.setAnchorPoint(0.5, 0.5);
            this._dragSprite.setScale(1, 1);
            if (sp) {
                sp.sizeMode = cc.Sprite.SizeMode.CUSTOM;
            }
            canvas.addChild(this._dragSprite);
            // 从原始图标位置开始，而不是触摸位置
            const startPos = this._dragStartCanvasPos || canvasPos;
            this._dragSprite.setPosition(startPos);
        } else {
            // 跟随手指移动（Canvas 坐标系）
            this._dragSprite.setPosition(canvasPos);
        }
    },

    async _onGlobalTouchEnd(event) {
        if (!event) return;

        const wasDragging = !!this._dragSprite;
        if (this._dragSprite) {
            this._dragSprite.destroy();
            this._dragSprite = null;
        }

        const hadDragState = this._draggingItem || this._draggingFromEquipment;
        if (!hadDragState) return; // 没有拖拽状态，不处理

        // 阻止事件冒泡，避免触发点击关闭面板
        if (event.stopPropagation) event.stopPropagation();

        const target = this._getNodeUnderTouch(event);
        const characterName = this.currentUnitData ? this.currentUnitData.name : null;

        try {
            if (this._draggingFromEquipment && characterName) {
                const slotNode = this._draggingFromEquipment;
                const slotIndex = slotNode._slotIndex;
                const itemData = slotNode._itemData;
                this._draggingFromEquipment = null;
                this._draggingItem = null;
                if (!itemData || !wasDragging) {
                    this._clearDragState();
                    return;
                }
                const EquipmentDataManager = require("EquipmentDataManager");
                const ItemDataManager = require("ItemDataManager");
                // 装备占用背包数量：卸下时需要把装备还回背包
                await EquipmentDataManager.unequipSlot(characterName, slotIndex);
                await ItemDataManager.addItem(itemData.id, 1);
                await this._updateEquipmentBar();
                await this._updateInventory();
                await this._applyEquipmentBonusesToDisplay();
                return;
            }

            if (this._draggingSlot && this._draggingItem && characterName) {
                const item = this._draggingItem;
                const ItemConfig = require("ItemConfig");
                const cfg = item.config || ItemConfig.getItemById(item.id);
                const itemToEquip = this._draggingItem;
                this._draggingSlot = null;
                this._draggingItem = null;
                if (!cfg || cfg.type !== "equipment" || !cfg.equipmentSlot) {
                    this._clearDragState();
                    return;
                }
                if (wasDragging && target && target.isEquipment && target.slotType === cfg.equipmentSlot) {
                    const EquipmentDataManager = require("EquipmentDataManager");
                    const ItemDataManager = require("ItemDataManager");
                    const slotIndex = target.slotIndex;
                    const current = await EquipmentDataManager.getEquipment(characterName);

                    // 如果目标槽位本来就是这件装备，直接忽略这次拖拽，不消耗背包道具
                    if (current && current.slots && current.slots[slotIndex] === itemToEquip.id) {
                        cc.log(`[CharacterViewUI] 槽位 ${slotIndex} 已经是装备 ${itemToEquip.id}，拖拽忽略`);
                        this._clearDragState();
                        return;
                    }

                    // ✅ 新增：同一角色不能装备两件完全相同的装备（同一个 itemId）
                    if (current && current.slots && current.slots.some((id, idx) => idx !== slotIndex && id === itemToEquip.id)) {
                        cc.warn(`[CharacterViewUI] 角色 ${characterName} 已经装备了相同的装备(${itemToEquip.id})，本次拖拽不生效`);
                        this._clearDragState();
                        return;
                    }

                    // 如果该槽位原来有装备，先把旧装备还回背包
                    const prevItemId = current.slots[slotIndex];
                    if (prevItemId) {
                        await ItemDataManager.addItem(prevItemId, 1);
                    }

                    // 检查背包里是否还有可以装备的数量
                    const count = await ItemDataManager.getItemCount(itemToEquip.id);
                    if (count <= 0) {
                        this._clearDragState();
                        return;
                    }

                    // 从背包扣除一件，再写入装备栏
                    await ItemDataManager.removeItem(itemToEquip.id, 1);
                    const ok = await EquipmentDataManager.setEquipmentSlot(characterName, slotIndex, itemToEquip.id);
                    if (!ok) {
                        // 理论上不会进来（前面已做重复检查），为了安全，把扣掉的道具补回去
                        await ItemDataManager.addItem(itemToEquip.id, 1);
                        this._clearDragState();
                        return;
                    }

                    await this._updateEquipmentBar();
                    await this._updateInventory();
                    await this._applyEquipmentBonusesToDisplay();
                }
                return;
            }
        } catch (e) {
            cc.error("[CharacterViewUI] 拖拽处理错误:", e.message);
        } finally {
            this._clearDragState();
        }
    },

    /**
     * 清除拖拽状态
     * @private
     */
    _clearDragState() {
        this._draggingSlot = null;
        this._draggingItem = null;
        this._draggingFromEquipment = null;
        this._dragIconSize = null;
        this._dragStartCanvasPos = null;
    },

    /**
     * 获取某个格子中 Icon 节点的“实际显示尺寸”（考虑父节点缩放）。
     * 用于拖拽时让 DragIcon 与格子内图标保持同样大小。
     * @private
     * @param {cc.Node} slotNode
     * @returns {{width:number,height:number}}
     */
    _getSlotIconDisplaySize(slotNode) {
        const slotSize = this.itemSlotSize || 80;
        const fallback = { width: slotSize * 0.8, height: slotSize * 0.8 };
        if (!slotNode || !slotNode.isValid) return fallback;

        const iconNode = slotNode.getChildByName("Icon") || slotNode;
        if (!iconNode || !iconNode.isValid) return fallback;

        // 优先用世界包围盒拿到“最终显示尺寸”（包含缩放）
        try {
            if (iconNode.getBoundingBoxToWorld) {
                const rect = iconNode.getBoundingBoxToWorld();
                if (rect && rect.width > 0 && rect.height > 0) {
                    return { width: rect.width, height: rect.height };
                }
            }
        } catch (e) {
            // 忽略
        }

        // 兜底：用内容尺寸 * slotNode 缩放
        const raw = iconNode.getContentSize ? iconNode.getContentSize() : null;
        const w = raw && raw.width ? raw.width : slotSize;
        const h = raw && raw.height ? raw.height : slotSize;
        const sx = typeof slotNode.scaleX === "number" ? slotNode.scaleX : 1;
        const sy = typeof slotNode.scaleY === "number" ? slotNode.scaleY : 1;
        return { width: w * sx, height: h * sy };
    },

    /**
     * 将当前角色的装备加成应用到当前显示的人物原型上
     */
    async _applyEquipmentBonusesToDisplay() {
        if (!this.currentDisplayPrefab || !this.currentUnitData) return;
        const stats = this.currentDisplayPrefab.getComponent("StatsComponent");
        if (!stats || !stats.applyEquipmentBonuses) return;
        const bonuses = await this._getEquipmentBonuses(this.currentUnitData.name);
        stats.applyEquipmentBonuses(bonuses);
        if (this.statsPanel && this.statsPanel.active) {
            this._showStatsPanel(this.currentUnitData);
        }
    },

    /**
     * 设置道具格子内容
     * @private
     * @param {cc.Node} slotNode - 道具格子节点
     * @param {Object} item - 道具数据 { id, name, icon, count }
     */
    _setItemSlot(slotNode, item) {
        if (!item || !item.count || item.count <= 0) {
            // 道具不存在或数量为0，清空格子
            this._initItemSlot(slotNode, slotNode._slotIndex);
            return;
        }

        // 查找图标节点和数量标签
        const iconNode = slotNode.getChildByName("Icon") || slotNode;
        const countLabel = slotNode.getChildByName("CountLabel");

        // 设置图标
        if (iconNode && item.icon) {
            const sprite = iconNode.getComponent(cc.Sprite);
            if (sprite) {
                sprite.spriteFrame = item.icon;
            }
            iconNode.opacity = 255; // 完全不透明
        }

        // 设置数量
        if (countLabel) {
            const label = countLabel.getComponent(cc.Label);
            if (label) {
                if (item.count && item.count > 1) {
                    label.string = item.count.toString();
                } else {
                    label.string = "";
                }
            }
        }

        // 保存道具数据
        slotNode._itemData = item;
        slotNode._isEmpty = false;

        // 记录触摸开始时间（用于区分点击和长按）；装备类道具记录拖拽起点
        slotNode._touchStartTime = null;
        slotNode._touchStartPos = null;
        slotNode.off(cc.Node.EventType.TOUCH_START);
        slotNode.on(cc.Node.EventType.TOUCH_START, (event) => {
            slotNode._touchStartTime = Date.now();
            slotNode._touchStartPos = event.getLocation();
            const cfg = item.config || (item.id && require("ItemConfig").getItemById(item.id));
            if (cfg && cfg.type === "equipment") {
                this._draggingSlot = slotNode;
                this._draggingItem = item;
                this._dragIconSize = this._getSlotIconDisplaySize(slotNode);
                // 记录原始图标在 Canvas 下的位置（用于从原格子“拽出来”）
                const iconNode = slotNode.getChildByName("Icon") || slotNode;
                const canvas = cc.find("Canvas");
                if (canvas && iconNode && iconNode.isValid && iconNode.convertToWorldSpaceAR && canvas.convertToNodeSpaceAR) {
                    const worldPos = iconNode.convertToWorldSpaceAR(cc.v2(0, 0));
                    this._dragStartCanvasPos = canvas.convertToNodeSpaceAR(worldPos);
                } else {
                    this._dragStartCanvasPos = null;
                }
            }
        }, this);

        // 绑定触摸结束事件（处理左键点击和长按；若正在拖拽则不再触发点击）
        slotNode.off(cc.Node.EventType.TOUCH_END);
        slotNode.on(cc.Node.EventType.TOUCH_END, (event) => {
            if (this._dragSprite) {
                slotNode._touchStartTime = null;
                return;
            }
            const pressTime = slotNode._touchStartTime ? (Date.now() - slotNode._touchStartTime) : 0;
            const LONG_PRESS_TIME = 500;

            if (pressTime >= LONG_PRESS_TIME) {
                event.stopPropagation();
                this._showItemTooltipOnTouch(slotNode, item, event);
            } else if (pressTime > 0 && pressTime < LONG_PRESS_TIME) {
                event.stopPropagation();
                this._onItemSlotClick(slotNode, item);
            }
            slotNode._touchStartTime = null;
        }, this);

        // 绑定右键点击事件（显示道具信息）- 仅PC端
        this._setupItemTooltip(slotNode, item);

        // 确保可以接收触摸事件
        slotNode.setContentSize(this.itemSlotSize, this.itemSlotSize);
    },

    /**
     * 设置道具格子的右键点击事件（显示道具信息）
     * @private
     * @param {cc.Node} slotNode - 道具格子节点
     * @param {Object} item - 道具数据
     */
    _setupItemTooltip(slotNode, item) {
        if (!this.itemTooltip) {
            // 如果没有设置tooltip节点，跳过
            cc.warn("[CharacterViewUI] itemTooltip节点未绑定，跳过tooltip设置");
            return;
        }

        const tooltipComponent = this.itemTooltip.getComponent("ItemTooltip");
        if (!tooltipComponent) {
            cc.warn("[CharacterViewUI] itemTooltip节点没有ItemTooltip组件，请添加ItemTooltip组件");
            return;
        }

        if (!item || !item.id) {
            cc.warn("[CharacterViewUI] 道具数据无效，缺少id字段", item);
            return;
        }

        // 添加调试日志
        cc.log("[CharacterViewUI] 设置道具右键点击tooltip:", item.id, "tooltip节点:", this.itemTooltip.name);

        // 移除旧的鼠标事件监听
        slotNode.off(cc.Node.EventType.MOUSE_DOWN);
        slotNode.off(cc.Node.EventType.MOUSE_UP);

        // 绑定鼠标右键按下事件（显示道具信息）
        slotNode.on(cc.Node.EventType.MOUSE_DOWN, (event) => {
            // 检查是否是右键
            // 注意：cc.Event.EventMouse.BUTTON_RIGHT 的值是 2
            const button = event.getButton ? event.getButton() : -1;
            if (button === 2 || button === cc.Event.EventMouse.BUTTON_RIGHT) {
                event.stopPropagation(); // 阻止事件冒泡，防止触发右键菜单
                event.preventDefault && event.preventDefault(); // 阻止默认右键菜单

                // 使用item.id作为itemId传递给tooltip
                const tooltipData = {
                    itemId: item.id,
                    count: item.count
                };

                // 传递道具格子节点，让tooltip显示在节点右上方
                tooltipComponent.showItemInfo(tooltipData, slotNode);

                cc.log("[CharacterViewUI] 右键点击道具，显示信息:", item.id, "按钮:", button);
            }
        }, this);

        // 绑定鼠标右键释放事件（隐藏道具信息）
        slotNode.on(cc.Node.EventType.MOUSE_UP, (event) => {
            // 检查是否是右键
            const button = event.getButton ? event.getButton() : -1;
            if (button === 2 || button === cc.Event.EventMouse.BUTTON_RIGHT) {
                event.stopPropagation();
                event.preventDefault && event.preventDefault();
                tooltipComponent.hideItemInfo();
            }
        }, this);

    },

    /**
     * 在触摸设备上显示道具信息（长按触发）
     * @private
     * @param {cc.Node} slotNode - 道具格子节点
     * @param {Object} item - 道具数据
     * @param {cc.Event} event - 触摸事件
     */
    _showItemTooltipOnTouch(slotNode, item, event) {
        if (!this.itemTooltip) {
            return;
        }

        const tooltipComponent = this.itemTooltip.getComponent("ItemTooltip");
        if (!tooltipComponent) {
            return;
        }

        const tooltipData = {
            itemId: item.id,
            count: item.count
        };

        // 传递道具格子节点，让tooltip显示在节点右上方
        tooltipComponent.showItemInfo(tooltipData, slotNode);

        cc.log("[CharacterViewUI] 长按道具，显示信息:", item.id);
    },

    /**
     * 道具格子点击事件（使用道具）
     * @private
     * @param {cc.Node} slotNode - 道具格子节点
     * @param {Object} item - 道具数据
     */
    async _onItemSlotClick(slotNode, item) {
        if (!item || !item.config) {
            cc.warn("[CharacterViewUI] 无效的道具数据");
            return;
        }

        // 检查是否有当前显示的角色
        if (!this.currentDisplayPrefab) {
            cc.warn("[CharacterViewUI] 请先选择一个角色");
            // 可以显示提示给用户
            return;
        }

        const ItemSystem = require("ItemSystem");

        // 使用道具
        const result = await ItemSystem.useItem(this.currentDisplayPrefab, item.id);

        if (result.success) {
            cc.log(`[CharacterViewUI] ✓ 使用道具成功: ${item.name} - ${result.message}`);
            if (result.skillName) {
                cc.log(`[CharacterViewUI] 角色已学会技能: ${result.skillName}`);
            }

            // 刷新道具栏显示
            await this._updateInventory();

            // 更新角色属性显示（如果属性面板已打开）
            if (this.statsPanel && this.statsPanel.active && this.currentUnitData) {
                this._showStatsPanel(this.currentUnitData);
            }

            // TODO: 可以显示使用成功的提示UI（如 Toast 显示「技能学习成功」）
        } else {
            cc.warn(`[CharacterViewUI] ✗ 使用道具失败: ${item.name} - ${result.message}`);
            // TODO: 可以显示错误提示UI
        }
    },

    /**
     * 设置道具图标（从ItemIconSetter组件获取）
     * @private
     */
    _setupItemIcons() {
        // 查找场景中的ItemIconSetter组件
        const scene = cc.director.getScene();
        if (!scene) {
            return;
        }

        const canvas = scene.getChildByName("Canvas");
        if (!canvas) {
            return;
        }

        // 查找ItemIconSetter组件
        const iconSetter = canvas.getComponentInChildren("ItemIconSetter");
        if (iconSetter) {
            cc.log("[CharacterViewUI] 找到ItemIconSetter组件，道具图标已设置");
        } else {
            cc.log("[CharacterViewUI] 未找到ItemIconSetter组件，道具图标需要在代码中设置");
        }
    },

    /**
     * 初始化默认道具（添加5个升级药水，仅首次进入时）
     * @private
     */
    async _initDefaultItems() {
        const ItemDataManager = require("ItemDataManager");

        // 检查是否已经初始化过道具（使用localStorage标志）
        const INIT_FLAG_KEY = "character_view_items_initialized";
        const hasInitialized = cc.sys.localStorage.getItem(INIT_FLAG_KEY);

        if (hasInitialized) {
            // 已经初始化过，不再自动添加道具
            cc.log("[CharacterViewUI] 道具已初始化过，跳过自动添加");
            return;
        }

        // 检查是否已有升级药水
        const currentCount = await ItemDataManager.getItemCount("upgrade_potion");

        // 如果还没有升级药水，添加5个（仅首次）
        if (currentCount === 0) {
            const success = await ItemDataManager.addItem("upgrade_potion", 10);
            if (success) {
                cc.log("[CharacterViewUI] ✓ 首次进入，已添加10个升级药水到全局道具栏");

                // 标记已初始化，确保只初始化一次
                cc.sys.localStorage.setItem(INIT_FLAG_KEY, "true");

                // 如果当前已选中角色，刷新道具栏显示
                if (this.currentUnitData) {
                    await this._updateInventory();
                }
            } else {
                cc.error("[CharacterViewUI] ✗ 添加升级药水失败");
            }
        } else {
            // 如果已有升级药水，也标记为已初始化（可能是从其他地方添加的）
            cc.sys.localStorage.setItem(INIT_FLAG_KEY, "true");
            cc.log(`[CharacterViewUI] 全局道具栏已有 ${currentCount} 个升级药水，标记为已初始化`);
        }
    },

    /**
     * 获取道具列表（全局共享，所有角色共用）
     * @private
     * @param {string} characterName - 角色名称（已废弃，保留用于兼容）
     * @returns {Promise<Array>|Array} 道具列表 [{ id, name, icon, count }, ...]（服务器模式下返回Promise）
     */
    async _getCharacterItems(characterName) {
        const ItemDataManager = require("ItemDataManager");

        // 获取全局道具（所有角色共享，忽略characterName参数）
        const itemsWithConfig = await ItemDataManager.getAllItemsWithConfig();

        // 转换为显示格式，并过滤掉数量为0的道具（一次性消耗品使用完后应该消失）
        return itemsWithConfig
            .filter(item => item.count > 0) // 只显示数量大于0的道具
            .map(item => {
                return {
                    id: item.itemId,
                    name: item.config.displayName || item.config.name,
                    icon: item.config.icon, // SpriteFrame资源
                    count: item.count,
                    config: item.config // 保存完整配置，用于后续使用道具
                };
            });
    },

    /**
     * 创建头像
     * @private
     * @param {Object} unitData - 单位数据
     * @param {string} team - 队伍类型（"hero" 或 "monster"）
     * @param {number} index - 索引
     */
    _createAvatar(unitData, team, index) {
        if (!unitData || !unitData.name) {
            cc.error(`[CharacterViewUI] _createAvatar: unitData无效`, unitData);
            return;
        }

        // 实例化头像Prefab
        const avatarNode = cc.instantiate(this.avatarPrefab);
        avatarNode.name = `Avatar_${unitData.name}`;

        // 保存单位数据到节点（浅拷贝，保留Prefab引用）
        avatarNode._unitData = Object.assign({}, unitData);
        avatarNode._team = team;

        cc.log(`[CharacterViewUI] 创建头像: name=${unitData.name}, team=${team}, index=${index}, prefab=${unitData.prefab ? unitData.prefab.name : 'null'}`);

        // 添加到容器
        this.avatarListContainer.addChild(avatarNode);

        // 设置位置（垂直排列）
        const spacing = this.avatarSpacing || 100;
        const startY = 200; // 从上方开始
        const y = startY - (index * spacing);
        avatarNode.setPosition(0, y);//TODO: 这里需要根据队伍类型设置位置

        // 设置头像图片
        const avatarComp = avatarNode.getComponent("AvatarItem");
        if (avatarComp) {
            avatarComp.init(unitData, team, this);
        } else {
            // 如果没有组件，手动设置
            const iconNode = avatarNode.getChildByName("Icon");
            if (iconNode && unitData.icon) {
                const sprite = iconNode.getComponent(cc.Sprite);
                if (sprite) {
                    sprite.spriteFrame = unitData.icon;
                }
            }
        }

        // 绑定点击事件（从节点获取unitData，避免闭包引用问题）
        avatarNode.on(cc.Node.EventType.TOUCH_END, () => {
            // 优先从节点获取unitData（确保数据正确）
            const nodeUnitData = avatarNode._unitData || unitData;
            const nodeTeam = avatarNode._team || team;
            cc.log(`[CharacterViewUI] 头像点击事件触发: 节点名称=${avatarNode.name}, unitData.name=${nodeUnitData.name}, team=${nodeTeam}`);
            this._onAvatarClick(nodeUnitData, nodeTeam);
        }, this);

        // 确保可以接收触摸事件
        avatarNode.setContentSize(100, 100);
    },

    /**
     * 头像点击事件
     * @private
     * @param {Object} unitData - 单位数据
     * @param {string} team - 队伍类型
     */
    async _onAvatarClick(unitData, team) {
        if (!unitData) {
            cc.error(`[CharacterViewUI] 点击头像失败: unitData为空`);
            return;
        }
        cc.log(`[CharacterViewUI] 点击头像: ${unitData.name}, team=${team}, prefab=${unitData.prefab ? unitData.prefab.name : 'null'}`);
        this._displayCharacterPrefab(unitData);
    },

    /**
     * 显示人物原型
     * @private
     * @param {Object} unitData - 单位数据
     */
    async _displayCharacterPrefab(unitData) {
        if (!this.characterDisplayArea) {
            cc.warn("[CharacterViewUI] 未设置characterDisplayArea，无法显示人物原型");
            return;
        }

        // 清除之前显示的原型
        if (this.currentDisplayPrefab) {
            this.currentDisplayPrefab.destroy();
            this.currentDisplayPrefab = null;
        }

        // 隐藏属性面板
        if (this.statsPanel) {
            this.statsPanel.active = false;
        }

        // 保存当前单位数据
        this.currentUnitData = unitData;

        // 更新道具栏与装备栏（每位英雄装备独立）
        await this._updateInventory();
        await this._updateEquipmentBar();

        // 如果有Prefab，实例化并显示
        if (unitData.prefab) {
            const prefabInstance = cc.instantiate(unitData.prefab);
            prefabInstance.name = `Display_${unitData.name}`;

            // 保存原始角色名称，用于数据保存和加载
            prefabInstance._originalCharacterName = unitData.name;

            // 确保节点可见
            prefabInstance.active = true;
            prefabInstance.opacity = 255;

            this.characterDisplayArea.addChild(prefabInstance);
            this.currentDisplayPrefab = prefabInstance;

            // 设置位置和缩放（居中显示，缩小显示，位置向上调整）
            prefabInstance.setPosition(0, 100);
            prefabInstance.setScale(0.7);

            // 初始化角色属性（根据保存的等级数据，支持异步）
            this._initCharacterStats(prefabInstance, unitData).catch(err => {
                cc.error(`[CharacterViewUI] 初始化角色属性失败: ${err.message}`);
            });

            // 绑定点击事件（点击人物原型显示属性面板）
            prefabInstance.on(cc.Node.EventType.TOUCH_END, (event) => {
                event.stopPropagation(); // 阻止事件冒泡
                this._showStatsPanel(unitData);
            }, this);

            // 确保可以接收触摸事件
            prefabInstance.setContentSize(200, 200);

            // 标记这是人物原型节点（用于判断点击位置）
            prefabInstance._isCharacterPrefab = true;

            cc.log(`[CharacterViewUI] ✓ 显示人物原型: ${unitData.name}`);
        } else {
            cc.warn(`[CharacterViewUI] ✗ 单位 ${unitData.name} 没有设置prefab`);
        }
    },

    /**
     * 初始化角色属性（根据保存的等级数据）
     * @private
     * @param {cc.Node} prefabInstance - 人物原型实例
     * @param {Object} unitData - 单位数据
     */
    async _initCharacterStats(prefabInstance, unitData) {
        const CharacterDataManager = require("CharacterDataManager");
        // StatsComponent 是组件类，不需要 require，直接使用 getComponent 获取

        // 获取StatsComponent组件
        const stats = prefabInstance.getComponent("StatsComponent");
        if (!stats) {
            cc.log(`[CharacterViewUI] ${unitData.name} 没有StatsComponent组件，跳过属性初始化`);
            return;
        }

        // 从本地存储加载角色的等级数据（支持异步）
        const savedData = await CharacterDataManager.loadCharacterLevel(unitData.name);

        if (savedData) {
            // 如果有保存的数据，使用保存的基础属性
            stats.baseHp = savedData.baseHp || unitData.hp || 100;
            stats.baseAttack = savedData.baseAttack || unitData.attack || 1;
            stats.baseDefense = savedData.baseDefense || unitData.defense || 1;
            stats.baseSpeed = savedData.baseSpeed || unitData.speed || 1;
            stats.baseCrit = savedData.baseCrit || unitData.crit || 0;
            stats.baseMiss = savedData.baseMiss || unitData.miss || 0;

            // 设置等级和经验值
            stats.level = savedData.level || 1;
            stats.exp = savedData.exp || 0;

            // 应用等级加成
            stats._applyLevelBonus();
        } else {
            // 如果没有保存的数据，使用unitData中的基础属性
            stats.baseHp = unitData.hp || 100;
            stats.baseAttack = unitData.attack || 1;
            stats.baseDefense = unitData.defense || 1;
            stats.baseSpeed = unitData.speed || 1;
            stats.baseCrit = unitData.crit || 0;
            stats.baseMiss = unitData.miss || 0;

            // 设置默认等级和经验值
            stats.level = 1;
            stats.exp = 0;

            // 应用等级加成
            stats._applyLevelBonus();
        }

        // 设置当前生命值为最大生命值（满血显示）
        stats.hp = stats.maxHp;

        // 更新血条显示
        if (stats.updateHealthBar) {
            stats.updateHealthBar();
        }

        // 更新经验条显示
        if (stats.updateExpBar) {
            stats.updateExpBar();
        }

        // 更新怒气条显示（初始为0）
        if (stats.updateRageBar) {
            stats.rage = 0;
            stats.updateRageBar();
        }

        // 应用装备加成（每位英雄独立装备，属性同步更新）
        const bonuses = await this._getEquipmentBonuses(unitData.name);
        if (stats.applyEquipmentBonuses) {
            stats.applyEquipmentBonuses(bonuses);
        }
    },

    /**
     * 根据角色装备计算属性加成
     * @param {string} characterName - 角色名称
     * @returns {Promise<{ attack: number, defense: number, speed: number }>}
     */
    async _getEquipmentBonuses(characterName) {
        const EquipmentDataManager = require("EquipmentDataManager");
        const ItemConfig = require("ItemConfig");
        const { slots } = await EquipmentDataManager.getEquipment(characterName);
        const bonuses = { attack: 0, defense: 0, speed: 0 };
        for (const itemId of slots) {
            if (!itemId) continue;
            const cfg = ItemConfig.getItemById(itemId);
            if (!cfg || !cfg.effectType) continue;
            const t = String(cfg.effectType).toLowerCase();
            const v = cfg.effectValue || 0;
            if (t === "attack") bonuses.attack += v;
            else if (t === "defense") bonuses.defense += v;
            else if (t === "speed") bonuses.speed += v;
        }
        return bonuses;
    },

    /**
     * 显示属性面板
     * @private
     * @param {Object} unitData - 单位数据
     */
    _showStatsPanel(unitData) {
        if (!this.statsPanel) {
            cc.warn("[CharacterViewUI] 未设置statsPanel，无法显示属性面板");
            return;
        }

        // 获取当前显示的人物原型的StatsComponent
        if (!this.currentDisplayPrefab) {
            return;
        }

        // 获取StatsComponent组件
        const stats = this.currentDisplayPrefab.getComponent("StatsComponent");

        if (!stats) {
            cc.warn(`[CharacterViewUI] ${unitData.name} 没有StatsComponent组件，无法显示属性`);
            return;
        }

        // 更新属性标签
        if (this.hpLabel) {
            this.hpLabel.string = `生命值: ${stats.hp}/${stats.maxHp}`;
        }
        if (this.attackLabel) {
            this.attackLabel.string = `攻击力: ${stats.attack}`;
        }
        if (this.defenseLabel) {
            this.defenseLabel.string = `防御力: ${stats.defense}`;
        }
        if (this.speedLabel) {
            this.speedLabel.string = `速度: ${stats.speed}`;
        }
        if (this.critLabel) {
            this.critLabel.string = `暴击率: ${(stats.crit * 100).toFixed(1)}%`;
        }
        if (this.missLabel) {
            this.missLabel.string = `闪避率: ${(stats.miss * 100).toFixed(1)}%`;
        }
        if (this.levelLabel) {
            this.levelLabel.string = `等级: ${stats.level}`;
        }
        if (this.expLabel) {
            const LevelConfig = require("LevelConfig");
            const currentLevelExp = LevelConfig.getExpForLevel(stats.level);
            const nextLevelExp = LevelConfig.getExpForLevel(stats.level + 1);
            const expInCurrentLevel = stats.exp - currentLevelExp;
            const expToNext = nextLevelExp - currentLevelExp;
            if (expToNext > 0) {
                this.expLabel.string = `经验值: ${expInCurrentLevel}/${expToNext}`;
            } else {
                this.expLabel.string = `经验值: 已满级`;
            }
        }

        // 显示属性面板（带动画）
        this.statsPanel.active = true;
        this.statsPanel.setScale(0.8);
        this.statsPanel.opacity = 0;

        // 设置面板位置（显示在人物原型附近）
        if (this.characterDisplayArea) {
            const displayPos = this.characterDisplayArea.getPosition();
            this.statsPanel.setPosition(displayPos.x + 250, displayPos.y); // 显示在右侧
        }

        cc.tween(this.statsPanel)
            .to(0.2, { scale: 1.0, opacity: 255 }, { easing: 'backOut' })
            .start();

        cc.log(`[CharacterViewUI] 显示属性面板: ${unitData.name}`);
    },

    /**
     * 点击Canvas事件（关闭属性面板）
     * @private
     */
    _onCanvasClick(event) {
        // 如果点击的是属性面板本身，不关闭
        if (this.statsPanel && cc.isValid(this.statsPanel) && this.statsPanel.active) {
            const target = event.target;
            // 检查点击的目标是否是属性面板或其子节点
            let isStatsPanel = false;
            let node = target;
            while (node) {
                if (node === this.statsPanel) {
                    isStatsPanel = true;
                    break;
                }
                node = node.parent;
            }
            if (isStatsPanel) {
                return; // 点击的是属性面板，不关闭
            }
        }

        // 如果点击的是人物原型，不关闭（由人物原型的点击事件处理）
        if (this.currentDisplayPrefab && cc.isValid(this.currentDisplayPrefab)) {
            const target = event.target;
            let node = target;
            while (node) {
                if (node === this.currentDisplayPrefab || node._isCharacterPrefab) {
                    return; // 点击的是人物原型，不关闭
                }
                node = node.parent;
            }
        }

        // 点击其他区域，关闭属性面板
        if (this.statsPanel && this.statsPanel.active) {
            cc.tween(this.statsPanel)
                .to(0.2, { opacity: 0, scale: 0.8 })
                .call(() => {
                    this.statsPanel.active = false;
                })
                .start();
            cc.log(`[CharacterViewUI] 关闭属性面板`);
        }
    },

    onDestroy() {
        // 清理事件监听
        const canvas = cc.find("Canvas");
        if (canvas) {
            canvas.off(cc.Node.EventType.TOUCH_END, this._onCanvasClick, this);
        }
    }
});
