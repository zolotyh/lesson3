import dgram from 'dgram';

const server = dgram.createSocket('udp4');

let counter = 1;

server.on('message', (msg) => {
  counter+=1;
  console.log(`number of message: ${counter},\n message ${msg}`);
});

server.bind(3000);
