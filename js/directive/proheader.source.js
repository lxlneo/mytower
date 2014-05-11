'use strict'

angular.module('BHF')
    .directive('proheader', function(API){
        return{
            templateUrl: "views/part/proheader.html",
            restrict: "E",
            replace: true,
            link: function ($scope,$element) {

                }
            }
    })
