const express = require('express');
const app = express();
const config = require('./modules/config');
const handlebars = require('express-handlebars');

const port = config.server.port;
const host = config.server.host;

// Use Handlebars as the template engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
    // Serve the main HTML file located in ./public/pages/
    res.sendFile('index.html', { root: __dirname + '/public/pages' });
});

// Start the server
app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
