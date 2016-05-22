(function() {
  'use strict';

  angular
    .module('myApp.home')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$location', '$anchorScroll'];


  function HomeController($scope, $location, $anchorScroll) {

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

    $scope.todos = [
      {text:'task 1', done:false},
      {text:'task 2', done:false}
    ];

    $scope.scrollTo = function(id) {
      $anchorScroll.yOffset = 50;
      $location.hash(id);
      $anchorScroll(id);
    };

    $scope.loadScroll = function(){
      var id = $location.hash();
      if (id) {
        $scope.scrollTo(id);
      };
    };
 // $scope.$on('$viewContentLoaded', function(){
 //      var test1 = $location.hash();
 //      if (test1) {
 //        $scope.scrollTo(test1)
 //      };
 //  });

    $scope.addTodo = function() {
      $scope.todos.push({text:$scope.formTodoText, done:false});
      $scope.formTodoText = '';
    };

    $scope.clearTodo = function() {
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