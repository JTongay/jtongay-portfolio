var app = angular.module('portfolio', ['ui.router','ngAnimate', 'ui.bootstrap'])

app.config(function($stateProvider, $urlRouterProvider, $httpProvider){

  var home = {
    name: 'home',
    url: '/',
    controller: 'main',
    templateUrl: 'partials/home.html'
  }

  $stateProvider.state(home)

  $urlRouterProvider.otherwise('/')
})
