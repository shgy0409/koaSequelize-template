'use strict'
module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define(
    'Users',
    {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false
      },
      username: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      nickname: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      password: {
        type: Sequelize.CHAR(32),
        allowNull: false
      },
      gender: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0
      },
      avatar: {
        type: Sequelize.STRING
      },
      departmentId: {
        type: Sequelize.INTEGER,
        defaultValue: 0
       /*  references: {
          model: 'Department',
          key: '_id'
        } */
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
    },
    {
      tableName: 'tb_user'
    }
  )
  Users.associate = function (models) {
    // associations can be defined here
    // 一对一，一个用户属于一个部门 foreignKey:是本表（或对象）的键，
    // targetKey是关联表键， 如果外键关联的是主键则不用写targetKey
    // 别名as 在关联关系和查询语句中都要定义
    /**一对多 */
    Users.belongsTo(models.Department, {
      foreignKey: 'departmentId',
      targetKey: '_id',
      as: 'D'
    })
 /**多对多   */
    Users.belongsToMany(models.Role, {
      
     // through: models.UserRole,//中间表对象
      through: 'UserRole',//中间表对象
      foreignKey: 'userId',
      otherKey: 'roleId',
      as:'R'
    })
  }
  return Users
}
