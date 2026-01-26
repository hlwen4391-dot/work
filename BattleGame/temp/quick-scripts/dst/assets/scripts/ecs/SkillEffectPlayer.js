
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ecs/SkillEffectPlayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6e9f9bKfAhGyaOmIK0RMZQ1', 'SkillEffectPlayer');
// Scripts/ecs/SkillEffectPlayer.js

"use strict";

/**
 * 技能特效播放器
 * 负责播放技能释放时的视觉特效
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    // 火球术粒子预制体（包含粒子系统的预制体）
    fireballPrefab: {
      "default": null,
      type: cc.Prefab,
      tooltip: "火球术粒子预制体（FireBall.prefab）"
    },
    // 爆炸粒子预制体（可选）
    explosionPrefab: {
      "default": null,
      type: cc.Prefab,
      tooltip: "爆炸粒子预制体（可选）"
    },
    // 兽化狂暴粒子预制体（可选）
    beastRageParticlePrefab: {
      "default": null,
      type: cc.Prefab,
      tooltip: "兽化狂暴粒子预制体（可选）"
    },
    // 治疗术粒子预制体（可选）
    healParticlePrefab: {
      "default": null,
      type: cc.Prefab,
      tooltip: "治疗术粒子预制体（修女释放治疗术时显示）"
    },
    // 特效持续时间
    effectDuration: {
      "default": 1.0,
      tooltip: "特效持续时间（秒）"
    }
  },
  /**
   * 播放技能特效
   * @param {string} skillName - 技能名称
   * @param {cc.Node} caster - 施法者节点
   * @param {cc.Node} target - 目标节点
   */
  playSkillEffect: function playSkillEffect(skillName, caster, target) {
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
      case "兽化狂暴":
        this._playBeastRageEffect(caster);
        break;
      case "战吼":
        this._playWarCryEffect(caster);
        break;
      case "群体护盾":
        this._playShieldEffect(caster);
        break;
      case "治疗术":
        this._playHealEffect(caster);
        break;
      case "净化术":
        this._playCleanseEffect(caster);
        break;
      case "普通攻击":
        // 检查是否是远程攻击
        var attackMover = caster.getComponent("AttackMover");
        if (attackMover && attackMover.isRanged) {
          // 远程攻击：弹道特效由AttackMover处理，这里不需要显示
          // AttackMover会创建弹道节点并移动到目标附近
        }
        // 近战攻击：不显示特效（已经有移动动画）
        break;
      default:
      // 默认特效（已注释 - 白点闪光特效）
      // this._playDefaultEffect(caster, target);
    }
  },
  /**
   * 火球术特效 - 使用粒子系统实现飞行弹道 + 爆炸效果
   */
  _playFireballEffect: function _playFireballEffect(caster, target) {
    var _this = this;
    // cc.log(`[SkillEffectPlayer] ===== 开始播放火球术特效 =====`);
    // cc.log(`[SkillEffectPlayer] caster: ${caster ? caster.name : 'null'}, target: ${target ? target.name : 'null'}`);

    if (!caster || !target) {
      cc.error("[SkillEffectPlayer] 火球术：caster或target为空");
      return;
    }
    var parent = caster.parent;
    if (!parent) {
      cc.error("[SkillEffectPlayer] 火球术：caster.parent为空");
      return;
    }

    // cc.log(`[SkillEffectPlayer] parent节点: ${parent.name}, 子节点数量: ${parent.children.length}`);

    // 获取世界坐标，然后转换为父节点的本地坐标
    // 起点：施法者的世界坐标
    var casterWorldPos = caster.parent ? caster.parent.convertToWorldSpaceAR(caster.position) : caster.position;
    var startPos = parent.convertToNodeSpaceAR(casterWorldPos).add(cc.v2(0, 40)); // 起点释放位置

    // 终点：目标的世界坐标
    var targetWorldPos = target.parent ? target.parent.convertToWorldSpaceAR(target.position) : target.position;
    var endPos = parent.convertToNodeSpaceAR(targetWorldPos).add(cc.v2(0, 40)); // 终点位置

    // cc.log(`[SkillEffectPlayer] 起点位置: (${startPos.x.toFixed(1)}, ${startPos.y.toFixed(1)}), 终点位置: (${endPos.x.toFixed(1)}, ${endPos.y.toFixed(1)})`);
    // cc.log(`[SkillEffectPlayer] 施法者世界坐标: (${casterWorldPos.x.toFixed(1)}, ${casterWorldPos.y.toFixed(1)}), 目标世界坐标: (${targetWorldPos.x.toFixed(1)}, ${targetWorldPos.y.toFixed(1)})`);
    // cc.log(`[SkillEffectPlayer] fireballPrefab: ${this.fireballPrefab ? '已绑定' : '未绑定'}`);

    var fireball = null;

    // 优先使用粒子预制体
    if (this.fireballPrefab) {
      try {
        fireball = cc.instantiate(this.fireballPrefab);
        // cc.log(`[SkillEffectPlayer] 实例化粒子预制体成功`);

        // 确保节点激活
        fireball.active = true;
        parent.addChild(fireball);
        fireball.setPosition(startPos);

        // cc.log(`[SkillEffectPlayer] 火球节点已添加到场景，位置: (${startPos.x.toFixed(1)}, ${startPos.y.toFixed(1)})`);
        // cc.log(`[SkillEffectPlayer] 火球节点active: ${fireball.active}, 父节点: ${fireball.parent ? fireball.parent.name : 'null'}`);

        // 获取粒子系统组件并确保它正在播放
        var particleSystem = fireball.getComponent(cc.ParticleSystem);
        if (particleSystem) {
          // cc.log(`[SkillEffectPlayer] 找到粒子系统组件，isPlaying: ${particleSystem.isPlaying}`);

          // 确保粒子系统启用
          particleSystem.enabled = true;

          // 如果粒子系统设置了自动播放，确保它正在运行
          if (!particleSystem.isPlaying) {
            particleSystem.resetSystem();
            // cc.log(`[SkillEffectPlayer] 重置并启动粒子系统`);
          }

          // 设置粒子系统为跟随模式（这样粒子会跟随节点移动）
          particleSystem.positionType = cc.ParticleSystem.PositionType.RELATIVE;

          // 强制刷新粒子系统
          particleSystem.enabled = false;
          particleSystem.enabled = true;

          // cc.log(`[SkillEffectPlayer] 粒子系统已配置，isPlaying: ${particleSystem.isPlaying}`);
        } else {
          cc.warn("[SkillEffectPlayer] \u706B\u7403\u9884\u5236\u4F53\u4E2D\u6CA1\u6709\u627E\u5230ParticleSystem\u7EC4\u4EF6");
        }

        // 计算方向角度
        var _dir = endPos.sub(startPos);
        var rad = Math.atan2(_dir.y, _dir.x);
        fireball.angle = -(rad * 180 / Math.PI) + 90;
        // cc.log(`[SkillEffectPlayer] 火球角度: ${fireball.angle.toFixed(1)}度`);

        // cc.log("[SkillEffectPlayer] 使用粒子预制体播放火球术特效");
      } catch (e) {
        cc.error("[SkillEffectPlayer] \u5B9E\u4F8B\u5316\u7C92\u5B50\u9884\u5236\u4F53\u5931\u8D25: " + e.message);
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
      var graphics = fireball.addComponent(cc.Graphics);
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
      var _dir2 = endPos.sub(startPos);
      var _rad = Math.atan2(_dir2.y, _dir2.x);
      fireball.angle = -(_rad * 180 / Math.PI) + 90;

      // cc.log(`[SkillEffectPlayer] Graphics火球已创建并添加到场景`);
    }

    // 飞行时间（速度越大，飞行时间越短）
    var flySpeed = 1000; // 像素/秒，可自调
    var dir = endPos.sub(startPos);
    var distance = dir.mag(); // 距离

    // 飞行动画
    var flyTime = Math.max(0.1, distance / flySpeed); // 至少0.1秒，避免除零
    // cc.log(`[SkillEffectPlayer] 飞行时间: ${flyTime.toFixed(2)}秒, 距离: ${distance.toFixed(1)}像素`);

    // 确保节点在正确的层级（放在最上层）
    fireball.setSiblingIndex(parent.children.length - 1);
    // cc.log(`[SkillEffectPlayer] 火球节点层级: ${fireball.getSiblingIndex()}`);

    // 创建位置更新函数，用于在飞行过程中更新粒子位置
    var currentPos = startPos;
    var updatePosition = function updatePosition() {
      if (fireball && fireball.isValid && fireball.active) {
        fireball.setPosition(currentPos);
      }
    };

    // cc.log(`[SkillEffectPlayer] 开始火球飞行动画`);
    cc.tween(fireball).to(flyTime, {
      position: endPos
    }, {
      easing: 'sineOut',
      onUpdate: function onUpdate(target, ratio) {
        // 实时更新位置（用于粒子系统跟随）
        currentPos = cc.v2(startPos.x + (endPos.x - startPos.x) * ratio, startPos.y + (endPos.y - startPos.y) * ratio);
        updatePosition();
      }
    }).call(function () {
      // cc.log(`[SkillEffectPlayer] 火球到达目标位置`);
      // 到达目标后播放爆炸效果
      _this._playExplosionEffect(target);

      // 延迟销毁火球节点（给粒子一些时间消失）
      _this.scheduleOnce(function () {
        if (fireball && fireball.isValid) {
          // cc.log(`[SkillEffectPlayer] 销毁火球节点`);
          // 停止粒子系统
          var _particleSystem = fireball.getComponent(cc.ParticleSystem);
          if (_particleSystem) {
            _particleSystem.stopSystem();
          }
          fireball.destroy();
        }
      }, 0.5); // 延迟0.5秒销毁，让粒子自然消失
    }).start();

    // 旋转动画（可选，如果粒子系统不需要旋转可以注释掉）
    cc.tween(fireball).by(flyTime, {
      angle: 360
    }).start();

    // cc.log(`[SkillEffectPlayer] ===== 火球术特效播放完成 =====`);
    // cc.log(`[SkillEffectPlayer] 火球术特效已播放：从 (${startPos.x.toFixed(0)}, ${startPos.y.toFixed(0)}) 到 (${endPos.x.toFixed(0)}, ${endPos.y.toFixed(0)})`);
  },
  /**
   * 爆炸特效 - 支持粒子系统或Graphics绘制
   */
  _playExplosionEffect: function _playExplosionEffect(target) {
    if (!target || !target.parent) {
      cc.error("[SkillEffectPlayer] 爆炸特效：target或target.parent为空");
      return;
    }
    var explosionPos = target.getPosition();

    // 如果绑定了爆炸粒子预制体，使用粒子系统
    if (this.explosionPrefab) {
      var explosion = cc.instantiate(this.explosionPrefab);
      target.parent.addChild(explosion);
      explosion.setPosition(explosionPos);

      // 获取粒子系统组件
      var particleSystem = explosion.getComponent(cc.ParticleSystem);
      if (particleSystem) {
        // 确保粒子系统正在播放
        if (!particleSystem.isPlaying) {
          particleSystem.resetSystem();
        }
        // 设置自动移除（粒子播放完成后自动销毁节点）
        particleSystem.autoRemoveOnFinish = true;
      } else {
        // 如果没有粒子系统，延迟销毁
        this.scheduleOnce(function () {
          if (explosion && explosion.isValid) {
            explosion.destroy();
          }
        }, 1.0);
      }

      // cc.log("[SkillEffectPlayer] 使用粒子系统播放爆炸特效");
    } else {
      // 回退方案：使用Graphics绘制爆炸效果
      var _explosion = new cc.Node("Explosion");
      _explosion.setPosition(explosionPos);
      var graphics = _explosion.addComponent(cc.Graphics);
      graphics.circle(0, 0, 30);
      graphics.fillColor = cc.Color.ORANGE;
      graphics.fill();
      target.parent.addChild(_explosion);

      // 爆炸扩散 + 淡出动画
      cc.tween(_explosion).to(0.3, {
        scale: 2,
        opacity: 0
      }).call(function () {
        _explosion.destroy();
      }).start();

      // cc.log("[SkillEffectPlayer] 使用Graphics绘制爆炸特效");
    }
  },
  /**
   * 盾击特效 - 震荡波
   */
  _playStunEffect: function _playStunEffect(caster, target) {
    var shockwave = new cc.Node("Shockwave");
    shockwave.setPosition(target.getPosition());
    var graphics = shockwave.addComponent(cc.Graphics);
    graphics.circle(0, 0, 25);
    graphics.strokeColor = cc.Color.YELLOW;
    graphics.lineWidth = 5;
    graphics.stroke();
    target.parent.addChild(shockwave);

    // 震荡波扩散动画
    cc.tween(shockwave).to(0.4, {
      scale: 2,
      opacity: 0
    }).call(function () {
      shockwave.destroy();
    }).start();

    // 目标晃动效果
    var originalPos = target.getPosition();
    cc.tween(target).by(0.05, {
      x: 5
    }).by(0.05, {
      x: -10
    }).by(0.05, {
      x: 10
    }).by(0.05, {
      x: -5
    }).to(0.05, {
      position: originalPos
    }).start();
  },
  /**
   * 狂暴特效 - 红色光环
   */
  _playRageEffect: function _playRageEffect(caster) {
    var aura = new cc.Node("RageAura");
    aura.setPosition(0, 0);
    var graphics = aura.addComponent(cc.Graphics);
    graphics.circle(0, 0, 40);
    graphics.strokeColor = cc.Color.RED;
    graphics.lineWidth = 3;
    graphics.stroke();
    caster.addChild(aura);

    // 脉冲动画
    cc.tween(aura).to(0.3, {
      scale: 1.3,
      opacity: 150
    }).to(0.3, {
      scale: 1.0,
      opacity: 255
    }).call(function () {
      aura.destroy();
    }).start();
  },
  /**
   * 兽化狂暴特效 - 持续显示直到Buff结束
   */
  _playBeastRageEffect: function _playBeastRageEffect(caster) {
    if (!caster || !caster.isValid) {
      cc.error("[SkillEffectPlayer] 兽化狂暴：caster为空");
      return;
    }

    // cc.log(`[SkillEffectPlayer] 播放兽化狂暴特效：${caster.name}`);

    // 保存原始状态（如果还没有保存）
    if (!caster._beastRageOriginalScaleX) {
      caster._beastRageOriginalScaleX = caster.scaleX;
      caster._beastRageOriginalScaleY = caster.scaleY;
      caster._beastRageOriginalColor = caster.color.clone();
    }

    // 1. 怪物变大（持续显示）
    var beastScale = 1.2; // 变大20%
    cc.tween(caster).to(0.2, {
      scaleX: caster._beastRageOriginalScaleX * beastScale,
      scaleY: caster._beastRageOriginalScaleY * beastScale
    }, {
      easing: 'backOut'
    }).start();

    // 2. 颜色变红（持续显示）
    var rageColor = new cc.Color(255, 100, 100);
    cc.tween(caster).to(0.2, {
      color: rageColor
    }).start();

    // 3. 初始脉冲效果（一次性）
    this._playBeastRagePulse(caster);
  },
  /**
   * 播放初始脉冲效果（一次性）
   */
  _playBeastRagePulse: function _playBeastRagePulse(caster) {
    // 创建脉冲圆圈
    var pulse = new cc.Node("BeastRagePulse");
    pulse.setPosition(0, 0);
    var graphics = pulse.addComponent(cc.Graphics);
    graphics.circle(0, 0, 40);
    graphics.strokeColor = cc.Color.RED;
    graphics.lineWidth = 4;
    graphics.stroke();
    caster.addChild(pulse);

    // 脉冲扩散动画（一次性）
    pulse.scale = 0.5;
    pulse.opacity = 255;
    cc.tween(pulse).to(0.3, {
      scale: 1.5,
      opacity: 200
    }).to(0.2, {
      scale: 2.0,
      opacity: 0
    }).call(function () {
      if (pulse && pulse.isValid) {
        pulse.destroy();
      }
    }).start();
  },
  /**
   * 移除兽化狂暴特效
   */
  stopBeastRageEffect: function stopBeastRageEffect(caster) {
    if (!caster || !caster.isValid) return;

    // cc.log(`[SkillEffectPlayer] 移除兽化狂暴特效：${caster.name}`);

    // 恢复缩放
    if (caster._beastRageOriginalScaleX) {
      cc.tween(caster).to(0.3, {
        scaleX: caster._beastRageOriginalScaleX,
        scaleY: caster._beastRageOriginalScaleY
      }, {
        easing: 'backIn'
      }).start();
    }

    // 恢复颜色
    if (caster._beastRageOriginalColor) {
      cc.tween(caster).to(0.3, {
        color: caster._beastRageOriginalColor
      }).start();
    }
  },
  /**
   * 战吼特效 - 扩散波纹（一次性）
   */
  _playWarCryEffect: function _playWarCryEffect(caster) {
    var _this2 = this;
    for (var i = 0; i < 3; i++) {
      this.scheduleOnce(function () {
        _this2._createWarCryWave(caster);
      }, i * 0.2);
    }
  },
  /**
   * 创建单个战吼波纹
   */
  _createWarCryWave: function _createWarCryWave(caster) {
    if (!caster || !caster.isValid || !caster.parent) return;
    var wave = new cc.Node("WarCryWave");
    wave.setPosition(caster.getPosition());
    var graphics = wave.addComponent(cc.Graphics);
    graphics.circle(0, 0, 30);
    graphics.strokeColor = cc.Color.ORANGE;
    graphics.lineWidth = 4;
    graphics.stroke();
    caster.parent.addChild(wave);

    // 波纹扩散（范围调大：从scale: 4改为scale: 6）
    wave.scale = 1;
    cc.tween(wave).to(1.0, {
      scale: 6,
      opacity: 0
    }).call(function () {
      if (wave && wave.isValid) {
        wave.destroy();
      }
    }).start();
  },
  /**
   * 启动战吼持续波纹效果
   */
  _startWarCryContinuousWaves: function _startWarCryContinuousWaves(caster) {
    var _this3 = this;
    if (!caster || !caster.isValid) {
      cc.error("[SkillEffectPlayer] 战吼持续波纹：caster为空");
      return;
    }

    // 如果已经在运行，先停止
    this._stopWarCryContinuousWaves(caster);

    // cc.log(`[SkillEffectPlayer] 启动战吼持续波纹：${caster.name}`);

    // 标记正在运行
    caster._warCryWavesActive = true;

    // 立即播放一次波纹
    this._createWarCryWave(caster);

    // 每隔0.8秒播放一次波纹（持续3秒，共约4次）
    var waveInterval = 0.8;
    var scheduleWave = function scheduleWave() {
      if (!caster || !caster.isValid || !caster._warCryWavesActive) {
        return;
      }
      _this3._createWarCryWave(caster);
      _this3.scheduleOnce(scheduleWave, waveInterval);
    };
    this.scheduleOnce(scheduleWave, waveInterval);
  },
  /**
   * 停止战吼持续波纹效果
   */
  _stopWarCryContinuousWaves: function _stopWarCryContinuousWaves(caster) {
    if (!caster || !caster.isValid) return;

    // cc.log(`[SkillEffectPlayer] 停止战吼持续波纹：${caster.name}`);
    caster._warCryWavesActive = false;
  },
  /**
   * 护盾特效 - 蓝色护盾
   */
  _playShieldEffect: function _playShieldEffect(caster) {
    var shield = new cc.Node("ShieldEffect");
    shield.setPosition(caster.getPosition());
    var graphics = shield.addComponent(cc.Graphics);
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
    cc.tween(shield).to(0.3, {
      scale: 1
    }).delay(0.3).to(0.3, {
      opacity: 0
    }).call(function () {
      shield.destroy();
    }).start();
  },
  /**
   * 治疗术特效 - 使用粒子系统
   * 持续时间跟随Buff持续时间（3秒）
   */
  _playHealEffect: function _playHealEffect(caster) {
    var _this4 = this;
    if (!caster || !caster.isValid) {
      cc.error("[SkillEffectPlayer] 治疗术：caster为空");
      return;
    }

    // 检查是否有粒子预制体
    if (!this.healParticlePrefab) {
      cc.warn("[SkillEffectPlayer] 未找到治疗术粒子预制体，请绑定 Heal Particle Prefab");
      return;
    }

    // 获取Buff持续时间（从BuffRegistry获取healOverTime的duration）
    var BuffRegistry = require("BuffRegistry");
    var healBuffDuration = BuffRegistry.healOverTime ? BuffRegistry.healOverTime.duration : 3.0; // 默认3秒

    try {
      var healParticle = cc.instantiate(this.healParticlePrefab);
      if (!healParticle) {
        cc.error("[SkillEffectPlayer] 实例化治疗术粒子预制体失败");
        return;
      }

      // 将粒子特效添加到施法者节点上（跟随施法者）
      healParticle.setPosition(0, 0); // 相对于施法者的位置（中心）
      caster.addChild(healParticle);

      // 获取粒子系统组件并确保它正在播放
      var particleSystem = healParticle.getComponent(cc.ParticleSystem);
      if (particleSystem) {
        // 确保粒子系统启用
        particleSystem.enabled = true;

        // 如果粒子系统设置了自动播放，确保它正在运行
        if (!particleSystem.isPlaying) {
          particleSystem.resetSystem();
        }

        // 设置粒子系统为跟随模式（这样粒子会跟随节点移动）
        particleSystem.positionType = cc.ParticleSystem.PositionType.RELATIVE;

        // 强制刷新粒子系统
        particleSystem.enabled = false;
        particleSystem.enabled = true;
        cc.log("[SkillEffectPlayer] \u4F7F\u7528\u7C92\u5B50\u7CFB\u7EDF\u64AD\u653E\u6CBB\u7597\u672F\u7279\u6548\uFF0C\u6301\u7EED\u65F6\u95F4: " + healBuffDuration + "\u79D2");
      } else {
        cc.warn("[SkillEffectPlayer] \u6CBB\u7597\u672F\u9884\u5236\u4F53\u4E2D\u6CA1\u6709\u627E\u5230ParticleSystem\u7EC4\u4EF6");
      }

      // 延迟销毁粒子节点（持续时间跟随Buff持续时间）
      this.scheduleOnce(function () {
        if (healParticle && healParticle.isValid) {
          // 停止粒子系统
          var _particleSystem2 = healParticle.getComponent(cc.ParticleSystem);
          if (_particleSystem2) {
            _particleSystem2.stopSystem();
          }
          // 延迟销毁，让粒子自然消失
          _this4.scheduleOnce(function () {
            if (healParticle && healParticle.isValid) {
              healParticle.destroy();
            }
          }, 0.5);
        }
      }, healBuffDuration); // 使用Buff持续时间（3秒）
    } catch (e) {
      cc.error("[SkillEffectPlayer] \u5B9E\u4F8B\u5316\u6CBB\u7597\u672F\u7C92\u5B50\u9884\u5236\u4F53\u5931\u8D25: " + e.message);
    }
  },
  /**
   * 净化术特效 - 白色光环扩散
   */
  _playCleanseEffect: function _playCleanseEffect(caster) {
    if (!caster || !caster.isValid || !caster.parent) return;

    // 创建净化光环
    var cleanseAura = new cc.Node("CleanseAura");
    cleanseAura.setPosition(caster.getPosition());
    var graphics = cleanseAura.addComponent(cc.Graphics);

    // 绘制多个同心圆（净化光环效果）
    for (var i = 0; i < 3; i++) {
      var radius = 40 + i * 20;
      graphics.circle(0, 0, radius);
      graphics.strokeColor = new cc.Color(255, 255, 255, 200 - i * 50); // 白色，逐渐透明
      graphics.lineWidth = 3;
      graphics.stroke();
    }

    // 填充中心区域（可选）
    graphics.circle(0, 0, 40);
    graphics.fillColor = new cc.Color(255, 255, 255, 80); // 淡白色填充
    graphics.fill();
    caster.parent.addChild(cleanseAura);

    // 光环扩散 + 淡出动画
    cleanseAura.scale = 0.5;
    cc.tween(cleanseAura).to(0.3, {
      scale: 1.5,
      opacity: 200
    }).to(0.4, {
      scale: 2.5,
      opacity: 0
    }).call(function () {
      if (cleanseAura && cleanseAura.isValid) {
        cleanseAura.destroy();
      }
    }).start();
  },
  /**
   * 远程普通攻击特效 - 弹道飞向目标
   * @param {cc.Node} caster - 施法者节点
   * @param {cc.Node} target - 目标节点
   */
  _playRangedAttackEffect: function _playRangedAttackEffect(caster, target) {
    if (!caster || !target) {
      return;
    }
    var parent = caster.parent;
    if (!parent) {
      return;
    }

    // 创建弹道节点
    var projectile = new cc.Node("RangedProjectile");

    // 使用Graphics绘制一个点（黑点或白点）
    var graphics = projectile.addComponent(cc.Graphics);
    graphics.circle(0, 0, 8); // 半径为8的圆点
    graphics.fillColor = cc.Color.BLACK; // 黑色点（可以改为WHITE使用白点）
    graphics.fill();

    // 获取起始位置和目标位置（转换为世界坐标）
    var casterWorldPos = caster.convertToWorldSpaceAR(cc.v2(0, 0));
    var targetWorldPos = target.convertToWorldSpaceAR(cc.v2(0, 0));

    // 转换为父节点的本地坐标
    var startPos = parent.convertToNodeSpaceAR(casterWorldPos);
    var endPos = parent.convertToNodeSpaceAR(targetWorldPos);

    // 设置初始位置
    projectile.setPosition(startPos);
    parent.addChild(projectile);

    // 计算飞行距离和时间
    var distance = startPos.sub(endPos).mag();
    var flySpeed = 800; // 飞行速度（像素/秒）
    var flyTime = distance / flySpeed;

    // 播放飞行动画
    cc.tween(projectile).to(flyTime, {
      position: endPos
    }, {
      easing: 'linear'
    }).call(function () {
      // 到达目标后销毁
      if (projectile && projectile.isValid) {
        projectile.destroy();
      }
    }).start();
  }
  /**
   * 默认特效 - 简单闪光（已注释）
   */
  // _playDefaultEffect(caster, target) {
  //     const flash = new cc.Node("Flash");
  //     flash.setPosition(target.getPosition());
  //     const graphics = flash.addComponent(cc.Graphics);
  //     graphics.circle(0, 0, 20);
  //     graphics.fillColor = cc.Color.WHITE;
  //     graphics.fill();
  //     target.parent.addChild(flash);
  //     cc.tween(flash)
  //         .to(0.2, { scale: 1.5, opacity: 0 })
  //         .call(() => {
  //             flash.destroy();
  //         })
  //         .start();
  // }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxTa2lsbEVmZmVjdFBsYXllci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImZpcmViYWxsUHJlZmFiIiwidHlwZSIsIlByZWZhYiIsInRvb2x0aXAiLCJleHBsb3Npb25QcmVmYWIiLCJiZWFzdFJhZ2VQYXJ0aWNsZVByZWZhYiIsImhlYWxQYXJ0aWNsZVByZWZhYiIsImVmZmVjdER1cmF0aW9uIiwicGxheVNraWxsRWZmZWN0Iiwic2tpbGxOYW1lIiwiY2FzdGVyIiwidGFyZ2V0IiwiX3BsYXlGaXJlYmFsbEVmZmVjdCIsIl9wbGF5U3R1bkVmZmVjdCIsIl9wbGF5UmFnZUVmZmVjdCIsIl9wbGF5QmVhc3RSYWdlRWZmZWN0IiwiX3BsYXlXYXJDcnlFZmZlY3QiLCJfcGxheVNoaWVsZEVmZmVjdCIsIl9wbGF5SGVhbEVmZmVjdCIsIl9wbGF5Q2xlYW5zZUVmZmVjdCIsImF0dGFja01vdmVyIiwiZ2V0Q29tcG9uZW50IiwiaXNSYW5nZWQiLCJfdGhpcyIsImVycm9yIiwicGFyZW50IiwiY2FzdGVyV29ybGRQb3MiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJwb3NpdGlvbiIsInN0YXJ0UG9zIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJhZGQiLCJ2MiIsInRhcmdldFdvcmxkUG9zIiwiZW5kUG9zIiwiZmlyZWJhbGwiLCJpbnN0YW50aWF0ZSIsImFjdGl2ZSIsImFkZENoaWxkIiwic2V0UG9zaXRpb24iLCJwYXJ0aWNsZVN5c3RlbSIsIlBhcnRpY2xlU3lzdGVtIiwiZW5hYmxlZCIsImlzUGxheWluZyIsInJlc2V0U3lzdGVtIiwicG9zaXRpb25UeXBlIiwiUG9zaXRpb25UeXBlIiwiUkVMQVRJVkUiLCJ3YXJuIiwiZGlyIiwic3ViIiwicmFkIiwiTWF0aCIsImF0YW4yIiwieSIsIngiLCJhbmdsZSIsIlBJIiwiZSIsIm1lc3NhZ2UiLCJOb2RlIiwiZ3JhcGhpY3MiLCJhZGRDb21wb25lbnQiLCJHcmFwaGljcyIsImNpcmNsZSIsImZpbGxDb2xvciIsIkNvbG9yIiwiUkVEIiwiZmlsbCIsInN0cm9rZUNvbG9yIiwiT1JBTkdFIiwibGluZVdpZHRoIiwic3Ryb2tlIiwiZmx5U3BlZWQiLCJkaXN0YW5jZSIsIm1hZyIsImZseVRpbWUiLCJtYXgiLCJzZXRTaWJsaW5nSW5kZXgiLCJjaGlsZHJlbiIsImxlbmd0aCIsImN1cnJlbnRQb3MiLCJ1cGRhdGVQb3NpdGlvbiIsImlzVmFsaWQiLCJ0d2VlbiIsInRvIiwiZWFzaW5nIiwib25VcGRhdGUiLCJyYXRpbyIsImNhbGwiLCJfcGxheUV4cGxvc2lvbkVmZmVjdCIsInNjaGVkdWxlT25jZSIsInN0b3BTeXN0ZW0iLCJkZXN0cm95Iiwic3RhcnQiLCJieSIsImV4cGxvc2lvblBvcyIsImdldFBvc2l0aW9uIiwiZXhwbG9zaW9uIiwiYXV0b1JlbW92ZU9uRmluaXNoIiwic2NhbGUiLCJvcGFjaXR5Iiwic2hvY2t3YXZlIiwiWUVMTE9XIiwib3JpZ2luYWxQb3MiLCJhdXJhIiwiX2JlYXN0UmFnZU9yaWdpbmFsU2NhbGVYIiwic2NhbGVYIiwiX2JlYXN0UmFnZU9yaWdpbmFsU2NhbGVZIiwic2NhbGVZIiwiX2JlYXN0UmFnZU9yaWdpbmFsQ29sb3IiLCJjb2xvciIsImNsb25lIiwiYmVhc3RTY2FsZSIsInJhZ2VDb2xvciIsIl9wbGF5QmVhc3RSYWdlUHVsc2UiLCJwdWxzZSIsInN0b3BCZWFzdFJhZ2VFZmZlY3QiLCJfdGhpczIiLCJpIiwiX2NyZWF0ZVdhckNyeVdhdmUiLCJ3YXZlIiwiX3N0YXJ0V2FyQ3J5Q29udGludW91c1dhdmVzIiwiX3RoaXMzIiwiX3N0b3BXYXJDcnlDb250aW51b3VzV2F2ZXMiLCJfd2FyQ3J5V2F2ZXNBY3RpdmUiLCJ3YXZlSW50ZXJ2YWwiLCJzY2hlZHVsZVdhdmUiLCJzaGllbGQiLCJCTFVFIiwiZGVsYXkiLCJfdGhpczQiLCJCdWZmUmVnaXN0cnkiLCJyZXF1aXJlIiwiaGVhbEJ1ZmZEdXJhdGlvbiIsImhlYWxPdmVyVGltZSIsImR1cmF0aW9uIiwiaGVhbFBhcnRpY2xlIiwibG9nIiwiY2xlYW5zZUF1cmEiLCJyYWRpdXMiLCJfcGxheVJhbmdlZEF0dGFja0VmZmVjdCIsInByb2plY3RpbGUiLCJCTEFDSyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1I7SUFDQUMsY0FBYyxFQUFFO01BQ1osV0FBUyxJQUFJO01BQ2JDLElBQUksRUFBRUwsRUFBRSxDQUFDTSxNQUFNO01BQ2ZDLE9BQU8sRUFBRTtJQUNiLENBQUM7SUFFRDtJQUNBQyxlQUFlLEVBQUU7TUFDYixXQUFTLElBQUk7TUFDYkgsSUFBSSxFQUFFTCxFQUFFLENBQUNNLE1BQU07TUFDZkMsT0FBTyxFQUFFO0lBQ2IsQ0FBQztJQUVEO0lBQ0FFLHVCQUF1QixFQUFFO01BQ3JCLFdBQVMsSUFBSTtNQUNiSixJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sTUFBTTtNQUNmQyxPQUFPLEVBQUU7SUFDYixDQUFDO0lBRUQ7SUFDQUcsa0JBQWtCLEVBQUU7TUFDaEIsV0FBUyxJQUFJO01BQ2JMLElBQUksRUFBRUwsRUFBRSxDQUFDTSxNQUFNO01BQ2ZDLE9BQU8sRUFBRTtJQUNiLENBQUM7SUFFRDtJQUNBSSxjQUFjLEVBQUU7TUFDWixXQUFTLEdBQUc7TUFDWkosT0FBTyxFQUFFO0lBQ2I7RUFDSixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0lLLGVBQWUsV0FBQUEsZ0JBQUNDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUU7SUFDdkMsUUFBUUYsU0FBUztNQUNiLEtBQUssS0FBSztRQUNOLElBQUksQ0FBQ0csbUJBQW1CLENBQUNGLE1BQU0sRUFBRUMsTUFBTSxDQUFDO1FBQ3hDO01BQ0osS0FBSyxJQUFJO1FBQ0wsSUFBSSxDQUFDRSxlQUFlLENBQUNILE1BQU0sRUFBRUMsTUFBTSxDQUFDO1FBQ3BDO01BQ0osS0FBSyxJQUFJO1FBQ0wsSUFBSSxDQUFDRyxlQUFlLENBQUNKLE1BQU0sQ0FBQztRQUM1QjtNQUNKLEtBQUssTUFBTTtRQUNQLElBQUksQ0FBQ0ssb0JBQW9CLENBQUNMLE1BQU0sQ0FBQztRQUNqQztNQUNKLEtBQUssSUFBSTtRQUNMLElBQUksQ0FBQ00saUJBQWlCLENBQUNOLE1BQU0sQ0FBQztRQUM5QjtNQUNKLEtBQUssTUFBTTtRQUNQLElBQUksQ0FBQ08saUJBQWlCLENBQUNQLE1BQU0sQ0FBQztRQUM5QjtNQUNKLEtBQUssS0FBSztRQUNOLElBQUksQ0FBQ1EsZUFBZSxDQUFDUixNQUFNLENBQUM7UUFDNUI7TUFDSixLQUFLLEtBQUs7UUFDTixJQUFJLENBQUNTLGtCQUFrQixDQUFDVCxNQUFNLENBQUM7UUFDL0I7TUFDSixLQUFLLE1BQU07UUFDUDtRQUNBLElBQU1VLFdBQVcsR0FBR1YsTUFBTSxDQUFDVyxZQUFZLENBQUMsYUFBYSxDQUFDO1FBQ3RELElBQUlELFdBQVcsSUFBSUEsV0FBVyxDQUFDRSxRQUFRLEVBQUU7VUFDckM7VUFDQTtRQUFBO1FBRUo7UUFDQTtNQUNKO01BQ0E7TUFDQTtJQUFBO0VBRVIsQ0FBQztFQUVEO0FBQ0o7QUFDQTtFQUNJVixtQkFBbUIsV0FBQUEsb0JBQUNGLE1BQU0sRUFBRUMsTUFBTSxFQUFFO0lBQUEsSUFBQVksS0FBQTtJQUNoQztJQUNBOztJQUVBLElBQUksQ0FBQ2IsTUFBTSxJQUFJLENBQUNDLE1BQU0sRUFBRTtNQUNwQmYsRUFBRSxDQUFDNEIsS0FBSyxDQUFDLHlDQUF5QyxDQUFDO01BQ25EO0lBQ0o7SUFFQSxJQUFNQyxNQUFNLEdBQUdmLE1BQU0sQ0FBQ2UsTUFBTTtJQUM1QixJQUFJLENBQUNBLE1BQU0sRUFBRTtNQUNUN0IsRUFBRSxDQUFDNEIsS0FBSyxDQUFDLHlDQUF5QyxDQUFDO01BQ25EO0lBQ0o7O0lBRUE7O0lBRUE7SUFDQTtJQUNBLElBQU1FLGNBQWMsR0FBR2hCLE1BQU0sQ0FBQ2UsTUFBTSxHQUNoQ2YsTUFBTSxDQUFDZSxNQUFNLENBQUNFLHFCQUFxQixDQUFDakIsTUFBTSxDQUFDa0IsUUFBUSxDQUFDLEdBQ3BEbEIsTUFBTSxDQUFDa0IsUUFBUTtJQUNuQixJQUFNQyxRQUFRLEdBQUdKLE1BQU0sQ0FBQ0ssb0JBQW9CLENBQUNKLGNBQWMsQ0FBQyxDQUFDSyxHQUFHLENBQUNuQyxFQUFFLENBQUNvQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7SUFFaEY7SUFDQSxJQUFNQyxjQUFjLEdBQUd0QixNQUFNLENBQUNjLE1BQU0sR0FDaENkLE1BQU0sQ0FBQ2MsTUFBTSxDQUFDRSxxQkFBcUIsQ0FBQ2hCLE1BQU0sQ0FBQ2lCLFFBQVEsQ0FBQyxHQUNwRGpCLE1BQU0sQ0FBQ2lCLFFBQVE7SUFDbkIsSUFBTU0sTUFBTSxHQUFHVCxNQUFNLENBQUNLLG9CQUFvQixDQUFDRyxjQUFjLENBQUMsQ0FBQ0YsR0FBRyxDQUFDbkMsRUFBRSxDQUFDb0MsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBRTlFO0lBQ0E7SUFDQTs7SUFFQSxJQUFJRyxRQUFRLEdBQUcsSUFBSTs7SUFFbkI7SUFDQSxJQUFJLElBQUksQ0FBQ25DLGNBQWMsRUFBRTtNQUNyQixJQUFJO1FBQ0FtQyxRQUFRLEdBQUd2QyxFQUFFLENBQUN3QyxXQUFXLENBQUMsSUFBSSxDQUFDcEMsY0FBYyxDQUFDO1FBQzlDOztRQUVBO1FBQ0FtQyxRQUFRLENBQUNFLE1BQU0sR0FBRyxJQUFJO1FBRXRCWixNQUFNLENBQUNhLFFBQVEsQ0FBQ0gsUUFBUSxDQUFDO1FBQ3pCQSxRQUFRLENBQUNJLFdBQVcsQ0FBQ1YsUUFBUSxDQUFDOztRQUU5QjtRQUNBOztRQUVBO1FBQ0EsSUFBTVcsY0FBYyxHQUFHTCxRQUFRLENBQUNkLFlBQVksQ0FBQ3pCLEVBQUUsQ0FBQzZDLGNBQWMsQ0FBQztRQUMvRCxJQUFJRCxjQUFjLEVBQUU7VUFDaEI7O1VBRUE7VUFDQUEsY0FBYyxDQUFDRSxPQUFPLEdBQUcsSUFBSTs7VUFFN0I7VUFDQSxJQUFJLENBQUNGLGNBQWMsQ0FBQ0csU0FBUyxFQUFFO1lBQzNCSCxjQUFjLENBQUNJLFdBQVcsRUFBRTtZQUM1QjtVQUNKOztVQUVBO1VBQ0FKLGNBQWMsQ0FBQ0ssWUFBWSxHQUFHakQsRUFBRSxDQUFDNkMsY0FBYyxDQUFDSyxZQUFZLENBQUNDLFFBQVE7O1VBRXJFO1VBQ0FQLGNBQWMsQ0FBQ0UsT0FBTyxHQUFHLEtBQUs7VUFDOUJGLGNBQWMsQ0FBQ0UsT0FBTyxHQUFHLElBQUk7O1VBRTdCO1FBQ0osQ0FBQyxNQUFNO1VBQ0g5QyxFQUFFLENBQUNvRCxJQUFJLDhHQUFrRDtRQUM3RDs7UUFFQTtRQUNBLElBQUlDLElBQUcsR0FBR2YsTUFBTSxDQUFDZ0IsR0FBRyxDQUFDckIsUUFBUSxDQUFDO1FBQzlCLElBQUlzQixHQUFHLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSixJQUFHLENBQUNLLENBQUMsRUFBRUwsSUFBRyxDQUFDTSxDQUFDLENBQUM7UUFDbENwQixRQUFRLENBQUNxQixLQUFLLEdBQUcsRUFBRUwsR0FBRyxHQUFHLEdBQUcsR0FBR0MsSUFBSSxDQUFDSyxFQUFFLENBQUMsR0FBRyxFQUFFO1FBQzVDOztRQUVBO01BQ0osQ0FBQyxDQUFDLE9BQU9DLENBQUMsRUFBRTtRQUNSOUQsRUFBRSxDQUFDNEIsS0FBSyx3RkFBb0NrQyxDQUFDLENBQUNDLE9BQU8sQ0FBRztRQUN4RHhCLFFBQVEsR0FBRyxJQUFJO01BQ25CO0lBQ0o7O0lBRUE7SUFDQSxJQUFJLENBQUNBLFFBQVEsRUFBRTtNQUNYdkMsRUFBRSxDQUFDb0QsSUFBSSxDQUFDLG1EQUFtRCxDQUFDOztNQUU1RDtNQUNBYixRQUFRLEdBQUcsSUFBSXZDLEVBQUUsQ0FBQ2dFLElBQUksQ0FBQyxVQUFVLENBQUM7TUFDbEN6QixRQUFRLENBQUNFLE1BQU0sR0FBRyxJQUFJO01BQ3RCRixRQUFRLENBQUNJLFdBQVcsQ0FBQ1YsUUFBUSxDQUFDOztNQUU5QjtNQUNBLElBQU1nQyxRQUFRLEdBQUcxQixRQUFRLENBQUMyQixZQUFZLENBQUNsRSxFQUFFLENBQUNtRSxRQUFRLENBQUM7TUFDbkRGLFFBQVEsQ0FBQ0csTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO01BQ3pCSCxRQUFRLENBQUNJLFNBQVMsR0FBR3JFLEVBQUUsQ0FBQ3NFLEtBQUssQ0FBQ0MsR0FBRztNQUNqQ04sUUFBUSxDQUFDTyxJQUFJLEVBQUU7O01BRWY7TUFDQVAsUUFBUSxDQUFDRyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7TUFDekJILFFBQVEsQ0FBQ1EsV0FBVyxHQUFHekUsRUFBRSxDQUFDc0UsS0FBSyxDQUFDSSxNQUFNO01BQ3RDVCxRQUFRLENBQUNVLFNBQVMsR0FBRyxDQUFDO01BQ3RCVixRQUFRLENBQUNXLE1BQU0sRUFBRTtNQUVqQi9DLE1BQU0sQ0FBQ2EsUUFBUSxDQUFDSCxRQUFRLENBQUM7O01BRXpCO01BQ0EsSUFBSWMsS0FBRyxHQUFHZixNQUFNLENBQUNnQixHQUFHLENBQUNyQixRQUFRLENBQUM7TUFDOUIsSUFBSXNCLElBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNKLEtBQUcsQ0FBQ0ssQ0FBQyxFQUFFTCxLQUFHLENBQUNNLENBQUMsQ0FBQztNQUNsQ3BCLFFBQVEsQ0FBQ3FCLEtBQUssR0FBRyxFQUFFTCxJQUFHLEdBQUcsR0FBRyxHQUFHQyxJQUFJLENBQUNLLEVBQUUsQ0FBQyxHQUFHLEVBQUU7O01BRTVDO0lBQ0o7O0lBRUE7SUFDQSxJQUFNZ0IsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLElBQUl4QixHQUFHLEdBQUdmLE1BQU0sQ0FBQ2dCLEdBQUcsQ0FBQ3JCLFFBQVEsQ0FBQztJQUM5QixJQUFNNkMsUUFBUSxHQUFHekIsR0FBRyxDQUFDMEIsR0FBRyxFQUFFLENBQUMsQ0FBQzs7SUFFNUI7SUFDQSxJQUFNQyxPQUFPLEdBQUd4QixJQUFJLENBQUN5QixHQUFHLENBQUMsR0FBRyxFQUFFSCxRQUFRLEdBQUdELFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDcEQ7O0lBRUE7SUFDQXRDLFFBQVEsQ0FBQzJDLGVBQWUsQ0FBQ3JELE1BQU0sQ0FBQ3NELFFBQVEsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNwRDs7SUFFQTtJQUNBLElBQUlDLFVBQVUsR0FBR3BELFFBQVE7SUFDekIsSUFBTXFELGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUFTO01BQ3pCLElBQUkvQyxRQUFRLElBQUlBLFFBQVEsQ0FBQ2dELE9BQU8sSUFBSWhELFFBQVEsQ0FBQ0UsTUFBTSxFQUFFO1FBQ2pERixRQUFRLENBQUNJLFdBQVcsQ0FBQzBDLFVBQVUsQ0FBQztNQUNwQztJQUNKLENBQUM7O0lBRUQ7SUFDQXJGLEVBQUUsQ0FBQ3dGLEtBQUssQ0FBQ2pELFFBQVEsQ0FBQyxDQUNia0QsRUFBRSxDQUFDVCxPQUFPLEVBQUU7TUFBRWhELFFBQVEsRUFBRU07SUFBTyxDQUFDLEVBQUU7TUFDL0JvRCxNQUFNLEVBQUUsU0FBUztNQUNqQkMsUUFBUSxFQUFFLFNBQUFBLFNBQUM1RSxNQUFNLEVBQUU2RSxLQUFLLEVBQUs7UUFDekI7UUFDQVAsVUFBVSxHQUFHckYsRUFBRSxDQUFDb0MsRUFBRSxDQUNkSCxRQUFRLENBQUMwQixDQUFDLEdBQUcsQ0FBQ3JCLE1BQU0sQ0FBQ3FCLENBQUMsR0FBRzFCLFFBQVEsQ0FBQzBCLENBQUMsSUFBSWlDLEtBQUssRUFDNUMzRCxRQUFRLENBQUN5QixDQUFDLEdBQUcsQ0FBQ3BCLE1BQU0sQ0FBQ29CLENBQUMsR0FBR3pCLFFBQVEsQ0FBQ3lCLENBQUMsSUFBSWtDLEtBQUssQ0FDL0M7UUFDRE4sY0FBYyxFQUFFO01BQ3BCO0lBQ0osQ0FBQyxDQUFDLENBQ0RPLElBQUksQ0FBQyxZQUFNO01BQ1I7TUFDQTtNQUNBbEUsS0FBSSxDQUFDbUUsb0JBQW9CLENBQUMvRSxNQUFNLENBQUM7O01BRWpDO01BQ0FZLEtBQUksQ0FBQ29FLFlBQVksQ0FBQyxZQUFNO1FBQ3BCLElBQUl4RCxRQUFRLElBQUlBLFFBQVEsQ0FBQ2dELE9BQU8sRUFBRTtVQUM5QjtVQUNBO1VBQ0EsSUFBTTNDLGVBQWMsR0FBR0wsUUFBUSxDQUFDZCxZQUFZLENBQUN6QixFQUFFLENBQUM2QyxjQUFjLENBQUM7VUFDL0QsSUFBSUQsZUFBYyxFQUFFO1lBQ2hCQSxlQUFjLENBQUNvRCxVQUFVLEVBQUU7VUFDL0I7VUFDQXpELFFBQVEsQ0FBQzBELE9BQU8sRUFBRTtRQUN0QjtNQUNKLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2IsQ0FBQyxDQUFDLENBQ0RDLEtBQUssRUFBRTs7SUFFWjtJQUNBbEcsRUFBRSxDQUFDd0YsS0FBSyxDQUFDakQsUUFBUSxDQUFDLENBQ2I0RCxFQUFFLENBQUNuQixPQUFPLEVBQUU7TUFBRXBCLEtBQUssRUFBRTtJQUFJLENBQUMsQ0FBQyxDQUMzQnNDLEtBQUssRUFBRTs7SUFFWjtJQUNBO0VBQ0osQ0FBQztFQUVEO0FBQ0o7QUFDQTtFQUNJSixvQkFBb0IsV0FBQUEscUJBQUMvRSxNQUFNLEVBQUU7SUFDekIsSUFBSSxDQUFDQSxNQUFNLElBQUksQ0FBQ0EsTUFBTSxDQUFDYyxNQUFNLEVBQUU7TUFDM0I3QixFQUFFLENBQUM0QixLQUFLLENBQUMsaURBQWlELENBQUM7TUFDM0Q7SUFDSjtJQUVBLElBQU13RSxZQUFZLEdBQUdyRixNQUFNLENBQUNzRixXQUFXLEVBQUU7O0lBRXpDO0lBQ0EsSUFBSSxJQUFJLENBQUM3RixlQUFlLEVBQUU7TUFDdEIsSUFBTThGLFNBQVMsR0FBR3RHLEVBQUUsQ0FBQ3dDLFdBQVcsQ0FBQyxJQUFJLENBQUNoQyxlQUFlLENBQUM7TUFDdERPLE1BQU0sQ0FBQ2MsTUFBTSxDQUFDYSxRQUFRLENBQUM0RCxTQUFTLENBQUM7TUFDakNBLFNBQVMsQ0FBQzNELFdBQVcsQ0FBQ3lELFlBQVksQ0FBQzs7TUFFbkM7TUFDQSxJQUFNeEQsY0FBYyxHQUFHMEQsU0FBUyxDQUFDN0UsWUFBWSxDQUFDekIsRUFBRSxDQUFDNkMsY0FBYyxDQUFDO01BQ2hFLElBQUlELGNBQWMsRUFBRTtRQUNoQjtRQUNBLElBQUksQ0FBQ0EsY0FBYyxDQUFDRyxTQUFTLEVBQUU7VUFDM0JILGNBQWMsQ0FBQ0ksV0FBVyxFQUFFO1FBQ2hDO1FBQ0E7UUFDQUosY0FBYyxDQUFDMkQsa0JBQWtCLEdBQUcsSUFBSTtNQUM1QyxDQUFDLE1BQU07UUFDSDtRQUNBLElBQUksQ0FBQ1IsWUFBWSxDQUFDLFlBQU07VUFDcEIsSUFBSU8sU0FBUyxJQUFJQSxTQUFTLENBQUNmLE9BQU8sRUFBRTtZQUNoQ2UsU0FBUyxDQUFDTCxPQUFPLEVBQUU7VUFDdkI7UUFDSixDQUFDLEVBQUUsR0FBRyxDQUFDO01BQ1g7O01BRUE7SUFDSixDQUFDLE1BQU07TUFDSDtNQUNBLElBQU1LLFVBQVMsR0FBRyxJQUFJdEcsRUFBRSxDQUFDZ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQztNQUMxQ3NDLFVBQVMsQ0FBQzNELFdBQVcsQ0FBQ3lELFlBQVksQ0FBQztNQUVuQyxJQUFNbkMsUUFBUSxHQUFHcUMsVUFBUyxDQUFDcEMsWUFBWSxDQUFDbEUsRUFBRSxDQUFDbUUsUUFBUSxDQUFDO01BQ3BERixRQUFRLENBQUNHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztNQUN6QkgsUUFBUSxDQUFDSSxTQUFTLEdBQUdyRSxFQUFFLENBQUNzRSxLQUFLLENBQUNJLE1BQU07TUFDcENULFFBQVEsQ0FBQ08sSUFBSSxFQUFFO01BRWZ6RCxNQUFNLENBQUNjLE1BQU0sQ0FBQ2EsUUFBUSxDQUFDNEQsVUFBUyxDQUFDOztNQUVqQztNQUNBdEcsRUFBRSxDQUFDd0YsS0FBSyxDQUFDYyxVQUFTLENBQUMsQ0FDZGIsRUFBRSxDQUFDLEdBQUcsRUFBRTtRQUFFZSxLQUFLLEVBQUUsQ0FBQztRQUFFQyxPQUFPLEVBQUU7TUFBRSxDQUFDLENBQUMsQ0FDakNaLElBQUksQ0FBQyxZQUFNO1FBQ1JTLFVBQVMsQ0FBQ0wsT0FBTyxFQUFFO01BQ3ZCLENBQUMsQ0FBQyxDQUNEQyxLQUFLLEVBQUU7O01BRVo7SUFDSjtFQUNKLENBQUM7RUFFRDtBQUNKO0FBQ0E7RUFDSWpGLGVBQWUsV0FBQUEsZ0JBQUNILE1BQU0sRUFBRUMsTUFBTSxFQUFFO0lBQzVCLElBQU0yRixTQUFTLEdBQUcsSUFBSTFHLEVBQUUsQ0FBQ2dFLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUMwQyxTQUFTLENBQUMvRCxXQUFXLENBQUM1QixNQUFNLENBQUNzRixXQUFXLEVBQUUsQ0FBQztJQUUzQyxJQUFNcEMsUUFBUSxHQUFHeUMsU0FBUyxDQUFDeEMsWUFBWSxDQUFDbEUsRUFBRSxDQUFDbUUsUUFBUSxDQUFDO0lBQ3BERixRQUFRLENBQUNHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUN6QkgsUUFBUSxDQUFDUSxXQUFXLEdBQUd6RSxFQUFFLENBQUNzRSxLQUFLLENBQUNxQyxNQUFNO0lBQ3RDMUMsUUFBUSxDQUFDVSxTQUFTLEdBQUcsQ0FBQztJQUN0QlYsUUFBUSxDQUFDVyxNQUFNLEVBQUU7SUFFakI3RCxNQUFNLENBQUNjLE1BQU0sQ0FBQ2EsUUFBUSxDQUFDZ0UsU0FBUyxDQUFDOztJQUVqQztJQUNBMUcsRUFBRSxDQUFDd0YsS0FBSyxDQUFDa0IsU0FBUyxDQUFDLENBQ2RqQixFQUFFLENBQUMsR0FBRyxFQUFFO01BQUVlLEtBQUssRUFBRSxDQUFDO01BQUVDLE9BQU8sRUFBRTtJQUFFLENBQUMsQ0FBQyxDQUNqQ1osSUFBSSxDQUFDLFlBQU07TUFDUmEsU0FBUyxDQUFDVCxPQUFPLEVBQUU7SUFDdkIsQ0FBQyxDQUFDLENBQ0RDLEtBQUssRUFBRTs7SUFFWjtJQUNBLElBQU1VLFdBQVcsR0FBRzdGLE1BQU0sQ0FBQ3NGLFdBQVcsRUFBRTtJQUN4Q3JHLEVBQUUsQ0FBQ3dGLEtBQUssQ0FBQ3pFLE1BQU0sQ0FBQyxDQUNYb0YsRUFBRSxDQUFDLElBQUksRUFBRTtNQUFFeEMsQ0FBQyxFQUFFO0lBQUUsQ0FBQyxDQUFDLENBQ2xCd0MsRUFBRSxDQUFDLElBQUksRUFBRTtNQUFFeEMsQ0FBQyxFQUFFLENBQUM7SUFBRyxDQUFDLENBQUMsQ0FDcEJ3QyxFQUFFLENBQUMsSUFBSSxFQUFFO01BQUV4QyxDQUFDLEVBQUU7SUFBRyxDQUFDLENBQUMsQ0FDbkJ3QyxFQUFFLENBQUMsSUFBSSxFQUFFO01BQUV4QyxDQUFDLEVBQUUsQ0FBQztJQUFFLENBQUMsQ0FBQyxDQUNuQjhCLEVBQUUsQ0FBQyxJQUFJLEVBQUU7TUFBRXpELFFBQVEsRUFBRTRFO0lBQVksQ0FBQyxDQUFDLENBQ25DVixLQUFLLEVBQUU7RUFDaEIsQ0FBQztFQUVEO0FBQ0o7QUFDQTtFQUNJaEYsZUFBZSxXQUFBQSxnQkFBQ0osTUFBTSxFQUFFO0lBQ3BCLElBQU0rRixJQUFJLEdBQUcsSUFBSTdHLEVBQUUsQ0FBQ2dFLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDcEM2QyxJQUFJLENBQUNsRSxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUV0QixJQUFNc0IsUUFBUSxHQUFHNEMsSUFBSSxDQUFDM0MsWUFBWSxDQUFDbEUsRUFBRSxDQUFDbUUsUUFBUSxDQUFDO0lBQy9DRixRQUFRLENBQUNHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUN6QkgsUUFBUSxDQUFDUSxXQUFXLEdBQUd6RSxFQUFFLENBQUNzRSxLQUFLLENBQUNDLEdBQUc7SUFDbkNOLFFBQVEsQ0FBQ1UsU0FBUyxHQUFHLENBQUM7SUFDdEJWLFFBQVEsQ0FBQ1csTUFBTSxFQUFFO0lBRWpCOUQsTUFBTSxDQUFDNEIsUUFBUSxDQUFDbUUsSUFBSSxDQUFDOztJQUVyQjtJQUNBN0csRUFBRSxDQUFDd0YsS0FBSyxDQUFDcUIsSUFBSSxDQUFDLENBQ1RwQixFQUFFLENBQUMsR0FBRyxFQUFFO01BQUVlLEtBQUssRUFBRSxHQUFHO01BQUVDLE9BQU8sRUFBRTtJQUFJLENBQUMsQ0FBQyxDQUNyQ2hCLEVBQUUsQ0FBQyxHQUFHLEVBQUU7TUFBRWUsS0FBSyxFQUFFLEdBQUc7TUFBRUMsT0FBTyxFQUFFO0lBQUksQ0FBQyxDQUFDLENBQ3JDWixJQUFJLENBQUMsWUFBTTtNQUNSZ0IsSUFBSSxDQUFDWixPQUFPLEVBQUU7SUFDbEIsQ0FBQyxDQUFDLENBQ0RDLEtBQUssRUFBRTtFQUNoQixDQUFDO0VBRUQ7QUFDSjtBQUNBO0VBQ0kvRSxvQkFBb0IsV0FBQUEscUJBQUNMLE1BQU0sRUFBRTtJQUN6QixJQUFJLENBQUNBLE1BQU0sSUFBSSxDQUFDQSxNQUFNLENBQUN5RSxPQUFPLEVBQUU7TUFDNUJ2RixFQUFFLENBQUM0QixLQUFLLENBQUMsbUNBQW1DLENBQUM7TUFDN0M7SUFDSjs7SUFFQTs7SUFFQTtJQUNBLElBQUksQ0FBQ2QsTUFBTSxDQUFDZ0csd0JBQXdCLEVBQUU7TUFDbENoRyxNQUFNLENBQUNnRyx3QkFBd0IsR0FBR2hHLE1BQU0sQ0FBQ2lHLE1BQU07TUFDL0NqRyxNQUFNLENBQUNrRyx3QkFBd0IsR0FBR2xHLE1BQU0sQ0FBQ21HLE1BQU07TUFDL0NuRyxNQUFNLENBQUNvRyx1QkFBdUIsR0FBR3BHLE1BQU0sQ0FBQ3FHLEtBQUssQ0FBQ0MsS0FBSyxFQUFFO0lBQ3pEOztJQUVBO0lBQ0EsSUFBTUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCckgsRUFBRSxDQUFDd0YsS0FBSyxDQUFDMUUsTUFBTSxDQUFDLENBQ1gyRSxFQUFFLENBQUMsR0FBRyxFQUFFO01BQ0xzQixNQUFNLEVBQUVqRyxNQUFNLENBQUNnRyx3QkFBd0IsR0FBR08sVUFBVTtNQUNwREosTUFBTSxFQUFFbkcsTUFBTSxDQUFDa0csd0JBQXdCLEdBQUdLO0lBQzlDLENBQUMsRUFBRTtNQUFFM0IsTUFBTSxFQUFFO0lBQVUsQ0FBQyxDQUFDLENBQ3hCUSxLQUFLLEVBQUU7O0lBRVo7SUFDQSxJQUFNb0IsU0FBUyxHQUFHLElBQUl0SCxFQUFFLENBQUNzRSxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDN0N0RSxFQUFFLENBQUN3RixLQUFLLENBQUMxRSxNQUFNLENBQUMsQ0FDWDJFLEVBQUUsQ0FBQyxHQUFHLEVBQUU7TUFBRTBCLEtBQUssRUFBRUc7SUFBVSxDQUFDLENBQUMsQ0FDN0JwQixLQUFLLEVBQUU7O0lBRVo7SUFDQSxJQUFJLENBQUNxQixtQkFBbUIsQ0FBQ3pHLE1BQU0sQ0FBQztFQUNwQyxDQUFDO0VBRUQ7QUFDSjtBQUNBO0VBQ0l5RyxtQkFBbUIsV0FBQUEsb0JBQUN6RyxNQUFNLEVBQUU7SUFDeEI7SUFDQSxJQUFNMEcsS0FBSyxHQUFHLElBQUl4SCxFQUFFLENBQUNnRSxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDM0N3RCxLQUFLLENBQUM3RSxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUV2QixJQUFNc0IsUUFBUSxHQUFHdUQsS0FBSyxDQUFDdEQsWUFBWSxDQUFDbEUsRUFBRSxDQUFDbUUsUUFBUSxDQUFDO0lBQ2hERixRQUFRLENBQUNHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUN6QkgsUUFBUSxDQUFDUSxXQUFXLEdBQUd6RSxFQUFFLENBQUNzRSxLQUFLLENBQUNDLEdBQUc7SUFDbkNOLFFBQVEsQ0FBQ1UsU0FBUyxHQUFHLENBQUM7SUFDdEJWLFFBQVEsQ0FBQ1csTUFBTSxFQUFFO0lBRWpCOUQsTUFBTSxDQUFDNEIsUUFBUSxDQUFDOEUsS0FBSyxDQUFDOztJQUV0QjtJQUNBQSxLQUFLLENBQUNoQixLQUFLLEdBQUcsR0FBRztJQUNqQmdCLEtBQUssQ0FBQ2YsT0FBTyxHQUFHLEdBQUc7SUFDbkJ6RyxFQUFFLENBQUN3RixLQUFLLENBQUNnQyxLQUFLLENBQUMsQ0FDVi9CLEVBQUUsQ0FBQyxHQUFHLEVBQUU7TUFBRWUsS0FBSyxFQUFFLEdBQUc7TUFBRUMsT0FBTyxFQUFFO0lBQUksQ0FBQyxDQUFDLENBQ3JDaEIsRUFBRSxDQUFDLEdBQUcsRUFBRTtNQUFFZSxLQUFLLEVBQUUsR0FBRztNQUFFQyxPQUFPLEVBQUU7SUFBRSxDQUFDLENBQUMsQ0FDbkNaLElBQUksQ0FBQyxZQUFNO01BQ1IsSUFBSTJCLEtBQUssSUFBSUEsS0FBSyxDQUFDakMsT0FBTyxFQUFFO1FBQ3hCaUMsS0FBSyxDQUFDdkIsT0FBTyxFQUFFO01BQ25CO0lBQ0osQ0FBQyxDQUFDLENBQ0RDLEtBQUssRUFBRTtFQUNoQixDQUFDO0VBRUQ7QUFDSjtBQUNBO0VBQ0l1QixtQkFBbUIsV0FBQUEsb0JBQUMzRyxNQUFNLEVBQUU7SUFDeEIsSUFBSSxDQUFDQSxNQUFNLElBQUksQ0FBQ0EsTUFBTSxDQUFDeUUsT0FBTyxFQUFFOztJQUVoQzs7SUFFQTtJQUNBLElBQUl6RSxNQUFNLENBQUNnRyx3QkFBd0IsRUFBRTtNQUNqQzlHLEVBQUUsQ0FBQ3dGLEtBQUssQ0FBQzFFLE1BQU0sQ0FBQyxDQUNYMkUsRUFBRSxDQUFDLEdBQUcsRUFBRTtRQUNMc0IsTUFBTSxFQUFFakcsTUFBTSxDQUFDZ0csd0JBQXdCO1FBQ3ZDRyxNQUFNLEVBQUVuRyxNQUFNLENBQUNrRztNQUNuQixDQUFDLEVBQUU7UUFBRXRCLE1BQU0sRUFBRTtNQUFTLENBQUMsQ0FBQyxDQUN2QlEsS0FBSyxFQUFFO0lBQ2hCOztJQUVBO0lBQ0EsSUFBSXBGLE1BQU0sQ0FBQ29HLHVCQUF1QixFQUFFO01BQ2hDbEgsRUFBRSxDQUFDd0YsS0FBSyxDQUFDMUUsTUFBTSxDQUFDLENBQ1gyRSxFQUFFLENBQUMsR0FBRyxFQUFFO1FBQUUwQixLQUFLLEVBQUVyRyxNQUFNLENBQUNvRztNQUF3QixDQUFDLENBQUMsQ0FDbERoQixLQUFLLEVBQUU7SUFDaEI7RUFDSixDQUFDO0VBR0Q7QUFDSjtBQUNBO0VBQ0k5RSxpQkFBaUIsV0FBQUEsa0JBQUNOLE1BQU0sRUFBRTtJQUFBLElBQUE0RyxNQUFBO0lBQ3RCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7TUFDeEIsSUFBSSxDQUFDNUIsWUFBWSxDQUFDLFlBQU07UUFDcEIyQixNQUFJLENBQUNFLGlCQUFpQixDQUFDOUcsTUFBTSxDQUFDO01BQ2xDLENBQUMsRUFBRTZHLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDZjtFQUNKLENBQUM7RUFFRDtBQUNKO0FBQ0E7RUFDSUMsaUJBQWlCLFdBQUFBLGtCQUFDOUcsTUFBTSxFQUFFO0lBQ3RCLElBQUksQ0FBQ0EsTUFBTSxJQUFJLENBQUNBLE1BQU0sQ0FBQ3lFLE9BQU8sSUFBSSxDQUFDekUsTUFBTSxDQUFDZSxNQUFNLEVBQUU7SUFFbEQsSUFBTWdHLElBQUksR0FBRyxJQUFJN0gsRUFBRSxDQUFDZ0UsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN0QzZELElBQUksQ0FBQ2xGLFdBQVcsQ0FBQzdCLE1BQU0sQ0FBQ3VGLFdBQVcsRUFBRSxDQUFDO0lBRXRDLElBQU1wQyxRQUFRLEdBQUc0RCxJQUFJLENBQUMzRCxZQUFZLENBQUNsRSxFQUFFLENBQUNtRSxRQUFRLENBQUM7SUFDL0NGLFFBQVEsQ0FBQ0csTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ3pCSCxRQUFRLENBQUNRLFdBQVcsR0FBR3pFLEVBQUUsQ0FBQ3NFLEtBQUssQ0FBQ0ksTUFBTTtJQUN0Q1QsUUFBUSxDQUFDVSxTQUFTLEdBQUcsQ0FBQztJQUN0QlYsUUFBUSxDQUFDVyxNQUFNLEVBQUU7SUFFakI5RCxNQUFNLENBQUNlLE1BQU0sQ0FBQ2EsUUFBUSxDQUFDbUYsSUFBSSxDQUFDOztJQUU1QjtJQUNBQSxJQUFJLENBQUNyQixLQUFLLEdBQUcsQ0FBQztJQUNkeEcsRUFBRSxDQUFDd0YsS0FBSyxDQUFDcUMsSUFBSSxDQUFDLENBQ1RwQyxFQUFFLENBQUMsR0FBRyxFQUFFO01BQUVlLEtBQUssRUFBRSxDQUFDO01BQUVDLE9BQU8sRUFBRTtJQUFFLENBQUMsQ0FBQyxDQUNqQ1osSUFBSSxDQUFDLFlBQU07TUFDUixJQUFJZ0MsSUFBSSxJQUFJQSxJQUFJLENBQUN0QyxPQUFPLEVBQUU7UUFDdEJzQyxJQUFJLENBQUM1QixPQUFPLEVBQUU7TUFDbEI7SUFDSixDQUFDLENBQUMsQ0FDREMsS0FBSyxFQUFFO0VBQ2hCLENBQUM7RUFFRDtBQUNKO0FBQ0E7RUFDSTRCLDJCQUEyQixXQUFBQSw0QkFBQ2hILE1BQU0sRUFBRTtJQUFBLElBQUFpSCxNQUFBO0lBQ2hDLElBQUksQ0FBQ2pILE1BQU0sSUFBSSxDQUFDQSxNQUFNLENBQUN5RSxPQUFPLEVBQUU7TUFDNUJ2RixFQUFFLENBQUM0QixLQUFLLENBQUMscUNBQXFDLENBQUM7TUFDL0M7SUFDSjs7SUFFQTtJQUNBLElBQUksQ0FBQ29HLDBCQUEwQixDQUFDbEgsTUFBTSxDQUFDOztJQUV2Qzs7SUFFQTtJQUNBQSxNQUFNLENBQUNtSCxrQkFBa0IsR0FBRyxJQUFJOztJQUVoQztJQUNBLElBQUksQ0FBQ0wsaUJBQWlCLENBQUM5RyxNQUFNLENBQUM7O0lBRTlCO0lBQ0EsSUFBTW9ILFlBQVksR0FBRyxHQUFHO0lBQ3hCLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQVM7TUFDdkIsSUFBSSxDQUFDckgsTUFBTSxJQUFJLENBQUNBLE1BQU0sQ0FBQ3lFLE9BQU8sSUFBSSxDQUFDekUsTUFBTSxDQUFDbUgsa0JBQWtCLEVBQUU7UUFDMUQ7TUFDSjtNQUNBRixNQUFJLENBQUNILGlCQUFpQixDQUFDOUcsTUFBTSxDQUFDO01BQzlCaUgsTUFBSSxDQUFDaEMsWUFBWSxDQUFDb0MsWUFBWSxFQUFFRCxZQUFZLENBQUM7SUFDakQsQ0FBQztJQUVELElBQUksQ0FBQ25DLFlBQVksQ0FBQ29DLFlBQVksRUFBRUQsWUFBWSxDQUFDO0VBQ2pELENBQUM7RUFFRDtBQUNKO0FBQ0E7RUFDSUYsMEJBQTBCLFdBQUFBLDJCQUFDbEgsTUFBTSxFQUFFO0lBQy9CLElBQUksQ0FBQ0EsTUFBTSxJQUFJLENBQUNBLE1BQU0sQ0FBQ3lFLE9BQU8sRUFBRTs7SUFFaEM7SUFDQXpFLE1BQU0sQ0FBQ21ILGtCQUFrQixHQUFHLEtBQUs7RUFDckMsQ0FBQztFQUVEO0FBQ0o7QUFDQTtFQUNJNUcsaUJBQWlCLFdBQUFBLGtCQUFDUCxNQUFNLEVBQUU7SUFDdEIsSUFBTXNILE1BQU0sR0FBRyxJQUFJcEksRUFBRSxDQUFDZ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMxQ29FLE1BQU0sQ0FBQ3pGLFdBQVcsQ0FBQzdCLE1BQU0sQ0FBQ3VGLFdBQVcsRUFBRSxDQUFDO0lBRXhDLElBQU1wQyxRQUFRLEdBQUdtRSxNQUFNLENBQUNsRSxZQUFZLENBQUNsRSxFQUFFLENBQUNtRSxRQUFRLENBQUM7SUFDakRGLFFBQVEsQ0FBQ0csTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ3pCSCxRQUFRLENBQUNJLFNBQVMsR0FBRyxJQUFJckUsRUFBRSxDQUFDc0UsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUNyREwsUUFBUSxDQUFDTyxJQUFJLEVBQUU7SUFDZlAsUUFBUSxDQUFDRyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDekJILFFBQVEsQ0FBQ1EsV0FBVyxHQUFHekUsRUFBRSxDQUFDc0UsS0FBSyxDQUFDK0QsSUFBSTtJQUNwQ3BFLFFBQVEsQ0FBQ1UsU0FBUyxHQUFHLENBQUM7SUFDdEJWLFFBQVEsQ0FBQ1csTUFBTSxFQUFFO0lBRWpCOUQsTUFBTSxDQUFDZSxNQUFNLENBQUNhLFFBQVEsQ0FBQzBGLE1BQU0sQ0FBQzs7SUFFOUI7SUFDQUEsTUFBTSxDQUFDNUIsS0FBSyxHQUFHLENBQUM7SUFDaEJ4RyxFQUFFLENBQUN3RixLQUFLLENBQUM0QyxNQUFNLENBQUMsQ0FDWDNDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7TUFBRWUsS0FBSyxFQUFFO0lBQUUsQ0FBQyxDQUFDLENBQ3JCOEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUNWN0MsRUFBRSxDQUFDLEdBQUcsRUFBRTtNQUFFZ0IsT0FBTyxFQUFFO0lBQUUsQ0FBQyxDQUFDLENBQ3ZCWixJQUFJLENBQUMsWUFBTTtNQUNSdUMsTUFBTSxDQUFDbkMsT0FBTyxFQUFFO0lBQ3BCLENBQUMsQ0FBQyxDQUNEQyxLQUFLLEVBQUU7RUFDaEIsQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0VBQ0k1RSxlQUFlLFdBQUFBLGdCQUFDUixNQUFNLEVBQUU7SUFBQSxJQUFBeUgsTUFBQTtJQUNwQixJQUFJLENBQUN6SCxNQUFNLElBQUksQ0FBQ0EsTUFBTSxDQUFDeUUsT0FBTyxFQUFFO01BQzVCdkYsRUFBRSxDQUFDNEIsS0FBSyxDQUFDLGtDQUFrQyxDQUFDO01BQzVDO0lBQ0o7O0lBRUE7SUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDbEIsa0JBQWtCLEVBQUU7TUFDMUJWLEVBQUUsQ0FBQ29ELElBQUksQ0FBQywwREFBMEQsQ0FBQztNQUNuRTtJQUNKOztJQUVBO0lBQ0EsSUFBTW9GLFlBQVksR0FBR0MsT0FBTyxDQUFDLGNBQWMsQ0FBQztJQUM1QyxJQUFNQyxnQkFBZ0IsR0FBR0YsWUFBWSxDQUFDRyxZQUFZLEdBQUdILFlBQVksQ0FBQ0csWUFBWSxDQUFDQyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUU7O0lBRWhHLElBQUk7TUFDQSxJQUFNQyxZQUFZLEdBQUc3SSxFQUFFLENBQUN3QyxXQUFXLENBQUMsSUFBSSxDQUFDOUIsa0JBQWtCLENBQUM7TUFFNUQsSUFBSSxDQUFDbUksWUFBWSxFQUFFO1FBQ2Y3SSxFQUFFLENBQUM0QixLQUFLLENBQUMsbUNBQW1DLENBQUM7UUFDN0M7TUFDSjs7TUFFQTtNQUNBaUgsWUFBWSxDQUFDbEcsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFFO01BQ2pDN0IsTUFBTSxDQUFDNEIsUUFBUSxDQUFDbUcsWUFBWSxDQUFDOztNQUU3QjtNQUNBLElBQU1qRyxjQUFjLEdBQUdpRyxZQUFZLENBQUNwSCxZQUFZLENBQUN6QixFQUFFLENBQUM2QyxjQUFjLENBQUM7TUFDbkUsSUFBSUQsY0FBYyxFQUFFO1FBQ2hCO1FBQ0FBLGNBQWMsQ0FBQ0UsT0FBTyxHQUFHLElBQUk7O1FBRTdCO1FBQ0EsSUFBSSxDQUFDRixjQUFjLENBQUNHLFNBQVMsRUFBRTtVQUMzQkgsY0FBYyxDQUFDSSxXQUFXLEVBQUU7UUFDaEM7O1FBRUE7UUFDQUosY0FBYyxDQUFDSyxZQUFZLEdBQUdqRCxFQUFFLENBQUM2QyxjQUFjLENBQUNLLFlBQVksQ0FBQ0MsUUFBUTs7UUFFckU7UUFDQVAsY0FBYyxDQUFDRSxPQUFPLEdBQUcsS0FBSztRQUM5QkYsY0FBYyxDQUFDRSxPQUFPLEdBQUcsSUFBSTtRQUU3QjlDLEVBQUUsQ0FBQzhJLEdBQUcsd0lBQTRDSixnQkFBZ0IsWUFBSTtNQUMxRSxDQUFDLE1BQU07UUFDSDFJLEVBQUUsQ0FBQ29ELElBQUksb0hBQW1EO01BQzlEOztNQUVBO01BQ0EsSUFBSSxDQUFDMkMsWUFBWSxDQUFDLFlBQU07UUFDcEIsSUFBSThDLFlBQVksSUFBSUEsWUFBWSxDQUFDdEQsT0FBTyxFQUFFO1VBQ3RDO1VBQ0EsSUFBTTNDLGdCQUFjLEdBQUdpRyxZQUFZLENBQUNwSCxZQUFZLENBQUN6QixFQUFFLENBQUM2QyxjQUFjLENBQUM7VUFDbkUsSUFBSUQsZ0JBQWMsRUFBRTtZQUNoQkEsZ0JBQWMsQ0FBQ29ELFVBQVUsRUFBRTtVQUMvQjtVQUNBO1VBQ0F1QyxNQUFJLENBQUN4QyxZQUFZLENBQUMsWUFBTTtZQUNwQixJQUFJOEMsWUFBWSxJQUFJQSxZQUFZLENBQUN0RCxPQUFPLEVBQUU7Y0FDdENzRCxZQUFZLENBQUM1QyxPQUFPLEVBQUU7WUFDMUI7VUFDSixDQUFDLEVBQUUsR0FBRyxDQUFDO1FBQ1g7TUFDSixDQUFDLEVBQUV5QyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUU7SUFDM0IsQ0FBQyxDQUFDLE9BQU81RSxDQUFDLEVBQUU7TUFDUjlELEVBQUUsQ0FBQzRCLEtBQUssMEdBQXVDa0MsQ0FBQyxDQUFDQyxPQUFPLENBQUc7SUFDL0Q7RUFDSixDQUFDO0VBRUQ7QUFDSjtBQUNBO0VBQ0l4QyxrQkFBa0IsV0FBQUEsbUJBQUNULE1BQU0sRUFBRTtJQUN2QixJQUFJLENBQUNBLE1BQU0sSUFBSSxDQUFDQSxNQUFNLENBQUN5RSxPQUFPLElBQUksQ0FBQ3pFLE1BQU0sQ0FBQ2UsTUFBTSxFQUFFOztJQUVsRDtJQUNBLElBQU1rSCxXQUFXLEdBQUcsSUFBSS9JLEVBQUUsQ0FBQ2dFLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUMrRSxXQUFXLENBQUNwRyxXQUFXLENBQUM3QixNQUFNLENBQUN1RixXQUFXLEVBQUUsQ0FBQztJQUU3QyxJQUFNcEMsUUFBUSxHQUFHOEUsV0FBVyxDQUFDN0UsWUFBWSxDQUFDbEUsRUFBRSxDQUFDbUUsUUFBUSxDQUFDOztJQUV0RDtJQUNBLEtBQUssSUFBSXdELENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO01BQ3hCLElBQU1xQixNQUFNLEdBQUcsRUFBRSxHQUFHckIsQ0FBQyxHQUFHLEVBQUU7TUFDMUIxRCxRQUFRLENBQUNHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFNEUsTUFBTSxDQUFDO01BQzdCL0UsUUFBUSxDQUFDUSxXQUFXLEdBQUcsSUFBSXpFLEVBQUUsQ0FBQ3NFLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUdxRCxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBRTtNQUNuRTFELFFBQVEsQ0FBQ1UsU0FBUyxHQUFHLENBQUM7TUFDdEJWLFFBQVEsQ0FBQ1csTUFBTSxFQUFFO0lBQ3JCOztJQUVBO0lBQ0FYLFFBQVEsQ0FBQ0csTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ3pCSCxRQUFRLENBQUNJLFNBQVMsR0FBRyxJQUFJckUsRUFBRSxDQUFDc0UsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUU7SUFDdkRMLFFBQVEsQ0FBQ08sSUFBSSxFQUFFO0lBRWYxRCxNQUFNLENBQUNlLE1BQU0sQ0FBQ2EsUUFBUSxDQUFDcUcsV0FBVyxDQUFDOztJQUVuQztJQUNBQSxXQUFXLENBQUN2QyxLQUFLLEdBQUcsR0FBRztJQUN2QnhHLEVBQUUsQ0FBQ3dGLEtBQUssQ0FBQ3VELFdBQVcsQ0FBQyxDQUNoQnRELEVBQUUsQ0FBQyxHQUFHLEVBQUU7TUFBRWUsS0FBSyxFQUFFLEdBQUc7TUFBRUMsT0FBTyxFQUFFO0lBQUksQ0FBQyxDQUFDLENBQ3JDaEIsRUFBRSxDQUFDLEdBQUcsRUFBRTtNQUFFZSxLQUFLLEVBQUUsR0FBRztNQUFFQyxPQUFPLEVBQUU7SUFBRSxDQUFDLENBQUMsQ0FDbkNaLElBQUksQ0FBQyxZQUFNO01BQ1IsSUFBSWtELFdBQVcsSUFBSUEsV0FBVyxDQUFDeEQsT0FBTyxFQUFFO1FBQ3BDd0QsV0FBVyxDQUFDOUMsT0FBTyxFQUFFO01BQ3pCO0lBQ0osQ0FBQyxDQUFDLENBQ0RDLEtBQUssRUFBRTtFQUNoQixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJK0MsdUJBQXVCLFdBQUFBLHdCQUFDbkksTUFBTSxFQUFFQyxNQUFNLEVBQUU7SUFDcEMsSUFBSSxDQUFDRCxNQUFNLElBQUksQ0FBQ0MsTUFBTSxFQUFFO01BQ3BCO0lBQ0o7SUFFQSxJQUFNYyxNQUFNLEdBQUdmLE1BQU0sQ0FBQ2UsTUFBTTtJQUM1QixJQUFJLENBQUNBLE1BQU0sRUFBRTtNQUNUO0lBQ0o7O0lBRUE7SUFDQSxJQUFNcUgsVUFBVSxHQUFHLElBQUlsSixFQUFFLENBQUNnRSxJQUFJLENBQUMsa0JBQWtCLENBQUM7O0lBRWxEO0lBQ0EsSUFBTUMsUUFBUSxHQUFHaUYsVUFBVSxDQUFDaEYsWUFBWSxDQUFDbEUsRUFBRSxDQUFDbUUsUUFBUSxDQUFDO0lBQ3JERixRQUFRLENBQUNHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUJILFFBQVEsQ0FBQ0ksU0FBUyxHQUFHckUsRUFBRSxDQUFDc0UsS0FBSyxDQUFDNkUsS0FBSyxDQUFDLENBQUM7SUFDckNsRixRQUFRLENBQUNPLElBQUksRUFBRTs7SUFFZjtJQUNBLElBQU0xQyxjQUFjLEdBQUdoQixNQUFNLENBQUNpQixxQkFBcUIsQ0FBQy9CLEVBQUUsQ0FBQ29DLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEUsSUFBTUMsY0FBYyxHQUFHdEIsTUFBTSxDQUFDZ0IscUJBQXFCLENBQUMvQixFQUFFLENBQUNvQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOztJQUVoRTtJQUNBLElBQU1ILFFBQVEsR0FBR0osTUFBTSxDQUFDSyxvQkFBb0IsQ0FBQ0osY0FBYyxDQUFDO0lBQzVELElBQU1RLE1BQU0sR0FBR1QsTUFBTSxDQUFDSyxvQkFBb0IsQ0FBQ0csY0FBYyxDQUFDOztJQUUxRDtJQUNBNkcsVUFBVSxDQUFDdkcsV0FBVyxDQUFDVixRQUFRLENBQUM7SUFDaENKLE1BQU0sQ0FBQ2EsUUFBUSxDQUFDd0csVUFBVSxDQUFDOztJQUUzQjtJQUNBLElBQU1wRSxRQUFRLEdBQUc3QyxRQUFRLENBQUNxQixHQUFHLENBQUNoQixNQUFNLENBQUMsQ0FBQ3lDLEdBQUcsRUFBRTtJQUMzQyxJQUFNRixRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDdEIsSUFBTUcsT0FBTyxHQUFHRixRQUFRLEdBQUdELFFBQVE7O0lBRW5DO0lBQ0E3RSxFQUFFLENBQUN3RixLQUFLLENBQUMwRCxVQUFVLENBQUMsQ0FDZnpELEVBQUUsQ0FBQ1QsT0FBTyxFQUFFO01BQUVoRCxRQUFRLEVBQUVNO0lBQU8sQ0FBQyxFQUFFO01BQUVvRCxNQUFNLEVBQUU7SUFBUyxDQUFDLENBQUMsQ0FDdkRHLElBQUksQ0FBQyxZQUFNO01BQ1I7TUFDQSxJQUFJcUQsVUFBVSxJQUFJQSxVQUFVLENBQUMzRCxPQUFPLEVBQUU7UUFDbEMyRCxVQUFVLENBQUNqRCxPQUFPLEVBQUU7TUFDeEI7SUFDSixDQUFDLENBQUMsQ0FDREMsS0FBSyxFQUFFO0VBQ2hCO0VBRUE7QUFDSjtBQUNBO0VBQ0k7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOaKgOiDveeJueaViOaSreaUvuWZqFxuICog6LSf6LSj5pKt5pS+5oqA6IO96YeK5pS+5pe255qE6KeG6KeJ54m55pWIXG4gKi9cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIOeBq+eQg+acr+eykuWtkOmihOWItuS9k++8iOWMheWQq+eykuWtkOezu+e7n+eahOmihOWItuS9k++8iVxuICAgICAgICBmaXJlYmFsbFByZWZhYjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi54Gr55CD5pyv57KS5a2Q6aKE5Yi25L2T77yIRmlyZUJhbGwucHJlZmFi77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDniIbngrjnspLlrZDpooTliLbkvZPvvIjlj6/pgInvvIlcbiAgICAgICAgZXhwbG9zaW9uUHJlZmFiOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLniIbngrjnspLlrZDpooTliLbkvZPvvIjlj6/pgInvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOWFveWMlueLguaatOeykuWtkOmihOWItuS9k++8iOWPr+mAie+8iVxuICAgICAgICBiZWFzdFJhZ2VQYXJ0aWNsZVByZWZhYjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5YW95YyW54uC5pq057KS5a2Q6aKE5Yi25L2T77yI5Y+v6YCJ77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDmsrvnlpfmnK/nspLlrZDpooTliLbkvZPvvIjlj6/pgInvvIlcbiAgICAgICAgaGVhbFBhcnRpY2xlUHJlZmFiOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmsrvnlpfmnK/nspLlrZDpooTliLbkvZPvvIjkv67lpbPph4rmlL7msrvnlpfmnK/ml7bmmL7npLrvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOeJueaViOaMgee7reaXtumXtFxuICAgICAgICBlZmZlY3REdXJhdGlvbjoge1xuICAgICAgICAgICAgZGVmYXVsdDogMS4wLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLnibnmlYjmjIHnu63ml7bpl7TvvIjnp5LvvIlcIlxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOaSreaUvuaKgOiDveeJueaViFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBza2lsbE5hbWUgLSDmioDog73lkI3np7BcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGNhc3RlciAtIOaWveazleiAheiKgueCuVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gdGFyZ2V0IC0g55uu5qCH6IqC54K5XG4gICAgICovXG4gICAgcGxheVNraWxsRWZmZWN0KHNraWxsTmFtZSwgY2FzdGVyLCB0YXJnZXQpIHtcbiAgICAgICAgc3dpdGNoIChza2lsbE5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCLngavnkIPmnK9cIjpcbiAgICAgICAgICAgICAgICB0aGlzLl9wbGF5RmlyZWJhbGxFZmZlY3QoY2FzdGVyLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIuebvuWHu1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3BsYXlTdHVuRWZmZWN0KGNhc3RlciwgdGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCLni4LmmrRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl9wbGF5UmFnZUVmZmVjdChjYXN0ZXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIuWFveWMlueLguaatFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3BsYXlCZWFzdFJhZ2VFZmZlY3QoY2FzdGVyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCLmiJjlkLxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl9wbGF5V2FyQ3J5RWZmZWN0KGNhc3Rlcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwi576k5L2T5oqk55u+XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fcGxheVNoaWVsZEVmZmVjdChjYXN0ZXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIuayu+eWl+acr1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3BsYXlIZWFsRWZmZWN0KGNhc3Rlcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwi5YeA5YyW5pyvXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fcGxheUNsZWFuc2VFZmZlY3QoY2FzdGVyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCLmma7pgJrmlLvlh7tcIjpcbiAgICAgICAgICAgICAgICAvLyDmo4Dmn6XmmK/lkKbmmK/ov5znqIvmlLvlh7tcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRhY2tNb3ZlciA9IGNhc3Rlci5nZXRDb21wb25lbnQoXCJBdHRhY2tNb3ZlclwiKTtcbiAgICAgICAgICAgICAgICBpZiAoYXR0YWNrTW92ZXIgJiYgYXR0YWNrTW92ZXIuaXNSYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g6L+c56iL5pS75Ye777ya5by56YGT54m55pWI55SxQXR0YWNrTW92ZXLlpITnkIbvvIzov5nph4zkuI3pnIDopoHmmL7npLpcbiAgICAgICAgICAgICAgICAgICAgLy8gQXR0YWNrTW92ZXLkvJrliJvlu7rlvLnpgZPoioLngrnlubbnp7vliqjliLDnm67moIfpmYTov5FcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g6L+R5oiY5pS75Ye777ya5LiN5pi+56S654m55pWI77yI5bey57uP5pyJ56e75Yqo5Yqo55S777yJXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgLy8g6buY6K6k54m55pWI77yI5bey5rOo6YeKIC0g55m954K56Zeq5YWJ54m55pWI77yJXG4gICAgICAgICAgICAvLyB0aGlzLl9wbGF5RGVmYXVsdEVmZmVjdChjYXN0ZXIsIHRhcmdldCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog54Gr55CD5pyv54m55pWIIC0g5L2/55So57KS5a2Q57O757uf5a6e546w6aOe6KGM5by56YGTICsg54iG54K45pWI5p6cXG4gICAgICovXG4gICAgX3BsYXlGaXJlYmFsbEVmZmVjdChjYXN0ZXIsIHRhcmdldCkge1xuICAgICAgICAvLyBjYy5sb2coYFtTa2lsbEVmZmVjdFBsYXllcl0gPT09PT0g5byA5aeL5pKt5pS+54Gr55CD5pyv54m55pWIID09PT09YCk7XG4gICAgICAgIC8vIGNjLmxvZyhgW1NraWxsRWZmZWN0UGxheWVyXSBjYXN0ZXI6ICR7Y2FzdGVyID8gY2FzdGVyLm5hbWUgOiAnbnVsbCd9LCB0YXJnZXQ6ICR7dGFyZ2V0ID8gdGFyZ2V0Lm5hbWUgOiAnbnVsbCd9YCk7XG5cbiAgICAgICAgaWYgKCFjYXN0ZXIgfHwgIXRhcmdldCkge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJbU2tpbGxFZmZlY3RQbGF5ZXJdIOeBq+eQg+acr++8mmNhc3RlcuaIlnRhcmdldOS4uuepulwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGNhc3Rlci5wYXJlbnQ7XG4gICAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIltTa2lsbEVmZmVjdFBsYXllcl0g54Gr55CD5pyv77yaY2FzdGVyLnBhcmVudOS4uuepulwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNjLmxvZyhgW1NraWxsRWZmZWN0UGxheWVyXSBwYXJlbnToioLngrk6ICR7cGFyZW50Lm5hbWV9LCDlrZDoioLngrnmlbDph486ICR7cGFyZW50LmNoaWxkcmVuLmxlbmd0aH1gKTtcblxuICAgICAgICAvLyDojrflj5bkuJbnlYzlnZDmoIfvvIznhLblkI7ovazmjaLkuLrniLboioLngrnnmoTmnKzlnLDlnZDmoIdcbiAgICAgICAgLy8g6LW354K577ya5pa95rOV6ICF55qE5LiW55WM5Z2Q5qCHXG4gICAgICAgIGNvbnN0IGNhc3RlcldvcmxkUG9zID0gY2FzdGVyLnBhcmVudCA/XG4gICAgICAgICAgICBjYXN0ZXIucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYXN0ZXIucG9zaXRpb24pIDpcbiAgICAgICAgICAgIGNhc3Rlci5wb3NpdGlvbjtcbiAgICAgICAgY29uc3Qgc3RhcnRQb3MgPSBwYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoY2FzdGVyV29ybGRQb3MpLmFkZChjYy52MigwLCA0MCkpOyAvLyDotbfngrnph4rmlL7kvY3nva5cblxuICAgICAgICAvLyDnu4jngrnvvJrnm67moIfnmoTkuJbnlYzlnZDmoIdcbiAgICAgICAgY29uc3QgdGFyZ2V0V29ybGRQb3MgPSB0YXJnZXQucGFyZW50ID9cbiAgICAgICAgICAgIHRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRhcmdldC5wb3NpdGlvbikgOlxuICAgICAgICAgICAgdGFyZ2V0LnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBlbmRQb3MgPSBwYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodGFyZ2V0V29ybGRQb3MpLmFkZChjYy52MigwLCA0MCkpOyAvLyDnu4jngrnkvY3nva5cblxuICAgICAgICAvLyBjYy5sb2coYFtTa2lsbEVmZmVjdFBsYXllcl0g6LW354K55L2N572uOiAoJHtzdGFydFBvcy54LnRvRml4ZWQoMSl9LCAke3N0YXJ0UG9zLnkudG9GaXhlZCgxKX0pLCDnu4jngrnkvY3nva46ICgke2VuZFBvcy54LnRvRml4ZWQoMSl9LCAke2VuZFBvcy55LnRvRml4ZWQoMSl9KWApO1xuICAgICAgICAvLyBjYy5sb2coYFtTa2lsbEVmZmVjdFBsYXllcl0g5pa95rOV6ICF5LiW55WM5Z2Q5qCHOiAoJHtjYXN0ZXJXb3JsZFBvcy54LnRvRml4ZWQoMSl9LCAke2Nhc3RlcldvcmxkUG9zLnkudG9GaXhlZCgxKX0pLCDnm67moIfkuJbnlYzlnZDmoIc6ICgke3RhcmdldFdvcmxkUG9zLngudG9GaXhlZCgxKX0sICR7dGFyZ2V0V29ybGRQb3MueS50b0ZpeGVkKDEpfSlgKTtcbiAgICAgICAgLy8gY2MubG9nKGBbU2tpbGxFZmZlY3RQbGF5ZXJdIGZpcmViYWxsUHJlZmFiOiAke3RoaXMuZmlyZWJhbGxQcmVmYWIgPyAn5bey57uR5a6aJyA6ICfmnKrnu5HlrponfWApO1xuXG4gICAgICAgIGxldCBmaXJlYmFsbCA9IG51bGw7XG5cbiAgICAgICAgLy8g5LyY5YWI5L2/55So57KS5a2Q6aKE5Yi25L2TXG4gICAgICAgIGlmICh0aGlzLmZpcmViYWxsUHJlZmFiKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZpcmViYWxsID0gY2MuaW5zdGFudGlhdGUodGhpcy5maXJlYmFsbFByZWZhYik7XG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKGBbU2tpbGxFZmZlY3RQbGF5ZXJdIOWunuS+i+WMlueykuWtkOmihOWItuS9k+aIkOWKn2ApO1xuXG4gICAgICAgICAgICAgICAgLy8g56Gu5L+d6IqC54K55r+A5rS7XG4gICAgICAgICAgICAgICAgZmlyZWJhbGwuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHBhcmVudC5hZGRDaGlsZChmaXJlYmFsbCk7XG4gICAgICAgICAgICAgICAgZmlyZWJhbGwuc2V0UG9zaXRpb24oc3RhcnRQb3MpO1xuXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKGBbU2tpbGxFZmZlY3RQbGF5ZXJdIOeBq+eQg+iKgueCueW3sua3u+WKoOWIsOWcuuaZr++8jOS9jee9rjogKCR7c3RhcnRQb3MueC50b0ZpeGVkKDEpfSwgJHtzdGFydFBvcy55LnRvRml4ZWQoMSl9KWApO1xuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhgW1NraWxsRWZmZWN0UGxheWVyXSDngavnkIPoioLngrlhY3RpdmU6ICR7ZmlyZWJhbGwuYWN0aXZlfSwg54i26IqC54K5OiAke2ZpcmViYWxsLnBhcmVudCA/IGZpcmViYWxsLnBhcmVudC5uYW1lIDogJ251bGwnfWApO1xuXG4gICAgICAgICAgICAgICAgLy8g6I635Y+W57KS5a2Q57O757uf57uE5Lu25bm256Gu5L+d5a6D5q2j5Zyo5pKt5pS+XG4gICAgICAgICAgICAgICAgY29uc3QgcGFydGljbGVTeXN0ZW0gPSBmaXJlYmFsbC5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pO1xuICAgICAgICAgICAgICAgIGlmIChwYXJ0aWNsZVN5c3RlbSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coYFtTa2lsbEVmZmVjdFBsYXllcl0g5om+5Yiw57KS5a2Q57O757uf57uE5Lu277yMaXNQbGF5aW5nOiAke3BhcnRpY2xlU3lzdGVtLmlzUGxheWluZ31gKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyDnoa7kv53nspLlrZDns7vnu5/lkK/nlKhcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0uZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c57KS5a2Q57O757uf6K6+572u5LqG6Ieq5Yqo5pKt5pS+77yM56Gu5L+d5a6D5q2j5Zyo6L+Q6KGMXG4gICAgICAgICAgICAgICAgICAgIGlmICghcGFydGljbGVTeXN0ZW0uaXNQbGF5aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbS5yZXNldFN5c3RlbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKGBbU2tpbGxFZmZlY3RQbGF5ZXJdIOmHjee9ruW5tuWQr+WKqOeykuWtkOezu+e7n2ApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g6K6+572u57KS5a2Q57O757uf5Li66Lef6ZqP5qih5byP77yI6L+Z5qC357KS5a2Q5Lya6Lef6ZqP6IqC54K556e75Yqo77yJXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtLnBvc2l0aW9uVHlwZSA9IGNjLlBhcnRpY2xlU3lzdGVtLlBvc2l0aW9uVHlwZS5SRUxBVElWRTtcblxuICAgICAgICAgICAgICAgICAgICAvLyDlvLrliLbliLfmlrDnspLlrZDns7vnu59cbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0uZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbS5lbmFibGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coYFtTa2lsbEVmZmVjdFBsYXllcl0g57KS5a2Q57O757uf5bey6YWN572u77yMaXNQbGF5aW5nOiAke3BhcnRpY2xlU3lzdGVtLmlzUGxheWluZ31gKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYy53YXJuKGBbU2tpbGxFZmZlY3RQbGF5ZXJdIOeBq+eQg+mihOWItuS9k+S4reayoeacieaJvuWIsFBhcnRpY2xlU3lzdGVt57uE5Lu2YCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g6K6h566X5pa55ZCR6KeS5bqmXG4gICAgICAgICAgICAgICAgbGV0IGRpciA9IGVuZFBvcy5zdWIoc3RhcnRQb3MpO1xuICAgICAgICAgICAgICAgIGxldCByYWQgPSBNYXRoLmF0YW4yKGRpci55LCBkaXIueCk7XG4gICAgICAgICAgICAgICAgZmlyZWJhbGwuYW5nbGUgPSAtKHJhZCAqIDE4MCAvIE1hdGguUEkpICsgOTA7XG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKGBbU2tpbGxFZmZlY3RQbGF5ZXJdIOeBq+eQg+inkuW6pjogJHtmaXJlYmFsbC5hbmdsZS50b0ZpeGVkKDEpfeW6pmApO1xuXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKFwiW1NraWxsRWZmZWN0UGxheWVyXSDkvb/nlKjnspLlrZDpooTliLbkvZPmkq3mlL7ngavnkIPmnK/nibnmlYhcIik7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtTa2lsbEVmZmVjdFBsYXllcl0g5a6e5L6L5YyW57KS5a2Q6aKE5Yi25L2T5aSx6LSlOiAke2UubWVzc2FnZX1gKTtcbiAgICAgICAgICAgICAgICBmaXJlYmFsbCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlpoLmnpzmsqHmnInpooTliLbkvZPmiJblrp7kvovljJblpLHotKXvvIzkvb/nlKhHcmFwaGljc+e7mOWItlxuICAgICAgICBpZiAoIWZpcmViYWxsKSB7XG4gICAgICAgICAgICBjYy53YXJuKFwiW1NraWxsRWZmZWN0UGxheWVyXSDmnKrmib7liLDngavnkIPnspLlrZDpooTliLbkvZPmiJblrp7kvovljJblpLHotKXvvIzkvb/nlKhHcmFwaGljc+e7mOWItlwiKTtcblxuICAgICAgICAgICAgLy8g5Zue6YCA5pa55qGI77ya5L2/55SoR3JhcGhpY3Pnu5jliLbngavnkIPvvIjljbPkvb/msqHmnInpooTliLbkvZPkuZ/og73mmL7npLrvvIlcbiAgICAgICAgICAgIGZpcmViYWxsID0gbmV3IGNjLk5vZGUoXCJGaXJlYmFsbFwiKTtcbiAgICAgICAgICAgIGZpcmViYWxsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBmaXJlYmFsbC5zZXRQb3NpdGlvbihzdGFydFBvcyk7XG5cbiAgICAgICAgICAgIC8vIOa3u+WKoOWbvuW9oue7hOS7tu+8iOS9v+eUqOWchuW9ouS7o+ihqOeBq+eQg++8iVxuICAgICAgICAgICAgY29uc3QgZ3JhcGhpY3MgPSBmaXJlYmFsbC5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2lyY2xlKDAsIDAsIDE1KTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmZpbGxDb2xvciA9IGNjLkNvbG9yLlJFRDtcbiAgICAgICAgICAgIGdyYXBoaWNzLmZpbGwoKTtcblxuICAgICAgICAgICAgLy8g5re75Yqg5YWJ5pmV5pWI5p6cXG4gICAgICAgICAgICBncmFwaGljcy5jaXJjbGUoMCwgMCwgMjApO1xuICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5PUkFOR0U7XG4gICAgICAgICAgICBncmFwaGljcy5saW5lV2lkdGggPSAzO1xuICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIHBhcmVudC5hZGRDaGlsZChmaXJlYmFsbCk7XG5cbiAgICAgICAgICAgIC8vIOiuoeeul+aWueWQkeinkuW6plxuICAgICAgICAgICAgbGV0IGRpciA9IGVuZFBvcy5zdWIoc3RhcnRQb3MpO1xuICAgICAgICAgICAgbGV0IHJhZCA9IE1hdGguYXRhbjIoZGlyLnksIGRpci54KTtcbiAgICAgICAgICAgIGZpcmViYWxsLmFuZ2xlID0gLShyYWQgKiAxODAgLyBNYXRoLlBJKSArIDkwO1xuXG4gICAgICAgICAgICAvLyBjYy5sb2coYFtTa2lsbEVmZmVjdFBsYXllcl0gR3JhcGhpY3PngavnkIPlt7LliJvlu7rlubbmt7vliqDliLDlnLrmma9gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOmjnuihjOaXtumXtO+8iOmAn+W6pui2iuWkp++8jOmjnuihjOaXtumXtOi2iuefre+8iVxuICAgICAgICBjb25zdCBmbHlTcGVlZCA9IDEwMDA7IC8vIOWDj+e0oC/np5LvvIzlj6/oh6rosINcbiAgICAgICAgbGV0IGRpciA9IGVuZFBvcy5zdWIoc3RhcnRQb3MpO1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGRpci5tYWcoKTsgLy8g6Led56a7XG5cbiAgICAgICAgLy8g6aOe6KGM5Yqo55S7XG4gICAgICAgIGNvbnN0IGZseVRpbWUgPSBNYXRoLm1heCgwLjEsIGRpc3RhbmNlIC8gZmx5U3BlZWQpOyAvLyDoh7PlsJEwLjHnp5LvvIzpgb/lhY3pmaTpm7ZcbiAgICAgICAgLy8gY2MubG9nKGBbU2tpbGxFZmZlY3RQbGF5ZXJdIOmjnuihjOaXtumXtDogJHtmbHlUaW1lLnRvRml4ZWQoMil956eSLCDot53nprs6ICR7ZGlzdGFuY2UudG9GaXhlZCgxKX3lg4/ntKBgKTtcblxuICAgICAgICAvLyDnoa7kv53oioLngrnlnKjmraPnoa7nmoTlsYLnuqfvvIjmlL7lnKjmnIDkuIrlsYLvvIlcbiAgICAgICAgZmlyZWJhbGwuc2V0U2libGluZ0luZGV4KHBhcmVudC5jaGlsZHJlbi5sZW5ndGggLSAxKTtcbiAgICAgICAgLy8gY2MubG9nKGBbU2tpbGxFZmZlY3RQbGF5ZXJdIOeBq+eQg+iKgueCueWxgue6pzogJHtmaXJlYmFsbC5nZXRTaWJsaW5nSW5kZXgoKX1gKTtcblxuICAgICAgICAvLyDliJvlu7rkvY3nva7mm7TmlrDlh73mlbDvvIznlKjkuo7lnKjpo57ooYzov4fnqIvkuK3mm7TmlrDnspLlrZDkvY3nva5cbiAgICAgICAgbGV0IGN1cnJlbnRQb3MgPSBzdGFydFBvcztcbiAgICAgICAgY29uc3QgdXBkYXRlUG9zaXRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZmlyZWJhbGwgJiYgZmlyZWJhbGwuaXNWYWxpZCAmJiBmaXJlYmFsbC5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBmaXJlYmFsbC5zZXRQb3NpdGlvbihjdXJyZW50UG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBjYy5sb2coYFtTa2lsbEVmZmVjdFBsYXllcl0g5byA5aeL54Gr55CD6aOe6KGM5Yqo55S7YCk7XG4gICAgICAgIGNjLnR3ZWVuKGZpcmViYWxsKVxuICAgICAgICAgICAgLnRvKGZseVRpbWUsIHsgcG9zaXRpb246IGVuZFBvcyB9LCB7XG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnc2luZU91dCcsXG4gICAgICAgICAgICAgICAgb25VcGRhdGU6ICh0YXJnZXQsIHJhdGlvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWunuaXtuabtOaWsOS9jee9ru+8iOeUqOS6jueykuWtkOezu+e7n+i3n+maj++8iVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9zID0gY2MudjIoXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFBvcy54ICsgKGVuZFBvcy54IC0gc3RhcnRQb3MueCkgKiByYXRpbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0UG9zLnkgKyAoZW5kUG9zLnkgLSBzdGFydFBvcy55KSAqIHJhdGlvXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coYFtTa2lsbEVmZmVjdFBsYXllcl0g54Gr55CD5Yiw6L6+55uu5qCH5L2N572uYCk7XG4gICAgICAgICAgICAgICAgLy8g5Yiw6L6+55uu5qCH5ZCO5pKt5pS+54iG54K45pWI5p6cXG4gICAgICAgICAgICAgICAgdGhpcy5fcGxheUV4cGxvc2lvbkVmZmVjdCh0YXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgLy8g5bu26L+f6ZSA5q+B54Gr55CD6IqC54K577yI57uZ57KS5a2Q5LiA5Lqb5pe26Ze05raI5aSx77yJXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmlyZWJhbGwgJiYgZmlyZWJhbGwuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKGBbU2tpbGxFZmZlY3RQbGF5ZXJdIOmUgOavgeeBq+eQg+iKgueCuWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5YGc5q2i57KS5a2Q57O757ufXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJ0aWNsZVN5c3RlbSA9IGZpcmViYWxsLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFydGljbGVTeXN0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbS5zdG9wU3lzdGVtKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJlYmFsbC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAwLjUpOyAvLyDlu7bov58wLjXnp5LplIDmr4HvvIzorqnnspLlrZDoh6rnhLbmtojlpLFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICAvLyDml4vovazliqjnlLvvvIjlj6/pgInvvIzlpoLmnpznspLlrZDns7vnu5/kuI3pnIDopoHml4vovazlj6/ku6Xms6jph4rmjonvvIlcbiAgICAgICAgY2MudHdlZW4oZmlyZWJhbGwpXG4gICAgICAgICAgICAuYnkoZmx5VGltZSwgeyBhbmdsZTogMzYwIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICAvLyBjYy5sb2coYFtTa2lsbEVmZmVjdFBsYXllcl0gPT09PT0g54Gr55CD5pyv54m55pWI5pKt5pS+5a6M5oiQID09PT09YCk7XG4gICAgICAgIC8vIGNjLmxvZyhgW1NraWxsRWZmZWN0UGxheWVyXSDngavnkIPmnK/nibnmlYjlt7Lmkq3mlL7vvJrku44gKCR7c3RhcnRQb3MueC50b0ZpeGVkKDApfSwgJHtzdGFydFBvcy55LnRvRml4ZWQoMCl9KSDliLAgKCR7ZW5kUG9zLngudG9GaXhlZCgwKX0sICR7ZW5kUG9zLnkudG9GaXhlZCgwKX0pYCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOeIhueCuOeJueaViCAtIOaUr+aMgeeykuWtkOezu+e7n+aIlkdyYXBoaWNz57uY5Yi2XG4gICAgICovXG4gICAgX3BsYXlFeHBsb3Npb25FZmZlY3QodGFyZ2V0KSB7XG4gICAgICAgIGlmICghdGFyZ2V0IHx8ICF0YXJnZXQucGFyZW50KSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIltTa2lsbEVmZmVjdFBsYXllcl0g54iG54K454m55pWI77yadGFyZ2V05oiWdGFyZ2V0LnBhcmVudOS4uuepulwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4cGxvc2lvblBvcyA9IHRhcmdldC5nZXRQb3NpdGlvbigpO1xuXG4gICAgICAgIC8vIOWmguaenOe7keWumuS6hueIhueCuOeykuWtkOmihOWItuS9k++8jOS9v+eUqOeykuWtkOezu+e7n1xuICAgICAgICBpZiAodGhpcy5leHBsb3Npb25QcmVmYWIpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGxvc2lvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZXhwbG9zaW9uUHJlZmFiKTtcbiAgICAgICAgICAgIHRhcmdldC5wYXJlbnQuYWRkQ2hpbGQoZXhwbG9zaW9uKTtcbiAgICAgICAgICAgIGV4cGxvc2lvbi5zZXRQb3NpdGlvbihleHBsb3Npb25Qb3MpO1xuXG4gICAgICAgICAgICAvLyDojrflj5bnspLlrZDns7vnu5/nu4Tku7ZcbiAgICAgICAgICAgIGNvbnN0IHBhcnRpY2xlU3lzdGVtID0gZXhwbG9zaW9uLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSk7XG4gICAgICAgICAgICBpZiAocGFydGljbGVTeXN0ZW0pIHtcbiAgICAgICAgICAgICAgICAvLyDnoa7kv53nspLlrZDns7vnu5/mraPlnKjmkq3mlL5cbiAgICAgICAgICAgICAgICBpZiAoIXBhcnRpY2xlU3lzdGVtLmlzUGxheWluZykge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbS5yZXNldFN5c3RlbSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDorr7nva7oh6rliqjnp7vpmaTvvIjnspLlrZDmkq3mlL7lrozmiJDlkI7oh6rliqjplIDmr4HoioLngrnvvIlcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbS5hdXRvUmVtb3ZlT25GaW5pc2ggPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmsqHmnInnspLlrZDns7vnu5/vvIzlu7bov5/plIDmr4FcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleHBsb3Npb24gJiYgZXhwbG9zaW9uLmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGxvc2lvbi5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAxLjApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjYy5sb2coXCJbU2tpbGxFZmZlY3RQbGF5ZXJdIOS9v+eUqOeykuWtkOezu+e7n+aSreaUvueIhueCuOeJueaViFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWbnumAgOaWueahiO+8muS9v+eUqEdyYXBoaWNz57uY5Yi254iG54K45pWI5p6cXG4gICAgICAgICAgICBjb25zdCBleHBsb3Npb24gPSBuZXcgY2MuTm9kZShcIkV4cGxvc2lvblwiKTtcbiAgICAgICAgICAgIGV4cGxvc2lvbi5zZXRQb3NpdGlvbihleHBsb3Npb25Qb3MpO1xuXG4gICAgICAgICAgICBjb25zdCBncmFwaGljcyA9IGV4cGxvc2lvbi5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2lyY2xlKDAsIDAsIDMwKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmZpbGxDb2xvciA9IGNjLkNvbG9yLk9SQU5HRTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmZpbGwoKTtcblxuICAgICAgICAgICAgdGFyZ2V0LnBhcmVudC5hZGRDaGlsZChleHBsb3Npb24pO1xuXG4gICAgICAgICAgICAvLyDniIbngrjmianmlaMgKyDmt6Hlh7rliqjnlLtcbiAgICAgICAgICAgIGNjLnR3ZWVuKGV4cGxvc2lvbilcbiAgICAgICAgICAgICAgICAudG8oMC4zLCB7IHNjYWxlOiAyLCBvcGFjaXR5OiAwIH0pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBleHBsb3Npb24uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIC8vIGNjLmxvZyhcIltTa2lsbEVmZmVjdFBsYXllcl0g5L2/55SoR3JhcGhpY3Pnu5jliLbniIbngrjnibnmlYhcIik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog55u+5Ye754m55pWIIC0g6ZyH6I2h5rOiXG4gICAgICovXG4gICAgX3BsYXlTdHVuRWZmZWN0KGNhc3RlciwgdGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHNob2Nrd2F2ZSA9IG5ldyBjYy5Ob2RlKFwiU2hvY2t3YXZlXCIpO1xuICAgICAgICBzaG9ja3dhdmUuc2V0UG9zaXRpb24odGFyZ2V0LmdldFBvc2l0aW9uKCkpO1xuXG4gICAgICAgIGNvbnN0IGdyYXBoaWNzID0gc2hvY2t3YXZlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgICAgIGdyYXBoaWNzLmNpcmNsZSgwLCAwLCAyNSk7XG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuWUVMTE9XO1xuICAgICAgICBncmFwaGljcy5saW5lV2lkdGggPSA1O1xuICAgICAgICBncmFwaGljcy5zdHJva2UoKTtcblxuICAgICAgICB0YXJnZXQucGFyZW50LmFkZENoaWxkKHNob2Nrd2F2ZSk7XG5cbiAgICAgICAgLy8g6ZyH6I2h5rOi5omp5pWj5Yqo55S7XG4gICAgICAgIGNjLnR3ZWVuKHNob2Nrd2F2ZSlcbiAgICAgICAgICAgIC50bygwLjQsIHsgc2NhbGU6IDIsIG9wYWNpdHk6IDAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzaG9ja3dhdmUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgICAgIC8vIOebruagh+aZg+WKqOaViOaenFxuICAgICAgICBjb25zdCBvcmlnaW5hbFBvcyA9IHRhcmdldC5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjYy50d2Vlbih0YXJnZXQpXG4gICAgICAgICAgICAuYnkoMC4wNSwgeyB4OiA1IH0pXG4gICAgICAgICAgICAuYnkoMC4wNSwgeyB4OiAtMTAgfSlcbiAgICAgICAgICAgIC5ieSgwLjA1LCB7IHg6IDEwIH0pXG4gICAgICAgICAgICAuYnkoMC4wNSwgeyB4OiAtNSB9KVxuICAgICAgICAgICAgLnRvKDAuMDUsIHsgcG9zaXRpb246IG9yaWdpbmFsUG9zIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog54uC5pq054m55pWIIC0g57qi6Imy5YWJ546vXG4gICAgICovXG4gICAgX3BsYXlSYWdlRWZmZWN0KGNhc3Rlcikge1xuICAgICAgICBjb25zdCBhdXJhID0gbmV3IGNjLk5vZGUoXCJSYWdlQXVyYVwiKTtcbiAgICAgICAgYXVyYS5zZXRQb3NpdGlvbigwLCAwKTtcblxuICAgICAgICBjb25zdCBncmFwaGljcyA9IGF1cmEuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgZ3JhcGhpY3MuY2lyY2xlKDAsIDAsIDQwKTtcbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5SRUQ7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVXaWR0aCA9IDM7XG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xuXG4gICAgICAgIGNhc3Rlci5hZGRDaGlsZChhdXJhKTtcblxuICAgICAgICAvLyDohInlhrLliqjnlLtcbiAgICAgICAgY2MudHdlZW4oYXVyYSlcbiAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGU6IDEuMywgb3BhY2l0eTogMTUwIH0pXG4gICAgICAgICAgICAudG8oMC4zLCB7IHNjYWxlOiAxLjAsIG9wYWNpdHk6IDI1NSB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGF1cmEuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDlhb3ljJbni4LmmrTnibnmlYggLSDmjIHnu63mmL7npLrnm7TliLBCdWZm57uT5p2fXG4gICAgICovXG4gICAgX3BsYXlCZWFzdFJhZ2VFZmZlY3QoY2FzdGVyKSB7XG4gICAgICAgIGlmICghY2FzdGVyIHx8ICFjYXN0ZXIuaXNWYWxpZCkge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJbU2tpbGxFZmZlY3RQbGF5ZXJdIOWFveWMlueLguaatO+8mmNhc3RlcuS4uuepulwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNjLmxvZyhgW1NraWxsRWZmZWN0UGxheWVyXSDmkq3mlL7lhb3ljJbni4LmmrTnibnmlYjvvJoke2Nhc3Rlci5uYW1lfWApO1xuXG4gICAgICAgIC8vIOS/neWtmOWOn+Wni+eKtuaAge+8iOWmguaenOi/mOayoeacieS/neWtmO+8iVxuICAgICAgICBpZiAoIWNhc3Rlci5fYmVhc3RSYWdlT3JpZ2luYWxTY2FsZVgpIHtcbiAgICAgICAgICAgIGNhc3Rlci5fYmVhc3RSYWdlT3JpZ2luYWxTY2FsZVggPSBjYXN0ZXIuc2NhbGVYO1xuICAgICAgICAgICAgY2FzdGVyLl9iZWFzdFJhZ2VPcmlnaW5hbFNjYWxlWSA9IGNhc3Rlci5zY2FsZVk7XG4gICAgICAgICAgICBjYXN0ZXIuX2JlYXN0UmFnZU9yaWdpbmFsQ29sb3IgPSBjYXN0ZXIuY29sb3IuY2xvbmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDEuIOaAqueJqeWPmOWkp++8iOaMgee7reaYvuekuu+8iVxuICAgICAgICBjb25zdCBiZWFzdFNjYWxlID0gMS4yOyAvLyDlj5jlpKcyMCVcbiAgICAgICAgY2MudHdlZW4oY2FzdGVyKVxuICAgICAgICAgICAgLnRvKDAuMiwge1xuICAgICAgICAgICAgICAgIHNjYWxlWDogY2FzdGVyLl9iZWFzdFJhZ2VPcmlnaW5hbFNjYWxlWCAqIGJlYXN0U2NhbGUsXG4gICAgICAgICAgICAgICAgc2NhbGVZOiBjYXN0ZXIuX2JlYXN0UmFnZU9yaWdpbmFsU2NhbGVZICogYmVhc3RTY2FsZVxuICAgICAgICAgICAgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICAgICAgLy8gMi4g6aKc6Imy5Y+Y57qi77yI5oyB57ut5pi+56S677yJXG4gICAgICAgIGNvbnN0IHJhZ2VDb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDEwMCwgMTAwKTtcbiAgICAgICAgY2MudHdlZW4oY2FzdGVyKVxuICAgICAgICAgICAgLnRvKDAuMiwgeyBjb2xvcjogcmFnZUNvbG9yIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICAvLyAzLiDliJ3lp4vohInlhrLmlYjmnpzvvIjkuIDmrKHmgKfvvIlcbiAgICAgICAgdGhpcy5fcGxheUJlYXN0UmFnZVB1bHNlKGNhc3Rlcik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOaSreaUvuWIneWni+iEieWGsuaViOaenO+8iOS4gOasoeaAp++8iVxuICAgICAqL1xuICAgIF9wbGF5QmVhc3RSYWdlUHVsc2UoY2FzdGVyKSB7XG4gICAgICAgIC8vIOWIm+W7uuiEieWGsuWchuWciFxuICAgICAgICBjb25zdCBwdWxzZSA9IG5ldyBjYy5Ob2RlKFwiQmVhc3RSYWdlUHVsc2VcIik7XG4gICAgICAgIHB1bHNlLnNldFBvc2l0aW9uKDAsIDApO1xuXG4gICAgICAgIGNvbnN0IGdyYXBoaWNzID0gcHVsc2UuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgZ3JhcGhpY3MuY2lyY2xlKDAsIDAsIDQwKTtcbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5SRUQ7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVXaWR0aCA9IDQ7XG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xuXG4gICAgICAgIGNhc3Rlci5hZGRDaGlsZChwdWxzZSk7XG5cbiAgICAgICAgLy8g6ISJ5Yay5omp5pWj5Yqo55S777yI5LiA5qyh5oCn77yJXG4gICAgICAgIHB1bHNlLnNjYWxlID0gMC41O1xuICAgICAgICBwdWxzZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICBjYy50d2VlbihwdWxzZSlcbiAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGU6IDEuNSwgb3BhY2l0eTogMjAwIH0pXG4gICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAyLjAsIG9wYWNpdHk6IDAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocHVsc2UgJiYgcHVsc2UuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBwdWxzZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDnp7vpmaTlhb3ljJbni4LmmrTnibnmlYhcbiAgICAgKi9cbiAgICBzdG9wQmVhc3RSYWdlRWZmZWN0KGNhc3Rlcikge1xuICAgICAgICBpZiAoIWNhc3RlciB8fCAhY2FzdGVyLmlzVmFsaWQpIHJldHVybjtcblxuICAgICAgICAvLyBjYy5sb2coYFtTa2lsbEVmZmVjdFBsYXllcl0g56e76Zmk5YW95YyW54uC5pq054m55pWI77yaJHtjYXN0ZXIubmFtZX1gKTtcblxuICAgICAgICAvLyDmgaLlpI3nvKnmlL5cbiAgICAgICAgaWYgKGNhc3Rlci5fYmVhc3RSYWdlT3JpZ2luYWxTY2FsZVgpIHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKGNhc3RlcilcbiAgICAgICAgICAgICAgICAudG8oMC4zLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjYWxlWDogY2FzdGVyLl9iZWFzdFJhZ2VPcmlnaW5hbFNjYWxlWCxcbiAgICAgICAgICAgICAgICAgICAgc2NhbGVZOiBjYXN0ZXIuX2JlYXN0UmFnZU9yaWdpbmFsU2NhbGVZXG4gICAgICAgICAgICAgICAgfSwgeyBlYXNpbmc6ICdiYWNrSW4nIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmgaLlpI3popzoibJcbiAgICAgICAgaWYgKGNhc3Rlci5fYmVhc3RSYWdlT3JpZ2luYWxDb2xvcikge1xuICAgICAgICAgICAgY2MudHdlZW4oY2FzdGVyKVxuICAgICAgICAgICAgICAgIC50bygwLjMsIHsgY29sb3I6IGNhc3Rlci5fYmVhc3RSYWdlT3JpZ2luYWxDb2xvciB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICog5oiY5ZC854m55pWIIC0g5omp5pWj5rOi57q577yI5LiA5qyh5oCn77yJXG4gICAgICovXG4gICAgX3BsYXlXYXJDcnlFZmZlY3QoY2FzdGVyKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlV2FyQ3J5V2F2ZShjYXN0ZXIpO1xuICAgICAgICAgICAgfSwgaSAqIDAuMik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yib5bu65Y2V5Liq5oiY5ZC85rOi57q5XG4gICAgICovXG4gICAgX2NyZWF0ZVdhckNyeVdhdmUoY2FzdGVyKSB7XG4gICAgICAgIGlmICghY2FzdGVyIHx8ICFjYXN0ZXIuaXNWYWxpZCB8fCAhY2FzdGVyLnBhcmVudCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHdhdmUgPSBuZXcgY2MuTm9kZShcIldhckNyeVdhdmVcIik7XG4gICAgICAgIHdhdmUuc2V0UG9zaXRpb24oY2FzdGVyLmdldFBvc2l0aW9uKCkpO1xuXG4gICAgICAgIGNvbnN0IGdyYXBoaWNzID0gd2F2ZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICBncmFwaGljcy5jaXJjbGUoMCwgMCwgMzApO1xuICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvciA9IGNjLkNvbG9yLk9SQU5HRTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVdpZHRoID0gNDtcbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlKCk7XG5cbiAgICAgICAgY2FzdGVyLnBhcmVudC5hZGRDaGlsZCh3YXZlKTtcblxuICAgICAgICAvLyDms6LnurnmianmlaPvvIjojIPlm7TosIPlpKfvvJrku45zY2FsZTogNOaUueS4unNjYWxlOiA277yJXG4gICAgICAgIHdhdmUuc2NhbGUgPSAxO1xuICAgICAgICBjYy50d2Vlbih3YXZlKVxuICAgICAgICAgICAgLnRvKDEuMCwgeyBzY2FsZTogNiwgb3BhY2l0eTogMCB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh3YXZlICYmIHdhdmUuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICB3YXZlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWQr+WKqOaImOWQvOaMgee7reazoue6ueaViOaenFxuICAgICAqL1xuICAgIF9zdGFydFdhckNyeUNvbnRpbnVvdXNXYXZlcyhjYXN0ZXIpIHtcbiAgICAgICAgaWYgKCFjYXN0ZXIgfHwgIWNhc3Rlci5pc1ZhbGlkKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIltTa2lsbEVmZmVjdFBsYXllcl0g5oiY5ZC85oyB57ut5rOi57q577yaY2FzdGVy5Li656m6XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5aaC5p6c5bey57uP5Zyo6L+Q6KGM77yM5YWI5YGc5q2iXG4gICAgICAgIHRoaXMuX3N0b3BXYXJDcnlDb250aW51b3VzV2F2ZXMoY2FzdGVyKTtcblxuICAgICAgICAvLyBjYy5sb2coYFtTa2lsbEVmZmVjdFBsYXllcl0g5ZCv5Yqo5oiY5ZC85oyB57ut5rOi57q577yaJHtjYXN0ZXIubmFtZX1gKTtcblxuICAgICAgICAvLyDmoIforrDmraPlnKjov5DooYxcbiAgICAgICAgY2FzdGVyLl93YXJDcnlXYXZlc0FjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgLy8g56uL5Y2z5pKt5pS+5LiA5qyh5rOi57q5XG4gICAgICAgIHRoaXMuX2NyZWF0ZVdhckNyeVdhdmUoY2FzdGVyKTtcblxuICAgICAgICAvLyDmr4/pmpQwLjjnp5Lmkq3mlL7kuIDmrKHms6LnurnvvIjmjIHnu60z56eS77yM5YWx57qmNOasoe+8iVxuICAgICAgICBjb25zdCB3YXZlSW50ZXJ2YWwgPSAwLjg7XG4gICAgICAgIGNvbnN0IHNjaGVkdWxlV2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICghY2FzdGVyIHx8ICFjYXN0ZXIuaXNWYWxpZCB8fCAhY2FzdGVyLl93YXJDcnlXYXZlc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVdhckNyeVdhdmUoY2FzdGVyKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHNjaGVkdWxlV2F2ZSwgd2F2ZUludGVydmFsKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShzY2hlZHVsZVdhdmUsIHdhdmVJbnRlcnZhbCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWBnOatouaImOWQvOaMgee7reazoue6ueaViOaenFxuICAgICAqL1xuICAgIF9zdG9wV2FyQ3J5Q29udGludW91c1dhdmVzKGNhc3Rlcikge1xuICAgICAgICBpZiAoIWNhc3RlciB8fCAhY2FzdGVyLmlzVmFsaWQpIHJldHVybjtcblxuICAgICAgICAvLyBjYy5sb2coYFtTa2lsbEVmZmVjdFBsYXllcl0g5YGc5q2i5oiY5ZC85oyB57ut5rOi57q577yaJHtjYXN0ZXIubmFtZX1gKTtcbiAgICAgICAgY2FzdGVyLl93YXJDcnlXYXZlc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmiqTnm77nibnmlYggLSDok53oibLmiqTnm75cbiAgICAgKi9cbiAgICBfcGxheVNoaWVsZEVmZmVjdChjYXN0ZXIpIHtcbiAgICAgICAgY29uc3Qgc2hpZWxkID0gbmV3IGNjLk5vZGUoXCJTaGllbGRFZmZlY3RcIik7XG4gICAgICAgIHNoaWVsZC5zZXRQb3NpdGlvbihjYXN0ZXIuZ2V0UG9zaXRpb24oKSk7XG5cbiAgICAgICAgY29uc3QgZ3JhcGhpY3MgPSBzaGllbGQuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgZ3JhcGhpY3MuY2lyY2xlKDAsIDAsIDM1KTtcbiAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gbmV3IGNjLkNvbG9yKDEwMCwgMTUwLCAyNTUsIDEwMCk7XG4gICAgICAgIGdyYXBoaWNzLmZpbGwoKTtcbiAgICAgICAgZ3JhcGhpY3MuY2lyY2xlKDAsIDAsIDM1KTtcbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5CTFVFO1xuICAgICAgICBncmFwaGljcy5saW5lV2lkdGggPSAzO1xuICAgICAgICBncmFwaGljcy5zdHJva2UoKTtcblxuICAgICAgICBjYXN0ZXIucGFyZW50LmFkZENoaWxkKHNoaWVsZCk7XG5cbiAgICAgICAgLy8g5oqk55u+5bGV5byA5Yqo55S7XG4gICAgICAgIHNoaWVsZC5zY2FsZSA9IDA7XG4gICAgICAgIGNjLnR3ZWVuKHNoaWVsZClcbiAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGU6IDEgfSlcbiAgICAgICAgICAgIC5kZWxheSgwLjMpXG4gICAgICAgICAgICAudG8oMC4zLCB7IG9wYWNpdHk6IDAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzaGllbGQuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmsrvnlpfmnK/nibnmlYggLSDkvb/nlKjnspLlrZDns7vnu59cbiAgICAgKiDmjIHnu63ml7bpl7Tot5/pmo9CdWZm5oyB57ut5pe26Ze077yIM+enku+8iVxuICAgICAqL1xuICAgIF9wbGF5SGVhbEVmZmVjdChjYXN0ZXIpIHtcbiAgICAgICAgaWYgKCFjYXN0ZXIgfHwgIWNhc3Rlci5pc1ZhbGlkKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIltTa2lsbEVmZmVjdFBsYXllcl0g5rK755aX5pyv77yaY2FzdGVy5Li656m6XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5qOA5p+l5piv5ZCm5pyJ57KS5a2Q6aKE5Yi25L2TXG4gICAgICAgIGlmICghdGhpcy5oZWFsUGFydGljbGVQcmVmYWIpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJbU2tpbGxFZmZlY3RQbGF5ZXJdIOacquaJvuWIsOayu+eWl+acr+eykuWtkOmihOWItuS9k++8jOivt+e7keWumiBIZWFsIFBhcnRpY2xlIFByZWZhYlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOiOt+WPlkJ1ZmbmjIHnu63ml7bpl7TvvIjku45CdWZmUmVnaXN0cnnojrflj5ZoZWFsT3ZlclRpbWXnmoRkdXJhdGlvbu+8iVxuICAgICAgICBjb25zdCBCdWZmUmVnaXN0cnkgPSByZXF1aXJlKFwiQnVmZlJlZ2lzdHJ5XCIpO1xuICAgICAgICBjb25zdCBoZWFsQnVmZkR1cmF0aW9uID0gQnVmZlJlZ2lzdHJ5LmhlYWxPdmVyVGltZSA/IEJ1ZmZSZWdpc3RyeS5oZWFsT3ZlclRpbWUuZHVyYXRpb24gOiAzLjA7ICAvLyDpu5jorqQz56eSXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWxQYXJ0aWNsZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaGVhbFBhcnRpY2xlUHJlZmFiKTtcblxuICAgICAgICAgICAgaWYgKCFoZWFsUGFydGljbGUpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIltTa2lsbEVmZmVjdFBsYXllcl0g5a6e5L6L5YyW5rK755aX5pyv57KS5a2Q6aKE5Yi25L2T5aSx6LSlXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5bCG57KS5a2Q54m55pWI5re75Yqg5Yiw5pa95rOV6ICF6IqC54K55LiK77yI6Lef6ZqP5pa95rOV6ICF77yJXG4gICAgICAgICAgICBoZWFsUGFydGljbGUuc2V0UG9zaXRpb24oMCwgMCk7ICAvLyDnm7jlr7nkuo7mlr3ms5XogIXnmoTkvY3nva7vvIjkuK3lv4PvvIlcbiAgICAgICAgICAgIGNhc3Rlci5hZGRDaGlsZChoZWFsUGFydGljbGUpO1xuXG4gICAgICAgICAgICAvLyDojrflj5bnspLlrZDns7vnu5/nu4Tku7blubbnoa7kv53lroPmraPlnKjmkq3mlL5cbiAgICAgICAgICAgIGNvbnN0IHBhcnRpY2xlU3lzdGVtID0gaGVhbFBhcnRpY2xlLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSk7XG4gICAgICAgICAgICBpZiAocGFydGljbGVTeXN0ZW0pIHtcbiAgICAgICAgICAgICAgICAvLyDnoa7kv53nspLlrZDns7vnu5/lkK/nlKhcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbS5lbmFibGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIC8vIOWmguaenOeykuWtkOezu+e7n+iuvue9ruS6huiHquWKqOaSreaUvu+8jOehruS/neWug+ato+WcqOi/kOihjFxuICAgICAgICAgICAgICAgIGlmICghcGFydGljbGVTeXN0ZW0uaXNQbGF5aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtLnJlc2V0U3lzdGVtKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g6K6+572u57KS5a2Q57O757uf5Li66Lef6ZqP5qih5byP77yI6L+Z5qC357KS5a2Q5Lya6Lef6ZqP6IqC54K556e75Yqo77yJXG4gICAgICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0ucG9zaXRpb25UeXBlID0gY2MuUGFydGljbGVTeXN0ZW0uUG9zaXRpb25UeXBlLlJFTEFUSVZFO1xuXG4gICAgICAgICAgICAgICAgLy8g5by65Yi25Yi35paw57KS5a2Q57O757ufXG4gICAgICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0uZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgY2MubG9nKGBbU2tpbGxFZmZlY3RQbGF5ZXJdIOS9v+eUqOeykuWtkOezu+e7n+aSreaUvuayu+eWl+acr+eJueaViO+8jOaMgee7reaXtumXtDogJHtoZWFsQnVmZkR1cmF0aW9ufeenkmApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKGBbU2tpbGxFZmZlY3RQbGF5ZXJdIOayu+eWl+acr+mihOWItuS9k+S4reayoeacieaJvuWIsFBhcnRpY2xlU3lzdGVt57uE5Lu2YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOW7tui/n+mUgOavgeeykuWtkOiKgueCue+8iOaMgee7reaXtumXtOi3n+maj0J1ZmbmjIHnu63ml7bpl7TvvIlcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaGVhbFBhcnRpY2xlICYmIGhlYWxQYXJ0aWNsZS5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWBnOatoueykuWtkOezu+e7n1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJ0aWNsZVN5c3RlbSA9IGhlYWxQYXJ0aWNsZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFydGljbGVTeXN0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtLnN0b3BTeXN0ZW0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyDlu7bov5/plIDmr4HvvIzorqnnspLlrZDoh6rnhLbmtojlpLFcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhlYWxQYXJ0aWNsZSAmJiBoZWFsUGFydGljbGUuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWxQYXJ0aWNsZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIDAuNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgaGVhbEJ1ZmZEdXJhdGlvbik7ICAvLyDkvb/nlKhCdWZm5oyB57ut5pe26Ze077yIM+enku+8iVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihgW1NraWxsRWZmZWN0UGxheWVyXSDlrp7kvovljJbmsrvnlpfmnK/nspLlrZDpooTliLbkvZPlpLHotKU6ICR7ZS5tZXNzYWdlfWApO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWHgOWMluacr+eJueaViCAtIOeZveiJsuWFieeOr+aJqeaVo1xuICAgICAqL1xuICAgIF9wbGF5Q2xlYW5zZUVmZmVjdChjYXN0ZXIpIHtcbiAgICAgICAgaWYgKCFjYXN0ZXIgfHwgIWNhc3Rlci5pc1ZhbGlkIHx8ICFjYXN0ZXIucGFyZW50KSByZXR1cm47XG5cbiAgICAgICAgLy8g5Yib5bu65YeA5YyW5YWJ546vXG4gICAgICAgIGNvbnN0IGNsZWFuc2VBdXJhID0gbmV3IGNjLk5vZGUoXCJDbGVhbnNlQXVyYVwiKTtcbiAgICAgICAgY2xlYW5zZUF1cmEuc2V0UG9zaXRpb24oY2FzdGVyLmdldFBvc2l0aW9uKCkpO1xuXG4gICAgICAgIGNvbnN0IGdyYXBoaWNzID0gY2xlYW5zZUF1cmEuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcblxuICAgICAgICAvLyDnu5jliLblpJrkuKrlkIzlv4PlnIbvvIjlh4DljJblhYnnjq/mlYjmnpzvvIlcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IDQwICsgaSAqIDIwO1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2lyY2xlKDAsIDAsIHJhZGl1cyk7XG4gICAgICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDI1NSwgMjU1LCAyMDAgLSBpICogNTApOyAgLy8g55m96Imy77yM6YCQ5riQ6YCP5piOXG4gICAgICAgICAgICBncmFwaGljcy5saW5lV2lkdGggPSAzO1xuICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDloavlhYXkuK3lv4PljLrln5/vvIjlj6/pgInvvIlcbiAgICAgICAgZ3JhcGhpY3MuY2lyY2xlKDAsIDAsIDQwKTtcbiAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwgMjU1LCAyNTUsIDgwKTsgIC8vIOa3oeeZveiJsuWhq+WFhVxuICAgICAgICBncmFwaGljcy5maWxsKCk7XG5cbiAgICAgICAgY2FzdGVyLnBhcmVudC5hZGRDaGlsZChjbGVhbnNlQXVyYSk7XG5cbiAgICAgICAgLy8g5YWJ546v5omp5pWjICsg5reh5Ye65Yqo55S7XG4gICAgICAgIGNsZWFuc2VBdXJhLnNjYWxlID0gMC41O1xuICAgICAgICBjYy50d2VlbihjbGVhbnNlQXVyYSlcbiAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGU6IDEuNSwgb3BhY2l0eTogMjAwIH0pXG4gICAgICAgICAgICAudG8oMC40LCB7IHNjYWxlOiAyLjUsIG9wYWNpdHk6IDAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2xlYW5zZUF1cmEgJiYgY2xlYW5zZUF1cmEuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhbnNlQXVyYS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDov5znqIvmma7pgJrmlLvlh7vnibnmlYggLSDlvLnpgZPpo57lkJHnm67moIdcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGNhc3RlciAtIOaWveazleiAheiKgueCuVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gdGFyZ2V0IC0g55uu5qCH6IqC54K5XG4gICAgICovXG4gICAgX3BsYXlSYW5nZWRBdHRhY2tFZmZlY3QoY2FzdGVyLCB0YXJnZXQpIHtcbiAgICAgICAgaWYgKCFjYXN0ZXIgfHwgIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyZW50ID0gY2FzdGVyLnBhcmVudDtcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWIm+W7uuW8uemBk+iKgueCuVxuICAgICAgICBjb25zdCBwcm9qZWN0aWxlID0gbmV3IGNjLk5vZGUoXCJSYW5nZWRQcm9qZWN0aWxlXCIpO1xuXG4gICAgICAgIC8vIOS9v+eUqEdyYXBoaWNz57uY5Yi25LiA5Liq54K577yI6buR54K55oiW55m954K577yJXG4gICAgICAgIGNvbnN0IGdyYXBoaWNzID0gcHJvamVjdGlsZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICBncmFwaGljcy5jaXJjbGUoMCwgMCwgOCk7IC8vIOWNiuW+hOS4ujjnmoTlnIbngrlcbiAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gY2MuQ29sb3IuQkxBQ0s7IC8vIOm7keiJsueCue+8iOWPr+S7peaUueS4uldISVRF5L2/55So55m954K577yJXG4gICAgICAgIGdyYXBoaWNzLmZpbGwoKTtcblxuICAgICAgICAvLyDojrflj5botbflp4vkvY3nva7lkoznm67moIfkvY3nva7vvIjovazmjaLkuLrkuJbnlYzlnZDmoIfvvIlcbiAgICAgICAgY29uc3QgY2FzdGVyV29ybGRQb3MgPSBjYXN0ZXIuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0V29ybGRQb3MgPSB0YXJnZXQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcblxuICAgICAgICAvLyDovazmjaLkuLrniLboioLngrnnmoTmnKzlnLDlnZDmoIdcbiAgICAgICAgY29uc3Qgc3RhcnRQb3MgPSBwYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoY2FzdGVyV29ybGRQb3MpO1xuICAgICAgICBjb25zdCBlbmRQb3MgPSBwYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodGFyZ2V0V29ybGRQb3MpO1xuXG4gICAgICAgIC8vIOiuvue9ruWIneWni+S9jee9rlxuICAgICAgICBwcm9qZWN0aWxlLnNldFBvc2l0aW9uKHN0YXJ0UG9zKTtcbiAgICAgICAgcGFyZW50LmFkZENoaWxkKHByb2plY3RpbGUpO1xuXG4gICAgICAgIC8vIOiuoeeul+mjnuihjOi3neemu+WSjOaXtumXtFxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHN0YXJ0UG9zLnN1YihlbmRQb3MpLm1hZygpO1xuICAgICAgICBjb25zdCBmbHlTcGVlZCA9IDgwMDsgLy8g6aOe6KGM6YCf5bqm77yI5YOP57SgL+enku+8iVxuICAgICAgICBjb25zdCBmbHlUaW1lID0gZGlzdGFuY2UgLyBmbHlTcGVlZDtcblxuICAgICAgICAvLyDmkq3mlL7po57ooYzliqjnlLtcbiAgICAgICAgY2MudHdlZW4ocHJvamVjdGlsZSlcbiAgICAgICAgICAgIC50byhmbHlUaW1lLCB7IHBvc2l0aW9uOiBlbmRQb3MgfSwgeyBlYXNpbmc6ICdsaW5lYXInIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g5Yiw6L6+55uu5qCH5ZCO6ZSA5q+BXG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3RpbGUgJiYgcHJvamVjdGlsZS5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RpbGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6buY6K6k54m55pWIIC0g566A5Y2V6Zeq5YWJ77yI5bey5rOo6YeK77yJXG4gICAgICovXG4gICAgLy8gX3BsYXlEZWZhdWx0RWZmZWN0KGNhc3RlciwgdGFyZ2V0KSB7XG4gICAgLy8gICAgIGNvbnN0IGZsYXNoID0gbmV3IGNjLk5vZGUoXCJGbGFzaFwiKTtcbiAgICAvLyAgICAgZmxhc2guc2V0UG9zaXRpb24odGFyZ2V0LmdldFBvc2l0aW9uKCkpO1xuXG4gICAgLy8gICAgIGNvbnN0IGdyYXBoaWNzID0gZmxhc2guYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAvLyAgICAgZ3JhcGhpY3MuY2lyY2xlKDAsIDAsIDIwKTtcbiAgICAvLyAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgLy8gICAgIGdyYXBoaWNzLmZpbGwoKTtcblxuICAgIC8vICAgICB0YXJnZXQucGFyZW50LmFkZENoaWxkKGZsYXNoKTtcblxuICAgIC8vICAgICBjYy50d2VlbihmbGFzaClcbiAgICAvLyAgICAgICAgIC50bygwLjIsIHsgc2NhbGU6IDEuNSwgb3BhY2l0eTogMCB9KVxuICAgIC8vICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGZsYXNoLmRlc3Ryb3koKTtcbiAgICAvLyAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAuc3RhcnQoKTtcbiAgICAvLyB9XG59KTtcblxuIl19