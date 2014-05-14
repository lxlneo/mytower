'use strict'

angular.module('BHF')
    .controller('C_file_full_list', function ($scope, $rootScope, $routeParams, API) {
        $scope.router = $routeParams;
        $rootScope.project_id = $scope.router.project_id;
        $scope.$broadcast('asset:bhfupdate',{limit:20});
    })