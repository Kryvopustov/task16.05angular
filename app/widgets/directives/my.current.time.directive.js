(function() {
  'use strict';

  angular
    .module('myApp.directives')
    .directive('myCurrentTime', myCurrentTime);


  function myCurrentTime($interval, dateFilter) {
    return {
      scope: {
        myCurrentTime: '='
      },
      link: function(scope,element,attrs) {
        var timeoutId;
        //scope.format = 'd/M/yy H:mm:ss';

        function updateTime() {
          element.text(dateFilter(new Date(), scope.myCurrentTime || 'd/M/yy H:mm:ss'));
        };

        timeoutId = $interval(function() {
          updateTime();
        }, 1000);
      }
    };
  };

})();