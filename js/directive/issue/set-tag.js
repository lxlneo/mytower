'use strict'

angular.module('BHF')
    .directive('issueSettag', function (API) {
        return{
            templateUrl: "views/part/issue/set-tag.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $element) {
                var show = function(flag){
                    $($element[0]).children('span').css("display",flag ? "none" : "inline");
                    $($element[0]).children('select').css("display",flag ? "inline":"none").focus();
                }

                $scope.showIssueTag = function(){
                    show(true);
                }

                $scope.updateTag = function(){
                    show(false);
                    var api = 'project/' + $scope.router.project_id + '/issue';
                    API.doAction(api, $scope.single_issue, 'PUT',function(){})
                }

                $scope.cancelUpdateTag = function(){
                    show(false);
                }
            }
        }
    })
