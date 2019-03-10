'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_user', {
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
      gender:{
        type: Sequelize.TINYINT,        
        allowNull: false ,
        defaultValue: 0
      },
      avatar:{
        type:Sequelize.STRING
      },
      departmentId:{
        type:Sequelize.INTEGER,
        defaultValue: 0
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
      tableName:'tb_user',    
      charset:'utf8mb4',
      collate:'utf8mb4_bin',
      comment:'用户表'
    }).then(() => {
      return queryInterface.addIndex('tb_user',{
        name:'username',
        unique:true,
        fields:['username']
      })
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tb_users');
  }
};