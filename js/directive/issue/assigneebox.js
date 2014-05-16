'use strict'

angular.module('BHF')
    .directive('assigneebox', function (API) {
        var dpOpt = {
            format: 'yyyy-mm-dd HH:ii', //时间格式
            autoclose: true, //点击后立刻关闭
            language: "zh-CN", //语言包
            minView: "0", //时间最小粒度
            weekStart: 1 //一周从星期一开始
        };

        return{
            templateUrl: "views/part/issue/assigneebox.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $element) {
                init();

                function init(){
                    //获得　ｍｅｍｂｅｒｌｉｓｔ
                    API.doAction('member', {}, 'GET',function(data){
                        $scope.member_list = data.items;
                    });
                    //配置日期
                    $('#duedate').datetimepicker(dpOpt);
                    $scope.is_show_due_date = false;
                }

                $scope.isshowmember = false;
                //显示assigneebox
                $scope.$on('assigneebox:show', function (event, data) {
                    $scope.show_assigneebox = true;
                    $scope.top = data.top;
                    $scope.left = data.left;
                });

                //显示memberlist
                $scope.showmemberlist = function(){
                    $scope.isshowmember = true;
                }
                $scope.show_due_date = function(){
                    $scope.is_show_due_date = true;
                }
                $scope.set_owner = function($event){
                    var member = {};
                    member.id = $($event.target).data('id');
                    member.name = $($event.target).data('name');
                    $scope.assigninfo.member = member;
                    $scope.owener = member.name;
                    $scope.isshowmember = false;
                }

                // 隐藏assigneebox
                $scope.hideassigneebox = function () {
                    $scope.show_assigneebox = false;
                }

                // 向后台提交数据
                $scope.set_owner_due = function () {

                }

                //清除选定的信息
                $scope.clean_assginee = function (type) {
                    type == 'due' ? $scope.due_date = "" : $scope.owener = "";
                }

                // 责任人和预计时间
                $scope.assigninfo = {
                    member:{},
                    due: ""
                }

            }
        }
    })
