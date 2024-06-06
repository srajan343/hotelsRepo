const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('Welcome hey')
})

// Import the router files
const personroutes = require('./routes/personroutes');
const menuroutes = require('./routes/menuroutes');

// //use the routes
app.use('/person' , personroutes);
app.use('/menuItems' , menuroutes);

app.listen(PORT, ()=>{
    console.log('Server is running on port 3000');
})