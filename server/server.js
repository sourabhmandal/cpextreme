const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const path = require('path');

const app = express();

app.use(express.json());

//app.use(express.static(path.join(__dirname, 'public')))


//DB config
const db = require('../config/keys.js').mongoURI;


//connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('Mongo Connected...'))
  .catch(err => console.log("error"));


//response variables to routes home - (files to refer to when using a route)
const {homepage, cft} = require('../routes/home.js');
// User (Frontend) Routes
app.get('/', homepage);
app.get('/network-concepts', cft);
app.get('/capture-the-flag', cft);







const port = process.env.port || 5000;
const server = app.listen(port, ()=>console.log(`App Listening to ${port} port....`));

process.on('SIGTERM', () => {
  debug('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    debug('HTTP server closed')
  })
})