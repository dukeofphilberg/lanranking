(function(){
  var module = angular.module('lanranking.directives', []);

  module.directive('rightSidebar', function()
  {
      return {
        restrict: 'E',
        templateUrl: '/views/directives/right-sidebar.html',
      };
  });

  module.directive('upcomingEvents', function()
  {
    return {
      restrict: 'E',
      templateUrl: '/views/directives/upcoming-events.html',
      controller: 'UpcomingEventsController',
      controllerAs: 'upcomingEventsCtrl',
    };
  });

  module.directive('recentEvents', function(){
    return {
      restrict: 'E',
      templateUrl: '/views/directives/recent-events.html',
      controller: 'RecentEventsController',
      controllerAs: 'recentEventsCtrl',
    };
  });

  module.directive('rankingTable', function(){
    return {
      restrict: 'E',
      templateUrl: '/views/directives/ranking-table.html',
      controller: 'RankingTableController',
      controllerAs: 'rankingTableCtrl',
    };
  });
})();
