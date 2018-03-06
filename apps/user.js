import { Sequelize, sequelize } from '../server/sequelize';

const user = sequelize.define('User', {
  loginName: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
}, {});

export default user;
