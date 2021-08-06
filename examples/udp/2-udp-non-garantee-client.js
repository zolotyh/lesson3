
import dgram from 'dgram';

const client = dgram.createSocket('udp4');

let counter = 0;

setInterval(() => {

  counter+=1;

  client.send(
    counter.toString(),
    3000,
    'localhost',
    () => { console.log('sended');}
  );

  console.log(counter);

}, 500)

