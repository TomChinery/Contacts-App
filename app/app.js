var contactApp = angular.module('contactApp', ['ngRoute', 'ngAnimate', 'contactService', 'angular-spinkit', 'loading']);

contactApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/views/home.html',
    controller: 'homeController'
  });
}]);
