// import mongoose 
const mongoose = require('mongoose');

// define the Mongodb connection url 
const url = 'mongodb://localhost:27017/hotels'

// set up mongodb
mongoose.connect(url,
     { useNewUrlParser: true, 
        useUnifiedTopology: true 
})

// get the default connection 
// mongoose maintains a default connection obj representing the mongoDB  connection 
const db = mongoose.connection;

// define event listner for database connection 
db.on('connected', () => {
    console.log('node server connected to mongodb server')
});

db.on('err', (err) => {
    console.log('mongodb connection error',err);
});

db.on('disconnected', () => {
    console.log('mongodb disconnected');
});

// export the database connection 
module.exports = db;


