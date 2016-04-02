programList.controller('ProgramListController', ['Api', '$routeParams', function(Api, $routeParams) {

  var self = this;
  self.listing = [];
  self.letter = $routeParams.letter;
  self.pageNum = $routeParams.number;

  self.alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

  self.apiCall = function(letter, pageNum) {
    Api.query(letter, pageNum)
      .then(function(response) {
        self.data = response.data.atoz_programmes;
        self.listing = response.data.atoz_programmes.elements;
      })
  };

  self.parseImageUrl = function(url) {
    // possible sizes 192x108, 406x228, 560x315
    return url.replace("{recipe}", "192x108");
  }

  self.pageCount = function(data) {
    return Math.ceil(data.count / 20);
  }



  self.apiCall(self.letter, self.pageNum);
}]);