const express = require('express');
const router = express.Router();
const pokemon = require('./pokemon');

// INDEX ROUTE
router.get('/', (req, res) => {
    Pokemon = pokemon;
    res.render('index.ejs');
});

// NEW ROUTE
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

// CREATE ROUTE
router.post('/', (req, res) => {
    pokemon.push(req.body);
    res.redirect('/pokemon');
});

// SHOW ROUTE
router.get('/:id', (req, res) => {
    Pokemon = pokemon[req.params.id];
    Index = req.params.id;
    res.render('show.ejs',{
        id: req.params.id
    });
});

// UPDATE ROUTE
router.put('/:id', (req, res) => {    
    pokemon[req.params.id] = req.body;
    res.redirect('/pokemon');
});

// EDIT ROUTE
router.get('/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        Pokemon: pokemon[req.params.id],
        id: req.params.id
    })
});

// DELETE ROUTE
router.delete('/:id', (req, res) => {
    pokemon.splice(req.params.id, 1);
    res.redirect('/pokemon');
});

module.exports = router;