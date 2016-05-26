(function() {
  'use strict';

  angular
    .module('myApp.basic')
    .controller('BasicController', BasicController);

  BasicController.$inject = ['$scope'];

  function BasicController($scope) {

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

    $scope.sayHello = function(name) {
     alert("Hello, " + name + "!")
    };


  };
})();