// console.log('home ctrl')

app.controller('HomeCtrl', function($scope, contentFactory) {

	
	$scope.contentArray = [];
	contentFactory.getPosts()
	.then((value) => {
		$scope.posts = value.data

		for (key in $scope.posts) {
			$scope.contentArray.push($scope.posts[key])
		}
		console.log($scope.contentArray)
	})
	// $scope.browseFilter = true;
	// $scope.filterByType = function(type) {
	// 	// browseFilter is variable for all browse
	// 	$scope.browseFilter = type;
	// 	// if (type === 'people')
	// 	// 	return 
	// console.log(type)
	// }
	$scope.isType = function() {

	}

	$scope.determineType = function(type) {
		$scope.isType = type;
		// if (type === 'People') {
		// 	$scope.isType
		// } else if (type === 'Place') {
		// 	return 'Place';
		// } else if (type === 'Thing') {
		// 	return;
		// }
	}

})
