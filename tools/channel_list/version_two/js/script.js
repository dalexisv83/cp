app.controller('CL_Controller',['$scope', '$http', '$window', '$timeout',
    function($scope, $http, $window, $timeout) {
    "use strict";
    var w = angular.element($window),
        init = function(response) {
            /*global AdSales, smallGrid, config, bigGrid, searchBox, programmingHeaders, columnSorter, reset, toolTip, commentBtn */
            /*jslint newcap: true */
            var featured_packages = response.data.featured_packages.sort(function(a, b) {
                "use strict";
                    return a.sortOrder - b.sortOrder;
                }),
                channels = response.data.channels,
                ad_channels = AdSales.channels,
                data_type = response.data.type;

                'use strict';
                var small_grid,
                columns,
                big_grid,
                search_box,
                cell_width,
                programming_headers,
                nameSorter = $('#nameSorter'),
                channelNumberSorter = $('#channelNumberSorter'),
                callLetterSorter = $('#callLetterSorter'),
                genreSorter = $('#genreSorter'),
                channelNameSortStart = $('#channelNameSortStart'),
                channelNumberSortStart = $('#channelNumberSortStart'),
                callLetterSortStart = $('#callLetterSortStart'),
                genreSortStart = $('#genreSortStart'),
                tool_tip_btn = $('#genreLegend'),
                genre_codes_container = $('#genreCodes'),
                btn = $('#comment_btn'),
                column_sorter,
                tooltip,
                class_name,
                comment_btn;

                small_grid = new smallGrid(config.rowHeightShort,'containerSmall',featured_packages);
                small_grid.setOptions(true,false);
                small_grid.setColumns();
                small_grid.setChannels();
                //small_grid.render();

                //small grid columns are the same with the big grid
                columns = small_grid.getColumns();

                //initialize the big grid
                big_grid = new bigGrid(config.rowHeightTall,'container',featured_packages,data_type);
                big_grid.setOptions(true,false);
                big_grid.setColumns(columns);
                big_grid.setChannels(channels);
                big_grid.setChannels(ad_channels);
                //big_grid.render();

                //activate the search box
                search_box = new searchBox('txtSearch',big_grid,'messageBox','reset','active');
                search_box.autoSearch();

                //get the width for each big_grid cell
                cell_width = big_grid.getNarrowCellWidth();
                programming_headers = new programmingHeaders('packageHeaderContainer',featured_packages,cell_width);
                //programming_headers.render();

                //rotate package headers
                //programming_headers.rotate(config.localhost,config.deg,config.y_diff);

                //initialize column sorting
                column_sorter = new columnSorter('channel_name',nameSorter,channelNumberSorter,callLetterSorter,genreSorter,
                                            channelNameSortStart,channelNumberSortStart,callLetterSortStart,genreSortStart);
                column_sorter.enableChannelNameSort();
                column_sorter.enableChannelNumberSort();
                column_sorter.enableCallLetterSort();
                column_sorter.enableGenreSort();

                //initialize tooltip
                tooltip = new toolTip(tool_tip_btn);
                //activate the genre codes tooltip
                tooltip.genreToolTip(genre_codes_container);

                //initiate the comment btn
                class_name = 'comment-btn'; //add a class of comment-btn
                comment_btn = new commentBtn(btn,class_name,config.baseUrlPath);
                comment_btn.init();

                var stopRenderWatch = $scope.$watch(
                    function() {
                        return $scope.$parent.page;
                    },
                    function(params) {
                        if (params == 'channel-lineup') {
                            stopRenderWatch();
                            small_grid.render();
                            big_grid.render();
                            programming_headers.render();
                            programming_headers.rotate(config.localhost,config.deg,config.y_diff);
                            //activate the package filters
                            big_grid.activateHdChannelsFilter(search_box,'messageBox','reset','active');
                            big_grid.activateRegularChannelsFilter(search_box,'messageBox','reset','active');
                            // sort hack
                            $('#container .slick-header-columns').children().eq(0).trigger('click');
                            $('#container .slick-header-columns').children().eq(0).trigger('click');
                            $scope.clLoaded = true;
                        }
                    },
                    true
                );
            w.bind('resize', function() {
                big_grid.grid.resizeCanvas();
                small_grid.grid.resizeCanvas();
            });
        },
        stopWatching = $scope.$watch(
            function() {
                return $scope.$parent.page;
            },
            function(params) {
                if (params == 'channel-lineup') {
                    stopWatching();
                    $http.get('http://vwecda05.testla.testfrd.directv.com/toolmanager/index.php/ChannelLineupRes').then(function successCallback(response) {
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