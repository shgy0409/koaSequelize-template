'use strict'
const md5 = require('md5')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .bulkInsert(
        'tb_role',
        [
          {
            roleId: 'R001',
            roleName: '管理员',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            roleId: 'R002',
            roleName: '标引员',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            roleId: 'R003',
            roleName: '校审员',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            roleId: 'R000',
            roleName: '未分配',
            createdAt: new Date(),
            updatedAt: new Date()
          }
          
        ],{}
      )      
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('tb_role', null, {})
  }
}
