const Sequelize = require('sequelize')
const UserModel = require('./models/user')
const BookModel = require('./database/models/book')
const ReviewModel = require('./models/review')

const sequelize = new Sequelize('books_api', 'kaidornel', null, {
  host: 'localhost',
  dialect: 'postgres',
  // pool: {
  //   max: 10,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000
  // }
})

// const User = UserModel(sequelize, Sequelize)
// // BlogTag will be our way of tracking relationship between Blog and Tag models
// // each Blog can have multiple tags and each Tag can have multiple blogs
// const BookReview = sequelize.define('book_Review', {}) // probably don't need this
// const Book = BookModel(sequelize, Sequelize)
// const Review = ReviewModel(sequelize, Sequelize)

// Book.belongsToMany(User, { through: Review, unique: false })
// User.belongsToMany(Book, { through: Review, unique: false })
// Review.belongsTo(User);
// Review.belongsTo(Book);

// sequelize.sync({ force: true })
//   .then(() => {
//     console.log(`Database & tables created!`)
//   })

// module.exports = {
//   User,
//   Book,
//   Review
// }









// const Sequelize = require('sequelize')
// const UserModel = require('./models/user')
// const BlogModel = require('./models/blog')
// const TagModel = require('./models/tag')

// const sequelize = new Sequelize('codementor', 'root', 'root', {
//   host: 'localhost',
//   dialect: 'mysql',
//   pool: {
//     max: 10,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// })

// const User = UserModel(sequelize, Sequelize)
// // BlogTag will be our way of tracking relationship between Blog and Tag models
// // each Blog can have multiple tags and each Tag can have multiple blogs
// const BlogTag = sequelize.define('blog_tag', {})
// const Blog = BlogModel(sequelize, Sequelize)
// const Tag = TagModel(sequelize, Sequelize)

// Blog.belongsToMany(Tag, { through: BlogTag, unique: false })
// Tag.belongsToMany(Blog, { through: BlogTag, unique: false })
// Blog.belongsTo(User);

// sequelize.sync({ force: true })
//   .then(() => {
//     console.log(`Database & tables created!`)
//   })

// module.exports = {
//   User,
//   Blog,
//   Tag
// }