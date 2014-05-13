'use strict'

angular.module('BHF')
    .directive('finishtodo', function (API) {
        return{
            templateUrl: "views/part/issue/tofinish.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $element) {
                var issue = $scope.item;

                $scope.finishIssue = function(){
                    _update_status('done');
                }

                //更新状态
                function _update_status(status) {
                    API.doAction('project/' + issue.project_id + '/issue/' + issue.id + '/status', {status: status}, "PUT", function (data) {
                        $scope.$emit('issue:save');
                        alert('骚年不错啊！');
                    });
                }
            }
        }
})
