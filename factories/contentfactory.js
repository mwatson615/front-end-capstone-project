
app.factory('contentFactory', ($http, $q) => {

	return {


		createPost : (newPost) => {
			return $http.post('https://superlative-ac493.firebaseio.com/posts.json', JSON.stringify(newPost))
			.then(function(value) {
				// console.log(value.config)
			})
			.catch(function(error) {
				  // Handle Errors here.
				  var errorCode = error.code;
				  var errorMessage = error.message;
				  alert(error.code + " : " + error.message)
			})
		},
		getPosts : () => {
			return $http.get('https://superlative-ac493.firebaseio.com/posts.json')
			.then(function(results) {
				// console.log(results)
				return results
			})
			.catch(function(error) {
				  // Handle Errors here.
				  var errorCode = error.code;
				  var errorMessage = error.message;
				  alert(error.code + " : " + error.message)
			})
		},
		getMyPosts : () => {
			return $http.get('https://superlative-ac493.firebaseio.com/posts.json?orderBy="userName"&limitToFirst=100&print=pretty')
		.catch(function(error) {
				  // Handle Errors here.
				  var errorCode = error.code;
				  var errorMessage = error.message;
				  alert(error.code + " : " + error.message)
			})
		}
	}
})
