/**
 * 战斗回放控制器组件
 * 提供回放控制UI和功能
 */
cc.Class({
    extends: cc.Component,

    properties: {
        // 回放控制面板
        replayPanel: {
            default: null,
            type: cc.Node,
            tooltip: "回放控制面板节点"
        },

        // 播放/暂停按钮
        playPauseButton: {
            default: null,
            type: cc.Button,
            tooltip: "播放/暂停按钮"
        },

        // 停止按钮
        stopButton: {
            default: null,
            type: cc.Button,
            tooltip: "停止按钮"
        },

        // 速度控制滑块（可选）
        speedSlider: {
            default: null,
            type: cc.Slider,
            tooltip: "回放速度控制滑块（0.5x - 4.0x）"
        },

        // 速度显示标签（可选）
        speedLabel: {
            default: null,
            type: cc.Label,
            tooltip: "显示当前回放速度的标签（如：1.0x）"
        },

        // 进度条（可选）
        progressBar: {
            default: null,
            type: cc.ProgressBar,
            tooltip: "回放进度条"
        },

        // 当前时间显示标签（可选）
        timeLabel: {
            default: null,
            type: cc.Label,
            tooltip: "显示当前回放时间的标签"
        },

        // 游戏结束场景名称（停止回放时跳转）
        gameOverSceneName: {
            default: "GameOverScene",
            tooltip: "停止回放时跳转到的游戏结束场景名称"
        }
    },

    onLoad() {
        // 绑定按钮事件
        if (this.playPauseButton) {
            this.playPauseButton.node.on(cc.Node.EventType.TOUCH_END, this.onPlayPauseClick, this);
        }

        if (this.stopButton) {
            this.stopButton.node.on(cc.Node.EventType.TOUCH_END, this.onStopClick, this);
        }

        if (this.speedSlider) {
            this.speedSlider.node.on('slide', this.onSpeedChange, this);
            // 初始化滑块值为1.0x（正常速度）
            // progress范围是0-1，对应速度0.5x-4.0x
            // 1.0x对应的progress = (1.0 - 0.5) / (4.0 - 0.5) = 0.5 / 3.5 ≈ 0.143
            this.speedSlider.progress = (1.0 - 0.5) / (4.0 - 0.5);
            this._updateSpeedLabel(1.0); // 更新速度显示
            // 初始隐藏速度控制滑块（只在回放时显示）
            this.speedSlider.node.active = false;
        }

        // 初始隐藏速度显示标签（如果存在）
        if (this.speedLabel) {
            this.speedLabel.node.active = false;
        }

        // 初始隐藏面板
        if (this.replayPanel) {
            this.replayPanel.active = false;
        }

        // 回放器引用
        this.replayer = null;
        this.battleRecord = null;
        this.battleSystem = null; // BattleSystem引用（用于暂停/恢复）
        this.battleController = null; // BattleController引用（用于设置回放标志）

        // 保存回放数据，用于重新播放
        this.savedHeros = null;
        this.savedMonsters = null;
        this.savedRecordKey = null; // 保存记录键，用于重新加载
        this.isReplayCompleted = false; // 回放是否已完成
    },

    /**
     * 开始回放
     * @param {Object} battleRecord - 战斗记录数据
     * @param {Array} heros - 英雄列表
     * @param {Array} monsters - 怪物列表
     */
    startReplay(battleRecord, heros, monsters) {
        cc.log(`[ReplayController] ===== 开始回放 =====`);
        cc.log(`[ReplayController] battleRecord: ${battleRecord ? '存在' : '不存在'}`);
        cc.log(`[ReplayController] replayPanel: ${this.replayPanel ? this.replayPanel.name : '未绑定'}`);

        if (!battleRecord) {
            cc.error("[ReplayController] 无效的战斗记录");
            return;
        }

        this.battleRecord = battleRecord;

        // 保存单位列表，用于重新播放（创建副本，避免引用被修改）
        this.savedHeros = [...heros]; // 创建数组副本
        this.savedMonsters = [...monsters]; // 创建数组副本
        this.isReplayCompleted = false; // 重置完成标志

        // 创建回放器
        const BattleReplayer = require("BattleReplayer");
        this.replayer = new BattleReplayer();

        // 显示回放控制面板
        if (this.replayPanel) {
            this.replayPanel.active = true;
            cc.log(`[ReplayController] 回放控制面板已显示: ${this.replayPanel.active}`);
        } else {
            cc.warn("[ReplayController] 未绑定replayPanel节点，回放控制面板不会显示");
        }

        // 显示速度控制滑块（只在回放时显示）
        if (this.speedSlider) {
            this.speedSlider.node.active = true;
            cc.log(`[ReplayController] 速度控制滑块已显示`);
        }

        // 显示速度显示标签（如果存在）
        if (this.speedLabel) {
            this.speedLabel.node.active = true;
        }

        // 开始回放
        this.replayer.startReplay(
            battleRecord,
            heros,
            monsters,
            () => {
                // 回放完成回调
                this.onReplayComplete();
            }
        );

        // 更新UI
        this._updatePlayPauseButton(true);

        // 初始化速度控制（如果存在）
        if (this.speedSlider && this.replayer) {
            // 设置默认速度为1.0x（正常速度）
            const defaultSpeed = 1.0;
            this.replayer.setPlaybackSpeed(defaultSpeed);
            // 更新滑块位置
            this.speedSlider.progress = (defaultSpeed - 0.5) / (4.0 - 0.5);
            this._updateSpeedLabel(defaultSpeed);
        }

        // 暂停BattleSystem（如果存在）
        this._pauseBattleSystem();

        cc.log(`[ReplayController] 回放已启动`);
    },

    /**
     * 播放/暂停按钮点击
     */
    onPlayPauseClick() {
        // 如果回放已完成，点击播放时重新开始回放（像从GameOverScene点击回放那样）
        if (this.isReplayCompleted) {
            cc.log("[ReplayController] 回放已完成，重新开始回放");

            // 优先使用保存的记录键重新加载（如果存在）
            if (this.savedRecordKey) {
                // 重新获取当前场景的单位列表
                const scene = cc.director.getScene();
                let heros = [];
                let monsters = [];

                // 查找BattleController获取单位列表
                if (scene) {
                    const canvas = scene.getChildByName("Canvas");
                    if (canvas) {
                        const battleController = canvas.getComponent("BattleController");
                        if (!battleController) {
                            // 尝试在子节点中查找
                            const battleControllerNode = canvas.getChildByName("BattleController");
                            if (battleControllerNode) {
                                const bc = battleControllerNode.getComponent("BattleController");
                                if (bc) {
                                    heros = bc.heros || [];
                                    monsters = bc.monsters || [];
                                }
                            }
                        } else {
                            heros = battleController.heros || [];
                            monsters = battleController.monsters || [];
                        }
                    }
                }

                // 如果找不到单位列表，使用保存的列表
                if (heros.length === 0 && monsters.length === 0 && this.savedHeros && this.savedMonsters) {
                    heros = this.savedHeros;
                    monsters = this.savedMonsters;
                }

                // 使用loadAndReplay重新加载并回放（像从GameOverScene点击回放那样）
                this.loadAndReplay(this.savedRecordKey, heros, monsters);
            } else if (this.battleRecord && this.savedHeros && this.savedMonsters) {
                // 如果没有保存记录键，使用保存的记录数据
                this.startReplay(this.battleRecord, this.savedHeros, this.savedMonsters);
            } else {
                cc.error("[ReplayController] 无法重新播放：缺少回放数据");
            }
            return;
        }

        // 如果没有回放器，无法操作
        if (!this.replayer) {
            cc.warn("[ReplayController] 回放器不存在，无法播放/暂停");
            return;
        }

        const wasPaused = this.replayer.isPaused;
        this.replayer.togglePause();
        const isNowPaused = this.replayer.isPaused;

        if (isNowPaused) {
            // 暂停时：完全冻结画面
            // 1. 停止所有动画（包括 tween 和 Spine 动画）
            this._pauseAllAnimations();
            // 2. 确保战斗逻辑不执行（通过 isReplaying 标志）
            this._pauseBattleSystem(); // 确保 isReplaying = true，阻止战斗逻辑执行
            // 3. 回放事件已通过 BattleReplayer.togglePause() 停止
            cc.log("[ReplayController] 已暂停回放，画面已冻结，战斗逻辑已禁用");
        } else {
            // 继续时：恢复动画播放速度
            // 注意：不恢复战斗逻辑，因为还在回放模式
            this._resumeAllAnimations();
            cc.log("[ReplayController] 已继续回放");
        }

        this._updatePlayPauseButton(!isNowPaused);
    },

    /**
     * 停止按钮点击
     */
    onStopClick() {
        if (this.replayer) {
            this.replayer.stopReplay();
            this.replayer = null;
        }

        // 停止所有动画
        this._stopAllAnimations();

        // 隐藏回放控制面板
        if (this.replayPanel) {
            this.replayPanel.active = false;
        }

        // 隐藏速度控制滑块
        if (this.speedSlider) {
            this.speedSlider.node.active = false;
            cc.log(`[ReplayController] 速度控制滑块已隐藏`);
        }

        // 隐藏速度显示标签（如果存在）
        if (this.speedLabel) {
            this.speedLabel.node.active = false;
        }

        // 恢复BattleSystem（如果存在）
        this._resumeBattleSystem();

        cc.log("[ReplayController] 停止回放");

        // 跳转到游戏结束场景
        if (this.gameOverSceneName) {
            cc.log(`[ReplayController] 准备跳转到游戏结束场景: ${this.gameOverSceneName}`);
            cc.director.loadScene(this.gameOverSceneName, (error) => {
                if (error) {
                    cc.error(`[ReplayController] 加载游戏结束场景失败: ${error}`);
                    cc.error(`[ReplayController] 请检查场景名称是否正确: ${this.gameOverSceneName}`);
                } else {
                    cc.log(`[ReplayController] 成功跳转到游戏结束场景: ${this.gameOverSceneName}`);
                }
            });
        } else {
            cc.warn("[ReplayController] 未设置gameOverSceneName，不会跳转场景");
        }
    },

    /**
     * 速度改变
     */
    onSpeedChange() {
        if (!this.replayer || !this.speedSlider) return;

        // 速度范围：0.5x - 4.0x
        // progress范围：0 - 1
        // speed = 0.5 + progress * (4.0 - 0.5) = 0.5 + progress * 3.5
        const speed = 0.5 + this.speedSlider.progress * 3.5;
        this.replayer.setPlaybackSpeed(speed);
        this._updateSpeedLabel(speed);
        cc.log(`[ReplayController] 回放速度已设置为: ${speed.toFixed(1)}x`);
    },

    /**
     * 更新速度显示标签
     * @private
     */
    _updateSpeedLabel(speed) {
        if (this.speedLabel) {
            this.speedLabel.string = `${speed.toFixed(1)}x`;
        }
    },

    /**
     * 回放完成
     */
    onReplayComplete() {
        cc.log("[ReplayController] 回放完成");
        this.isReplayCompleted = true; // 标记回放已完成
        this._updatePlayPauseButton(false); // 更新按钮为"播放"状态
        cc.log("[ReplayController] 回放已完成，点击播放按钮可重新播放");
    },

    /**
     * 更新播放/暂停按钮状态
     * @private
     */
    _updatePlayPauseButton(isPlaying) {
        if (this.playPauseButton) {
            const label = this.playPauseButton.node.getComponentInChildren(cc.Label);
            if (label) {
                label.string = isPlaying ? "暂停" : "播放";
            }
        }
    },

    /**
     * 从本地存储加载并回放
     * @param {string} key - 存储键名
     * @param {Array} heros - 英雄列表
     * @param {Array} monsters - 怪物列表
     */
    loadAndReplay(key, heros, monsters) {
        cc.log(`[ReplayController] ===== 开始加载并回放战斗记录 =====`);
        cc.log(`[ReplayController] 记录键名: ${key}`);
        cc.log(`[ReplayController] 英雄数量: ${heros ? heros.length : 0}`);
        cc.log(`[ReplayController] 怪物数量: ${monsters ? monsters.length : 0}`);

        if (!key) {
            cc.error(`[ReplayController] 记录键名为空！`);
            return;
        }

        // 保存记录键，用于重新播放
        this.savedRecordKey = key;

        const BattleRecorder = require("BattleRecorder");
        const recorder = new BattleRecorder();
        const record = recorder.loadFromLocalStorage(key);

        if (record) {
            cc.log(`[ReplayController] 成功加载战斗记录，事件数量: ${record.events ? record.events.length : 0}`);
            this.startReplay(record, heros, monsters);
        } else {
            cc.error(`[ReplayController] 无法加载战斗记录: ${key}`);
            cc.error(`[ReplayController] 请检查记录键名是否正确，或战斗记录是否已保存`);
        }
    },

    /**
     * 暂停BattleSystem（回放时禁用正常战斗逻辑）
     * @private
     */
    _pauseBattleSystem() {
        // 如果已经保存了 battleController，直接使用
        if (this.battleController && this.battleController.isValid) {
            this.battleController.isReplaying = true; // 设置回放标志
            if (this.battleSystem) {
                this.battleSystem.finished = true; // 双重保险
            }
            cc.log("[ReplayController] 已设置回放模式，BattleSystem已禁用");
            return;
        }

        // 否则重新查找BattleController
        // BattleController 可能是：
        // 1. Canvas 的子节点（节点名为 "BattleController"）
        // 2. 直接挂载在 Canvas 上的组件
        // 3. 场景根节点的子节点
        const scene = cc.director.getScene();
        if (!scene) {
            cc.warn("[ReplayController] 未找到场景，无法禁用战斗逻辑");
            return;
        }

        let battleController = null;

        // 方法1: 在 Canvas 的子节点中查找
        const canvas = scene.getChildByName("Canvas");
        if (canvas) {
            // 先尝试在 Canvas 节点本身查找组件
            battleController = canvas.getComponent("BattleController");

            // 如果没找到，尝试在 Canvas 的子节点中查找名为 "BattleController" 的节点
            if (!battleController) {
                const battleControllerNode = canvas.getChildByName("BattleController");
                if (battleControllerNode) {
                    battleController = battleControllerNode.getComponent("BattleController");
                }
            }
        }

        // 方法2: 如果还没找到，在场景根节点中查找
        if (!battleController) {
            const battleControllerNode = scene.getChildByName("BattleController");
            if (battleControllerNode) {
                battleController = battleControllerNode.getComponent("BattleController");
            }
        }

        // 方法3: 遍历场景所有节点查找（最后手段）
        if (!battleController) {
            const findBattleController = (node) => {
                const comp = node.getComponent("BattleController");
                if (comp) return comp;
                for (let child of node.children) {
                    const result = findBattleController(child);
                    if (result) return result;
                }
                return null;
            };
            battleController = findBattleController(scene);
        }

        if (battleController) {
            this.battleController = battleController;
            this.battleSystem = battleController.battleSystem;

            // 标记为回放模式，禁用正常更新
            battleController.isReplaying = true; // 设置回放标志
            cc.log("[ReplayController] 已找到并设置回放模式，BattleSystem已禁用");

            // 同时标记BattleSystem为结束状态（双重保险）
            if (this.battleSystem) {
                this.battleSystem.finished = true;
            }
        } else {
            cc.warn("[ReplayController] 未找到BattleController，无法禁用战斗逻辑");
            cc.warn("[ReplayController] 请确保BattleController组件已正确挂载在场景中");
        }
    },

    /**
     * 恢复BattleSystem（回放结束后恢复）
     * @private
     */
    _resumeBattleSystem() {
        if (this.battleController) {
            // 清除回放标志
            this.battleController.isReplaying = false;
            cc.log("[ReplayController] 已清除回放模式");
        }

        // 停止所有动画
        this._stopAllAnimations();

        // 注意：不恢复BattleSystem的finished状态，因为战斗已经结束
        // 如果需要重新开始战斗，应该重新加载场景
    },

    /**
     * 暂停所有正在进行的动画（回放暂停时调用）
     * 完全冻结画面：停止所有 tween 动画、Spine 动画，确保画面静止
     * @private
     */
    _pauseAllAnimations() {
        if (!this.battleController) return;

        const heros = this.battleController.heros || [];
        const monsters = this.battleController.monsters || [];
        const allUnits = [...heros, ...monsters];

        let stoppedCount = 0;
        let pausedSpineCount = 0;

        allUnits.forEach(unit => {
            if (unit && unit.isValid) {
                // 1. 停止所有 tween 动画（移动、缩放、旋转等）
                cc.Tween.stopAllByTarget(unit);

                // 2. 停止 AttackMover 的动画
                const attackMover = unit.getComponent("AttackMover");
                if (attackMover) {
                    if (attackMover.isAttacking) {
                        attackMover.isAttacking = false;
                        stoppedCount++;
                    }
                }

                // 3. 暂停 Spine 动画（通过设置 timeScale = 0）
                const skeleton = unit.getComponent(sp.Skeleton);
                if (skeleton) {
                    // 保存原始 timeScale（如果还没有保存）
                    if (skeleton._originalTimeScale === undefined) {
                        skeleton._originalTimeScale = skeleton.timeScale || 1.0;
                    }
                    // 暂停动画（timeScale = 0 时动画完全停止）
                    skeleton.timeScale = 0;
                    pausedSpineCount++;
                }

                // 4. 停止所有节点上的 tween（包括子节点）
                const stopTweenOnNode = (node) => {
                    cc.Tween.stopAllByTarget(node);
                    node.children.forEach(child => {
                        stopTweenOnNode(child);
                    });
                };
                stopTweenOnNode(unit);
            }
        });

        cc.log(`[ReplayController] 已暂停 ${stoppedCount} 个单位的攻击动画，${pausedSpineCount} 个单位的 Spine 动画`);
    },

    /**
     * 恢复所有动画（回放继续时调用）
     * @private
     */
    _resumeAllAnimations() {
        if (!this.battleController) return;

        const heros = this.battleController.heros || [];
        const monsters = this.battleController.monsters || [];
        const allUnits = [...heros, ...monsters];

        let resumedCount = 0;

        allUnits.forEach(unit => {
            if (unit && unit.isValid) {
                // 恢复 Spine 动画的播放速度
                const skeleton = unit.getComponent(sp.Skeleton);
                if (skeleton && skeleton._originalTimeScale !== undefined) {
                    skeleton.timeScale = skeleton._originalTimeScale;
                    delete skeleton._originalTimeScale;
                    resumedCount++;
                }
            }
        });

        if (resumedCount > 0) {
            cc.log(`[ReplayController] 已恢复 ${resumedCount} 个单位的 Spine 动画`);
        }
    },

    /**
     * 停止所有动画（回放停止时调用）
     * @private
     */
    _stopAllAnimations() {
        if (!this.battleController) return;

        const heros = this.battleController.heros || [];
        const monsters = this.battleController.monsters || [];
        const allUnits = [...heros, ...monsters];

        let stoppedCount = 0;
        allUnits.forEach(unit => {
            if (unit && unit.isValid) {
                const attackMover = unit.getComponent("AttackMover");
                if (attackMover) {
                    // 停止所有动画并重置
                    attackMover.stopAttack();
                    stoppedCount++;
                }

                // 停止所有tween动画（包括其他可能的动画）
                cc.Tween.stopAllByTarget(unit);
            }
        });

        if (stoppedCount > 0) {
            cc.log(`[ReplayController] 已停止 ${stoppedCount} 个单位的动画`);
        }
    }
});

