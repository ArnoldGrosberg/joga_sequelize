'use strict';

module.exports = {
   up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('authors', [{
        name: 'Ashley Galvin',
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('authors', [{
        name: 'Patrick Beach',
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('authors', [{
        name: 'MacKenzie Miller',
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('authors', null, {});
  }
};
