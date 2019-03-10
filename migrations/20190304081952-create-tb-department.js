'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_department', {
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
    },{
      tableName:'tb_department',   
      charset:'utf8mb4',
      collate:'utf8mb4_bin',
      comment:'部门表'
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tb_department');
  }
};