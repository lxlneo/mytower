'use strict'

angular.module('BHF')
    .directive('assigneebox', function (API) {
        return{
            templateUrl: "views/part/issue/assigneebox.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $element) {
                $scope.$on('assigneebox:show', function (event, data) {
                    $scope.show_assigneebox = true;
                    $scope.top = data.top;
                    $scope.left = data.left;
                });

                $scope.hideassigneebox = function(){
                    $scope.show_assigneebox = false;
                }

                $scope.set_owner_due = function(){

                }

                $scope.assigninfo = {
                    owner:
                }
            }
        }
    })
