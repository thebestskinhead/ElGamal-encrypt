# 加密通讯应用

该项目是一个基于 Electron 和 Node.js 的端到端加密通讯软件，旨在提供安全的实时消息传递功能。项目分为服务器和客户端两部分，支持用户之间的安全通信。

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