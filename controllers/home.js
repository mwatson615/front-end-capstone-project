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
	$scope.browseFilter = true;
	$scope.filterByType = function(type) {
		// browseFilter is variable for all browse
		$scope.browseFilter = type;
		// if (type === 'people')
		// 	return 
	console.log(type)
	}

	$scope.determineType = function(type) {
		if (type === 'People') {
			return true;
		} else if (type === 'Place') {
			return true;
		} else if (type === 'Thing') {
			return true;
		}
	}

})
