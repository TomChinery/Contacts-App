describe('contactServiceTest', function() {

  beforeEach(module('contactService'));

  beforeEach( inject( function(_contactService_) {
      contactService = _contactService_;
  }));

  describe('all contacts', function () {
    it('should have allContacts defined', function () {
      expect( contactService.allContacts() ).toBeDefined();
    });

    it('should return 10 contacts', function () {
      contactService.allContacts().then( function (contactArr) {
        expect( contactArr.length ).toBe(10);
      });
    });
  });

  describe('delete contact by id', function () { // @TODO implement HttpBackend for unit tests


  });


});
