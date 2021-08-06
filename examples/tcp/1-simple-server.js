import { createServer } from 'net'


const server = createServer((socket) => {
  console.log('***Client connected***');
  console.dir(socket.address());
  socket.write('🍻')
  socket.on('data', (data) => {
    console.log(`from client: ${data}`);
  });
});


server.listen(2000);
