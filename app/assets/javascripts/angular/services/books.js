app.service('BooksService', ['$rootScope', '$firebase', function($rootScope, $firebase) {
  var booksRef = $firebase(fb.child('books'));

  this.list = function() {
    return booksRef.$child($rootScope.user.id);
  };

  this.add = function(book) {
    booksRef.$child($rootScope.user.id).$add(book);
  };

  this.remove = function(book) {
    booksRef.$child($rootScope.user.id).$child(book.$id).$remove();
  };

}]);
