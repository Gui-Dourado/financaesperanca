const bcrypt = require('bcryptjs');

const createPasswordHash = async (password) => {
    return bcrypt.hash(password, 8);
}

module.exports = createPasswordHash;