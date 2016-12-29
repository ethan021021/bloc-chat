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

  angular
    .module('blocChat', ['ui.bootstrap', 'ui.router', 'firebase'])
    .config(config);
})();
