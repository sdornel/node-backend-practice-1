module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    text: DataTypes.STRING,
    stars: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here

    Review.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE',
    })

    Review.belongsTo(models.Book, {
      foreignKey: 'bookId',
      as: 'book',
      onDelete: 'CASCADE',
    })

  };
  return Review;
};