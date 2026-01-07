/**
 * 战斗回放系统
 * 根据战斗记录回放战斗过程
 */
var BattleReplayer = cc.Class({
    name: "BattleReplayer",

    properties: {
        // 是否正在回放
        isReplaying: {
            default: false,
            visible: false
        },

        // 回放速度倍数（1.0 = 正常速度，2.0 = 2倍速）
        playbackSpeed: {
            default: 1.0,
            tooltip: "回放速度倍数"
        },

        // 是否暂停
        isPaused: {
            default: false,
            visible: false
        },

        // 当前回放进度（事件索引）
        currentEventIndex: {
            default: 0,
            visible: false
        },

        // 战斗记录数据
        battleRecord: {
            default: null,
            visible: false
        },

        // 单位映射表（记录中的ID -> 实际单位节点）
        unitMap: {
            default: () => ({}),
            visible: false
        },

        // 已死亡单位集合（用于跳过后续事件）
        deadUnits: {
            default: () => (new Set()),
            visible: false
        },

        // 回放开始时间
        replayStartTime: {
            default: 0,
            visible: false
        }
    },

    /**
     * 开始回放
     * @param {Object} battleRecord - 战斗记录数据
     * @param {Array} heros - 英雄列表（用于匹配单位）
     * @param {Array} monsters - 怪物列表（用于匹配单位）
     * @param {Function} onReplayComplete - 回放完成回调
     */
    startReplay(battleRecord, heros, monsters, onReplayComplete) {
        if (!battleRecord || !battleRecord.events) {
            cc.error("[BattleReplayer] 无效的战斗记录");
            return;
        }

        this.battleRecord = battleRecord;
        this.isReplaying = true;
        this.isPaused = false;
        this.currentEventIndex = 0;
        this.replayStartTime = Date.now();
        this.onReplayComplete = onReplayComplete;
        this.deadUnits.clear(); // 清空已死亡单位集合

        // 构建单位映射表（传入initialState以便补充缺失的单位）
        this._buildUnitMap(heros, monsters, battleRecord.initialState);

        // 恢复初始状态
        this._restoreInitialState(battleRecord.initialState);

        // 对事件按时间戳排序（确保顺序正确，相同时间戳时death事件最后执行）
        battleRecord.events.sort((a, b) => {
            if (a.timestamp !== b.timestamp) {
                return a.timestamp - b.timestamp;
            }
            // 相同时间戳时，death事件最后执行（其他事件先执行）
            if (a.type === "death" && b.type !== "death") return 1;  // a是death，排在后面
            if (a.type !== "death" && b.type === "death") return -1;  // b是death，a排在前面
            return 0;
        });

        cc.log(`[BattleReplayer] 开始回放，共 ${battleRecord.events.length} 个事件（已排序）`);
        cc.log(`[BattleReplayer] unitMap中的单位: ${Object.keys(this.unitMap).join(', ')}`);

        // 开始处理事件
        this._processNextEvent();
    },

    /**
     * 停止回放
     */
    stopReplay() {
        this.isReplaying = false;
        this.isPaused = false;
        this.currentEventIndex = 0;

        // 清除定时器
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
            this._timeoutId = null;
        }

        cc.log("[BattleReplayer] 停止回放");
    },

    /**
     * 暂停/继续回放
     */
    togglePause() {
        if (!this.isReplaying) return;

        this.isPaused = !this.isPaused;

        if (this.isPaused) {
            // 暂停时：清除所有等待中的定时器，阻止后续事件执行
            if (this._timeoutId) {
                clearTimeout(this._timeoutId);
                this._timeoutId = null;
            }
            cc.log(`[BattleReplayer] 已暂停回放，所有事件处理已停止`);
        } else {
            // 继续时：重新计算时间并继续处理事件
            this.replayStartTime = Date.now() - (this.battleRecord.events[this.currentEventIndex].timestamp / this.playbackSpeed);
            this._processNextEvent();
            cc.log(`[BattleReplayer] 继续回放`);
        }
    },

    /**
     * 设置回放速度
     * @param {number} speed - 速度倍数
     */
    setPlaybackSpeed(speed) {
        this.playbackSpeed = Math.max(0.1, Math.min(5.0, speed)); // 限制在0.1-5.0倍速
        cc.log(`[BattleReplayer] 设置回放速度: ${this.playbackSpeed}x`);
    },

    /**
     * 跳转到指定事件
     * @param {number} eventIndex - 事件索引
     */
    jumpToEvent(eventIndex) {
        if (!this.battleRecord || eventIndex < 0 || eventIndex >= this.battleRecord.events.length) {
            cc.warn("[BattleReplayer] 无效的事件索引");
            return;
        }

        // 重新恢复初始状态
        this._restoreInitialState(this.battleRecord.initialState);

        // 执行到指定事件之前的所有事件
        this.currentEventIndex = 0;
        for (let i = 0; i < eventIndex; i++) {
            this._executeEvent(this.battleRecord.events[i]);
            this.currentEventIndex++;
        }

        // 继续处理后续事件
        this._processNextEvent();
    },

    /**
     * 处理下一个事件
     * @private
     */
    _processNextEvent() {
        if (!this.isReplaying || this.isPaused) return;

        if (this.currentEventIndex >= this.battleRecord.events.length) {
            // 回放完成
            this.isReplaying = false;
            cc.log("[BattleReplayer] 回放完成");
            if (this.onReplayComplete) {
                this.onReplayComplete();
            }
            return;
        }

        const currentEvent = this.battleRecord.events[this.currentEventIndex];
        const currentTime = Date.now() - this.replayStartTime;
        const eventTime = currentEvent.timestamp / this.playbackSpeed;

        if (currentTime >= eventTime) {
            // 再次检查暂停状态（防止在执行前被暂停）
            if (this.isPaused) {
                cc.log(`[BattleReplayer] 事件执行被中断（回放已暂停）: ${currentEvent.type}`);
                return;
            }

            // 执行当前事件
            this._executeEvent(currentEvent);
            this.currentEventIndex++;

            // 立即处理下一个事件（如果未暂停）
            if (!this.isPaused) {
                this._processNextEvent();
            }
        } else {
            // 等待到事件时间（使用setTimeout，因为这不是组件）
            const delay = eventTime - currentTime;
            if (this._timeoutId) {
                clearTimeout(this._timeoutId);
            }
            this._timeoutId = setTimeout(() => {
                this._timeoutId = null;
                this._processNextEvent();
            }, delay);
        }
    },

    /**
     * 执行事件
     * @private
     */
    _executeEvent(event) {
        // 如果已暂停，不执行任何事件（确保暂停时完全冻结）
        if (this.isPaused) {
            cc.log(`[BattleReplayer] 事件执行被跳过（回放已暂停）: ${event.type}`);
            return;
        }

        const { type, data } = event;

        switch (type) {
            case "actionStart":
                this._onActionStart(data);
                break;
            case "skillUse":
                this._onSkillUse(data);
                break;
            case "damage":
                this._onDamage(data);
                break;
            case "buffApply":
                this._onBuffApply(data);
                break;
            case "buffRemove":
                this._onBuffRemove(data);
                break;
            case "death":
                this._onDeath(data);
                break;
            case "gameOver":
                this._onGameOver(data);
                break;
            default:
                cc.warn(`[BattleReplayer] 未知事件类型: ${type}`);
        }
    },

    /**
     * 处理行动开始事件
     * @private
     */
    _onActionStart(data) {
        const entity = this.unitMap[data.actorId];
        if (entity) {
            cc.log(`[BattleReplayer] ${data.actorName} 执行行动`);

            // 可以在这里播放待机动画或其他准备动画
            const skeleton = entity.getComponent(sp.Skeleton);
            if (skeleton) {
                // 可以播放准备动画，或者保持当前动画
            }
        }
    },

    /**
     * 处理技能释放事件
     * @private
     */
    _onSkillUse(data) {
        const caster = this.unitMap[data.casterId];
        let target = null;

        // 查找目标
        if (data.targetId) {
            target = this.unitMap[data.targetId];
            if (!target) {
                // 如果通过ID找不到，尝试通过名称查找（备用方案）
                cc.warn(`[BattleReplayer] 通过ID找不到目标: ${data.targetId}, 尝试通过名称查找: ${data.targetName}`);
                if (data.targetName) {
                    // 遍历所有单位，通过名称匹配
                    for (let unit of Object.values(this.unitMap)) {
                        if (unit && unit.isValid && unit.name === data.targetName) {
                            target = unit;
                            cc.log(`[BattleReplayer] 通过名称找到目标: ${data.targetName}`);
                            break;
                        }
                    }
                }
            }
        }

        // 如果施法者已死亡，跳过处理
        if (caster && this.deadUnits.has(caster)) {
            cc.log(`[BattleReplayer] 跳过已死亡单位 ${data.casterName} 的技能释放事件`);
            return;
        }

        if (caster && caster.isValid) {
            if (!target) {
                cc.warn(`[BattleReplayer] ${data.casterName} 对无目标释放 ${data.skillName}`);
                cc.warn(`[BattleReplayer] 记录的目标ID: ${data.targetId}, 目标名称: ${data.targetName}`);
                cc.warn(`[BattleReplayer] 当前unitMap中的单位: ${Object.keys(this.unitMap).join(', ')}`);
            } else {
                cc.log(`[BattleReplayer] ${data.casterName} 对 ${target.name} 释放 ${data.skillName}`);
            }

            // 播放技能特效
            const SkillSystem = require("SkillSystem");
            if (target && target.isValid && !this.deadUnits.has(target) && data.skillName) {
                // 创建技能对象用于播放特效
                const skill = {
                    skillName: data.skillName,
                    id: data.skillId
                };
                // 播放技能特效
                SkillSystem._playSkillEffect(caster, target, skill);
            }

            // 播放攻击动画（如果有AttackMover组件）
            if (target && target.isValid && !this.deadUnits.has(target)) {
                const attackMover = caster.getComponent("AttackMover");
                if (attackMover && !attackMover.isAttacking) {
                    // 只播放攻击动画，不执行实际伤害（伤害由damage事件处理）
                    attackMover.attackTarget(target, () => {
                        // 动画完成，不做其他处理
                    });
                }
            }
        }
    },

    /**
     * 处理伤害事件
     * @private
     */
    _onDamage(data) {
        const attacker = this.unitMap[data.attackerId];
        const target = this.unitMap[data.targetId];

        // 如果目标已死亡，跳过处理（避免复活）
        if (target && this.deadUnits.has(target)) {
            cc.log(`[BattleReplayer] 跳过已死亡单位 ${data.targetName} 的伤害事件`);
            return;
        }

        if (target && target.isValid) {
            const stats = target.getComponent("StatsComponent");
            const combat = target.getComponent("CombatComponent");

            if (stats) {
                if (data.isMiss) {
                    // 闪避：不扣血，只显示MISS
                    if (combat) combat.lastDamage = 0;
                    stats.updateHealthBar(0, 'miss');
                    cc.log(`[BattleReplayer] ${data.attackerName} 对 ${data.targetName} 的攻击被闪避了！`);
                } else {
                    // 应用伤害：直接设置到记录时的血量状态
                    // 重要：如果目标已死亡，确保HP保持为0（不应用任何伤害）
                    if (this.deadUnits.has(target)) {
                        stats.hp = 0;
                        stats.maxHp = data.targetMaxHp;
                        // 不更新血条、不增加怒气（已死亡单位）
                        cc.log(`[BattleReplayer] 跳过已死亡单位 ${data.targetName} 的伤害应用（HP保持为0）`);
                    } else {
                        // 正常单位：应用伤害
                        // 确保HP不会小于0（如果targetHp是负数，说明已经死亡）
                        stats.hp = Math.max(0, data.targetHp);
                        stats.maxHp = data.targetMaxHp;

                        if (combat) combat.lastDamage = data.damage;

                        // 更新血条显示
                        const damageType = data.isCrit ? 'crit' : 'normal';
                        stats.updateHealthBar(data.damage, damageType);

                        // 更新怒气值（根据受到的伤害）
                        if (data.damage > 0) {
                            stats.addRage(data.damage);
                        }

                        // 检查是否因为这次伤害而死亡（即使death事件还没到）
                        // 这样可以防止后续的伤害事件"复活"已死亡的单位
                        if (stats.hp <= 0 && !this.deadUnits.has(target)) {
                            // 立即标记为死亡（不等待death事件）
                            this.deadUnits.add(target);
                            stats.hp = 0;

                            // 播放死亡动画
                            const skeleton = target.getComponent(sp.Skeleton);
                            if (skeleton) {
                                skeleton.setAnimation(0, "die", false);
                            }

                            // 从队伍列表中移除
                            const TeamRef = require("TeamRef");
                            const team = target.getComponent("TeamComponent");
                            if (team) {
                                if (team.team === "hero") {
                                    const index = TeamRef.herosRef.indexOf(target);
                                    if (index !== -1) {
                                        TeamRef.herosRef.splice(index, 1);
                                    }
                                } else if (team.team === "monster") {
                                    const index = TeamRef.monstersRef.indexOf(target);
                                    if (index !== -1) {
                                        TeamRef.monstersRef.splice(index, 1);
                                    }
                                }
                            }

                            cc.log(`[BattleReplayer] ${data.targetName} 因伤害死亡（HP=${stats.hp}），已提前标记为死亡`);
                        }

                        cc.log(`[BattleReplayer] ${data.attackerName} 对 ${data.targetName} 造成 ${data.damage} 点伤害${data.isCrit ? ' (暴击)' : ''}，剩余HP: ${stats.hp}`);
                    }
                }
            }
        }
    },

    /**
     * 处理Buff应用事件
     * @private
     */
    _onBuffApply(data) {
        const target = this.unitMap[data.targetId];

        // 如果目标已死亡，跳过处理
        if (target && this.deadUnits.has(target)) {
            cc.log(`[BattleReplayer] 跳过已死亡单位 ${data.targetName} 的Buff应用事件`);
            return;
        }

        if (target && target.isValid) {
            cc.log(`[BattleReplayer] ${data.targetName} 获得Buff: ${data.buffName}`);

            // 应用Buff效果（使用BuffSystem）
            const BuffSystem = require("BuffSystem");
            const BuffFactory = require("BuffFactory");

            // 创建Buff并应用
            const buff = BuffFactory.create(data.buffName);
            if (buff) {
                // 如果记录中有buff数据，恢复buff的属性
                if (data.buffData) {
                    Object.assign(buff, data.buffData);
                }
                BuffSystem.addBuff(target, buff, () => { }, null); // 回放时不记录，不输出日志
            }
        }
    },

    /**
     * 处理Buff移除事件
     * @private
     */
    _onBuffRemove(data) {
        const target = this.unitMap[data.targetId];
        if (target && target.isValid) {
            cc.log(`[BattleReplayer] ${data.targetName} 失去Buff: ${data.buffName}`);

            // 移除Buff效果
            const BuffComponent = require("BuffComponent");
            const StatsComponent = require("StatsComponent");

            // 查找并移除对应的Buff
            const buffs = target.getComponents(BuffComponent);
            const buffToRemove = buffs.find(b => b.buffName === data.buffName);

            if (buffToRemove) {
                const stats = target.getComponent(StatsComponent);

                // 恢复属性修改（如果有）
                if (stats && buffToRemove.modifiers) {
                    for (let key in buffToRemove.modifiers) {
                        if (stats[key] !== undefined) {
                            stats[key] -= buffToRemove.modifiers[key];
                        }
                    }
                    if (buffToRemove.modifiers.speed !== undefined) {
                        stats.updateAttackInterval();
                    }
                }

                // 如果是护盾Buff，更新血条显示
                if (buffToRemove.buffName === "护盾" && stats) {
                    stats.updateHealthBar();
                }

                // 调用onExpire回调（如果有）
                if (buffToRemove.onExpire) {
                    buffToRemove.onExpire(target, () => { }); // 回放时不输出日志
                }

                // 移除Buff组件
                target.removeComponent(buffToRemove);

                // 更新Buff图标显示
                const BuffSystem = require("BuffSystem");
                BuffSystem._updateBuffDisplay(target);
            }
        }
    },

    /**
     * 处理死亡事件
     * @private
     */
    _onDeath(data) {
        const entity = this.unitMap[data.entityId];//通过id找到单位
        if (entity && entity.isValid) {
            // 标记为已死亡
            this.deadUnits.add(entity);

            const stats = entity.getComponent("StatsComponent");
            if (stats) {
                stats.hp = 0;
                stats.updateHealthBar();
            }

            // 播放死亡动画
            const skeleton = entity.getComponent(sp.Skeleton);
            if (skeleton) {
                skeleton.setAnimation(0, "die", false);
            }

            // 从队伍列表中移除（如果需要）
            const TeamRef = require("TeamRef");
            const team = entity.getComponent("TeamComponent");
            if (team) {
                if (team.team === "hero") {
                    const index = TeamRef.herosRef.indexOf(entity);
                    if (index !== -1) {
                        TeamRef.herosRef.splice(index, 1);
                    }
                } else if (team.team === "monster") {
                    const index = TeamRef.monstersRef.indexOf(entity);
                    if (index !== -1) {
                        TeamRef.monstersRef.splice(index, 1);
                    }
                }
            }

            cc.log(`[BattleReplayer] ${data.entityName} 死亡，已标记为死亡状态`);
        }
    },

    /**
     * 处理游戏结束事件
     * @private
     */
    _onGameOver(data) {
        cc.log(`[BattleReplayer] 游戏结束：${data.winner}胜利`);
    },

    /**
     * 构建单位映射表
     * @private
     * @param {Array} heros - 英雄列表
     * @param {Array} monsters - 怪物列表
     * @param {Object} initialState - 初始状态（可选，用于补充缺失的单位）
     */
    _buildUnitMap(heros, monsters, initialState) {
        this.unitMap = {};

        // 首先添加传入的单位
        [...heros, ...monsters].forEach(unit => {
            if (unit && unit.isValid) {
                this.unitMap[unit.name] = unit;
            }
        });

        // 如果提供了初始状态，从中提取所有单位名称，确保所有单位都在unitMap中
        if (initialState) {
            const allUnitNames = new Set();

            // 从初始状态中提取所有单位名称
            if (initialState.heros) {
                initialState.heros.forEach(unit => {
                    if (unit && unit.name) {
                        allUnitNames.add(unit.name);
                    }
                });
            }
            if (initialState.monsters) {
                initialState.monsters.forEach(unit => {
                    if (unit && unit.name) {
                        allUnitNames.add(unit.name);
                    }
                });
            }

            // 检查是否有单位缺失
            const missingUnits = [];
            allUnitNames.forEach(name => {
                if (!this.unitMap[name]) {
                    missingUnits.push(name);
                }
            });

            if (missingUnits.length > 0) {
                cc.warn(`[BattleReplayer] 检测到缺失的单位: ${missingUnits.join(', ')}`);
                cc.warn(`[BattleReplayer] 当前unitMap中的单位: ${Object.keys(this.unitMap).join(', ')}`);
                cc.warn(`[BattleReplayer] 尝试从场景中查找缺失的单位...`);

                // 尝试从场景中查找缺失的单位
                const scene = cc.director.getScene();
                if (scene) {
                    const findUnitByName = (node, name) => {
                        if (node.name === name) {
                            const stats = node.getComponent("StatsComponent");
                            const team = node.getComponent("TeamComponent");
                            if (stats && team) {
                                return node;
                            }
                        }
                        for (let child of node.children) {
                            const result = findUnitByName(child, name);
                            if (result) return result;
                        }
                        return null;
                    };

                    missingUnits.forEach(name => {
                        const unit = findUnitByName(scene, name);
                        if (unit && unit.isValid) {
                            this.unitMap[name] = unit;
                            cc.log(`[BattleReplayer] ✅ 从场景中找到缺失的单位: ${name}`);
                        } else {
                            cc.error(`[BattleReplayer] ❌ 无法从场景中找到单位: ${name}`);
                        }
                    });
                }
            }
        }

        cc.log(`[BattleReplayer] unitMap构建完成，共 ${Object.keys(this.unitMap).length} 个单位: ${Object.keys(this.unitMap).join(', ')}`);
    },

    /**
     * 恢复初始状态
     * @private
     */
    _restoreInitialState(initialState) {
        // 清除所有单位的Buff和状态
        const BuffSystem = require("BuffSystem");
        const BuffComponent = require("BuffComponent");
        const TeamRef = require("TeamRef");

        // 重要：恢复 TeamRef，确保所有单位（包括已死亡的）都在队伍列表中
        // 因为死亡时单位会从 TeamRef 中移除，但重新播放时需要所有单位都在
        if (TeamRef.herosRef) {
            TeamRef.herosRef.length = 0; // 清空数组
        }
        if (TeamRef.monstersRef) {
            TeamRef.monstersRef.length = 0; // 清空数组
        }

        // 重新添加所有单位到 TeamRef（包括已死亡的，因为回放时需要它们）
        Object.values(this.unitMap).forEach(unit => {
            if (unit && unit.isValid) {
                const team = unit.getComponent("TeamComponent");
                if (team) {
                    if (team.team === "hero" && TeamRef.herosRef) {
                        // 如果不在数组中，则添加
                        if (TeamRef.herosRef.indexOf(unit) === -1) {
                            TeamRef.herosRef.push(unit);
                        }
                    } else if (team.team === "monster" && TeamRef.monstersRef) {
                        // 如果不在数组中，则添加
                        if (TeamRef.monstersRef.indexOf(unit) === -1) {
                            TeamRef.monstersRef.push(unit);
                        }
                    }
                }
            }
        });

        cc.log(`[BattleReplayer] 已恢复TeamRef: 英雄${TeamRef.herosRef ? TeamRef.herosRef.length : 0}个, 怪物${TeamRef.monstersRef ? TeamRef.monstersRef.length : 0}个`);

        // 清除所有单位的Buff
        Object.values(this.unitMap).forEach(unit => {
            if (unit && unit.isValid) {
                const buffs = unit.getComponents(BuffComponent);
                if (buffs && buffs.length > 0) {
                    // 移除所有Buff（直接使用removeComponent）
                    buffs.forEach(buff => {
                        // 恢复属性修改（如果有）
                        const stats = unit.getComponent("StatsComponent");
                        if (stats && buff.modifiers) {
                            for (let key in buff.modifiers) {
                                if (stats[key] !== undefined) {
                                    stats[key] -= buff.modifiers[key];
                                }
                            }
                        }
                        // 直接移除组件
                        unit.removeComponent(buff);
                    });
                }

                // 重置怒气值
                const stats = unit.getComponent("StatsComponent");
                if (stats) {
                    if (stats.rage !== undefined) {
                        stats.rage = 0;
                        if (stats.updateRageBar) {
                            stats.updateRageBar();
                        }
                    }
                }

                // 重置动画到待机状态（如果单位还活着）
                if (!this.deadUnits.has(unit)) {
                    const skeleton = unit.getComponent(sp.Skeleton);
                    if (skeleton) {
                        skeleton.setAnimation(0, "wait", true);
                    }
                }
            }
        });

        // 恢复英雄状态
        if (initialState.heros) {
            initialState.heros.forEach(unitData => {
                const unit = this.unitMap[unitData.id];
                if (unit && unit.isValid) {
                    const stats = unit.getComponent("StatsComponent");
                    if (stats) {
                        stats.hp = unitData.hp;
                        stats.maxHp = unitData.maxHp;
                        stats.attack = unitData.attack;
                        stats.defense = unitData.defense;
                        stats.speed = unitData.speed;
                        stats.updateHealthBar();
                    }
                }
            });
        }

        // 恢复怪物状态
        if (initialState.monsters) {
            initialState.monsters.forEach(unitData => {
                const unit = this.unitMap[unitData.id];
                if (unit && unit.isValid) {
                    const stats = unit.getComponent("StatsComponent");
                    if (stats) {
                        stats.hp = unitData.hp;
                        stats.maxHp = unitData.maxHp;
                        stats.attack = unitData.attack;
                        stats.defense = unitData.defense;
                        stats.speed = unitData.speed;
                        stats.updateHealthBar();
                    }
                }
            });
        }

        cc.log("[BattleReplayer] 初始状态已恢复，所有Buff已清除");
    }
});

module.exports = BattleReplayer;

