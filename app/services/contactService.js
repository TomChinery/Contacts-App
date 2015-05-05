var contactService = angular.module('contactService', []);

contactService.factory('contactService', function ($http) {
  var contacts = {
    allContacts: allContacts,
    deleteById: deleteById,
  };

  function allContacts() {
    var request = $http.get('http://tomchinery.com:3000/contacts');

    return request.then( handleSuccess, handleError );
  };

  function deleteById(id) {

    return $http.delete( 'http://tomchinery.com:3000/contacts/' + id ).then( handleStatus, handleError );

  };

  // private methods
  function handleSuccess( response ) {

    return response.data;

  }

  function handleError( response ) {

    return response.message;

  }

  function handleStatus( response ) {

    response.status;

  }

  // return contact api
  return contacts;
});
