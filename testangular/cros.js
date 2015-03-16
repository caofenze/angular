var app = angular.module("myApp",[]);

app.config(function($httpProvider){

	$httpProvider.defaults.userDomain = true;
	
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
})