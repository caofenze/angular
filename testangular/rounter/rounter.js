var routeApp = angular.module('routeApp',['ngRoute']);
routeApp.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        .when('/list', {
            templateUrl: 'list.html',
            controller: 'RouteListCtl'
        })
        .when('/list/:id', {
            templateUrl: 'detail.html',
            controller: 'RouteDetailCtl'
        })
        .otherwise({
            redirectTo: '/list'
        });
}]);