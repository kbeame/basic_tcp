const net = require('net');
const fs = require('fs');
// const superagent = require(superagent-cli);

const server = net.createServer((socket) => {
  socket.on('data', (chunk) => {
    var unique = new Date();
    unique = unique.toISOString();
    console.log('Unique ' + unique);
    console.log('socket ' + socket);
    fs.writeFile(__dirname + '/newfiles/' + unique + '.txt', chunk, (err) => {
      if (err) throw err;
      console.log('New file created');
    });
  });
}).listen(3000, () => {
  process.stdout.write('<3 Server up on 3000 :-)');
});

module.export = server;
