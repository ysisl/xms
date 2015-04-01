'use strict';

// Declare app level module which depends on views, and components
var demo = angular.module('demo', [
    'ngRoute', 'onsen'
]);

var params= new Object();

demo.config(['$routeProvider', '$sceDelegateProvider',function ($routeProvider,$sceDelegateProvider) {
        $routeProvider
                .when('/', {
                    templateUrl: 'login.html',
                    controller: 'loginController'
                })
                .otherwise({
                    templateUrl: 'login.html',
                    controller: 'loginController'
                });
       
     
    }]);

// Shared data from settings needed by different controllers
demo.service('SettingsService', function () {
    var _variables = {};
    return {
        get: function (varname) {
            return (typeof _variables[varname] !== 'undefined') ? _variables[varname] : false;
        },
        set: function (varname, value) {
            _variables[varname] = value;
        }
    };
});





/*
demo.controller('ViewCtrl',function ($scope,$http,$q) {
    $scope.title = 'hello,world';
    $scope.MyDelegate = {
    configureItemScope : function(index, itemScope) {
        console.log("Created item #" + index);
        
        if(!itemScope.item){
            itemScope.canceler = $q.defer();
            itemScope.item = {
                    title: 'Item #' + (index + 1),
                    label: '',
                    desc: '',
                    rand: Math.random()
                };
            $http.get('https://baconipsum.com/api/?type=meat-and-filler&sentences=1',{timeout: itemScope.canceler.promise}).success(function (data) {
                    itemScope.item.desc = 'hello,boy';
                    itemScope.item.label = itemScope.item.desc.substr(0, itemScope.item.desc.indexOf(" ")) + 'bacon'
                }).error(function () {
                    itemScope.item.desc = 'No bacon lorem ipsum';
                    itemScope.item.label = 'No bacon'
                });
        }
    },
    calculateItemHeight : function(index) {
      return 91;
    },
    countItems : function() {
      return 50;
    },
    destroyItemScope: function(index, scope) {
      console.log("Destroyed item #" + index);
    }
  };
  
  $scope.data = [];
  
    $scope.items = [
        {
            title: 'Item 1 Title',
            label: '4h',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title: 'Another Item Title',
            label: '6h',
            desc: 'Ut enim ad minim veniam.'
        },
        {
            title: 'Yet Another Item Title',
            label: '1day ago',
            desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
            title: 'Yet Another Item Title',
            label: '1day ago',
            desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
    ];

});
*/

demo.controller('myTaskController',function ($scope,$http,$q) {
    $scope.title = 'hello,world';
})