'use strict'

angular.module('BHF')
    .directive('minimemberlist', function(API){

        return{
            templateUrl: "views/part/member/minilist.html",
            restrict: "E",
            replace: true,
            link: function ($scope,$element) {
                API.doAction('member', {}, function(data){
                    $scope.memberList = data
                });
            }
        }
    })