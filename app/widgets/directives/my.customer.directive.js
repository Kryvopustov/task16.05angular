(function() {
  'use strict';

  angular
    .module('myApp.directives')
    .directive('myCustomer', myCustomer);

  function myCustomer() {
    return {
      restrict: 'E',
      scope: {},
      template: 'Name: {{viktoria.name}} Address: {{viktoria.address}}',
      link: function(scope) {
        scope.viktoria = {name: 'Viktoria', address: '123 Somewhere'};
      }
    }
  };
})();