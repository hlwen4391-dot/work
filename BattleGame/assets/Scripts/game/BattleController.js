const AnimationState = {
    ATTACK: "atk",      // 攻击动画
    BY_ATK: "byatk",    // 受击动画
    DIE: "die",         // 死亡动画
    SHI_HUA: "shihua",  // 石化动画
    WAIT: "wait",       // 待机动画
}


/**
 * 战斗控制器
 * 负责战斗场景的初始化和战斗系统的驱动
 */
cc.Class({
    extends: cc.Component,

    properties: {
        // 英雄节点数组（从场景中直接引用）
        heroNodes: {
            default: [],
            type: [cc.Node],
            tooltip: "拖入场景中的英雄节点"
        },

        // 怪物节点数组（从场景中直接引用）
        monsterNodes: {
            default: [],
            type: [cc.Node],
            tooltip: "拖入场景中的怪物节点"
        },

        // 或者使用父节点自动获取（二选一）
        heroParent: {
            default: null,
            type: cc.Node,
            tooltip: "英雄父节点，自动获取所有子节点作为英雄"
        },

        monsterParent: {
            default: null,
            type: cc.Node,
            tooltip: "怪物父节点，自动获取所有子节点作为怪物"
        },

        // 是否使用父节点模式
        useParentMode: {
            default: false,
            tooltip: "true: 从父节点获取子节点 | false: 使用heroNodes和monsterNodes"
        },

        // 游戏结束面板组件（可选，如果使用场景跳转则不需要）
        gameOverPanel: {
            default: null,
            type: cc.Node,
            tooltip: "游戏结束面板节点（如果使用场景跳转则不需要）"
        },

        // 是否启用战斗记录
        enableRecording: {
            default: true,
            tooltip: "是否启用战斗记录功能"
        },

        // 游戏结束场景名称
        gameOverSceneName: {
            default: "GameOverScene",
            tooltip: "游戏结束场景名称（如果为空则使用当前场景的gameOverPanel）"
        },

        // 是否使用场景跳转（true: 跳转到新场景 | false: 在当前场景显示面板）
        useSceneTransition: {
            default: true,
            tooltip: "是否使用场景跳转显示游戏结束画面"
        },

        // 回放控制器（可选）
        replayController: {
            default: null,
            type: cc.Node,
            tooltip: "回放控制器节点（挂载了ReplayController组件）"
        }
    },

    onLoad() {
        const BattleSystem = require("BattleSystem");
        const BattleLoggers = require("BattleLoggers");
        const mulberry32 = require("random");
        const { SkillConfig } = require("SkillConfig");

        // 保存技能配置供后续使用
        this.SkillConfig = SkillConfig;

        this.rand = mulberry32(123456);
        this.logger = new BattleLoggers();

        this.heros = [];
        this.monsters = [];

        // 是否正在回放（用于禁用BattleSystem的update）
        this.isReplaying = false;

        // 创建单位（这是初始化 ECS 组件的关键步骤）
        this.spawnUnits();

        // 游戏结束回调函数
        const onGameOver = (winner, winnerText) => {
            this._onGameOver(winner, winnerText);
        };

        // 创建战斗记录器（如果启用）
        let recorder = null;
        if (this.enableRecording) {
            const BattleRecorder = require("BattleRecorder");
            recorder = new BattleRecorder();//创建战斗记录器
            this.battleRecorder = recorder; // 保存引用，用于后续访问记录
        }

        // 创建战斗系统
        this.battleSystem = new BattleSystem(
            this.heros,
            this.monsters,
            this.logger,
            this.rand,
            onGameOver,
            recorder
        );

        this.lastTime = Date.now();

        // 检查是否需要自动开始回放（从GameOverScene跳转回来时）
        this.scheduleOnce(() => {
            this._checkAutoReplay();
        }, 0.1); // 延迟一小段时间，确保所有组件都已初始化
    },

    /**
     * 检查是否需要自动开始回放
     * @private
     */
    _checkAutoReplay() {
        if (window.AutoStartReplay && window.AutoStartReplay.enabled) {
            const recordKey = window.AutoStartReplay.recordKey;
            cc.log(`[BattleController] 检测到自动回放标志，准备开始回放: ${recordKey}`);

            // 获取ReplayController
            let replayController = null;
            if (this.replayController) {
                replayController = this.replayController.getComponent("ReplayController");
            } else {
                // 尝试从场景中查找
                const scene = cc.director.getScene();
                if (scene) {
                    const canvas = scene.getChildByName("Canvas");
                    if (canvas) {
                        const replayNode = canvas.getChildByName("ReplayController");
                        if (replayNode) {
                            replayController = replayNode.getComponent("ReplayController");
                        }
                    }
                }
            }

            if (replayController && recordKey) {
                // 开始回放
                replayController.loadAndReplay(recordKey, this.heros, this.monsters);
                cc.log(`[BattleController] 自动回放已启动`);

                // 清除自动回放标志
                window.AutoStartReplay = null;
            } else {
                cc.error(`[BattleController] 无法自动开始回放`);
                cc.error(`   - ReplayController: ${replayController ? '找到' : '未找到'}`);
                cc.error(`   - recordKey: ${recordKey ? recordKey : '不存在'}`);
            }
        }
    },

    /**
     * 获取场景中的角色节点
     */
    spawnUnits() {
        // 根据模式获取节点
        if (this.useParentMode) {
            // 模式1: 从父节点获取子节点
            this._getUnitsFromParent();
        } else {
            // 模式2: 使用预先配置的节点数组
            this._getUnitsFromArray();
        }

        // 为所有角色初始化战斗数据和动画
        this._initAllUnits();
    },

    /**
     * 从父节点获取所有子节点作为战斗单位
     * @private
     */
    _getUnitsFromParent() {
        // 获取英雄
        if (this.heroParent) {
            this.heros = this.heroParent.children.filter(child => child.active);
            cc.log(`[BattleController] 从 heroParent 获取到 ${this.heros.length} 个英雄`);
        }

        // 获取怪物
        if (this.monsterParent) {
            this.monsters = this.monsterParent.children.filter(child => child.active);
            cc.log(`[BattleController] 从 monsterParent 获取到 ${this.monsters.length} 个怪物`);
        }
    },

    /**
     * 从配置的节点数组获取战斗单位
     * @private
     */
    _getUnitsFromArray() {
        // 获取英雄（过滤掉无效和未激活的节点）
        this.heros = this.heroNodes.filter(node => node && node.isValid && node.active);
        cc.log(`[BattleController] 从 heroNodes 获取到 ${this.heros.length} 个英雄`);

        // 获取怪物
        this.monsters = this.monsterNodes.filter(node => node && node.isValid && node.active);
        cc.log(`[BattleController] 从 monsterNodes 获取到 ${this.monsters.length} 个怪物`);
    },

    /**
     * 初始化所有战斗单位
     * @private
     */
    _initAllUnits() {
        const { SkillConfig } = this;

        // 角色数据配置（根据名称匹配）
        const unitDataConfig = {
            "战士": {
                hp: 120,
                attack: 8,
                defense: 10,
                speed: 12,
                crit: 0.15,
                skills: [
                    SkillConfig.normalAttack,
                    SkillConfig.stunSkill,
                    SkillConfig.shieldAllies
                ]
            },
            "法师": {
                hp: 80,
                attack: 12,
                defense: 4,
                speed: 8,
                crit: 0.1,
                miss: 0.1,
                skills: [
                    SkillConfig.normalAttack,
                    SkillConfig.fireball
                ]
            },
            "怪物": {
                hp: 80,
                attack: 10,
                defense: 5,
                speed: 15,
                skills: [
                    SkillConfig.normalAttack,
                    SkillConfig.beastRage
                ]
            },
            "Boss": {
                hp: 150,
                attack: 12,
                defense: 8,
                speed: 10,
                skills: [
                    SkillConfig.normalAttack,
                    SkillConfig.warCry
                ]
            }
        };

        // 初始化英雄
        for (let node of this.heros) {
            const data = unitDataConfig[node.name] || this._getDefaultData();
            this.initEntity(node, data, "hero");

            // 设置初始待机动画
            const skeleton = node.getComponent(sp.Skeleton);
            if (skeleton) {
                skeleton.setAnimation(0, AnimationState.WAIT, true);
            }

            cc.log(`[BattleController] 初始化英雄: ${node.name}`);
        }

        // 初始化怪物
        for (let node of this.monsters) {
            const data = unitDataConfig[node.name] || this._getDefaultData();
            this.initEntity(node, data, "monster");

            // 设置初始待机动画
            const skeleton = node.getComponent(sp.Skeleton);
            if (skeleton) {
                skeleton.setAnimation(0, AnimationState.WAIT, true);
            }

            cc.log(`[BattleController] 初始化怪物: ${node.name}`);
        }
    },

    /**
     * 获取默认数据（如果没有配置）
     * @private
     */
    _getDefaultData() {
        return {
            hp: 100,
            attack: 10,
            defense: 5,
            speed: 10,
            crit: 0.1,
            skills: [this.SkillConfig.normalAttack]
        };
    },

    initEntity(node, data, teamName) {
        const stats = node.getComponent("StatsComponent");
        const team = node.getComponent("TeamComponent");
        const skills = node.getComponent("SkillComponent");

        // 检查必需组件是否存在
        if (!stats) {
            cc.error(`❌ [BattleController] 节点 "${node.name}" 缺少 StatsComponent 组件!`);
            cc.error(`   请在节点上添加 StatsComponent 组件`);
            return;
        }
        if (!team) {
            cc.error(`❌ [BattleController] 节点 "${node.name}" 缺少 TeamComponent 组件!`);
            cc.error(`   请在节点上添加 TeamComponent 组件`);
            return;
        }
        if (!skills) {
            cc.error(`❌ [BattleController] 节点 "${node.name}" 缺少 SkillComponent 组件!`);
            cc.error(`   请在节点上添加 SkillComponent 组件`);
            return;
        }

        // 初始化属性 - 优先使用编辑器中设置的值，如果为默认值则使用配置
        // 只有当编辑器值为默认值(100)时，才使用代码配置的值
        if (stats.hp === 100 && data.hp !== undefined) {
            stats.hp = data.hp;
            stats.maxHp = data.hp;
        } else {
            // 使用编辑器中设置的值
            stats.maxHp = stats.hp;
        }

        if (stats.attack === 1 && data.attack !== undefined) {
            stats.attack = data.attack;
        }
        if (stats.defense === 1 && data.defense !== undefined) {
            stats.defense = data.defense;
        }
        if (stats.speed === 1 && data.speed !== undefined) {
            stats.speed = data.speed;
        }
        if (stats.crit === 0 && data.crit !== undefined) {
            stats.crit = data.crit;
        }
        if (stats.miss === 0 && data.miss !== undefined) {
            stats.miss = data.miss;
        }
        if (stats.immune === 0 && data.immune !== undefined) {
            stats.immune = data.immune;
        }

        // 初始化技能
        if (data.skills && data.skills.length > 0) {
            skills.init(data.skills);
        }

        // 设置队伍
        team.team = teamName;

        // 初始化血条显示（可能不存在血条组件）
        if (stats.updateHealthBar) {
            stats.updateHealthBar();
        }

        cc.log(`✅ [BattleController] ${node.name} 初始化成功 (${teamName}) - HP:${stats.hp}, ATK:${stats.attack}, DEF:${stats.defense}, SPD:${stats.speed}`);
    },

    update() {
        // 如果正在回放，不执行BattleSystem的update（避免冲突）
        if (this.isReplaying) {
            return;
        }

        if (!this.battleSystem || this.battleSystem.finished) return;

        const now = Date.now();
        const dt = (now - this.lastTime) / 1000;
        this.lastTime = now;

        this.battleSystem.update(dt);
    },

    /**
     * 游戏结束处理
     * @param {string} winner - 胜利方（"hero" 或 "monster"）
     * @param {string} winnerText - 胜利方文本（"英雄" 或 "怪物"）
     * @private
     */
    _onGameOver(winner, winnerText) {
        cc.log(`[BattleController] 游戏结束：${winnerText}胜利`);
        cc.log(`[BattleController] 当前英雄数量: ${this.heros.length}, 怪物数量: ${this.monsters.length}`);
        cc.log(`[BattleController] useSceneTransition=${this.useSceneTransition}, gameOverSceneName="${this.gameOverSceneName}"`);

        // 记录游戏结束事件并保存战斗记录
        if (this.battleRecorder) {
            this.battleRecorder.recordEvent("gameOver", { winner: winner, winnerText: winnerText });
            this.battleRecorder.stopRecording();

            // 保存战斗记录到本地存储
            const recordKey = `battle_replay_${Date.now()}`;
            this.battleRecorder.saveToLocalStorage(recordKey);
            cc.log(`[BattleController] 战斗记录已保存: ${recordKey}`);

            // 将记录键保存到全局，供GameOverPanel使用
            window.LastBattleRecordKey = recordKey;
        }

        // 根据设置选择显示方式
        if (this.useSceneTransition && this.gameOverSceneName) {
            // 方式1: 跳转到游戏结束场景
            cc.log(`[BattleController] 使用场景跳转方式`);
            this._transitionToGameOverScene(winner, winnerText);
        } else {
            // 方式2: 在当前场景显示游戏结束面板
            cc.log(`[BattleController] 使用当前场景面板方式`);
            if (!this.useSceneTransition) {
                cc.log(`[BattleController] useSceneTransition为false，使用面板方式`);
            }
            if (!this.gameOverSceneName) {
                cc.log(`[BattleController] gameOverSceneName为空，使用面板方式`);
            }
            this._showGameOverPanel(winner);
        }
    },

    /**
     * 跳转到游戏结束场景
     * @private
     */
    _transitionToGameOverScene(winner, winnerText) {
        cc.log(`[BattleController] ===== 开始场景跳转流程 =====`);
        cc.log(`[BattleController] 准备跳转到游戏结束场景: "${this.gameOverSceneName}"`);
        cc.log(`[BattleController] 胜利方: ${winnerText} (${winner})`);

        // 方法1: 使用全局对象传递数据（推荐）
        window.BattleGameResult = {
            winner: winner,
            winnerText: winnerText
        };
        cc.log(`[BattleController] 已设置全局数据: window.BattleGameResult =`, window.BattleGameResult);

        // 延迟一小段时间再跳转，确保所有战斗动画完成
        cc.log(`[BattleController] 延迟0.5秒后跳转场景...`);
        this.scheduleOnce(() => {
            cc.log(`[BattleController] 开始加载场景: ${this.gameOverSceneName}`);
            try {
                cc.director.loadScene(this.gameOverSceneName, (error) => {
                    if (error) {
                        cc.error(`[BattleController] 场景加载失败: ${error}`);
                        cc.error(`[BattleController] 请检查场景名称是否正确，场景文件是否存在`);
                        // 如果场景加载失败，回退到面板显示方式
                        this._showGameOverPanel(winner);
                    } else {
                        cc.log(`[BattleController] ✅ 场景加载成功: ${this.gameOverSceneName}`);
                    }
                });
            } catch (e) {
                cc.error(`[BattleController] 场景跳转异常: ${e.message}`);
                cc.error(`[BattleController] 错误堆栈: ${e.stack}`);
                // 如果发生异常，回退到面板显示方式
                this._showGameOverPanel(winner);
            }
        }, 0.5); // 延迟0.5秒
    },

    /**
     * 在当前场景显示游戏结束面板
     * @private
     */
    _showGameOverPanel(winner) {
        if (this.gameOverPanel) {
            const gameOverPanelComp = this.gameOverPanel.getComponent("GameOverPanel");
            if (gameOverPanelComp) {
                gameOverPanelComp.showGameOver(winner);
            } else {
                cc.error("[BattleController] gameOverPanel节点未挂载GameOverPanel组件！");
                cc.error("   请在gameOverPanel节点上添加GameOverPanel组件");
            }
        } else {
            cc.error("[BattleController] 未设置gameOverPanel节点！");
            cc.error("   请在BattleController的属性检查器中设置gameOverPanel属性");
        }
    }
});
