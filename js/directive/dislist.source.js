'use strict'

angular.module('BHF')
    .directive('discussionlist', function(API,$rootScope,$sce){
        return{
            templateUrl: "views/part/dislist.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $routeParams) {
                $scope.project_id = $scope.router.project_id;
                var api = 'project/' + $scope.project_id + '/discussion';
                var data = {limit: 6}
                function refresh(_data){
                    _data = angular.extend(data,_data);
                    API.doAction(api, _data, function(data){
                        console.log(data);
                        $scope.data = data;
                        $scope.show_dis_more = data.pagination.count > 0;
                    })
                }
                refresh(data);
                $scope.$on("discusslist:update",function(event,data){
                    refresh(data);
                });

                $scope.tohtml = function(str){
                   return $sce.trustAsHtml($(str).text().substr(0,200));
                }
            }
        }
    })
