import Sequelize from 'sequelize';
import { mysql } from '../config/index';

const sequelize = new Sequelize(mysql.database, mysql.username, mysql.password, {
  // 自定义主机; 默认值: localhost
  host: mysql.host,

  // 自定义端口; 默认值: 3306
  port: mysql.port,

  // 自定义协议
  // - 默认值: 'tcp'
  // - 版本: v1.5.0
  // - 仅限 postgres, 用于 heroku
  protocol: null,

  // 禁用日志; 默认值: console.log
  logging: false,

  // 数据库的 sql 方言
  // - 当前支持: 'mysql', 'sqlite', 'postgres', 'mssql'
  dialect: 'mysql',

  // 你还可以将任何方言选项传递到底层方言库
  // - 默认是空
  // - 当前支持: 'mysql', 'postgres', 'mssql'
  // dialectOptions: {
  //   socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
  //   supportBigNumbers: true,
  //   bigNumberStrings: true
  // },

  // sqlite 的存储引擎
  // - 默认值 ':memory:'
  // storage: 'path/to/database.sqlite',

  // 禁止将未定义的值插入为NULL
  // - 默认值: false
  omitNull: true,

  // 是否使用本地库的标志
  // 如果是 'pg' -- 设置为 true 将允许 SSL 支持
  // - 默认值: false
  native: true,

  // 指定在调用 sequelize.define 时使用的选项
  // 如下示例:
  //   define: {timestamps: false}
  // 这基本等同于:
  //   sequelize.define(name, attributes, { timestamps: false })
  // 没有必要像这样去设置每个定义的时间戳选项
  // 下面你看到的这些可能设置的键. 本章中都进行了说明
  define: {
    underscored: false,
    freezeTableName: false,
    syncOnAssociation: true,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci',
    },
    timestamps: true,
  },

  // 类似于同步：你可以定义始终强制同步模型
  // sync: { force: true },

  // 每次关联后进行同步（见下文）。 如果设置为 false，则需要在设置所有关联后手动进行同步。 默认值: true
  syncOnAssociation: true,

  // 使用连接池来减少数据库连接超载并提高速度
  // 当前仅支持 mysql 和 postgresql (从 v1.5.0 开始)
  pool: { max: 5, idle: 30 },

  // 用于确定如何根据 [lingo project](https://github.com/visionmedia/lingo) 将单词翻译成单数形式或复数形式
  // 选项为: en [默认], es
  language: 'en',

  // 每个事务的隔离级别. 默认是 REPEATABLE_READ
  // 可用选项:
  // READ_UNCOMMITTED
  // READ_COMMITTED
  // REPEATABLE_READ
  // SERIALIZABLE
  // isolationLevel: Transaction.ISOLATION_LEVELS.REPEATABLE_READ,
});

module.exports = { sequelize, Sequelize };

