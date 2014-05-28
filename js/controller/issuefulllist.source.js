'use strict'

angular.module('BHF')
    .controller('C_issue_full_list', function ($scope, $rootScope, $routeParams, API) {
        var calculatePagination;
        $scope.router = $routeParams;
        $rootScope.project_id = $scope.router.project_id;
        //$scope.$broadcast("issue:save", {limit: 20, tag: $scope.router.tag});
        $scope.$on("assign:save", function () {
            $scope.$broadcast("issue:save");
        })
        $scope.filter_tag = $scope.router.tag;
        $scope.$on("issue:filter", function (evnet,data) {
            data.pageSize = 10;
            $scope.$broadcast("issue:refresh", data);
        })

        $scope.$on('pagination:do',function(e,data){
            console.log('pagination:do is',data,"\n====");
            $scope.pager = data;
        })

        $scope.getNumber = function(num) {
            return new Array(num);   
        }
        $scope.gotoPage = function(pageIndex){
            console.log('go to ' + pageIndex);
            var pager = angular.extend({},$scope.pager);
            pager.pageIndex = pageIndex;
            console.log('send by event is',pager)
            delete(pager.offset);
            $scope.$broadcast("filter:init", pager);
        }
        $scope.equals = function(o1,o2){
            return angular.equals(o1,o2);
        }
    })