var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	// Router
	$routeProvider.
  when('/', {
    templateUrl: 'views/home.html',
    controller: 'homeController'
  }).
  when('/profile', {
    templateUrl: 'views/profile.html',
    controller: 'profileController'
  }).
  when('/info', {
    templateUrl: 'views/info.html',
    controller: 'infoController'
  }).
  otherwise({
   redirectTo: '/'
  });
}]);

app.controller('homeController', function($scope) {
  $scope.home = "HOME";
});

app.controller('profileController', function($scope) {
  $scope.profile = "Profile";
});

app.controller('infoController', function($scope) {
  $scope.info = "Info";
});
