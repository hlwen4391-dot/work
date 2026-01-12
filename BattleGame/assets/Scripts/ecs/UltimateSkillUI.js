/**
 * 大招释放UI组件
 * 显示大招释放时的屏幕蒙版和顶部动画（人物头像+技能名称）
 */
cc.Class({
    extends: cc.Component,

    properties: {
        // 蒙版节点（半透明黑色遮罩）
        maskNode: {
            default: null,
            type: cc.Node,
            tooltip: "蒙版节点（半透明黑色遮罩）"
        },

        // 顶部容器节点（包含头像和技能名称）
        topContainer: {
            default: null,
            type: cc.Node,
            tooltip: "顶部容器节点（包含头像和技能名称）"
        },

        // 头像Sprite组件
        avatarSprite: {
            default: null,
            type: cc.Sprite,
            tooltip: "头像Sprite组件"
        },

        // 技能名称Label组件
        skillNameLabel: {
            default: null,
            type: cc.Label,
            tooltip: "技能名称Label组件"
        },

        // 人物名称Label组件（可选）
        characterNameLabel: {
            default: null,
            type: cc.Label,
            tooltip: "人物名称Label组件（可选）"
        },

        // 显示持续时间
        displayDuration: {
            default: 1.5,
            tooltip: "显示持续时间（秒）"
        },

        // 头像大小（像素）
        avatarSize: {
            default: 120,
            tooltip: "头像显示大小（像素，宽高相同）"
        }
    },

    onLoad() {
        // 初始化时隐藏所有元素
        if (this.maskNode) {
            this.maskNode.active = false;
            this.maskNode.opacity = 0;
        }
        if (this.topContainer) {
            this.topContainer.active = false;
        }
    },

    /**
     * 显示大招释放UI
     * @param {cc.Node} caster - 施法者节点
     * @param {string} skillName - 技能名称
     * @param {cc.SpriteFrame} avatarSpriteFrame - 头像图片（可选）
     * @param {Function} onComplete - 完成回调（可选）
     */
    showUltimateSkill(caster, skillName, avatarSpriteFrame, onComplete) {
        if (!caster || !skillName) {
            cc.warn("[UltimateSkillUI] 参数不完整，无法显示大招UI");
            if (onComplete) onComplete();
            return;
        }

        // 暂停战斗系统
        this._pauseBattle();

        // 设置技能名称
        if (this.skillNameLabel) {
            this.skillNameLabel.string = skillName;
        }

        // 设置人物名称
        if (this.characterNameLabel) {
            this.characterNameLabel.string = caster.name;
        }

        // 设置头像（如果提供了头像资源）
        if (this.avatarSprite && avatarSpriteFrame) {
            this.avatarSprite.spriteFrame = avatarSpriteFrame;

            // 确保Sprite组件设置正确，并限制头像大小
            if (this.avatarSprite.type !== cc.Sprite.Type.SIMPLE) {
                this.avatarSprite.type = cc.Sprite.Type.SIMPLE;
            }
            if (this.avatarSprite.sizeMode !== cc.Sprite.SizeMode.CUSTOM) {
                this.avatarSprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
            }

            // 设置头像节点大小（限制大小，防止过大）
            if (this.avatarSprite.node) {
                const avatarSize = this.avatarSize || 120;
                this.avatarSprite.node.width = avatarSize;
                this.avatarSprite.node.height = avatarSize;
                cc.log(`[UltimateSkillUI] 设置头像大小: ${avatarSize}x${avatarSize}`);
            }
        }

        // 显示并播放动画
        this._playAnimation(onComplete);
    },

    /**
     * 播放显示动画
     * @private
     * @param {Function} onComplete - 完成回调
     */
    _playAnimation(onComplete) {
        // 1. 显示蒙版（淡入）
        if (this.maskNode) {
            this.maskNode.active = true;
            this.maskNode.opacity = 0;
            cc.tween(this.maskNode)
                .to(0.3, { opacity: 180 }, { easing: 'sineOut' })  // 半透明黑色（180/255）
                .start();
        }

        // 2. 显示顶部容器（从上方滑入）
        if (this.topContainer) {
            this.topContainer.active = true;

            // 获取Canvas尺寸（用于计算顶部位置）
            const canvas = cc.find("Canvas");
            const canvasHeight = canvas ? canvas.height : 640;
            const startY = canvasHeight / 2 + 100;  // 从屏幕上方外开始
            const endY = canvasHeight / 2 - 50;    // 最终位置（距离顶部50像素）

            // 设置初始位置（屏幕上方外）
            this.topContainer.y = startY;
            this.topContainer.opacity = 0;
            this.topContainer.scale = 0.8;

            // 滑入动画
            cc.tween(this.topContainer)
                .parallel(
                    cc.tween().to(0.4, { y: endY }, { easing: 'backOut' }),
                    cc.tween().to(0.4, { opacity: 255 }, { easing: 'sineOut' }),
                    cc.tween().to(0.4, { scale: 1.0 }, { easing: 'backOut' })
                )
                .delay(this.displayDuration - 0.4)  // 停留时间
                .parallel(
                    cc.tween().to(0.3, { y: startY }, { easing: 'sineIn' }),
                    cc.tween().to(0.3, { opacity: 0 }, { easing: 'sineIn' }),
                    cc.tween().to(0.3, { scale: 0.8 }, { easing: 'sineIn' })
                )
                .call(() => {
                    // 隐藏节点
                    if (this.topContainer) {
                        this.topContainer.active = false;
                    }
                    // 隐藏蒙版（淡出）
                    if (this.maskNode) {
                        cc.tween(this.maskNode)
                            .to(0.2, { opacity: 0 }, { easing: 'sineIn' })
                            .call(() => {
                                if (this.maskNode) {
                                    this.maskNode.active = false;
                                }
                                // 恢复战斗系统
                                this._resumeBattle();
                                if (onComplete) onComplete();
                            })
                            .start();
                    } else {
                        // 恢复战斗系统
                        this._resumeBattle();
                        if (onComplete) onComplete();
                    }
                })
                .start();
        } else {
            // 如果没有顶部容器，只显示蒙版
            this.scheduleOnce(() => {
                if (this.maskNode) {
                    cc.tween(this.maskNode)
                        .to(0.2, { opacity: 0 }, { easing: 'sineIn' })
                        .call(() => {
                            if (this.maskNode) {
                                this.maskNode.active = false;
                            }
                            // 恢复战斗系统
                            this._resumeBattle();
                            if (onComplete) onComplete();
                        })
                        .start();
                } else {
                    // 恢复战斗系统
                    this._resumeBattle();
                    if (onComplete) onComplete();
                }
            }, this.displayDuration);
        }
    },

    /**
     * 暂停战斗系统
     * @private
     */
    _pauseBattle() {
        // 查找BattleController（使用多种方法）
        const scene = cc.director.getScene();
        if (!scene) {
            cc.warn("[UltimateSkillUI] 无法找到场景");
            return;
        }

        let battleController = null;

        // 方法1: 在Canvas节点上查找BattleController组件
        const canvas = scene.getChildByName("Canvas");
        if (canvas) {
            battleController = canvas.getComponent("BattleController");
        }

        // 方法2: 在Canvas的子节点中查找名为"BattleController"的节点
        if (!battleController && canvas) {
            const battleControllerNode = canvas.getChildByName("BattleController");
            if (battleControllerNode) {
                battleController = battleControllerNode.getComponent("BattleController");
            }
        }

        // 方法3: 在场景根节点中查找名为"BattleController"的节点（重要！）
        if (!battleController) {
            const battleControllerNode = scene.getChildByName("BattleController");
            if (battleControllerNode) {
                battleController = battleControllerNode.getComponent("BattleController");
            }
        }

        // 方法4: 使用getComponentInChildren递归查找（从场景根节点）
        if (!battleController) {
            battleController = scene.getComponentInChildren("BattleController");
        }

        // 方法5: 遍历场景所有子节点查找（最后手段）
        if (!battleController) {
            const findComponent = (node, componentName) => {
                const comp = node.getComponent(componentName);
                if (comp) return comp;
                for (let child of node.children) {
                    const result = findComponent(child, componentName);
                    if (result) return result;
                }
                return null;
            };
            battleController = findComponent(scene, "BattleController");
        }

        if (battleController && battleController.battleSystem) {
            battleController.battleSystem.pause();
            cc.log("[UltimateSkillUI] ✓ 战斗系统已暂停");
        } else {
            cc.warn("[UltimateSkillUI] ⚠️ 未找到BattleController，无法暂停战斗");
            cc.warn("[UltimateSkillUI] 请确保BattleController节点存在于场景中");
        }
    },

    /**
     * 恢复战斗系统
     * @private
     */
    _resumeBattle() {
        // 查找BattleController（使用多种方法）
        const scene = cc.director.getScene();
        if (!scene) {
            cc.warn("[UltimateSkillUI] 无法找到场景");
            return;
        }

        let battleController = null;

        // 方法1: 在Canvas节点上查找BattleController组件
        const canvas = scene.getChildByName("Canvas");
        if (canvas) {
            battleController = canvas.getComponent("BattleController");
        }

        // 方法2: 在Canvas的子节点中查找名为"BattleController"的节点
        if (!battleController && canvas) {
            const battleControllerNode = canvas.getChildByName("BattleController");
            if (battleControllerNode) {
                battleController = battleControllerNode.getComponent("BattleController");
            }
        }

        // 方法3: 在场景根节点中查找名为"BattleController"的节点（重要！）
        if (!battleController) {
            const battleControllerNode = scene.getChildByName("BattleController");
            if (battleControllerNode) {
                battleController = battleControllerNode.getComponent("BattleController");
            }
        }

        // 方法4: 使用getComponentInChildren递归查找（从场景根节点）
        if (!battleController) {
            battleController = scene.getComponentInChildren("BattleController");
        }

        // 方法5: 遍历场景所有子节点查找（最后手段）
        if (!battleController) {
            const findComponent = (node, componentName) => {
                const comp = node.getComponent(componentName);
                if (comp) return comp;
                for (let child of node.children) {
                    const result = findComponent(child, componentName);
                    if (result) return result;
                }
                return null;
            };
            battleController = findComponent(scene, "BattleController");
        }

        if (battleController && battleController.battleSystem) {
            battleController.battleSystem.resume();
            cc.log("[UltimateSkillUI] ✓ 战斗系统已恢复");
        } else {
            cc.warn("[UltimateSkillUI] ⚠️ 未找到BattleController，无法恢复战斗");
            cc.warn("[UltimateSkillUI] 请确保BattleController节点存在于场景中");
        }
    },

    /**
     * 立即隐藏UI（用于紧急情况）
     */
    hide() {
        if (this.maskNode) {
            this.maskNode.active = false;
            this.maskNode.opacity = 0;
        }
        if (this.topContainer) {
            this.topContainer.active = false;
        }
    }
});
