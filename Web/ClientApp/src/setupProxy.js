const { createProxyMiddleware } = require('http-proxy-middleware');
const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT
    ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`
    : env.ASPNETCORE_URLS
        ? env.ASPNETCORE_URLS.split(';')[0]
        : 'http://localhost:30906';

const context = [
    "/api/Games",
];

const onError = (err, req, resp, target) => {
    console.error(`${err.message}`);
};

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: target,
        onError: onError,
        secure: false,
        headers: {
            Connection: 'Keep-Alive',
        },
        pathRewrite: {
            [`^/api/Games`]: '',
        },
    });

    app.use(appProxy);
};
