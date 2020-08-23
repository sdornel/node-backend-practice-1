module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    Title: DataTypes.STRING,
    Author: DataTypes.STRING,
    Pages: DataTypes.INTEGER
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
    Book.hasMany(models.reviews, {
      foreignKey: 'bookId',
      as: 'reviews',
      onDelete: 'CASCADE',
    });
  };
  return Book;
};