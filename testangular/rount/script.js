$.replaceTpl = function (tpl, data, label) {
    var t = String(tpl),
        s = label || /#\{([^}]*)\}/mg,
        trim = String.trim ||
            function (str) {
                return str.replace(/^\s+|\s+$/g, '')
            };
    return t.replace(s, function (value, name) {
        //从模板获取name,容错处理
        return value = data[trim(name)];
    });
};
// script.js

// create the module and name it scotchApp
  // also include ngRoute for all our routing needs
var scotchApp = angular.module('scotchApp', ['ngRoute','ngResource']);
// configure our routes
scotchApp.config(function($routeProvider) {
  $routeProvider

    // route for the home page
    .when('/', {
      templateUrl : 'pages/home.html',
      controller  : 'mainController'
    })

    // route for the about page
    .when('/about', {
      templateUrl : 'pages/about.html',
      controller  : 'aboutController'
    })

    // route for the contact page
    .when('/contact', {
      templateUrl : 'pages/contact.html',
      controller  : 'contactController'
    });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope,$http,$resource) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';

  var promise = $http.get("../data/user.json");
  var peopleTpl = '<tr>'
                +'<td>#{city_name}</td>'
                +'<td>#{org_path}</td>'
                +'<td>#{name}</td>'
                +'<td id="unique">#{user_code}</td>'
                +'<td>#{title}</td>'
                +'<td>#{level}</td>'
                +'<td>#{month_begin_score}</td>'
                +'<td>#{estimate_score}</td>'
              +'</tr>';

  promise.then(function(resp){
    var tmp = '';
    tmp+= $.replaceTpl(peopleTpl,resp.data.data);

    $("#main .con").append(tmp);
  },function(){

  })

});

scotchApp.controller('aboutController', function($scope,$http) {
  var historyTpl = '<tr>'
                      +'<td>#{id}</td>'
                      +'<td>#{city_name}</td>'
                      +'<td>#{create_time}</td>'
                      +'<td>#{type}</td>'
                      +'<td>#{score}</td>'
                      +'<td>#{op_name}</td>'
                      +'<td>#{op_user_code}</td>'
                      +'<td>#{reason}</td>'
                      +'<td>#{status}</td>'
                    +'</tr>';

  var promise = $http.get("../data/log.json");

  promise.then(function(resp){
    var data = resp.data.data.record;

    var tmp = '';
    for(var i in data){
      tmp+= $.replaceTpl(historyTpl,data[i]);
    }
    

    $("#main .con01").append(tmp);

  },function(){

  });

});

scotchApp.controller('contactController', function($scope,$http) {
  var promise = $http.get("../data/log.json");
  promise.then(function(resp){
    var data = resp.data.data.record;
    $scope.items = data;

  });
  
});