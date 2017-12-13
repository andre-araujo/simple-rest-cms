
const passportJWT = require('passport-jwt');
const {
    SECRET,
    USER_NOT_FOUND,
} = require('../constants');

const Account = require('../models/Account');

const { ExtractJwt } = passportJWT;
const JwtStrategy = passportJWT.Strategy;

const opts = {
    secretOrKey: SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const strategy = new JwtStrategy(opts, ((payload, done) => {
    Account.findOne({
        _id: payload.id,
    }, (err, account) => {
        if (err) {
            return done(new Error(err), null);
        }

        if (!account) {
            return done(new Error(USER_NOT_FOUND), null);
        }

        return done(null, { id: account.id });
    });
}));

module.exports = strategy;
