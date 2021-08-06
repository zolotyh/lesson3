import http from 'http';

const TIME_TO_SLEEP = 10 * 1000;

const sleep = (seconds) => {
  const waitTill = new Date(new Date().getTime() + seconds);
  while(waitTill > new Date()){}
}

http.createServer((_, res) => {
  console.log('request started');
  sleep(TIME_TO_SLEEP);
  res.end('hello after blocking');
}).listen(8000);
