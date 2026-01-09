/**
 * 战斗记录系统
 * 记录战斗过程中的所有关键事件，用于回放
 */
var BattleRecorder = cc.Class({
    name: "BattleRecorder",

    properties: {
        // 是否正在记录
        isRecording: {
            default: false,
            visible: false
        },

        // 战斗记录数据
        battleRecord: {
            default: null,
            visible: false
        }
    },

    /**
     * 开始记录战斗
     * @param {Array} heros - 英雄列表
     * @param {Array} monsters - 怪物列表
     */
    startRecording(heros, monsters) {
        this.isRecording = true;

        // 先序列化初始状态（包含位置信息）
        const initialState = {
            heros: this._serializeUnits(heros),
            monsters: this._serializeUnits(monsters)
        };

        this.battleRecord = {
            version: "1.0", // 记录版本号
            startTime: Date.now(),
            initialState: initialState,
            events: [], // 事件列表
            // 保存SelectedUnits数据（用于回放时重新创建单位，包含位置信息）
            selectedUnits: this._serializeSelectedUnits(window.SelectedUnits, initialState)
        };
        cc.log("[BattleRecorder] 开始记录战斗");
        if (this.battleRecord.selectedUnits) {
            cc.log(`[BattleRecorder] 已保存SelectedUnits数据 - 英雄: ${this.battleRecord.selectedUnits.heros ? this.battleRecord.selectedUnits.heros.length : 0}个, 怪物: ${this.battleRecord.selectedUnits.monsters ? this.battleRecord.selectedUnits.monsters.length : 0}个`);
        }
    },

    /**
     * 停止记录
     */
    stopRecording() {
        if (!this.isRecording) return;

        this.isRecording = false;
        this.battleRecord.endTime = Date.now();
        this.battleRecord.duration = this.battleRecord.endTime - this.battleRecord.startTime;
        cc.log(`[BattleRecorder] 停止记录，共记录 ${this.battleRecord.events.length} 个事件，耗时 ${this.battleRecord.duration}ms`);
    },

    /**
     * 记录事件
     * @param {string} type - 事件类型
     * @param {Object} data - 事件数据
     * @param {number} timestamp - 时间戳（可选，默认使用当前时间）
     */
    recordEvent(type, data, timestamp) {
        if (!this.isRecording) return;

        const event = {
            type: type,
            timestamp: timestamp || (Date.now() - this.battleRecord.startTime),
            data: data
        };

        this.battleRecord.events.push(event);
    },

    /**
     * 记录行动开始事件
     * @param {cc.Node} entity - 执行行动的单位
     */
    recordActionStart(entity) {
        this.recordEvent("actionStart", {
            actorName: entity.name,
            actorId: this._getEntityId(entity)
        });
    },

    /**
     * 记录技能释放事件
     * @param {cc.Node} caster - 施法者
     * @param {cc.Node} target - 目标
     * @param {Object} skill - 技能对象
     */
    recordSkillUse(caster, target, skill) {
        // 调试：如果target为null，记录警告
        if (!target) {
            cc.warn(`[BattleRecorder] 警告：记录技能释放时target为null！施法者: ${caster ? caster.name : 'null'}, 技能: ${skill ? (skill.skillName || skill.name) : 'null'}`);
        }

        this.recordEvent("skillUse", {
            casterName: caster.name,
            casterId: this._getEntityId(caster),
            targetName: target ? target.name : null,
            targetId: target ? this._getEntityId(target) : null,
            skillId: skill.id,
            skillName: skill.skillName || skill.name
        });
    },

    /**
     * 记录伤害事件
     * @param {cc.Node} attacker - 攻击者
     * @param {cc.Node} target - 目标
     * @param {number} damage - 伤害值
     * @param {boolean} isCrit - 是否暴击
     * @param {boolean} isMiss - 是否闪避
     * @param {boolean} isTrueDamage - 是否真实伤害
     */
    recordDamage(attacker, target, damage, isCrit, isMiss, isTrueDamage) {
        const targetStats = target.getComponent("StatsComponent");
        this.recordEvent("damage", {
            attackerName: attacker.name,
            attackerId: this._getEntityId(attacker),
            targetName: target.name,
            targetId: this._getEntityId(target),
            damage: damage,
            isCrit: isCrit || false,
            isMiss: isMiss || false,
            isTrueDamage: isTrueDamage || false,
            targetHp: targetStats ? targetStats.hp : 0,
            targetMaxHp: targetStats ? targetStats.maxHp : 0
        });
    },

    /**
     * 记录Buff应用事件
     * @param {cc.Node} target - 目标
     * @param {string} buffName - Buff名称
     */
    recordBuffApply(target, buffName) {
        this.recordEvent("buffApply", {
            targetName: target.name,
            targetId: this._getEntityId(target),
            buffName: buffName
        });
    },

    /**
     * 记录治疗事件
     * @param {cc.Node} caster - 施法者
     * @param {cc.Node} target - 目标
     * @param {number} healAmount - 治疗量
     */
    recordHeal(caster, target, healAmount) {
        const targetStats = target.getComponent("StatsComponent");
        this.recordEvent("heal", {
            casterName: caster.name,
            casterId: this._getEntityId(caster),
            targetName: target.name,
            targetId: this._getEntityId(target),
            healAmount: healAmount,
            targetHp: targetStats ? targetStats.hp : 0,
            targetMaxHp: targetStats ? targetStats.maxHp : 0
        });
    },

    /**
     * 记录Buff移除事件
     * @param {cc.Node} target - 目标
     * @param {string} buffName - Buff名称
     */
    recordBuffRemove(target, buffName) {
        this.recordEvent("buffRemove", {
            targetName: target.name,
            targetId: this._getEntityId(target),
            buffName: buffName
        });
    },

    /**
     * 记录死亡事件
     * @param {cc.Node} entity - 死亡的单位
     */
    recordDeath(entity) {
        this.recordEvent("death", {
            entityName: entity.name,
            entityId: this._getEntityId(entity)
        });
    },

    /**
     * 记录游戏结束事件
     * @param {string} winner - 胜利方
     */
    recordGameOver(winner) {
        this.recordEvent("gameOver", {
            winner: winner
        });
        this.stopRecording();
    },

    /**
     * 获取战斗记录
     * @returns {Object} 战斗记录数据
     */
    getRecord() {
        return this.battleRecord;
    },

    /**
     * 保存战斗记录到本地存储
     * @param {string} key - 存储键名
     */
    saveToLocalStorage(key) {
        if (!this.battleRecord) return false;

        try {
            const json = JSON.stringify(this.battleRecord);
            cc.sys.localStorage.setItem(key, json);
            cc.log(`[BattleRecorder] 战斗记录已保存到本地存储: ${key}`);
            return true;
        } catch (e) {
            cc.error(`[BattleRecorder] 保存失败: ${e.message}`);
            return false;
        }
    },

    /**
     * 从本地存储加载战斗记录
     * @param {string} key - 存储键名
     * @returns {Object|null} 战斗记录数据
     */
    loadFromLocalStorage(key) {
        try {
            const json = cc.sys.localStorage.getItem(key);
            if (!json) return null;

            this.battleRecord = JSON.parse(json);
            cc.log(`[BattleRecorder] 从本地存储加载战斗记录: ${key}`);
            return this.battleRecord;
        } catch (e) {
            cc.error(`[BattleRecorder] 加载失败: ${e.message}`);
            return null;
        }
    },

    /**
     * 序列化单位数据（用于记录初始状态）
     * @private
     */
    _serializeUnits(units) {
        return units.map(unit => {
            const stats = unit.getComponent("StatsComponent");
            const team = unit.getComponent("TeamComponent");
            // 保存单位的位置信息（用于回放时恢复位置）
            const position = unit.getPosition();
            return {
                name: unit.name,
                id: this._getEntityId(unit),
                hp: stats ? stats.hp : 0,
                maxHp: stats ? stats.maxHp : 0,
                attack: stats ? stats.attack : 0,
                defense: stats ? stats.defense : 0,
                speed: stats ? stats.speed : 0,
                team: team ? team.team : "unknown",
                // 保存位置信息
                position: {
                    x: position.x || 0,
                    y: position.y || 0
                }
            };
        });
    },

    /**
     * 获取单位ID（用于回放时匹配单位）
     * @private
     */
    _getEntityId(entity) {
        // 使用单位名称作为ID（如果单位有唯一ID，可以使用）
        return entity.name;
    },

    /**
     * 序列化SelectedUnits数据（用于回放时重新创建单位）
     * @private
     * @param {Object} selectedUnits - SelectedUnits对象
     * @param {Object} initialState - 初始状态（包含位置信息）
     * @returns {Object|null} 序列化后的数据
     */
    _serializeSelectedUnits(selectedUnits, initialState) {
        if (!selectedUnits) return null;

        // 创建一个位置映射表（根据单位名称查找位置）
        const positionMap = {};
        if (initialState) {
            [...(initialState.heros || []), ...(initialState.monsters || [])].forEach(unitData => {
                if (unitData.name && unitData.position) {
                    positionMap[unitData.name] = unitData.position;
                }
            });
        }

        // 只保存单位数据配置（不保存prefab引用，因为prefab引用无法序列化）
        // prefab会在回放时从UnitDataConfig中重新获取
        const serializeUnitData = (unitData) => {
            if (!unitData) return null;
            const result = {
                name: unitData.name,
                displayName: unitData.displayName,
                avatarPosition: unitData.avatarPosition,
                hp: unitData.hp,
                attack: unitData.attack,
                defense: unitData.defense,
                speed: unitData.speed,
                crit: unitData.crit,
                miss: unitData.miss,
                skills: unitData.skills ? unitData.skills.map(skill => ({
                    id: skill.id,
                    skillName: skill.skillName || skill.name
                })) : []
            };

            // 如果有位置信息，保存位置
            if (positionMap[unitData.name]) {
                result.position = positionMap[unitData.name];
            }

            return result;
        };

        return {
            heros: selectedUnits.heros ? selectedUnits.heros.map(serializeUnitData).filter(u => u !== null) : [],
            monsters: selectedUnits.monsters ? selectedUnits.monsters.map(serializeUnitData).filter(u => u !== null) : []
        };
    }
});

module.exports = BattleRecorder;

