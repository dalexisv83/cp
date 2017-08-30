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
        
        var getSubTotal = function (chkdarr, pricearr, category, firstExempt, multi, credit, mduCat) {
                var total = 0,
                    match,
                    c;
                for (var c in chkdarr) {
                    if (c >= 300 && c <= 306 && (chkdarr[7] || chkdarr[20] || chkdarr[240] || chkdarr[243] || chkdarr[244])) {
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
                                if (match.id == 155 && mduCat == 'JMW/TMW' && multi < 5) {
                                    total += 0;
                                } else if (match.id == 155 && credit && multi) {
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
                $scope.grey = false;
                $scope.prices = response.data.pricing;
                $scope.baseTotal = getSubTotal($scope.checked, $scope.prices, 'BASE');
                $scope.premTotal = getSubTotal($scope.checked, $scope.prices, 'PREMIUM');
                $scope.xtraTotal = getSubTotal($scope.checked, $scope.prices, 'EXTRA', false, $scope.recX, $scope.primary_credit, $scope.mdu_cat);
                $scope.mon1Total = getSubTotal($scope.checked, $scope.prices, null, true, $scope.recX, $scope.primary_credit, $scope.mdu_cat);
                $scope.mon2Total = getSubTotal($scope.checked, $scope.prices, null, false, $scope.recX, $scope.primary_credit, $scope.mdu_cat);
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
                var stop = $scope.$watchCollection('checked', function(oldForm, newForm) {
                    if (newForm != oldForm) {
                        $scope.grey = true;
                        stop();
                    }
                });
            }, function errorCallback(response) {
                throw new Error('Data request failed:\n' + JSON.stringify(response));
            });
        };
        
        $scope.reset = function() {
            $scope.recX = 1;
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
            $scope.grey = true;
            $scope.premDisabled = false;
        };
        $scope.reset();

        $scope.$watch('base.selected', function (newBase, oldBase, scope) {
            var i;
            if (newBase != oldBase) {
                scope.checked[oldBase] = null;
                scope.checked[newBase] = true;
            }
            if (newBase == 7 || newBase == 20 || newBase == 240 || newBase == 243 || newBase == 244) {
                for (i = 0; i < 5; i++) {
                    scope.premChkd[i] = true;
                    scope.premDisabled = true;
                }
            } else if (oldBase == 7 || oldBase == 20 || oldBase == 240 || oldBase == 243 || oldBase == 244) {
                for (i = 0; i < 5; i++) {
                    scope.premChkd[i] = false;
                    scope.premDisabled = false;
                }
            }
        });

        $scope.$watchCollection('premChkd', function (newV, oldV, scope) {
            var i;
                scope.len = scope.premChkd.filter(function (v) { return v }).length;
            for (i = 300; i < 300 + scope.len; i++) {
                scope.checked[i] = true;
            }
            for (i = 304; i > 304 - (5 - scope.len) ; i--) {
                scope.checked[i] = null;
            }
            if (scope.premChkd[0] == true) {
                scope.checked[305] = true;
                if (scope.len > 1) {
                    scope.checked[306] = true;
                } else {
                    scope.checked[306] = null;
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

app.filter('mduTypeFilter', function () {
    return function (arr, mduCat) {
        if (arr) {
            var cat,
                filteredArr;
            switch (mduCat) {
                case 'MDU/JDU':
                    cat = 'MDU/JDU';
                    break;
                case 'JMU/TMU':
                    cat = 'JMU/TMU/JMW/TMW';
                    break;
                case 'JMW/TMW':
                    cat = 'JMU/TMU/JMW/TMW';
                    break;
            }
            filteredArr = arr.filter(function (package) {
                return package.mduType == cat;
            });
            return filteredArr;
        }
    }
});