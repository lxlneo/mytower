'use strict'

angular.module('BHF')
    .directive('discussionbox', function(API){
        return{
            templateUrl: "views/part/discussionbox.html",
            restrict: "E",
            replace: true,
            link: function ($scope) {
                $scope.isShowDisForm = true;
            }
        }
    })
