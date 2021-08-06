import { createServer } from 'net'

createServer((...args) => console.dir(args)).listen(2000);
