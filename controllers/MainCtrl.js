(function(angular) {
    'use strict';
    angular.module('channelspackages')
        .controller('MainCtrl', ['$scope', '$location',
            function($scope, $location) {
                $scope.goHere = function(here) {
                    $location.path(here);
                }
                $scope.tools = [{
                    "name": "Package Compare",
                    "url": "package-compare",
                    "src": "views/package_compare.htm"
                }, {
                    "name": "Channel Lineup",
                    "url": "channel-lineup",
                    "src": "views/channel_lineup.htm"
                }, {
                    "name": "Programming Package",
                    "url": "programming-package",
                    "src": "views/programming_package.htm"
                }];
                // $scope.trusted = {};
                // for (var i=0;i<$scope.tools.length;i++) {
                //     $scope.trusted[$scope.tools[i].url] = $sce.trustAsResourceUrl($scope.tools[i].src);
                // }
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