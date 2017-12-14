const jwt = require('jsonwebtoken');
const {
    SECRET,
    TOKEN_EXPIRATION_TIME,
    SUCCESS,
    INVALID_USER,
    SERVER_ERROR,
} = require('../constants');

const encrypt = require('../../utils/encrypt');

const Account = require('../models/Account');

function tokenController(req, res) {
    const {
        username,
        password,
    } = req.body;

    Account.findOneAndUpdate(
        {
            username,
        },
        { $set: { logged_at: new Date() } },
        (err, account) => {
            if (err) {
                res.status(500).send({ status: err });
            }

            if (account) {
                encrypt.compare(password, account.password)
                    .then((isEqual) => {
                        if (isEqual) {
                            const payload = { id: account.id };
                            const token = jwt.sign(payload, SECRET, {
                                expiresIn: TOKEN_EXPIRATION_TIME,
                            });

                            res.json({
                                status: SUCCESS,
                                token,
                            });
                        } else {
                            res.status(401).send({
                                status: INVALID_USER,
                            });
                        }
                    })
                    .catch(() => {
                        res.status(500).send({
                            status: SERVER_ERROR,
                        });
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
