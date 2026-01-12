var TeamRef = require("TeamRef");
var StatsComponent = require("StatsComponent");
var ActionSystem = require("ActionSystem");

var BattleSystem = cc.Class({
    name: "BattleSystem",

    ctor(heros, monsters, logger, rand, onGameOverCallback, recorder) {
        this.heros = heros;
        this.monsters = monsters;
        this.logger = logger;
        this.rand = rand;
        this.onGameOverCallback = onGameOverCallback; // 游戏结束回调函数
        this.recorder = recorder; // 战斗记录器（可选）

        TeamRef.herosRef = this.heros;
        TeamRef.monstersRef = this.monsters;

        this.actionSystem = new ActionSystem(logger, rand, recorder);
        this.finished = false;

        // 行动队列系统（用于支持攻击动画的等待机制）
        this.isProcessingAction = false; // 是否正在处理行动
        this.actionQueue = []; // 行动队列

        // 暂停标志（用于大招UI显示时暂停战斗）
        this.isPaused = false;

        // 如果提供了记录器，开始记录
        if (this.recorder) {
            this.recorder.startRecording(heros, monsters);
        }
    },

    isFinished() {
        // 如果数组为空，说明还没初始化完成，不算结束
        if (this.heros.length === 0 && this.monsters.length === 0) {
            return false;
        }

        // 检查是否有存活的英雄和怪物
        const aliveHeros = this.heros.filter(e => {
            if (!e || !e.isValid) return false;
            const stats = e.getComponent("StatsComponent");
            return stats && !stats.isDead();
        });
        const aliveMonsters = this.monsters.filter(e => {
            if (!e || !e.isValid) return false;
            const stats = e.getComponent("StatsComponent");
            return stats && !stats.isDead();
        });

        // 如果一方全部死亡，游戏结束
        return aliveHeros.length === 0 || aliveMonsters.length === 0;
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
            this._handleGameOver();
            return;
        }

        this.isProcessingAction = true;
        const { unit, dt } = this.actionQueue.shift();

        // 执行行动，传入回调
        this.actionSystem.performAction(unit, dt, () => {
            // 行动完成后，再次检查战斗是否结束
            if (this.isFinished()) {
                this._handleGameOver();
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

        // 如果战斗已暂停，不处理任何行动
        if (this.isPaused) {
            return;
        }

        // 检查战斗是否结束
        if (this.isFinished()) {
            this._handleGameOver();
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
    },

    /**
     * 暂停战斗（用于大招UI显示时）
     */
    pause() {
        this.isPaused = true;
    },

    /**
     * 恢复战斗
     */
    resume() {
        this.isPaused = false;
    },

    /**
     * 处理游戏结束逻辑
     * @private
     */
    _handleGameOver() {
        if (this.finished) return; // 避免重复触发

        this.finished = true;

        // 检查存活的单位数量来确定胜利方
        const aliveHeros = this.heros.filter(e => {
            const stats = e.getComponent("StatsComponent");
            return stats && !stats.isDead();
        });
        const aliveMonsters = this.monsters.filter(e => {
            const stats = e.getComponent("StatsComponent");
            return stats && !stats.isDead();
        });

        // 判断胜利方：如果英雄还有存活的，则英雄胜利；否则怪物胜利
        const winner = aliveHeros.length > 0 ? "hero" : "monster";
        const winnerText = aliveHeros.length > 0 ? "英雄" : "怪物";

        this.logger.log(`====战斗结束：${winnerText}胜利====`);
        this.actionQueue = []; // 清空队列
        this.isProcessingAction = false; // 重置标志

        // 记录游戏结束事件
        if (this.recorder) {
            this.recorder.recordGameOver(winner);
        }

        // 调用游戏结束回调
        if (this.onGameOverCallback && typeof this.onGameOverCallback === 'function') {
            this.onGameOverCallback(winner, winnerText);
        }
    }
});

module.exports = BattleSystem;