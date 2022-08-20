'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      firstName: 'John',
      lastName: 'Doe',
      username: 'example',
      password:'123456',
      address: 'VN',
      phonenumber: '02468579',
      gender: 1,
      offdays: 12,
      workdays: 12,
      damage: 200000,
      bonus: 10000000,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
