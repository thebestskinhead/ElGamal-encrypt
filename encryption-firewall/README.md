# 加密防火墙项目

该项目演示了基于离散对数的加密防火墙的实现。项目包含服务端、防火墙和客户端，三者独立运行，能够实现安全的消息传递。

## 项目结构

```
encryption-firewall
├── server
│   ├── server.js        # 服务端入口点
│   └── package.json     # 服务端配置文件
├── firewall
│   ├── firewall.js      # 防火墙逻辑实现
│   └── package.json     # 防火墙配置文件
├── client
│   ├── index.html       # 客户端HTML页面
│   ├── client.js        # 客户端JavaScript代码
│   └── package.json     # 客户端配置文件
└── README.md            # 项目文档
```

## 运行项目

### 1. 服务端

在 `server` 目录下，运行以下命令以安装依赖并启动服务端：

```bash
cd server
npm install
node server.js
```

### 2. 防火墙

在 `firewall` 目录下，运行以下命令以安装依赖并启动防火墙：

```bash
cd firewall
npm install
node firewall.js
```

### 3. 客户端

在 `client` 目录下，打开 `index.html` 文件以访问客户端界面。您可以在浏览器中输入消息并与服务端进行通信。

## 使用说明

1. 启动服务端和防火墙。
2. 在浏览器中打开客户端页面。
3. 输入消息并发送，服务端将处理消息并返回响应。

## 注意事项

- 确保服务端和防火墙在同一网络环境中运行。
- 本项目仅用于演示目的，实际应用中请考虑安全性和性能等因素。