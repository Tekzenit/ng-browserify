(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module('main-controller', ['main-service', 'main-directive'])

    .controller('main', function($scope) {
        
    });

;
},{}],2:[function(require,module,exports){
angular.module('main-directive', ['main-service'])

;
},{}],3:[function(require,module,exports){
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
},{"./main-controller.js":1,"./main-directive.js":2,"./main-service.js":4}],4:[function(require,module,exports){
angular.module('main-service', [])

;
},{}],5:[function(require,module,exports){
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
},{"./_main/main-module":3,"angular":"ZvK1YB","angular-ui-router":"TRUdmS"}]},{},[5])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvY2xpZW50L25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9ob21lL3VidW50dS93b3Jrc3BhY2UvY2xpZW50L2FwcC9fbWFpbi9tYWluLWNvbnRyb2xsZXIuanMiLCIvaG9tZS91YnVudHUvd29ya3NwYWNlL2NsaWVudC9hcHAvX21haW4vbWFpbi1kaXJlY3RpdmUuanMiLCIvaG9tZS91YnVudHUvd29ya3NwYWNlL2NsaWVudC9hcHAvX21haW4vbWFpbi1tb2R1bGUuanMiLCIvaG9tZS91YnVudHUvd29ya3NwYWNlL2NsaWVudC9hcHAvX21haW4vbWFpbi1zZXJ2aWNlLmpzIiwiL2hvbWUvdWJ1bnR1L3dvcmtzcGFjZS9jbGllbnQvYXBwL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImFuZ3VsYXIubW9kdWxlKCdtYWluLWNvbnRyb2xsZXInLCBbJ21haW4tc2VydmljZScsICdtYWluLWRpcmVjdGl2ZSddKVxuXG4gICAgLmNvbnRyb2xsZXIoJ21haW4nLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAgICAgXG4gICAgfSk7XG5cbjsiLCJhbmd1bGFyLm1vZHVsZSgnbWFpbi1kaXJlY3RpdmUnLCBbJ21haW4tc2VydmljZSddKVxuXG47IiwicmVxdWlyZSgnLi9tYWluLXNlcnZpY2UuanMnKTtcbnJlcXVpcmUoJy4vbWFpbi1kaXJlY3RpdmUuanMnKTtcbnJlcXVpcmUoJy4vbWFpbi1jb250cm9sbGVyLmpzJyk7XG5cbmFuZ3VsYXIubW9kdWxlKCdtYWluJywgW1xuICAgICdtYWluLWNvbnRyb2xsZXInXG5dKVxuXG4vLy8gY29uZmlndXJlIHRoZSBtYWluIG1vZHVsZVxuLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgIC5zdGF0ZSgnbWFpbicsIHtcbiAgICAgICAgICAgIHVybDogJy8nLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdfbWFpbi9tYWluLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ21haW4nXG4gICAgICAgIH0pO1xufSlcblxuOyIsImFuZ3VsYXIubW9kdWxlKCdtYWluLXNlcnZpY2UnLCBbXSlcblxuOyIsIndpbmRvdy5hbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpO1xucmVxdWlyZSgnYW5ndWxhci11aS1yb3V0ZXInKTtcbnJlcXVpcmUoJy4vX21haW4vbWFpbi1tb2R1bGUnKVxuXG5hbmd1bGFyLm1vZHVsZSgnYnMtYXBwJywgW1xuICAgIC8vIGV4dGVybmFsIG1vZHVsZXNcbiAgICAndWkucm91dGVyJyxcbiAgICBcbiAgICAvLyBhcHAgbW9kdWxlcyAgICBcbiAgICAnbWFpbidcbl0pXG5cbi5jb25maWcoZnVuY3Rpb24gKCR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoXCIvXCIpO1xufSlcblxuLnJ1bihmdW5jdGlvbigkc3RhdGUpIHtcbiAgICAvLyBnbyB0byB0aGUgbWFpbiBzdGF0ZVxuICAgICRzdGF0ZS5nbygnbWFpbicpO1xufSlcbjtcblxudHJ5IHtcbiAgICBhbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnMtYXBwJyksIFsnYnMtYXBwJ10pO1xufSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZS5zdGFjayB8fCBlLm1lc3NhZ2UgfHwgZSk7XG59Il19
