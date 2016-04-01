programListings.controller('ProgramListingsController', [function() {

  var self = this;
  self.hello = "TEST";

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

  self.apiCall = { results: programs }

}]);