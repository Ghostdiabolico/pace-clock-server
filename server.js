const io = require('socket.io')(process.env.PORT || 3000, {
  cors: { origin: "*" }
});

io.on('connection', (socket) => {
  socket.on('send_reset', () => {
    const newStartTime = Date.now();
    io.emit('receive_reset', newStartTime);

io.on('connection', (socket) => {
  // ... (codice offset)

  // Quando riceve il comando toggle_fullscreen
  socket.on('send_fullscreen', () => {
    io.emit('receive_fullscreen');
  });
});
  });
});
