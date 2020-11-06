'use strict';

import GoodsService from '../services/goods';

class GoodsController {

  /**
   * Retrieve all goods list
   * 
   * @param {*} ctx 
   * @param {*} next 
   */
  static async list(ctx, next) {
    const page = parseInt(ctx.query['page']);
    const pageSize = parseInt(ctx.query['per_page']);

    let ret;

    try {
      ret = ctx.ok(await GoodsService.list(page, pageSize));
    } catch(e) {
      ret = ctx.ok({
        errCode: e.original && e.original.errno || -10000,
        errMsg: e.original && e.original.code || 'unknown error!'
      });
    }

    ctx.body = ret;

    await next;
  }

}

export default {
  list: GoodsController.list
};

