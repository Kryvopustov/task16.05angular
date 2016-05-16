(function() {
  'use strict';

  angular
    .module('myApp.services')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http'];  

  function dataservice($http) {
    
  }
})();