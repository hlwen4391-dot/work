var TeamRef = require("TeamRef");
var StatsComponent = require("StatsComponent");

// 动画状态常量
const AnimationState = {
    ATTACK: "ack",
    BY_ATK: "byatk",
    DIE: "die",
    SHI_HUA: "shihua",
    WAIT: "wait",
};

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

        // 播放死亡动画
        this._playDeathAnimation(entity);

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
    },

    /**
     * 播放死亡动画
     * @private
     */
    _playDeathAnimation(entity) {
        const skeleton = entity.getComponent(sp.Skeleton);
        if (skeleton) {
            // 清除之前的监听器
            skeleton.setCompleteListener(null);
            // 播放死亡动画（不循环）
            skeleton.setAnimation(0, AnimationState.DIE, false);
            cc.log(`[DeathSystem] ${entity.name} 播放死亡动画`);
        } else {
            cc.warn(`[DeathSystem] ${entity.name} 没有 Spine 组件，无法播放死亡动画`);
        }
    }
});

module.exports = DeathSystem;