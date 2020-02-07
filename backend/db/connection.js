const mongoose = require('mongoose');
let mongoURI = '';
const db = mongoose.connection;

if (process.env.NODE_ENV === 'production') {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = 'mongodb://localhost/gifs';
}

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
