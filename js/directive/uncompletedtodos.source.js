'use strict'

angular.module('BHF')
    .directive('uncompletedtodos', function(API){
        return{
            templateUrl: "views/part/uncompleted_todos.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $element) {
                var url = 'project/1/issue'
                var data = {
                    status: $element.parent().attr('data-status')
                }

                API.doAction(url, data, function(data){
                    $scope.data = data
                })
            }
        }
    })
