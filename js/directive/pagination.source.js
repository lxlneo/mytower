'use strict'

angular.module('BHF')
    .directive('pagination', function(){
        return{
            templateUrl: "views/pagination.html",
            restrict: "E",
            replace: true,
            link: function ($scope) {
                $scope.getNumber = function(num) {
                    return new Array(num);   
                }
                $scope.gotoPage = function(pageIndex){
                    var pager = angular.extend({},$scope.pager);
                    pager.pageIndex = pageIndex;
                    delete(pager.offset);
                    $scope.$emit("pagination:goto",pager);
                }
                $scope.equals = function(o1,o2){
                    return angular.equals(o1,o2);
                }

                $scope.$on('pagination:do',function(e,data){
                    console.log('pagination:do accept', data);
                    $scope.pager = data;
                })
            }
        }
    })