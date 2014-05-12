'use strict'

angular.module('BHF')
    .directive('commitlist', function(API){
        return{
            templateUrl: "views/part/commit/list.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $routeParams) {
                var api = 'project/' + $scope.router.id + '/commit';
                $scope.project_id = $scope.router.id;
                var cond = {limit: 5}

                API.doAction(api, cond, function(data){
                    $scope.commitList = data;
                })
            }
        }
    })
