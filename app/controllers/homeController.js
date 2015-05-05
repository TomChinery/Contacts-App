contactApp.controller('homeController', function($scope, contactService) {

  $scope.loading = true;

  $scope.contacts = {};

  $scope.open = false;

  $scope.showUpdateModal = false;

  $scope.openContact = function () {
    if ( $scope.open == false ) {
      $scope.open = true;
    } else {
      $scope.open = false;
    }
  };

  $scope.deleteContact = function (id) {

    var youSure = confirm('Are you sure you want to delete this contact?');

    if ( youSure ) {
      contactService.deleteById(id).finally(function () {
        $scope.loadContacts(); // reload contacts
      });
    }

  };

  $scope.updateModal = function () {
    $scope.showUpdateModal = true;
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
