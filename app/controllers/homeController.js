contactApp.controller('homeController', function($scope, contactService) {

  $scope.loading = true;

  $scope.contacts = {};

  $scope.open = false;

  $scope.showUpdateModal = false;

  $scope.currentContact = {};

  $scope.visibleUpdateModal = false;

  $scope.visibleAddModal = false;

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

  $scope.updateContact = function () {
    contactService.update( $scope.currentContact ).finally(function () {
      $scope.hideModal();
      $scope.loadContacts(); // reload contacts
    });
  };

  $scope.addContact = function () {

  };

  $scope.addModal = function () {
    $scope.visibleAddModal = true;
  };

  $scope.updateModal = function ( id ) {
    $scope.visibleUpdateModal = true;
    contactService.getById( id ).then(function (contact) {
      $scope.currentContact = contact;
    });
  };

  $scope.hideModal = function () {
    $scope.visibleUpdateModal = false;
    $scope.visibleAddModal = false;
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
