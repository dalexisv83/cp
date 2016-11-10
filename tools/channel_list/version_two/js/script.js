/*global AdSales, smallGrid, config, bigGrid, searchBox, programmingHeaders, columnSorter, reset, toolTip, commentBtn */
/*jslint newcap: true */
var featured_packages = data.featured_packages.sort(function(a, b) {
    "use strict";
        return a.sortOrder - b.sortOrder;
    }),
    channels = data.channels,
    ad_channels = AdSales.channels,
    data_type = data.type;

$(function () { 
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
    small_grid.render();

    //small grid columns are the same with the big grid
    columns = small_grid.getColumns();

    //initialize the big grid
    big_grid = new bigGrid(config.rowHeightTall,'container',featured_packages,data_type);
    big_grid.setOptions(true,false);
    big_grid.setColumns(columns);
    big_grid.setChannels(channels);
    big_grid.setChannels(ad_channels);
    big_grid.render();

    //activate the search box
    search_box = new searchBox('txtSearch',big_grid,'messageBox','reset','active');
    search_box.autoSearch();

    //activate the package filters
    big_grid.activateHdChannelsFilter(search_box,'messageBox','reset','active');
    big_grid.activateRegularChannelsFilter(search_box,'messageBox','reset','active');

    //get the width for each big_grid cell
    cell_width = big_grid.getNarrowCellWidth();
    programming_headers = new programmingHeaders('packageHeaderContainer',featured_packages,cell_width);
    programming_headers.render();

    //rotate package headers
    programming_headers.rotate(config.localhost,config.deg,config.y_diff);

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

    // hack
    $('#container .slick-header-columns').children().eq(0).trigger('click');
    $('#container .slick-header-columns').children().eq(0).trigger('click');
});
