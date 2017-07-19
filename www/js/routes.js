angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('agenda', {
    url: '/agenda',
    templateUrl: 'templates/agenda.html',
    controller: 'agendaCtrl'
  })

  .state('sobre', {
    url: '/sobre',
    templateUrl: 'templates/sobre.html',
    controller: 'sobreCtrl'
  })

$urlRouterProvider.otherwise('/agenda')


});