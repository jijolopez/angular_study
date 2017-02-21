var app = angular.module("app", ['ui.router', 'login']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/home");

    $stateProvider

    .state("login", {
        url: "/login",
        views:{
            "content":{
                templateUrl: "partials/login.html",
                controller: "loginCtrl"
            }
        }
    })
    
    .state("landing", {
        url: "/home",
        views:{
            "header":{
                templateUrl: "modules/common/header.html",
            },
            "content":{
                templateUrl: "partials/landing.html",
                controller: "homeCtrl"
            },
            "footer":{
                templateUrl: "modules/common/footer.html",
            }
        }
    });
});