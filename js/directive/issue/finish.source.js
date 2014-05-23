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
                    $scope.done = !$scope.done;
                    if($scope.done){
                        _update_status('done');
                    }else{
                        _update_status('doing');
                    }
                }

                $scope.done = issue.status === 'done';

                //更新状态
                function _update_status(status) {
                    console.log("do in task is" + status)
                    API.doAction('project/' + issue.project_id + '/issue/' + issue.id + '/status', {status: status}, "PUT", function (data) {     
                        $scope.$emit('issue:save');
                    });
                }
            }
        }
})
