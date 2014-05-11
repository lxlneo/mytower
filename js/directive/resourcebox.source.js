'use strict'

angular.module('BHF')
    .directive('resourcebox', function(API){
        return{
            templateUrl: "views/part/resource_box.html",
            restrict: "E",
            replace: true,
            link: function ($scope) {

            }
        }
    })
