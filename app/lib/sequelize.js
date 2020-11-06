'use strict';

import Sequelize from 'sequelize';
import { db } from '../config/index';

// mysql database connection
const sequelize = new Sequelize(db.database, db.username, db.password, {
  host: db.host,
  dialect: 'mysql',
  port: db.port,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;