// console.log('home ctrl')

app.controller('HomeCtrl', function($scope, contentFactory) {

	// $scope.contentArray = [];
	contentFactory.getPosts()
	.then((value) => {
		$scope.posts = value.data
		console.log($scope.posts)
	})

})
