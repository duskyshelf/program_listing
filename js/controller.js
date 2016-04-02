programList.controller('ProgramListController', ['Api', function(Api) {

  var self = this;
  self.listing = [];

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

  self.parseImageUrl = function(url) {
    return url.replace("{recipe}", "406x228")
  }

  self.apiCall = function(letter, pageNum) {
    Api.query(letter, pageNum)
      .then(function(response) {
        self.listing = response.data.atoz_programmes.elements;
      })
  };

  self.apiCall("a", "1");



}]);