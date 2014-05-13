'use strict'

angular.module('BHF')
    .directive('commitlist', function(API){
        return{
            templateUrl: "views/part/commit/list.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $routeParams) {
                var api = 'project/' + $scope.router.project_id + '/commit';
                var cond = {limit: 5}
                if($scope.router.issue_id){
                    cond.limit = 9999
                    api += '/' + $scope.router.issue_id
                }else{

                }


                API.doAction(api, cond, function(data){
                    $scope.commitList = data;
                })
            }
        }
    })
