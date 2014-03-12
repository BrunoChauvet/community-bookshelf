app.service('UsersService', ['$rootScope', '$firebase', function($rootScope, $firebase) {
  var usersRef = $firebase(fb.child('users'));

  this.updateLocation = function(value) {
    usersRef.$child($rootScope.user.id).$update({location : value});
  };

}]);
