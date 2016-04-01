var programListings = angular.module('ProgramListings', ['ngRoute']);

programListings.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'views/basicListing.html',
    controller: 'ProgramListingsController'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);