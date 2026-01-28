/**
 * 商城UI组件
 * 负责展示商品列表、处理购买、显示金币等
 */
const ShopConfig = require("ShopConfig");
const CoinManager = require("CoinManager");
const ItemDataManager = require("ItemDataManager");

cc.Class({
    extends: cc.Component,

    properties: {
        // 商品列表容器
        itemListContainer: {
            default: null,
            type: cc.Node,
            tooltip: "商品列表容器节点（用于放置商品项）"
        },

        // 商品项Prefab
        shopItemPrefab: {
            default: null,
            type: cc.Prefab,
            tooltip: "商品项Prefab（包含图标、名称、价格、购买按钮等）"
        },

        // 金币显示标签
        coinLabel: {
            default: null,
            type: cc.Label,
            tooltip: "金币数量显示标签"
        },

        // 返回按钮
        backButton: {
            default: null,
            type: cc.Node,
            tooltip: "返回按钮节点"
        },

        // 刷新按钮（可选）
        refreshButton: {
            default: null,
            type: cc.Node,
            tooltip: "刷新按钮节点（刷新金币和商品列表）"
        },

        // 商品项布局配置（参考专业商城布局）
        shopItemWidth: {
            default: 180,
            tooltip: "商品项宽度（卡片宽度）"
        },
        shopItemHeight: {
            default: 240,
            tooltip: "商品项高度（卡片高度）"
        },
        shopItemSpacing: {
            default: 15,
            tooltip: "商品项之间的间距"
        },
        shopColumns: {
            default: 4,
            tooltip: "商品列表列数（每行显示的商品数量，参考图是4列）"
        },
        shopPadding: {
            default: 20,
            tooltip: "商品列表容器的内边距"
        }
    },

    onLoad() {
        // 绑定返回按钮事件
        if (this.backButton) {
            this.backButton.on(cc.Node.EventType.TOUCH_END, this.onBackClick, this);
        }

        // 绑定刷新按钮事件
        if (this.refreshButton) {
            this.refreshButton.on(cc.Node.EventType.TOUCH_END, this.refresh, this);
        }
    },

    /**
     * 初始化商城UI
     */
    async init() {
        cc.log("[ShopUI] 初始化商城UI");

        // 刷新金币显示
        await this.updateCoinDisplay();

        // 加载商品列表
        this.loadShopItems();
    },

    /**
     * 更新金币显示
     */
    async updateCoinDisplay() {
        try {
            const coins = await CoinManager.getCoins();
            if (this.coinLabel) {
                this.coinLabel.string = `金币: ${coins}`;
            }
            cc.log(`[ShopUI] 金币更新: ${coins}`);
        } catch (error) {
            cc.error(`[ShopUI] 更新金币显示失败:`, error);
            if (this.coinLabel) {
                this.coinLabel.string = "金币: --";
            }
        }
    },

    /**
     * 加载商品列表
     */
    loadShopItems() {
        if (!this.itemListContainer) {
            cc.error("[ShopUI] 商品列表容器未设置");
            return;
        }

        if (!this.shopItemPrefab) {
            cc.error("[ShopUI] 商品项Prefab未设置");
            return;
        }

        // 清空现有商品
        this.itemListContainer.removeAllChildren();

        // 获取所有商品
        const shopItems = ShopConfig.getAllItems();

        // 设置容器布局（网格布局）
        this._setupContainerLayout(shopItems.length);

        // 为每个商品创建UI项
        shopItems.forEach((shopItem, index) => {
            const itemNode = cc.instantiate(this.shopItemPrefab);
            itemNode.name = `ShopItem_${shopItem.id}`;

            // ⭐ 关键：先设置商品项大小和位置（在设置内容之前）
            this._layoutShopItem(itemNode, index, shopItems.length);

            // 设置商品数据（包括内部布局）
            this.setupShopItem(itemNode, shopItem);

            // 添加到容器
            this.itemListContainer.addChild(itemNode);

            cc.log(`[ShopUI] 创建商品项 ${index}: ${shopItem.name}, 位置: (${itemNode.x}, ${itemNode.y}), 大小: ${itemNode.width} x ${itemNode.height}`);
        });

        cc.log(`[ShopUI] 已加载 ${shopItems.length} 个商品`);
    },

    /**
     * 设置容器布局（参考专业商城布局）
     * @private
     * @param {number} itemCount - 商品数量
     */
    _setupContainerLayout(itemCount) {
        if (!this.itemListContainer) {
            cc.error("[ShopUI] 商品列表容器未设置，无法布局");
            return;
        }

        // 计算需要的行数
        const rows = Math.ceil(itemCount / this.shopColumns);

        // 计算容器大小（包含内边距）
        const containerWidth = this.shopColumns * (this.shopItemWidth + this.shopItemSpacing) - this.shopItemSpacing + this.shopPadding * 2;
        const containerHeight = rows * (this.shopItemHeight + this.shopItemSpacing) - this.shopItemSpacing + this.shopPadding * 2;

        // 设置容器大小和锚点
        this.itemListContainer.setContentSize(containerWidth, containerHeight);
        this.itemListContainer.setAnchorPoint(0.5, 0.5);
        this.itemListContainer.setPosition(0, 0); // 确保容器在中心

        // 设置容器背景（可选，如果需要白色背景卡片效果）
        this._setupContainerBackground();

        cc.log(`[ShopUI] ✓ 容器布局完成: ${this.shopColumns}列 x ${rows}行, 大小: ${containerWidth} x ${containerHeight}, 商品数: ${itemCount}`);
        cc.log(`[ShopUI] 商品项配置: 宽度=${this.shopItemWidth}, 高度=${this.shopItemHeight}, 间距=${this.shopItemSpacing}`);
    },

    /**
     * 设置容器背景（白色卡片效果）
     * @private
     */
    _setupContainerBackground() {
        // 检查是否已有背景节点
        let bgNode = this.itemListContainer.getChildByName("Background");
        if (!bgNode) {
            bgNode = new cc.Node("Background");
            const graphics = bgNode.addComponent(cc.Graphics);

            // 绘制白色圆角矩形背景
            const width = this.itemListContainer.width;
            const height = this.itemListContainer.height;
            const radius = 10; // 圆角半径

            graphics.fillColor = new cc.Color(255, 255, 255, 255);
            graphics.roundRect(-width / 2, -height / 2, width, height, radius);
            graphics.fill();

            // 设置阴影效果（可选）
            bgNode.setContentSize(width, height);
            bgNode.setAnchorPoint(0.5, 0.5);
            bgNode.setPosition(0, 0);
            bgNode.zIndex = -1; // 背景在最下层

            this.itemListContainer.addChild(bgNode);
        }
    },

    /**
     * 布局商品项（设置位置）
     * @private
     * @param {cc.Node} itemNode - 商品项节点
     * @param {number} index - 商品索引
     * @param {number} totalItems - 商品总数
     */
    _layoutShopItem(itemNode, index, totalItems) {
        // 计算行列位置
        const row = Math.floor(index / this.shopColumns);
        const col = index % this.shopColumns;
        const totalRows = Math.ceil(totalItems / this.shopColumns);

        // 计算位置（居中布局）
        const totalWidth = this.shopColumns * (this.shopItemWidth + this.shopItemSpacing) - this.shopItemSpacing;
        const totalHeight = totalRows * (this.shopItemHeight + this.shopItemSpacing) - this.shopItemSpacing;

        const startX = -totalWidth / 2 + this.shopItemWidth / 2;
        const startY = totalHeight / 2 - this.shopItemHeight / 2;

        const x = startX + col * (this.shopItemWidth + this.shopItemSpacing);
        const y = startY - row * (this.shopItemHeight + this.shopItemSpacing);

        // 设置商品项大小和位置
        itemNode.setContentSize(this.shopItemWidth, this.shopItemHeight);
        itemNode.setAnchorPoint(0.5, 0.5);
        itemNode.setPosition(x, y);
    },

    /**
     * 设置商品项UI
     * @param {cc.Node} itemNode - 商品项节点
     * @param {Object} shopItem - 商品数据
     */
    setupShopItem(itemNode, shopItem) {
        // 查找子节点（根据Prefab结构调整）
        const nameLabel = itemNode.getChildByName("NameLabel");
        const priceLabel = itemNode.getChildByName("PriceLabel");
        const descriptionLabel = itemNode.getChildByName("DescriptionLabel");
        const iconNode = itemNode.getChildByName("Icon");
        // ⭐ 修改：按钮名称是"购买"而不是"BuyButton"
        const buyButton = itemNode.getChildByName("购买") || itemNode.getChildByName("BuyButton");

        // ⭐ 调试：输出找到的节点
        cc.log(`[ShopUI] 设置商品 ${shopItem.name}:`, {
            nameLabel: !!nameLabel,
            priceLabel: !!priceLabel,
            descriptionLabel: !!descriptionLabel,
            iconNode: !!iconNode,
            buyButton: !!buyButton,
            buyButtonName: buyButton ? buyButton.name : '未找到'
        });

        // 设置商品项内部布局
        this._layoutShopItemContent(itemNode, iconNode, nameLabel, priceLabel, descriptionLabel, buyButton);

        // 设置名称
        if (nameLabel) {
            const label = nameLabel.getComponent(cc.Label);
            if (label) {
                label.string = shopItem.name;
                // 设置字体样式
                label.fontSize = 24;
                label.node.color = cc.Color.WHITE;
                label.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
            }
        }

        // 设置价格
        if (priceLabel) {
            const label = priceLabel.getComponent(cc.Label);
            if (label) {
                label.string = `${shopItem.price} 金币`;
                // 设置字体样式（价格更突出）
                label.fontSize = 28;
                label.node.color = new cc.Color(255, 215, 0, 255); // 金色
                label.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
            }
        }

        // 设置描述
        if (descriptionLabel) {
            const label = descriptionLabel.getComponent(cc.Label);
            if (label) {
                label.string = shopItem.description || "";
                // 设置字体样式
                label.fontSize = 18;
                label.node.color = new cc.Color(200, 200, 200, 255); // 浅灰色
                label.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
                label.enableWrapText = true; // 允许换行
                // 设置描述标签宽度（留出左右边距）
                const descWidth = this.shopItemWidth - 20;
                descriptionLabel.setContentSize(descWidth, 60);
            }
        }

        // 设置图标（如果有）
        if (iconNode) {
            if (shopItem.icon) {
                const sprite = iconNode.getComponent(cc.Sprite);
                if (sprite) {
                    sprite.spriteFrame = shopItem.icon;
                }
            }
            // 设置图标大小和位置
            iconNode.setContentSize(80, 80);
            iconNode.setAnchorPoint(0.5, 0.5);
        }

        // 设置购买按钮（参考专业商城样式：蓝色按钮，白色文字）
        if (buyButton) {
            const button = buyButton.getComponent(cc.Button);
            if (button) {
                // 查找按钮文字标签
                let label = buyButton.getChildByName("Label");
                if (!label) {
                    // 如果没有Label子节点，创建一个
                    label = new cc.Node("Label");
                    const labelComp = label.addComponent(cc.Label);
                    labelComp.string = "购买"; // 按钮文字改为"购买"
                    labelComp.fontSize = 18;
                    labelComp.node.color = cc.Color.WHITE;
                    labelComp.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
                    labelComp.verticalAlign = cc.Label.VerticalAlign.CENTER;
                    label.setContentSize(buyButton.width, buyButton.height);
                    label.setAnchorPoint(0.5, 0.5);
                    label.setPosition(0, 0);
                    buyButton.addChild(label);
                } else {
                    const labelComp = label.getComponent(cc.Label);
                    if (labelComp) {
                        labelComp.string = "购买"; // 按钮文字改为"购买"
                        labelComp.fontSize = 18;
                        labelComp.node.color = cc.Color.WHITE;
                        labelComp.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
                        labelComp.verticalAlign = cc.Label.VerticalAlign.CENTER;
                    }
                }
            }

            // 绑定购买按钮事件
            buyButton.off(cc.Node.EventType.TOUCH_END); // 先移除旧事件
            buyButton.on(cc.Node.EventType.TOUCH_END, () => {
                this.onBuyItem(shopItem);
            }, this);
        }

        // 保存商品数据到节点
        itemNode._shopItemData = shopItem;
    },

    /**
     * 布局商品项内部内容（参考专业商城布局：图标->名称->价格->按钮）
     * @private
     * @param {cc.Node} itemNode - 商品项节点
     * @param {cc.Node} iconNode - 图标节点
     * @param {cc.Node} nameLabel - 名称标签
     * @param {cc.Node} priceLabel - 价格标签
     * @param {cc.Node} descriptionLabel - 描述标签
     * @param {cc.Node} buyButton - 购买按钮
     */
    _layoutShopItemContent(itemNode, iconNode, nameLabel, priceLabel, descriptionLabel, buyButton) {
        const itemHeight = this.shopItemHeight;
        const itemWidth = this.shopItemWidth;
        const padding = 12; // 内边距

        // ⭐ 调试：输出布局信息
        cc.log(`[ShopUI] 布局商品项内容: 大小=${itemWidth}x${itemHeight}`);

        // 参考布局：图标在顶部，名称在图标下方，价格在名称下方，按钮在最底部
        // 移除描述标签（参考图中没有单独的描述区域）

        // 图标位置（顶部，居中）
        if (iconNode) {
            iconNode.setPosition(0, itemHeight / 2 - padding - 50); // 距离顶部50px
            iconNode.setContentSize(80, 80); // 图标大小
            iconNode.setAnchorPoint(0.5, 0.5);
            iconNode.active = true;
            iconNode.opacity = 255;
            cc.log(`[ShopUI]   图标位置: (0, ${(itemHeight / 2 - padding - 50).toFixed(1)})`);
        } else {
            cc.warn(`[ShopUI]   未找到Icon节点`);
        }

        // 名称位置（图标下方，居中）
        if (nameLabel) {
            nameLabel.setPosition(0, itemHeight / 2 - padding - 140); // 图标下方约90px
            nameLabel.setContentSize(itemWidth - padding * 2, 28);
            nameLabel.setAnchorPoint(0.5, 0.5);
            nameLabel.active = true;
            cc.log(`[ShopUI]   名称位置: (0, ${(itemHeight / 2 - padding - 140).toFixed(1)})`);
        } else {
            cc.warn(`[ShopUI]   未找到NameLabel节点`);
        }

        // 价格位置（名称下方，居中，带金币图标效果）
        if (priceLabel) {
            priceLabel.setPosition(0, itemHeight / 2 - padding - 175); // 名称下方约35px
            priceLabel.setContentSize(itemWidth - padding * 2, 30);
            priceLabel.setAnchorPoint(0.5, 0.5);
            priceLabel.active = true;
            cc.log(`[ShopUI]   价格位置: (0, ${(itemHeight / 2 - padding - 175).toFixed(1)})`);
        } else {
            cc.warn(`[ShopUI]   未找到PriceLabel节点`);
        }

        // 描述位置（隐藏或放在价格下方，小字体）
        if (descriptionLabel) {
            // 参考图中没有明显的描述区域，可以隐藏或放在价格下方
            descriptionLabel.setPosition(0, itemHeight / 2 - padding - 200);
            descriptionLabel.setContentSize(itemWidth - padding * 2, 40);
            descriptionLabel.setAnchorPoint(0.5, 0.5);
            // 可选：隐藏描述
            descriptionLabel.active = false; // 默认隐藏描述
        }

        // 购买按钮位置（底部，居中，蓝色按钮样式）
        if (buyButton) {
            buyButton.setPosition(0, -itemHeight / 2 + padding + 25); // 距离底部25px
            buyButton.setContentSize(itemWidth - padding * 2, 40);
            buyButton.setAnchorPoint(0.5, 0.5);
            buyButton.active = true;

            // 设置按钮背景颜色（蓝色，参考图）
            const buttonSprite = buyButton.getComponent(cc.Sprite);
            if (!buttonSprite) {
                // 如果没有Sprite组件，添加Graphics组件绘制按钮背景
                let graphics = buyButton.getComponent(cc.Graphics);
                if (!graphics) {
                    graphics = buyButton.addComponent(cc.Graphics);
                }
                const btnWidth = itemWidth - padding * 2;
                const btnHeight = 40;
                graphics.fillColor = new cc.Color(70, 130, 200, 255); // 蓝色
                graphics.roundRect(-btnWidth / 2, -btnHeight / 2, btnWidth, btnHeight, 5);
                graphics.fill();
            }
            cc.log(`[ShopUI]   按钮位置: (0, ${(-itemHeight / 2 + padding + 25).toFixed(1)})`);
        } else {
            cc.warn(`[ShopUI]   未找到购买按钮节点（尝试查找"购买"或"BuyButton"）`);
        }
    },

    /**
     * 购买商品
     * @param {Object} shopItem - 商品数据
     */
    async onBuyItem(shopItem) {
        cc.log(`[ShopUI] 尝试购买商品: ${shopItem.name}, 价格: ${shopItem.price}`);

        // 检查金币是否足够（本地检查，避免不必要的请求）
        const currentCoins = await CoinManager.getCoins();
        if (currentCoins < shopItem.price) {
            cc.warn(`[ShopUI] 金币不足: 当前 ${currentCoins}, 需要 ${shopItem.price}`);
            // TODO: 显示提示UI
            return;
        }

        try {
            const ServerConfig = require("ServerConfig");

            // 如果使用服务器模式，使用服务器API购买（服务器会同时处理金币扣除和道具添加）
            if (ServerConfig.getStorageMode() === 'server' || ServerConfig.getStorageMode() === 'hybrid') {
                // ⭐ 修复：getBaseURL()已经包含/api，所以不需要再加/api
                const response = await fetch(`${ServerConfig.getBaseURL()}/shop/purchase`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        ...ServerConfig.getAuthHeaders()
                    },
                    body: JSON.stringify({
                        shopItemId: shopItem.id,
                        itemId: shopItem.itemId,
                        count: shopItem.count,
                        price: shopItem.price
                    })
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    if (errorData.error === 'insufficient_coins') {
                        cc.warn(`[ShopUI] 金币不足: 当前 ${errorData.currentCoins}, 需要 ${shopItem.price}`);
                    } else {
                        throw new Error(`购买失败: ${response.status}`);
                    }
                    return;
                }

                const data = await response.json();
                cc.log(`[ShopUI] ✓ 购买成功: ${shopItem.name} x${shopItem.count}, 剩余金币: ${data.coins}`);

                // 更新金币显示
                await this.updateCoinDisplay();

                // TODO: 显示购买成功提示UI
                return;
            }

            // 本地模式：分别处理金币和道具
            // 扣除金币
            const spendSuccess = await CoinManager.spendCoins(shopItem.price);
            if (!spendSuccess) {
                cc.error(`[ShopUI] 扣除金币失败`);
                return;
            }

            // 添加道具到背包
            const addSuccess = await ItemDataManager.addItem(shopItem.itemId, shopItem.count);
            if (!addSuccess) {
                cc.error(`[ShopUI] 添加道具失败`);
                // 如果添加道具失败，需要回退金币（这里简化处理，实际应该用事务）
                await CoinManager.addCoins(shopItem.price);
                return;
            }

            cc.log(`[ShopUI] ✓ 购买成功: ${shopItem.name} x${shopItem.count}`);

            // 更新金币显示
            await this.updateCoinDisplay();

            // TODO: 显示购买成功提示UI

        } catch (error) {
            cc.error(`[ShopUI] 购买商品失败:`, error);
        }
    },

    /**
     * 刷新（重新加载金币和商品列表）
     */
    async refresh() {
        cc.log("[ShopUI] 刷新商城数据");
        await this.updateCoinDisplay();
        this.loadShopItems();
    },

    /**
     * 返回按钮点击事件
     */
    onBackClick() {
        cc.log("[ShopUI] 返回按钮点击");
        // 返回主菜单场景
        cc.director.loadScene("MainMenu");
    }
});
