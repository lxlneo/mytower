'use strict'

angular.module('BHF')
    .directive('todos', function(API){
        return{
            templateUrl: "views/part/todo/todos.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $element) {
                $scope.showform = false;
                var loadIssue = function(_data){
                    var url = 'project/' + $scope.router.project_id + '/issue'
                    var data = {
                        status: 'undone',
                        limit: 4,
                        offset: 0,
                        tag: $scope.tag||$scope.router.tag
                    }
                    data = angular.extend(data,_data);
                    API.doAction(url, data, function(result){
                        $scope.data = result;
                    })
                }

                //当issue被保存
                $scope.$on('issue:save', function(event){
                    console.log('issue:save init emit');
                    //判断是否存在过滤器
                    if($scope.router.tag !== void(0)){
                        $scope.$broadcast('filter:init');
                    }else{
                        loadIssue();
                    }
                })

                //issue refresh
                $scope.$on('issue:refresh',function(event,data){
                    loadIssue(data);
                });

                $scope.$on('issue:showedit',function(e,data){
                    $scope.$broadcast('issue:filledit',data);
                })

                $scope.$broadcast('issue:save');
                
            }
        }
    })
