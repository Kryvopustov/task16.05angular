(function() {
  'use strict';

  angular
    .module('myApp.directives')
    .directive('myDraggable', myDraggable);

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
          //event.preventDefault();
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