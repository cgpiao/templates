/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1608465950563_4577';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  const sequelize = {
    dialect: 'postgres', // support: mysql, mariadb, postgres, mssql
    database: 'testdb2',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'qwer1234',
  };

  return {
    ...config,
    ...userConfig,
    ...sequelize,
  };
};
