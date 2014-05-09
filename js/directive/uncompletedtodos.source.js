'use strict'

angular.module('BHF')
    .directive('uncompletedtodos', function(API){
        return{
            templateUrl: "views/part/uncompleted_todos.html",
            restrict: "E",
            replace: true,
            link: function ($scope) {
               $scope.todos = ["A","B"];
            }
        }
    })
