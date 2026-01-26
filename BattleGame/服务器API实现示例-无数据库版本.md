# 服务器API实现示例（无数据库版本）

## 说明

这是一个**完全不需要数据库**的服务器实现，使用：
- **内存存储**：快速读写
- **JSON文件**：持久化数据（重启后数据不丢失）

**特点：**
- ✅ 无需安装数据库（MySQL、MongoDB等）
- ✅ 开箱即用，直接运行
- ✅ 数据保存在JSON文件中，易于查看和备份
- ✅ 适合开发测试和小型项目

---

## 快速开始

### 1. 安装依赖

```bash
npm init -y
npm install express cors
```

**只需要这两个包！** 不需要数据库相关的包。

### 2. 创建服务器文件 `server.js`

```javascript
const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 数据文件路径
const DATA_DIR = path.join(__dirname, 'data');
const CHARACTERS_FILE = path.join(DATA_DIR, 'characters.json');
const INVENTORY_FILE = path.join(DATA_DIR, 'inventory.json');

// 内存中的数据存储
let charactersData = {}; // { userId: { characterName: data } }
let inventoryData = {}; // { userId: items[] }

// 中间件
app.use(cors());
app.use(express.json());

// 确保数据目录存在
async function ensureDataDir() {
    try {
        await fs.mkdir(DATA_DIR, { recursive: true });
    } catch (error) {
        console.error('创建数据目录失败:', error);
    }
}

// 从文件加载数据到内存
async function loadData() {
    try {
        // 加载角色数据
        try {
            const charactersContent = await fs.readFile(CHARACTERS_FILE, 'utf8');
            charactersData = JSON.parse(charactersContent);
            console.log('[数据加载] 角色数据已加载');
        } catch (error) {
            if (error.code === 'ENOENT') {
                // 文件不存在，使用空对象
                charactersData = {};
                console.log('[数据加载] 角色数据文件不存在，使用空数据');
            } else {
                throw error;
            }
        }

        // 加载道具数据
        try {
            const inventoryContent = await fs.readFile(INVENTORY_FILE, 'utf8');
            inventoryData = JSON.parse(inventoryContent);
            console.log('[数据加载] 道具数据已加载');
        } catch (error) {
            if (error.code === 'ENOENT') {
                // 文件不存在，使用空对象
                inventoryData = {};
                console.log('[数据加载] 道具数据文件不存在，使用空数据');
            } else {
                throw error;
            }
        }
    } catch (error) {
        console.error('[数据加载] 加载数据失败:', error);
    }
}

// 保存数据到文件
async function saveCharactersData() {
    try {
        await fs.writeFile(CHARACTERS_FILE, JSON.stringify(charactersData, null, 2), 'utf8');
        console.log('[数据保存] 角色数据已保存');
    } catch (error) {
        console.error('[数据保存] 保存角色数据失败:', error);
    }
}

async function saveInventoryData() {
    try {
        await fs.writeFile(INVENTORY_FILE, JSON.stringify(inventoryData, null, 2), 'utf8');
        console.log('[数据保存] 道具数据已保存');
    } catch (error) {
        console.error('[数据保存] 保存道具数据失败:', error);
    }
}

// 身份验证中间件（简化版）
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
    
    if (!token) {
        // 如果没有token，使用默认用户ID（仅用于测试）
        req.user = { id: 1 };
        return next();
    }
    
    // 实际应该验证token并获取用户ID
    // 这里简化处理，假设token就是用户ID
    req.user = { id: parseInt(token) || 1 };
    next();
}

// ========== 角色数据API ==========

// GET /api/characters/:characterName - 获取角色数据
app.get('/api/characters/:characterName', authenticateToken, async (req, res) => {
    try {
        const { characterName } = req.params;
        const userId = req.user.id;
        
        // 从内存中获取数据
        const userCharacters = charactersData[userId] || {};
        const characterData = userCharacters[characterName];
        
        if (!characterData) {
            return res.json({
                success: true,
                data: null // 没有数据，返回null
            });
        }
        
        res.json({
            success: true,
            data: characterData
        });
    } catch (error) {
        console.error('获取角色数据失败:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// PUT /api/characters/:characterName - 保存角色数据
app.put('/api/characters/:characterName', authenticateToken, async (req, res) => {
    try {
        const { characterName } = req.params;
        const userId = req.user.id;
        const data = req.body;
        
        // 确保用户数据对象存在
        if (!charactersData[userId]) {
            charactersData[userId] = {};
        }
        
        // 保存到内存
        charactersData[userId][characterName] = {
            level: data.level,
            exp: data.exp,
            baseHp: data.baseHp,
            baseAttack: data.baseAttack,
            baseDefense: data.baseDefense,
            baseSpeed: data.baseSpeed,
            baseCrit: data.baseCrit,
            baseMiss: data.baseMiss,
            saveTime: data.saveTime || Date.now()
        };
        
        // 异步保存到文件（不阻塞响应）
        saveCharactersData().catch(err => {
            console.error('保存角色数据到文件失败:', err);
        });
        
        res.json({
            success: true,
            message: "保存成功"
        });
    } catch (error) {
        console.error('保存角色数据失败:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// ========== 道具数据API ==========

// GET /api/inventory - 获取道具列表
app.get('/api/inventory', authenticateToken, async (req, res) => {
    try {
        const userId = req.user.id;
        
        // 从内存中获取数据
        const items = inventoryData[userId] || [];
        
        res.json({
            success: true,
            data: {
                items: items
            }
        });
    } catch (error) {
        console.error('获取道具列表失败:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// PUT /api/inventory - 保存道具列表
app.put('/api/inventory', authenticateToken, async (req, res) => {
    try {
        const userId = req.user.id;
        const { items } = req.body;
        
        // 保存到内存
        inventoryData[userId] = items || [];
        
        // 异步保存到文件（不阻塞响应）
        saveInventoryData().catch(err => {
            console.error('保存道具数据到文件失败:', err);
        });
        
        res.json({
            success: true,
            message: "保存成功"
        });
    } catch (error) {
        console.error('保存道具列表失败:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// ========== 数据管理API（可选） ==========

// GET /api/admin/data - 查看所有数据（用于调试）
app.get('/api/admin/data', (req, res) => {
    res.json({
        success: true,
        data: {
            characters: charactersData,
            inventory: inventoryData
        }
    });
});

// POST /api/admin/reset - 重置所有数据（用于测试）
app.post('/api/admin/reset', async (req, res) => {
    charactersData = {};
    inventoryData = {};
    await saveCharactersData();
    await saveInventoryData();
    res.json({
        success: true,
        message: "所有数据已重置"
    });
});

// ========== 启动服务器 ==========

async function startServer() {
    // 确保数据目录存在
    await ensureDataDir();
    
    // 加载数据到内存
    await loadData();
    
    // 启动服务器
    app.listen(PORT, () => {
        console.log(`========================================`);
        console.log(`服务器运行在 http://localhost:${PORT}`);
        console.log(`数据目录: ${DATA_DIR}`);
        console.log(`角色数据文件: ${CHARACTERS_FILE}`);
        console.log(`道具数据文件: ${INVENTORY_FILE}`);
        console.log(`========================================`);
    });
    
    // 定期保存数据（每30秒自动保存一次，防止数据丢失）
    setInterval(async () => {
        await saveCharactersData();
        await saveInventoryData();
        console.log('[自动保存] 数据已自动保存到文件');
    }, 30000); // 30秒
    
    // 优雅关闭：程序退出时保存数据
    process.on('SIGINT', async () => {
        console.log('\n[关闭] 正在保存数据...');
        await saveCharactersData();
        await saveInventoryData();
        console.log('[关闭] 数据已保存，服务器关闭');
        process.exit(0);
    });
    
    process.on('SIGTERM', async () => {
        console.log('\n[关闭] 正在保存数据...');
        await saveCharactersData();
        await saveInventoryData();
        console.log('[关闭] 数据已保存，服务器关闭');
        process.exit(0);
    });
}

// 启动
startServer().catch(error => {
    console.error('启动服务器失败:', error);
    process.exit(1);
});
```

### 3. 创建 `package.json`

```json
{
  "name": "game-server",
  "version": "1.0.0",
  "description": "游戏服务器 - 无数据库版本",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  }
}
```

### 4. 运行服务器

```bash
node server.js
```

服务器会自动创建 `data` 目录，并在其中保存JSON文件。

---

## 文件结构

运行后，项目结构如下：

```
项目目录/
├── server.js          # 服务器主文件
├── package.json       # 依赖配置
├── data/              # 数据目录（自动创建）
│   ├── characters.json  # 角色数据文件
│   └── inventory.json  # 道具数据文件
└── node_modules/      # 依赖包
```

---

## 数据文件格式

### `data/characters.json`

```json
{
  "1": {
    "战士": {
      "level": 6,
      "exp": 1200,
      "baseHp": 120,
      "baseAttack": 18,
      "baseDefense": 1,
      "baseSpeed": 2,
      "baseCrit": 0,
      "baseMiss": 0,
      "saveTime": 1234567890
    },
    "法师": {
      "level": 3,
      "exp": 500,
      "baseHp": 80,
      "baseAttack": 12,
      "baseDefense": 4,
      "baseSpeed": 8,
      "baseCrit": 0.1,
      "baseMiss": 0.1,
      "saveTime": 1234567891
    }
  }
}
```

**格式说明：**
- 外层key：用户ID（`"1"`）
- 内层key：角色名称（`"战士"`）
- 值：角色数据对象

### `data/inventory.json`

```json
{
  "1": [
    {
      "itemId": "upgrade_potion",
      "count": 3
    },
    {
      "itemId": "exp_potion",
      "count": 5
    }
  ]
}
```

**格式说明：**
- 外层key：用户ID（`"1"`）
- 值：道具数组

---

## API接口说明

### 角色数据API

#### 获取角色数据
```
GET /api/characters/:characterName
Headers:
  Authorization: Bearer {userId}  // 可选，默认使用用户ID=1
```

**响应：**
```json
{
  "success": true,
  "data": {
    "level": 6,
    "exp": 1200,
    "baseHp": 120,
    "baseAttack": 18,
    "baseDefense": 1,
    "baseSpeed": 2,
    "baseCrit": 0,
    "baseMiss": 0,
    "saveTime": 1234567890
  }
}
```

#### 保存角色数据
```
PUT /api/characters/:characterName
Content-Type: application/json
Headers:
  Authorization: Bearer {userId}  // 可选

Body:
{
  "level": 6,
  "exp": 1200,
  "baseHp": 120,
  "baseAttack": 18,
  "baseDefense": 1,
  "baseSpeed": 2,
  "baseCrit": 0,
  "baseMiss": 0,
  "saveTime": 1234567890
}
```

### 道具数据API

#### 获取道具列表
```
GET /api/inventory
Headers:
  Authorization: Bearer {userId}  // 可选
```

**响应：**
```json
{
  "success": true,
  "data": {
    "items": [
      { "itemId": "upgrade_potion", "count": 3 },
      { "itemId": "exp_potion", "count": 5 }
    ]
  }
}
```

#### 保存道具列表
```
PUT /api/inventory
Content-Type: application/json
Headers:
  Authorization: Bearer {userId}  // 可选

Body:
{
  "items": [
    { "itemId": "upgrade_potion", "count": 3 },
    { "itemId": "exp_potion", "count": 5 }
  ]
}
```

### 管理API（可选）

#### 查看所有数据
```
GET /api/admin/data
```

#### 重置所有数据
```
POST /api/admin/reset
```

---

## 配置客户端连接服务器

在Cocos Creator中，修改 `MainMenuScene.js` 或创建配置脚本：

```javascript
const ServerConfig = require("ServerConfig");
const ItemDataAdapter = require("ItemDataAdapter");
const CharacterDataAdapter = require("CharacterDataAdapter");

// 初始化服务器配置
ServerConfig.init({
    baseURL: "http://localhost:3000/api", // 你的服务器地址
    timeout: 5000,
    retryCount: 3,
    auth: {
        enabled: true,
        token: "1" // 用户ID（这里简化处理，实际应该从登录系统获取）
    }
});

// 切换到混合模式（推荐）
ItemDataAdapter.setStorageMode("hybrid");
CharacterDataAdapter.setStorageMode("hybrid");
```

---

## 特性说明

### 1. 数据持久化

- **内存存储**：所有读写操作都在内存中进行，速度极快
- **JSON文件**：数据自动保存到JSON文件，服务器重启后数据不丢失
- **自动保存**：每30秒自动保存一次，防止数据丢失
- **优雅关闭**：程序退出时自动保存数据

### 2. 性能优化

- **内存缓存**：所有数据都在内存中，读写速度极快
- **异步保存**：保存到文件是异步的，不阻塞API响应
- **批量操作**：可以一次性保存多个数据

### 3. 数据安全

- **自动备份**：可以手动复制 `data` 目录来备份数据
- **JSON格式**：数据以JSON格式存储，易于查看和编辑
- **错误处理**：完善的错误处理机制

---

## 使用示例

### 启动服务器

```bash
# 安装依赖（只需要运行一次）
npm install

# 启动服务器
node server.js
```

### 测试API

使用浏览器或Postman测试：

```bash
# 获取角色数据
curl http://localhost:3000/api/characters/战士 \
  -H "Authorization: Bearer 1"

# 保存角色数据
curl -X PUT http://localhost:3000/api/characters/战士 \
  -H "Authorization: Bearer 1" \
  -H "Content-Type: application/json" \
  -d '{
    "level": 6,
    "exp": 1200,
    "baseHp": 120,
    "baseAttack": 18,
    "baseDefense": 1,
    "baseSpeed": 2,
    "baseCrit": 0,
    "baseMiss": 0,
    "saveTime": 1234567890
  }'

# 获取道具列表
curl http://localhost:3000/api/inventory \
  -H "Authorization: Bearer 1"

# 保存道具列表
curl -X PUT http://localhost:3000/api/inventory \
  -H "Authorization: Bearer 1" \
  -H "Content-Type: application/json" \
  -d '{
    "items": [
      {"itemId": "upgrade_potion", "count": 3},
      {"itemId": "exp_potion", "count": 5}
    ]
  }'
```

---

## 注意事项

1. **数据目录**：服务器会自动创建 `data` 目录，确保有写入权限

2. **用户ID**：当前简化处理，token就是用户ID。实际项目中应该使用JWT等身份验证机制

3. **并发安全**：如果多个请求同时修改同一用户的数据，可能会有并发问题。对于小型项目通常没问题，如果需要可以添加锁机制

4. **数据备份**：定期备份 `data` 目录，防止数据丢失

5. **性能限制**：适合小型项目，如果数据量很大（百万级），建议使用数据库

---

## 总结

这个实现：
- ✅ **无需数据库**：只需要Node.js和Express
- ✅ **开箱即用**：直接运行即可
- ✅ **数据持久化**：JSON文件保存，重启不丢失
- ✅ **性能优秀**：内存存储，速度极快
- ✅ **易于维护**：JSON格式，易于查看和编辑

适合开发测试和小型项目使用！
