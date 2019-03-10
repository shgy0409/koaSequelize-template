'use strict'
const md5 = require('md5')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .bulkInsert(
        'tb_user_role',
        [
          {
            userId:12,
            roleId: 'R001',            
            createdAt: new Date(),
            updatedAt: new Date()
          },         
          {
            userId:13,
            roleId: 'R002',            
            createdAt: new Date(),
            updatedAt: new Date()
          },         
          {
            userId:14,
            roleId: 'R001',            
            createdAt: new Date(),
            updatedAt: new Date()
          },         
          
        ],{}
      )      
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('tb_user_role', null, {})
  }
}
