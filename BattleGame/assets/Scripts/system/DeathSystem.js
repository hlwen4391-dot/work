var TeamRef = require("TeamRef");
var StatsComponent = require("StatsComponent");

// 动画状态常量
const AnimationState = {
    ATTACK: "atk",      // 攻击动画
    BY_ATK: "byatk",    // 受击动画
    DIE: "die",         // 死亡动画
    SHI_HUA: "shihua",  // 石化动画
    WAIT: "wait",       // 待机动画
};

/**
 * 死亡处理系统（普通模块）
 */
var DeathSystem = cc.Class({
    name: "DeathSystem",

    properties: {},

    ctor(logger, recorder) {
        this.logger = logger;
        this.recorder = recorder; // 战斗记录器（可选）
    },

    /**
     * 检查目标是否死亡，若死亡执行处理逻辑。
     * @param {cc.Node} entity - 实体节点
     * @param {Object} recorder - 战斗记录器（可选）
     */
    checkAndHandleDeath(entity, recorder) {
        // 如果传入了recorder，使用传入的；否则使用实例的
        const recordRecorder = recorder || this.recorder;

        const stats = entity.getComponent("StatsComponent");
        if (!stats) return false;

        if (stats.hp > 0) return false;

        // 已经死了
        this.logger.log(`💀 ${entity.name} 已死亡`);

        // 记录死亡事件
        if (recordRecorder) {
            recordRecorder.recordDeath(entity);
        }

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