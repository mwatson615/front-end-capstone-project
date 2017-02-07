console.log("app.js")

const app = angular.module('superlativeApp', ['ngRoute'])
	
	.config(function($routeProvider, $locationProvider) {
	firebase.initializeApp({
    apiKey: "AIzaSyALvWrpmUrLajhA_WxJPjt9pGkuUYZtBp4",
    authDomain: "superlative-ac493.firebaseapp.com",
    databaseURL: "https://superlative-ac493.firebaseio.com",
    storageBucket: "superlative-ac493.appspot.com",
    messagingSenderId: "993116517864"
  	})

	$locationProvider.hashPrefix('')
	$routeProvider
	.when('/', {
		controller: 'HomeCtrl',
		templateUrl: 'partials/home.html'
	})
	.when('/myposts', {
		controller: 'MyPostsCtrl',
		templateUrl: 'partials/myposts.html'
	})
	.when('/create', {
		controller: 'CreateCtrl',
		templateUrl: 'partials/createmodal.html'
	})
	.otherwise({
		redirectTo: '/'
	})

})
