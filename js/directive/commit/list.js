'use strict'

angular.module('BHF')
    .directive('commitlist', function(API){
        return{
            templateUrl: "views/part/commit/list.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $routeParams) {
                console.log($scope)
                var api = 'project/' + $scope.project.id + '/commit';
                var cond = {limit: 5}
                if($scope.issue){
                    cond.limit = 9999
                    api += '/' + $scope.issue.id
                }else{

                }


                API.doAction(api, cond, function(data){
                    $scope.commitList = data;
                })
            }
        }
    })
