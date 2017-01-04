var app;

(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('landing', {
        url: '/',
        controller: 'LandingCtrl as landing',
        templateUrl: '/templates/home.html'
      });
  }

  app = angular
    .module('blocChat', ['ui.bootstrap', 'luegg.directives', 'ngCookies', 'ui.router', 'firebase'])
    .config(config);
})();
