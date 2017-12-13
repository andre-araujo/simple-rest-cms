const passport = require('passport');
const {
    INVALID_TOKEN,
    EXPIRED_TOKEN,
    INVALID_USER,
} = require('../constants');

function authentication(req, res, next) {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (info && info.name === 'JsonWebTokenError') {
            return res.status(403).json({
                status: INVALID_TOKEN,
            });
        }

        if (info && info.name === 'TokenExpiredError') {
            return res.status(403).json({
                status: EXPIRED_TOKEN,
            });
        }

        if (!user) {
            return res.status(401).send({
                status: INVALID_USER,
            });
        }

        if (err) {
            return next(err);
        }

        req.user = user;
        return next();
    })(req, res, next);
}


module.exports = authentication;
