'use strict'

angular.module('BHF')
    .directive('todoslist', function(API,$timeout){
        return{
            templateUrl: "views/part/todo/list.html",
            restrict: "E",
            replace: true,
            link: function ($scope) {
                function refresh(){
                    $scope.tags = ['bug', '需求', '支持', '功能'];
                }
                refresh();
                $scope.$on('issue:listrefresh',function(){
                    $scope.tags = [];
                    $timeout(function(){$scope.tags = ['bug', '需求', '支持', '功能']},500);
                })
            }
        }
    })
