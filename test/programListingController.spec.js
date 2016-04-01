describe('ProgramListingsController', function() {

  beforeEach(module('ProgramListings'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ProgramListingsController');
  }));

  it('initialises with default filter settings', function() {
    expect(ctrl).toBeDefined();
  });

});