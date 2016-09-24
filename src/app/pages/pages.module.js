(function () {
  'use strict';

  angular.module('myApp.pages', [
    'ui.router',
    'myApp.pages.view1',
    'myApp.pages.view2',
  ])
      .config(routeConfig);

  function routeConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/view1');
  }

})();
