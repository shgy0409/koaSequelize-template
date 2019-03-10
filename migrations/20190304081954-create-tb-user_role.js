'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'tb_user_role',
      {
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
      },
      {
        tableName: 'tb_user_role',
        charset: 'utf8mb4',
        collate: 'utf8mb4_bin',
        comment: '用户角色表'
      }
    )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tb_user_role')
  }
}
