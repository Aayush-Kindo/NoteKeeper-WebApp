const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://notekeeper--backend.herokuapp.com',
      changeOrigin: true,
    })
  );
};