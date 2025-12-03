function replayBattleStep(record) {
    console.log(`======== 战斗回放 seed:${record.seed}=========`);

    for (const line of record.logs) {
        console.log(line);
    }

    console.log(`======== 战斗回放结束 =========`);
}

module.exports = replayBattleStep;