'use strict'

angular.module('BHF')
    .directive('completedtodos', function(API){
        return{
            templateUrl: "views/part/completedtodos.html",
            restrict: "E",
            replace: true,
            link: function ($scope) {
                var list = new Array();
                for (var i = 0; i < 10; i++) {
                    var obj = new Object();
                    obj.name = "name"+i;
                    list.push(obj);
                }
                $scope.msglist = list;
            }
        }
    })
