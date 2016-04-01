describe('factory: Api', function() {

  var api;

  beforeEach(module('ProgramListings'));

  beforeEach(inject(function(Api) {
    api = Api;
  }));

  it('responds to query', function() {
    expect(api.query).toBeDefined();
  });

});