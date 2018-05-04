const net = require('net');

const server = net.createServer((socket) => {
  const date = new Date();
  let fmt = date.getFullYear();
  if (date.getMonth() < 9) {
    fmt += `-0${date.getMonth() + 1}`;
  } else {
    fmt += `-${date.getMonth()}`;
  }
  if (date.getDate() < 10) {
    fmt += `-0${date.getDate()} `;
  } else {
    fmt += `-${date.getDate()} `;
  }
  if (date.getHours() < 10) {
    fmt += `0${date.getHours()}:`;
  } else {
    fmt += `${date.getHours()}:`;
  }
  if (date.getMinutes() < 10) {
    fmt += `0${date.getMinutes()}`;
  } else {
    fmt += `${date.getMinutes()}`;
  }
  fmt += '\n';
  socket.end(fmt);
});

server.listen(Number(process.argv[2]));
