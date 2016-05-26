(function() {
  'use strict';

  angular
    .module('myApp.directives')
    .directive('myGreet', myGreet);

  function myGreet($parse) {
    return {
      template: "<button ng-click='myGreet()'>Greet!</button>",
      scope: {
        myGreet: '&'
      }
    }
  };
})();