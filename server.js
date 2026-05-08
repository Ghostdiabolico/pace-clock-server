const io = require('socket.io')(process.env.PORT || 3000, {
  cors: { origin: "*" }
});

io.on('connection', (socket) => {
  socket.on('send_reset', () => {
    const newStartTime = Date.now();
    io.emit('receive_reset', newStartTime);
  });
});