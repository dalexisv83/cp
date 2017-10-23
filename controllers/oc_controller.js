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
            $scope.calculate = function () {
                $scope.loading = true;
                $http.get('assets/datasource/bans.js').then(function successCallback(bans) {
                    $scope.bans = bans.data;
                    $scope.grey = false;
                    $scope.cCur = $scope.current;
                    $scope.cReq = $scope.requested;
                    $scope.stb_promo = $scope.bans[$scope.ban] ? {
                        "id": 3,
                        "label": "7/17 \u2013 10/22/16 (2STB)",
                        "num": 2
                    } : {
                        "id": 1,
                        "label": "4/14 \u2013 7/16/16 (4STB)",
                        "num": 4
                    };
                    $scope.cNumRec = $scope.num_rec
                    $scope.stbPrice = $scope.current.platform == "DIRECTV" ? 7 : 10;
                    $scope.cDisc = $scope.promo_pricing ? $scope.current[$scope.stb_promo.id].disc : 0;
                    $scope.cRecFee = $scope.cNumRec * $scope.stbPrice;
                    $scope.cCredit = Math.min(0, ($scope.requested[$scope.stb_promo.id].price + $scope.cDisc) - ($scope.requested[2].price + $scope.cDisc + $scope.cRecFee));
                    $scope.totals = ($scope.requested[2].price + $scope.cDisc) + $scope.cRecFee + Math.max(0, $scope.cCredit);
                    $scope.display = true;
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
    }
]);
