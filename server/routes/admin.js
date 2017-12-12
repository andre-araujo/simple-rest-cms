server.get('*', (req, res) => app.getRequestHandler()(req, res));
