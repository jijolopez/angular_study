var homeApp = angular.module("homeApp", []);
homeApp.controller('homeCtrl', ['$scope', '$rootScope', 'homeService',
    function($scope, $rootScope, homeService){
       homeService.getImages($scope); 
    }
]);
homeApp.service('homeService', ['factoryService',
    function(factoryService) {
        var serviceObject = {};

        serviceObject.serviceUrl = '/Home';
        serviceObject.getImages = function(bindingScope){
            factoryService.ajaxRequests(serviceObject.serviceUrl+'/getImages', 'GET').then(function(res){
                bindingScope.imageArray = res.data.images;
                return bindingScope;
            })
        }

        return serviceObject;
    }
]);