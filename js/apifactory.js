programList.factory('Api', ['$http', function($http) {

  return {
    query: function(letter, pageNumber) {
      return $http({
        url: "https://ibl.api.bbci.co.uk/ibl/v1/atoz/" + letter + "/programmes?page=" + pageNumber,
        method: 'GET'
      });
    }
  }

}]);