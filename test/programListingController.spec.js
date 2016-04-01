describe('ProgramListingsController', function() {

  beforeEach(module('ProgramListings'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ProgramListingsController');
  }));

  it('initialises with the program listings controller', function() {
    expect(ctrl).toBeDefined();
  });

  describe('when calling the api', function() {

    var programs = [
      {
        title: "Abadas",
        images: { standard: "http://ichef.bbci.co.uk/images/ic/192x108/p02c72z7.jpg" }
      },
      {
        title: "a b c",
        images: { standard: "http://ichef.bbci.co.uk/images/ic/192x108/p02g3r3r.jpg" }
      }
    ];

    it('displays search results', function() {
      expect(ctrl.apiCall.results).toEqual(programs);
    });

  });

});