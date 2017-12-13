const passport = require('passport');
const { NOT_FOUND } = require('../constants');

const jwtMiddleware = require('../middlewares/passportJWT.middleware');
const authentication = require('../middlewares/authentication.middleware');

passport.use(jwtMiddleware);

server.use(passport.initialize());

server.get('/api/account/me', authentication, require('../controllers/account.controller'));
server.post('/api/account/singup', require('../controllers/singup.controller'));
server.post('/api/account/token', require('../controllers/token.controller'));

server.all('*', (req, res) => {
    res.status(404).send({
        status: NOT_FOUND,
    });
});
