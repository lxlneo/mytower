'use strict'

angular.module('BHF')
    .directive('assigneebox', function ($rootScope, API) {
        var dpOpt = {
            format: 'yyyy-mm-dd', //时间格式
            autoclose: true, //点击后立刻关闭
            language: "zh-CN", //语言包
            minView: "3", //时间最小粒度
            weekStart: 1 //一周从星期一开始
        };

        return{
            templateUrl: "views/part/issue/assigneebox.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $element) {
                var issue;
                init();
                function init() {
                    //获得　memberlist
                    API.doAction('member', {}, 'GET', function (data) {
                        $scope.member_list = data.items;
                    });
                    //配置日期
                    $('#duedate').datetimepicker(dpOpt);
                    $scope.is_show_due_date = false;
                    $scope.isshowmember = false;
                }

                //显示assigneebox
                $scope.$on('assigneebox:show', function (event, data) {
                    $scope.show_assigneebox = true;
                    var position = data.position;
                    issue = data.issue;
                    $scope.top = position.top;
                    $scope.left = position.left;
                    $scope.due_date = issue.due?moment(issue.due).format("YYYY-MM-DD"):"";
                    $scope.owener = issue.owner_name;
                    //保存初始值
                    $scope.assigninfo.due = $scope.due_date;
                    $scope.assigninfo.member.id = issue.owner_id;
                    $scope.assigninfo.member.name = issue.owner_name;
                });

                //显示memberlist
                $scope.showmemberlist = function () {
                    $scope.isshowmember = true;
                }

                //设定选择的 拥有人
                $scope.set_owner = function ($event) {
                    var member = {};
                    member.id = $($event.target).data('mid');
                    member.name = $($event.target).data('name');
                    $scope.assigninfo.member = member;
                    $scope.owener =  member.name;
                    $scope.isshowmember = false;
                }

                // 隐藏assigneebox  同时清除 人和时间框的数据
                $scope.hide_assignee_box = function () {
                    $scope.show_assigneebox = false;
                    $scope.isshowmember = false;
                    $scope.due_date = "";
                    $scope.owener = "";
                    $scope.assigninfo.member = {};
                    $scope.assigninfo.due = "";
                }
                $scope.$watch('due_date',function(newValue,oldValue){
                    if(newValue !==oldValue){
                        $scope.due_date = newValue;
                        $scope.assigninfo.due = newValue;
                    }
                })

                // 向后台提交数据
                $scope.set_owner_due = function () {
                    var data = {owner: "", plan_finish_time: ""};
                    data.owner = $scope.assigninfo.member.id||"";
                    data.plan_finish_time = $scope.assigninfo.due ? moment($scope.assigninfo.due).unix() * 1000 : '';
                    var url = "project/" + $scope.router.project_id + "/issue/" + issue.id+"";
                    API.doAction(url, data, 'PUT', function (_data) {
                        // 清空assignbox
                        $scope.hide_assignee_box();
                        // 触发刷新事件
                        $scope.$emit('assign:save');
                    })
                }

                //清除选定的信息
                $scope.clean_assginee = function (type) {
                    type == 'due' ? $scope.due_date = "" : $scope.owener = "";
                    type == 'due' ? $scope.assigninfo.due = "" : $scope.assigninfo.member = {};
                }

                // 责任人和预计时间
                $scope.assigninfo = {
                    member: {},
                    due: ""
                }

            }
        }
    })
