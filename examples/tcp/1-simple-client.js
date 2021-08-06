import  { Socket} from 'net';

const socket = new Socket();

socket.on('data', (data) => {
  console.log(`from server > ${data}`);
  //socket.unref();
})

socket.connect({
  port: 2000,
  family: 4,
}, () => {
  console.log('client connected to server');
  socket.write('🍷');
})

