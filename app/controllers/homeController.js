contactApp.controller('homeController', function($scope, contactService) {

  $scope.loading = true;

  $scope.contacts = {};

  $scope.open = false;

  $scope.openContact = function () {
    if ( $scope.open == false ) {
      $scope.open = true;
    } else {
      $scope.open = false;
    }
  };

  $scope.deleteContact = function (id) {

    contactService.deleteById(id).finally(function () {
      $scope.loadContacts(); // reload contacts
    });

  };

  $scope.loadContacts = function () {
    contactService.allContacts().then(function (contacts) {
      $scope.contacts = contacts;
    }).finally(function () {
      $scope.loading = false;
    });
  };

  $scope.loadContacts(); // load contacts every time

});
