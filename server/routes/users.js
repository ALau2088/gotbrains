const express = require('express');
const users = express.Router();
const controllers = require('../controllers/users');

users.get('/', (req, res) => {
  res.send('users');
});

users.post('/', controllers.postAUser);

module.exports = users;
