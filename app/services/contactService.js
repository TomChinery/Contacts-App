var contactService = angular.module('contactService', []);

contactService.factory('contactService', function ($http) {
  var contacts = {
    allContacts: allContacts,
    deleteById: deleteById,
    getById: getById,
    update: update,
    add: add,
  };

  function allContacts() {
    return $http.get('http://tomchinery.com:3000/contacts').then( handleSuccess, handleError );
  };

  function getById(id) {
    return $http.get( 'http://tomchinery.com:3000/contacts/' + id ).then( handleSuccess, handleError );
  }

  function deleteById(id) {
    return $http.delete( 'http://tomchinery.com:3000/contacts/' + id ).then( handleStatus, handleError );
  };

  function update( contact ) {
    return $http.put('http://tomchinery.com:3000/contacts/' + contact.id, contact ).then( handleStatus, handleError );
  };

  function add( contact ) {
    return $http.post('http://tomchinery.com:3000/contacts/', contact ).then( handleStatus, handleError );
  }

  // private methods
  function handleSuccess( response ) {

    return response.data;

  }

  function handleError( response ) {

    return response.message;

  }

  function handleStatus( response ) {

    return response.status;

  }

  // return contact api
  return contacts;
});
