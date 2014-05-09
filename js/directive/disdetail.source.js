'use strict'

angular.module('BHF')
    .directive('disdetailform', function(API){
        return{
            templateUrl: "views/part/disdetailform.html",
            restrict: "E",
            replace: true,
            scope: {
                showtitle:'&'
            },
            link: function ($scope,$element) {
                var show =$scope.showtitle();
                var e = $($element).find("[type='title']");
                show ? e.show(): e.hide();
                var textarea =  $element.find('textarea');
                var editor = new Simditor({
                    textarea: textarea
                });
            }
        }
    })
