
app.controller('HomeCtrl', function($scope, contentFactory, authFactory, $http, $route) {

	$scope.contentArray = [];
	$scope.voteArray = []
	contentFactory.getPosts()
	.then((value) => {
		$scope.posts = value.data

		for (key in $scope.posts) {
			$scope.contentArray.push($scope.posts[key])

		}
	})

	$scope.login = () => {
		authFactory.login($scope.logEmail, $scope.logPassword)
		.then((response) => {
			$scope.getUserInfo()
			$scope.logEmail = ''
			$scope.logPassword = ''
		})
	}
	$scope.register = () => {
		authFactory.register($scope.regEmail, $scope.regPassword)
		.then((response) => {
			$scope.getUserInfo()
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

	$scope.logout = () => {
		authFactory
		.logout()
		.then((response) => {
		})
		.then(function() {
			$scope.userName = ''
			$scope.displayName = null
		})
	}

	$scope.vote = (post) => {
		let postId;
		for (key in $scope.posts) {
			if ($scope.posts[key] === post) {
					postId = key
			}
		}

			if (post.hasVoted.includes($scope.displayName) || $scope.displayName === null) {
				return;
			} else {
			post.counter++
			post.hasVoted.push($scope.displayName)
			}

			$http.put(`https://superlative-ac493.firebaseio.com/posts/${postId}/counter.json`, post.counter)
			$http.put(`https://superlative-ac493.firebaseio.com/posts/${postId}/hasVoted.json`, post.hasVoted)
		}
})
