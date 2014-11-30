(function(){
  var app = angular.module('lanranking', ['ngRoute', 'lanranking.controllers', 'lanranking.directives', 'lanranking.factories', 'infinite-scroll']);

  app.config(function($routeProvider, $locationProvider)
  {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/test', {
        templateUrl: 'views/partials/test.html',
        controller: 'TestController',
      })
      .when('/ranking', {
        templateUrl: 'views/partials/ranking.html',
        controller: 'RankingController',
      })
      .when('/',{
        templateUrl: 'views/partials/main.html',
        controller: 'MainController',
      })
      .when('/player/:id',{
        templateUrl: 'views/partials/player.html',
        controller: 'PlayerController',
      })
      .otherwise({
        templateUrl: 'views/404.html',
        controller: 'NotFoundController',
      });
  });
})();
