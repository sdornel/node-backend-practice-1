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

// app.get('/users', db.getUsers)
// app.get('/users/:id', db.getUserById)
// app.post('/users', db.createUser)
// app.put('/users/:id', db.updateUser)
// app.delete('/users/:id', db.deleteUser)

// // const express = require('express')
// // const bodyParser = require('body-parser')
// // const app = express()
// // const port = 3000

// // app.use(bodyParser.json())
// // app.use(
// //   bodyParser.urlencoded({
// //     extended: true,
// //   })
// // )




// const express = require('express')
// const bodyParser = require('body-parser')
// const app = express()
// const db = require('./queries')
// const port = 3000

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

// practice building basic server

var express = require("express");
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/url", (req, res, next) => {
  res.json(["Tony","Lisa","Michael","Ginger","Food"]);
 });