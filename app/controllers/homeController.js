contactApp.controller('homeController', function($scope, contactService) {

  $scope.loading = true;

  $scope.contacts = {};

  contactService.allContacts().then(function (contacts) {
    $scope.contacts = contacts;
  }).finally(function () {
    $scope.loading = false;
  });

});
