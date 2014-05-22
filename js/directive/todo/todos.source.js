'use strict'

angular.module('BHF')
    .directive('todos', function($location,API){
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
                $scope.$on('issue:save', function(event,data){
                    console.log('issue:save init emit')
                    loadIssue(data);
                })

                $scope.$on('issue:showedit',function(e,data){
                    $scope.$broadcast('issue:filledit',data);
                })
                //触发 filter过滤 初始化. 由于自定义指令编译顺序问题,主view编译完成触发事件后,todos未编译完成,因此无法监听事件
                if($location.url().indexOf("issue/tag") !== -1){
                    $scope.$broadcast('filter:init');
                }else{
                    loadIssue();
                }
                
            }
        }
    })
