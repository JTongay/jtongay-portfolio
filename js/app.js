var app = angular.module('portfolio', ['ui.router','ngAnimate', 'ui.bootstrap'])

app.config(function($stateProvider, $urlRouterProvider, $httpProvider){

  var home = {
    name: 'home',
    url: '/',
    controller: 'main',
    templateUrl: 'partials/home.html'
  }

  var single = {
    name: 'single',
    url: '/single',
    controller: 'single',
    templateUrl: 'partials/project.html'
  }

  $stateProvider.state(home);
  $stateProvider.state(single);

  $urlRouterProvider.otherwise('/')
})
