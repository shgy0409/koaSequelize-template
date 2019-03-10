'use strict';
const md5 = require('md5')
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('tb_user', [{
    username: 'John Doe',
    nickname: '傻傻',
    password: md5('123456'),
    gender: 1,
    departmentId: 1,
    avatar: 'filepath',
    createdAt: new Date(),
    updatedAt: new Date()
  }], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('tb_user', null, {});
    */
   return queryInterface.bulkDelete('tb_user', null, {});
  }
};
