cc.Class({
    extends: cc.Component,

    properties: {
        skills: { default: () => [], visible: false },
        cooldowns: { default: () => ({}), visible: false }
    },

    init(skillConfig = []) {
        cc.log(`[SkillComponent] 初始化技能配置，数量=${skillConfig.length}`);

        // 打印原始配置用于调试
        skillConfig.forEach((s, index) => {
            cc.log(`[SkillComponent] 原始技能[${index}]: name=${s.name}, id=${s.id}, requireRage=${s.requireRage}, requireRage类型=${typeof s.requireRage}`);
        });

        this.skills = skillConfig.map(s => {
            const skill = {
                id: s.id,
                skillName: s.name,
                cooldown: s.cooldown,
                effect: s.effect,
                requireRage: (s.requireRage !== undefined && s.requireRage !== null) ? s.requireRage : 0,  // 需要怒气值（0表示不需要，>0表示需要怒气值满才能释放）
                isUltimate: (s.requireRage !== undefined && s.requireRage !== null && s.requireRage > 0)  // 是否是大招
            };
            cc.log(`[SkillComponent] 映射后技能: name=${skill.skillName}, id=${skill.id}, requireRage=${skill.requireRage}, isUltimate=${skill.isUltimate}`);
            return skill;
        });

        this.cooldowns = {};
        this.skills.forEach(s => this.cooldowns[s.id] = 0);

        cc.log(`[SkillComponent] 初始化完成，技能数量=${this.skills.length}`);
    }
});
