import Router from 'koa-router';
import index from '../apps/http/controllers/indexController';
import account from '../apps/http/controllers/accountController';

export default (app) => {
  const routers = new Router();
  routers.get('/', index.index);
  routers.get('/login', account.login);
  routers.get('/register', account.register);

  app.use(routers.routes())
    .use(routers.allowedMethods());
};
