var app = angular.module("myApp",[]);

app.factory('greeter', function(){
	return {
		greet : function(msg){
			alert(msg);
		}
	}
})
.factory('bind', function(){
	return {
		show : function(msg){
			alert('bind '+msg);
		}
	}
});

app.controller('myController', function($scope,greeter,bind){
	$scope.say = function(){
		greeter.greet("say tomas");
	}
	$scope.bind = function(){
		bind.show("bingo");
	}
});