const Sequelize = require('sequelize')
const UserModel = require('./models/user')
const BookModel = require('./models/book')
const GroupModel = require('./models/group')

const sequelize = new Sequelize('codementor', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const User = UserModel(sequelize, Sequelize)
// BlogTag will be our way of tracking relationship between Blog and Tag models
// each Blog can have multiple tags and each Tag can have multiple blogs
const BookGroup = sequelize.define('book_group', {})
const Book = BookModel(sequelize, Sequelize)
const Group = GroupModel(sequelize, Sequelize)

Book.belongsToMany(User, { through: Group, unique: false })
User.belongsToMany(Book, { through: Group, unique: false })
Group.belongsTo(User);
Group.belongsTo(Book);

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  User,
  Book,
  Group
}









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