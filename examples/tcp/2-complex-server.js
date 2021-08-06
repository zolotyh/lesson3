import {createServer} from 'net';

const connection = socket => {

  console.dir({
    localAddress: socket.localAddress,
    localPort: socket.localPort,
    remoteAddress: socket.remoteAddress,
    remoteFamily: socket.remoteFamily,
    remotePort: socket.remotePort,
    bufferSize: socket.bufferSize,
  });

  socket.write('💗');

  socket.on('data', data => {
    console.log('Event: 📨', data);
    console.log('Data:', data.toString());
  });

  socket.on('end', () => {
    console.log('Event: 🏁');
    console.dir({
      bytesRead: socket.bytesRead,
      bytesWritten: socket.bytesWritten,
    });
  });

  socket.on('error', err => {
    console.log('Event: 💩');
    console.log(err);
  });

  socket.on('timeout', () => {
    console.log('Event: ⌛');
  });

};

const server = createServer();

server.on('connection', connection);

server.listen(2000);
