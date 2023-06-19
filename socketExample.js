
const http = require('http');
const socketIO = require('socket.io');

const server = http.createServer();
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('A user connected.');

  // Emitting an event to the client
  socket.emit('greeting', 'Hello from server!');

  // Listening for an event from the client
  socket.on('clientEvent', (data) => {
    console.log('Received data from client:', data);
  });

  // Disconnect event
  socket.on('disconnect', () => {
    console.log('A user disconnected.');
  });
});

server.listen(3000, () => {
  console.log('Socket server running on port 3000.');
});
