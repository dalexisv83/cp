app.controller('OC_Controller',['$scope', '$http',
    function ($scope, $http) {
        "use strict";
        var init = function (response) {
            $scope.packages = response.data;
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
                $scope.submitted = $scope.current = $scope.requested = $scope.stb_promo = $scope.promo_pricing = $scope.num_rec = $scope.stb_promo = $scope.credit = null;
                $scope.num_rec = "";
                $scope.display = false;
                $scope.invalid = false;
            };
            $scope.receivers = [1, 2, 3, 4, 5, 6];
            $scope.calculate = function () {
                if ($scope.current && $scope.requested && $scope.num_rec > -1 && $scope.stb_promo && $scope.promo_pricing != undefined) {
                    $scope.invalid = false;
                    $scope.grey = false;
                    $scope.cCur = $scope.current;
                    $scope.cReq = $scope.requested;
                    $scope.cDisc = $scope.promo_pricing ? $scope.current[$scope.stb_promo.id].disc : 0;
                    $scope.cRecFee = $scope.num_rec * 7;
                    $scope.cCredit = Math.min(0,($scope.requested[$scope.stb_promo.id].price + $scope.cDisc) - ($scope.requested[2].price + $scope.cDisc + $scope.cRecFee));
                    $scope.totals = ($scope.requested[2].price + $scope.cDisc) + $scope.cRecFee + Math.max(0, $scope.cCredit);
                    $scope.display = true;
                } else {
                    $scope.invalid = true;
                }
            }
        };
        $http.get('assets/datasource/OfferCalculator.js').then(function successCallback(response) {
            init(response);
        }, function errorCallback(response) {
            throw new Error('Data request failed:\n' + JSON.stringify(response));
        });
    }
]);
