'use strict'

angular.module('BHF')
    .directive('todoslist', function(API){
        return{
            templateUrl: "views/part/todoslist.html",
            restrict: "E",
            replace: true,
            link: function ($scope) {
                $scope.todolists = ["A","B"];
            }
        }
    })
