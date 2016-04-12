const net = require('net');
const fs = require('fs');
// const superagent = require(superagent-cli);

const server = net.createServer((socket) => {
  socket.on('data', (chunk) => {
    var unique = new Date();
    unique = unique.toISOString();
    console.log('Unique ' + unique);
    console.log('socket ' + socket);
    fs.writeFile(__dirname + '/color.txt', chunk, (err) => {
      if (err) throw err;
      console.log('New file created');
    });
  });
}).listen(3000, () => {
  process.stdout.write('Server up on 3000 :-)');
});
