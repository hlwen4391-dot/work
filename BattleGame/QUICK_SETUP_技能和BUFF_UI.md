# 🚀 快速设置：技能特效和Buff UI

## ⚡ 3步完成设置

### 第1步：为所有角色添加Buff图标组件（必须）

打开这些预制体，在根节点上添加 `BuffIconDisplay` 组件：
- ✅ `assets/Prefabs/战士.prefab`
- ✅ `assets/Prefabs/法师.prefab`
- ✅ `assets/Prefabs/巨狼.prefab`
- ✅ `assets/Prefabs/Boss.prefab`

**操作步骤：**
1. 双击打开预制体
2. 选择根节点
3. 点击"添加组件" → "脚本组件" → `BuffIconDisplay`
4. 保存预制体

### 第2步：在战斗场景添加特效播放器（必须）

打开 `assets/Scenes/BattleScene.fire`：

1. 在场景层级中创建一个空节点，命名为 `SkillEffectPlayer`
2. 选择这个节点，添加 `SkillEffectPlayer` 组件
3. 保存场景

### 第3步：运行游戏测试（完成！）

点击运行按钮，你应该能看到：
- ✅ 火球术飞行动画和爆炸效果
- ✅ 角色头顶显示Buff图标（燃烧🔥、眩晕😵等）
- ✅ Buff图标显示剩余时间
- ✅ 盾击的震荡波效果
- ✅ 狂暴的红色光环
- ✅ 战吼的波纹扩散

## 📝 已修改的代码文件（自动生效）

这些文件已经修改完成，无需手动操作：
- ✅ `SkillSystem.js` - 自动播放技能特效
- ✅ `BuffSystem.js` - 自动更新Buff图标

## 🎨 可选调整

如果Buff图标位置不合适，可以调整 `BuffIconDisplay` 组件的属性：
- `Offset Y`: 调大=图标更高，调小=图标更低（默认60）
- `Icon Size`: 图标大小（默认20）
- `Show Timer`: 是否显示倒计时（默认true）

## 🎯 效果演示

**火球术（法师）：**
```
法师 → 红色火球旋转飞行 → 到达目标 → 橙色爆炸扩散
目标头顶显示：[🔥 2.5]（燃烧，剩余2.5秒）
```

**盾击（战士）：**
```
战士 → 黄色震荡波扩散 → 目标晃动
目标头顶显示：[😵 1.0]（眩晕，剩余1.0秒）
```

**狂暴（巨狼）：**
```
巨狼 → 红色光环脉冲
自己头顶显示：[😡 2.0]（狂暴，剩余2.0秒）
```

**战吼（Boss）：**
```
Boss → 三层橙色波纹依次扩散
所有队友头顶显示：[📢 3.0]（战吼，剩余3.0秒）
```

## 🔍 故障排查

### 问题1：技能特效不显示
**解决方案：** 确认场景中有 `SkillEffectPlayer` 节点和组件

### 问题2：Buff图标不显示
**解决方案：** 确认每个角色预制体上有 `BuffIconDisplay` 组件

### 问题3：图标位置太高/太低
**解决方案：** 调整 `BuffIconDisplay` 的 `Offset Y` 属性

### 问题4：图标太小/太大
**解决方案：** 调整 `BuffIconDisplay` 的 `Icon Size` 属性

---

**完整指南请查看：** `SKILL_AND_BUFF_UI_GUIDE.md`

