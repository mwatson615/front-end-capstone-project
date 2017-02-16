
app.controller('MyPostsCtrl', function($scope, authFactory, $location, contentFactory, $http) {

	authFactory.getUserId()
	.then((response) => {
	$scope.userName = response.displayName
	$scope.userEmail = response.email
	})

	$scope.myPostArray = []
	$scope.editMode = false

	contentFactory.getMyPosts()
	.then((response) => {
		$scope.myPosts = response.data
		for (key in $scope.myPosts) {
			if ($scope.myPosts[key].userName === $scope.userName) {
				$scope.myPostArray.push($scope.myPosts[key])
			}
		}
	})

	$scope.updateName = (post) => {
		// $scope.editMode = false;
		for (key in $scope.myPosts) {
			if ($scope.myPosts[key] === post) {
				postId = key
			}
		}
			$http.put(`https://superlative-ac493.firebaseio.com/posts/${postId}/category.json`, JSON.stringify(post.category))
		}
})
