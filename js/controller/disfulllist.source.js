'use strict'

angular.module('BHF')
    .controller('C_dis_full_list', function ($scope, $rootScope, $routeParams, API) {
        $scope.router = $routeParams;
        $rootScope.project_id = $scope.router.project_id;
        $scope.$broadcast("discusslist:update",{limit:20});
    })