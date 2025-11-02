const bcrypt = require('bcryptjs');

const checkPassword = (user, password) => {
    return bcrypt.compare(password, user.password);
}

module.exports = checkPassword;