import express from 'express';
import https from 'https';
import fs from 'fs';

const port = 3000;

const options = {
  key: fs.readFileSync('localhost-key.pem'),
  cert: fs.readFileSync('localhost.pem')
};

const app = express()

app.get('/', (req, res) => {
   res.send('Now using https..');
});

const server = https.createServer(options, app);

server.listen(port, () => {
  console.log("server starting on port : " + port)
});

