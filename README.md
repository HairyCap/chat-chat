# React mobile chat web app(chat-chat)/React 移动端网页聊天软件

## 目标 制作一个 React,mongoDB,GraphQL,nodejs 框架手机网页聊天软件

## 前期制作项目均在 FireFox 测试适配

### Toto

- 基本前端页面的设计及实现 --Done
- 配置服务端 nodejs，mongoDB，GraphQL
- 配置 React 客户端 GraphQL，接通前后端数据
- 客户端打包 Docker image

## heroku 服务器配置

项目分为 server, client 两个 branch

## server

1. Create heroku app

2. Change Buildpacks to heroku/nodejs in Settings

3. Change Deployment method to Github,connect to Github repo(you can also use heroku git)

4. Choose server branch and enable Automatic deploy

### note:

- heroku will run start script after build succeeded which you need to add in to your package.json file scripts.

  "scripts": {
  "start": "node app.js"
  },

## client

add [create-react-app heroku-build-pack](https://github.com/mars/create-react-app-buildpack)

### note:

- Choose client branch and enable Automatic deploy
