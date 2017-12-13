server.get('/admin*', (req, res) => app.getRequestHandler()(req, res));
server.get('/static/*', (req, res) => app.getRequestHandler()(req, res));
server.get('/_next/*', (req, res) => app.getRequestHandler()(req, res));
