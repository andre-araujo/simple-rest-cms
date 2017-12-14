const bcrypt = require('bcrypt');

const saltRounds = 10;

const encrypt = {
    hash(text) {
        return bcrypt.hash(text, saltRounds);
    },
    compare(text, hash) {
        return bcrypt.compare(text, hash);
    },
};

module.exports = encrypt;
