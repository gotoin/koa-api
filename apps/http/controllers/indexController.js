class indexController {
  static async index(ctx) {
    ctx.body = {
      title: 'Hello World',
    };
  }
}

export default indexController;
