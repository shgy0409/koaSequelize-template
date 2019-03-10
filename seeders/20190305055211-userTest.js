'use strict'
const md5 = require('md5')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .bulkInsert(
        'tb_user',
        [
          {
            username: 'John Doe',
            nickname: '傻傻',
            password: md5('123456'),
            gender: 1,
            departmentId: 5,
            avatar: 'filepath',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            username: 'shen tontoi',
            nickname: '傻傻2',
            password: md5('123'),
            gender: 1,
            departmentId: 6,
            avatar: 'filepath2',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            username: 'zhutaotao',
            nickname: '愣愣',
            password: md5('678123'),
            gender: 2,
            departmentId: 4,
            avatar: 'filepath3',
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],{}
      )     
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('tb_user', null, {})
  }
}
