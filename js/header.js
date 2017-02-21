var header = angular.module("header", []);
header.controller('headerCtrl', ['$scope', '$rootScope', '$state',
    function($scope, $rootScope, $state){
   		$scope.loginClick=function(){
   			$state.go('login');
   		}
   		$scope.logoClick=function(){
   			$state.go('landing')
   		}  
    }
]);