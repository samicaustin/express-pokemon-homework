// SERVER SETUP
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// PORT LISTENER
const port = 3000;
app.listen(port, function() {
    console.log("App is runnin', runnin', and runnin', runnin'")
})

// MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DATA FILE
const pokemon = require('./pokemon.js');

// INDEX ROUTE
app.get('/pokemon', function(req, res) {
    Pokemon = pokemon;
    res.render('index.ejs');
})




module.exports = app;