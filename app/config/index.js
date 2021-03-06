exports.db = process.env.NODE_ENV === 'local' ? {
  database: 'shopping',
  username: 'root',
  password: '',
  host: '127.0.0.1',
  port: 3306 // mysql default port
} : {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_NAME_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT
};

export const secret = 'jwt_secret';