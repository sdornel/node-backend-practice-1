module.exports = (sequelize, type) => {
    return sequelize.define('book', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: type.STRING,
        author: type.STRING,
        text: type.STRING
    })
}