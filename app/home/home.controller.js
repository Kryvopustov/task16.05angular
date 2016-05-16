(function () {
  'use strict';

  angular
    .module('myApp.home')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$location', '$anchorScroll'];  

  function HomeController($scope, $location, $anchorScroll) {
    $scope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
    }
  }
})();

/*
        var start = 0;
        var ending = start+10;
        var lastdata = 100;
        var reachLast = false;

        $scope.loadmore = "Loading More data..";
        $scope.testData = [];

        $scope.listData = function() {
            if(reachLast){
                return false;
            }
            var jsondt = [];
            for (var i = start; i < ending; i++) {
                jsondt.push({
                    id: i, name: "name"+i
                });
            };
            start = i;
            ending = i+10;

            $scope.testData =$scope.testData.concat(jsondt);


            if(ending >= lastdata) {
                reachLast = true;
                $scope.loadmore = "Reached at bottom";
            }
        };


        $scope.listData();
*/