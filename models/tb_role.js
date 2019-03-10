'use strict';
module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define('Role', {
    roleId: {
      primaryKey: true,
      type: Sequelize.STRING(20)              
    },
    roleName: {
      type: Sequelize.STRING(20),       
      allowNull: false 
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE

    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    deleteAt: {        
      type: Sequelize.DATE
    }
  }, {
    tableName: 'tb_role'
  }) ;
  Role.associate = function(models) {
    // associations can be defined here
   // 一对多，一个部门对应多个用户 外键在另一个表中（如tb_user中的departmentId）
  /*  Role.hasMany(models.UserRole, {
    foreignKey: 'roleId',
    as: 'UR'
    }) */
    /* Role.belongsToMany(models.Users, {
      as: 'UR',
      through: 'UserRole'
    }) */
  };
  return Role;
};