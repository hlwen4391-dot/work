/**
 * 等级UI面板组件
 * 显示角色等级、经验条，提供使用经验道具的入口
 */
const LevelSystem = require("LevelSystem");

cc.Class({
    extends: cc.Component,

    properties: {
        // 角色节点（需要显示等级的角色）
        characterNode: {
            default: null,
            type: cc.Node,
            tooltip: "需要显示等级的角色节点"
        },

        // 等级标签
        levelLabel: {
            default: null,
            type: cc.Label,
            tooltip: "显示等级的标签"
        },

        // 经验条组件（ExpBar）
        expBar: {
            default: null,
            type: cc.Node,
            tooltip: "经验条节点（需要有ExpBar组件）"
        },

        // 经验值文本标签
        expTextLabel: {
            default: null,
            type: cc.Label,
            tooltip: "显示经验值文本的标签（格式：当前/需要）"
        },

        // 属性显示区域（可选）
        statsContainer: {
            default: null,
            type: cc.Node,
            tooltip: "属性显示容器（可选）"
        },

        // 使用经验道具按钮
        useExpItemButton: {
            default: null,
            type: cc.Node,
            tooltip: "使用经验道具按钮（可选）"
        },

        // 升级提示节点（显示升级动画和属性变化）
        levelUpTipNode: {
            default: null,
            type: cc.Node,
            tooltip: "升级提示节点（可选，用于显示升级动画）"
        },

        // 升级提示文本标签
        levelUpTipLabel: {
            default: null,
            type: cc.Label,
            tooltip: "升级提示文本标签"
        },

        // 最大等级提示文本
        maxLevelTipLabel: {
            default: null,
            type: cc.Label,
            tooltip: "最大等级提示文本标签"
        },

        // 更新间隔（秒）
        updateInterval: 0.1
    },

    onLoad() {
        // 隐藏升级提示和最大等级提示
        if (this.levelUpTipNode) {
            this.levelUpTipNode.active = false;
        }
        if (this.maxLevelTipLabel) {
            this.maxLevelTipLabel.node.active = false;
        }

        // 绑定使用经验道具按钮
        if (this.useExpItemButton) {
            const button = this.useExpItemButton.getComponent(cc.Button);
            if (button) {
                button.node.on('click', this._onUseExpItemClick, this);
            }
        }

        // 获取经验条组件
        if (this.expBar) {
            this._expBarComponent = this.expBar.getComponent("ExpBar");
            // 反一下Scale（水平翻转）
            const currentScale = this.expBar.scaleX;
            this.expBar.scaleX = -currentScale;
        }

        // 开始定时更新
        this.schedule(this._updateUI, this.updateInterval);
    },

    onDestroy() {
        this.unschedule(this._updateUI);
    },

    /**
     * 设置要显示的角色节点
     * @param {cc.Node} characterNode - 角色节点
     */
    setCharacter(characterNode) {
        this.characterNode = characterNode;
        this._updateUI();
    },

    /**
     * 更新UI显示
     */
    _updateUI() {
        if (!this.characterNode) return;

        const levelInfo = LevelSystem.getLevelInfo(this.characterNode);
        if (!levelInfo) return;

        // 更新等级标签
        if (this.levelLabel) {
            this.levelLabel.string = `Lv.${levelInfo.level}`;
        }

        // 更新经验条
        if (this._expBarComponent) {
            this._expBarComponent.updateExp(
                levelInfo.expInCurrentLevel,
                levelInfo.expToNext,
                levelInfo.level,
                levelInfo.progress
            );
        }

        // 更新经验值文本
        if (this.expTextLabel) {
            if (levelInfo.isMaxLevel) {
                this.expTextLabel.string = "已满级";
            } else {
                this.expTextLabel.string = `${levelInfo.expInCurrentLevel}/${levelInfo.expToNext}`;
            }
        }

        // 显示/隐藏最大等级提示
        if (this.maxLevelTipLabel) {
            this.maxLevelTipLabel.node.active = levelInfo.isMaxLevel;
        }
    },

    /**
     * 使用经验道具按钮点击事件
     */
    _onUseExpItemClick() {
        if (!this.characterNode) {
            cc.warn("[LevelUI] 未设置角色节点");
            return;
        }

        // 这里可以打开道具选择界面，或者直接使用预设的经验道具
        // 示例：使用一个经验值为100的道具
        this.useExpItem({
            id: "exp_item_100",
            name: "经验药水",
            expValue: 100
        });
    },

    /**
     * 使用经验道具
     * @param {Object} expItem - 经验道具对象 { id, name, expValue }
     */
    useExpItem(expItem) {
        if (!this.characterNode || !expItem) return;

        const result = LevelSystem.useExpItem(this.characterNode, expItem);

        if (result.success) {
            // 更新UI
            this._updateUI();

            // 如果升级了，显示升级提示
            if (result.leveledUp) {
                this._showLevelUpTip(result);
            }
        } else {
            cc.warn(`[LevelUI] 使用经验道具失败: ${result.message}`);
        }
    },

    /**
     * 显示升级提示
     * @param {Object} result - 升级结果
     */
    _showLevelUpTip(result) {
        if (!this.levelUpTipNode) return;

        // 显示升级提示节点
        this.levelUpTipNode.active = true;

        // 更新提示文本
        if (this.levelUpTipLabel) {
            let tipText = `升级到 ${result.newLevel} 级！\n`;

            if (result.statChanges) {
                tipText += "属性提升：\n";
                if (result.statChanges.maxHp > 0) {
                    tipText += `生命值 +${result.statChanges.maxHp}\n`;
                }
                if (result.statChanges.attack > 0) {
                    tipText += `攻击力 +${result.statChanges.attack}\n`;
                }
                if (result.statChanges.defense > 0) {
                    tipText += `防御力 +${result.statChanges.defense}\n`;
                }
                if (result.statChanges.speed > 0) {
                    tipText += `速度 +${result.statChanges.speed}\n`;
                }
                if (result.statChanges.crit > 0) {
                    tipText += `暴击率 +${result.statChanges.crit.toFixed(2)}\n`;
                }
                if (result.statChanges.miss > 0) {
                    tipText += `闪避率 +${result.statChanges.miss.toFixed(2)}\n`;
                }
            }

            this.levelUpTipLabel.string = tipText;
        }

        // 播放升级动画（缩放+淡入淡出）
        this.levelUpTipNode.setScale(0.5);
        this.levelUpTipNode.opacity = 0;

        cc.tween(this.levelUpTipNode)
            .to(0.3, { scale: 1.2, opacity: 255 }, { easing: 'backOut' })
            .to(0.2, { scale: 1.0 })
            .delay(2.0)
            .to(0.3, { opacity: 0 })
            .call(() => {
                this.levelUpTipNode.active = false;
            })
            .start();
    },

    /**
     * 显示属性变化（用于战斗中获得经验时）
     * @param {number} expGained - 获得的经验值
     * @param {boolean} leveledUp - 是否升级
     */
    showExpGain(expGained, leveledUp) {
        // 更新UI
        this._updateUI();

        // 如果升级了，显示升级提示
        if (leveledUp && this.characterNode) {
            const levelInfo = LevelSystem.getLevelInfo(this.characterNode);
            if (levelInfo) {
                // 这里可以显示经验获得提示
                cc.log(`[LevelUI] 获得 ${expGained} 经验值`);
            }
        }
    }
});
