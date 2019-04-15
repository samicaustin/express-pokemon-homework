// npm init
// enter for everything, name entrypoint server.js
// npm install express body-parser ejs method-override
// make server.js with express, app, and port listener
// make models folder for data
// make views folder for all ejs 
// make controller folder
// in the js file within controllers: require express and data, router = express.Router();


// SERVER SETUP
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const app = express();


// PORT LISTENER
const port = 3000;
app.listen(port, () => {
    console.log("App is runnin', runnin', and runnin', runnin'")
})

// MIDDLEWARE
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('Public')) // CSS is static (unchanging) and can be embedded here!
app.use(morgan('short'));

// DATA FILE
const pokemon = require('./pokemon.js');

// INDEX ROUTE
app.get('/pokemon', (req, res) => {
    Pokemon = pokemon;
    res.render('index.ejs');
});

// NEW ROUTE
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs');
});

// CREATE ROUTE
app.post('/pokemon', (req, res) => {
    pokemon.push(req.body);
    res.redirect('/pokemon');
});

// SHOW ROUTE
app.get('/pokemon/:id', (req, res) => {
    Pokemon = pokemon[req.params.id];
    Index = req.params.id;
    res.render('show.ejs',{
        id: req.params.id
    });
});

// UPDATE ROUTE
app.put('/pokemon/:id', (req, res) => {    
    pokemon[req.params.id] = req.body;
    res.redirect('/pokemon');
});

// EDIT ROUTE
app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        Pokemon: pokemon[req.params.id],
        id: req.params.id
    })
});

// DELETE ROUTE
app.delete('/pokemon/:id', (req, res) => {
    pokemon.splice(req.params.id, 1);
    res.redirect('/pokemon');
});


module.exports = app;