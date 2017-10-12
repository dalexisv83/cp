(function(angular) {
    'use strict';
    angular.module('channelspackages')
        .controller('MainCtrl', ['$scope', '$location',
            function($scope, $location, $cookies) {
                if (($location.path() == '/channels_packages.htm') || ($location.path() == '')) {
                    $location.path('channel-lineup');
                }
                $scope.goHere = function(here) {
                    $location.path(here);
                }
                var dataProg = true,
                    ppObj = {
                        "name": "Programming Package",
                        "url": "programming-package",
                        "src": "views/programming_package.htm?@@BUSTER@@"
                    },
                    ocObj = {
                        "name": "Offer Calculator",
                        "url": "offer-calculator",
                        "src": "views/offer_calculator.htm?@@BUSTER@@"
                    },
                    tools = [{
                        "name": "Channel Lineup",
                        "url": "channel-lineup",
                        "src": "views/channel_lineup.htm?@@BUSTER@@"
                    }, {
                        "name": "Package Compare",
                        "url": "package-compare",
                        "src": "views/package_compare.htm?@@BUSTER@@"
                    }, {
                        "name": "Package Details",
                        "url": "package-details",
                        "src": "views/package_details.htm?@@BUSTER@@"
                    }];
                if (dataProg) {
                    tools.splice(2, 0, ppObj);
                    tools.push(ocObj);
                }
                $scope.tools = tools;
                $scope.$watch(function() {
                    return $location.path();
                }, function(params) {
                    $scope.page = params.substring(1);
                }, true);
                $scope.$watch('page', function() {
                    $location.path($scope.page);
                });
            }
        ]);
}(window.angular));