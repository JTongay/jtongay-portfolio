var app = angular.module('portfolio', ['ui.router','ngAnimate', 'ui.bootstrap'])

app.config(function($stateProvider, $urlRouterProvider, $httpProvider){

  var home = {
    name: 'home',
    url: '/',
    controller: 'main',
    templateUrl: 'partials/home.html'
  }

  var projects = {
    name: 'projects',
    abstract: true,
    url: '/projects',
    controller: 'main',
    templateUrl: 'partials/all-projects.html'
  }

  var projectsCarousel = {
    name: 'list',
    url: '/list',
    parent: projects,
    templateUrl: 'partials/projectscarousel.html'
  }

  var projectDetail = {
    name: 'detail',
    url: '/{project_name}',
    parent: projects,
    controller: 'single',
    templateUrl: 'partials/project.html'
  }


  var single = {
    name: 'single',
    abstract: true,
    controller: 'single',
    templateUrl: 'partials/project.html'
  }

  var pokemonStay = {
    name: 'pokemonstay',
    parent: single,
    url: '/pokemonstay',
    controller: 'single',
    templateUrl: 'partials/project.html'
  }
  var digitalRolodex = {
    name: 'digitalrolodex',
    parent: single,
    url: '/digitalrolodex',
    controller: 'single',
    templateUrl: 'partials/project.html'
  }
  var railsReddit = {
    name: 'railsreddit',
    parent: single,
    url: 'railsreddit',
    controller: 'single',
    templateUrl: 'partials/project.html'
  }
  var raspiTV = {
    name: 'raspi-tv',
    parent: single,
    url: 'raspi-tv',
    controller: 'single',
    templateUrl: 'partials/project.html'
  }

  $stateProvider.state(home);
  // $stateProvider.state(projects);
  // $stateProvider.state(projectsCarousel);
  // $stateProvider.state(projectDetail);

  // $stateProvider.state(single);
  // $stateProvider.state(pokemonStay);
  // $stateProvider.state(digitalRolodex);
  // $stateProvider.state(railsReddit);
  // $stateProvider.state(raspiTV);

  $urlRouterProvider.otherwise('/')
})
