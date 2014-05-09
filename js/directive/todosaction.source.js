'use strict'

angular.module('BHF')
    .directive('todosaction', function(API){
        return{
            templateUrl: "views/part/todosaction.html",
            restrict: "E",
            replace: true,
            link: function ($scope) {

            }
        }
    })
