module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Reviews",
      [
        {
          userId: 1,
          bookId: 1,
          text:
            "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
          stars: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          bookId: 2,
          text:
            "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
          stars: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Reviews", null, {})
};