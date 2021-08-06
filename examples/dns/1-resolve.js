import dns from 'dns';

dns.resolve('domain with error', (err, data) => {
  if (err) {
    if (err.code === 'ECONNREFUSED') {
      console.log('No internet connection');
    } else {
      console.log('Web is dead');
    }
  }
  console.log({ data });
});

dns.resolveAny('google.com', (err, data) => {
  if (err) throw err;
  console.log({ data });
});
