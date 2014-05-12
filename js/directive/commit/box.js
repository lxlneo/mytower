'use strict'

angular.module('BHF')
    .directive('commitbox', function(API){
        return{
            templateUrl: "views/part/commit/box.html",
            restrict: "E",
            replace: true,
            link: function ($scope) {

            }
        }
    })
