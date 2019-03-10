'use strict'
const md5 = require('md5')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .bulkInsert(
        'tb_department',
        [
          {
            department: '管理部',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            department: '技术部',
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],{}
      )      
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('tb_department', null, {})
  }
}
