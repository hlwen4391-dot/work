
(function () {
var scripts = [{"deps":{"./assets/Scripts/ecs/BuffIconDisplay":26,"./assets/Scripts/ecs/BuffManager":19,"./assets/Scripts/ecs/CharacterViewUI":50,"./assets/Scripts/ecs/CombatComponent":4,"./assets/Scripts/ecs/ExpBar":47,"./assets/Scripts/ecs/GameOverPanel":30,"./assets/Scripts/ecs/HealthBar":18,"./assets/Scripts/ecs/ItemIconSetter":55,"./assets/Scripts/ecs/ItemTooltip":58,"./assets/Scripts/ecs/LevelUI":45,"./assets/Scripts/ecs/RageBar":28,"./assets/Scripts/ecs/ReplayController":32,"./assets/Scripts/ecs/SelectSceneUI":38,"./assets/Scripts/ecs/ShopUI":62,"./assets/Scripts/ecs/SkillComponent":1,"./assets/Scripts/ecs/SkillEffectPlayer":25,"./assets/Scripts/ecs/StatsComponent":3,"./assets/Scripts/ecs/StunIcon":27,"./assets/Scripts/ecs/TeamComponent":5,"./assets/Scripts/ecs/UltimateSkillButton":29,"./assets/Scripts/ecs/UltimateSkillUI":43,"./assets/Scripts/ecs/random":9,"./assets/Scripts/ecs/AttackMover":23,"./assets/Scripts/game/CharacterViewScene":49,"./assets/Scripts/game/GameOver":24,"./assets/Scripts/game/GameOverScene":35,"./assets/Scripts/game/GameOverSceneData":34,"./assets/Scripts/game/HeroController":7,"./assets/Scripts/game/ItemConfig":52,"./assets/Scripts/game/MainMenuScene":36,"./assets/Scripts/game/MonsterController":8,"./assets/Scripts/game/SelectScene":37,"./assets/Scripts/game/ShopConfig":60,"./assets/Scripts/game/ShopScene":61,"./assets/Scripts/game/UnitConfigItem":41,"./assets/Scripts/game/UnitDataConfig":39,"./assets/Scripts/game/UnitDataConfigComponent":42,"./assets/Scripts/game/BattleController":6,"./assets/Scripts/system/BattleLoggers":17,"./assets/Scripts/system/BattleRecorder":33,"./assets/Scripts/system/BattleReplayer":31,"./assets/Scripts/system/BattleSystem":14,"./assets/Scripts/system/BuffFactory":20,"./assets/Scripts/system/BuffRegistry":21,"./assets/Scripts/system/BuffSystem":12,"./assets/Scripts/system/CharacterDataAdapter":56,"./assets/Scripts/system/CharacterDataManager":48,"./assets/Scripts/system/CoinManager":59,"./assets/Scripts/system/CombatSystem":11,"./assets/Scripts/system/DeathSystem":15,"./assets/Scripts/system/EquipmentDataAdapter":66,"./assets/Scripts/system/EquipmentDataManager":65,"./assets/Scripts/system/ItemDataAdapter":53,"./assets/Scripts/system/ItemDataManager":51,"./assets/Scripts/system/ItemSystem":54,"./assets/Scripts/system/LevelConfig":46,"./assets/Scripts/system/LevelSystem":44,"./assets/Scripts/system/ServerConfig":57,"./assets/Scripts/system/SkillConfig":22,"./assets/Scripts/system/SkillDataAdapter":64,"./assets/Scripts/system/SkillDataManager":63,"./assets/Scripts/system/SkillSystem":10,"./assets/Scripts/system/TeamRef":16,"./assets/Scripts/system/ActionSystem":13,"./assets/Scripts/ecs/AvatarItem":40,"./assets/Scripts/ecs/BuffComponent":2},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/ecs/SkillComponent.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/ecs/BuffComponent.js"},{"deps":{"BuffComponent":2,"CharacterDataManager":48,"LevelConfig":46},"path":"preview-scripts/assets/Scripts/ecs/StatsComponent.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/ecs/CombatComponent.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/ecs/TeamComponent.js"},{"deps":{"ItemConfig":52,"UnitDataConfig":39,"BattleLoggers":17,"SkillConfig":22,"BattleRecorder":33,"CharacterDataManager":48,"LevelSystem":44,"SkillDataManager":63,"EquipmentDataManager":65,"SkillSystem":10,"TeamRef":16,"BattleSystem":14,"TeamComponent":5,"random":9},"path":"preview-scripts/assets/Scripts/game/BattleController.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/game/HeroController.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/game/MonsterController.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/ecs/random.js"},{"deps":{"StatsComponent":3,"BuffSystem":12,"BuffFactory":20,"TeamComponent":5,"TeamRef":16,"UnitDataConfig":39,"SkillComponent":1,"CombatSystem":11},"path":"preview-scripts/assets/Scripts/system/SkillSystem.js"},{"deps":{"StatsComponent":3,"CombatComponent":4,"BuffComponent":2},"path":"preview-scripts/assets/Scripts/system/CombatSystem.js"},{"deps":{"BuffComponent":2,"BuffFactory":20,"StatsComponent":3},"path":"preview-scripts/assets/Scripts/system/BuffSystem.js"},{"deps":{"TeamComponent":5,"TeamRef":16,"StatsComponent":3,"SkillSystem":10,"BuffSystem":12,"DeathSystem":15},"path":"preview-scripts/assets/Scripts/system/ActionSystem.js"},{"deps":{"TeamRef":16,"StatsComponent":3,"ActionSystem":13},"path":"preview-scripts/assets/Scripts/system/BattleSystem.js"},{"deps":{"TeamRef":16,"StatsComponent":3,"BuffSystem":12,"BuffComponent":2},"path":"preview-scripts/assets/Scripts/system/DeathSystem.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/system/TeamRef.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/system/BattleLoggers.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/ecs/HealthBar.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/ecs/BuffManager.js"},{"deps":{"BuffRegistry":21},"path":"preview-scripts/assets/Scripts/system/BuffFactory.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/system/BuffRegistry.js"},{"deps":{"BuffFactory":20,"BuffSystem":12,"TeamRef":16},"path":"preview-scripts/assets/Scripts/system/SkillConfig.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/ecs/AttackMover.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/game/GameOver.js"},{"deps":{"BuffRegistry":21},"path":"preview-scripts/assets/Scripts/ecs/SkillEffectPlayer.js"},{"deps":{"BuffComponent":2},"path":"preview-scripts/assets/Scripts/ecs/BuffIconDisplay.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/ecs/StunIcon.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/ecs/RageBar.js"},{"deps":{"SkillSystem":10,"TeamComponent":5,"TeamRef":16},"path":"preview-scripts/assets/Scripts/ecs/UltimateSkillButton.js"},{"deps":{"UnitDataConfig":39,"BattleRecorder":33},"path":"preview-scripts/assets/Scripts/ecs/GameOverPanel.js"},{"deps":{"SkillSystem":10,"TeamRef":16,"BuffFactory":20,"BuffComponent":2,"StatsComponent":3,"BuffSystem":12},"path":"preview-scripts/assets/Scripts/system/BattleReplayer.js"},{"deps":{"BattleRecorder":33,"BattleReplayer":31},"path":"preview-scripts/assets/Scripts/ecs/ReplayController.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/system/BattleRecorder.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/game/GameOverSceneData.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/game/GameOverScene.js"},{"deps":{"ServerConfig":57,"ItemDataAdapter":53,"CharacterDataAdapter":56,"SkillDataAdapter":64,"ItemDataManager":51,"CoinManager":59,"CharacterDataManager":48},"path":"preview-scripts/assets/Scripts/game/MainMenuScene.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/game/SelectScene.js"},{"deps":{"UnitDataConfig":39,"CharacterDataManager":48,"LevelSystem":44,"StatsComponent":3},"path":"preview-scripts/assets/Scripts/ecs/SelectSceneUI.js"},{"deps":{"SkillConfig":22},"path":"preview-scripts/assets/Scripts/game/UnitDataConfig.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/ecs/AvatarItem.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/game/UnitConfigItem.js"},{"deps":{"UnitDataConfig":39},"path":"preview-scripts/assets/Scripts/game/UnitDataConfigComponent.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/ecs/UltimateSkillUI.js"},{"deps":{"LevelConfig":46,"CharacterDataManager":48,"StatsComponent":3},"path":"preview-scripts/assets/Scripts/system/LevelSystem.js"},{"deps":{"LevelSystem":44},"path":"preview-scripts/assets/Scripts/ecs/LevelUI.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/system/LevelConfig.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/ecs/ExpBar.js"},{"deps":{"CharacterDataAdapter":56,"StatsComponent":3},"path":"preview-scripts/assets/Scripts/system/CharacterDataManager.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/game/CharacterViewScene.js"},{"deps":{"ItemConfig":52,"UnitDataConfig":39,"ItemDataManager":51,"ItemSystem":54,"CharacterDataManager":48,"LevelConfig":46,"EquipmentDataManager":65},"path":"preview-scripts/assets/Scripts/ecs/CharacterViewUI.js"},{"deps":{"ItemDataAdapter":53,"ItemConfig":52},"path":"preview-scripts/assets/Scripts/system/ItemDataManager.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/game/ItemConfig.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/system/ItemDataAdapter.js"},{"deps":{"ItemDataManager":51,"LevelSystem":44,"SkillDataManager":63,"SkillConfig":22,"LevelConfig":46,"CharacterDataManager":48,"UnitDataConfig":39,"ItemConfig":52},"path":"preview-scripts/assets/Scripts/system/ItemSystem.js"},{"deps":{"ItemConfig":52},"path":"preview-scripts/assets/Scripts/ecs/ItemIconSetter.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/system/CharacterDataAdapter.js"},{"deps":{"ItemDataAdapter":53,"CharacterDataAdapter":56},"path":"preview-scripts/assets/Scripts/system/ServerConfig.js"},{"deps":{"ItemConfig":52},"path":"preview-scripts/assets/Scripts/ecs/ItemTooltip.js"},{"deps":{"ServerConfig":57},"path":"preview-scripts/assets/Scripts/system/CoinManager.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/game/ShopConfig.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/game/ShopScene.js"},{"deps":{"ItemConfig":52,"ShopConfig":60,"ItemDataManager":51,"ServerConfig":57,"CoinManager":59},"path":"preview-scripts/assets/Scripts/ecs/ShopUI.js"},{"deps":{"SkillDataAdapter":64,"SkillComponent":1},"path":"preview-scripts/assets/Scripts/system/SkillDataManager.js"},{"deps":{"ServerConfig":57},"path":"preview-scripts/assets/Scripts/system/SkillDataAdapter.js"},{"deps":{"EquipmentDataAdapter":66},"path":"preview-scripts/assets/Scripts/system/EquipmentDataManager.js"},{"deps":{"ServerConfig":57},"path":"preview-scripts/assets/Scripts/system/EquipmentDataAdapter.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    