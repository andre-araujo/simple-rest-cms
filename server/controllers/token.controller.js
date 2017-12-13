const { MD5 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const {
    SECRET,
    TOKEN_EXPIRATION_TIME,
    SUCCESS,
    INVALID_USER,
} = require('../constants');

const Account = require('../models/Account');

function tokenController(req, res) {
    const {
        email,
        password,
    } = req.body;

    Account.findOneAndUpdate(
        {
            email,
            password: MD5(password).toString(),
        },
        { $set: { logged_at: new Date() } },
        (err, account) => {
            if (err) {
                res.status(500).send({ status: err });
            }

            if (account) {
                const payload = { id: account.id };
                const token = jwt.sign(payload, SECRET, { expiresIn: TOKEN_EXPIRATION_TIME });

                res.json({
                    status: SUCCESS,
                    token,
                });
            } else {
                res.status(401).send({
                    status: INVALID_USER,
                });
            }
        },
    );
}

module.exports = tokenController;
