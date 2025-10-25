let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);

let PORT = process.env.PORT || 3000;

// Serve static files from 'public' folder
app.use(express.static('public'));

// When a client connects
io.on('connection', (socket) => {
    console.log('A user connected');
    
    // Listen for 'colorChange' from client
    socket.on('colorChange', (color) => {
        console.log('Received color:', color);
        
        // Send to ALL clients (including sender)
        io.emit('newColor', color);
    });
    
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});