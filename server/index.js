const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

// Or using promises
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(express.static('public'));

app.listen(port, () => console.log(`Server Now Listening on port ${port}`));
