const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3000;
const gifController = require('./backend/controllers/gifs');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/gifs', gifController);

app.listen(port, () => console.log('running on port ' + port));
