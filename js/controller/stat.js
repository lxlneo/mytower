'use strict'

angular.module('BHF')
    .controller('C_stat', function ($scope, $rootScope, $routeParams, API) {
        $scope.router = $routeParams;
        $scope.project_id = $routeParams.project_id

        var api = 'project/' +  $scope.project_id + '/stat'
        API.doAction(api, {}, function(data){
            $scope.stat = data
            $scope.today = moment().format('YYYY-MM-DD')
        })
    })