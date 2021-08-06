import { createServer  } from 'net';
import  {join } from 'path';

const server = createServer((socket) => {
  console.log('connected');
  socket.write('hello from server');
});

server.listen({
  path: join(process.cwd(), 'socket')
});
