angular.module('deckApp', [])
  .controller('DeckController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    $scope.list = [];
    $scope.init = function(){
      $http({
        method: 'GET',
        url: 'data/data.json'
      }).success(function(data){
        $scope.list = data;
      });
    };
    $scope.init()
  }]);
