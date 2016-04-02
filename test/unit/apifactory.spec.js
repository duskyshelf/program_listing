describe('factory: Api', function() {

  var api;

  var testData = "test data"

  beforeEach(module('ProgramList'));

  beforeEach(inject(function(Api) {
    api = Api;
  }));

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend
    httpBackend
      .when("GET", "https://ibl.api.bbci.co.uk/ibl/v1/atoz/a/programmes?page=1")
      .respond(
        { info: testData }
      );
    httpBackend
      .when("GET", "views/basicListing.html")
      .respond("");
  }));

  it('responds to query', function() {
    expect(api.query).toBeDefined();
  });

  it('returns data from the api given parameters', function() {
    api.query('a', '1')
      .then(function(response) {
        expect(response.data.info).toEqual(testData)
      })
    httpBackend.flush();
  })





});