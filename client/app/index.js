window.angular = require('angular');
require('angular-ui-router');
require('./_main/main-module')

angular.module('bs-app', [
    // external modules
    'ui.router',
    
    // app modules    
    'main'
])

.config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
})

.run(function($state) {
    // go to the main state
    $state.go('main');
})
;

try {
    angular.bootstrap(document.getElementById('bs-app'), ['bs-app']);
} catch (e) {
    console.error(e.stack || e.message || e);
}