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


  self.apiCall = function(letter, pageNum) {
    Api.query(letter, pageNum)
      .then(function(response) {
        self.data = response.data.atoz_programmes;
        self.listing = response.data.atoz_programmes.elements;
      })
  };

  self.parseImageUrl = function(url) {
    return url.replace("{recipe}", "406x228");
  }

  self.pageCount = function(data) {
    return Math.ceil(data.count / 20);
  }



  self.apiCall("a", "1");
}]);