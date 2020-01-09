const models = require('../models/users');

module.exports = {
  postAUser: (req, res) => {
    const user = {
      name: req.body.name,
      password: req.body.password
    };
    models.postAUser(user, (err, results) => {
      if (err) {
        throw err;
      } else {
        res.send(results);
      }
    });
  }
};
