const express = require('express');
const helmet = require('helmet');
const app = express();


app.use(helmet({
  frameguard: {
    action: 'deny'
  },
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
    }
  },
  noCache: true,
  hsts: {
    maxAge: 90 * 24 * 60 * 60,
    force: true
  }
}));








































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 60000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
