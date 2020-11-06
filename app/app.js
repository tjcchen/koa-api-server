'use strict';

import Koa from 'koa';
import router from './routes';

const app = new Koa();

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(8001);

export default app;