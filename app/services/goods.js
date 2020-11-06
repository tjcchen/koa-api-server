'use strict';

import Goods from '../models/goods';

class GoodsService {
  /**
   * Retrieve t_goods list with params from database
   * 
   * @param {*} page 
   * @param {*} pageSize 
   */
  static async list(page, pageSize) {
    return new Promise((resolve, reject) => {
      Goods.findAll({

      }).then((result) => {
        resolve(result);
      }).catch((err) => {
        reject(err); 
      });
    });
  }
}

export default {
  list: GoodsService.list
};