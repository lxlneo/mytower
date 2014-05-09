'use strict'

angular.module('BHF')
    .directive('todoslist', function(API){
        return{
            templateUrl: "views/part/todos_list.html",
            restrict: "E",
            replace: true,
            link: function ($scope) {
                $scope.todolists = [{name:'bug'},{name:'需求'},{name:'支持'},{name:'功能'}];
            }
        }
    })
