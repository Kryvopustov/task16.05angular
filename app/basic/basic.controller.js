(function() {
  'use strict';

  angular
    .module('myApp.basic')
    .controller('BasicController', BasicController)
    .directive('myGreet', myGreet)
    .directive('myCustomer', myCustomer)
    .directive('myCurrentTime', myCurrentTime)
    .directive('myDraggable', myDraggable);

  BasicController.$inject = ['$scope'];
  myCurrentTime.$inject = ['$interval', 'dateFilter'];

  function BasicController($scope) {
//------------------------------ Keyboard events ----------------------
    $scope.onKeyDownResult = "";
    $scope.onKeyUpResult = "";
    $scope.onKeyPressResult = "";

    var getKeyboardEventResult = function(keyEvent, keyEventDesc) {
      return keyEventDesc + " (keyCode: " + (window.event ? keyEvent.keyCode : keyEvent.which) + ")";
    };

    $scope.onKeyDown = function($event) {
      $scope.onKeyDownResult = getKeyboardEventResult($event, "Key down");
    };

    $scope.onKeyUp = function($event) {
      $scope.onKeyUpResult = getKeyboardEventResult($event, "Key up");
    };

    $scope.onKeyPress = function($event) {
      $scope.onKeyPressResult = getKeyboardEventResult($event, "Key press");
    };

//------------------------------ directives ------------------
    $scope.sayHello = function(name) {
     alert("Hello, " + name + "!")
    };

    $scope.viktoria = {name: 'Viktoria', address: '123 Somwere'};
    $scope.format = 'd/M/yy H:mm:ss';

  };

  function myGreet($parse) {
    return {
        template: "<button ng-click='myGreet()'>Greet!</button>",
        replace: true,
        scope: {
          myGreet: '&'
        }
    }
  };

  function myCustomer() {
    return {
      restrict: 'E',
      scope: {
        customerInfo: '=info'
      },
      template: 'Name: {{customerInfo.name}} Address: {{customerInfo.address}}'
    }
  };

  function myCurrentTime($interval, dateFilter) {
    function link(scope,element,attrs) {
      var format;
      var timeoutId;

      function updateTime() {
        element.text(dateFilter(new Date(), format));
      };
      scope.$watch(attrs.myCurrentTime, function(value) {
        format = value;
        updateTime();
      });
      element.on('$destroy', function() {
        $interval.cancel(timeoutId);
      });
      // start the UI update process; save the timeoutId for canceling
      timeoutId = $interval(function() {
        updateTime(); // update DOM
      }, 1000);
    }
    return {
      link: link
    };
  };

  function myDraggable($document) {
    return {
      link: function(scope, element, attr) {
        var startX = 0;
        var startY = 0;
        var x = 0;
        var y = 0;

        element.css({
          position: 'relative',
          border: '1px solid red',
          backgroundColor: 'lightgrey',
          cursor: 'pointer',
          width: '100px'
        });

        element.on('mousedown', function(event) {
          // Prevent default dragging of selected content
          event.preventDefault();
          startX = event.pageX - x;
          startY = event.pageY - y;
          $document.on('mousemove', mousemove);
          $document.on('mouseup', mouseup);
        });

        function mousemove(event) {
          y = event.pageY - startY;
          x = event.pageX - startX;
          element.css({
            top: y + 'px',
            left:  x + 'px'
          });
        }

        function mouseup() {
          $document.off('mousemove', mousemove);
          $document.off('mouseup', mouseup);
        }

      }
    }
  }

})();