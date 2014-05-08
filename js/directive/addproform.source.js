'use strict'

angular.module('BHF')
    .directive('addproform', function(API){


        return{
            templateUrl: "views/part/addproform.html",
            restrict: "E",
            replace: true,
            link: function ($scope,$element) {
                $scope.isshowlist = true;
                $scope.showMemberList = function(){
                    $scope.isshowlist = true;
                }
                $scope.hideMemberList = function(){
                    $scope.isshowlist = false;
                }
            }
        }
    })
