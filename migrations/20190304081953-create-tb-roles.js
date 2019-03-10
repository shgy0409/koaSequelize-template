'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_role', {
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
    },{
      tableName:'tb_role',   
      charset:'utf8mb4',
      collate:'utf8mb4_bin',
      comment:'角色表'
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tb_role');
  }
};