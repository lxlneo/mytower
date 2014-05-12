'use strict'

angular.module('BHF')
    .directive('filelist', function(API){
        return{
            templateUrl: "views/part/filelist.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $routeParams) {
                var api = 'project/' + $scope.router.id + '/comment';
                $scope.project_id = $scope.router.id;
                var data = {limit: 6}

                API.doAction(api, data, function(data){
                    $scope.data = data;
                })
            }
        }
    })
