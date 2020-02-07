const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost/gifs';
const db = mongoose.connection;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.Promise = Promise;

db.on('error', err => console.log(err.message + ' is MongoDB not running?'));
db.on('connected', () => console.log('MongoDB connected on: ', mongoURI));
db.on('disconnected', () => console.log('MongoDB disconnected'));

module.exports = mongoose;
