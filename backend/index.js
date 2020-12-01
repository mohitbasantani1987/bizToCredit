require('dotenv').config();
const express = require('express')
const app  = express()
const bodyParser = require('body-parser')
const apiRoutes = require('./routes/apiRoutes')
const mongoose = require('../backend/config/db')


app.use(express.json());
app.use(bodyParser.urlencoded({ extended:true })); 

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials", true);
    next();
})

app.use('/api', apiRoutes);

app.listen(process.env.APP_PORT, ()=> {
    console.log("app is up and running on port :", process.env.APP_PORT);
  })