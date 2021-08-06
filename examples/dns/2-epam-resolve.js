import dns from 'dns';

//All other functions in the dns module connect to an actual DNS server to perform name resolution. They will always use the network to perform DNS queries. These functions do not use the same set of configuration files used by dns.lookup() (e.g. /etc/hosts). Use these functions to always perform DNS queries, bypassing other name-resolution facilities.

dns.lookup('epam.test', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});

dns.resolveAny('epam.test', (err, data) => {
  console.log({ err });
});
