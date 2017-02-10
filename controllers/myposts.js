// console.log('my posts ctrl')

app.controller('MyPostsCtrl', function($scope, authFactory, $location, contentFactory) {


	authFactory.getUserId()
	.then((response) => {
	$scope.userName = response.displayName
	$scope.userEmail = response.email
	})

	$scope.myPostArray = []

	contentFactory.getMyPosts()
	.then((response) => {
		$scope.myPosts = response.data
		for (key in $scope.myPosts) {
			if ($scope.myPosts[key].userName === $scope.userName) {
				$scope.myPostArray.push($scope.myPosts[key])
			}
		}

	})
})
