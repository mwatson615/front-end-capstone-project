
app.controller('CreateCtrl', function($scope, contentFactory, authFactory, $location) {

	authFactory.getUserId()
	.then((response) => {
	$scope.userName = response.displayName
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
		contentFactory.createPost(newPost)
		.then((results) => {
		$location.url("/")
		})
	}


})
