var TeamRef = require("TeamRef");
var StatsComponent = require("StatsComponent");
var ActionSystem = require("ActionSystem");

var BattleSystem = cc.Class({
    name: "BattleSystem",

    ctor(heros, monsters, logger, rand) {
        this.heros = heros;
        this.monsters = monsters;
        this.logger = logger;
        this.rand = rand;

        TeamRef.herosRef = this.heros;
        TeamRef.monstersRef = this.monsters;

        this.actionSystem = new ActionSystem(logger, rand);
        this.finished = false;

        // 行动队列系统（用于支持攻击动画的等待机制）
        this.isProcessingAction = false; // 是否正在处理行动
        this.actionQueue = []; // 行动队列
    },

    isFinished() {
        return this.heros.length === 0 || this.monsters.length === 0;
    },

    getSortedUnits() {
        return [...this.heros, ...this.monsters]
            .filter(e => {
                const stats = e.getComponent("StatsComponent");
                return stats && !stats.isDead();
            })
            .sort((a, b) => {
                const sa = a.getComponent("StatsComponent");
                const sb = b.getComponent("StatsComponent");
                return sb.speed - sa.speed;
            });
    },

    /**
     * 处理下一个行动
     * @private
     */
    _processNextAction() {
        // 检查是否正在处理或队列为空
        if (this.isProcessingAction || this.actionQueue.length === 0) {
            return;
        }

        // 检查战斗是否结束（在处理前检查）
        if (this.isFinished()) {
            this.finished = true;
            const winner = this.heros.length > 0 ? "英雄" : "怪物";
            this.logger.log(`====战斗结束：${winner}胜利====`);
            this.actionQueue = []; // 清空队列
            this.isProcessingAction = false; // 重置标志
            return;
        }

        this.isProcessingAction = true;
        const { unit, dt } = this.actionQueue.shift();

        // 执行行动，传入回调
        this.actionSystem.performAction(unit, dt, () => {
            // 行动完成后，再次检查战斗是否结束
            if (this.isFinished()) {
                this.finished = true;
                const winner = this.heros.length > 0 ? "英雄" : "怪物";
                this.logger.log(`====战斗结束：${winner}胜利====`);
                this.actionQueue = []; // 清空队列
                this.isProcessingAction = false;
                return;
            }

            // 战斗未结束，继续处理下一个行动
            this.isProcessingAction = false;
            this._processNextAction();
        });
    },

    update(dt) {
        // 如果战斗已结束，不再处理
        if (this.finished) return;

        // 检查战斗是否结束
        if (this.isFinished()) {
            this.finished = true;
            const winner = this.heros.length > 0 ? "英雄" : "怪物";
            this.logger.log(`====战斗结束：${winner}胜利====`);
            this.actionQueue = []; // 清空队列
            this.isProcessingAction = false; // 重置标志
            return;
        }

        // 如果正在处理行动，不添加新的行动到队列（避免重复添加）
        if (this.isProcessingAction) {
            return;
        }

        // 将所有单位的行动加入队列
        const units = this.getSortedUnits();
        if (units.length === 0) return;

        for (let unit of units) {
            this.actionQueue.push({ unit, dt });
        }

        // 开始处理队列
        this._processNextAction();
    }
});

module.exports = BattleSystem;