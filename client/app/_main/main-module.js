require('./main-service.js');
require('./main-directive.js');
require('./main-controller.js');

angular.module('main', [
    'main-controller'
])

/// configure the main module
.config(function($stateProvider) {
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: '_main/main.html',
            controller: 'main'
        });
})

;