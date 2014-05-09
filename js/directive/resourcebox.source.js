'use strict'

angular.module('BHF')
    .directive('resourcebox', function(API){
        return{
            templateUrl: "views/part/resourcebox.html",
            restrict: "E",
            replace: true,
            link: function ($scope) {

            }
        }
    })
