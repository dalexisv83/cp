/*jslint unparam: true*/
(function(angular) {
    'use strict';
    angular.module('channelspackages', ['angular-growl','ngSanitize'])
        .config(['$httpProvider', function ($httpProvider) {
            cache: true
        }]);
}(window.angular));
/*jslint unparam: false*/