'use strict'

angular.module('BHF')
    .directive('todoslist', function(API){
        return{
            templateUrl: "views/part/todo/list.html",
            restrict: "E",
            replace: true,
            link: function ($scope) {
                $scope.tags = ['bug', '需求', '支持', '功能'];
            }
        }
    })
