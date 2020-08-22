module.exports = (sequelize, type) => {
    return sequelize.define('review', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: type.STRING,
        review_text: type.STRING,
        stars: type.INTEGER,
        user_id: type.INTEGER,
        book_id: type.INTEGER,
    })
}