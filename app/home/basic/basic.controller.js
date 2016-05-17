(function() {
  'use strict';

  angular
    .module('myApp.home')
    .controller('BasicController', BasicController);

  BasicController.$inject = ['$scope'];

  function BasicController($scope) {

    $scope.basicExample2_1 = 'grey';

    $scope.sortArrBy = 'name';

    $scope.searchArr = [
      {"name":"John"},
      {"name":"Anna"},
      {"name":"Alex"},
      {"name":"Pavel"},
      {"name":"Roman"},
      {"name":"Brian"},
      {"name":"Zorro"},
      {"name":"Adam"},
      {"name":"Ross"},
      {"name":"Joey"},
      {"name":"Chandler"}
    ];


  };
})();