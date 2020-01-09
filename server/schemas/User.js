const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// mongoose looks for database users plural lowercased version of 'User'
module.exports = User = mongoose.model('User', userSchema);
