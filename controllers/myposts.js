// console.log('my posts ctrl')

app.controller('MyPostsCtrl', function($scope, authFactory, $location, contentFactory) {


	authFactory.getUserId()
	.then((response) => {
	$scope.userName = response.displayName
	$scope.userEmail = response.email
	$scope.showUserName = 'Hello ' + response.displayName
	})

	// let postUser = $scope.userName;
	$scope.myPostArray = []

	contentFactory.getMyPosts()
	.then((response) => {
		$scope.myPosts = response.data
		console.log($scope.myPosts)
		for (key in $scope.myPosts) {
			console.log($scope.myPosts[key].userName)
			console.log($scope.userName)
			if ($scope.myPosts[key].userName === $scope.userName) {
				$scope.myPostArray.push($scope.myPosts[key])
			console.log($scope.myPostArray)
			}
		}

	})
})
