const http = require('http');
const userIP = require('user-ip');

http.createServer(function (req, res) {
  const ip = userIP(req);
  res.end(ip);
}).listen(3000);