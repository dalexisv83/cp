app.controller('PD_Controller',['$scope', '$http', '$location',
    function($scope, $http, $location) {
    "use strict";
    var init = function(response) {

                var stopRenderWatch = $scope.$watch(
                    function() {
                        return $scope.$parent.page;
                    },
                    function(params) {
                        if (params == 'package-details') {
                            stopRenderWatch();

                            $scope.selPackages = response.data.package_compare.datasource;

                            $scope.$watch(function() {
                                return $location.search();
                            }, function(params) {
                                $scope.pid = params.pid;
                                // $scope.package = $scope.selPackages.find(function(qPack) {
                                //     if ($scope.pid) {
                                //         console.log(qPack.platform + "\n" + qPack.id + "\n" + $scope.pid);
                                //         return qPack.platform === 'DTVRES' && qPack.id === $scope.pid;
                                //     }
                                // });

                                // $scope.channels = response.data.channels.filter(function(qChan) {
                                //     if ($scope.package) {
                                //             var i,
                                //             len = $scope.package.channels.length;
                                //         for (i=0;i<len;i++) {
                                //             if ($scope.package.channels[i].id === qChan.id){
                                //                 return true;
                                //             }
                                //         }
                                //     }
                                // });
                            });
                            $scope.$watch('pid', function() {
                                $location.search('pid', $scope.pid);

                                $scope.package = $scope.selPackages.find(function(qPack) {
                                    if ($scope.pid) {
                                        return qPack.platform === 'DTVRES' && qPack.id === $scope.pid;
                                    }
                                });

                                $scope.channels = response.data.channels.filter(function(qChan) {
                                    if ($scope.package) {
                                            var i,
                                            len = $scope.package.channels.length;
                                        for (i=0;i<len;i++) {
                                            if ($scope.package.channels[i].id === qChan.id){
                                                return true;
                                            }
                                        }
                                    }
                                });
                            });

                            $scope.pdLoaded = true;
                        }
                    },
                    true
                );
        },
        stopWatching = $scope.$watch(
            function() {
                return $scope.$parent.page;
            },
            function(params) {
                if (params == 'package-details') {
                    stopWatching();
                    $http.get('http://vwecda05.testla.testfrd.directv.com/toolmanager/index.php/PageListRes').then(function successCallback(response) {
                        init(response);
                    }, function errorCallback(response) {
                        $http.get('http://localhost/rover_tools/channelsjs/channels.js').then(function successCallback(response) {
                            init(response);
                        }, function errorCallback(response) {
                            // called asynchronously if an error occurs
                            // or server returns response with an error status.
                            throw new Error('Data request failed: ' + JSON.stringify(response));
                        });
                    });
                }
            },
            true
        );
}]);