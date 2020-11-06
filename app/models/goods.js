'use strict';

import Sequelize from 'sequelize';

const Goods = Sequelize.define('t_goods', {
  id: {
    type: Sequelize.INTEGER,
    field: 'id',
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    field: 'title',
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    field: 'description',
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    field: 'content',
    allowNull: false
  },
  thumbnail: {
    type: Sequelize.STRING,
    field: 'thumbnail',
    allowNull: false
  },
  cid: {
    type: Sequelize.INTEGER,
    field: 'cid'
  },
  uid: {
    type: Sequelize.INTEGER,
    field: 'uid'
  },
  likeCount: {
    type: Sequelize.INTEGER,
    field: 'like_count'
  },
  commentCount: {
    type: Sequelize.INTEGER,
    field: 'comment_count'
  },
  visitCount: {
    type: Sequelize.INTEGER,
    field: 'visit_count'
  },
  createDate: {
    type: Sequelize.DATE,
    field: 'create_date'
  },
  updateDate: {
    type: Sequelize.DATE,
    field: 'update_date'
  }
}, { createAt: 'create_date', updateAt: 'update_date' });

// Goods.belongsTo(Category, { foreignKey: 'cid' });
// Goods.belongsTo(User, { foreignKey: 'uid' });

export default Goods;
