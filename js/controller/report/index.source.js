'use strict'

angular.module('BHF')
    .controller('C_report', function ($scope, API) {
        /*finish_time和timestamp，后者是创建时间，未完成的项目是没有完成时间的。
         finish_time=开始时间|结束时间，用|分隔，可以只用一个时间，|结束时间，表示查结速时间之前的所有记录
         */
        $scope.$on('report:refresh', function (event, data) {
            var _data = {};  //start_time=1399790723523&end_time=1400136323523
            _data.start_time = data.starttime;
            _data.end_time = data.endtime;
            API.doAction('report/issue', _data, 'GET', function (data) {
                processData(data);
            })
        });

        function processData(data){
            //未分发的任务
            $scope.unassigned = data.unassigned;
            //已经分发的任务
            var assigned = data.assigned;
            // 没有任务的成员
            var empty = [];
            //有任务的成员情况
            var items = [];
            for (var i = 0; i < assigned.length; i++) {
                var obj = assigned[i];
                //1.检查有没有　todos 没有todos 放到empty
                if(obj.issue.length == 0){
                    empty.push(obj.member);
                }else{
                    items.push(obj);
                }
            }
            for (var i = 0; i < items.length; i++) {
                var completed = [],uncompleted = [];
                var issue_list = items[i].issue;
                for (var j = 0; j < issue_list.length; j++) {
                    var issue = issue_list[j];
                    if(issue.status == 'done'){
                        completed.push(issue);
                    }else{
                        uncompleted.push(issue);
                    }
                }
               items[i].uncompleted = uncompleted;
               items[i].completed = completed;
               delete  items[i].issue;
            }
            $scope.items = items;
            $scope.empty =empty;
        }
    })


