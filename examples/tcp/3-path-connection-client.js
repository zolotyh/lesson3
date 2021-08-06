import {Socket } from 'net';
import path from 'path';

const socket = new Socket();

socket.connect({
  path:path.join(process.cwd(), 'socket'),
})

socket.on('connect', () => socket.write('messsage from client'));
socket.on('connect', () => setInterval(() => socket.write('test'), 500));

socket.on('data', console.dir)

