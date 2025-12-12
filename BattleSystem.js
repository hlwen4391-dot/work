const TeamRef = require("./TeamRef");
const StatsComponent = require("./StatsComponent");
const ActionSystem = require("./ActionSystem");

class BattleSystem {
    constructor(heros, monsters, logger, rand) {
        this.heros = heros;
        this.monsters = monsters;
        this.logger = logger;
        this.rand = rand;//随机数生成器


        TeamRef.herosRef = this.heros;
        TeamRef.monstersRef = this.monsters;

        this.actionSystem = new ActionSystem(logger, rand); //创建行动系统
        this.finished = false;
    }

    isFinished() {
        return this.heros.length === 0 || this.monsters.length === 0;
    }
    //按速度排序，speed越快，越先行动
    getSortedUnits() {
        return [...this.heros, ...this.monsters].filter(e => !e.get(StatsComponent)?.isDead())
            .sort((a, b) => {
                const sa = a.get(StatsComponent);
                const sb = b.get(StatsComponent);
                return sb.speed - sa.speed;
            });
    }

    //单帧更新
    update(deltaTime) {
        if (this.finished) return;

        if (this.isFinished()) {
            this.finished = true;
            const winner = this.heros.length > 0 ? "英雄" : "怪物";
            this.logger.log(`====战斗结束：${winner}胜利====`);
            return;
        }

        const units = this.getSortedUnits();
        for (const unit of units) {
            if (this.isFinished()) break;

            const stats = unit.get(StatsComponent);//获取单位状态
            if (!stats || stats.isDead()) continue;//如果单位死亡，则跳过

            this.actionSystem.performAction(unit, deltaTime);
        }

        if (this.isFinished()) {
            this.finished = true;
            const winner = this.heros.length > 0 ? "英雄" : "怪物";
            this.logger.log(`====战斗结束：${winner}胜利====`);
        }
        return;
    }
}

module.exports = BattleSystem;