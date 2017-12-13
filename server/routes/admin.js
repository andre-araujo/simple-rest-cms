const fetch = require('isomorphic-unfetch');

server.get('/admin/*', (req, res) => app.getRequestHandler()(req, res));
server.get('/static/*', (req, res) => app.getRequestHandler()(req, res));
