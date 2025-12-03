const mulberry32 = require("./random");
// const rand = mulberry32(Date.now());

const rand = mulberry32(122333);

class Character {
    constructor(args) {
        this.name = args.name;
        this.hp = args.hp || 100;
        this.attack = args.attack || 1;
        this.defense = args.defense || 1;
        this.speed = args.speed || 1;
        this.immune = args.immune || 0;//免伤率
    }//定义角色属性

    getDamage(target, log) {
        let damage = 0;
        //暴击判定
        const isCrit = rand() < this.crit;//生成0-1之间的随机数
        if (isCrit) {
            log(`${this.name}暴击了！`);
            damage = Math.max((this.attack - target.defense) * 2, 1)
            return damage;//暴击后直接返回，不进行后续攻击
        }
        damage = Math.max(this.attack - target.defense, 1);//攻击-防御=伤害
        return damage;
    }

    //攻击目标方法 
    attackTarget(target, log) {
        const damage = this.getDamage(target, rand, log) * (1 - target.immune);//攻击-防御=伤害
        target.hp -= damage;//血量-伤害=剩余血量
        log(`${this.name}对${target.name}造成了${damage}点伤害`)//打印攻击信息
        log(`${target.name}剩余HP:${target.hp}`)//打印剩余血量
    }//attackTarget方法用来攻击目标角色


    isDead() {
        return this.hp <= 0;
    }//Character 类的实例方法用来判断角色是否死亡

}


//怪物类躲避和暴击
class Monster extends Character {
    constructor(args) {
        super(args);//调用父类构造函数
        this.miss = args.miss || 0;//怪物攻击有45%的概率miss
        this.crit = args.crit || 0;//怪物攻击有10%的概率暴击
        this.team = "monster";
    }
    attackTarget(target, rand, log) {
        // const rand = rand();//生成0-1之间的随机数
        // console.log(`${this.name}攻击${target.name}的概率为${random}`);
        //如果随机数小于miss，则攻击失败，miss判定
        if (rand() < this.miss) {
            log(`${this.name}攻击${target.name}失败！`);
            return;
        }
        super.attackTarget(target, rand, log);
    }
}


//英雄类躲避和暴击
class Hero extends Character {
    constructor(args) {
        super(args);//调用父类构造函数
        this.miss = args.miss || 0;//怪物攻击有45%的概率miss
        this.crit = args.crit || 0;//怪物攻击有10%的概率暴击
        this.team = "hero";
    }
    attackTarget(target, rand, log) {
        // const random = rand();//生成0-1之间的随机数
        // console.log(`${this.name}攻击${target.name}的概率是${radom}`);
        //如果随机数小于miss，则攻击失败
        if (rand() < this.miss) {
            log(`${this.name}攻击${target.name}失败！`);
            return;
        }
        super.attackTarget(target, rand, log);
    }

}

const heros = [
    new Hero({ name: "战士", hp: 150, attack: 15, defense: 10, speed: 20, crit: 0.6 }),
    new Hero({ name: "法师", hp: 100, attack: 20, defense: 8, speed: 19, crit: 0.1, miss: 0.2 }),
    new Hero({ name: "射手", hp: 110, attack: 18, defense: 6, speed: 16, crit: 0.1, miss: 0.2 }),
    new Hero({ name: "刺客", hp: 130, attack: 12, defense: 10, speed: 14, crit: 0.1, miss: 0.2 }),
    new Hero({ name: "辅助", hp: 100, attack: 10, defense: 12, speed: 12 }),
]

const monsters = [
    new Monster({ name: "小兵", hp: 50, attack: 1, defense: 1, speed: 10 }),
    new Monster({ name: "野怪", hp: 80, attack: 5, defense: 3, speed: 9 }),
    new Monster({ name: "巨狼", hp: 100, attack: 10, defense: 5, speed: 8 }),
    new Monster({ name: "小boss", hp: 110, attack: 20, defense: 10, speed: 6, immune: 0.1 }),
    new Monster({ name: "大boss", hp: 100, attack: 30, defense: 15, speed: 4, miss: 0.35, crit: 0.1, immune: 0.2 }),
]

function speedBattle() {

}





// 多人战斗函数
function battleTeams(heros, monsters) {


    const log = console.log;


    let heroIndex = 0;
    let monsterIndex = 0;

    console.log("多人战斗开始！");

    while (heroIndex < heros.length && monsterIndex < monsters.length) {

        const hero = heros[heroIndex];//取出当前英雄
        const monster = monsters[monsterIndex];//取出当前怪物

        console.log(`${hero.name} vs ${monster.name}`);
        console.log(`${hero.name}(速度：${hero.speed}) vs ${monster.name}(速度：${monster.speed})`);

        //英雄攻击怪物
        if (hero.speed >= monster.speed) {
            hero.attackTarget(monster, rand, log);
            if (monster.isDead()) {
                console.log(`${hero.name}战胜了${monster.name}！`);
                monsterIndex++;
                continue;
            }

            //怪物攻击英雄
            monster.attackTarget(hero, rand, log);
            if (hero.isDead()) {
                console.log(`${monster.name}战胜了${hero.name}！`);
                heroIndex++;
                continue;
            } else {
                monster.attackTarget(hero, rand, log);
                if (hero.isDead()) {
                    console.log(`${monster.name}战胜了${hero.name}！`);
                    heroIndex++;
                    continue;
                }
                if (monster.isDead()) {
                    console.log(`${hero.name}战胜了${monster.name}！`);
                    monsterIndex++;
                    continue;
                }
            }
        }
    }
    //战斗结束判断
    if (heroIndex >= heros.length) {
        console.log("英雄全部死亡，怪物胜利！");
    } else {
        console.log("怪物全部死亡，英雄胜利！");
    }

}

battleTeams(heros, monsters);

function testBattle(heros, monsters, seed = 123456) {


    const logs = [];
    const log = (msg) => logs.push(msg);

    const isFinished = () => {
        return heros.length === 0 || monsters.length === 0;
    };//判断阵营人数是否为0，如果为0，则战斗结束

    let gameRound = 0;
    while (!isFinished()) {
        const speedSorted = [...heros, ...monsters].sort((a, b) => b.speed - a.speed);//按速度排序，速度快的先出手
        gameRound++;
        for (const character of speedSorted) {
            if (character.isDead()) {
                continue;
            }
            const target = character.team === "hero" ? monsters[Math.floor(rand() * monsters.length)] : heros[Math.floor(rand() * heros.length)];//随机选择目标，如果
            if (target) {
                character.attackTarget(target, log);
                if (target.isDead()) {
                    if (target.team === "hero") {
                        heros.splice(heros.indexOf(target), 1);//删除已死亡的英雄
                    } else {
                        monsters.splice(monsters.indexOf(target), 1);//删除已死亡的怪物
                    }
                }
            }
        }
        log(`gameRound:${gameRound} 回合结束！`);
        log("\n");
    }

    log(heros.length > monsters.length ? "英雄胜利！" : "怪物胜利！");


    console.log(`======== seed:${seed} 战斗日志 =========`);
    console.log(`${logs.join("\n")}`);



}


for (let i = 0; i < 1; i++) {
    testBattle([...heros], [...monsters], 123456);
}



// hero.attackTarget(monster);//英雄攻击怪物

// monster.attackTarget(hero);//怪物攻击英雄



// while (true) {
//     hero.attackTarget(monster);

//     if (monster.isDead()) {
//         console.log("战斗结束，怪物死亡，英雄胜利！");
//         break;
//     }
//     monster.attackTarget(hero);
//     if (hero.isDead()) {
//         console.log("战斗结束，英雄死亡，怪物胜利！");
//         break;
//     }
//     //回合制循环，直到一方死亡