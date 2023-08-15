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


/*// Configure the routing
app.config(function ($routeProvider, $locationProvider) {
    // Set the hash prefix to an empty string (required for compatibility with some servers)
    $locationProvider.hashPrefix('');

    // Setup the $routeProvider using .when() for each route
    // Add your route configurations here
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'AboutController'
        })
        .when('/data', {
            templateUrl: 'pages/data.html',
            controller: 'DataController'
        })
        .when('/contactUs', {
            templateUrl: 'pages/contactUs.html',
            controller: 'ContactController'
        })
        .when('/animals', {
            templateUrl: 'pages/animals.html',
            controller: 'AnimalsController'
        });
});*/

app.controller('HomeController', ['$scope', function($scope) {

}]);

app.controller('AboutController', ['$scope', function($scope) {

}]);

app.controller('DataController', ['$scope', function($scope) {

}]);

app.controller('ContactController', ['$scope', '$http', function($scope, $http) {
    $scope.contact = {};

    $scope.submitForm = function() {
        $http.post('/api/contact', $scope.contact)
            .then(function(response) {
                // Handle success
                alert('Form submitted successfully!');
            }, function(error) {
                // Handle error
                console.error("Error during form submission:", error);
                alert('An error occurred. Please try again.');
            });
    };
}]);

app.controller('AnimalsController', ['$scope', function($scope) {

}]);