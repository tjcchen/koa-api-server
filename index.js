const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = 'Welcome to Koa! Andy Chen';
});

app.listen(3000);