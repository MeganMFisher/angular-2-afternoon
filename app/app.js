angular.module('devmtnTravel', ['ui.router']).config( function ( $stateProvider, $urlRouterProvider ) {
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl: "app/about/aboutTmpl.html"
    })
    .state('packages', {
      url: '/packages/:country',
      template: './app/packages/packagesTmpl.html'
    })
    .state('locations', {
      url: '/locations',
      template: './app/locations/locationsTmpl.html'
    })
    .state('booked', {
      url: '/booked/:id',
      template: './app/booked/bookedTmpl.html'
    })
    .state('adventures', {
      url: '/adventures',
      template: './app/adventures/adventuresTmpl.html'
    })
    .state('contact', {
      url: '/contact',
      template: './app/contact/contactTmpl.html'
    })



  $urlRouterProvider
    .otherwise('/');
});
