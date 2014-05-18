'use strict'

angular.module('BHF')
    .controller('C_project', function ($scope, $rootScope, $routeParams, API) {
        $scope.router = $routeParams;
        $rootScope.project_id = $scope.router.project_id;
        $scope.$on('assign:save',function(event,data){
            $scope.$broadcast('issue:listrefresh');
        })
    })