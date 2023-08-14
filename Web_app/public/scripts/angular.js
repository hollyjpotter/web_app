// public/scripts/angular.js
// Create the AngularJS module and inject 'ngRoute' as a dependency

var app = angular.module('myApp', []);

// Define the AngularJS controller
app.controller('MainController', function($scope, $http) {
    // Make an API request to fetch the application name
    $http.get('/config').then(function(response) {
        // Set the application name from the API response
        $scope.applicationName = response.data.applicationName;
        console.log(applicationName);
    });
    // Set the current date in the scope
    $scope.currentDate = new Date().toLocaleDateString();
});

// // Configure the routing
// app.config(function ($routeProvider, $locationProvider) {
//     // Set the hash prefix to an empty string (required for compatibility with some servers)
//     $locationProvider.hashPrefix('');
//
//     // Setup the $routeProvider using .when() for each route
//     // Add your route configurations here
// });
