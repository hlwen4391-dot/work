# 血条系统设置指南

## 概述
血条系统现已与战斗系统完全集成,当单位受到伤害时会自动更新血条并显示伤害数字。

## 文件修改
1. ✅ `StatsComponent.js` - 添加了 maxHp 和血条引用
2. ✅ `CombatSystem.js` - 伤害结算后自动更新血条
3. ✅ `BattleController.js` - 初始化时设置 maxHp
4. ✅ `HealthBar.js` - 支持 ProgressBar 和 Sprite 两种方式

## 编辑器设置步骤

### 方式一：使用 ProgressBar (推荐)

1. **为预制体添加血条节点**
   - 打开 `Hero.prefab` 和 `Monster.prefab`
   - 在预制体根节点下创建一个子节点,命名为 "HealthBar"
   - 调整位置到单位头顶 (Y坐标约为 50-70)

2. **添加 ProgressBar 组件**
   - 选中 "HealthBar" 节点
   - 点击 "添加组件" → "UI组件" → "ProgressBar"
   - 在 ProgressBar 下创建一个 Sprite 子节点作为填充条
   - 设置 ProgressBar 的 "Bar Sprite" 为这个子节点

3. **添加 HealthBar 脚本组件**
   - 在 "HealthBar" 节点上添加组件
   - 选择 `HealthBar` 脚本
   - 将 ProgressBar 组件拖入 "Health Progress" 属性

4. **添加伤害数字显示 (可选)**
   - 在 "HealthBar" 下创建一个 Label 节点,命名为 "DamageLabel"
   - 设置文字大小、颜色等
   - 将 Label 拖入 HealthBar 脚本的 "Damage Label" 属性

### 方式二：使用 Sprite 宽度

1. **创建血条节点结构**
   ```
   HealthBar (空节点)
   ├─ Background (Sprite - 灰色背景)
   └─ Fill (Sprite - 红色/绿色填充)
   ```

2. **添加 HealthBar 脚本**
   - 在 "HealthBar" 节点添加 `HealthBar` 脚本
   - 将 "Fill" 节点拖入 "Health Fill" 属性
   - 将 DamageLabel 拖入 "Damage Label" 属性

3. **调整血条样式**
   - Fill 的 Anchor 设置为左对齐 (0, 0.5)
   - Background 宽度固定,Fill 宽度会根据血量动态变化

## StatsComponent 设置

确保每个预制体的根节点上都有:
- ✅ `StatsComponent` 组件
- ✅ `HealthBar` 组件 (作为子节点)
- ✅ `TeamComponent` 组件
- ✅ `SkillComponent` 组件
- ✅ `CombatComponent` 组件
- ✅ `AttackMover` 组件 (可选,用于攻击动画)

## 属性说明

### StatsComponent 新增属性
```javascript
maxHp: 100          // 最大生命值 (会在BattleController初始化时自动设置)
```

### HealthBar 属性
```javascript
healthProgress: null      // ProgressBar组件引用 (推荐)
healthFill: null         // Sprite填充引用 (备用)
damageLabel: null        // 伤害数字Label
damageDisplayTime: 1.0   // 伤害数字显示时长
```

## 工作流程

1. **战斗开始**
   - `BattleController.initEntity()` 设置 `maxHp` 和初始 `hp`
   - 调用 `stats.updateHealthBar()` 初始化血条显示

2. **受到伤害**
   - `CombatSystem.damage()` 或 `damageTrue()` 计算伤害
   - 扣除 HP: `tgtStats.hp -= finalDamage`
   - 自动调用 `tgtStats.updateHealthBar(finalDamage)`

3. **血条更新**
   - `StatsComponent.updateHealthBar()` 查找 HealthBar 组件
   - 调用 `healthBar.updateHealth(hp, maxHp)` 更新进度条
   - 调用 `healthBar.showDamage(damage)` 显示伤害数字

4. **伤害数字动画**
   - 使用 `cc.tween` 实现向上飘动 + 淡出效果
   - 1秒后自动隐藏并重置

## 效果预览

- ✅ 血条根据当前HP实时更新
- ✅ 受到伤害时显示"-XX"的伤害数字
- ✅ 伤害数字带有向上飘动+淡出动画
- ✅ 支持ProgressBar和Sprite两种显示方式

## 调试提示

1. **血条不显示**
   - 检查 HealthBar 节点是否激活
   - 检查 ProgressBar 或 Sprite 引用是否正确
   - 检查 `StatsComponent.onLoad()` 是否成功获取 HealthBar

2. **血条不更新**
   - 在 `StatsComponent.updateHealthBar()` 中添加 `cc.log` 查看是否被调用
   - 检查 `this.healthBar` 是否为 null

3. **伤害数字不显示**
   - 检查 DamageLabel 是否被正确引用
   - 检查 Label 的 opacity 是否为 255

## 扩展功能建议

- [ ] 血条颜色根据血量百分比变化 (绿→黄→红)
- [ ] 血条平滑过渡动画 (使用 tween)
- [ ] 治疗效果显示 (绿色"+XX")
- [ ] 暴击伤害特殊显示 (更大字体,不同颜色)
- [ ] 血条跟随单位位置 (如果单位会移动)

