var routeApp = angular.module("routeApp", ['ui.router', 'factoryApp', 'storageApp', 'loginApp', 'homeApp']);

routeApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/login");

    $stateProvider

    .state("login", {
        url: "/login",
        views:{
            "login":{
                templateUrl: "modules/login/login.html",
                controller: "loginCtrl"
            }
        }
    })
    .state("home", {
        url: "/home",
        views:{
            "header":{
                templateUrl: "modules/common/header.html",
            },
            "content":{
                templateUrl: "modules/home/home.html",
                controller: "homeCtrl"
            },
            "footer":{
                templateUrl: "modules/common/footer.html",
            }
        }
    });
});