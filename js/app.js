angular.module('EmailApp', [
	'ngRoute',
	'ngSanitize'
]).config(function ( $routeProvider ) {;

$routeProvider
	//Enable the inbox view.
	.when('/inbox', {
		templateUrl: 'views/inbox.html',
		controller: 'InboxCtrl',
		controllerAs: 'inbox'
	})
	
	//Enable the email view.
	.when('/inbox/email/:id', {
		templateUrl: 'views/email.html',
		controller: 'EmailCtrl',
		controllerAs: 'email'
	})

	//This will be the default view.
	.otherwise({
		redirectTo: '/inbox'
	});
}).run(function($rootScope){
	$rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
		console.log(event, current, previous, rejection)
		})
});