'use strict'

angular.module('BHF')
    .directive('issuefilter', function() {
        return{
            templateUrl: "views/part/issue/filter.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $element) {

            }
        }
    })
