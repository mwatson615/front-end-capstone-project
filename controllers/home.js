// console.log('home ctrl')

app.controller('HomeCtrl', function($scope, contentFactory, authFactory, $http) {

	$scope.login = () => {
		authFactory.login($scope.logEmail, $scope.logPassword)
		.then((response) => {
			$scope.getUserInfo()
		})
	}
	$scope.register = () => {
		authFactory.register($scope.regEmail, $scope.regPassword)
		.then((response) => {
			$scope.getUserInfo()
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
	$scope.getUserInfo = () => {
	authFactory.getUserId()
	.then((response) => {
		$scope.hello = "Hello"
		$scope.userName = $scope.hello + " " + response.displayName
		$scope.displayName = response.displayName
		})
	}
	$scope.getUserInfo();
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
	$scope.voteArray = []
	contentFactory.getPosts()
	.then((value) => {
		$scope.posts = value.data
		// $scope.hasVoted = value.data

		for (key in $scope.posts) {
			$scope.contentArray.push($scope.posts[key])
			$scope.voteArray.push($scope.posts[key].hasVoted)
		}
		// console.log($scope.voteArray)
	})

	$scope.vote = (post) => {
		let postId;
		for (key in $scope.posts) {
			if ($scope.posts[key] === post) {
					postId = key
			// console.log($scope.posts[key].hasVoted)
				}
		}
			if (post.hasVoted === $scope.displayName) {
				console.log("you already voted")
			} else {
			post.counter++
			$http.put(`https://superlative-ac493.firebaseio.com/posts/${postId}/counter.json`, post.counter)
			$http.put(`https://superlative-ac493.firebaseio.com/posts/${postId}/hasVoted.json`, post.hasVoted)
			console.log(post.hasVoted)
			}
			// post.hasVoted += $scope.userName
			// console.log($scope.displayName)



			// for (key in $scope.posts) {
			// 	if ($scope.posts[key] === post) {
			// 		postId = key
			// 	}
		}
		// let hasVoted = true;
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
