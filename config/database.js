import config from './index';

module.exports = {
  development: {
    username: config.mysql.username,
    password: config.mysql.password,
    database: config.mysql.database,
    host: config.mysql.host,
    dialect: 'mysql',
  },
};
