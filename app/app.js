'use strict';

import Koa from 'koa';
import helmet from 'koa-helmet';
import router from './routes';
import middlewares from './middlewares';

const app = new Koa();

app.use(helmet())
   .use(middlewares())
   .use(router.routes())
   .use(router.allowedMethods());

app.listen(8001, () => {
   console.log('Server is running on port: ' + 8001);
});

export default app;