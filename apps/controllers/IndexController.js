import jsonwebtoken from 'jsonwebtoken';

class IndexController {
  static async index(ctx, next) {
    ctx.body = {
      title: 'Hello World',
    };

    await next();
  }

  static login(ctx) {
    const userToken = {
      name: 'goto',
    };
    const token = jsonwebtoken.sign(userToken, 'shared-secret', { expiresIn: '1h' });
    ctx.body = {
      status: 0,
      message: '获取token成功',
      token,
    };
  }
}

export default IndexController;
