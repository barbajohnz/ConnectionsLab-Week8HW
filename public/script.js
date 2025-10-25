// Connect to Socket.io server
let socket = io();

// When connected
socket.on('connect', () => {
    console.log('Connected to server!');
});

// Function to send color change to server
function changeColor(color) {
    console.log('Sending color to server:', color);
    // CLIENT EMIT - send to server
    socket.emit('colorChange', color);
}

// Listen for color changes from server
socket.on('newColor', (color) => {
    console.log('Received new color from server:', color);
    // Change the background color
    document.body.style.backgroundColor = color;
});