app.controller('PP_Controller', ['$scope', '$filter', '$http', 
    function ($scope, $filter, $http) {
        "use strict";
        $http.get('assets/datasource/ProgrammingPackageDisplay.js').then(function successCallback(response) {
            $scope.products = response.data.products;
            $scope.pPlan = $scope.products.find(function (obj) {
                return obj.id == 202;
            });
            $scope.pPlanPrem = $scope.products.find(function (obj) {
                return obj.id == 205;
            });
        }, function errorCallback(response) {
            throw new Error('Data request failed:\n' + JSON.stringify(response));
        });
        
        var getSubTotal = function (chkdarr, pricearr, category, firstExempt, multi, credit) {
                var total = 0,
                    match,
                    c;
                for (var c in chkdarr) {
                    if (c >= 300 && c <= 306 && (chkdarr[7] || chkdarr[20])) {
                        continue;
                    } else {
                        if (chkdarr[c]) {
                            match = pricearr.find(function (obj) {
                                if (category && firstExempt) {
                                    return c == obj.id && category == obj.calc && obj.first;
                                } else if (category) {
                                    return c == obj.id && category == obj.calc;
                                } else if (firstExempt) {
                                    return c == obj.id && obj.first;
                                }
                                return c == obj.id;
                            });
                            if (match) {
                                if (match.id == 155 && credit && multi) {
                                    total += match.price * multi - match.price;
                                } else if (match.id == 155 && multi) {
                                    total += match.price * multi;
                                } else if ((match.id == 155 && !credit) || match.id != 155) {
                                    total += match.price;
                                }
                            }
                        }
                    }
                }
                return total;
        };
        $scope.getTotals = function () {
            $http.get('assets/datasource/ProgrammingPackagePrices.js',{cache:true}).then(function successCallback(response) {
                $scope.prices = response.data.pricing;
                $scope.baseTotal = getSubTotal($scope.checked, $scope.prices, 'BASE');
                $scope.premTotal = getSubTotal($scope.checked, $scope.prices, 'PREMIUM');
                $scope.xtraTotal = getSubTotal($scope.checked, $scope.prices, 'EXTRA', false, $scope.recX, $scope.primary_credit);
                $scope.mon1Total = getSubTotal($scope.checked, $scope.prices, null, true, $scope.recX, $scope.primary_credit);
                $scope.mon2Total = getSubTotal($scope.checked, $scope.prices, null, false, $scope.recX, $scope.primary_credit);
                if ($scope.checked[202] || $scope.checked[205]) {
                    $scope.summShow = true;
                    if ($scope.checked[202]) {
                        $scope.pPlanShow = true;
                    } else {
                        $scope.pPlanShow = false;
                    }
                    if ($scope.checked[205]) {
                        $scope.pPlanPremShow = true;
                    } else {
                        $scope.pPlanPremShow = false;
                    }
                    $scope.summTotal = getSubTotal($scope.checked, $scope.prices, 'SUMMARY', false);
                } else {
                    $scope.summShow = false;
                }
            }, function errorCallback(response) {
                throw new Error('Data request failed:\n' + JSON.stringify(response));
            });
        };
        
        $scope.reset = function() {
            $scope.recX = '';
            $scope.recNum = [1, 2, 3, 4, 5, 6];
            $scope.primary_credit = true;
            $scope.base_cat = "english";
            $scope.base = { selected: null };
            $scope.checked = [];
            $scope.checked[155] = true;
            $scope.premChkd = [];
            $scope.baseTotal = 0;
            $scope.premTotal = 0;
            $scope.xtraTotal = 0;
            $scope.summTotal = 0;
            $scope.mon1Total = 0;
            $scope.mon2Total = 0;
            $scope.summShow = false;
            $scope.pPlanShow = false;
            $scope.pPlanPremShow = false;
        }
        $scope.reset();

        $scope.$watch('base.selected', function (newBase, oldBase, scope) {
            var i;
            if (newBase != oldBase) {
                scope.checked[oldBase] = null;
                scope.checked[newBase] = true;
            }
            if (newBase == 7 || newBase == 20) {
                for (i = 0; i < 5; i++) {
                    scope.premChkd[i] = true;
                }
            } else if (oldBase == 7 || oldBase == 20) {
                for (i = 0; i < 5; i++) {
                    scope.premChkd[i] = false;
                }
            }
        });

        $scope.$watchCollection('premChkd', function (newV, oldV, scope) {
            var i,
                len = scope.premChkd.filter(function (v) { return v }).length;
            for (i = 300; i < 300 + len; i++) {
                scope.checked[i] = true;
            }
            for (i = 304; i > 304 - (5 - len); i--) {
                scope.checked[i] = null;
            }
            if (scope.premChkd[0] == true) {
                scope.checked[305] = true;
                if (len > 1) {
                    scope.checked[306] = true;
                }
            } else if (scope.premChkd[0] != true) {
                scope.checked[305] = null;
                scope.checked[306] = null;
            }
        });
    }
]);

app.filter('unique', function () {
    return function (arr, field) {
        return _.uniq(arr, function (a) { return a[field]; });
    };
});