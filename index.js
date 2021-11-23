//instance from express framework
const express = require('express');
//call the express function 
const app = express();
const cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:4200'
  }
  app.use(cors({
    origin: '*',
    credentials: true
  }));//call db module from db.js file

const db = require('./db');


// instance from bodyparser wich used to able us use req.body stetment
var bodyParser = require('body-parser')
app.use(bodyParser.json())
// make variable for the port in our case the port we will work with is 3000
const port = 3000;
app.get('/patients', async(req, res)=>{
    // return response to the client
    //200 code referce to request done correctly
    res.status(200).json("Im working ...");
})

// run the server on the port we defined before
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})



