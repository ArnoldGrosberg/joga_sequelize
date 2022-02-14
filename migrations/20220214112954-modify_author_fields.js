'use strict';

module.exports = {
 up (queryInterface, Sequelize) {
  return Promise.all([
    queryInterface.changeColumn('authors', 'id', {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    }),
    queryInterface.changeColumn('authors', 'name', {
      type: Sequelize.STRING,
      allowNull: false
    })
    ])
  },

  down (queryInterface) {
    return Promise.all([
      queryInterface.dropTable('authors')
      ])
  }
};
