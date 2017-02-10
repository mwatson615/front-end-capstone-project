// console.log('home ctrl')

app.controller('HomeCtrl', function($scope, contentFactory, authFactory) {

	$scope.login = () => {
		authFactory.login($scope.logEmail, $scope.logPassword)
		.then((response) => {
		})
		.then(function() {
			// $scope.getUserInfo();
		})
	}
	$scope.register = () => {
		authFactory.register($scope.regEmail, $scope.regPassword)
		.then((response) => {
			// $scope.userName = response.displayName
		})
		.then((value) => {
			firebase.auth().currentUser.updateProfile({
				displayName: $scope.regUserName
			})
			.then(function() {
				$scope.getUserInfo()
			})
		})
	}
	// $scope.getUserInfo = () => {
	authFactory.getUserId()
	.then((response) => {
		// console.log(response)
		$scope.userName = "Hello " + response.displayName
		})
	// }
// $scope $apply check out for digesting

	$scope.logout = () => {
		authFactory
		.logout()
		.then((response) => {
		})
		.then(function() {
			$scope.userName = ''
		})
	}

	$scope.contentArray = [];
	contentFactory.getPosts()
	.then((value) => {
		$scope.posts = value.data

		for (key in $scope.posts) {
			$scope.contentArray.push($scope.posts[key])
		}
		// console.log($scope.posts)
	})
	// $scope.browseFilter = true;
	// $scope.filterByType = function(type) {
	// 	// browseFilter is variable for all browse
	// 	$scope.browseFilter = type;
	// 	// if (type === 'people')
	// 	// 	return
	// console.log(type)
	// }
	// $scope.isType = function() {

	// }

	// $scope.determineType = function(type) {
	// 	$scope.isType = type;
	// 	// if (type === 'People') {
	// 	// 	$scope.isType
	// 	// } else if (type === 'Place') {
	// 	// 	return 'Place';
	// 	// } else if (type === 'Thing') {
	// 	// 	return;
	// 	// }
	// }

})
