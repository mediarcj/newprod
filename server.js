const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('LAKERS WON!');
});

// app.post('/', (req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end(`Received message: ${req.body.message}`);
// });

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
