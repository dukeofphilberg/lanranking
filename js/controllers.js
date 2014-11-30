
  var module = angular.module('lanranking.controllers', []);

  module.controller('MainController', function(){
    this.testa = "testa";
  });

  module.controller('PlayerController', function(){
    this.named = 'TYPED3F';
  });

  module.controller('UpcomingEventsController', function(){
    this.events = [{name: "Upcoming event", shortdescription: "Korte omschrijving van upcoming event", date: Date.now()}];
  });

  module.controller('RecentEventsController', function(){
    this.events = [{name: "Finished event", shortdescription: "Korte omschrijving van afgelopen event", date: Date.now()}];
  });

  module.controller('RankingController', function(){

  });

  module.controller('RankingTableController', ['LanrankingApi', function(LanrankingApi)
  {
    this.lanrankingApi = new LanrankingApi();
    this.lanrankingApi.nextRankingPage();
  }]);
