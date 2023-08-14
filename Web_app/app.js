const express = require('express');
const app = express();
const config = require('./modules/config');

const port = config.server.port;
const host = config.server.host;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
    // Serve the index.html file located in the "public/pages" directory
    res.sendFile(__dirname + '/public/pages/index.html');
});

// Start the server
app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
