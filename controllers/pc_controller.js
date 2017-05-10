app.controller('AppController', ['$scope','$filter', '$http', '$cookies',
    function ($scope, $filter, $http, $cookies) {
    'use strict';

    var stopWatching = $scope.$watch(
        function() {
            return $scope.$parent.page;
        },
        function(params) {
            if (params == 'package-compare') {
                stopWatching();
                $http.get('assets/datasource/PackageCompareRes.js').then(function successCallback(response) {
        var alert_message = $(".alert_message"),
            refresher = function() {
                var diff,
                    channels_provider_diff;

                if (($scope.show_current_channels) && ($scope.current_pkg)) {
                    $scope.current_channels = $filter('byGenre')($scope.dataStore.getChannels($scope.current_pkg.channels,$scope.current_pkg.type),$scope.gFilter);
                }
                if (($scope.show_requested_channels) && ($scope.requested_pkg)) {
                    $scope.requested_channels = $filter('byGenre')($scope.dataStore.getChannels($scope.requested_pkg.channels,$scope.requested_pkg.type),$scope.gFilter);
                }
                if (($scope.current_pkg) && ($scope.requested_pkg)) {
                    diff = $scope.dataStore.getPackageDiff($scope.current_pkg,$scope.requested_pkg);

                    if (!$.isEmptyObject(diff)) {
                        $scope.gained_channels_limit = min_limit;
                        $scope.lost_channels_limit = min_limit;
                        channels_provider_diff = $scope.dataStore.diffChannelsByProvider($scope.current_pkg,$scope.requested_pkg,diff);
                        $scope.gained_channels = $filter('byGenre')(channels_provider_diff.gained_channels, $scope.gFilter);
                        $scope.lost_channels = $filter('byGenre')(channels_provider_diff.lost_channels, $scope.gFilter);
                    }
                }
            };

        $scope.current_pkg = null; //holds the selected current package object
        $scope.requested_pkg = null; //holds the selected requested package object

        $scope.current_pkgs = []; //holds the collection of packages on the current package dropdown
        $scope.requested_pkgs = []; //holds the collection of packages on the requested package dropdown

        $scope.current_channels = null;  //holds the collection of current packages's channels
        $scope.requested_channels = null; //holds the collection of requested package's channels

        $scope.gained_channels = null; //holds the gained channels
        $scope.lost_channels = null; //holds the lost channels

        $scope.dataStore = new DataStore(response.data); //expose the datasource class to the view
        $scope.UrlFormatter = new UrlFormatter(localhost); //expose the urlformatter class to the view
        $scope.Utility = new Utility(); //expose the utility class to the view

        $scope.sorted_column = ''; //holds the column currently sorted

        $scope.show_current_channels = true; //determine to show/hide the current channels
        $scope.show_requested_channels = true; //determine to show/hide the requested channels
        $scope.show_gained_channels = false; //determine to show/hide the gained channels
        $scope.show_lost_channels = false; //determine to show/hide the lost channels

        $scope.saved_amt = 0; //amount being saved
        $scope.pay_more_amt = 0; //amount that will pay more

        $scope.volumes = []; //hold the collection of volumes
        $scope.volume = null; //hold the value for the selected volume

        $scope.sortType = 'channelname';

        $scope.current_pkg_limit = min_limit;
        $scope.requested_pkg_limit = min_limit;
        $scope.gained_channels_limit = min_limit;
        $scope.lost_channels_limit = min_limit;

        $scope.gFilter = {
            "int": true,
            "fam": true,
            "lif": true,
            "mov": true,
            "new": true,
            "pub": true,
            "snc": true,
            "spa": true,
            "spt": true,
            "ad": true
        };

        /**
         * Increases the limit initially set for ng-repeat everytime the user scrolls a dynamic channel
         */
        $scope.loadMore = function(limit) {
            if (limit <= max_limit) {
              limit = limit + min_limit;
            }
            return limit;
        };

        $scope.resetLimit = function(){
            $scope.current_pkg_limit = min_limit;
            $scope.requested_pkg_limit = min_limit;
            $scope.gained_channels_limit = min_limit;
            $scope.lost_channels_limit = min_limit;
            $scope.$broadcast("items_changed");
        };

        var cur_curpkg = null,
            cur_curchs = null,
            cur_reqpkg = null,
            cur_reqchs = null,
            cur_gndchs = null,
            cur_lstchs = null,
            cur_shwgnd = null,
            cur_shwlst = null,
            cur_svdamt = 0,
            cur_payamt = 0,
            cur_resact = false,
            cur_shwgwl = null,
            cur_curczn = null,
            cur_reqczn = null;
        $scope.$watch(function () {
            return $cookies.pcOverlay;
        }, function (value) {
            $scope.pcOverlay = value;
            if (!value || value == 'show') {
                cur_curpkg = $scope.current_pkg;
                cur_curchs = $scope.current_channels;
                cur_reqpkg = $scope.requested_pkg;
                cur_reqchs = $scope.requested_channels;
                cur_gndchs = $scope.gained_channels;
                cur_lstchs = $scope.lost_channels;
                cur_shwgnd = $scope.show_gained_channels;
                cur_shwlst = $scope.show_lost_channels;
                cur_svdamt = $scope.saved_amt;
                cur_payamt = $scope.pay_more_amt;
                cur_resact = $scope.resetActive;
                cur_shwgwl = $(".alert_message").parent().css('display');
                $scope.show_gained_channels = true;
                $scope.show_lost_channels = true;
                cur_curczn = $('select[chosen="current_pkgs"]').val();
                cur_reqczn = $('select[chosen="requested_pkgs"]').val();
                if ($scope.current_pkg == null) {
                    $scope.$watchCollection(function () {
                        return $scope.current_pkgs;
                    }, function (value) {
                        if (value) {
                            $scope.current_pkg = value[1];
                        }
                    });
                }
                if ($scope.requested_pkg == null) {
                    $scope.$watchCollection(function () {
                        return $scope.requested_pkgs;
                    }, function (value) {
                        if (value) {
                            $scope.requested_pkg = value[5];
                        }
                    });
                }
            }
            if (value == 'hide') {
                $scope.current_pkg = cur_curpkg;
                $scope.current_channels = cur_curchs;
                $scope.requested_pkg = cur_reqpkg;
                $scope.requested_channels = cur_reqchs;
                $scope.gained_channels = cur_gndchs;
                $scope.lost_channels = cur_lstchs;
                $scope.show_gained_channels = cur_shwgnd;
                $scope.show_lost_channels = cur_shwlst;
                $scope.saved_amt = cur_svdamt;
                $scope.pay_more_amt = cur_payamt;
                $scope.resetActive = cur_resact;
                $(".alert_message").parent().css('display', cur_shwgwl);
                $('select[chosen="current_pkgs"]').val(cur_curczn).trigger('chosen:updated');
                $('select[chosen="requested_pkgs"]').val(cur_reqczn).trigger('chosen:updated');
            }
        });
        $scope.$watch('pcOverlay', function () {
            $cookies.pcOverlay = $scope.pcOverlay;
        });

        /**
         * Called on page load
         */
        $scope.init = function(){
           var requested_pkg_ids = response.data.package_compare.requested, current_pkg_ids = response.data.package_compare.current;

           //fill the packages dropdowns
           $scope.requested_pkgs = $scope.dataStore.getPackages(requested_pkg_ids);
           $scope.current_pkgs = $scope.dataStore.getPackages(current_pkg_ids);
           //if there is a volume property and only it is still empty
           if (response.data.package_compare.volumes && $scope.volumes.length === 0){
             $scope.volumes = $scope.dataStore.getVolumes(response.data.package_compare.volumes);
           }
            var stopRenderWatch = $scope.$watch(
                function() {
                    return $scope.$parent.page;
                },
                function(params) {
                    if (params == 'package-compare') {
                        $scope.$parent.pcLoaded = true;
                        stopRenderWatch();
                    }
                },
                true
            );
        };

        /**
         * Call your jquery functionality here
         */
        angular.element(document).ready(function () {
            var //tool_tip_btn = $('#genreLegend'),
            //tooltip = new ToolTip(tool_tip_btn),
            //genre_codes_container = $('#genreCodes'),
            btn = $('#comment_btn'),
            root_url = '%%pub%%',
            class_name = 'comment-btn', //add a class of comment-btn
            comment_btn = new CommentBtn(btn,class_name,root_url);

            //initialize tooltip
            //tooltip.genreToolTip(genre_codes_container);

            //initiate the comment btn
            comment_btn.init();
        });

        //watch change in selected volume
        $scope.$watchCollection('volume', function() {
            $scope.init();
            if ($scope.current_pkg && $scope.requested_pkg) {
                //get the price diff. to determine if customer will save or pay more
                var price_diff = $scope.dataStore.getPriceDiff($scope.current_pkg,$scope.requested_pkg,$scope.volume);
                if (!jQuery.isEmptyObject(price_diff)) {
                 $scope.saved_amt = price_diff.saved_amt;
                 $scope.pay_more_amt = price_diff.pay_more_amt;
                }
            }
        });

        //watch for a change in current package
        $scope.$watchCollection('current_pkg', function() {
            return $scope.currentChange();
        });

        $scope.currentChange = function() {
            if ($scope.current_pkg) {

                try{
                   dcsMultiTrack("DCSext.tool_package_compare_selected_user_packages","Current package change");
                }catch (ignore) { }

                $scope.current_pkg_limit = min_limit; //reset the limit for current package to minimum

                $scope.saved_amt = 0;
                $scope.pay_more_amt = 0;

                //get the current channels out of the selected current package of the customer
                $scope.current_channels = $filter('byGenre')($scope.dataStore.getChannels($scope.current_pkg.channels,$scope.current_pkg.type),$scope.gFilter);
                $scope.current_count = $scope.current_pkg.count;

                //get the difference between the current and requested package
                var diff = $scope.dataStore.getPackageDiff($scope.current_pkg,$scope.requested_pkg),
                channels_provider_diff,
                price_diff = $scope.dataStore.getPriceDiff($scope.current_pkg,$scope.requested_pkg,$scope.volume);

                if (!$.isEmptyObject(diff)) {
                    $scope.gained_channels_limit = min_limit;
                    $scope.lost_channels_limit = min_limit;
                    channels_provider_diff = $scope.dataStore.diffChannelsByProvider($scope.current_pkg,$scope.requested_pkg,diff);
                    $scope.gained_channels = channels_provider_diff.gained_channels;
                    $scope.lost_channels = channels_provider_diff.lost_channels;
                }

                if (!$.isEmptyObject(price_diff)) {
                    $scope.saved_amt = price_diff.saved_amt;
                    $scope.pay_more_amt = price_diff.pay_more_amt;
                }

                $scope.$broadcast("items_changed");
                $scope.resetActive = true;
            }

        };

        $scope.update = function() {
            return refresher();
        };

        //watch for a change in requested package
        $scope.$watchCollection('requested_pkg', function() {
            return $scope.requestedChange();
        });

        $scope.requestedChange = function() {

            if ($scope.requested_pkg) {

                try{
                   dcsMultiTrack("DCSext.tool_package_compare_selected_user_packages","Current package change");
                }catch (ignore) { }

                $scope.requested_pkg_limit = min_limit;

                $scope.saved_amt = 0;
                $scope.pay_more_amt = 0;

                //get the requested channels out of the selected requested package of the customer
                $scope.requested_channels = $filter('byGenre')($scope.dataStore.getChannels($scope.requested_pkg.channels,$scope.requested_pkg.type), $scope.gFilter);
                $scope.requested_count = $scope.requested_pkg.count;

                //get the difference between the current and requested package
                var diff = $scope.dataStore.getPackageDiff($scope.current_pkg,$scope.requested_pkg),
                channels_provider_diff,
                //get the price diff. to determine if customer will save or pay more
                price_diff = $scope.dataStore.getPriceDiff($scope.current_pkg,$scope.requested_pkg,$scope.volume);

                if (!$.isEmptyObject(diff)) {
                    $scope.gained_channels_limit = min_limit;
                    $scope.lost_channels_limit = min_limit;
                    channels_provider_diff = $scope.dataStore.diffChannelsByProvider($scope.current_pkg,$scope.requested_pkg,diff);
                    $scope.gained_channels = $filter('byGenre')(channels_provider_diff.gained_channels, $scope.gFilter);
                    $scope.lost_channels = $filter('byGenre')(channels_provider_diff.lost_channels, $scope.gFilter);
                }

                if (!$.isEmptyObject(price_diff)) {
                    $scope.saved_amt = price_diff.saved_amt;
                    $scope.pay_more_amt = price_diff.pay_more_amt;
                }

                $scope.$broadcast("items_changed");

                //show package tip
                if($scope.requested_pkg.tip){
                    alert_message.parent().css('display','block');
                    alert_message.html($scope.requested_pkg.tip);
                }
                else{
                    alert_message.parent().css('display','none');
                    alert_message.html('');
                }
                $scope.resetActive = true;
            }
        };

        /**
         * Sort functionality for channels
         *
         * @param {mixed} channels collection of channel objects
         * @param {string} predicate the property to sort
         * @param {boolean} reverse
         */
        $scope.sort = function(predicate,reverse) {
            //assign the selected class to the scope
            $scope.sorted_column = $scope.Utility.selectedClass(predicate,reverse);
            $scope.sortType = predicate;
        };

        /**
         * Resets the whole datascopes as if the page just loaded
         */
        $scope.reset = function(){
            //reset current package
            $scope.current_pkg = null;
            $scope.requested_pkg = null;

            //reset the collection of current and requested packages's channels
            $scope.current_channels = null;
            $scope.requested_channels = null;

            //reset the gained and lost channels
            $scope.gained_channels = null;
            $scope.lost_channels = null;

            //reset the sorted column
            $scope.sorted_column = '';

            //reset all the show/hide pointers back to original values
            $scope.show_current_channels = true;
            $scope.show_requested_channels = true;
            $scope.show_gained_channels = false;
            $scope.show_lost_channels = false;

            //reset the saved and pay more amts
            $scope.saved_amt = 0;
            $scope.pay_more_amt = 0;

            //remove the growl message
            alert_message.parent().css('display','none');
            alert_message.html('');

            //reset volume
            $scope.volume = null;

            $scope.sortType = 'channelname';

            $scope.gFilter = {
                "int": true,
                "fam": true,
                "lif": true,
                "mov": true,
                "new": true,
                "pub": true,
                "snc": true,
                "spa": true,
                "spt": true,
                "ad": true
            };

            $scope.resetLimit();
            $scope.resetActive = false;
        };

        $scope.reloadit =  function(){
            $scope.$watchCollection('current_pkg');
            $scope.$apply();
        };

    }, function errorCallback(response) {
        throw new Error('Data request failed:\n' + JSON.stringify(response));
    });
            }
        },
        true
    );

    $(".close_notification").on('click', function(){$(".alert_message").parent().css('display','none');});
    $('#filterText').click(function(){
        $('#cl_genreCodes').show();
    });
    $('#genreX').click(function(e){
        e.stopPropagation();
        $('#cl_genreCodes').hide();
    });
}]);

app.filter('byGenre', function() {
    'use strict';
    return function(items, genreObj) {
        var k=0,
            trueGens = [],
            i=0,
            matches = [],
            itemLen = items.length;
        for (k in genreObj) {
            if (genreObj[k] === true) {
                trueGens.push(k);
            }
        }
        if (trueGens.length === 0) {
            matches = items;
        } else {
            for (i = 0; i < itemLen; i = i+1) {
                if ((items[i].genre) && (trueGens.indexOf(items[i].genre.toLowerCase()) > -1)) {
                    matches.push(items[i]);
                }
            }
        }
        return matches;
    };
});