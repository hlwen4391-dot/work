/**
 * 主菜单场景控制器
 * 负责显示主菜单和导航到其他场景
 */
cc.Class({
    extends: cc.Component,

    properties: {
        // 开始游戏按钮
        startButton: {
            default: null,
            type: cc.Button,
            tooltip: "开始游戏按钮"
        },

        // 选择场景名称
        selectSceneName: {
            default: "SelectScene",
            tooltip: "选择场景名称（开始游戏时跳转的场景）"
        },

        // 清除数据按钮（可选，用于测试）
        clearDataButton: {
            default: null,
            type: cc.Button,
            tooltip: "清除所有等级数据按钮（测试用，可选）"
        },

        // 查看人物按钮
        characterViewButton: {
            default: null,
            type: cc.Button,
            tooltip: "查看人物属性按钮"
        },

        // 人物属性查看场景名称
        characterViewSceneName: {
            default: "CharacterViewScene",
            tooltip: "人物属性查看场景名称"
        },

        // 添加道具测试按钮（可选，用于测试）
        addItemTestButton: {
            default: null,
            type: cc.Button,
            tooltip: "添加升级药水测试按钮（测试用，可选）"
        },

        // 添加金币测试按钮（可选，用于测试）
        addCoinTestButton: {
            default: null,
            type: cc.Button,
            tooltip: "添加金币测试按钮（测试用，可选）"
        },

        // 商城按钮
        shopButton: {
            default: null,
            type: cc.Button,
            tooltip: "商城按钮（跳转到商城场景）"
        },

        // 商城场景名称
        shopSceneName: {
            default: "ShopScene",
            tooltip: "商城场景名称"
        }
    },

    onLoad() {
        cc.log("[MainMenuScene] 主菜单场景已加载");

        // 初始化服务器配置
        this._initServerConfig();

        // 加载所有角色数据（可选，用于初始化或显示）
        this._loadAllCharacters();

        // 绑定开始游戏按钮事件
        if (this.startButton) {
            this.startButton.node.on(cc.Node.EventType.TOUCH_END, this.onStartClick, this);
            cc.log(`[MainMenuScene] 已绑定startButton事件`);
        } else {
            cc.warn("[MainMenuScene] 未设置startButton，请在主菜单场景中绑定开始游戏按钮");
        }

        // 绑定清除数据按钮事件（如果存在）
        if (this.clearDataButton) {
            this.clearDataButton.node.on(cc.Node.EventType.TOUCH_END, this.onClearDataClick, this);
            cc.log(`[MainMenuScene] 已绑定clearDataButton事件`);
        }

        // 绑定查看人物按钮事件（如果存在）
        if (this.characterViewButton) {
            this.characterViewButton.node.on(cc.Node.EventType.TOUCH_END, this.onCharacterViewClick, this);
            cc.log(`[MainMenuScene] 已绑定characterViewButton事件`);
        } else {
            cc.warn("[MainMenuScene] 未设置characterViewButton，如需查看人物属性功能，请在主菜单场景中绑定查看人物按钮");
        }

        // 绑定添加道具测试按钮事件（如果存在）
        if (this.addItemTestButton) {
            this.addItemTestButton.node.on(cc.Node.EventType.TOUCH_END, this.onAddItemTestClick, this);
            cc.log(`[MainMenuScene] 已绑定addItemTestButton事件`);
        }

        // 绑定添加金币测试按钮事件（如果存在）
        if (this.addCoinTestButton) {
            this.addCoinTestButton.node.on(cc.Node.EventType.TOUCH_END, this.onAddCoinTestClick, this);
            cc.log(`[MainMenuScene] 已绑定addCoinTestButton事件`);
        }

        // 绑定商城按钮事件（如果存在）
        if (this.shopButton) {
            this.shopButton.node.on(cc.Node.EventType.TOUCH_END, this.onShopClick, this);
            cc.log(`[MainMenuScene] 已绑定shopButton事件`);
        } else {
            cc.warn("[MainMenuScene] 未设置shopButton，如需商城功能，请在主菜单场景中绑定商城按钮");
        }
    },

    /**
     * 开始游戏按钮点击事件
     */
    onStartClick() {
        cc.log(`[MainMenuScene] 开始游戏，场景名称: ${this.selectSceneName}`);
        if (this.selectSceneName) {
            cc.director.loadScene(this.selectSceneName, (error) => {
                if (error) {
                    cc.error(`[MainMenuScene] 加载选择场景失败: ${error}`);
                    cc.error(`[MainMenuScene] 请检查场景名称是否正确: ${this.selectSceneName}`);
                    cc.error(`[MainMenuScene] 请确保场景文件存在于项目中`);
                } else {
                    cc.log(`[MainMenuScene] 成功加载选择场景: ${this.selectSceneName}`);
                }
            });
        } else {
            cc.warn("[MainMenuScene] 未设置selectSceneName，无法开始游戏");
        }
    },

    /**
     * 清除所有等级数据按钮点击事件
     */
    onClearDataClick() {
        // 确认对话框（可选）
        if (confirm("确定要清除所有角色的等级数据吗？\n此操作不可恢复！")) {
            const CharacterDataManager = require("CharacterDataManager");
            CharacterDataManager.clearAllCharacterData();
            cc.log("[MainMenuScene] 已清除所有角色的等级数据");
            alert("已清除所有角色的等级数据！\n下次进入游戏时，所有角色将从1级开始。");
        }
    },

    /**
     * 查看人物属性按钮点击事件
     */
    onCharacterViewClick() {
        cc.log(`[MainMenuScene] 查看人物属性，场景名称: ${this.characterViewSceneName}`);
        if (this.characterViewSceneName) {
            cc.director.loadScene(this.characterViewSceneName, (error) => {
                if (error) {
                    cc.error(`[MainMenuScene] 加载人物属性查看场景失败: ${error}`);
                    cc.error(`[MainMenuScene] 请检查场景名称是否正确: ${this.characterViewSceneName}`);
                    cc.error(`[MainMenuScene] 请确保场景文件存在于项目中`);
                } else {
                    cc.log(`[MainMenuScene] 成功加载人物属性查看场景: ${this.characterViewSceneName}`);
                }
            });
        } else {
            cc.warn("[MainMenuScene] 未设置characterViewSceneName，无法跳转到人物属性查看场景");
        }
    },

    /**
     * 加载所有角色数据
     * @private
     */
    async _loadAllCharacters() {
        try {
            const CharacterDataManager = require("CharacterDataManager");

            // 获取所有角色数据（支持异步）
            const allCharacters = await CharacterDataManager.getAllCharacterData();

            const characterCount = Object.keys(allCharacters).length;
            if (characterCount > 0) {
                cc.log(`[MainMenuScene] ✓ 已加载 ${characterCount} 个角色的数据`);

                // 遍历所有角色，显示信息（可选）
                Object.keys(allCharacters).forEach(characterName => {
                    const data = allCharacters[characterName];
                    cc.log(`[MainMenuScene]   - ${characterName}: 等级${data.level}, 经验${data.exp}`);
                });

                // 保存到全局变量供其他场景使用（可选）
                window.AllCharacters = allCharacters;
            } else {
                cc.log("[MainMenuScene] 当前没有角色数据");
            }
        } catch (error) {
            cc.warn(`[MainMenuScene] 加载所有角色数据失败: ${error.message}`);
            // 失败不影响游戏运行，继续执行
        }
    },

    /**
     * 初始化服务器配置
     * @private
     */
    _initServerConfig() {
        try {
            const ServerConfig = require("ServerConfig");
            const ItemDataAdapter = require("ItemDataAdapter");
            const CharacterDataAdapter = require("CharacterDataAdapter");
            const SkillDataAdapter = require("SkillDataAdapter"); // ⭐ 技能数据适配器

            // 服务器配置
            // 注意：如果服务器未运行，会自动降级到本地模式
            const serverBaseURL = "http://localhost:3000/api"; // 单个角色数据服务器地址（端口3000）
            const serverBaseURLForAll = "http://localhost:3001/api"; // 所有角色数据服务器地址（端口3001）

            // 初始化服务器配置
            ServerConfig.init({
                baseURL: serverBaseURL, // 单个角色数据使用端口3000
                baseURLForAll: serverBaseURLForAll, // 所有角色数据使用端口3001
                timeout: 5000,
                retryCount: 3,
                auth: {
                    enabled: true,
                    token: "1" // 用户ID（这里简化处理，实际应该从登录系统获取）
                }
            });

            // 切换到混合模式（推荐）
            // 混合模式：优先从服务器加载，失败则使用本地缓存
            // 保存时：先保存到本地（快速响应），然后同步到服务器
            ItemDataAdapter.setStorageMode("hybrid");
            CharacterDataAdapter.setStorageMode("hybrid");
            SkillDataAdapter.setStorageMode("hybrid"); // ⭐ 技能数据也使用混合模式

            cc.log("[MainMenuScene] ✓ 服务器配置已初始化");
            cc.log(`[MainMenuScene] 单个角色数据服务器: ${serverBaseURL} (端口3000)`);
            cc.log(`[MainMenuScene] 所有角色数据服务器: ${serverBaseURLForAll} (端口3001)`);
            cc.log("[MainMenuScene] 存储模式: 混合模式（本地+服务器）");
        } catch (error) {
            cc.warn(`[MainMenuScene] 服务器配置初始化失败: ${error.message}`);
            cc.warn("[MainMenuScene] 将使用本地存储模式");

            // 如果配置失败，确保使用本地模式
            try {
                const ItemDataAdapter = require("ItemDataAdapter");
                const CharacterDataAdapter = require("CharacterDataAdapter");
                ItemDataAdapter.setStorageMode("local");
                CharacterDataAdapter.setStorageMode("local");
            } catch (e) {
                cc.error(`[MainMenuScene] 设置本地模式失败: ${e.message}`);
            }
        }
    },

    /**
     * 添加道具测试按钮点击事件
     */
    async onAddItemTestClick() {
        const ItemDataManager = require("ItemDataManager");

        try {
            // 添加10个升级药水
            const success = await ItemDataManager.addItem("upgrade_potion", 10);

            if (success) {
                // 获取当前数量
                const count = await ItemDataManager.getItemCount("upgrade_potion");
                cc.log(`[MainMenuScene] ✓ 已添加10个升级药水，当前总数: ${count}`);
                alert(`已添加10个升级药水！\n当前总数: ${count}`);
            } else {
                cc.error("[MainMenuScene] ✗ 添加升级药水失败");
                alert("添加升级药水失败，请查看控制台日志");
            }
        } catch (error) {
            cc.error(`[MainMenuScene] 添加道具时发生错误: ${error.message}`);
            alert(`添加道具失败: ${error.message}`);
        }
    },

    /**
     * 添加金币测试按钮点击事件
     */
    async onAddCoinTestClick() {
        const CoinManager = require("CoinManager");

        try {
            const amount = 1000; // 每次增加1000金币
            const success = await CoinManager.addCoins(amount);

            if (success) {
                // 获取当前金币数量
                const coins = await CoinManager.getCoins();
                cc.log(`[MainMenuScene] ✓ 已增加 ${amount} 金币，当前金币: ${coins}`);
                alert(`已增加 ${amount} 金币！\n当前金币: ${coins}`);
            } else {
                cc.error("[MainMenuScene] ✗ 增加金币失败");
                alert("增加金币失败，请查看控制台日志");
            }
        } catch (error) {
            cc.error(`[MainMenuScene] 增加金币时发生错误: ${error.message}`);
            alert(`增加金币失败: ${error.message}`);
        }
    },

    /**
     * 商城按钮点击事件
     */
    onShopClick() {
        cc.log(`[MainMenuScene] 打开商城，场景名称: ${this.shopSceneName}`);
        if (this.shopSceneName) {
            cc.director.loadScene(this.shopSceneName, (error) => {
                if (error) {
                    cc.error(`[MainMenuScene] 加载商城场景失败: ${error}`);
                    cc.error(`[MainMenuScene] 请检查场景名称是否正确: ${this.shopSceneName}`);
                    cc.error(`[MainMenuScene] 请确保场景文件存在于项目中`);
                } else {
                    cc.log(`[MainMenuScene] 成功加载商城场景: ${this.shopSceneName}`);
                }
            });
        } else {
            cc.warn("[MainMenuScene] 未设置shopSceneName，无法跳转到商城场景");
        }
    }
});

