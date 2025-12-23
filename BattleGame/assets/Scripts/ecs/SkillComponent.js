cc.Class({
    extends: cc.Component,

    properties: {
        skills: { default: () => [], visible: false },
        cooldowns: { default: () => ({}), visible: false }
    },

    init(skillConfig = []) {
        this.skills = skillConfig.map(s => ({
            id: s.id,
            skillName: s.name,
            cooldown: s.cooldown,
            effect: s.effect
        }));

        this.cooldowns = {};
        this.skills.forEach(s => this.cooldowns[s.id] = 0);
    }
});
