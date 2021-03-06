programList.controller('ProgramListController', ['Api', '$routeParams', function(Api, $routeParams) {

  var self = this;
  self.programs = [];
  self.letter = $routeParams.letter;
  self.pageNum = $routeParams.number;
  self.letterList = [];
  self.paginationList = [];


  // generate alphabet filter link data
  var alphabetArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  alphabetArray.push('0-9');

  self.letterList = alphabetArray.map( function(letter) {
    return {
      icon: letter,
      id: 'filter-' + letter,
      uri: "/#/" + letter.toLowerCase() + "/1"
    };
  });


  // call api with relevant parameters
  self.apiCall = function(letter, pageNum) {
    Api.query(letter, pageNum)
      .then(function(response) {
        self.data = response.data.atoz_programmes;
        self.programs = response.data.atoz_programmes.elements;
        populatePaginationList(self.data);
      });
  };


  // generate pagination link data
  self.pageCount = function(data) {
    return Math.ceil(data.count / 20);
  };

  var populatePaginationList = function(data) {
    for (var i=1; i <= self.pageCount(data); i++) {
      self.paginationList.push({
        number: i,
        id: 'page-' + i,
        uri: "/#/" + $routeParams.letter + "/" + i
      });
    }
  };


  // modify returned image urls to include sizing information
  self.parseImageUrl = function(url) {
    // possible sizes 192x108, 406x228, 560x315
    return url.replace('{recipe}', '192x108');
  };

  // call to populate page on document ready
  angular.element(document).ready(function () {
    self.apiCall(self.letter, self.pageNum);
  });

}]);