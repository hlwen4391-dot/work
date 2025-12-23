var TeamRef = require("TeamRef");
var StatsComponent = require("StatsComponent");

/**
 * 死亡处理系统（普通模块）
 */
var DeathSystem = cc.Class({
    name: "DeathSystem",

    properties: {},

    ctor(logger) {
        this.logger = logger;
    },

    /**
     * 检查目标是否死亡，若死亡执行处理逻辑。
     */
    checkAndHandleDeath(entity) {

        const stats = entity.getComponent("StatsComponent");
        if (!stats) return false;

        if (stats.hp > 0) return false;

        // 已经死了
        this.logger.log(`💀 ${entity.name} 已死亡`);

        // 从队伍列表中移除
        const team = entity.getComponent("TeamComponent");
        if (team) {
            if (team.team === "hero") {
                TeamRef.herosRef = TeamRef.herosRef.filter(e => e !== entity);
            } else {
                TeamRef.monstersRef = TeamRef.monstersRef.filter(e => e !== entity);
            }
        }

        return true;
    }
});

module.exports = DeathSystem;