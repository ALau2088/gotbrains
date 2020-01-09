const mongoose = require('mongoose');
const db = require('../config/keys').mongoURI;

// Connect to db
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
