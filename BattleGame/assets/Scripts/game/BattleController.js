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

        // 是否使用选择场景模式（自动创建节点和排兵布阵）
        useSelectSceneMode: {
            default: false,
            tooltip: "true: 从SelectScene选择的数据自动创建节点 | false: 使用原有模式"
        },

        // 英雄Prefab（用于自动创建）
        heroPrefab: {
            default: null,
            type: cc.Prefab,
            tooltip: "英雄Prefab（使用选择场景模式时需要）"
        },

        // 怪物Prefab（用于自动创建）
        monsterPrefab: {
            default: null,
            type: cc.Prefab,
            tooltip: "怪物Prefab（使用选择场景模式时需要）"
        },

        // 英雄父节点（用于自动排兵布阵）
        heroParent: {
            default: null,
            type: cc.Node,
            tooltip: "英雄父节点（用于自动排兵布阵，英雄会放在左边）"
        },

        // 怪物父节点（用于自动排兵布阵）
        monsterParent: {
            default: null,
            type: cc.Node,
            tooltip: "怪物父节点（用于自动排兵布阵，怪物会放在右边）"
        },

        // 排兵布阵区域（英雄在左边，怪物在右边）
        heroAreaLeft: {
            default: -200,
            tooltip: "英雄区域左边界（X坐标）"
        },

        heroAreaRight: {
            default: 0,
            tooltip: "英雄区域右边界（X坐标）"
        },

        heroAreaTop: {
            default: 100,
            tooltip: "英雄区域上边界（Y坐标）"
        },

        heroAreaBottom: {
            default: -100,
            tooltip: "英雄区域下边界（Y坐标）"
        },

        monsterAreaLeft: {
            default: 0,
            tooltip: "怪物区域左边界（X坐标）"
        },

        monsterAreaRight: {
            default: 200,
            tooltip: "怪物区域右边界（X坐标）"
        },

        monsterAreaTop: {
            default: 100,
            tooltip: "怪物区域上边界（Y坐标）"
        },

        monsterAreaBottom: {
            default: -100,
            tooltip: "怪物区域下边界（Y坐标）"
        },

        // 固定单位大小（所有单位使用相同大小）
        unitScale: {
            default: 1.0,
            tooltip: "单位固定缩放大小（所有单位统一使用此大小）"
        },

        // 单位之间的最小间隔距离（防止重叠和误触）
        minUnitSpacing: {
            default: 120,
            tooltip: "单位之间的最小间隔距离（像素），防止重叠和点击误触"
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

        // 战斗场景头像显示（左下角和右下角）
        heroAvatarContainer: {
            default: null,
            type: cc.Node,
            tooltip: "左侧英雄头像容器节点（左下角）"
        },

        monsterAvatarContainer: {
            default: null,
            type: cc.Node,
            tooltip: "右侧怪物头像容器节点（右下角）"
        },

        avatarPrefab: {
            default: null,
            type: cc.Prefab,
            tooltip: "头像Prefab（用于动态创建头像，与SelectSceneUI使用相同的Prefab）"
        },

        heroIcons: {
            default: [],
            type: [cc.SpriteFrame],
            tooltip: "英雄头像资源列表（按顺序：战士、法师...，与SelectSceneUI相同）"
        },

        monsterIcons: {
            default: [],
            type: [cc.SpriteFrame],
            tooltip: "怪物头像资源列表（按顺序：怪物、Boss...，与SelectSceneUI相同）"
        },

        avatarSize: {
            default: 80,
            tooltip: "头像显示大小（像素）"
        },

        avatarSpacing: {
            default: 10,
            tooltip: "头像之间的间距（像素）"
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

        // 初始化已生成位置记录（用于防止单位重叠）
        this._generatedPositions = {
            hero: [],
            monster: []
        };

        // 是否正在回放（用于禁用BattleSystem的update）
        this.isReplaying = false;

        // 检查是否使用选择场景模式
        if (window.SelectedUnits && (window.SelectedUnits.heros.length > 0 || window.SelectedUnits.monsters.length > 0)) {
            cc.log("[BattleController] 检测到选择场景数据，使用自动创建节点模式");
            this.useSelectSceneMode = true;
            // 创建单位（从选择场景的数据自动创建）
            this.spawnUnitsFromSelection();
        } else {
            // 创建单位（这是初始化 ECS 组件的关键步骤）
            this.spawnUnits();
        }

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

        // 显示战斗场景头像（从SelectedUnits获取）
        this.scheduleOnce(() => {
            this.initBattleAvatars();
        }, 0.2);

        // 清除全局数据（在头像显示完成后清除）
        this.scheduleOnce(() => {
            if (window.SelectedUnits) {
                cc.log("[BattleController] 清除window.SelectedUnits");
                window.SelectedUnits = null;
            }
        }, 0.5);

        // 开始更新头像颜色（根据怒气值）
        this.schedule(this._updateAllAvatarColors, 0.1); // 每0.1秒检查一次

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
        // 增加延迟时间，确保单位创建完成（特别是从SelectScene选择的人物）
        this.scheduleOnce(() => {
            this._checkAutoReplay();
        }, 0.5); // 延迟0.5秒，确保所有单位都已创建完成
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
                // 确保使用当前场景的单位列表（从SelectScene选择的人物）
                const currentHeros = this.heros || [];
                const currentMonsters = this.monsters || [];
                cc.log(`[BattleController] 开始回放，使用当前场景的单位列表 - 英雄: ${currentHeros.length}个, 怪物: ${currentMonsters.length}个`);

                // 开始回放（传入当前场景的单位列表）
                replayController.loadAndReplay(recordKey, currentHeros, currentMonsters);
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
     * 从选择场景的数据自动创建节点并排兵布阵
     * @private
     */
    spawnUnitsFromSelection() {
        if (!window.SelectedUnits) {
            cc.error("[BattleController] window.SelectedUnits 不存在，无法自动创建节点");
            return;
        }

        const selectedUnits = window.SelectedUnits;
        cc.log(`[BattleController] 开始自动创建节点 - 英雄: ${selectedUnits.heros.length}个, 怪物: ${selectedUnits.monsters.length}个`);

        // 创建英雄节点
        if (selectedUnits.heros && selectedUnits.heros.length > 0) {
            if (!this.heroPrefab) {
                cc.error("[BattleController] 未设置heroPrefab，无法创建英雄节点");
            } else {
                selectedUnits.heros.forEach((unitData, index) => {
                    const heroNode = this._createUnitNode(unitData, "hero", index, selectedUnits.heros.length);
                    if (heroNode) {
                        this.heros.push(heroNode);
                    }
                });
            }
        }

        // 创建怪物节点
        if (selectedUnits.monsters && selectedUnits.monsters.length > 0) {
            if (!this.monsterPrefab) {
                cc.error("[BattleController] 未设置monsterPrefab，无法创建怪物节点");
            } else {
                selectedUnits.monsters.forEach((unitData, index) => {
                    const monsterNode = this._createUnitNode(unitData, "monster", index, selectedUnits.monsters.length);
                    if (monsterNode) {
                        this.monsters.push(monsterNode);
                    }
                });
            }
        }

        // 为所有角色初始化战斗数据和动画
        this._initAllUnits();
    },

    /**
     * 创建单位节点
     * @private
     * @param {Object} unitData - 单位数据
     * @param {string} team - 队伍类型（"hero" 或 "monster"）
     * @param {number} index - 索引
     * @param {number} totalCount - 总数量
     * @returns {cc.Node} 创建的单位节点
     */
    _createUnitNode(unitData, team, index, totalCount) {
        // 优先使用unitData中的prefab（这是完整的角色Prefab，包含所有组件）
        // 如果没有，再使用通用的heroPrefab/monsterPrefab作为后备
        let prefab = unitData.prefab;
        let prefabSource = "unitData.prefab";

        if (!prefab) {
            // 后备方案：使用通用的Prefab
            prefab = team === "hero" ? this.heroPrefab : this.monsterPrefab;
            prefabSource = `${team}Prefab`;

            if (!prefab) {
                cc.error(`[BattleController] ✗ 未设置${team}Prefab，且unitData.prefab也为空，无法创建${team}节点`);
                cc.error(`[BattleController] 请选择以下方案之一：`);
                cc.error(`[BattleController]   1. 在UnitDataConfig中为"${unitData.name}"设置prefab（推荐）`);
                cc.error(`[BattleController]   2. 在BattleController组件中绑定${team}Prefab`);
                return null;
            } else {
                cc.warn(`[BattleController] ⚠️ unitData.prefab为空，使用通用${team}Prefab: ${unitData.name}`);
                cc.warn(`[BattleController]   建议：将场景中完整的"${unitData.name}"节点保存为Prefab，并在UnitDataConfig中绑定`);
            }
        } else {
            cc.log(`[BattleController] ✓ 使用unitData.prefab创建节点: ${unitData.name}`);
        }

        cc.log(`[BattleController] 开始创建${team}节点: ${unitData.name} (使用${prefabSource})`);

        // 实例化Prefab
        const unitNode = cc.instantiate(prefab);
        unitNode.name = unitData.name;

        // 确保节点可见
        unitNode.active = true;
        unitNode.opacity = 255;

        // 设置父节点
        const parent = team === "hero" ? this.heroParent : this.monsterParent;
        if (parent) {
            // 确保父节点可见
            if (!parent.active) {
                cc.warn(`[BattleController] ⚠️ ${team}Parent未激活，已自动激活`);
                parent.active = true;
            }
            if (parent.opacity === 0) {
                cc.warn(`[BattleController] ⚠️ ${team}Parent透明度为0，已设置为255`);
                parent.opacity = 255;
            }
            parent.addChild(unitNode);
            cc.log(`[BattleController] ${team}节点已添加到父节点: ${parent.name}, 父节点位置: (${parent.x}, ${parent.y})`);
        } else {
            // 如果没有父节点，添加到Canvas
            const canvas = cc.find("Canvas");
            if (canvas) {
                canvas.addChild(unitNode);
                cc.log(`[BattleController] ${team}节点已添加到Canvas`);
            } else {
                cc.error(`[BattleController] ✗ 未找到Canvas节点，无法添加${team}节点`);
                return null;
            }
        }

        // 自动排兵布阵（优先使用unitData中的位置，否则使用随机位置）
        let position;
        if (unitData.position && unitData.position.x !== undefined && unitData.position.y !== undefined) {
            // 使用保存的位置（从战斗记录恢复的）
            position = cc.v2(unitData.position.x, unitData.position.y);
            cc.log(`[BattleController] 使用保存的位置: (${position.x.toFixed(1)}, ${position.y.toFixed(1)})`);
        } else {
            // 使用随机位置（新创建的单位）
            position = this._calculateFormationPosition(team, index, totalCount);
            cc.log(`[BattleController] 使用随机位置: (${position.x.toFixed(1)}, ${position.y.toFixed(1)})`);
        }
        unitNode.setPosition(position.x, position.y);

        // 设置固定大小
        unitNode.setScale(this.unitScale, this.unitScale, 1.0);
        cc.log(`[BattleController] 设置${team}节点固定大小: ${this.unitScale}x${this.unitScale}`);

        // 设置初始面向方向
        // 英雄面向右边（正scaleX），怪物面向左边（负scaleX）
        if (team === "hero") {
            unitNode.scaleX = Math.abs(unitNode.scaleX); // 确保为正（面向右边）
        } else {
            unitNode.scaleX = -Math.abs(unitNode.scaleX); // 确保为负（面向左边）
        }
        cc.log(`[BattleController] 设置${team}节点初始面向: scaleX=${unitNode.scaleX}`);

        // 保存单位数据到节点（用于后续初始化）
        unitNode._unitData = unitData;
        unitNode._team = team;

        // 检查节点是否有必需的组件
        const stats = unitNode.getComponent("StatsComponent");
        const teamComp = unitNode.getComponent("TeamComponent");
        const skills = unitNode.getComponent("SkillComponent");
        const skeleton = unitNode.getComponent(sp.Skeleton);

        cc.log(`[BattleController] ${team}节点组件检查: ${unitData.name}`);
        cc.log(`[BattleController]   StatsComponent: ${stats ? '✓' : '✗'}`);
        cc.log(`[BattleController]   TeamComponent: ${teamComp ? '✓' : '✗'}`);
        cc.log(`[BattleController]   SkillComponent: ${skills ? '✓' : '✗'}`);
        cc.log(`[BattleController]   Spine Skeleton: ${skeleton ? '✓' : '✗'}`);

        if (!stats) {
            cc.error(`[BattleController] ✗ ${team}节点缺少StatsComponent组件: ${unitData.name}`);
            cc.error(`[BattleController]   请在Prefab "${prefab.name}" 的根节点上添加StatsComponent组件`);
        }
        if (!teamComp) {
            cc.error(`[BattleController] ✗ ${team}节点缺少TeamComponent组件: ${unitData.name}`);
            cc.error(`[BattleController]   请在Prefab "${prefab.name}" 的根节点上添加TeamComponent组件`);
        }
        if (!skills) {
            cc.error(`[BattleController] ✗ ${team}节点缺少SkillComponent组件: ${unitData.name}`);
            cc.error(`[BattleController]   请在Prefab "${prefab.name}" 的根节点上添加SkillComponent组件`);
        }
        if (!skeleton) {
            cc.warn(`[BattleController] ⚠️ ${team}节点缺少Spine Skeleton组件: ${unitData.name}`);
            cc.warn(`[BattleController]   节点可能没有动画显示，请在Prefab "${prefab.name}" 上添加sp.Skeleton组件`);
        } else {
            // 检查Spine资源是否加载
            if (!skeleton.skeletonData) {
                cc.warn(`[BattleController] ⚠️ ${team}节点的Spine Skeleton组件没有skeletonData: ${unitData.name}`);
            } else {
                cc.log(`[BattleController]   Spine资源: ${skeleton.skeletonData.name || '已加载'}`);
            }
        }

        // 检查节点内容大小
        const contentSize = unitNode.getContentSize();
        if (contentSize.width === 0 && contentSize.height === 0) {
            cc.warn(`[BattleController] ⚠️ ${team}节点内容大小为0: ${unitData.name}`);
            cc.warn(`[BattleController]   这通常意味着节点没有视觉内容（如Sprite或Spine）`);
            cc.warn(`[BattleController]   请检查Prefab "${prefab.name}" 是否有Sprite或Spine子节点`);

            // 尝试从子节点获取大小
            const children = unitNode.children;
            if (children && children.length > 0) {
                let maxWidth = 0, maxHeight = 0;
                children.forEach(child => {
                    const childSize = child.getContentSize();
                    const childLocalPos = child.getPosition();
                    if (childSize.width > maxWidth) maxWidth = childSize.width;
                    if (childSize.height > maxHeight) maxHeight = childSize.height;
                    cc.log(`[BattleController]   子节点: ${child.name}, 大小: ${childSize.width}x${childSize.height}, 位置: (${childLocalPos.x}, ${childLocalPos.y})`);
                });
                if (maxWidth > 0 || maxHeight > 0) {
                    cc.log(`[BattleController]   建议设置节点内容大小: ${maxWidth}x${maxHeight}`);
                }
            } else {
                cc.warn(`[BattleController]   Prefab "${prefab.name}" 没有任何子节点`);
            }
        }

        // 最终日志输出
        cc.log(`[BattleController] ✓ 创建${team}节点完成: ${unitData.name}`);
        cc.log(`[BattleController]   本地位置: (${position.x.toFixed(1)}, ${position.y.toFixed(1)})`);
        cc.log(`[BattleController]   节点大小: ${contentSize.width.toFixed(1)}x${contentSize.height.toFixed(1)}`);
        cc.log(`[BattleController]   节点active: ${unitNode.active}, opacity: ${unitNode.opacity}`);
        if (unitNode.parent) {
            cc.log(`[BattleController]   父节点: ${unitNode.parent.name}, 父节点位置: (${unitNode.parent.x}, ${unitNode.parent.y})`);
        }

        return unitNode;
    },

    /**
     * 计算排兵布阵位置（带间隔检查，防止重叠）
     * @private
     * @param {string} team - 队伍类型
     * @param {number} index - 索引
     * @param {number} totalCount - 总数量
     * @returns {cc.Vec2} 位置坐标
     */
    _calculateFormationPosition(team, index, totalCount) {
        let x, y;
        let rangeX, rangeY;
        let areaLeft, areaRight, areaTop, areaBottom;

        // 根据队伍类型确定区域范围
        if (team === "hero") {
            areaLeft = this.heroAreaLeft;
            areaRight = this.heroAreaRight;
            areaTop = this.heroAreaTop;
            areaBottom = this.heroAreaBottom;
        } else {
            areaLeft = this.monsterAreaLeft;
            areaRight = this.monsterAreaRight;
            areaTop = this.monsterAreaTop;
            areaBottom = this.monsterAreaBottom;
        }

        rangeX = areaRight - areaLeft;
        rangeY = areaTop - areaBottom;

        // 检查区域设置是否合理
        if (rangeX <= 0 || rangeY <= 0) {
            cc.warn(`[BattleController] ⚠️ ${team}区域设置不合理: Left=${areaLeft}, Right=${areaRight}, Top=${areaTop}, Bottom=${areaBottom}`);
            // 使用默认值
            if (team === "hero") {
                x = -200;
                y = 0;
            } else {
                x = 200;
                y = 0;
            }
            return cc.v2(x, y);
        }

        // 获取该队伍已生成的位置列表
        const existingPositions = this._generatedPositions[team] || [];
        const minSpacing = this.minUnitSpacing || 100;  // 最小间隔距离
        const maxAttempts = 100;  // 最多尝试次数（增加尝试次数，提高随机分布成功率）

        // 尝试生成一个不与已有位置重叠的位置
        let attempts = 0;
        let validPosition = false;

        while (!validPosition && attempts < maxAttempts) {
            // 生成随机位置（保持原有的随机分布逻辑）
            x = areaLeft + Math.random() * rangeX;
            y = areaBottom + Math.random() * rangeY;

            // 检查是否与已有位置太近
            validPosition = true;
            for (let i = 0; i < existingPositions.length; i++) {
                const existingPos = existingPositions[i];
                const distance = Math.sqrt(
                    Math.pow(x - existingPos.x, 2) + Math.pow(y - existingPos.y, 2)
                );

                if (distance < minSpacing) {
                    validPosition = false;
                    break;
                }
            }

            attempts++;
        }

        // 如果尝试多次后仍然找不到合适位置，使用改进的后备方案（保持随机分布风格）
        if (!validPosition) {
            cc.warn(`[BattleController] ⚠️ ${team}单位${index}无法找到合适位置（尝试${attempts}次），使用改进的后备方案`);

            // 改进的后备方案：在已有位置周围寻找空隙，保持随机分布的感觉
            // 如果区域足够大，尝试在已有位置周围寻找空隙
            let foundGap = false;
            const gapAttempts = 30;

            for (let gapAttempt = 0; gapAttempt < gapAttempts && !foundGap; gapAttempt++) {
                // 随机选择一个已有位置作为参考点
                if (existingPositions.length > 0) {
                    const refPos = existingPositions[Math.floor(Math.random() * existingPositions.length)];

                    // 在参考点周围随机偏移（偏移距离至少为minSpacing）
                    const angle = Math.random() * Math.PI * 2;
                    const offsetDistance = minSpacing + Math.random() * minSpacing; // 偏移距离：minSpacing 到 2*minSpacing

                    x = refPos.x + Math.cos(angle) * offsetDistance;
                    y = refPos.y + Math.sin(angle) * offsetDistance;

                    // 确保在区域内
                    x = Math.max(areaLeft, Math.min(areaRight, x));
                    y = Math.max(areaBottom, Math.min(areaTop, y));

                    // 检查是否满足间隔要求
                    foundGap = true;
                    for (let i = 0; i < existingPositions.length; i++) {
                        const existingPos = existingPositions[i];
                        const distance = Math.sqrt(
                            Math.pow(x - existingPos.x, 2) + Math.pow(y - existingPos.y, 2)
                        );

                        if (distance < minSpacing) {
                            foundGap = false;
                            break;
                        }
                    }
                }
            }

            // 如果仍然找不到空隙，使用简单的网格布局（最后的后备方案）
            if (!foundGap) {
                const gridCols = Math.ceil(Math.sqrt(totalCount));  // 列数
                const gridRows = Math.ceil(totalCount / gridCols);  // 行数

                const gridX = index % gridCols;
                const gridY = Math.floor(index / gridCols);

                // 计算网格间距（确保不超过区域范围）
                const gridSpacingX = Math.min(rangeX / (gridCols + 1), minSpacing);
                const gridSpacingY = Math.min(rangeY / (gridRows + 1), minSpacing);

                // 计算网格位置（在各自区域内居中排列，保持左右分离）
                const totalGridWidth = (gridCols - 1) * gridSpacingX;
                const totalGridHeight = (gridRows - 1) * gridSpacingY;
                const startX = areaLeft + (rangeX - totalGridWidth) / 2;
                const startY = areaBottom + (rangeY - totalGridHeight) / 2;

                x = startX + gridX * gridSpacingX;
                y = startY + gridY * gridSpacingY;

                cc.log(`[BattleController] ${team}单位${index}使用网格布局（最后后备）: 网格(${gridX}, ${gridY}), 位置: (${x.toFixed(1)}, ${y.toFixed(1)})`);
            } else {
                cc.log(`[BattleController] ${team}单位${index}使用空隙查找: 位置: (${x.toFixed(1)}, ${y.toFixed(1)})`);
            }
        } else {
            cc.log(`[BattleController] ${team}位置计算: 区域[${areaLeft}, ${areaRight}]x[${areaBottom}, ${areaTop}], 结果: (${x.toFixed(1)}, ${y.toFixed(1)}), 尝试次数: ${attempts}`);
        }

        // 将新位置添加到已生成位置列表
        const newPosition = cc.v2(x, y);
        if (!this._generatedPositions[team]) {
            this._generatedPositions[team] = [];
        }
        this._generatedPositions[team].push(newPosition);

        return newPosition;
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
            // 如果是从选择场景创建的节点，使用保存的单位数据
            let data;
            if (node._unitData) {
                data = node._unitData;
                cc.log(`[BattleController] 使用选择场景的单位数据初始化: ${node.name}`);
            } else {
                data = unitDataConfig[node.name] || this._getDefaultData();
            }
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
            // 如果是从选择场景创建的节点，使用保存的单位数据
            let data;
            if (node._unitData) {
                data = node._unitData;
                cc.log(`[BattleController] 使用选择场景的单位数据初始化: ${node.name}`);
            } else {
                data = unitDataConfig[node.name] || this._getDefaultData();
            }
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

        // 强制设置最大怒气值为120（覆盖Prefab中的默认值）
        stats.maxRage = 120;
        stats.rage = 0; // 重置当前怒气值

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
     * 初始化战斗场景头像显示（从SelectedUnits获取）
     * @private
     */
    initBattleAvatars() {
        if (!window.SelectedUnits) {
            cc.log("[BattleController] 无SelectedUnits数据，跳过头像显示");
            return;
        }

        const selectedUnits = window.SelectedUnits;
        cc.log(`[BattleController] 开始初始化战斗场景头像 - 英雄: ${selectedUnits.heros ? selectedUnits.heros.length : 0}个, 怪物: ${selectedUnits.monsters ? selectedUnits.monsters.length : 0}个`);

        // 显示英雄头像（左下角）
        if (selectedUnits.heros && selectedUnits.heros.length > 0 && this.heroAvatarContainer && this.avatarPrefab) {
            this._createBattleAvatars(selectedUnits.heros, "hero");
        }

        // 显示怪物头像（右下角）
        if (selectedUnits.monsters && selectedUnits.monsters.length > 0 && this.monsterAvatarContainer && this.avatarPrefab) {
            this._createBattleAvatars(selectedUnits.monsters, "monster");
        }
    },

    /**
     * 创建战斗场景头像列表
     * @private
     * @param {Array} selectedUnits - 选中的人物数据列表
     * @param {string} team - 队伍类型（"hero" 或 "monster"）
     */
    _createBattleAvatars(selectedUnits, team) {
        if (!selectedUnits || selectedUnits.length === 0) {
            return;
        }

        const container = team === "hero" ? this.heroAvatarContainer : this.monsterAvatarContainer;
        if (!container) {
            cc.warn(`[BattleController] ${team}头像容器未绑定`);
            return;
        }

        // 清空容器
        container.removeAllChildren();

        // 获取头像资源列表
        const iconList = team === "hero" ? this.heroIcons : this.monsterIcons;

        // 创建头像
        selectedUnits.forEach((unitData, index) => {
            const avatarNode = this._createBattleAvatar(unitData, team, index, iconList);
            if (avatarNode) {
                container.addChild(avatarNode);
            }
        });

        // 调整容器布局（垂直排列）
        this._layoutBattleAvatars(container, selectedUnits.length);
    },

    /**
     * 创建单个战斗场景头像
     * @private
     * @param {Object} unitData - 单位数据
     * @param {string} team - 队伍类型
     * @param {number} index - 索引
     * @param {Array} iconList - 头像资源列表
     * @returns {cc.Node|null} 头像节点
     */
    _createBattleAvatar(unitData, team, index, iconList) {
        if (!this.avatarPrefab) {
            cc.warn("[BattleController] avatarPrefab未绑定");
            return null;
        }

        // 实例化头像Prefab
        const avatarNode = cc.instantiate(this.avatarPrefab);
        avatarNode.name = `BattleAvatar_${unitData.name || unitData.displayName || index}`;

        // 查找对应的人物节点（通过名称匹配）
        const unitName = unitData.name || unitData.displayName;
        cc.log(`[BattleController] 查找人物节点: ${unitName}, 队伍: ${team}`);
        const characterNode = this._findCharacterNode(unitName, team);
        if (characterNode) {
            cc.log(`[BattleController] ✓ 找到人物节点: ${characterNode.name}`);
            // 保存人物节点引用到头像节点
            avatarNode._characterNode = characterNode;
            // 添加点击事件监听
            this._addAvatarClickHandler(avatarNode, characterNode);
        } else {
            cc.warn(`[BattleController] ✗ 未找到对应的人物节点: ${unitName}`);
            cc.warn(`[BattleController]   当前${team}列表: ${(team === "hero" ? this.heros : this.monsters).map(n => n ? n.name : "null").join(", ")}`);
        }

        // 查找头像图片节点
        const iconNode = avatarNode.getChildByName("Icon") || avatarNode;
        const sprite = iconNode.getComponent(cc.Sprite);

        if (sprite) {
            // 优先使用unitData中的icon
            let spriteFrame = unitData.icon || null;

            // 如果unitData没有icon，尝试从iconList按索引获取
            if (!spriteFrame && iconList && iconList.length > 0) {
                // 尝试根据名称匹配
                const UnitDataConfig = require("UnitDataConfig");
                const unitConfigList = team === "hero" ? (UnitDataConfig.heros || []) : (UnitDataConfig.monsters || []);
                const configIndex = unitConfigList.findIndex(config =>
                    config.name === unitData.name || config.displayName === unitData.displayName
                );
                if (configIndex >= 0 && configIndex < iconList.length) {
                    spriteFrame = iconList[configIndex];
                } else if (index < iconList.length) {
                    // 如果找不到匹配，按索引获取
                    spriteFrame = iconList[index];
                }
            }

            if (spriteFrame) {
                sprite.spriteFrame = spriteFrame;
                sprite.type = cc.Sprite.Type.SIMPLE;
                sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;

                // 设置头像大小
                iconNode.width = this.avatarSize || 80;
                iconNode.height = this.avatarSize || 80;
            } else {
                cc.warn(`[BattleController] 未找到头像资源: ${unitData.name || unitData.displayName}`);
            }
        }

        // 查找名称标签
        const nameLabel = avatarNode.getChildByName("NameLabel");
        if (nameLabel) {
            const label = nameLabel.getComponent(cc.Label);
            if (label) {
                label.string = unitData.displayName || unitData.name || "未知";
                // 调整字体大小
                if (label.fontSize > 0) {
                    label.fontSize = Math.max(14, label.fontSize * 0.6);
                } else {
                    label.fontSize = 16;
                }
            }
        }

        // 隐藏勾选标记（战斗场景不需要）
        const checkmark = avatarNode.getChildByName("Checkmark");
        if (checkmark) {
            checkmark.active = false;
        }

        // 根据怒气值设置头像颜色（初始状态）
        if (characterNode) {
            this._updateAvatarColor(avatarNode, characterNode);
        }

        return avatarNode;
    },

    /**
     * 查找对应的人物节点
     * @private
     * @param {string} unitName - 单位名称
     * @param {string} team - 队伍类型
     * @returns {cc.Node|null} 人物节点
     */
    _findCharacterNode(unitName, team) {
        const unitList = team === "hero" ? this.heros : this.monsters;
        if (!unitList || unitList.length === 0) {
            return null;
        }

        // 通过名称匹配
        let characterNode = unitList.find(node => {
            if (!node || !node.isValid) return false;
            const stats = node.getComponent("StatsComponent");
            if (!stats) return false;
            return stats.name === unitName || node.name === unitName;
        });

        // 如果找不到，尝试通过索引匹配（如果unitName是索引）
        if (!characterNode && !isNaN(unitName)) {
            const index = parseInt(unitName);
            if (index >= 0 && index < unitList.length) {
                characterNode = unitList[index];
            }
        }

        return characterNode;
    },

    /**
     * 给头像添加点击事件处理
     * @private
     * @param {cc.Node} avatarNode - 头像节点
     * @param {cc.Node} characterNode - 人物节点
     */
    _addAvatarClickHandler(avatarNode, characterNode) {
        // 确保节点可以接收触摸事件
        avatarNode._touchEnabled = true;

        // 确保节点有足够的大小来接收触摸
        if (avatarNode.width === 0 || avatarNode.height === 0) {
            avatarNode.setContentSize(this.avatarSize || 80, this.avatarSize || 80);
        }

        // 移除之前可能绑定的事件监听（防止重复绑定）
        avatarNode.off(cc.Node.EventType.TOUCH_END);
        avatarNode.off(cc.Node.EventType.TOUCH_START);
        avatarNode.off('click');

        // 添加按钮组件（用于更好的点击反馈和事件处理）
        let button = avatarNode.getComponent(cc.Button);
        if (!button) {
            button = avatarNode.addComponent(cc.Button);
            button.transition = cc.Button.Transition.SCALE;
            button.zoomScale = 0.9;
        }

        // 只使用Button组件的click事件（避免与TOUCH_END重复触发）
        button.node.on('click', (event) => {
            cc.log(`[BattleController] 头像Button点击事件触发: ${avatarNode.name}`);
            // 注意：Button的click事件对象可能不支持stopPropagation，所以不调用
            // 如果需要阻止事件冒泡，可以在事件处理函数中直接返回
            this._onAvatarClick(characterNode, event);
        }, this);

        // 确保Icon子节点也可以接收触摸（如果存在）
        const iconNode = avatarNode.getChildByName("Icon");
        if (iconNode) {
            iconNode._touchEnabled = true;
            if (iconNode.width === 0 || iconNode.height === 0) {
                iconNode.setContentSize(this.avatarSize || 80, this.avatarSize || 80);
            }
        }

        cc.log(`[BattleController] ✓ 已为头像添加点击事件: ${avatarNode.name} -> ${characterNode.name}`);
    },

    /**
     * 头像点击事件处理
     * @private
     * @param {cc.Node} characterNode - 人物节点
     * @param {cc.Event} event - 事件对象
     */
    _onAvatarClick(characterNode, event) {
        if (!characterNode || !characterNode.isValid) {
            cc.warn("[BattleController] 人物节点无效，无法释放大招");
            return;
        }

        // 防止重复触发：如果该人物正在释放大招，则忽略
        if (characterNode._isReleasingUltimate) {
            cc.log(`[BattleController] ${characterNode.name} 正在释放大招中，忽略重复点击`);
            return;
        }

        cc.log(`[BattleController] ========== 头像被点击 ==========`);
        cc.log(`[BattleController] 人物: ${characterNode.name}`);
        cc.log(`[BattleController] 尝试释放大招...`);

        // 检查角色是否已死亡
        const stats = characterNode.getComponent("StatsComponent");
        if (stats && stats.isDead()) {
            cc.log(`[BattleController] ${characterNode.name} 已死亡，禁止释放大招`);
            return;
        }

        // 检查是否正在回放，如果是则禁用大招释放
        if (this.isReplaying) {
            cc.log(`[BattleController] 正在回放中，禁用大招释放`);
            return;
        }

        const SkillSystem = require("SkillSystem");
        const TeamRef = require("TeamRef");
        const TeamComponent = require("TeamComponent");

        // 检查是否可以释放大招
        if (!SkillSystem.canUseUltimateSkill(characterNode)) {
            cc.log(`[BattleController] ${characterNode.name} 怒气值不足，无法释放大招`);
            return;
        }

        cc.log(`[BattleController] ${characterNode.name} 可以释放大招，继续执行...`);

        // 获取目标
        const teamComp = characterNode.getComponent("TeamComponent");
        if (!teamComp) {
            cc.warn(`[BattleController] ${characterNode.name} 缺少TeamComponent组件`);
            return;
        }

        const enemies = teamComp.team === "hero"
            ? TeamRef.monstersRef
            : TeamRef.herosRef;

        const target = enemies.find(e => {
            if (!e || !e.isValid) return false;
            const s = e.getComponent("StatsComponent");
            return s && !s.isDead();
        });

        if (!target) {
            cc.log(`[BattleController] ${characterNode.name} 没有可攻击的目标`);
            return;
        }

        // 标记为正在释放大招（防止重复触发）
        characterNode._isReleasingUltimate = true;

        // 释放大招
        const log = (msg) => cc.log(msg);
        const rand = Math.random;
        SkillSystem.useUltimateSkill(characterNode, target, log, rand);

        // 延迟重置标志（大招UI动画完成后重置）
        this.scheduleOnce(() => {
            characterNode._isReleasingUltimate = false;
            cc.log(`[BattleController] ${characterNode.name} 大招释放完成，重置标志`);
        }, 3.0); // 延迟3秒，确保大招UI动画完成
    },

    /**
     * 更新所有头像的颜色（根据怒气值）
     * @private
     */
    _updateAllAvatarColors() {
        // 更新英雄头像的颜色
        if (this.heroAvatarContainer) {
            this.heroAvatarContainer.children.forEach(avatarNode => {
                this._updateAvatarColor(avatarNode, avatarNode._characterNode);
            });
        }

        // 更新怪物头像的颜色
        if (this.monsterAvatarContainer) {
            this.monsterAvatarContainer.children.forEach(avatarNode => {
                this._updateAvatarColor(avatarNode, avatarNode._characterNode);
            });
        }
    },

    /**
     * 更新单个头像的颜色（根据怒气值）
     * @private
     * @param {cc.Node} avatarNode - 头像节点
     * @param {cc.Node} characterNode - 人物节点
     */
    _updateAvatarColor(avatarNode, characterNode) {
        if (!avatarNode || !avatarNode.isValid) {
            return;
        }

        if (!characterNode || !characterNode.isValid) {
            return;
        }

        const stats = characterNode.getComponent("StatsComponent");
        if (!stats) {
            return;
        }

        // 检查怒气值是否已满
        const isRageFull = stats.isRageFull();

        // 查找头像图片节点
        const iconNode = avatarNode.getChildByName("Icon") || avatarNode;

        // 根据怒气值设置颜色
        if (isRageFull) {
            // 怒气值满：正常颜色（白色，RGB=255,255,255）
            iconNode.color = cc.Color.WHITE;
            avatarNode.color = cc.Color.WHITE;
        } else {
            // 怒气值未满：灰色（RGB=128,128,128）
            iconNode.color = new cc.Color(128, 128, 128, 255);
            avatarNode.color = new cc.Color(128, 128, 128, 255);
        }
    },

    /**
     * 调整头像容器布局（水平排列，从左往右）
     * @private
     * @param {cc.Node} container - 容器节点
     * @param {number} count - 头像数量
     */
    _layoutBattleAvatars(container, count) {
        if (count === 0) return;

        const children = container.children;
        const spacing = this.avatarSpacing || 10;
        const avatarWidth = this.avatarSize || 80;
        const totalWidth = count * avatarWidth + (count - 1) * spacing;

        // 从左往右排列
        children.forEach((child, index) => {
            const x = -totalWidth / 2 + avatarWidth / 2 + index * (avatarWidth + spacing);
            child.setPosition(x, 0);
        });
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
