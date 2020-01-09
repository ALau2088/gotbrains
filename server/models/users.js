require('../db');
require('../schemas/User');

module.exports = {
  postAUser: (userdata, callback) => {
    console.log('line 6', userdata);
    const user = new User(userdata);
    user.save(err => callback(err, userdata));
  }
};
