# 加密通讯应用

该项目是一个基于 Electron 和 Node.js 的端到端加密通讯软件，旨在提供安全的实时消息传递功能。项目分为服务器和客户端两部分，支持用户之间的安全通信。

# 加密逻辑
  ```
  密钥交换阶段：

服务器选择一个大素数( p )和一个原根( a )，并将它们发送给客户端（发送与接受端）。
客户端（发送）生成一个私钥( n )，计算公钥( b = a^n \mod p )，并将( b )发送给客户端（接收）此操作由服务器中转。
客户端（接受）接收到( b )后，双方均拥有( p )、( a )和( b )，可以计算出共享的秘密密钥。
加密通信阶段：

客户端（发送）生成一个私钥( k )，计算( y_1 = a^k \mod p )。
客户端（发送）将待加密的消息（服务端终端文本或客户端对话框提交的内容）转换为数字( x )，然后计算( y_2 = (x \cdot b^k) \mod p )。
客户端（发送）将( y_1 )和( y_2 )发送给客户端（接受）此过程由服务器做中转。
客户端接收到( y_1 )和( y_2 )后，计算( y_1 \cdot (y_2^n) \mod p )以恢复原始消息( x )。

```
## 项目结构

```
encrypted-communication-app
├── server                # 服务器端代码
│   ├── src
│   │   ├── index.ts      # 服务器入口点
│   │   ├── routes
│   │   │   └── index.ts  # 路由定义
│   │   └── services
│   │       └── encryptionService.ts # 加密服务
│   ├── package.json      # 服务器依赖和脚本
│   ├── tsconfig.json     # 服务器 TypeScript 配置
│   └── README.md         # 服务器文档
├── client                # 客户端代码
│   ├── src
│   │   ├── main.ts       # 客户端入口点
│   │   ├── renderer.ts    # 渲染逻辑
│   │   ├── components
│   │   │   ├── Sidebar.tsx # 侧边栏组件
│   │   │   ├── ChatWindow.tsx # 聊天窗口组件
│   │   │   └── Login.tsx  # 登录组件
│   │   └── services
│   │       └── encryptionService.ts # 客户端加密服务
│   ├── package.json      # 客户端依赖和脚本
│   ├── tsconfig.json     # 客户端 TypeScript 配置
│   └── README.md         # 客户端文档
├── shared                # 共享代码
│   ├── src
│   │   └── types.ts      # 共享类型定义
├── package.json          # 根级别依赖和脚本
├── tsconfig.json         # 根级别 TypeScript 配置
└── README.md             # 项目总体文档
```

## 功能

1. **用户登录**：用户可以通过登录界面输入昵称并连接到服务器。
2. **在线用户列表**：客户端会显示当前在线的用户列表，用户可以选择与之聊天。
3. **端到端加密**：使用 Diffie-Hellman 密钥交换协议进行密钥交换，确保消息的安全性。
4. **消息发送与接收**：用户可以发送和接收加密消息，确保信息的私密性。

## 安装与运行

1. 克隆项目：
   ```
   git clone <项目地址>
   cd encrypted-communication-app
   ```

2. 安装依赖：
   ```
   cd server
   npm install
   cd ../client
   npm install
   ```

3. 启动服务器：
   ```
   cd server
   npm start
   ```

4. 启动客户端：
   ```
   cd client
   npm start
   ```

## 贡献

欢迎任何形式的贡献！请提交问题、建议或拉取请求。

## 许可证

本项目采用 MIT 许可证，详细信息请查看 LICENSE 文件。
