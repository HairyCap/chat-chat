# React mobile chat web app(chat-chat)/React 移动端网页聊天软件

## 目标 制作一个 React,mongoDB,GraphQL,nodejs, socket.io 框架手机网页聊天软件


## heroku 服务器配置


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
