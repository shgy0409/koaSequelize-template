'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
//连接数据库
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
//测试数据库链接
sequelize.authenticate().then(function() {
  console.log("数据库连接成功");
}).catch(function(err) {
  //数据库连接失败时打印输出
  console.error(err);
  throw err;
})
//自动加载models目录下除index.js的所有模型文件，
//所有模型文件被执行，并实例化成模型对象,挂载在‘db.’之下，最后导出。
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
/**
 * 输出对象形式 {sequelize,Sequelize,axxx_model,bxxx_model}
 */
module.exports = db;
