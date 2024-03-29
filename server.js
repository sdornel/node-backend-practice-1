// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const port = process.env.PORT || 3000;
// const db = require('./queries');
// const { response } = require('express');

// app.use(cors()) // use cors

// app.use(bodyParser.json())
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// )











// const express = require('express')
// const bodyParser = require('body-parser')
// const app = express()
// const db = require('./queries')
// const port = 3000
// // const cors = require('cors')

// // app.use(cors()) // use cors

// app.use(bodyParser.json())
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// )

// app.get('/', (request, response) => {
//   response.json({ info: 'Node.js, Express, and Postgres API' })
// })

// app.get('/users', db.getUsers)
// app.get('/users/:id', db.getUserById)
// app.post('/users', db.createUser)
// app.put('/users/:id', db.updateUser)
// app.delete('/users/:id', db.deleteUser)



// app.listen(port, () => {
//   console.log(`App running on port ${port}.`)
// })


const express = require('express')
const bodyParser = require('body-parser')
// dependencies
const { User, Book, Group } = require('./sequelize')

const app = express()
app.use(bodyParser.json())

// API ENDPOINTS

const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})

// create a user
app.post('/api/users', (req, res) => {
  User.create(req.body)
      .then(user => res.json(user))
})
// get all users
app.get('/api/users', (req, res) => {
  User.findAll().then(users => res.json(users))
})

// get all books
app.get('/api/books', (req, res) => {
  Book.findAll().then(books => res.json(books))
})

// create a group // create a review
app.post('/api/reviews', (req, res) => { //
  const body = req.body
  // either find a tag with name or create a new one
  const books = body.books.map(book => Book.findOrCreate({ where: { title: book.title, author: book.author, 
    text: book.text }, defaults: { title: book.title, author: book.author, text: book.text }})
                                       .spread((book, created) => book))
                                       
  User.findById(body.userId)
      .then(() => Review.create(body))
      .then(review => Promise.all(books).then(storedBooks => Review.addBooks(storedBooks)).then(() => review))
      .then(review => Review.findOne({ where: {id: review.id}, include: [User, Book]}))
      .then(reviewWithAssociations => res.json(reviewWithAssociations))
      .catch(err => res.status(400).json({ err: `User with id = [${body.userId}] doesn\'t exist.`}))
})

// TO DO: FIGURE OUT HOW TO SEED DATABASE WITH DUMMY DATA


// // console.log that your server is up and running
// app.listen(port, () => console.log(`Listening on port ${port}`));

// // create a GET route
// app.get('/express_backend', (req, res) => {
//     res.send(
//         [
//             { 
//                 express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT',
//                 info: 'Node.js, Express, and Postgres API' 
//             },
//             {
//                 lordOfTheRings: { // fake database
//                     author: "Tolkien",
//                     pages: 1000
//                 }
//             }
//         ]
//     );
// });

// app.get('/users', (req, res) => {
//     response.json({ info: 'Node.js, Express, and Postgres API' })
//     // res.send(
//         // {info: 'Node.js, Express, and Postgres API'} // this creates JSON data. not real db though...
//     // )
// })


// app.post('/users', (req, res) => {
//   console.log('Got body:', req.body);
//   res.sendStatus(200);
// });

// practice building basic server

// var express = require("express");
// var app = express();
// app.listen(3000, () => {
//  console.log("Server running on port 3000");
// });

// app.get("/list-of-users", (req, res, next) => {
//   res.json(["Tony","Lisa","Michael","Ginger","Food"]);
//  });