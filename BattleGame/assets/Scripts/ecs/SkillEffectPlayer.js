/**
 * 技能特效播放器
 * 负责播放技能释放时的视觉特效
 */
cc.Class({
    extends: cc.Component,

    properties: {
        // 火球术粒子预制体（包含粒子系统的预制体）
        fireballPrefab: {
            default: null,
            type: cc.Prefab,
            tooltip: "火球术粒子预制体（FireBall.prefab）"
        },

        // 爆炸粒子预制体（可选）
        explosionPrefab: {
            default: null,
            type: cc.Prefab,
            tooltip: "爆炸粒子预制体（可选）"
        },

        // 特效持续时间
        effectDuration: {
            default: 1.0,
            tooltip: "特效持续时间（秒）"
        }
    },

    /**
     * 播放技能特效
     * @param {string} skillName - 技能名称
     * @param {cc.Node} caster - 施法者节点
     * @param {cc.Node} target - 目标节点
     */
    playSkillEffect(skillName, caster, target) {
        switch (skillName) {
            case "火球术":
                this._playFireballEffect(caster, target);
                break;
            case "盾击":
                this._playStunEffect(caster, target);
                break;
            case "狂暴":
                this._playRageEffect(caster);
                break;
            case "战吼":
                this._playWarCryEffect(caster);
                break;
            case "群体护盾":
                this._playShieldEffect(caster);
                break;
            default:
                // 默认特效
                this._playDefaultEffect(caster, target);
        }
    },

    /**
     * 火球术特效 - 使用粒子系统实现飞行弹道 + 爆炸效果
     */
    _playFireballEffect(caster, target) {
        cc.log(`[SkillEffectPlayer] ===== 开始播放火球术特效 =====`);
        cc.log(`[SkillEffectPlayer] caster: ${caster ? caster.name : 'null'}, target: ${target ? target.name : 'null'}`);

        if (!caster || !target) {
            cc.error("[SkillEffectPlayer] 火球术：caster或target为空");
            return;
        }

        const parent = caster.parent;
        if (!parent) {
            cc.error("[SkillEffectPlayer] 火球术：caster.parent为空");
            return;
        }

        cc.log(`[SkillEffectPlayer] parent节点: ${parent.name}, 子节点数量: ${parent.children.length}`);

        const startPos = caster.getPosition().add(cc.v2(0, 40)); // 起点释放位置
        const endPos = target.getPosition().add(cc.v2(0, 40)); // 终点位置

        cc.log(`[SkillEffectPlayer] 起点位置: (${startPos.x.toFixed(1)}, ${startPos.y.toFixed(1)}), 终点位置: (${endPos.x.toFixed(1)}, ${endPos.y.toFixed(1)})`);
        cc.log(`[SkillEffectPlayer] fireballPrefab: ${this.fireballPrefab ? '已绑定' : '未绑定'}`);

        let fireball = null;

        // 优先使用粒子预制体
        if (this.fireballPrefab) {
            try {
                fireball = cc.instantiate(this.fireballPrefab);
                cc.log(`[SkillEffectPlayer] 实例化粒子预制体成功`);

                // 确保节点激活
                fireball.active = true;

                parent.addChild(fireball);
                fireball.setPosition(startPos);

                cc.log(`[SkillEffectPlayer] 火球节点已添加到场景，位置: (${startPos.x.toFixed(1)}, ${startPos.y.toFixed(1)})`);
                cc.log(`[SkillEffectPlayer] 火球节点active: ${fireball.active}, 父节点: ${fireball.parent ? fireball.parent.name : 'null'}`);

                // 获取粒子系统组件并确保它正在播放
                const particleSystem = fireball.getComponent(cc.ParticleSystem);
                if (particleSystem) {
                    cc.log(`[SkillEffectPlayer] 找到粒子系统组件，isPlaying: ${particleSystem.isPlaying}`);

                    // 确保粒子系统启用
                    particleSystem.enabled = true;

                    // 如果粒子系统设置了自动播放，确保它正在运行
                    if (!particleSystem.isPlaying) {
                        particleSystem.resetSystem();
                        cc.log(`[SkillEffectPlayer] 重置并启动粒子系统`);
                    }

                    // 设置粒子系统为跟随模式（这样粒子会跟随节点移动）
                    particleSystem.positionType = cc.ParticleSystem.PositionType.RELATIVE;

                    // 强制刷新粒子系统
                    particleSystem.enabled = false;
                    particleSystem.enabled = true;

                    cc.log(`[SkillEffectPlayer] 粒子系统已配置，isPlaying: ${particleSystem.isPlaying}`);
                } else {
                    cc.warn(`[SkillEffectPlayer] 火球预制体中没有找到ParticleSystem组件`);
                }

                // 计算方向角度
                let dir = endPos.sub(startPos);
                let rad = Math.atan2(dir.y, dir.x);
                fireball.angle = -(rad * 180 / Math.PI) + 90;
                cc.log(`[SkillEffectPlayer] 火球角度: ${fireball.angle.toFixed(1)}度`);

                cc.log("[SkillEffectPlayer] 使用粒子预制体播放火球术特效");
            } catch (e) {
                cc.error(`[SkillEffectPlayer] 实例化粒子预制体失败: ${e.message}`);
                fireball = null;
            }
        }

        // 如果没有预制体或实例化失败，使用Graphics绘制
        if (!fireball) {
            cc.warn("[SkillEffectPlayer] 未找到火球粒子预制体或实例化失败，使用Graphics绘制");

            // 回退方案：使用Graphics绘制火球（即使没有预制体也能显示）
            fireball = new cc.Node("Fireball");
            fireball.active = true;
            fireball.setPosition(startPos);

            // 添加图形组件（使用圆形代表火球）
            const graphics = fireball.addComponent(cc.Graphics);
            graphics.circle(0, 0, 15);
            graphics.fillColor = cc.Color.RED;
            graphics.fill();

            // 添加光晕效果
            graphics.circle(0, 0, 20);
            graphics.strokeColor = cc.Color.ORANGE;
            graphics.lineWidth = 3;
            graphics.stroke();

            parent.addChild(fireball);

            // 计算方向角度
            let dir = endPos.sub(startPos);
            let rad = Math.atan2(dir.y, dir.x);
            fireball.angle = -(rad * 180 / Math.PI) + 90;

            cc.log(`[SkillEffectPlayer] Graphics火球已创建并添加到场景`);
        }

        // 飞行时间（速度越大，飞行时间越短）
        const flySpeed = 1000; // 像素/秒，可自调
        let dir = endPos.sub(startPos);
        const distance = dir.mag(); // 距离

        // 飞行动画
        const flyTime = Math.max(0.1, distance / flySpeed); // 至少0.1秒，避免除零
        cc.log(`[SkillEffectPlayer] 飞行时间: ${flyTime.toFixed(2)}秒, 距离: ${distance.toFixed(1)}像素`);

        // 确保节点在正确的层级（放在最上层）
        fireball.setSiblingIndex(parent.children.length - 1);
        cc.log(`[SkillEffectPlayer] 火球节点层级: ${fireball.getSiblingIndex()}`);

        // 创建位置更新函数，用于在飞行过程中更新粒子位置
        let currentPos = startPos;
        const updatePosition = () => {
            if (fireball && fireball.isValid && fireball.active) {
                fireball.setPosition(currentPos);
            }
        };

        cc.log(`[SkillEffectPlayer] 开始火球飞行动画`);
        cc.tween(fireball)
            .to(flyTime, { position: endPos }, {
                easing: 'sineOut',
                onUpdate: (target, ratio) => {
                    // 实时更新位置（用于粒子系统跟随）
                    currentPos = cc.v2(
                        startPos.x + (endPos.x - startPos.x) * ratio,
                        startPos.y + (endPos.y - startPos.y) * ratio
                    );
                    updatePosition();
                }
            })
            .call(() => {
                cc.log(`[SkillEffectPlayer] 火球到达目标位置`);
                // 到达目标后播放爆炸效果
                this._playExplosionEffect(target);

                // 延迟销毁火球节点（给粒子一些时间消失）
                this.scheduleOnce(() => {
                    if (fireball && fireball.isValid) {
                        cc.log(`[SkillEffectPlayer] 销毁火球节点`);
                        // 停止粒子系统
                        const particleSystem = fireball.getComponent(cc.ParticleSystem);
                        if (particleSystem) {
                            particleSystem.stopSystem();
                        }
                        fireball.destroy();
                    }
                }, 0.5); // 延迟0.5秒销毁，让粒子自然消失
            })
            .start();

        // 旋转动画（可选，如果粒子系统不需要旋转可以注释掉）
        cc.tween(fireball)
            .by(flyTime, { angle: 360 })
            .start();

        cc.log(`[SkillEffectPlayer] ===== 火球术特效播放完成 =====`);
        cc.log(`[SkillEffectPlayer] 火球术特效已播放：从 (${startPos.x.toFixed(0)}, ${startPos.y.toFixed(0)}) 到 (${endPos.x.toFixed(0)}, ${endPos.y.toFixed(0)})`);
    },

    /**
     * 爆炸特效 - 支持粒子系统或Graphics绘制
     */
    _playExplosionEffect(target) {
        if (!target || !target.parent) {
            cc.error("[SkillEffectPlayer] 爆炸特效：target或target.parent为空");
            return;
        }

        const explosionPos = target.getPosition();

        // 如果绑定了爆炸粒子预制体，使用粒子系统
        if (this.explosionPrefab) {
            const explosion = cc.instantiate(this.explosionPrefab);
            target.parent.addChild(explosion);
            explosion.setPosition(explosionPos);

            // 获取粒子系统组件
            const particleSystem = explosion.getComponent(cc.ParticleSystem);
            if (particleSystem) {
                // 确保粒子系统正在播放
                if (!particleSystem.isPlaying) {
                    particleSystem.resetSystem();
                }
                // 设置自动移除（粒子播放完成后自动销毁节点）
                particleSystem.autoRemoveOnFinish = true;
            } else {
                // 如果没有粒子系统，延迟销毁
                this.scheduleOnce(() => {
                    if (explosion && explosion.isValid) {
                        explosion.destroy();
                    }
                }, 1.0);
            }

            cc.log("[SkillEffectPlayer] 使用粒子系统播放爆炸特效");
        } else {
            // 回退方案：使用Graphics绘制爆炸效果
            const explosion = new cc.Node("Explosion");
            explosion.setPosition(explosionPos);

            const graphics = explosion.addComponent(cc.Graphics);
            graphics.circle(0, 0, 30);
            graphics.fillColor = cc.Color.ORANGE;
            graphics.fill();

            target.parent.addChild(explosion);

            // 爆炸扩散 + 淡出动画
            cc.tween(explosion)
                .to(0.3, { scale: 2, opacity: 0 })
                .call(() => {
                    explosion.destroy();
                })
                .start();

            cc.log("[SkillEffectPlayer] 使用Graphics绘制爆炸特效");
        }
    },

    /**
     * 盾击特效 - 震荡波
     */
    _playStunEffect(caster, target) {
        const shockwave = new cc.Node("Shockwave");
        shockwave.setPosition(target.getPosition());

        const graphics = shockwave.addComponent(cc.Graphics);
        graphics.circle(0, 0, 25);
        graphics.strokeColor = cc.Color.YELLOW;
        graphics.lineWidth = 5;
        graphics.stroke();

        target.parent.addChild(shockwave);

        // 震荡波扩散动画
        cc.tween(shockwave)
            .to(0.4, { scale: 2, opacity: 0 })
            .call(() => {
                shockwave.destroy();
            })
            .start();

        // 目标晃动效果
        const originalPos = target.getPosition();
        cc.tween(target)
            .by(0.05, { x: 5 })
            .by(0.05, { x: -10 })
            .by(0.05, { x: 10 })
            .by(0.05, { x: -5 })
            .to(0.05, { position: originalPos })
            .start();
    },

    /**
     * 狂暴特效 - 红色光环
     */
    _playRageEffect(caster) {
        const aura = new cc.Node("RageAura");
        aura.setPosition(0, 0);

        const graphics = aura.addComponent(cc.Graphics);
        graphics.circle(0, 0, 40);
        graphics.strokeColor = cc.Color.RED;
        graphics.lineWidth = 3;
        graphics.stroke();

        caster.addChild(aura);

        // 脉冲动画
        cc.tween(aura)
            .to(0.3, { scale: 1.3, opacity: 150 })
            .to(0.3, { scale: 1.0, opacity: 255 })
            .call(() => {
                aura.destroy();
            })
            .start();
    },

    /**
     * 战吼特效 - 扩散波纹
     */
    _playWarCryEffect(caster) {
        for (let i = 0; i < 3; i++) {
            this.scheduleOnce(() => {
                const wave = new cc.Node("WarCryWave");
                wave.setPosition(caster.getPosition());

                const graphics = wave.addComponent(cc.Graphics);
                graphics.circle(0, 0, 30);
                graphics.strokeColor = cc.Color.ORANGE;
                graphics.lineWidth = 4;
                graphics.stroke();

                caster.parent.addChild(wave);

                // 波纹扩散
                cc.tween(wave)
                    .to(1.0, { scale: 4, opacity: 0 })
                    .call(() => {
                        wave.destroy();
                    })
                    .start();
            }, i * 0.2);
        }
    },

    /**
     * 护盾特效 - 蓝色护盾
     */
    _playShieldEffect(caster) {
        const shield = new cc.Node("ShieldEffect");
        shield.setPosition(caster.getPosition());

        const graphics = shield.addComponent(cc.Graphics);
        graphics.circle(0, 0, 35);
        graphics.fillColor = new cc.Color(100, 150, 255, 100);
        graphics.fill();
        graphics.circle(0, 0, 35);
        graphics.strokeColor = cc.Color.BLUE;
        graphics.lineWidth = 3;
        graphics.stroke();

        caster.parent.addChild(shield);

        // 护盾展开动画
        shield.scale = 0;
        cc.tween(shield)
            .to(0.3, { scale: 1 })
            .delay(0.3)
            .to(0.3, { opacity: 0 })
            .call(() => {
                shield.destroy();
            })
            .start();
    },

    /**
     * 默认特效 - 简单闪光
     */
    _playDefaultEffect(caster, target) {
        const flash = new cc.Node("Flash");
        flash.setPosition(target.getPosition());

        const graphics = flash.addComponent(cc.Graphics);
        graphics.circle(0, 0, 20);
        graphics.fillColor = cc.Color.WHITE;
        graphics.fill();

        target.parent.addChild(flash);

        cc.tween(flash)
            .to(0.2, { scale: 1.5, opacity: 0 })
            .call(() => {
                flash.destroy();
            })
            .start();
    }
});

