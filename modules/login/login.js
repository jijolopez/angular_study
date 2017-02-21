var loginApp = angular.module("loginApp", []);
loginApp.controller('loginCtrl', ['$scope', '$rootScope', 'loginService',
    function($scope, $rootScope, loginService ){
    	$scope.loginsubmit=function(){
    		var data = {
    			username:$scope.username,
    			password:$scope.password
    		};
    		loginService.loginFunction(data);
    	}
    }
]);


loginApp.service('loginService', ['factoryService', '$state',
    function(factoryService, $state) {
        var serviceObject = {};

        serviceObject.serviceUrl = '/Login';
        serviceObject.loginFunction = function(credentials){
        	factoryService.ajaxRequests(serviceObject.serviceUrl+'/loginSubmit', 'POST', credentials).then(function(response){
                console.log(response);
                $state.go('home');
            });
        };

        return serviceObject;
    }
]);