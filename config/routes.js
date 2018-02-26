import Router from 'koa-router';
import Index from '../apps/controllers/IndexController';

export default (app) => {
  const routers = new Router();
  routers.get('/', Index.index);
  routers.get('/login', Index.login);

  app.use(routers.routes())
    .use(routers.allowedMethods());
};
