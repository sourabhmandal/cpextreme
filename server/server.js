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
const {homepage, networkhome, ctfhome} = require('../routes/hackernautics.js');
const {admin_home, admin_addpost, admin_deletepost, admin_updatepost} = require('../routes/admin')

// User (Frontend) Routes
app.get('/', homepage);
app.get('/network-concepts', networkhome);
app.get('/capture-the-flag', ctfhome);

// Admin Routes
app.get('/admin', admin_home);
app.post('/admin/edit-post', admin_addpost);
app.delete('/admin/edit-post/:id', admin_deletepost);
app.put('/admin/edit-post/:id', admin_deletepost);



const port = process.env.port || 5000;
const server = app.listen(port, ()=>console.log(`App Listening to ${port} port....`));

process.on('SIGTERM', () => {
  debug('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    debug('HTTP server closed')
  })
})