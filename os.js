import os from 'node:os'

console.log('CPUS ', os.cpus().length);
console.log('Total memory ', os.totalmem() / (1024 ** 3), 'gb');
console.log('free memory ', os.freemem() / (1024 ** 3), 'gb');
console.log('uptime ', (os.uptime() / (60 ** 2 )) / 24, 'days');
console.log('hostname', os.hostname());
console.log('user', os.userInfo());
console.log('machine ', os.machine());

