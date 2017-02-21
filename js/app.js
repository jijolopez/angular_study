var app = angular.module("app", ['ui.router', 'header', 'login']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/index");

    $stateProvider

    .state("landing", {
        url: "/index",
        views:{
            "header":{
                templateUrl: "partials/header.html",
                controller:"headerCtrl"
            },
            "content":{
                templateUrl: "partials/landing.html",
                // controller: "homeCtrl"
            },
            "footer":{
                templateUrl: "partials/footer.html",
            }
        }
    })

    .state("login", {
        url: "/login",
        views:{
            "content":{
                templateUrl: "partials/login.html",
                controller: "loginCtrl"
            }
        }
    })

    .state("home", {
        url: "/home",
        views:{
            "header":{
                templateUrl: "partials/header.html",
                controller:"headerCtrl"
            },
            "content":{
                templateUrl: "partials/home.html",
                // controller: "homeCtrl"
            },
            "footer":{
                templateUrl: "partials/footer.html",
            }
        }
    });
});