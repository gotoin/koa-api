import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import jwt from 'koa-jwt';
import json from 'koa-json';
import routers from '../config/routes';

const app = new Koa();

// Custom 401 handling if you don't want to expose koa-jwt errors to users
app.use((ctx, next) => next().catch((err) => {
  if (err.status === 401) {
    ctx.status = 401;
    ctx.body = {
      error: err.originalError ? err.originalError.message : err.message,
    };
  } else {
    throw err;
  }
}));

// Middleware below this line is only reached if JWT token is valid
app.use(jwt({ secret: 'shared-secret' }).unless({
  path: [/^\/login/],
}));

app.use(json())
  .use(bodyParser());

routers(app);

app.listen(3001);
