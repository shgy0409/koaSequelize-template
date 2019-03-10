'use strict';
module.exports = (sequelize, Sequelize) => {
  const UserRole = sequelize.define('UserRole', {
    userId: {
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    roleId: {
      primaryKey: true,
      type: Sequelize.STRING(20)
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {
    tableName: 'tb_user_role'
  }) ;
  return UserRole;
};