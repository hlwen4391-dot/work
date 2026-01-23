/**
 * 选择场景UI组件
 * 管理头像列表、勾选状态、中间显示区域
 */
cc.Class({
    extends: cc.Component,

    properties: {
        // 左侧英雄头像容器
        heroAvatarContainer: {
            default: null,
            type: cc.Node,
            tooltip: "左侧英雄头像容器节点"
        },

        // 右侧怪物头像容器
        monsterAvatarContainer: {
            default: null,
            type: cc.Node,
            tooltip: "右侧怪物头像容器节点"
        },

        // 中间显示区域（用于显示选中的人物原型）
        centerDisplayArea: {
            default: null,
            type: cc.Node,
            tooltip: "中间显示区域节点（用于显示选中的人物原型）"
        },

        // 头像Prefab（用于动态创建头像）
        avatarPrefab: {
            default: null,
            type: cc.Prefab,
            tooltip: "头像Prefab（包含头像图片和勾选标记）"
        },

        // 单位数据配置（不使用type，在代码中动态获取）
        // unitDataConfig: {
        //     default: null,
        //     type: require("UnitDataConfig"),
        //     tooltip: "单位数据配置（可选，如果不设置则从UnitDataConfig获取）"
        // },

        // 英雄头像资源列表（按顺序对应UnitDataConfig中的英雄）
        heroIcons: {
            default: [],
            type: [cc.SpriteFrame],
            tooltip: "英雄头像资源列表（按顺序：战士、法师...）"
        },

        // 怪物头像资源列表（按顺序对应UnitDataConfig中的怪物）
        monsterIcons: {
            default: [],
            type: [cc.SpriteFrame],
            tooltip: "怪物头像资源列表（按顺序：怪物、Boss...）"
        },

        // 英雄Prefab列表（按顺序对应UnitDataConfig中的英雄）
        heroPrefabs: {
            default: [],
            type: [cc.Prefab],
            tooltip: "英雄Prefab列表（用于在中间显示原型，按顺序：战士、法师...）"
        },

        // 怪物Prefab列表（按顺序对应UnitDataConfig中的怪物）
        monsterPrefabs: {
            default: [],
            type: [cc.Prefab],
            tooltip: "怪物Prefab列表（用于在中间显示原型，按顺序：怪物、Boss...）"
        },

        // 头像间距（垂直排列时使用）
        avatarSpacing: {
            default: 120,
            tooltip: "头像之间的垂直间距"
        },

        // 头像起始Y坐标
        avatarStartY: {
            default: 100,
            tooltip: "头像列表起始Y坐标（从上方开始）"
        }
    },

    onLoad() {
        // 获取单位数据配置
        if (!this.unitDataConfig) {
            this.unitDataConfig = require("UnitDataConfig");
        }

        // 从场景中查找UnitDataConfigComponent并应用配置
        this._loadConfigFromScene();

        // 选中的单位列表（用于传递给战斗场景）
        this.selectedHeros = [];
        this.selectedMonsters = [];

        // 当前显示的单位原型
        this.currentDisplayPrefab = null;

        // 初始化UI
        this._initAvatars();
    },

    /**
     * 从场景中加载配置
     * @private
     */
    _loadConfigFromScene() {
        // 应用英雄头像和Prefab配置
        if (this.heroIcons && this.heroIcons.length > 0) {
            this.heroIcons.forEach((icon, index) => {
                if (this.unitDataConfig.heros && this.unitDataConfig.heros[index] && icon) {
                    this.unitDataConfig.heros[index].icon = icon;
                    cc.log(`[SelectSceneUI] 设置英雄头像: ${this.unitDataConfig.heros[index].name} -> ${icon.name || '已设置'}`);
                }
            });
        }

        if (this.heroPrefabs && this.heroPrefabs.length > 0) {
            this.heroPrefabs.forEach((prefab, index) => {
                if (this.unitDataConfig.heros && this.unitDataConfig.heros[index] && prefab) {
                    this.unitDataConfig.heros[index].prefab = prefab;
                    cc.log(`[SelectSceneUI] 设置英雄Prefab: ${this.unitDataConfig.heros[index].name} -> ${prefab.name || '已设置'}`);
                }
            });
        }

        // 应用怪物头像和Prefab配置
        if (this.monsterIcons && this.monsterIcons.length > 0) {
            cc.log(`[SelectSceneUI] 开始加载怪物头像配置，共${this.monsterIcons.length}个`);
            this.monsterIcons.forEach((icon, index) => {
                if (this.unitDataConfig.monsters && this.unitDataConfig.monsters[index]) {
                    if (icon) {
                        this.unitDataConfig.monsters[index].icon = icon;
                        cc.log(`[SelectSceneUI] ✓ 设置怪物头像[${index}]: ${this.unitDataConfig.monsters[index].name} -> ${icon.name || icon.uuid || '已设置'}`);
                    } else {
                        cc.warn(`[SelectSceneUI] ✗ 怪物头像[${index}]为空: ${this.unitDataConfig.monsters[index].name}`);
                    }
                } else {
                    cc.warn(`[SelectSceneUI] ✗ 怪物配置不存在或索引越界: index=${index}`);
                }
            });
        } else {
            cc.warn(`[SelectSceneUI] monsterIcons数组为空或未配置`);
        }

        if (this.monsterPrefabs && this.monsterPrefabs.length > 0) {
            this.monsterPrefabs.forEach((prefab, index) => {
                if (this.unitDataConfig.monsters && this.unitDataConfig.monsters[index] && prefab) {
                    this.unitDataConfig.monsters[index].prefab = prefab;
                    cc.log(`[SelectSceneUI] 设置怪物Prefab: ${this.unitDataConfig.monsters[index].name} -> ${prefab.name || '已设置'}`);
                }
            });
        }

        cc.log("[SelectSceneUI] 已从组件属性加载头像和Prefab配置");
    },

    /**
     * 初始化头像列表
     * @private
     */
    _initAvatars() {
        if (!this.avatarPrefab) {
            cc.error("[SelectSceneUI] 未设置avatarPrefab，无法创建头像列表");
            return;
        }

        // 检查容器是否绑定
        if (!this.heroAvatarContainer) {
            cc.error("[SelectSceneUI] ✗ heroAvatarContainer未绑定！请在编辑器中绑定左侧英雄头像容器节点");
            return;
        }
        if (!this.monsterAvatarContainer) {
            cc.error("[SelectSceneUI] ✗ monsterAvatarContainer未绑定！请在编辑器中绑定右侧怪物头像容器节点");
            return;
        }

        // 检查容器是否绑定到同一个节点
        if (this.heroAvatarContainer === this.monsterAvatarContainer) {
            cc.error("[SelectSceneUI] ✗ 错误：heroAvatarContainer 和 monsterAvatarContainer 绑定到了同一个节点！");
            cc.error("[SelectSceneUI] 请确保两个容器是不同的节点，且位置不同");
            return;
        }

        // 输出容器位置信息
        cc.log(`[SelectSceneUI] 英雄容器位置: (${this.heroAvatarContainer.x}, ${this.heroAvatarContainer.y}), 节点名: ${this.heroAvatarContainer.name}`);
        cc.log(`[SelectSceneUI] 怪物容器位置: (${this.monsterAvatarContainer.x}, ${this.monsterAvatarContainer.y}), 节点名: ${this.monsterAvatarContainer.name}`);

        // 如果容器位置都在(0,0)，给出警告
        if (this.heroAvatarContainer.x === 0 && this.monsterAvatarContainer.x === 0) {
            cc.warn("[SelectSceneUI] ⚠️ 警告：两个容器都在X=0位置，头像会重叠！");
            cc.warn("[SelectSceneUI] 建议：HeroContainer X=-300, MonsterContainer X=300");
        }

        // 清空容器
        this.heroAvatarContainer.removeAllChildren();
        this.monsterAvatarContainer.removeAllChildren();

        // 创建英雄头像（按照UnitDataConfig中的固定顺序）
        if (this.unitDataConfig && this.unitDataConfig.heros) {
            cc.log(`[SelectSceneUI] 开始创建${this.unitDataConfig.heros.length}个英雄头像`);
            this.unitDataConfig.heros.forEach((heroData, index) => {
                this._createAvatar(heroData, "hero", index);
            });
        } else {
            cc.warn("[SelectSceneUI] unitDataConfig.heros为空或未定义");
        }

        // 创建怪物头像（按照UnitDataConfig中的固定顺序）
        if (this.unitDataConfig && this.unitDataConfig.monsters) {
            cc.log(`[SelectSceneUI] 开始创建${this.unitDataConfig.monsters.length}个怪物头像`);
            this.unitDataConfig.monsters.forEach((monsterData, index) => {
                this._createAvatar(monsterData, "monster", index);
            });
        } else {
            cc.warn("[SelectSceneUI] unitDataConfig.monsters为空或未定义");
        }

        cc.log(`[SelectSceneUI] 头像列表初始化完成 - 英雄: ${this.unitDataConfig?.heros?.length || 0}个, 怪物: ${this.unitDataConfig?.monsters?.length || 0}个`);
    },

    /**
     * 创建头像
     * @private
     * @param {Object} unitData - 单位数据
     * @param {string} team - 队伍类型（"hero" 或 "monster"）
     * @param {number} index - 索引
     */
    _createAvatar(unitData, team, index) {
        if (!this.avatarPrefab) return;

        // 实例化头像Prefab
        const avatarNode = cc.instantiate(this.avatarPrefab);
        avatarNode.name = `Avatar_${unitData.name}`;

        // 保存单位数据到节点（用于后续使用）
        avatarNode._unitData = unitData;
        avatarNode._team = team;

        // 添加到对应容器（按照固定顺序）
        const container = team === "hero" ? this.heroAvatarContainer : this.monsterAvatarContainer;
        if (container) {
            container.addChild(avatarNode);
            // 设置固定位置（根据unitData中的avatarPosition或index）
            this._setAvatarPosition(avatarNode, team, index);
            cc.log(`[SelectSceneUI] 创建${team}头像: ${unitData.name}, 添加到容器: ${container.name}, 容器位置: (${container.x}, ${container.y})`);
        } else {
            cc.error(`[SelectSceneUI] ✗ ${team}容器未绑定: ${team === "hero" ? "heroAvatarContainer" : "monsterAvatarContainer"}`);
        }

        // 获取头像组件（如果Prefab上有）
        const avatarComp = avatarNode.getComponent("AvatarItem");
        if (avatarComp) {
            cc.log(`[SelectSceneUI] 创建头像: ${unitData.name}, icon=${unitData.icon ? unitData.icon.name || '已设置' : 'null'}`);
            avatarComp.init(unitData, team, this);

            // 验证头像是否设置成功
            if (avatarComp.iconSprite) {
                if (avatarComp.iconSprite.spriteFrame) {
                    cc.log(`[SelectSceneUI] ✓ 头像设置成功: ${unitData.name} -> ${avatarComp.iconSprite.spriteFrame.name || '已设置'}`);
                    // 检查节点是否可见
                    if (!avatarNode.active) {
                        cc.warn(`[SelectSceneUI] ⚠️ 头像节点未激活: ${unitData.name}`);
                        avatarNode.active = true;
                    }
                    if (avatarNode.opacity === 0) {
                        cc.warn(`[SelectSceneUI] ⚠️ 头像节点透明度为0: ${unitData.name}`);
                        avatarNode.opacity = 255;
                    }
                } else {
                    cc.warn(`[SelectSceneUI] ✗ 头像SpriteFrame为空: ${unitData.name}, iconSprite存在但spriteFrame为null`);
                    cc.warn(`[SelectSceneUI] 请检查SelectSceneUI的${team === "hero" ? "heroIcons" : "monsterIcons"}数组是否已配置`);
                }
            } else {
                cc.warn(`[SelectSceneUI] ✗ AvatarItem.iconSprite未绑定: ${unitData.name}`);
                cc.warn(`[SelectSceneUI] 请在AvatarPrefab中，将AvatarItem组件的Icon Sprite属性绑定到Icon节点`);
            }

            // 如果AvatarItem有checkmarkNode，确保它初始隐藏
            if (avatarComp.checkmarkNode) {
                avatarComp.checkmarkNode.active = false;
                avatarComp.checkmarkNode.opacity = 255; // 确保透明度正常
                cc.log(`[SelectSceneUI] ✓ 找到AvatarItem.checkmarkNode，已初始隐藏`);
                cc.log(`[SelectSceneUI]   checkmark节点位置: (${avatarComp.checkmarkNode.x}, ${avatarComp.checkmarkNode.y})`);
                cc.log(`[SelectSceneUI]   checkmark节点大小: ${avatarComp.checkmarkNode.width}x${avatarComp.checkmarkNode.height}`);
            } else {
                // 检查是否有名为Checkmark的子节点
                const checkmarkNode = avatarNode.getChildByName("Checkmark");
                if (checkmarkNode) {
                    checkmarkNode.active = false;
                    checkmarkNode.opacity = 255;
                    cc.log(`[SelectSceneUI] ✓ 找到Checkmark子节点，已初始隐藏`);
                } else {
                    cc.warn(`[SelectSceneUI] ⚠️ 未找到勾选标记节点: ${unitData.name}`);
                    cc.warn(`[SelectSceneUI]   请在AvatarPrefab中创建Checkmark节点，或绑定到AvatarItem.checkmarkNode`);
                }
            }
        } else {
            // 如果没有组件，手动设置
            cc.log(`[SelectSceneUI] AvatarItem组件不存在，使用手动设置: ${unitData.name}`);
            this._setupAvatarNode(avatarNode, unitData, team);
        }

        // 确保头像节点可见
        avatarNode.active = true;
        avatarNode.opacity = 255;

        // 确保节点可以接收触摸事件
        avatarNode.setContentSize(100, 100); // 设置触摸区域大小
        avatarNode._touchEnabled = true;

        // 方法1：尝试使用Button组件
        let button = avatarNode.getComponent(cc.Button);
        if (!button) {
            // 如果没有Button组件，添加一个
            button = avatarNode.addComponent(cc.Button);
            cc.log(`[SelectSceneUI] 为头像添加Button组件: ${unitData.name}`);
        }

        // 绑定Button点击事件
        if (button) {
            // 移除之前的事件监听（防止重复绑定）
            button.node.off(cc.Node.EventType.TOUCH_END);
            button.node.off(cc.Node.EventType.TOUCH_START);
            button.node.off(cc.Node.EventType.TOUCH_CANCEL);

            // 绑定点击事件
            button.node.on(cc.Node.EventType.TOUCH_END, (event) => {
                event.stopPropagation(); // 阻止事件冒泡
                cc.log(`[SelectSceneUI] Button点击事件触发: ${unitData.name}`);
                this._onAvatarClick(unitData, team, avatarNode);
            }, this);

            // 也可以绑定TOUCH_START来测试触摸是否被检测到
            button.node.on(cc.Node.EventType.TOUCH_START, (event) => {
                cc.log(`[SelectSceneUI] 触摸开始: ${unitData.name}`);
            }, this);

            cc.log(`[SelectSceneUI] ✓ 已绑定Button点击事件: ${unitData.name}`);
        }

        // 方法2：同时绑定直接触摸事件（作为备用）
        avatarNode.off(cc.Node.EventType.TOUCH_END);
        avatarNode.on(cc.Node.EventType.TOUCH_END, (event) => {
            event.stopPropagation();
            cc.log(`[SelectSceneUI] 直接触摸事件触发: ${unitData.name}`);
            this._onAvatarClick(unitData, team, avatarNode);
        }, this);

        // 确保Icon子节点也可以接收触摸（如果存在）
        const iconNode = avatarNode.getChildByName("Icon");
        if (iconNode) {
            iconNode.setContentSize(100, 100);
            iconNode._touchEnabled = true;
            iconNode.off(cc.Node.EventType.TOUCH_END);
            iconNode.on(cc.Node.EventType.TOUCH_END, (event) => {
                event.stopPropagation();
                cc.log(`[SelectSceneUI] Icon节点触摸事件触发: ${unitData.name}`);
                this._onAvatarClick(unitData, team, avatarNode);
            }, this);
        }

        cc.log(`[SelectSceneUI] ✓ 头像点击事件绑定完成: ${unitData.name}`);
    },

    /**
     * 设置头像节点（如果没有AvatarItem组件）
     * @private
     */
    _setupAvatarNode(avatarNode, unitData, team) {
        // 查找头像图片节点
        const iconNode = avatarNode.getChildByName("Icon") || avatarNode;
        if (iconNode && unitData.icon) {
            const sprite = iconNode.getComponent(cc.Sprite);
            if (sprite && unitData.icon) {
                sprite.spriteFrame = unitData.icon;
            }
        }

        // 查找名称标签
        const nameLabel = avatarNode.getChildByName("NameLabel");
        if (nameLabel) {
            const label = nameLabel.getComponent(cc.Label);
            if (label) {
                label.string = unitData.displayName || unitData.name;
            }
        }

        // 查找勾选标记节点（初始隐藏）
        const checkmark = avatarNode.getChildByName("Checkmark");
        if (checkmark) {
            checkmark.active = false;
        }
    },

    /**
     * 头像点击事件
     * @private
     * @param {Object} unitData - 单位数据
     * @param {string} team - 队伍类型
     * @param {cc.Node} avatarNode - 头像节点
     */
    _onAvatarClick(unitData, team, avatarNode) {
        cc.log(`[SelectSceneUI] 点击头像: ${unitData.name} (${team})`);

        // 切换勾选状态
        const isSelected = this._toggleSelection(unitData, team, avatarNode);

        // 根据选中状态显示或隐藏人物原型
        if (isSelected) {
            // 选中时，显示人物原型
            this._displayUnitPrefab(unitData, isSelected);
        } else {
            // 取消选中时，清除中间显示的人物原型
            this._clearUnitPrefab();
            cc.log(`[SelectSceneUI] 已清除中间显示的人物原型`);
        }
    },

    /**
     * 切换选择状态
     * @private
     * @param {Object} unitData - 单位数据
     * @param {string} team - 队伍类型
     * @param {cc.Node} avatarNode - 头像节点
     * @returns {boolean} 是否已选中
     */
    _toggleSelection(unitData, team, avatarNode) {
        const selectedList = team === "hero" ? this.selectedHeros : this.selectedMonsters;
        const index = selectedList.findIndex(u => u.name === unitData.name);

        // 方法1：优先使用AvatarItem组件的checkmarkNode
        const avatarComp = avatarNode.getComponent("AvatarItem");
        let checkmark = null;

        if (avatarComp && avatarComp.checkmarkNode) {
            // 使用AvatarItem组件的checkmarkNode
            checkmark = avatarComp.checkmarkNode;
            cc.log(`[SelectSceneUI] ✓ 使用AvatarItem.checkmarkNode: ${unitData.name}`);
            cc.log(`[SelectSceneUI]   checkmark节点: ${checkmark.name}, active: ${checkmark.active}, opacity: ${checkmark.opacity}`);
        } else {
            // 方法2：查找名为"Checkmark"的子节点
            checkmark = avatarNode.getChildByName("Checkmark");
            if (checkmark) {
                cc.log(`[SelectSceneUI] ✓ 找到Checkmark子节点: ${unitData.name}`);
                cc.log(`[SelectSceneUI]   checkmark节点: ${checkmark.name}, active: ${checkmark.active}, opacity: ${checkmark.opacity}`);
            } else {
                cc.warn(`[SelectSceneUI] ✗ 未找到Checkmark节点: ${unitData.name}`);
                cc.warn(`[SelectSceneUI]   请确保AvatarPrefab中有Checkmark子节点，或绑定到AvatarItem.checkmarkNode`);
            }
        }

        // 方法3：如果都没有，自动创建一个简单的勾选标记
        if (!checkmark) {
            cc.log(`[SelectSceneUI] 未找到勾选标记，自动创建: ${unitData.name}`);
            checkmark = new cc.Node("Checkmark");

            // 创建一个简单的勾选标记（绿色圆圈）
            const graphics = checkmark.addComponent(cc.Graphics);
            graphics.fillColor = cc.Color.GREEN;
            graphics.circle(0, 0, 20);
            graphics.fill();

            // 设置位置（头像右上角）
            const nodeSize = avatarNode.getContentSize();
            checkmark.setPosition(nodeSize.width / 2 - 20, nodeSize.height / 2 - 20);
            avatarNode.addChild(checkmark);
        }

        if (index === -1) {
            // 未选中，添加到选中列表
            selectedList.push(unitData);

            // 显示勾选标记
            if (checkmark) {
                checkmark.active = true;
                checkmark.opacity = 255;
                // 确保层级在最上层
                if (checkmark.parent) {
                    checkmark.setSiblingIndex(checkmark.parent.children.length - 1);
                }
                cc.log(`[SelectSceneUI] 显示勾选标记: ${unitData.name}, active: ${checkmark.active}, opacity: ${checkmark.opacity}`);
            } else {
                cc.error(`[SelectSceneUI] ✗ checkmark节点为空，无法显示勾选标记: ${unitData.name}`);
            }

            // 如果使用AvatarItem组件，也更新其状态
            if (avatarComp) {
                avatarComp.setSelected(true);
            }

            cc.log(`[SelectSceneUI] ✓ 选中: ${unitData.name}`);
            return true;
        } else {
            // 已选中，从选中列表移除
            selectedList.splice(index, 1);

            // 隐藏勾选标记
            if (checkmark) {
                checkmark.active = false;
                cc.log(`[SelectSceneUI] 隐藏勾选标记: ${unitData.name}, active: ${checkmark.active}`);
            }

            // 如果使用AvatarItem组件，也更新其状态
            if (avatarComp) {
                avatarComp.setSelected(false);
            }

            cc.log(`[SelectSceneUI] ✗ 取消选中: ${unitData.name}`);
            return false;
        }
    },

    /**
     * 清除中间显示的单位原型
     * @private
     */
    _clearUnitPrefab() {
        if (!this.centerDisplayArea) {
            return;
        }

        // 清除之前显示的原型
        if (this.currentDisplayPrefab) {
            cc.log(`[SelectSceneUI] 清除中间显示的原型: ${this.currentDisplayPrefab.name}`);
            this.currentDisplayPrefab.destroy();
            this.currentDisplayPrefab = null;
        }
    },

    /**
     * 在中间显示单位原型
     * @private
     * @param {Object} unitData - 单位数据
     * @param {boolean} isSelected - 是否已选中（已废弃，保留参数以兼容）
     */
    _displayUnitPrefab(unitData, isSelected) {
        if (!this.centerDisplayArea) {
            cc.warn("[SelectSceneUI] 未设置centerDisplayArea，无法显示单位原型");
            cc.warn("[SelectSceneUI] 请在SelectSceneUI组件中绑定centerDisplayArea节点");
            return;
        }

        // 清除之前显示的原型
        if (this.currentDisplayPrefab) {
            this.currentDisplayPrefab.destroy();
            this.currentDisplayPrefab = null;
            cc.log(`[SelectSceneUI] 清除之前显示的原型`);
        }

        // 如果有Prefab，实例化并显示
        if (unitData.prefab) {
            const prefabInstance = cc.instantiate(unitData.prefab);
            prefabInstance.name = `Display_${unitData.name}`;

            // 确保节点可见
            prefabInstance.active = true;
            prefabInstance.opacity = 255;

            this.centerDisplayArea.addChild(prefabInstance);
            this.currentDisplayPrefab = prefabInstance;

            // 设置位置和缩放（居中显示，缩小显示）
            prefabInstance.setPosition(0, 0);
            prefabInstance.setScale(0.8);

            // 确保centerDisplayArea可见
            if (!this.centerDisplayArea.active) {
                this.centerDisplayArea.active = true;
            }
            if (this.centerDisplayArea.opacity === 0) {
                this.centerDisplayArea.opacity = 255;
            }

            // 初始化角色属性（根据保存的等级数据）
            this._initCharacterStats(prefabInstance, unitData);

            cc.log(`[SelectSceneUI] ✓ 显示单位原型: ${unitData.name}, Prefab: ${unitData.prefab.name || '已设置'}`);
            cc.log(`[SelectSceneUI] centerDisplayArea位置: (${this.centerDisplayArea.x}, ${this.centerDisplayArea.y})`);
        } else {
            cc.warn(`[SelectSceneUI] ✗ 单位 ${unitData.name} 没有设置prefab，无法显示原型`);
            cc.warn(`[SelectSceneUI] 请在SelectSceneUI的${unitData.name.includes("战士") || unitData.name.includes("法师") ? "heroPrefabs" : "monsterPrefabs"}数组中配置Prefab`);
        }
    },

    /**
     * 初始化角色属性（根据保存的等级数据）
     * @private
     * @param {cc.Node} prefabInstance - 人物原型实例
     * @param {Object} unitData - 单位数据
     */
    _initCharacterStats(prefabInstance, unitData) {
        const CharacterDataManager = require("CharacterDataManager");
        const LevelSystem = require("LevelSystem");
        const StatsComponent = require("StatsComponent");

        // 获取StatsComponent组件
        const stats = prefabInstance.getComponent(StatsComponent);
        if (!stats) {
            cc.log(`[SelectSceneUI] ${unitData.name} 没有StatsComponent组件，跳过属性初始化`);
            return;
        }

        // 从本地存储加载角色的等级数据
        const savedData = CharacterDataManager.loadCharacterLevel(unitData.name);

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

            cc.log(`[SelectSceneUI] 初始化 ${unitData.name} 属性: Lv.${stats.level}, HP:${stats.maxHp}/${stats.maxHp}, ATK:${stats.attack}, DEF:${stats.defense}`);
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

            cc.log(`[SelectSceneUI] 初始化 ${unitData.name} 属性（默认）: Lv.${stats.level}, HP:${stats.maxHp}/${stats.maxHp}`);
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
    },


    /**
     * 获取选中的单位列表
     * @returns {Object} { heros: [], monsters: [] }
     */
    getSelectedUnits() {
        return {
            heros: [...this.selectedHeros],
            monsters: [...this.selectedMonsters]
        };
    },

    /**
     * 检查是否有选中的单位
     * @returns {boolean}
     */
    hasSelectedUnits() {
        return this.selectedHeros.length > 0 || this.selectedMonsters.length > 0;
    },

    /**
     * 设置头像固定位置
     * @private
     * @param {cc.Node} avatarNode - 头像节点
     * @param {string} team - 队伍类型
     * @param {number} index - 索引（使用unitData中的avatarPosition，如果没有则使用index）
     */
    _setAvatarPosition(avatarNode, team, index) {
        // 获取单位数据中的固定位置索引（如果有）
        const unitData = avatarNode._unitData;
        const positionIndex = (unitData && unitData.avatarPosition !== undefined) ? unitData.avatarPosition : index;

        // 使用配置的间距和起始位置
        const spacing = this.avatarSpacing || 120;
        const startY = this.avatarStartY || 100;

        // 计算固定位置（垂直排列，从上到下）
        const y = startY - (positionIndex * spacing);
        avatarNode.setPosition(0, y);

        cc.log(`[SelectSceneUI] 设置${team}头像位置: ${avatarNode.name} -> (0, ${y}), 位置索引: ${positionIndex}`);
    }
});

