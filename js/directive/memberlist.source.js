'use strict'

angular.module('BHF')
    .directive('memberlist', function(API){
        var memberList;

        return{
            templateUrl: "views/part/memberlist.html",
            restrict: "E",
            replace: true,
            link: function ($scope,$element) {
                           $scope.members = memberList;
            }
        }
    })
