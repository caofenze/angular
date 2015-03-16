var app = angular.module("myApp",['ngResource']);
app.controller("action" , function($http,$resource){
	
	var promise = $http.get("data/user.json");
	
	/*var User = $resource('data/user.json');

	User.get(function(resp){
		console.log(resp);
	},function(resp){

	})*/
	promise.then(function(resp){
		console.log(resp);
	},function(){

	})
});

app.config(function($httpProvider){
	$httpProvider.defaults.headers.common['X-Requested-By'] = 'MyAngularApp';
})