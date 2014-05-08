'use strict'

angular.module('BHF')
    .directive('disdetailform', function(API){
        return{
            templateUrl: "views/part/disdetailform.html",
            restrict: "E",
            replace: true,
            link: function ($scope) {

            }
        }
    })
