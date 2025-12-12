const TeamRef = require("./TeamRef");
const StatsComponent = require("./StatsComponent");
const TeamComponent = require("./TeamComponent");

class DeathSystem {
    constructor(logger) {
        this.logger = logger;
    }

    checkAndHandleDeath(entity) {
        const stats = entity.get(StatsComponent);
        if (!stats || !stats.isDead()) return false;

        const teamComp = entity.get(TeamComponent);
        if (!teamComp) return false;

        const teamArr = teamComp.team === "hero"
            ? TeamRef.herosRef
            : TeamRef.monstersRef;

        const idx = teamArr.indexOf(entity);
        if (idx !== -1) teamArr.splice(idx, 1);
        this.logger.log(`${entity.name}死亡，从队伍中移除`);
        return true;

    }
}

module.exports = DeathSystem;