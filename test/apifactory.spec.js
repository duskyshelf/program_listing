describe('factory: Api', function() {

  var api;

  beforeEach(module('ProgramList'));

  beforeEach(inject(function(Api) {
    api = Api;
  }));

  it('responds to query', function() {
    expect(api.query).toBeDefined();
  });

  

});