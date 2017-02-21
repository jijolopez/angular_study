var login = angular.module("login", []);
login.controller('loginCtrl', ['$scope', '$rootScope', '$state',
    function($scope, $rootScope, $state){
    	$scope.loginsubmit=function(){
    		var data = {
    			username:$scope.username,
    			password:$scope.password,
    			rememberme:$scope.checkbox
    		};
    		$state.go('home');
    	}
    }
]);