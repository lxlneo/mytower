'use strict'

angular.module('BHF')
    .directive('todos_action', function(API){
        return{
            templateUrl: "views/part/todos_action.html",
            restrict: "E",
            replace: true,
            link: function ($scope) {

            }
        }
    })
