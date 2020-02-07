const express = require('express');
const Gif = require('../models/schema');
const router = express.Router();

router.get('/', (req, res) => {
  const name = req.query.name;
  console.log(name);
  Gif.find({})
    .then(gifs => res.json(gifs))
    .catch(console.error);
});

router.post('/', (req, res) => {
  Gif.create({
    name: req.body.name,
    url: req.body.url
  })
    .then(gifs => {
      Gif.find({}).then(data => res.json(data));
    })
    .catch(console.error);
});

router.put('/:id', (req, res) => {
  const gif = { name: req.body.name, url: req.body.url };
  Gif.findOneAndUpdate({ _id: req.params.id }, { $set: gif }, { new: true })
    .then(gifs => {
      Gif.find({}).then(data => res.json(data));
    })
    .catch(console.error);
});

router.delete('/:id', (req, res) => {
  Gif.deleteOne({ _id: req.params.id })
    .then(gifs => {
      Gif.find({}).then(data => res.json(data));
    })
    .catch(console.error);
});

module.exports = router;
