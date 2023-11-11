const express = require('express');
module.exports = function() {
    const app = express();
    require('app/controllers/routes/index.server.routes.js')(app);
    return app;
};