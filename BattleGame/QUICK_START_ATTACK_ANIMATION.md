# 攻击动画 - 快速开始

## 只需 3 步，启用攻击动画！

### 步骤 1：添加 AttackMover 组件到预制件

在 Cocos Creator 编辑器中：

1. 打开 `assets/Prefabs/Hero.prefab`
2. 选择根节点
3. 点击"添加组件" → "自定义组件" → 选择 `AttackMover`
4. 重复以上步骤，为 `Monster.prefab` 也添加组件

### 步骤 2：调整参数（可选）

在 AttackMover 组件的属性面板中调整：

```
Move Speed: 500      // 移动速度
Attack Distance: 50  // 攻击距离
Attack Duration: 0.3 // 攻击时长
```

### 步骤 3：运行场景

保存预制件，运行 `BattleScene`，你将看到：
- ✅ 攻击者移动到目标位置
- ✅ 播放攻击动画（缩放效果）
- ✅ 返回原位置
- ✅ 然后执行伤害逻辑

## 效果演示

```
战士 (原位置)
  ↓ [移动]
战士 → 巨狼 (靠近目标)
  ↓ [攻击动画 - 放大缩小]
战士 ⚔️ 巨狼
  ↓ [返回]
战士 (原位置)
  ↓ [执行伤害]
巨狼 HP: 50 → 44
```

## 预制件检查清单

确保你的预制件包含以下组件：

- ✅ `StatsComponent` - 已有
- ✅ `TeamComponent` - 已有
- ✅ `SkillComponent` - 已有
- ✅ `CombatComponent` - 已有
- ✅ `AttackMover` - **新增！**

## 常用调整

### 想让战斗更快？

```javascript
moveSpeed: 800          // 加快移动
attackDuration: 0.2     // 缩短攻击时长
```

### 想让战斗更有冲击感？

```javascript
moveSpeed: 300          // 减慢移动
attackDistance: 30      // 更靠近目标
attackDuration: 0.5     // 拉长攻击时长
```

### 不想要动画？

从预制件中移除 `AttackMover` 组件即可！系统会自动恢复即时战斗模式。

## 工作原理

1. **BattleSystem** 将所有单位行动放入队列
2. **ActionSystem** 检测到 `AttackMover` 组件
3. 调用 `attackTarget()` 播放动画
4. 动画完成后通过回调执行伤害
5. 继续处理下一个单位

完整文档见：`ATTACK_ANIMATION.md`

---

**提示**：如果动画没有播放，检查：
1. 预制件是否添加了 `AttackMover` 组件
2. 组件脚本路径是否正确
3. 查看控制台是否有错误信息

