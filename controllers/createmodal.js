console.log("create modal")

app.controller('CreateCtrl', function($scope, contentFactory) {

	$scope.createPost = () => {
		let newPost = {
			"superlative" : $scope.superlative,
			"category" : $scope.category,
			"name" : $scope.name,
			"imgUrl" : $scope.imgUrl,
			"counter" : 1,
			"thingType" : $scope.thingType
			// "userName" :
		}
		// console.log("hi")
		contentFactory.createPost(newPost)
	}


})
