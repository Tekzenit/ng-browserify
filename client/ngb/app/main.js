var angular = require('angular');

angular.module('app', [])
.run(function($rootScope) {
    $rootScope.derp = 'herp';
});