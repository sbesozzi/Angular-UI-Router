let config = function ($stateProvider, $urlRouterProvider) {

  // If route is invalid 'otherwise' go home
  $urlRouterProvider.otherwise('/');

  // Name routes as chainable states
  $stateProvider
    // Abstract parent state
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    // Nested children states
    .state('root.home', {
      url: '/',
      controller: 'HomeController',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.about', {
      url: '/about',
      controller: 'HomeController',
      templateUrl: 'templates/about.tpl.html'
    })
    .state('root.contact', {
      url: '/contact',
      controller: 'HomeController',
      templateUrl: 'templates/contact.tpl.html'
    });

  // States attached to html by ui-view in section tag


};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;