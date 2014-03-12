app.controller('SettingsCtrl', ['$scope', '$rootScope', '$http', 'UsersService', function($scope, $rootScope, $http, UsersService) {

  $scope.setLocation = function(location) {
    UsersService.updateLocation('North Sydney')
  }

}]);