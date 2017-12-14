const jwt = require('jsonwebtoken');
const encrypt = require('../../utils/encrypt');

const {
    SECRET,
    TOKEN_EXPIRATION_TIME,
    SUCCESS,
    SERVER_ERROR,
} = require('../constants');

const Account = require('../models/Account');

function singup(req, res) {
    const {
        password,
        ...accountData
    } = req.body;

    encrypt.hash(password)
        .then((hash) => {
            const account = {
                ...accountData,
                password: hash,
                updated_at: new Date(),
                logged_at: new Date(),
            };

            Account.findOneAndUpdate(
                { username: accountData.username },
                {
                    ...account,
                    $setOnInsert: { created_at: new Date() },
                },
                { new: true, upsert: true },
                (err, updatedAccount) => {
                    if (err) {
                        res.status(500).send({ status: err });
                    }

                    const payload = { id: updatedAccount.id };
                    const token = jwt.sign(payload, SECRET, { expiresIn: TOKEN_EXPIRATION_TIME });

                    const {
                        password,
                        ...updatedAccountResult
                    } = updatedAccount.toObject();

                    res.json({
                        status: SUCCESS,
                        token,
                        account: updatedAccountResult,
                    });
                },
            );
        })
        .catch(() => {
            res
                .status(500)
                .send({ status: SERVER_ERROR });
        });
}

module.exports = singup;
