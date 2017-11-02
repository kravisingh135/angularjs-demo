var myApp = angular.module("myApp", ["ngRoute"]);

 
myApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/web-applications", {
        templateUrl : 'web-applications.html',
    })
    .when("/big-data/", {
        templateUrl : 'big-data.html',
		
    })
    .when("/business-apps", {
        templateUrl : "business-apps.html"
    });
});