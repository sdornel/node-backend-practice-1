const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
    res.send(
        [
            { 
                express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' 
            },
            {
                lordOfTheRings: {
                    author: "Tolkien",
                    pages: 1000
                }
            }
        ]
    );
});