# Koa2 RESTful

基于 koa2 开发的脚手架，支持es7语法。

## 技术栈
- [koa2](https://github.com/koajs/koa) - Expressive middleware for node.js using ES2017 async functions.
- [koa-router](https://github.com/alexmingoia/koa-router) - Router middleware for koa.
- [koa-jwt](https://github.com/koajs/jwt) - Koa middleware for validating JSON Web Tokens.
- [koa-body](https://github.com/dlau/koa-body) - koa body parser middleware.
- [koa-unless](https://github.com/Foxandxss/koa-unless) - Conditionally add a middleware to koa with some common patterns.
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - JsonWebToken implementation for node.js.
- [koa-logger](https://github.com/koajs/logger) - Development style logging middleware.
- [sequelize](https://github.com/sequelize/sequelize) - An easy-to-use multi SQL dialect ORM for Node.js.
- [mysql2](https://github.com/sidorares/node-mysql2) -  fast node-mysql compatible mysql driver for node.js.
- [eslint](https://github.com/eslint/eslint) - A fully pluggable tool for identifying and reporting on patterns in JavaScript.
- [nodemon](https://github.com/remy/nodemon) - Monitor for any changes in your node.js application and automatically restart the server - perfect for development.
- [pm2](https://github.com/Unitech/pm2) - Node.js Production Process Manager with a built-in Load Balancer.
- [lodash](https://github.com/lodash/lodash) - A modern JavaScript utility library delivering modularity, performance, & extras.
- [babel](https://github.com/babel/babel) - Babel is a compiler for writing next generation JavaScript.

## 使用说明

```
$ git clone https://github.com/gotoin/koa-api.git
$ cd koa-api
$ npm install
//or yarn install
```

修改数据库 config/env/development.js

```

# 本地开发
$ npm run start
# 部署
$ npm run pm2
```

# 首页
http://127.0.0.1:3001/

# 注册
http://127.0.0.1:3001/register?loginName=test&password=123456

# 登录
http://127.0.0.1:3001/login?loginName=test&password=123456

