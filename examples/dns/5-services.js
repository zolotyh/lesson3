import dns from 'dns';

const servers = dns.getServers();
console.log({ servers });
