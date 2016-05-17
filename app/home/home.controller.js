(function () {
  'use strict';

  angular
    .module('myApp.home')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$location', '$anchorScroll'];


  function HomeController($scope, $location, $anchorScroll) {

    $scope.scrollTo = function(id) {
      $anchorScroll.yOffset = 50;
      $location.hash(id);
      $anchorScroll(id);
    };

    $scope.loadScroll = function(){
      var id = $location.hash();
      if (id) {
        $scope.scrollTo(id);
      };
    };
 // $scope.$on('$viewContentLoaded', function(){
 //      var test1 = $location.hash();
 //      if (test1) {
 //        $scope.scrollTo(test1)
 //      };
 //  });



  }
})();