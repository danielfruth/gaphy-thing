const mongoose = require('./connection');
const seeds = require('./seed.json');
const Gif = require('../models/schema');
const db = mongoose.connection;

Gif.deleteMany({})
  .then(() => {
    console.log('deleted all gifs');
  })
  .then(() => {
    Gif.insertMany(seeds, (error, gifs) => {
      if (error) {
        console.log(error);
      } else {
        console.log(gifs);
      }
      db.close();
    });
  });
