console.log("app.js")

const app = angular.module('superlativeApp', ['ngRoute'])
	
	.config(function($routeProvider, $locationProvider) {

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
