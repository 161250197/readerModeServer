;
(function() {
  const {
    port,
    host
  } = require('./data/setting.json')
  const Koa = require('koa');
  const app = new Koa();
  app.use(require('koa-bodyparser')());
  app.use(async(ctx, next) => {
    console.log(`Process ${ctx.method} ${ctx.url} ${ctx.path}`);
    await next();
  });
  app.use(require('./middleware/controllers.js')())
  app.use(require('koa-static')(`${__dirname}/../public`))
  app.listen(port);
  console.log(`[INFO] 服务端已启动： http://${host}:${port}/`)
}());
