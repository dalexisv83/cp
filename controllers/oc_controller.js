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
        };
        $http.get('assets/datasource/OfferCalculator.js').then(function successCallback(response) {
            init(response);
        }, function errorCallback(response) {
            throw new Error('Data request failed:\n' + JSON.stringify(response));
        });
    }
]);
