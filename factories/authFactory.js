app.factory('authFactory', ($q) => {

	return {
		login (email, password) {
			return $q.resolve(firebase.auth()
				.signInWithEmailAndPassword(email, password))
				.catch(function(error) {
			  	var errorCode = error.code;
			  	var errorMessage = error.message;
			  	alert(errorCode + " : " + errorMessage)
			})
		},
		register (email, password) {
			return $q.resolve(firebase.auth()
				.createUserWithEmailAndPassword(email, password))
				.catch(function(error) {
				  var errorCode = error.code;
				  var errorMessage = error.message;
				  alert(errorCode + " : " + errorMessage)
			})
		},
		getUserId () {
			return $q((resolve, reject) => {
				const unsubscribe = firebase.auth().onAuthStateChanged(user => {
					unsubscribe()
					if (user) {
						resolve(user)
					} else {
						reject()
					}
				})
			})
		},
		logout () {
			return $q.resolve(firebase.auth().signOut())
		}
	}

})
