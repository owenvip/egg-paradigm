/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');

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
  config.keys = appInfo.name + '_1575812978932_7706';

  // app全局中间件注册，局部中间库可在router中注册
  config.middleware = [ 'httpLog' ];

  config.httpLog = {
    type: 'all',
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.view = {
    mapping: {
      '.html': 'ejs',
    },
    root: [
      path.join(appInfo.baseDir, 'app/html'),
      path.join(appInfo.baseDir, 'app/view'),
    ].join(','),
  };

  config.ejs = {
    delimiter: '%',
  };

  config.static = {
    prefix: '/assets/',
    dir: path.join(appInfo.baseDir, 'app/assets'),
  };

  config.session = {
    key: 'OWEN_SESS',
    httpOnly: true,
    maxAge: 1000 * 5,
    renew: true,
  };

  config.auth = {
    // 排除无需认证的路由
    exclude: [ '/api/user/login', '/api/user/register' ],
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '12345678',
    database: 'egg_paradigm',
    define: {
      timestamps: false,
      freezeTableName: true,
    },
  };

  config.jwt = {
    secret: 'owen',
  };

  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: null,
      db: 0,
    },
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.allowHosts = [ 'localhost:8000', '127.0.0.1:8000' ];

  config.interfaceLimit = {
    maxCount: 3, // 最多请求个数
    time: 3 * 1000, // 间隔时间
  };

  config.interfaceCache = {
    expire: 10,
    include: [ '/api/user/detail' ],
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    salt: 'owen',
    redisExpire: 60 * 60 * 24, // 过期时间1天
  };

  return {
    ...config,
    ...userConfig,
  };
};
