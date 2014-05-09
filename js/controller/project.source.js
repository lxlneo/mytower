'use strict'

angular.module('BHF')
    .controller('C_project', function ($scope, $rootScope, $routeParams, API) {
        $scope.router = $routeParams
    })