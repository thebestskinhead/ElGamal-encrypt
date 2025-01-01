# Encrypted Communication App - Client

## 项目简介
该客户端应用程序是一个端到端加密通讯软件，使用Electron框架与Node.js构建。它允许用户通过安全的方式进行实时聊天，确保消息在传输过程中保持私密。

## 功能
- 用户登录并获取唯一的临时ID。
- 列出当前在线的客户端，并允许用户自定义昵称。
- 实现密钥交换和消息加密/解密，确保通讯的安全性。

## 目录结构
```
client
├── src
│   ├── main.ts          # 客户端入口点，初始化Electron应用
│   ├── renderer.ts      # 渲染逻辑，处理用户界面交互
│   ├── components       # 组件目录
│   │   ├── Sidebar.tsx  # 侧边栏组件，列出在线客户端
│   │   ├── ChatWindow.tsx # 聊天窗口组件，处理消息发送与接收
│   │   └── Login.tsx    # 登录组件，处理用户登录与昵称设置
│   └── services
│       └── encryptionService.ts # 加密服务，包含密钥交换与消息加密/解密逻辑
├── package.json          # npm配置文件，列出依赖项与脚本
└── tsconfig.json         # TypeScript配置文件，指定编译选项
```

## 安装与运行
1. 克隆项目到本地：
   ```
   git clone <repository-url>
   cd encrypted-communication-app/client
   ```

2. 安装依赖：
   ```
   npm install
   ```

3. 启动客户端：
   ```
   npm start
   ```

## 依赖
- Electron
- React (用于构建用户界面)
- TypeScript

## 贡献
欢迎提交问题和拉取请求，以帮助改进该项目。请确保遵循项目的代码风格和贡献指南。

## 许可证
该项目遵循MIT许可证。