'use strict'

angular.module('BHF')
    .directive('todosaction', function (API) {
        return{
            templateUrl: "views/part/issue/action.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $element) {
                var issue = $scope.item;
                var status = issue.status;
                // 判断状态 doing 正在处理中
                $scope.showpause = status == 'doing';
                //更新状态
                function _update_status(status) {
                    API.doAction('project/' + issue.project_id +'/issue/' + issue.id + '/status', {status: status}, "PUT", function (data) {
                        //$scope.$emit('issue:save');
                        $scope.$emit('filter:init');
                    });
                }

                // 编辑
                function _edit() {
                    $scope.$emit('issue:showedit',issue);
                }

                // 删除
                function _delete() {
                    if(confirm("确认要删除吗？")){
                        _update_status('trash');
                    }
                }

                $scope.clickAction = function (action) {
                    switch (action) {
                        case 'doing':
                            _update_status('pause');
                            break;
                        case 'pause':
                            _update_status('doing');
                            break;
                        case 'edit':
                            _edit();
                            break;
                        case 'delete':
                            _delete();
                            break;
                    }
                }
            }
        }
    })
