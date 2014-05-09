'use strict'

angular.module('BHF')
    .directive('discussionbox', function(API){
        return{
            templateUrl: "views/part/discussionbox.html",
            restrict: "E",
            replace: true,
            link: function ($scope) {
                $scope.isShowDisForm = false;
                $scope.adddisc = function(){
                    $scope.isShowDisForm = true;
                }
                $scope.canceldisc = function(){
                    $scope.isShowDisForm = false;
                }

            }
        }
    })
