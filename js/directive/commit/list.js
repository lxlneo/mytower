'use strict'

angular.module('BHF')
    .directive('commitlist', function(API){
        return{
            templateUrl: "views/part/commit/list.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $routeParams) {
                var api = 'project/' + ($scope.project_id || $scope.router.project_id)

                var pageSize = $scope.allCommit ? 20 : 5
                var cond = {pageSize: pageSize}
                if($scope.router.issue_id){
                    cond.pageSize = 9999
                    api += '/issue/' + $scope.router.issue_id
                }else{

                }

                api += '/commit';

                API.doAction(api, cond, function(data){
                    delete(data.pagination.limit);
                    $scope.commitList = data;
                    $scope.$broadcast('pagination:do',data.pagination);
                })

                $scope.$on('pagination:goto',function(e,data){
                    angular.extend(data,cond)
                    API.doAction(api, data, function(result){
                        $scope.commitList = result;
                        delete(result.pagination.limit);
                        $scope.$broadcast('pagination:do',result.pagination)
                    })

                })
            }
        }
    })
