'use strict'

angular.module('BHF')
    .controller('C_issue_full_list', function ($scope, $rootScope, $routeParams, API) {
        $scope.router = $routeParams;
        $rootScope.project_id = $scope.router.project_id;
        //$scope.$broadcast("issue:save", {limit: 20, tag: $scope.router.tag});
        $scope.$on("assign:save", function () {
            $scope.$broadcast("issue:save");
        })
        $scope.filter_tag = $scope.router.tag;
        $scope.$on("issue:filter", function (evnet,data) {
            data.limit = 50;
            $scope.$broadcast("issue:refresh", data);
        })
    })