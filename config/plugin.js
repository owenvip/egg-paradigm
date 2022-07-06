'use strict';
const path = require('path');

exports.validate = {
  enable: true,
  package: 'egg-validate',
};

exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};

exports.auth = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-auth'),
};

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

exports.jwt = {
  enable: true,
  package: 'egg-jwt',
};

exports.redis = {
  enable: true,
  package: 'egg-redis',
};

exports.allowHosts = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-allowHosts'),
};

exports.interfaceLimit = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-interfaceLimit'),
};

exports.interfaceCache = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-interfaceCache'),
};
