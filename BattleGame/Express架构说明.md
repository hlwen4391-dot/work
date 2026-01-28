# Express架构说明

## Express是什么？

**Express** 是一个 **Node.js 的 Web 服务器框架**，用于创建 HTTP API 服务器。它运行在**服务器端**，不在游戏客户端代码中。

## 架构说明

### 服务器端（Express）

**位置：** `BattleGame/server.js`

这是**唯一使用 Express 的地方**，运行在 Node.js 环境中：

```javascript
const express = require('express');  // ⭐ Express框架
const app = express();                // ⭐ 创建Express应用

// Express路由定义
app.get('/api/coins', authenticateToken, async (req, res) => {
    // 处理GET请求
    res.json({ success: true, coins: 1000 });
});

app.post('/api/coins/add', authenticateToken, async (req, res) => {
    // 处理POST请求
    res.json({ success: true, coins: 1100 });
});

// 启动服务器
app.listen(3000, () => {
    console.log('服务器运行在 http://localhost:3000');
});
```

### 客户端（游戏代码）

**位置：** `BattleGame/assets/Scripts/` 下的所有 `.js` 文件

游戏客户端代码**不使用 Express**，而是通过 **`fetch()` API** 调用服务器提供的 HTTP 接口：

#### 1. CoinManager.js - 调用金币API

```javascript
// ⭐ 客户端代码：使用fetch调用Express服务器API
const response = await fetch(`${ServerConfig.getBaseURL()}/coins`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        ...ServerConfig.getAuthHeaders()
    }
});

const data = await response.json(); // 获取服务器返回的JSON数据
```

**对应的Express路由：** `server.js` 中的 `app.get('/api/coins', ...)`

#### 2. ShopUI.js - 调用商城购买API

```javascript
// ⭐ 客户端代码：调用Express服务器的购买接口
const response = await fetch(`${ServerConfig.getBaseURL()}/shop/purchase`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        ...ServerConfig.getAuthHeaders()
    },
    body: JSON.stringify({
        shopItemId: shopItem.id,
        itemId: shopItem.itemId,
        count: shopItem.count,
        price: shopItem.price
    })
});
```

**对应的Express路由：** `server.js` 中的 `app.post('/api/shop/purchase', ...)`

#### 3. ItemDataAdapter.js / CharacterDataAdapter.js - 调用数据API

这些适配器也使用 `fetch()` 调用 Express 服务器提供的API。

## 完整的调用流程

```
┌─────────────────┐                    ┌──────────────────┐
│   游戏客户端    │                    │  Express服务器   │
│ (Cocos Creator) │                    │   (Node.js)      │
└────────┬────────┘                    └────────┬─────────┘
         │                                       │
         │  fetch('http://localhost:3000/api/coins') │
         │──────────────────────────────────────>│
         │                                       │
         │                                       │ app.get('/api/coins', ...)
         │                                       │ 处理请求，返回JSON
         │                                       │
         │ <─────────────────────────────────────│
         │  { success: true, coins: 1000 }      │
         │                                       │
```

## Express代码位置总结

### ✅ 服务器端（使用Express）

| 文件 | Express使用 |
|------|------------|
| `server.js` | ⭐ **唯一使用Express的文件** |
| | - `const express = require('express')` |
| | - `app.get()`, `app.post()`, `app.put()` - 定义API路由 |
| | - `app.listen()` - 启动HTTP服务器 |

### ❌ 客户端（不使用Express）

| 文件 | 使用方式 |
|------|---------|
| `CoinManager.js` | 使用 `fetch()` 调用服务器API |
| `ShopUI.js` | 使用 `fetch()` 调用服务器API |
| `ItemDataAdapter.js` | 使用 `fetch()` 调用服务器API |
| `CharacterDataAdapter.js` | 使用 `fetch()` 调用服务器API |
| `MainMenuScene.js` | 配置服务器地址（不直接调用API） |
| `ServerConfig.js` | 管理服务器配置（不直接调用API） |

## 为什么客户端不使用Express？

1. **Express是服务器端框架**：运行在Node.js环境中，需要服务器环境
2. **游戏客户端运行在浏览器/Cocos Creator**：使用浏览器的 `fetch()` API 或 `XMLHttpRequest`
3. **分离关注点**：
   - **服务器端**：Express处理HTTP请求，管理数据存储
   - **客户端**：使用fetch发送HTTP请求，接收JSON响应

## Express在server.js中的具体体现

### 1. Express应用创建

```javascript
const express = require('express');
const app = express();        // ⭐ Express应用实例
const appAll = express();     // ⭐ 第二个Express应用实例（端口3001）
```

### 2. Express中间件

```javascript
app.use(cors());              // ⭐ Express中间件：跨域支持
app.use(express.json());      // ⭐ Express中间件：JSON解析
```

### 3. Express路由定义

```javascript
// GET路由
app.get('/api/coins', authenticateToken, async (req, res) => {
    // req: Express请求对象
    // res: Express响应对象
    res.json({ success: true, coins: 1000 });
});

// POST路由
app.post('/api/coins/add', authenticateToken, async (req, res) => {
    const { amount } = req.body;  // Express自动解析JSON body
    res.json({ success: true, coins: 1100 });
});
```

### 4. Express服务器启动

```javascript
app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});
```

## 客户端如何调用Express API

客户端代码**不包含Express**，而是通过标准的HTTP请求：

```javascript
// 客户端代码（CoinManager.js）
const response = await fetch('http://localhost:3000/api/coins', {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer 1'
    }
});

// 服务器端代码（server.js）
app.get('/api/coins', authenticateToken, async (req, res) => {
    // 这个路由处理上面的fetch请求
    res.json({ success: true, coins: 1000 });
});
```

## 总结

- **Express代码位置**：只在 `server.js` 文件中
- **客户端代码**：使用 `fetch()` API 调用Express服务器提供的HTTP接口
- **架构模式**：客户端-服务器架构（Client-Server）
  - 客户端：Cocos Creator游戏（浏览器环境）
  - 服务器：Node.js + Express（服务器环境）

## 查看Express代码

要查看Express的具体实现，请打开：
- **`BattleGame/server.js`** - 所有Express代码都在这里

要查看客户端如何调用服务器API，请查看：
- **`BattleGame/assets/Scripts/system/CoinManager.js`** - 金币API调用
- **`BattleGame/assets/Scripts/ecs/ShopUI.js`** - 商城API调用
- **`BattleGame/assets/Scripts/system/ItemDataAdapter.js`** - 道具API调用
- **`BattleGame/assets/Scripts/system/CharacterDataAdapter.js`** - 角色API调用
