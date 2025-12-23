# 攻击动画系统使用说明

## 概述

攻击动画系统允许单位在攻击时执行以下动作序列：
1. **移动到目标** - 攻击者移动到目标附近
2. **播放攻击动画** - 执行攻击动作（缩放效果）
3. **返回原位置** - 攻击完成后返回起始位置

## 组件说明

### AttackMover 组件

位置：`assets/Scripts/ecs/AttackMover.js`

#### 属性配置

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `moveSpeed` | Number | 500 | 移动速度（像素/秒） |
| `attackDistance` | Number | 50 | 攻击时距离目标的距离 |
| `attackDuration` | Number | 0.3 | 攻击动画持续时间（秒） |

#### 主要方法

- `attackTarget(target, onComplete)` - 执行攻击动画序列
  - `target`: 目标节点（cc.Node）
  - `onComplete`: 完成回调函数

- `stopAttack()` - 立即停止所有动画并重置

## 使用步骤

### 1. 为预制件添加 AttackMover 组件

在 Cocos Creator 编辑器中：

1. 打开 `Hero.prefab` 和 `Monster.prefab`
2. 选择根节点
3. 在属性检查器中点击"添加组件"
4. 选择"自定义组件" → "AttackMover"
5. 根据需要调整参数：
   - **moveSpeed**: 调整移动速度（推荐 300-800）
   - **attackDistance**: 调整攻击距离（推荐 30-80）
   - **attackDuration**: 调整攻击时长（推荐 0.2-0.5）

### 2. 确保预制件包含必要组件

每个战斗单位预制件需要包含以下组件：

- ✅ `StatsComponent` - 属性组件
- ✅ `TeamComponent` - 队伍组件
- ✅ `SkillComponent` - 技能组件
- ✅ `CombatComponent` - 战斗组件
- ✅ `AttackMover` - 攻击动画组件（新增）

### 3. 预制件布局建议

推荐的节点结构：

```
Hero/Monster (根节点)
├── StatsComponent
├── TeamComponent
├── SkillComponent
├── CombatComponent
├── AttackMover
└── Sprite (精灵节点，用于显示角色图片)
```

## 系统架构

### 战斗流程

```
BattleSystem.update(dt)
  ↓
将所有单位行动加入队列
  ↓
_processNextAction()
  ↓
ActionSystem.performAction(unit, dt, callback)
  ↓
检测 AttackMover 组件
  ↓
执行攻击动画序列：
  1. moveTo(目标位置)
  2. 播放攻击动画 (缩放)
  3. moveTo(原始位置)
  ↓
动画完成回调
  ↓
执行技能效果（扣血、Buff等）
  ↓
继续下一个单位行动
```

### 异步处理机制

- **BattleSystem** 使用行动队列（`actionQueue`）管理单位行动
- 每次只处理一个行动，等待动画完成后再处理下一个
- 通过 `isProcessingAction` 标志防止并发处理

## 自定义攻击动画

### 修改缩放动画

在 `AttackMover.js` 的 `_playAttackAnimation()` 方法中修改：

```javascript
_playAttackAnimation() {
    // 当前实现：简单的缩放动画
    const scaleAnim = cc.sequence(
        cc.scaleTo(this.attackDuration * 0.3, 1.2),  // 放大到 1.2 倍
        cc.scaleTo(this.attackDuration * 0.7, 1.0)   // 缩回到 1.0 倍
    );
    this.node.runAction(scaleAnim);
}
```

### 添加更多效果

你可以在 `_playAttackAnimation()` 中添加：

```javascript
_playAttackAnimation() {
    // 1. 缩放动画
    const scaleAnim = cc.sequence(
        cc.scaleTo(this.attackDuration * 0.3, 1.2),
        cc.scaleTo(this.attackDuration * 0.7, 1.0)
    );
    this.node.runAction(scaleAnim);

    // 2. 旋转动画（可选）
    const rotateAnim = cc.sequence(
        cc.rotateTo(this.attackDuration * 0.5, 15),
        cc.rotateTo(this.attackDuration * 0.5, 0)
    );
    this.node.runAction(rotateAnim);

    // 3. 播放音效（可选）
    // cc.audioEngine.play(this.attackSound, false, 1);

    // 4. 播放粒子效果（可选）
    // const particle = this.node.getComponent(cc.ParticleSystem);
    // if (particle) particle.resetSystem();

    // 5. 播放 Spine 动画（可选）
    // const spine = this.node.getComponent(sp.Skeleton);
    // if (spine) spine.setAnimation(0, "attack", false);
}
```

## 性能优化建议

1. **减少移动距离** - 将 `attackDistance` 设置为较大的值（如 50-80）
2. **缩短动画时长** - 将 `attackDuration` 设置为较小的值（如 0.2-0.3）
3. **使用对象池** - 如果有大量单位，考虑使用对象池管理节点
4. **禁用动画** - 如果性能不足，可以移除 AttackMover 组件，系统会自动退回到即时战斗

## 调试技巧

### 查看攻击动画是否正常执行

在 `AttackMover.js` 中添加日志：

```javascript
attackTarget(target, onComplete) {
    cc.log(`${this.node.name} 开始攻击 ${target.name}`);
    // ... 原有代码
}

_onSequenceComplete() {
    cc.log(`${this.node.name} 攻击动画完成`);
    // ... 原有代码
}
```

### 检查队列状态

在 `BattleSystem.js` 中添加日志：

```javascript
_processNextAction() {
    cc.log(`队列中剩余行动数: ${this.actionQueue.length}`);
    // ... 原有代码
}
```

## 常见问题

### Q: 动画播放后单位没有返回原位置？

**A**: 检查预制件的锚点（Anchor）是否设置正确，推荐设置为 (0.5, 0.5)。

### Q: 多个单位同时攻击，导致动画混乱？

**A**: 这是正常的，因为 `BattleSystem.update()` 每帧都会将所有单位加入队列。如果希望控制节奏，可以修改 `BattleController.js` 中的更新频率。

### Q: 攻击动画太慢，如何加快战斗节奏？

**A**: 调整以下参数：
- 增大 `moveSpeed`（如 800）
- 减小 `attackDuration`（如 0.2）
- 减小 `attackDistance`（如 30）

### Q: 如何禁用攻击动画，恢复即时战斗？

**A**: 从预制件中移除 `AttackMover` 组件即可。系统会自动检测组件是否存在，如果不存在则直接执行战斗逻辑。

## 下一步扩展

- [ ] 支持技能特效（火球术、盾击等）
- [ ] 添加受击反馈动画
- [ ] 支持 Spine 骨骼动画
- [ ] 添加攻击音效
- [ ] 实现连击动画
- [ ] 支持范围攻击的群体动画

## 相关文件

- `assets/Scripts/ecs/AttackMover.js` - 攻击动画组件
- `assets/Scripts/system/ActionSystem.js` - 行动系统（调用动画）
- `assets/Scripts/system/BattleSystem.js` - 战斗系统（队列管理）
- `assets/Scripts/game/BattleController.js` - 战斗控制器（驱动更新）

---

**最后更新**: 2025-12-23

