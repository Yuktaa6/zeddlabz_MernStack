

const http = require('http');
const socketIO = require('socket.io');

const server = http.createServer();
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('A user connected.');

  // Handle socket events here

  socket.on('disconnect', () => {
    console.log('A user disconnected.');
  });
});

server.listen(3000, () => {
  console.log('Socket server running on port 3000.');
});
