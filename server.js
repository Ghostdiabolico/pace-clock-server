const io = require('socket.io')(process.env.PORT || 3000, {
  cors: { origin: "*" }
});

io.on('connection', (socket) => {
  console.log('Dispositivo connesso');

  // Gestione Reset
  socket.on('send_reset', () => {
    const newStartTime = Date.now();
    io.emit('receive_reset', newStartTime);
  });

  // Gestione Fullscreen (Questo permette al telefono di comandare Vivi)
  socket.on('send_fullscreen', () => {
    io.emit('receive_fullscreen');
  });
});
