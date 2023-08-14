// /routes/routes.js

angular.module('myApp').config(['$routeProvider', function ($routeProvider) {
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
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
