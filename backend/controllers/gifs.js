const express = require('express');
const Gif = require('../models/schema');
const router = express.Router();

router.get('/', (req, res) => {
  Gif.find({})
    .then(gifs => res.json(gifs))
    .catch(console.error);
});

router.get('/:name', (req, res) => {
  Gif.find({})
    .then(gifs => res.json(gifs))
    .catch(console.error);
});

module.exports = router;
