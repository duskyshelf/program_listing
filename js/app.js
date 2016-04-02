var programList = angular.module('ProgramList', ['ngRoute']);

programList.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/:letter/:number', {
    templateUrl: 'views/basicListing.html',
    controller: 'ProgramListController'
  }).
  otherwise({
    redirectTo: '/a/1'
  });
}]);