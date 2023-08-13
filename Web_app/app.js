const express = require('express');
const app = express();
const config = require('./modules/config');

const port = config.server.port;
const host = config.server.host;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
    res.render('index', {
        angularJSCDN: config.angularJSCDN, // Pass the AngularJS CDN URL to the template
    });
    // Serve the main HTML file for your AngularJS app
    res.sendFile(__dirname + '/public/pages/index.html');
});

// Start the server
app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});

// Define the AngularJS module and controller
const angularApp = angular.module('myApp', []);

angularApp.controller('MainController', function($scope) {
    $scope.appName = 'My App';
    $scope.currentDate = new Date().toLocaleDateString();
});
