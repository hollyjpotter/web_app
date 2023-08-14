const express = require('express');
const app = express();
const config = require('./modules/config');

const port = config.server.port;
const host = config.server.host;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define an API route to fetch the configuration data
app.get('/config', (req, res) => {
    // Send the application name from the config file as a response
    res.json({ applicationName: config.applicationName });
});

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
    // Serve the index.html file located in the "public/pages" directory
    res.sendFile(__dirname + '/public/pages/index.html');
});

// Start the server
app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
