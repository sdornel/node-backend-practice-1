// const http = require('http')

// // Create an instance of the http server to handle HTTP requests
// let app = http.createServer((req, res) => {
//     // Set a response type of plain text for the response
//     res.writeHead(200, {'Content-Type': 'text/plain'});

//     // Send back a response and end the connection
//     res.end('Hello World!\n');
// })

// // Start the server on port 3000
// app.listen(3000, '127.0.0.1');
// console.log('Node server running on port 3000');

// ////////// WITH EXPRESS //////////

// const express = require('express')

// // Create Express app
// const app = express()

// // A sample route
// app.get('/', (req, res) => res.send('Hello World at "/"!'))
// app.get('/express', (req, res) => res.send('Hello World via express!'))

// // Start the Express server
// app.listen(3000, () => console.log('Server running on port 3000!'))

// ////////// END WITH EXPRESS //////////

// const express = require('express')
// const app = express();
// const port = process.env.PORT || 5000;

// // console.log that server is up and running
// app.listen(port, () => console.log(`Listening on port ${port}`));

// // create a GET route
// app.get('/express_backend', (req, res) => {
//     res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'})
// })


