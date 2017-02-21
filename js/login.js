var login = angular.module("login", []);
login.controller('loginCtrl', ['$scope', '$rootScope',
    function($scope, $rootScope){
    	$scope.loginsubmit=function(){
    		var data = {
    			username:$scope.username,
    			password:$scope.password,
    			rememberme:$scope.checkbox
    		};
    		console.log(data);
    	}
    }
]);