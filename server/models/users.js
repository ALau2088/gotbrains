require('../db');
require('../schemas/User');

module.exports = {
  postAUser: (userdata, callback) => {
    // check if there is user with that username return 

    const user = new User(userdata);
    user.save(err => callback(err, userdata));
  }
};
