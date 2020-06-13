const express = require('express'); //importing the express.js
const getir = express(); //to using express.js
const mongoose = require('mongoose'); //importing mongoose for using MongoDB
const bodyParser = require('body-parser');
const cors = require('cors'); //to run my backend codes in an online compiler which is codepen.io
require('dotenv/config'); //for don't show our username and password, created a .env doc, this is the import for that


//middlewares
getir.use(cors());
getir.use(bodyParser.json());

//importing the Routes
const postsRoute = require('./routes/posts');
getir.use('/posts', postsRoute);

//routes
getir.get('/', (req, res) => {
    res.send('We are at home');
});

//database connection
mongoose.connect(
    process.env.DB_CONNECTION,
{
     useNewUrlParser: true,
     useUnifiedTopology: true,
},
() => console.log('connected to DB!')
);

//to start the server with listen command
getir.listen(8000);
