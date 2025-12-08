const mulberry32 = require("./random");
const Hero = require("./Hero");
const Monster = require("./Monster");
const { stunSkill, fireball, rageSkill, normalAttack } = require("./skill");
const BattleLogger = require("./BattleLogger");
const ActionSystem = require("./ActionSystem");
const BuffSystem = require("./BuffSystem");

function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
}//睡眠函数

async function battleRTS(heros, monsters, seed = Date.now()) {

    const rand = mulberry32(seed);
    const logger = new BattleLogger();
    const actionSystem = new ActionSystem(logger, rand);

    logger.log("===== 战斗开始（deltaTime实时模式） =====");


    const isFinished = () =>
        heros.length === 0 || monsters.length === 0;//判断阵营人数是否为0，如果为0，则战斗结束

    let last = Date.now();


    while (!isFinished()) {
        let now = Date.now();
        let delta = (now - last) / 1000;
        last = now;
        // updateAllUnits(delta);//更新所有单位

        // 找到下一个要行动的单位
        const aliveUnits = [...heros, ...monsters].filter(u => !u.isDead()).sort((a, b) => b.speed - a.speed);

        for (const actor of aliveUnits) {
            if (actor.isDead()) continue;
            //更新状态效果
            if (actionSystem.updateStatusEffects(actor, delta)) continue;

            const target = actionSystem.pickRandomTarget(actor, heros, monsters);
            if (!target) break;


            if (actionSystem.updateSkill(actor, target, delta)) {
                if (target.isDead()) {
                    logger.log(`${target.name} 被击杀！`);
                    if (target.team === "hero") heros.splice(heros.indexOf(target), 1);//删除已死亡的英雄
                    else monsters.splice(monsters.indexOf(target), 1);//删除已死亡的怪物
                }
                logger.log(`${target.name} 剩余HP:${target.hp}`);
                continue;
            }



            await sleep(16);


            // deltaTime = Math.min(0.016, (Date.now() - lastDelta) / 1000); // 模拟游戏引擎的帧率
            // lastDelta = Date.now();
            // await new Promise(resolve => setTimeout(resolve, deltaTime));// sleep diffTime ms

        }
    }


    logger.log(heros.length > monsters.length ? "英雄胜利！" : "怪物胜利！");
    logger.log("===== 实时时间驱动战斗结束 =====");
}


const heros = [
    new Hero({ name: "战士", hp: 150, attack: 15, defense: 10, speed: 20, crit: 0.6, skills: [stunSkill] }),
    new Hero({ name: "法师", hp: 100, attack: 20, defense: 8, speed: 19, crit: 0.1, miss: 0.2, skills: [fireball] }),
    new Hero({ name: "射手", hp: 110, attack: 18, defense: 6, speed: 16, crit: 0.1, miss: 0.2 }),
]

const monsters = [
    new Monster({ name: "小兵", hp: 50, attack: 1, defense: 1, speed: 10 }),
    new Monster({ name: "野怪", hp: 80, attack: 5, defense: 3, speed: 9 }),
    new Monster({ name: "巨狼", hp: 200, attack: 10, defense: 5, speed: 8, skills: [rageSkill] }),

]


for (let i = 0; i < 1; i++) {
    battleRTS([...heros], [...monsters], 123456);
}


// function testBattle(heros, monsters, seed = 123456) {
//     const logs = [];
//     const log = (msg) => logs.push(msg);

//     const isFinished = () => {
//         return heros.length === 0 || monsters.length === 0;
//     };//判断阵营人数是否为0，如果为0，则战斗结束

//     let gameRound = 0;
//     while (!isFinished()) {

//         console.log(`游戏回合：${gameRound} 开始！`);
//         const speedSorted = [...heros, ...monsters].sort((a, b) => b.speed - a.speed);//按速度排序，速度快的先出手
//         gameRound++;
//         for (const character of speedSorted) {
//             if (character.isDead()) {
//                 continue;
//             }
//             const target = character.team === "hero" ? monsters[Math.floor(rand() * monsters.length)] : heros[Math.floor(rand() * heros.length)];//随机选择目标，如果
//             if (target) {
//                 character.attackTarget(target, log);
//                 if (target.isDead()) {
//                     if (target.team === "hero") {
//                         heros.splice(heros.indexOf(target), 1);//删除已死亡的英雄
//                     } else {
//                         monsters.splice(monsters.indexOf(target), 1);//删除已死亡的怪物
//                     }
//                 }
//             }
//         }
//         log(`gameRound:${gameRound} 回合结束！`);
//         log("\n");
//     }

//     log(heros.length > monsters.length ? "英雄胜利！" : "怪物胜利！");

//     replayBattleStep({ seed, logs });
// }

// //测试战斗，调用testBattle函数
// for (let i = 0; i < 1; i++) {
//     testBattle([...heros], [...monsters], 123456);
// }


