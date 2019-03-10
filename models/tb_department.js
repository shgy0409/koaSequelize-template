'use strict';
module.exports = (sequelize, Sequelize) => {
  const Department = sequelize.define('Department', {
    _id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
      allowNull: false       
    },
    department: {
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
    tableName: 'tb_department'
  });
  Department.associate = function(models) {
    // associations can be defined here
   // 一对多，一个部门对应多个用户 外键在另一个表中（如tb_user中的departmentId）
   Department.hasMany(models.Users, {
      foreignKey: 'departmentId' ,
      targetKey: '_id',
       as:'U'    
    });
   /* 一对一
    Department.hasOne(models.Users, {
      foreignKey: 'departmentId' ,
       as:'U'    
    }); */
  };
  return Department;
};