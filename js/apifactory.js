programList.factory('Api', ['$http', function($http) {

  var buildUrl = function(letter, pageNumber) {
    return 'https://ibl.api.bbci.co.uk/ibl/v1/atoz/' + letter + '/programmes?page=' + pageNumber;
  };

  return {
    query: function(letter, pageNumber) {
      return $http({
        url: buildUrl(letter, pageNumber),
        method: 'GET'
      });
    }
  };

}]);