'use strict'

angular.module('BHF')
    .directive('todosbox', function(API){
        return{
            templateUrl: "views/part/todosbox.html",
            restrict: "E",
            replace: true,
            link: function ($scope) {
                $scope.isShowTodolistForm = true;
            }
        }
    })
