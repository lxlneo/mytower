'use strict'

angular.module('BHF')
    .directive('discussionlist', function(API,$rootScope){
        return{
            templateUrl: "views/part/dislist.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $routeParams) {
                var api = 'project/' + $rootScope.project_id + '/discussion';
                var data = {limit: 6}
                API.doAction(api, data, function(data){
                    $scope.data = data;
                })
            }
        }
    })
