(function(angular) {
    'use strict';
    angular.module('channelspackages')
        .controller('MainCtrl', ['$scope', '$location',
            function($scope, $location) {
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
        ])
        .service('pathFinder', ['URLS', '$location', '$http',
            function (URLS, $location, $http) {
                var getBasePath = function (net) {
                        var basePath;
                        switch (net) {
                            case 'intra':
                                basePath = URLS.API_INTRA;
                                break;

                            case 'stage':
                                basePath = URLS.API_STAGE;
                                break;

                            case 'extra':
                                basePath = URLS.API_EXTRA;
                                break;

                            case 'test':
                                basePath = URLS.API_DEV;
                                break;
                        }
                        return basePath + 'web/api/';
                    },
                    promise = function (net, apiName, query) {
                        return $http.jsonp(getBasePath(net) + apiName + '/' + query + '?callback=JSON_CALLBACK', {
                            cache: true,
                            headers: {
                                'Accept': 'application/json, text/javascript'
                            }
                        });
                    };
                return {
                    callApi: function (apiName, query, localFile) {
                        var net;
                        if ($location.host() == 'vwecda05.testla.testfrd.directv.com' || $location.host() == 'localhost') {
                            net = 'test';
                            return promise(net, apiName, query);
                        } else if ($location.host() == 'zlp09097.vci.att.com' || $location.absUrl().indexOf('sandbox') > -1) {
                            net = 'stage';
                            return promise(net, apiName, query);
                        } else {
                            return $http.jsonp(URLS.API_INTRA + 'web/api/values/1?callback=JSON_CALLBACK').then(function successTest(response) {
                                net = 'intra';
                                return promise(net, apiName, query);
                            }, function errorTest(response) {
                                return $http.jsonp(URLS.API_EXTRA + 'web/api/values/1?callback=JSON_CALLBACK').then(function successTest(response) {
                                    net = 'extra';
                                    return promise(net, apiName, query);
                                }, function errorTest(response) {
                                    return $http.get('assets/datasource/' + localFile + '?callback=JSON_CALLBACK', { cache: true });
                                    //$scope.errorMsg = "Unable to reach the data APIs.<br />Please contact support for this tool at <a href='mailto://g06292@att.com'>g06292@att.com</a>"
                                    //throw new Error(JSON.stringify(response));
                                });
                            });
                        }
                    }
                };
            }
        ]);
}(window.angular));