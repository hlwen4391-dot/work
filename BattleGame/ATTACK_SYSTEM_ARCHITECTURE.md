# 攻击动画系统架构

## 系统概览

```
┌─────────────────────────────────────────────────────────┐
│                   BattleController                       │
│  (驱动战斗循环，每帧调用 BattleSystem.update)            │
└───────────────────┬─────────────────────────────────────┘
                    │ update(dt)
                    ↓
┌─────────────────────────────────────────────────────────┐
│                    BattleSystem                          │
│  - 管理行动队列 (actionQueue)                            │
│  - 确保单位按顺序执行行动                                │
│  - 等待动画完成后再继续下一个                            │
└───────────────────┬─────────────────────────────────────┘
                    │ performAction(unit, dt, callback)
                    ↓
┌─────────────────────────────────────────────────────────┐
│                   ActionSystem                           │
│  - 选择目标                                              │
│  - 检测是否有 AttackMover 组件                           │
│  - 触发攻击动画或直接执行逻辑                            │
└───────────────────┬─────────────────────────────────────┘
                    │
         ┌──────────┴──────────┐
         │                     │
    有动画组件              无动画组件
         │                     │
         ↓                     ↓
┌──────────────────┐  ┌──────────────────┐
│  AttackMover     │  │   SkillSystem    │
│  播放动画        │  │   直接执行伤害   │
└────────┬─────────┘  └────────┬─────────┘
         │                     │
         │ onComplete()        │
         └──────────┬──────────┘
                    ↓
         ┌──────────────────────┐
         │    SkillSystem       │
         │    执行技能效果      │
         │    - 造成伤害        │
         │    - 添加 Buff       │
         └──────────┬───────────┘
                    ↓
         ┌──────────────────────┐
         │   DeathSystem        │
         │   检查单位是否死亡   │
         └──────────┬───────────┘
                    │
                    ↓ callback()
         ┌──────────────────────┐
         │   BattleSystem       │
         │   继续下一个行动     │
         └──────────────────────┘
```

## 数据流图

```
单位数据 (Hero/Monster 预制件)
    ↓
  cc.Node (游戏对象)
    ├── StatsComponent (属性: HP, 攻击, 防御等)
    ├── TeamComponent (队伍: hero/monster)
    ├── SkillComponent (技能列表)
    ├── CombatComponent (战斗数据)
    ├── BuffComponent[] (Buff 列表)
    └── AttackMover (攻击动画) ← 新增
```

## 时序图：完整的攻击流程

```
时间轴
  │
  ├── Frame 1: BattleController.update()
  │     ↓
  ├── Frame 1: BattleSystem.update(dt)
  │     │ - 收集所有存活单位
  │     │ - 按速度排序
  │     │ - 加入行动队列
  │     ↓
  ├── Frame 1: BattleSystem._processNextAction()
  │     │ - 取出队首单位
  │     ↓
  ├── Frame 1: ActionSystem.performAction(战士, dt, callback)
  │     │ - 更新 Buff 效果
  │     │ - 更新技能冷却
  │     │ - 选择目标 (巨狼)
  │     │ - 检测到 AttackMover 组件
  │     ↓
  ├── Frame 1: AttackMover.attackTarget(巨狼, onComplete)
  │     │ - 保存原位置: (100, 200)
  │     │ - 计算目标位置: (300, 200)
  │     │ - 开始动画序列
  │     ↓
  ├── Frame 1-30: 播放移动动画 (战士 → 巨狼)
  │     │ - cc.moveTo(duration, targetPos)
  │     │ - 使用缓动函数平滑移动
  │     ↓
  ├── Frame 30: 到达目标位置
  │     ↓
  ├── Frame 30-45: 播放攻击动画
  │     │ - 缩放: 1.0 → 1.2 → 1.0
  │     │ - 可选: 旋转、音效、特效
  │     ↓
  ├── Frame 45: 攻击动画完成
  │     ↓
  ├── Frame 45-75: 返回原位置
  │     │ - cc.moveTo(duration, originalPos)
  │     ↓
  ├── Frame 75: 动画序列完成
  │     │ - 触发 onComplete() 回调
  │     ↓
  ├── Frame 75: SkillSystem.useSkill()
  │     │ - 执行技能效果
  │     │ - 造成伤害: 巨狼 HP 50 → 44
  │     │ - 添加 Buff (如燃烧)
  │     ↓
  ├── Frame 75: DeathSystem.checkAndHandleDeath()
  │     │ - 检查巨狼是否死亡
  │     │ - 如死亡，从队伍中移除
  │     ↓
  ├── Frame 75: ActionSystem 回调完成
  │     │ - 通知 BattleSystem 行动完成
  │     ↓
  ├── Frame 76: BattleSystem._processNextAction()
  │     │ - isProcessingAction = false
  │     │ - 处理下一个单位 (法师)
  │     ↓
  └── Frame 76+: 重复以上流程...
```

## 关键机制说明

### 1. 行动队列 (Action Queue)

**问题**：多个单位同时攻击会导致动画重叠混乱。

**解决方案**：
```javascript
// BattleSystem.js
this.actionQueue = [];           // 队列存储待执行的行动
this.isProcessingAction = false; // 标志位防止并发

// 每帧将单位行动加入队列
update(dt) {
    const units = this.getSortedUnits();
    for (let unit of units) {
        this.actionQueue.push({ unit, dt });
    }
    this._processNextAction(); // 开始处理队列
}

// 串行处理，等待前一个完成
_processNextAction() {
    if (this.isProcessingAction) return; // 正在处理中，等待
    
    this.isProcessingAction = true;
    const { unit, dt } = this.actionQueue.shift();
    
    this.actionSystem.performAction(unit, dt, () => {
        this.isProcessingAction = false; // 标记完成
        this._processNextAction();       // 继续下一个
    });
}
```

### 2. 回调机制 (Callback Chain)

**问题**：动画是异步的，如何在动画完成后执行逻辑？

**解决方案**：使用回调链
```javascript
// ActionSystem.js
performAction(entity, dt, callback) {
    const attackMover = entity.getComponent("AttackMover");
    
    if (attackMover) {
        // 播放动画，完成后执行逻辑
        attackMover.attackTarget(target, () => {
            SkillSystem.useSkill(...);      // 执行伤害
            DeathSystem.checkAndHandleDeath(...);
            callback();                      // 通知上层完成
        });
    } else {
        // 无动画，直接执行
        SkillSystem.useSkill(...);
        callback();
    }
}
```

### 3. 组件检测 (Component Detection)

**特点**：支持渐进式增强

```javascript
// 有 AttackMover 组件 → 播放动画
const attackMover = entity.getComponent("AttackMover");
if (attackMover && !attackMover.isAttacking) {
    // 动画模式
    attackMover.attackTarget(target, onComplete);
} else {
    // 即时模式（向后兼容）
    SkillSystem.useSkill(...);
    callback();
}
```

## 性能考虑

### 帧率影响

| 单位数量 | 动画时长 | 总战斗时长 | 帧率影响 |
|---------|---------|-----------|---------|
| 2v2     | 1秒     | ~4秒/回合 | 很小    |
| 5v5     | 1秒     | ~10秒/回合| 中等    |
| 10v10   | 1秒     | ~20秒/回合| 较大    |

### 优化建议

1. **缩短动画时长**
```javascript
moveSpeed: 800        // 更快的移动
attackDuration: 0.2   // 更短的攻击
```

2. **减少移动距离**
```javascript
attackDistance: 50    // 不需要走太远
```

3. **对象池管理**（未来扩展）
```javascript
// 复用节点而不是频繁创建销毁
cc.NodePool
```

4. **禁用动画**
```javascript
// 移除 AttackMover 组件 → 即时战斗
// 系统自动降级到无动画模式
```

## 扩展点

### 1. 自定义动画

```javascript
// AttackMover.js
_playAttackAnimation() {
    // 替换为你的自定义动画
    const spine = this.node.getComponent(sp.Skeleton);
    if (spine) {
        spine.setAnimation(0, "attack", false);
    }
}
```

### 2. 技能特效

```javascript
// SkillSystem.js
useSkill(entity, target, skill, log, rand) {
    // 根据技能类型播放不同特效
    if (skill.id === SkillEnum.fireball) {
        // 播放火球飞行动画
        this._playProjectile(entity, target, "fireball");
    }
}
```

### 3. 受击反馈

```javascript
// CombatSystem.js
damage(attacker, defender, value, log) {
    // 添加受击动画
    const hitAnim = defender.getComponent("HitAnimation");
    if (hitAnim) {
        hitAnim.playHit();
    }
}
```

## 常见问题排查

### 动画不播放？

1. ✅ 检查预制件是否添加 `AttackMover` 组件
2. ✅ 检查组件是否正确引用脚本
3. ✅ 查看控制台是否有错误
4. ✅ 确认 `isAttacking` 标志是否正确重置

### 战斗卡住不动？

1. ✅ 检查 `callback()` 是否被调用
2. ✅ 检查 `isProcessingAction` 是否正确设置
3. ✅ 查看队列是否被清空
4. ✅ 确认没有抛出未捕获的异常

### 动画重叠混乱？

1. ✅ 确认使用了队列机制（不要跳过队列直接执行）
2. ✅ 检查 `isProcessingAction` 标志
3. ✅ 确认每个行动都调用了 `callback()`

## 相关文件索引

| 文件 | 职责 |
|------|------|
| `AttackMover.js` | 攻击动画组件（视觉表现） |
| `ActionSystem.js` | 行动系统（逻辑调度） |
| `BattleSystem.js` | 战斗系统（队列管理） |
| `BattleController.js` | 战斗控制器（驱动循环） |
| `SkillSystem.js` | 技能系统（效果执行） |
| `DeathSystem.js` | 死亡系统（状态检查） |

---

**架构设计原则**：
- ✅ 逻辑与表现分离（纯逻辑系统 + 视觉组件）
- ✅ 向后兼容（可选动画，自动降级）
- ✅ 可扩展（回调机制，易于添加新功能）
- ✅ 高内聚低耦合（组件独立，系统协作）

