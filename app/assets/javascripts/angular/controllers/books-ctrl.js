app.controller('BooksCtrl', ['$scope', '$rootScope', '$http', 'BooksService', function($scope, $rootScope, $http, BooksService) {
  $rootScope.$watch('authenticated', function (newValue, oldValue) {
  	if(newValue){
  		$scope.myBooks = BooksService.list();
	  }
  }, true);

  $scope.page = 1;

  $scope.searchBook = function() {
    $scope.search = true;
  }

  $scope.submitSearch = function() {
    $scope.page = 1;
    $scope.fetchBooks();
  }

  $scope.nextPage = function() {
    $scope.page = $scope.page + 1;
    $scope.fetchBooks();
  }

  $scope.previousPage = function() {
    $scope.page = $scope.page - 1;
    $scope.fetchBooks();
  }

  $scope.add = function(book) {
    BooksService.add(book);
  }

  $scope.cancel = function() {
    $scope.search = false;
  }

  $scope.fetchBooks = function() {
    $http({ method: 'GET', url: '/books/search?q=' + $scope.q + '&p=' + $scope.page })
      .success(function (data, status, headers, config) {
        var myBooksRef = fb.child('books').child($rootScope.user.id);
        myBooksRef.on('value', function(snapshot) {
          angular.forEach(data, function(availableBook) {
            snapshot.forEach(function(childSnapshot) {
              var myBook = childSnapshot.val();
              if(myBook.item.id == availableBook.item.id) {
                availableBook['owned'] = true;
              }
            });
          });
          
          $scope.availableBooks = data;
        });
      });
  }
}]);