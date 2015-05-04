var contactApp = angular.module('contactApp', ['ngRoute', 'ngAnimate', 'contactService', 'angular-spinkit']);

contactApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/views/home.html',
    controller: 'homeController'
  });
}]);
