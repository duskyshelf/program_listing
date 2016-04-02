describe('ProgramListController', function() {

  beforeEach(module('ProgramList'));
  // beforeEach(module('my.templates'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ProgramListController');
  }));

  it('initialises with the program listings controller', function() {
    expect(ctrl).toBeDefined();
  });

  it('builds an renderable image url from the return data', function() {
    url = "http://ichef.bbci.co.uk/images/ic/{recipe}/p02c72z7.jpg"
    parsedUrl = "http://ichef.bbci.co.uk/images/ic/406x228/p02c72z7.jpg"
    expect(ctrl.parseImageUrl(url)).toEqual(parsedUrl)
  })

  it('calculates a total of 1 page for 20 items at 20 items per page', function(){
    var data = { count: 20, per_page: 20 }
    expect(ctrl.pageCount(data)).toEqual(1)
  })

  it('calculates a total of 2 pages for 30 items at 20 items per page', function(){
    var data = { count: 30, per_page: 20 }
    expect(ctrl.pageCount(data)).toEqual(2)
  })

  // describe('when calling the api', function() {
  //
  //     var programs = [
  //       {
  //         title: "Abadas",
  //         images: { standard: "http://ichef.bbci.co.uk/images/ic/192x108/p02c72z7.jpg" }
  //       },
  //       {
  //         title: "a b c",
  //         images: { standard: "http://ichef.bbci.co.uk/images/ic/192x108/p02g3r3r.jpg" }
  //       }
  //     ];
  //
  //     beforeEach(inject(function($httpBackend) {
  //       httpBackend = $httpBackend
  //       httpBackend
  //       .expectGET("https://ibl.api.bbci.co.uk/ibl/v1/atoz/a/programmes?page=1")
  //       .respond(
  //         { data: { atoz_programmes: { elements: programs }}}
  //       );
  //     }));
  //
  //
  //
  //   it('displays search results', function() {
  //     ctrl.apiCall("a", "1")
  //       .then(function(response) {
  //         expect(ctrl.listing).toEqual(programs);
  //       })
  //     httpBackend.flush();
  //   });
  //
  // });

});