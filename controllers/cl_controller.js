app.controller('CL_Controller',['$scope', '$http', '$window',
    function($scope, $http, $window) {
    "use strict";
    var init = function(response) {
            /*global AdSales, smallGrid, config, bigGrid, searchBox, programmingHeaders, columnSorter, reset, toolTip, commentBtn */
            /*jslint newcap: true */
            var featured_packages = response.data.featured_packages.sort(function(a, b) {
                "use strict";
                    return a.sortOrder - b.sortOrder;
                }),
                channels = response.data.channels,
                data_type = response.data.type;
                if ($window.matchMedia) {
                    var mql = $window.matchMedia('screen and (min-width: 1024px)'),
                        handleMediaMatch = function(mql) {
                            if (mql.matches) {
                                $scope.width = 50 / featured_packages.length + '%';
                                if(!$scope.$$phase) {
                                    $scope.$apply();
                                }
                            } else {
                                $scope.width = 66 / featured_packages.length + '%';
                                if(!$scope.$$phase) {
                                    $scope.$apply();
                                }
                            }
                        };
                    mql.addListener(handleMediaMatch);
                    handleMediaMatch(mql);
                } else {
                    $scope.width = 66 / featured_packages.length + '%';
                }
                $scope.type = response.data.type;
                $scope.packages = featured_packages;
                $scope.channels = response.data.channels;

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

                var stopRenderWatch = $scope.$watch(
                    function() {
                        return $scope.$parent.page;
                    },
                    function(params) {
                        if (params == 'channel-lineup') {
                            stopRenderWatch();

                            // small_grid = new smallGrid(config.rowHeightShort,'containerSmall',featured_packages);
                            // small_grid.setOptions(true,false);
                            // small_grid.setColumns();
                            // small_grid.setChannels();
                            // small_grid.render();

                            // //small grid columns are the same with the big grid
                            // columns = small_grid.getColumns();

                            // //initialize the big grid
                            // big_grid = new bigGrid(config.rowHeightTall,'container',featured_packages,data_type);
                            // big_grid.setOptions(true,false);
                            // big_grid.setColumns(columns);
                            // big_grid.setChannels(channels);
                            // big_grid.setChannels(ad_channels);
                            // big_grid.render();

                            // //get the width for each big_grid cell
                            // cell_width = big_grid.getNarrowCellWidth();
                            // programming_headers = new programmingHeaders('packageHeaderContainer',featured_packages,cell_width);
                            // programming_headers.render();

                            // //rotate package headers
                            // programming_headers.rotate(config.localhost,config.deg,config.y_diff);

                            // //activate the search box
                            // search_box = new searchBox('txtSearch',big_grid,'messageBox','reset','active');
                            // search_box.autoSearch();

                            // //initialize column sorting
                            // column_sorter = new columnSorter('channel_name',nameSorter,channelNumberSorter,callLetterSorter,genreSorter,
                            //                             channelNameSortStart,channelNumberSortStart,callLetterSortStart,genreSortStart);
                            // column_sorter.enableChannelNameSort();
                            // column_sorter.enableChannelNumberSort();
                            // column_sorter.enableCallLetterSort();
                            // column_sorter.enableGenreSort();

                            // //initialize tooltip
                            // tooltip = new toolTip(tool_tip_btn);
                            // //activate the genre codes tooltip
                            // //tooltip.genreToolTip(genre_codes_container);

                            // //initiate the comment btn
                            // class_name = 'comment-btn'; //add a class of comment-btn
                            // comment_btn = new commentBtn(btn,class_name,config.baseUrlPath);
                            // comment_btn.init();

                            // $('#channel_lineup .table-header').width($('#channel_lineup #container').width() + 16);
                            // $('.slick-viewport').width($('#channel_lineup #container').width());
                            // //activate the package filters
                            // big_grid.activateHdChannelsFilter(search_box,'messageBox','reset','active');
                            // big_grid.activateRegularChannelsFilter(search_box,'messageBox','reset','active');
                            // // sort hack
                            // $('#container .slick-header-columns').children().eq(0).trigger('click');
                            // $('#container .slick-header-columns').children().eq(0).trigger('click');

                            $('#channel_lineup .alert').click(function(){
                                $('#genreCodes').show();
                            });
                            $('#cl_genreX').click(function(e){
                                e.stopPropagation();
                                $('#genreCodes').hide();
                            });

                            $scope.clLoaded = true;
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
                if (params == 'channel-lineup') {
                    stopWatching();
                    $http.get('assets/data/ChannelLineupRes.js').then(function successCallback(response) {
                        init(response);
                    }, function errorCallback(response) {
                        throw new Error('Data request failed:\n' + JSON.stringify(response));
                    });
                }
            },
            true
        );
    $scope.fChannels = {};
    $scope.pActive = null;
    $scope.hdActive = false;
    $scope.pFilter = function(sortOrder,hd) {
        $scope.tempText = null;
        $scope.inputText = null;
        $scope.pActive = sortOrder;
        $scope.hdActive = hd;
    };
    $scope.sortType = 'channelnamebold';
    $scope.reverse = false;
    $scope.sorter = function(clickType) {
        if ($scope.sortType == clickType) {
            $scope.reverse = !$scope.reverse;
        } else {
            $scope.reverse = false;
        }
        $scope.sortType = clickType;
    };
    $scope.$watch('tempText', function(newValue) {
        if (newValue) {
            $scope.inputText = newValue;
        }
    });
    $scope.clKeyPress = function($event){
        var keyCode = $event.which || $event.keyCode;
        $scope.pActive = null;
        $scope.hdActive = null;
        if (keyCode === 13) {
            $scope.msgQuery = $scope.tempText;
            $scope.tempText = null;
        }
    };
    $scope.clReset = function() {
        $scope.tempText = null;
        $scope.inputText = null;
        $scope.pActive = null;
        $scope.hdActive = null;
        $scope.msgQuery = null;
    }
}]);

app.filter('comReplace', [
    function() {
        return function(input) {
            if(input) {
                return input.replace('Business','Biz.').replace('Commercial','Com.');
            }
        }
    }
]).filter('xToBull', [
    function() {
        return function(input) {
            if(input) {
                return input.replace('x','&bull;');
            }
        }
    }
]).filter('byPackage', [
    function() {
        return function(input,sortOrder,hd) {
            if (input) {
                if (typeof sortOrder == 'number') {
                    var matches=[],
                        i,
                        len = input.length;
                    for (i=0;i<len;i++) {
                        if (input[i]['p'+(sortOrder)] == 'x') {
                            if (hd) {
                                if (input[i].isHD == 1) {
                                    matches.push(input[i]);
                                }
                            } else {
                                matches.push(input[i]);
                            }
                        }
                    }
                    return matches;
                } else {
                    return input;
                }
            }
        }
    }
]).filter('clSearch', [
    function() {
        return function(objs,model) {
            if (objs && model) {
                var matches = [],
                    parts = model.replace(/\, /g, ',').split(','),
                    columns = ['channelnamebold','channelnumber','callletters','anchors'];
                objs.forEach(function(obj) {
                    var objStr = '';
                    for (prop in obj) {
                        if (obj[prop] && obj.hasOwnProperty(prop) && columns.indexOf(prop) > -1) {
                            objStr += obj[prop];
                        }
                    }
                    parts.forEach(function(part) {
                        if ((part != '') && (new RegExp(part, 'i').test(objStr))) {
                            matches.push(obj);
                        }
                    });
                });
                return matches;
            }
            return objs;
        }
    }
]).filter('findPackage', [
    function() {
        return function(input,sortOrder,packages,prop) {
            if (input && sortOrder) {
                var found = null;
                packages.forEach(function(package) {
                    if (package.sortOrder == sortOrder) {
                        found = package;
                    }
                });
                return found[prop];
            }
        }
    }
]).directive('qTip', [function() {
    return {
        link: function(scope, elem, attrs) {
            $(elem).qtip({
                content: {
                    text: scope.package.description
                },
                position: {
                    my: 'top right',
                    at: 'bottom left',
                    target: this,
                    adjust: {
                        y: 50
                    }
                }
            });
        }
    };
}]);
