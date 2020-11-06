'use strict';

import Goods from '../models/goods';

class GoodsService {

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