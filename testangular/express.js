var app = angular.module("myApp",[]);
app.controller("action" , function($scope,$parse){

	$scope.$watch('expr',function(newVal,oldVal,scope){
		if(newVal!==oldVal){
			var parseFun = $parse(newVal);
			$scope.parseValue = parseFun(scope);
		}
	});
});

app.controller("email" , function($scope,$interpolate){
	$scope.$watch('emailBody', function(body){
		if(body){
			var template = $interpolate(body);
			$scope.previewText = template({to:$scope.to});
		}
	});
});