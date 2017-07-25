/*jslint unparam: true*/
(function(angular) {
    'use strict';
    angular.module('channelspackages', ['ngSanitize', 'vs-repeat', 'ngCookies'])
        .config(['$httpProvider', function ($httpProvider) {
            cache: true
        }]);
}(window.angular));
/*jslint unparam: false*/

var max_limit = 10000, //the maximum limit for ng-repeat to display
    min_limit = 16,  //the minimum limit for ng-repeat to display
    localhost = true, //change this to false on production/staging
    app = angular.module('channelspackages'); // angular.module('App', ['angular-growl','ngSanitize']);


app.directive('chosen',['$timeout',function($timeout){
    'use strict';
    var linker = function(scope,element,attrs){
       var stopWatching = scope.$watch('$parent.pcLoaded', function() {
        if (scope.$parent.pcLoaded) {
       var list = attrs.chosen;
    
       scope.$watch(list,function(){
	   element.trigger('chosen:updated');
       });
       
       scope.$watch(attrs.ngModel, function() {          
	   element.trigger('chosen:updated');
       });
    
       element.chosen();
       
       if (window.PIE) {
	    $timeout(function () {
		window.PIE.attach(angular.element(element).parent().find(".chosen-single")[0]);	      
		window.PIE.attach(angular.element(element).parent().find(".chosen-drop")[0]);	      
	    });
       }
       stopWatching();
     }
       });
    };
    
    return{
     restrict:'A',
     link: linker
    };
    
}]).directive("scrollToTopWhen", ['$timeout',function ($timeout) {
    'use strict';
    return {
	link: function (scope, element, attrs) {
		scope.$on(attrs.scrollToTopWhen, function () {
		    $timeout(function () {
		       angular.element(element)[0].scrollTop = 0;
		    });
		});
	    }
    };
}]).directive("ngWindowPie", ['$timeout', function ($timeout) {
    'use strict';
    /*jslint unparam: true*/
    return function (scope, element, attrs) {
	if (window.PIE) {
	    $timeout(function () {
		window.PIE.attach(angular.element(element)[0]);	      
	    });
	}
    };   
}]).directive('qTip', [function () {
    return {
        link: function (scope, elem, attrs) {
            attrs.qTipAdjustY = attrs.qTipAdjustY ? attrs.qTipAdjustY : 0;
            $(elem).qtip({
                content: {
                    text: attrs.qTip
                },
                position: {
                    my: attrs.qTipMy,
                    at: attrs.qTipAt,
                    target: this,
                    adjust: {
                        y: attrs.qTipAdjustY * 1
                    }
                }
            });
        }
    };
}]);
/*jslint unparam: false*/

app.directive('whenScrolled', function() {
    'use strict';
    return function(scope, elm, attr) {
        var raw = elm[0];
        elm.bind('scroll', function() {
            if(raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                scope.$apply(attr.whenScrolled);
            }
        });
    };
    
});