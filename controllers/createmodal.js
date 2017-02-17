
app.controller('CreateCtrl', function($scope, contentFactory, authFactory, $location) {

	authFactory.getUserId()
	.then((response) => {
		// console.log(response.displayName)
	$scope.userName = response.displayName
	// $scope.userEmail = response.email
	})

	$scope.createPost = () => {
		let newPost = {
			"superlative" : $scope.superlative,
			"category" : $scope.category,
			"name" : $scope.name,
			"imgUrl" : $scope.imgUrl,
			"counter" : 1,
			"thingType" : $scope.thingType,
			"userName" : $scope.userName,
			"description" : "",
			"hasVoted" : [$scope.userName]
		}
		// console.log("hi")
		contentFactory.createPost(newPost)
		$location.url('/')
	}


})
