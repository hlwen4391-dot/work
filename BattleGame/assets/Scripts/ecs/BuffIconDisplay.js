/**
 * Buff图标显示组件
 * 在角色头顶显示当前的Buff状态
 */
cc.Class({
    extends: cc.Component,

    properties: {
        // Buff图标容器的偏移位置
        offsetY: {
            default: 60,
            tooltip: "Buff图标容器相对于角色的Y轴偏移"
        },

        // 图标大小
        iconSize: {
            default: 20,
            tooltip: "Buff图标的大小"
        },

        // 图标间距
        iconSpacing: {
            default: 5,
            tooltip: "图标之间的间距"
        },

        // 是否显示Buff剩余时间
        showTimer: {
            default: true,
            tooltip: "是否显示Buff剩余时间"
        }
    },

    onLoad() {
        // 创建Buff图标容器
        this._createBuffContainer();

        // 存储当前显示的Buff图标
        this.buffIcons = {};
    },

    /**
     * 创建Buff图标容器
     */
    _createBuffContainer() {
        this.buffContainer = new cc.Node("BuffContainer");
        this.buffContainer.setPosition(0, this.offsetY);
        this.node.addChild(this.buffContainer);

        // 添加Layout组件自动排列图标
        const layout = this.buffContainer.addComponent(cc.Layout);
        layout.type = cc.Layout.Type.HORIZONTAL;
        layout.spacingX = this.iconSpacing;
        layout.horizontalDirection = cc.Layout.HorizontalDirection.LEFT_TO_RIGHT;
        layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
    },

    /**
     * 更新Buff显示
     * 应该在BuffSystem.addBuff和BuffSystem.update中调用
     */
    updateBuffDisplay() {
        const BuffComponent = require("BuffComponent");
        const buffs = this.node.getComponents(BuffComponent);

        // 移除已经不存在的Buff图标
        for (let buffName in this.buffIcons) {
            const exists = buffs.find(b => b.buffName === buffName);
            if (!exists) {
                this.buffIcons[buffName].destroy();
                delete this.buffIcons[buffName];
            }
        }

        // 添加或更新Buff图标
        for (let buff of buffs) {
            if (!this.buffIcons[buff.buffName]) {
                this._createBuffIcon(buff);
            } else {
                this._updateBuffIcon(buff);
            }
        }
    },

    /**
     * 创建Buff图标
     */
    _createBuffIcon(buff) {
        const iconNode = new cc.Node(`BuffIcon_${buff.buffName}`);
        iconNode.setContentSize(this.iconSize, this.iconSize);

        // 添加背景
        const bg = iconNode.addComponent(cc.Graphics);
        const halfSize = this.iconSize / 2;
        bg.roundRect(-halfSize, -halfSize, this.iconSize, this.iconSize, 3);
        bg.fillColor = this._getBuffColor(buff.buffName);
        bg.fill();
        bg.strokeColor = cc.Color.WHITE;
        bg.lineWidth = 1;
        bg.stroke();

        // 添加文字标签（显示Buff首字）
        const label = new cc.Node("Label");
        const labelComp = label.addComponent(cc.Label);
        labelComp.string = this._getBuffIcon(buff.buffName);
        labelComp.fontSize = 14;//设置字体大小
        labelComp.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
        labelComp.verticalAlign = cc.Label.VerticalAlign.CENTER;
        label.setPosition(0, 2);
        iconNode.addChild(label);

        // 如果显示计时器，添加时间文字
        if (this.showTimer) {
            const timerLabel = new cc.Node("Timer");
            const timerComp = timerLabel.addComponent(cc.Label);
            timerComp.fontSize = 10;
            timerComp.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
            timerLabel.setPosition(0, -halfSize - 8);
            timerLabel.color = cc.Color.WHITE;
            iconNode.addChild(timerLabel);
            iconNode.timerLabel = timerComp;
        }

        this.buffContainer.addChild(iconNode);
        this.buffIcons[buff.buffName] = iconNode;

        // 添加出现动画
        iconNode.scale = 0;
        cc.tween(iconNode)
            .to(0.2, { scale: 1 }, { easing: 'backOut' })
            .start();
    },

    /**
     * 更新Buff图标（主要是更新剩余时间）
     */
    _updateBuffIcon(buff) {
        const iconNode = this.buffIcons[buff.buffName];
        if (!iconNode || !iconNode.timerLabel) return;

        const remaining = Math.max(0, buff.duration - buff.elapsed);
        iconNode.timerLabel.string = remaining.toFixed(1);

        // 快要结束时闪烁提示
        if (remaining <= 1.0) {
            iconNode.opacity = 128 + Math.sin(Date.now() / 100) * 127;
        } else {
            iconNode.opacity = 255;
        }
    },

    /**
     * 获取Buff对应的颜色
     */
    _getBuffColor(buffName) {
        const colorMap = {
            "燃烧": cc.Color.RED,
            "眩晕": cc.Color.YELLOW,
            "战吼": cc.Color.ORANGE,
            "狂暴": new cc.Color(200, 50, 50),
            "护盾": cc.Color.BLUE,
            "持续恢复": new cc.Color(50, 255, 50)  // 绿色
        };
        return colorMap[buffName] || cc.Color.GRAY;
    },

    /**
     * 获取Buff对应的图标文字
     */
    _getBuffIcon(buffName) {
        const iconMap = {
            "燃烧": "🔥",
            "眩晕": "😵",
            "战吼": "📢",
            "狂暴": "😡",
            "护盾": "🛡",
            "持续恢复": "💚"  // 绿色心形，表示治疗
        };
        return iconMap[buffName] || "●";
    },

    onDestroy() {
        // 清理所有图标
        for (let buffName in this.buffIcons) {
            if (this.buffIcons[buffName] && this.buffIcons[buffName].isValid) {
                this.buffIcons[buffName].destroy();
            }
        }
        this.buffIcons = {};
    }
});

