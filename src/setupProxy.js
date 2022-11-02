const { createProxyMiddleware } = require("http-proxy-middleware");

const users = {
    target: "https://social-network.samuraijs.com",
    changeOrigin: true,
};
const profile = {
    target: "https://social-network.samuraijs.com",
    changeOrigin: true,
};

module.exports = function (app) {
    app.use("/api/1.0/users", createProxyMiddleware(users));
    app.use("/api/1.0/profile", createProxyMiddleware(profile));

};