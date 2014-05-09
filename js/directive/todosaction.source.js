'use strict'

angular.module('BHF')
    .directive('todosaction', function(API){
        return{
            templateUrl: "views/part/todos_action.html",
            restrict: "E",
            replace: true,
            link: function ($scope) {

            }
        }
    })
