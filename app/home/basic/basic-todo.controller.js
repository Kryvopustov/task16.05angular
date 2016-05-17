(function() {
  'use strict';

  angular
    .module('myApp.basic')
    .controller('BasicTodoController', BasicTodoController);

  BasicTodoController.$inject = ['$scope'];

  function BasicTodoController($scope) {

    $scope.todos = [
      {text:'task 1', done:false},
      {text:'task 2', done:false}
    ];

    $scope.addTodo = function() {
      $scope.todos.push({text:$scope.formTodoText, done:false});
      $scope.formTodoText = '';
    };

    $scope.clear = function() {
      var oldTodos = $scope.todos;
      $scope.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) $scope.todos.push(todo);
      });
    }

    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    $scope.getTotalTodos = function() {
      return $scope.todos.length;
    };
  }
})();