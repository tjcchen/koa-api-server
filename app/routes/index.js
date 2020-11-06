'use strict';

import koaRouter from 'koa-router';
import goods from '../controllers/goods';

const router = new koaRouter({
  prefix: '/api/v1'
});

router.get('/goods', goods.list);

export default router;