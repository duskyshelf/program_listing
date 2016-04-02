var programList = angular.module('ProgramList', ['ngRoute']);

programList.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'views/basicListing.html',
    controller: 'ProgramListController'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);