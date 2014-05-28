'use strict'

angular.module('BHF')
    .controller('C_commit', function ($scope, $rootScope, $routeParams, API) {
        $scope.router = $routeParams;
        $scope.project_id = $routeParams.project_id
        $scope.allCommit = true;

        $scope.$on('pagination:do',function(e,data){
            $scope.pager = data;
        })

        $scope.getNumber = function(num) {
            return new Array(num);   
        }
        $scope.gotoPage = function(pageIndex){
            var pager = angular.extend({},$scope.pager);
            pager.pageIndex = pageIndex;
            delete(pager.offset);
            $scope.$emit("commit:refresh",pager);
        }
        $scope.equals = function(o1,o2){
            return angular.equals(o1,o2);
        }
    })