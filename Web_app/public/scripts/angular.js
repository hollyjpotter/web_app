// Create the AngularJS module and inject 'ngRoute' as a dependency
let app = angular.module('myApp', ['ngRoute']);

angular.module('myApp', [])
    .controller('AppController', function($scope) {
        // Set the applicationName from the JavaScript variable
        $scope.applicationName = applicationName;

        // Set the currentDate in the scope
        $scope.currentDate = new Date().toLocaleDateString();
    });

// Configure the routing
app.config(function ($routeProvider, $locationProvider) {
    // Set the hash prefix to an empty string (required for compatibility with some servers)
    $locationProvider.hashPrefix('');

    // Setup the $routeProvider using .when() for each route
    // Add your route configurations here
});
