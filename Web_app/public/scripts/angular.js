// public/scripts/angular.js
// Create the AngularJS module and inject 'ngRoute' as a dependency

var app = angular.module('myApp', ["ngRoute"]);

// public/scripts/angular.js
app.controller('MainController', function($scope, $http) {
    // Fetch configuration data from the server
    $http.get('/config')
        .then(function(response) {
            $scope.applicationName = response.data.applicationName;
            $scope.currentDate = new Date().toLocaleDateString();
        })
        .catch(function(error) {
            console.error('Error fetching configuration:', error);
            // Handle the error
        });
});


// Configure the routing
app.config(function ($routeProvider, $locationProvider) {
    // Set the hash prefix to an empty string (required for compatibility with some servers)
    $locationProvider.hashPrefix('');

    // Setup the $routeProvider using .when() for each route
    // Add your route configurations here
    $routeProvider.when('/about', {
        templateUrl : './views/layouts/about.html', // Use the about.html template
        controller : 'AboutController' // Optional: Define a controller if needed
    });
});
