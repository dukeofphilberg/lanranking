var module = angular.module('lanranking.factories', []);

module.factory('LanrankingApi', function($http)
{
  var LanrankingApi = function()
  {
      this.players = [];
      this.busy = false;
      this.after = '';
  }

  LanrankingApi.prototype.nextRankingPage = function()
  {
      if (this.busy)
      {
          return;
      }

      this.busy = true;

      this.testplayers = [
        {rank: 1, countrycode: 'BE', firstname: 'Philip', nickname: 'typed3f', lastname: 'Vanloo', points: 1337, playerid: 1,},
        {rank: 2, countrycode: 'BE', firstname: 'Philip', nickname: 'typed3f', lastname: 'Vanloo', points: 1337, playerid: 2,},
        {rank: 3, countrycode: 'BE', firstname: 'Philip', nickname: 'typed3f', lastname: 'Vanloo', points: 1337, playerid: 3,},
        {rank: 4, countrycode: 'BE', firstname: 'Philip', nickname: 'typed3f', lastname: 'Vanloo', points: 1337, playerid: 4,},
        {rank: 5, countrycode: 'BE', firstname: 'Philip', nickname: 'typed3f', lastname: 'Vanloo', points: 1337, playerid: 5,},
        {rank: 6, countrycode: 'BE', firstname: 'Philip', nickname: 'typed3f', lastname: 'Vanloo', points: 1337, playerid: 1,},
        {rank: 7, countrycode: 'BE', firstname: 'Philip', nickname: 'typed3f', lastname: 'Vanloo', points: 1337, playerid: 2,},
        {rank: 8, countrycode: 'BE', firstname: 'Philip', nickname: 'typed3f', lastname: 'Vanloo', points: 1337, playerid: 3,},
        {rank: 9, countrycode: 'BE', firstname: 'Philip', nickname: 'typed3f', lastname: 'Vanloo', points: 1337, playerid: 4,},
        {rank: 10, countrycode: 'BE', firstname: 'Philip', nickname: 'typed3f', lastname: 'Vanloo', points: 1337, playerid: 5,},
        {rank: 11, countrycode: 'BE', firstname: 'Philip', nickname: 'typed3f', lastname: 'Vanloo', points: 1337, playerid: 1,},
        {rank: 12, countrycode: 'BE', firstname: 'Philip', nickname: 'typed3f', lastname: 'Vanloo', points: 1337, playerid: 2,},
        {rank: 13, countrycode: 'BE', firstname: 'Philip', nickname: 'typed3f', lastname: 'Vanloo', points: 1337, playerid: 3,},
        {rank: 14, countrycode: 'BE', firstname: 'Philip', nickname: 'typed3f', lastname: 'Vanloo', points: 1337, playerid: 4,},
        {rank: 15, countrycode: 'BE', firstname: 'Philip', nickname: 'typed3f', lastname: 'Vanloo', points: 1337, playerid: 5,},
        {rank: 16, countrycode: 'BE', firstname: 'Philip', nickname: 'typed3f', lastname: 'Vanloo', points: 1337, playerid: 1,},
        {rank: 17, countrycode: 'BE', firstname: 'Philip', nickname: 'typed3f', lastname: 'Vanloo', points: 1337, playerid: 2,},
        {rank: 18, countrycode: 'BE', firstname: 'Philip', nickname: 'typed3f', lastname: 'Vanloo', points: 1337, playerid: 3,},
        {rank: 19, countrycode: 'BE', firstname: 'Philip', nickname: 'typed3f', lastname: 'Vanloo', points: 1337, playerid: 4,},
        {rank: 20, countrycode: 'BE', firstname: 'Philip', nickname: 'typed3f', lastname: 'Vanloo', points: 1337, playerid: 5,},
        {rank: 21, countrycode: 'BE', firstname: 'Philip', nickname: 'typed3f', lastname: 'Vanloo', points: 1337, playerid: 1,},
        {rank: 22, countrycode: 'BE', firstname: 'Philip', nickname: 'typed3f', lastname: 'Vanloo', points: 1337, playerid: 2,},
        {rank: 23, countrycode: 'BE', firstname: 'Philip', nickname: 'typed3f', lastname: 'Vanloo', points: 1337, playerid: 3,},
        {rank: 24, countrycode: 'BE', firstname: 'Philip', nickname: 'typed3f', lastname: 'Vanloo', points: 1337, playerid: 4,},
        {rank: 25, countrycode: 'BE', firstname: 'Philip', nickname: 'typed3f', lastname: 'Vanloo', points: 1337, playerid: 5,},
      ];

      this.players = this.players.concat(this.testplayers);

      this.busy = false;
  };

  return LanrankingApi;
});
