module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Books',
    [
      {
        title: 'Return of The King',
        author: 'J.R.R. Tolkien',
        pages: 416,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Book 2',
        author: 'jondoe@example.com',
        pages: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Books', null, {}),
};
