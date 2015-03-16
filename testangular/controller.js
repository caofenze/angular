var ctr = angular.module("myApp",[]);
ctr.controller('action',function($scope){
	$scope.counter = 0;
	$scope.add = function(amount){
		$scope.counter +=amount;
	}
	$scope.sub = function(amount){
		$scope.counter -=amount;
	}
});
