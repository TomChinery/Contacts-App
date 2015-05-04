var contactService = angular.module('contactService', []);

contactService.factory('contactService', function ($http) {
  var contacts = {
    allContacts: allContacts,
  };

  function allContacts() {
    var request = $http.get('http://jsonplaceholder.typicode.com/users');

    return request.then( handleSuccess, handleError );
  };


  // private methods
  function handleSuccess( response ) {

    return response.data;

  }

  function handleError( response ) {

    return response.message;

  }

  // return contact api
  return contacts;
});
