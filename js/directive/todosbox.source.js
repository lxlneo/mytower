'use strict'

angular.module('BHF')
    .directive('todosbox', function(API){
        return{
            templateUrl: "views/part/todos_box.html",
            restrict: "E",
            replace: true,
            link: function ($scope) {
                $scope.isShowTodolistForm = true;
            }
        }
    })
