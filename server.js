const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 5000;

server.use(middlewares);
server.use(router);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  server.use(jsonServer.defaults({ static: 'client/build' }));
}

server.listen(port);
