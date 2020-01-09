const express = require('express');
const app = express();
const port = 3000;

// Connect to db
require('./db');

// Static files
app.use(express.static('public'));

// Body Parser Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
const users = require('./routes/users');
app.use('/api/users', users);

app.listen(port, () => console.log(`Server Now Listening on port ${port}`));
