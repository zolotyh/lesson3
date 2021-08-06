import dgram from 'dgram';

const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
  console.dir({ msg, rinfo });
});

server.bind(3000);
