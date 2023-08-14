// Create the AngularJS module and inject 'ngRoute' as a dependency
let app = angular.module('spa', ['ngRoute']);

// Create constants for the HTML templates
const htmlHome = '<h2>Home</h2><p>This is the <page>Home</page> Page where you can add your home page content.</p>';
const htmlAbout = '<h2>About</h2><p>This is the About Page where you can add information about your company.</p>';
const htmlServices = '<h2>Services</h2><p>This is the Services Page where you can list your services.</p>';
const htmlProjects = '<h2>Projects</h2><p>This is the Projects Page where you can showcase your projects.</p>';

// Configure the routing
app.config(function($routeProvider, $locationProvider) {
    // Set the hash prefix to an empty string (required for compatibility with some servers)
    $locationProvider.hashPrefix('');

    // Setup the $routeProvider using .when() for each route
    $routeProvider
        .when('/', {
            template: htmlHome
        })
        .when('/about', {
            template: htmlAbout
        })
        .when('/services', {
            template: htmlServices
        })
        .when('/projects', {
            template: htmlProjects
        })
        .otherwise({
            redirectTo: '/'
        });
});