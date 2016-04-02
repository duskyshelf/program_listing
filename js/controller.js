programList.controller('ProgramListController', ['Api', '$routeParams', function(Api, $routeParams) {

  var self = this;
  self.letterList = [];
  self.listing = [];
  self.letter = $routeParams.letter;
  self.pageNum = $routeParams.number;

  var alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  alphabetArray.push("0-9");

  self.letterList = alphabetArray.map( function(letter) {
    return {
      icon: letter,
      id: "filter-" + letter,
      url: "/#/" + letter.toLowerCase() + "/1"
    }
  });

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