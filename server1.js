const express = require('express')
const app = express();

app.get('/', function (req, res) {
  res.send('Welcome to my first server in the history of the world')
}) //menu card

// '/': This is the path for the route. It refers to the root URL of the server. When a user visits the root URL (e.g., http://localhost:3000/), this route will handle the request.

app.get('/water', (req,res) => {
    res.send('Water is the best drink in the world')
} )


app.get('/idli', (req,res) => {
    var cust_idli={
        name: 'rawa idli',
        price: 10,
        is_sambar : true,
        is_chutney : true,
    }
    res.send(cust_idli)
} )

app.post('/person' , (req, res) => {
    res.send("yep req recieved")
})


app.listen(3000) //port