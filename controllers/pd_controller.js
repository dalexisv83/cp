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
                    $http.get('assets/data/PageListRes.js').then(function successCallback(response) {
                        init(response);
                    }, function errorCallback(response) {
                        throw new Error('Data request failed:\n' + JSON.stringify(response));
                    });
                }
            },
            true
        );
}]);

// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    }
  });
}