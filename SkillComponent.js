class SkillComponent {
    constructor(skillConfig = []) {
        this.skills = skillConfig.map(s => ({
            id: s.id,
            name: s.name,
            cooldown: s.cooldown,
            effect: s.effect,
        }));

        //冷却时间表
        this.cooldowns = {};
        this.skills.forEach(s => {
            this.cooldowns[s.id] = 0;
        });
    }
}

module.exports = SkillComponent;