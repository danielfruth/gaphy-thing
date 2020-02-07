const express = require('express');
const app = express();
const cors = require('cors');

const gifController = require('./backend/controllers/gifs');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/gifs', gifController);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
