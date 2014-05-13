'use strict'

angular.module('BHF')
    .directive('commitlist', function(API){
        return{
            templateUrl: "views/part/commit/list.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $routeParams) {
                var api = 'project/' + ($scope.project_id || $scope.router.project_id)
                var cond = {limit: 5}
                if($scope.router.issue_id){
                    cond.limit = 9999
                    api += '/issue/' + $scope.router.issue_id
                }else{

                }

                api += '/commit';

                API.doAction(api, cond, function(data){
                    $scope.commitList = data;
                })
            }
        }
    })
