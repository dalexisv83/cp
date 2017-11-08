app.controller('OC_Controller',['$scope', '$http',
    function ($scope, $http) {
        "use strict";
        var init = function (packages) {
            $scope.packages = packages.data;
            $scope.promos = [
                {
                    "id": 1,
                    "label": "4/14 \u2013 7/16/16 (4STB)",
                    "num": 4
                }, {
                    "id": 3,
                    "label": "7/17 \u2013 10/22/16 (2STB)",
                    "num": 2
                }, {
                    "id": 1,
                    "label": "10/23 \u2013 current (4STB)",
                    "num": 4
                }
            ];
            $scope.reset = function () {
                $scope.submitted = $scope.current = $scope.requested = $scope.stb_promo = $scope.promo_pricing = $scope.num_rec = $scope.credit = $scope.ban = null;
                $scope.num_rec = "";
                $scope.display = false;
            };
            $scope.receivers = [1, 2, 3, 4, 5, 6];
            $scope.calculate = function(inputBan) {
                var doCalc = function(bans) {
                    $scope.bans = typeof bans.data === 'string' ? bans.data : bans.data[inputBan] ? bans.data[inputBan] : "4";
                    $scope.grey = false;
                    $scope.cCur = $scope.current;
                    $scope.cReq = $scope.requested;
                    //$scope.stb_promo = $scope.bans[$scope.ban] ? {
                    //    "id": 3,
                    //    "label": "7/17 \u2013 10/22/16 (2STB)",
                    //    "num": 2
                    //} : {
                    //    "id": 1,
                    //    "label": "4/14 \u2013 7/16/16 (4STB)",
                    //    "num": 4
                    //};
                    $scope.pricing = {
                        "U-verse": {
                            "3": 2,
                            "4": 12
                        },
                        "DIRECTV": {
                            "4": 7
                        }
                    };
                    $scope.cNumRec = $scope.num_rec
                    //$scope.stbPrice = $scope.current.platform == "DIRECTV" ? 7 : 10;
                    //$scope.cDisc = $scope.promo_pricing ? $scope.current[$scope.stb_promo.id].disc : 0;
                    //$scope.cRecFee = $scope.cNumRec * $scope.stbPrice;
                    //$scope.promoRec = Math.min($scope.cRecFee, ($scope.stb_promo.num - 1) * $scope.stbPrice);
                    //$scope.cCredit = $scope.cNumRec + 1 <= $scope.stb_promo.num ? Math.min(0, ($scope.requested[$scope.stb_promo.id].price + $scope.cDisc) - ($scope.requested[2].price + $scope.cDisc + $scope.promoRec)) : 0;
                    //$scope.totals = $scope.requested[2].price + $scope.cDisc + $scope.cRecFee + $scope.cCredit;
                    if (($scope.cCur.platform == 'U-verse' && $scope.cCur == $scope.cReq) || $scope.bans == "2") {
                        $scope.display = false;
                    } else {
                        $scope.display = $scope.pricing[$scope.cReq.platform][$scope.cNumRec + 1] ? $scope.pricing[$scope.cReq.platform][$scope.cNumRec + 1] : false;
                    }
                }
                $scope.loading = true;
                $http.jsonp($scope.fullURL + inputBan + '?callback=JSON_CALLBACK', { cache: true }).then(function successCallback(bans) {
                    doCalc(bans);
                    $scope.loading = false;
                }, function errorCallback(bans) {
                    throw new Error('Data request failed:\n' + JSON.stringify(bans));
                    $scope.banError = true;
                    $scope.loading = false;
                });
            }
        };
        $http.get('assets/datasource/OfferCalculator.js').then(function successCallback(packages) {
            init(packages);
        }, function errorCallback(packages) {
            throw new Error('Data request failed:\n' + JSON.stringify(packages));
        });
        $scope.addRc1 = function(label) {
            return label == "DIRECTV" ? label + " RC1" : label;
        }
    }
]);

app.directive('validationError', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            scope.$watch(attrs['validationError'], function (errMsg) {
                if (elem[0] && elem[0].setCustomValidity) { // HTML5 validation
                    elem[0].setCustomValidity(errMsg);
                }
                if (ctrl) { // AngularJS validation
                    ctrl.$setValidity('validationError', errMsg ? false : true);
                }
            });
        }
    }
});