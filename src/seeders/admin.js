'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      firstName: 'Khai',
      lastName: 'Tran',
      username: 'admin',
      password:'1',
      address: 'NT',
      phonenumber: '012345678',
      gender: 1,
      workdays: 25,
      offdays: 3,
      damage: 0,
      bonus: 200000,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
