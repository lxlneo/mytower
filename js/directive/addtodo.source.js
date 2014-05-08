'use strict'

angular.module('BHF')
    .directive('addtodo', function(API){
        return{
            templateUrl: "views/part/addtodo.html",
            restrict: "E",
            replace: true,
            link: function ($scope) {
                $scope.isShowtodoForm = true;
            }
        }
    })
