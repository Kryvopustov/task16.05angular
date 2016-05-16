(function() {
  'use strict';

  angular
    .module('myApp.basic')
    .controller('BasicController', BasicController);

  BasicController.$inject = ['$scope'];

  function BasicController($scope) {
    $scope.be1_2 = 'grey';  

    
  }
})();