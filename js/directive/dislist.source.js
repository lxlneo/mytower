'use strict'

angular.module('BHF')
    .directive('discussionlist', function(API){
        return{
            templateUrl: "views/part/dislist.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $routeParams) {
                var api = 'project/' + $scope.router.id + '/comment'
                var data = {limit: 10}
                API.doAction(api, data, function(data){
                    $scope.data = data;
                })
            }
        }
    })
