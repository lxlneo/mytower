'use strict'

angular.module('BHF')
    .controller('C_commit', function ($scope, $rootScope, $routeParams, API) {
        $scope.router = $routeParams;
        $scope.project_id = $routeParams.project_id
        $scope.allCommit = true
    })