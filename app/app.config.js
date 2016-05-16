(function() {
  'use strict'

  angular
    .module('myApp')
    .config(appConfig);

  appConfig.$inject = ['$stateProvider','$urlRouterProvider'];
  
  function appConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.template.html'
      });

    $urlRouterProvider.otherwise('/home');  
  };

})();