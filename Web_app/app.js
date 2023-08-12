const express = require('express');
const app = express();
const config = require('./modules/config');

const port = config.server.port;
const host = config.server.host;

app.set('view engine', 'hbs');
app.set('views', __dirname + '/public/pages');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
    // Render the index view (assuming your index.html is converted to index.hbs)
    res.render('index');
});

// Set up other routes and middleware as needed...
// For example, you can add routes like this:
/*app.get('/about', (req, res) => {
    // Render the about view (assuming you have an "about.hbs" file)
    res.render('about');
});*/

// Start the server
app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
